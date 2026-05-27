const db = require('../config/db');
const fs = require('fs');
const path = require('path');

function ensurePolicyUploadsDir() {
  const policiesDir = path.join(__dirname, '..', '..', 'uploads', 'policies');
  fs.mkdirSync(policiesDir, { recursive: true });
  return policiesDir;
}

function decodeDataUrl(dataUrl) {
  const match = String(dataUrl || '').match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error('Invalid attachmentData format, expected base64 data URL');
  }
  return {
    mimeType: match[1],
    buffer: Buffer.from(match[2], 'base64'),
  };
}

function resolveExtension(fileName, mimeType) {
  const originalExtension = path.extname(fileName || '').toLowerCase();
  if (originalExtension) return originalExtension;

  const mimeExtensions = {
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
    'image/png': '.png',
    'image/jpeg': '.jpg',
  };
  return mimeExtensions[mimeType] || '.bin';
}

async function ensurePolicySchema() {
  await db.query(`
    ALTER TABLE policy_item
      ADD COLUMN IF NOT EXISTS attachment_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS attachment_url TEXT
  `);
}

async function syncPolicyQaPair(policyId, title, keywords, content) {
  const qaId = `${policyId}-QA`;
  const question = [title, keywords].filter(Boolean).join(' ');
  await db.query(
    `INSERT INTO qa_pair (qa_id, policy_id, question, answer, priority)
     VALUES ($1, $2, $3, $4, $5)
     ON CONFLICT (qa_id)
     DO UPDATE SET question = EXCLUDED.question, answer = EXCLUDED.answer, priority = EXCLUDED.priority`,
    [qaId, policyId, question, content, 0]
  );
}

exports.searchPolicy = async (req, res) => {
  const { keyword, category } = req.query;
  try {
    await ensurePolicySchema();

    let query = `
      SELECT
        p.*,
        (
          SELECT q.question
          FROM qa_pair q
          WHERE q.policy_id = p.policy_id
          ORDER BY COALESCE(q.priority, 2147483647) ASC, q.qa_id ASC
          LIMIT 1
        ) AS question,
        (
          SELECT q.answer
          FROM qa_pair q
          WHERE q.policy_id = p.policy_id
          ORDER BY COALESCE(q.priority, 2147483647) ASC, q.qa_id ASC
          LIMIT 1
        ) AS answer
      FROM policy_item p
      WHERE 1=1
    `;
    const params = [];
    
    if (keyword) {
      params.push(`%${keyword}%`);
      query += `
        AND (
          p.title LIKE $${params.length}
          OR p.keywords LIKE $${params.length}
          OR p.content LIKE $${params.length}
          OR EXISTS (
            SELECT 1
            FROM qa_pair q
            WHERE q.policy_id = p.policy_id
              AND (q.question LIKE $${params.length} OR q.answer LIKE $${params.length})
          )
        )
      `;
    }
    
    if (category) {
      params.push(category);
      query += ` AND p.category = $${params.length}`;
    }

    query += ' ORDER BY p.policy_id DESC';

    const { rows } = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.maintainKnowledge = async (req, res) => {
  const { policy_id, title, category, keywords, content, status, attachmentName, attachmentData } = req.body;
  try {
    await ensurePolicySchema();

    const policyId = policy_id || `POL-${Date.now()}`;
    let attachmentNameToSave = attachmentName || null;
    let attachmentUrlToSave = null;

    if (attachmentData) {
      const { buffer, mimeType } = decodeDataUrl(attachmentData);
      if (buffer.length > 30 * 1024 * 1024) {
        return res.status(400).json({ error: '附件大小不能超过 30MB' });
      }

      const extension = resolveExtension(attachmentName, mimeType);
      const fileName = `${policyId}-${Date.now()}${extension}`;
      const filePath = path.join(ensurePolicyUploadsDir(), fileName);
      fs.writeFileSync(filePath, buffer);
      attachmentUrlToSave = `/uploads/policies/${fileName}`;
    }

    if (policy_id) {
      const { rows: currentRows } = await db.query(
        'SELECT attachment_name, attachment_url FROM policy_item WHERE policy_id = $1',
        [policyId]
      );
      if (!currentRows.length) {
        return res.status(404).json({ error: 'Knowledge item not found' });
      }

      if (!attachmentData) {
        attachmentNameToSave = currentRows[0].attachment_name;
        attachmentUrlToSave = currentRows[0].attachment_url;
      }

      const { rows } = await db.query(
        `UPDATE policy_item
         SET title = $2, category = $3, keywords = $4, content = $5, status = $6,
             attachment_name = $7, attachment_url = $8
         WHERE policy_id = $1
         RETURNING *`,
        [policyId, title, category, keywords, content, status || 'active', attachmentNameToSave, attachmentUrlToSave]
      );
      await syncPolicyQaPair(policyId, title, keywords, content);
      return res.json(rows[0]);
    }

    const { rows } = await db.query(
      `INSERT INTO policy_item
       (policy_id, title, category, keywords, content, status, attachment_name, attachment_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [policyId, title, category, keywords, content, status || 'active', attachmentNameToSave, attachmentUrlToSave]
    );
    await syncPolicyQaPair(policyId, title, keywords, content);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
