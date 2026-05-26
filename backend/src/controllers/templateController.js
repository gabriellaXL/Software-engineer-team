const db = require('../config/db');
const fs = require('fs');
const path = require('path');

function ensureTemplatesDir() {
  const templatesDir = path.join(__dirname, '..', '..', 'uploads', 'templates');
  fs.mkdirSync(templatesDir, { recursive: true });
  return templatesDir;
}

function decodeDataUrl(dataUrl) {
  const match = String(dataUrl || '').match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error('Invalid fileData format, expected base64 data URL');
  }
  const mimeType = match[1];
  const base64 = match[2];
  const buffer = Buffer.from(base64, 'base64');
  return { mimeType, buffer };
}

function resolveExtension(mimeType) {
  if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return '.docx';
  return '';
}

exports.uploadTemplate = async (req, res) => {
  const { name, type, fileData } = req.body;
  try {
    const templateId = `TPL-${Date.now()}`;
    const { buffer, mimeType } = decodeDataUrl(fileData);
    const extension = resolveExtension(mimeType);
    if (!extension) {
      return res.status(400).json({ error: '仅支持上传 .docx 模板文件' });
    }
    const templatesDir = ensureTemplatesDir();
    const fileName = `${templateId}${extension}`;
    const filePath = path.join(templatesDir, fileName);
    fs.writeFileSync(filePath, buffer);
    const fileUrl = `/uploads/templates/${fileName}`;

    const { rows } = await db.query(
      'INSERT INTO template_file (template_id, name, type, file_url, version) VALUES ($1, $2, $3, $4, $5) RETURNING template_id as id, name, type, file_url, version',
      [templateId, name, type, fileUrl, '1.0']
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTemplates = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT template_id as id, name, type, file_url, version FROM template_file ORDER BY template_id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query('SELECT file_url FROM template_file WHERE template_id = $1', [id]);
    await db.query('DELETE FROM template_file WHERE template_id = $1', [id]);

    const fileUrl = rows[0]?.file_url;
    if (fileUrl && fileUrl.startsWith('/uploads/templates/')) {
      const templatesDir = ensureTemplatesDir();
      const fileName = fileUrl.replace('/uploads/templates/', '');
      const filePath = path.join(templatesDir, fileName);
      fs.rmSync(filePath, { force: true });
    }
    res.json({ message: 'Template deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.downloadTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query('SELECT name, file_url FROM template_file WHERE template_id = $1', [id]);
    if (!rows.length) {
      return res.status(404).json({ error: 'Template not found' });
    }

    const fileUrl = rows[0].file_url;
    if (!fileUrl || !fileUrl.startsWith('/uploads/templates/')) {
      return res.status(404).json({ error: 'Template file not found' });
    }

    const templatesDir = ensureTemplatesDir();
    const fileNameOnDisk = fileUrl.replace('/uploads/templates/', '');
    const filePath = path.join(templatesDir, fileNameOnDisk);

    const extension = path.extname(fileNameOnDisk) || '.docx';
    const downloadName = `${rows[0].name || id}${extension}`;
    res.download(filePath, downloadName);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
