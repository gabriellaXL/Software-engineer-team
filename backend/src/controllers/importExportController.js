const XLSX = require('xlsx');
const db = require('../config/db');
const { ensureCoreTables } = require('../bootstrap/ensureCoreTables');

let noticeColumnsReady = false;
let policyColumnsReady = false;

async function ensureNoticeColumns() {
  if (noticeColumnsReady) return;
  await db.query(`
    CREATE TABLE IF NOT EXISTS notice (
      notice_id VARCHAR(50) PRIMARY KEY,
      title VARCHAR(200),
      target VARCHAR(100),
      content TEXT,
      summary TEXT,
      tags TEXT,
      audience_grades TEXT,
      attachment_name VARCHAR(255),
      attachment_data TEXT,
      type VARCHAR(50),
      publish_time TIMESTAMP,
      status VARCHAR(20)
    );
  `);
  await db.query(`
    ALTER TABLE notice
      ADD COLUMN IF NOT EXISTS summary TEXT,
      ADD COLUMN IF NOT EXISTS tags TEXT,
      ADD COLUMN IF NOT EXISTS audience_grades TEXT,
      ADD COLUMN IF NOT EXISTS attachment_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS attachment_data TEXT;
  `);
  noticeColumnsReady = true;
}

async function ensurePolicyColumns() {
  if (policyColumnsReady) return;
  await db.query(`
    CREATE TABLE IF NOT EXISTS policy_item (
      policy_id VARCHAR(50) PRIMARY KEY,
      title VARCHAR(200),
      category VARCHAR(50),
      keywords TEXT,
      content TEXT,
      attachment_name VARCHAR(255),
      attachment_url TEXT,
      status VARCHAR(20)
    )
  `);
  await db.query(`
    CREATE TABLE IF NOT EXISTS qa_pair (
      qa_id VARCHAR(50) PRIMARY KEY,
      policy_id VARCHAR(50) REFERENCES policy_item(policy_id),
      question TEXT,
      answer TEXT,
      priority INTEGER
    )
  `);
  await db.query(`
    ALTER TABLE policy_item
      ADD COLUMN IF NOT EXISTS attachment_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS attachment_url TEXT
  `);
  policyColumnsReady = true;
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

function buildWorksheetRows(headers, rows) {
  return rows.map((row) => {
    const normalized = {};
    headers.forEach((header) => {
      normalized[header.label] = row[header.key] ?? '';
    });
    return normalized;
  });
}

function sendWorkbook(res, filename, headers, rows) {
  const workbook = XLSX.utils.book_new();
  const worksheetRows = buildWorksheetRows(headers, rows);
  const worksheet = XLSX.utils.json_to_sheet(worksheetRows, {
    header: headers.map((header) => header.label)
  });
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`);
  res.send(buffer);
}

function parseWorkbookInput(fileData) {
  const text = String(fileData || '');
  if (!text.trim()) {
    throw new Error('请上传 Excel 文件内容');
  }

  let buffer;
  const match = text.match(/^data:.*;base64,(.+)$/);
  if (match) {
    buffer = Buffer.from(match[1], 'base64');
  } else {
    buffer = Buffer.from(text, 'base64');
  }

  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error('Excel 文件中没有可读取的工作表');
  }
  const worksheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
  if (rows.length < 2) {
    throw new Error('Excel 文件至少需要表头和一行数据');
  }

  return {
    labels: rows[0].map((item) => String(item || '').trim()),
    rows: rows.slice(1)
  };
}

function normalizeRole(role) {
  const value = String(role || '').trim();
  const roleMap = {
    student: 'student',
    '普通学生': 'student',
    student_leader: 'student_leader',
    '班团骨干': 'student_leader',
    admin: 'admin',
    '管理老师': 'admin',
    leader: 'leader',
    '学院领导': 'leader'
  };
  return roleMap[value] || '';
}

function normalizeStatus(status, fallback = 'active') {
  const value = String(status || '').trim().toLowerCase();
  const statusMap = {
    active: 'active',
    '启用': 'active',
    inactive: 'inactive',
    '停用': 'inactive',
    published: 'published',
    '已发布': 'published',
    pending: 'pending',
    '待审核': 'pending',
    draft: 'draft',
    '草稿': 'draft'
  };
  return statusMap[value] || fallback;
}

function isStudentRole(role) {
  return role === 'student' || role === 'student_leader';
}

function formatDate(value) {
  if (!value) return '';
  return String(value).slice(0, 10);
}

function formatDateTime(value) {
  if (!value) return '';
  return String(value).replace('T', ' ').slice(0, 16);
}

function normalizeDateTimeInput(value) {
  if (value === undefined || value === null) return null;
  const raw = String(value).trim();
  if (!raw) return null;

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error('节点日期时间格式无效');
  }

  const normalized = raw.replace('T', ' ');
  return normalized.length === 16 ? `${normalized}:00` : normalized;
}

async function runInTransaction(task) {
  await db.query('BEGIN');
  try {
    const result = await task();
    await db.query('COMMIT');
    return result;
  } catch (error) {
    await db.query('ROLLBACK');
    throw error;
  }
}

const IMPORT_EXPORT_TYPES = {
  users: {
    filenameBase: 'students-users',
    headers: [
      { key: 'accountId', label: '账号' },
      { key: 'password', label: '密码' },
      { key: 'name', label: '姓名' },
      { key: 'role', label: '角色' },
      { key: 'status', label: '状态' },
      { key: 'major', label: '专业' },
      { key: 'grade', label: '年级' },
      { key: 'phone', label: '手机号' },
      { key: 'department', label: '部门' }
    ],
    async exportRows() {
      const { rows } = await db.query(`
        SELECT
          u.account_id,
          u.password,
          u.role,
          u.status,
          COALESCE(sp.name, ap.name) AS name,
          sp.major,
          sp.grade,
          COALESCE(sp.phone, ap.phone) AS phone,
          ap.department
        FROM tb_user u
        LEFT JOIN student_profile sp ON sp.user_id = u.user_id
        LEFT JOIN admin_profile ap ON ap.user_id = u.user_id
        ORDER BY u.account_id
      `);
      return rows.map((row) => ({
        accountId: row.account_id,
        password: row.password || '',
        name: row.name || '',
        role: row.role,
        status: row.status,
        major: row.major || '',
        grade: row.grade || '',
        phone: row.phone || '',
        department: row.department || ''
      }));
    },
    async importRows(rows) {
      const result = { imported: 0, created: 0, updated: 0, failed: 0, errors: [] };

      for (let index = 0; index < rows.length; index += 1) {
        const row = rows[index];
        const accountId = String(row.accountId || '').trim();
        const role = normalizeRole(row.role);
        const name = String(row.name || '').trim();

        if (!accountId || !role || !name) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行缺少必填字段：账号、姓名、角色`);
          continue;
        }

        try {
          await runInTransaction(async () => {
            const { rows: existingUsers } = await db.query('SELECT * FROM tb_user WHERE account_id = $1', [accountId]);
            const existingUser = existingUsers[0];
            const status = normalizeStatus(row.status, 'active');
            const password = String(row.password || '').trim() || existingUser?.password || '123456';

            if (!existingUser) {
              const userId = `U-${Date.now()}-${index}`;
              await db.query(
                'INSERT INTO tb_user (user_id, role, account_id, password, status) VALUES ($1, $2, $3, $4, $5)',
                [userId, role, accountId, password, status]
              );

              if (isStudentRole(role)) {
                const studentId = `S-${Date.now()}-${index}`;
                await db.query(
                  `INSERT INTO student_profile (student_id, user_id, student_no, name, major, grade, phone)
                   VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                  [studentId, userId, accountId, name, row.major || '', row.grade || '', row.phone || '']
                );
              } else {
                const adminId = `A-${Date.now()}-${index}`;
                await db.query(
                  `INSERT INTO admin_profile (admin_id, user_id, name, department, role, phone)
                   VALUES ($1, $2, $3, $4, $5, $6)`,
                  [adminId, userId, name, row.department || '', role, row.phone || '']
                );
              }
              result.created += 1;
              result.imported += 1;
              return;
            }

            if (isStudentRole(existingUser.role) !== isStudentRole(role)) {
              throw new Error('暂不支持通过导入直接切换学生/管理员类型');
            }

            await db.query(
              'UPDATE tb_user SET role = $1, password = $2, status = $3 WHERE user_id = $4',
              [role, password, status, existingUser.user_id]
            );

            if (isStudentRole(role)) {
              await db.query(
                `UPDATE student_profile
                 SET student_no = $1, name = $2, major = $3, grade = $4, phone = $5
                 WHERE user_id = $6`,
                [accountId, name, row.major || '', row.grade || '', row.phone || '', existingUser.user_id]
              );
            } else {
              await db.query(
                `UPDATE admin_profile
                 SET name = $1, department = $2, role = $3, phone = $4
                 WHERE user_id = $5`,
                [name, row.department || '', role, row.phone || '', existingUser.user_id]
              );
            }

            result.updated += 1;
            result.imported += 1;
          });
        } catch (error) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行导入失败：${error.message}`);
        }
      }

      return result;
    }
  },
  process_nodes: {
    filenameBase: 'party-process-nodes',
    headers: [
      { key: 'nodeId', label: '节点ID' },
      { key: 'processType', label: '流程类型' },
      { key: 'nodeName', label: '节点名称' },
      { key: 'sequence', label: '顺序' },
      { key: 'startAt', label: '开始时间' },
      { key: 'dueAt', label: '截止时间' },
      { key: 'nodeDetail', label: '详细说明' },
      { key: 'attachmentName', label: '附件名称' },
      { key: 'attachmentData', label: '附件内容' },
      { key: 'reminderRule', label: '提醒规则' }
    ],
    async exportRows() {
      await ensureCoreTables();
      const { rows } = await db.query('SELECT * FROM party_process_node ORDER BY process_type, sequence ASC');
      return rows.map((row) => ({
        nodeId: row.node_id,
        processType: row.process_type,
        nodeName: row.node_name,
        sequence: row.sequence,
        startAt: formatDateTime(row.start_at || row.scheduled_at),
        dueAt: formatDateTime(row.due_at),
        nodeDetail: row.node_detail || '',
        attachmentName: row.attachment_name || '',
        attachmentData: row.attachment_data || '',
        reminderRule: row.reminder_rule || ''
      }));
    },
    async importRows(rows) {
      await ensureCoreTables();
      const result = { imported: 0, created: 0, updated: 0, failed: 0, errors: [] };

      for (let index = 0; index < rows.length; index += 1) {
        const row = rows[index];
        const processType = String(row.processType || '').trim() || 'party';
        const nodeName = String(row.nodeName || '').trim();
        const sequence = Number(row.sequence);
        const nodeId = String(row.nodeId || '').trim();
        const startAt = normalizeDateTimeInput(row.startAt || row.scheduledAt);
        const dueAt = normalizeDateTimeInput(row.dueAt);
        const nodeDetail = String(row.nodeDetail || '').trim();
        const attachmentName = String(row.attachmentName || '').trim();
        const attachmentData = String(row.attachmentData || '');

        if (!nodeName || !Number.isFinite(sequence)) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行缺少必填字段：节点名称、顺序`);
          continue;
        }

        try {
          await runInTransaction(async () => {
            let existing;
            if (nodeId) {
              const { rows: existingRows } = await db.query('SELECT * FROM party_process_node WHERE node_id = $1', [nodeId]);
              existing = existingRows[0];
            }
            if (!existing) {
              const { rows: existingRows } = await db.query(
                'SELECT * FROM party_process_node WHERE process_type = $1 AND node_name = $2',
                [processType, nodeName]
              );
              existing = existingRows[0];
            }

            if (existing) {
              await db.query(
                `UPDATE party_process_node
                 SET process_type = $1, node_name = $2, sequence = $3, scheduled_at = $4, start_at = $4, due_at = $5, node_detail = $6, attachment_name = $7, attachment_data = $8, reminder_rule = $9
                 WHERE node_id = $10`,
                [processType, nodeName, sequence, startAt, dueAt, nodeDetail, attachmentName, attachmentData, row.reminderRule || '', existing.node_id]
              );
              result.updated += 1;
            } else {
              await db.query(
                `INSERT INTO party_process_node (node_id, process_type, node_name, sequence, scheduled_at, start_at, due_at, node_detail, attachment_name, attachment_data, reminder_rule)
                 VALUES ($1, $2, $3, $4, $5, $5, $6, $7, $8, $9, $10)`,
                [nodeId || `NODE-${Date.now()}-${index}`, processType, nodeName, sequence, startAt, dueAt, nodeDetail, attachmentName, attachmentData, row.reminderRule || '']
              );
              result.created += 1;
            }
            result.imported += 1;
          });
        } catch (error) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行导入失败：${error.message}`);
        }
      }

      return result;
    }
  },
  notices: {
    filenameBase: 'notices',
    headers: [
      { key: 'noticeId', label: '通知ID' },
      { key: 'title', label: '标题' },
      { key: 'target', label: '目标人群' },
      { key: 'summary', label: '简介' },
      { key: 'content', label: '内容' },
      { key: 'tags', label: '标签' },
      { key: 'audienceGrades', label: '推送年级' },
      { key: 'attachmentName', label: '附件名称' },
      { key: 'attachmentData', label: '附件内容' },
      { key: 'type', label: '类型' },
      { key: 'status', label: '状态' },
      { key: 'publishTime', label: '发布时间' }
    ],
    async exportRows() {
      await ensureNoticeColumns();
      const { rows } = await db.query('SELECT * FROM notice ORDER BY publish_time DESC');
      return rows.map((row) => ({
        noticeId: row.notice_id,
        title: row.title,
        target: row.target,
        summary: row.summary || '',
        content: row.content,
        tags: row.tags || '',
        audienceGrades: row.audience_grades || '',
        attachmentName: row.attachment_name || '',
        attachmentData: row.attachment_data || '',
        type: row.type,
        status: row.status,
        publishTime: formatDate(row.publish_time)
      }));
    },
    async importRows(rows) {
      await ensureNoticeColumns();
      const result = { imported: 0, created: 0, updated: 0, failed: 0, errors: [] };

      for (let index = 0; index < rows.length; index += 1) {
        const row = rows[index];
        const noticeId = String(row.noticeId || '').trim();
        const title = String(row.title || '').trim();
        const content = String(row.content || '').trim();

        if (!title || !content) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行缺少必填字段：标题、内容`);
          continue;
        }

        try {
          await runInTransaction(async () => {
            let existing;
            if (noticeId) {
              const { rows: existingRows } = await db.query('SELECT * FROM notice WHERE notice_id = $1', [noticeId]);
              existing = existingRows[0];
            }

            if (existing) {
              await db.query(
                `UPDATE notice
                 SET title = $1, target = $2, summary = $3, content = $4, tags = $5, audience_grades = $6, attachment_name = $7, attachment_data = $8, type = $9, status = $10
                 WHERE notice_id = $11`,
                [
                  title,
                  row.target || '全体学生',
                  row.summary || '',
                  content,
                  row.tags || '',
                  row.audienceGrades || '',
                  row.attachmentName || '',
                  row.attachmentData || '',
                  row.type || '综合',
                  normalizeStatus(row.status, 'published'),
                  existing.notice_id
                ]
              );
              result.updated += 1;
            } else {
              await db.query(
                `INSERT INTO notice (notice_id, title, target, summary, content, tags, audience_grades, attachment_name, attachment_data, type, publish_time, status)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, CURRENT_TIMESTAMP, $11)`,
                [
                  noticeId || `N-${Date.now()}-${index}`,
                  title,
                  row.target || '全体学生',
                  row.summary || '',
                  content,
                  row.tags || '',
                  row.audienceGrades || '',
                  row.attachmentName || '',
                  row.attachmentData || '',
                  row.type || '综合',
                  normalizeStatus(row.status, 'published')
                ]
              );
              result.created += 1;
            }
            result.imported += 1;
          });
        } catch (error) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行导入失败：${error.message}`);
        }
      }

      return result;
    }
  },
  policies: {
    filenameBase: 'knowledge-policies',
    headers: [
      { key: 'policyId', label: '政策ID' },
      { key: 'title', label: '标题' },
      { key: 'category', label: '分类' },
      { key: 'keywords', label: '关键词' },
      { key: 'content', label: '内容' },
      { key: 'status', label: '状态' },
      { key: 'attachmentName', label: '附件名称' },
      { key: 'attachmentUrl', label: '附件地址' }
    ],
    async exportRows() {
      await ensurePolicyColumns();
      const { rows } = await db.query('SELECT * FROM policy_item ORDER BY policy_id DESC');
      return rows.map((row) => ({
        policyId: row.policy_id,
        title: row.title,
        category: row.category,
        keywords: row.keywords || '',
        content: row.content || '',
        status: row.status || 'active',
        attachmentName: row.attachment_name || '',
        attachmentUrl: row.attachment_url || ''
      }));
    },
    async importRows(rows) {
      await ensurePolicyColumns();
      const result = { imported: 0, created: 0, updated: 0, failed: 0, errors: [] };

      for (let index = 0; index < rows.length; index += 1) {
        const row = rows[index];
        const policyId = String(row.policyId || '').trim();
        const title = String(row.title || '').trim();
        const category = String(row.category || '').trim() || '证明类';
        const keywords = String(row.keywords || '').trim();
        const content = String(row.content || '').trim();
        const status = normalizeStatus(row.status, 'active');
        const attachmentName = String(row.attachmentName || '').trim();
        const attachmentUrl = String(row.attachmentUrl || '').trim();

        if (!title || !keywords || !content) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行缺少必填字段：标题、关键词、内容`);
          continue;
        }

        try {
          await runInTransaction(async () => {
            let existing;
            if (policyId) {
              const { rows: existingRows } = await db.query('SELECT * FROM policy_item WHERE policy_id = $1', [policyId]);
              existing = existingRows[0];
            }
            if (!existing) {
              const { rows: existingRows } = await db.query('SELECT * FROM policy_item WHERE title = $1', [title]);
              existing = existingRows[0];
            }

            if (existing) {
              await db.query(
                `UPDATE policy_item
                 SET title = $1, category = $2, keywords = $3, content = $4, status = $5,
                     attachment_name = $6, attachment_url = $7
                 WHERE policy_id = $8`,
                [
                  title,
                  category,
                  keywords,
                  content,
                  status,
                  attachmentName || existing.attachment_name || null,
                  attachmentUrl || existing.attachment_url || null,
                  existing.policy_id
                ]
              );
              await syncPolicyQaPair(existing.policy_id, title, keywords, content);
              result.updated += 1;
            } else {
              const newPolicyId = policyId || `POL-${Date.now()}-${index}`;
              await db.query(
                `INSERT INTO policy_item
                 (policy_id, title, category, keywords, content, status, attachment_name, attachment_url)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [newPolicyId, title, category, keywords, content, status, attachmentName || null, attachmentUrl || null]
              );
              await syncPolicyQaPair(newPolicyId, title, keywords, content);
              result.created += 1;
            }
            result.imported += 1;
          });
        } catch (error) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行导入失败：${error.message}`);
        }
      }

      return result;
    }
  },
  plans: {
    filenameBase: 'training-plans',
    headers: [
      { key: 'planId', label: '方案ID' },
      { key: 'name', label: '方案名称' },
      { key: 'grade', label: '适用年级' },
      { key: 'major', label: '专业方向' },
      { key: 'status', label: '状态' },
      { key: 'attachmentName', label: '培养方案文件名' },
      { key: 'attachmentData', label: '培养方案文件内容' },
      { key: 'updatedAt', label: '最近更新' }
    ],
    async exportRows() {
      await ensureCoreTables();
      const { rows } = await db.query('SELECT * FROM training_plan ORDER BY updated_at DESC');
      return rows.map((row) => ({
        planId: row.plan_id,
        name: row.name,
        grade: row.grade,
        major: row.major || '',
        status: row.status,
        attachmentName: row.attachment_name || '',
        attachmentData: row.attachment_data || '',
        updatedAt: formatDate(row.updated_at)
      }));
    },
    async importRows(rows) {
      await ensureCoreTables();
      const result = { imported: 0, created: 0, updated: 0, failed: 0, errors: [] };

      for (let index = 0; index < rows.length; index += 1) {
        const row = rows[index];
        const planId = String(row.planId || '').trim();
        const name = String(row.name || '').trim();
        const grade = String(row.grade || '').trim();

        if (!name || !grade) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行缺少必填字段：方案名称、适用年级`);
          continue;
        }

        try {
          await runInTransaction(async () => {
            let existing;
            if (planId) {
              const { rows: existingRows } = await db.query('SELECT * FROM training_plan WHERE plan_id = $1', [planId]);
              existing = existingRows[0];
            }
            if (!existing) {
              const { rows: existingRows } = await db.query(
                'SELECT * FROM training_plan WHERE name = $1 AND grade = $2',
                [name, grade]
              );
              existing = existingRows[0];
            }

            if (existing) {
              await db.query(
                `UPDATE training_plan
                 SET name = $1, grade = $2, major = $3, status = $4, attachment_name = $5, attachment_data = $6, updated_at = CURRENT_TIMESTAMP
                 WHERE plan_id = $7`,
                [name, grade, row.major || '', normalizeStatus(row.status, 'draft'), row.attachmentName || existing.attachment_name || '', row.attachmentData || existing.attachment_data || '', existing.plan_id]
              );
              result.updated += 1;
            } else {
              await db.query(
                `INSERT INTO training_plan (plan_id, name, grade, major, status, attachment_name, attachment_data, updated_at)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)`,
                [planId || `PLAN-${Date.now()}-${index}`, name, grade, row.major || '', normalizeStatus(row.status, 'draft'), row.attachmentName || '', row.attachmentData || '']
              );
              result.created += 1;
            }
            result.imported += 1;
          });
        } catch (error) {
          result.failed += 1;
          result.errors.push(`第 ${index + 2} 行导入失败：${error.message}`);
        }
      }

      return result;
    }
  }
};

function getTypeConfig(type) {
  const config = IMPORT_EXPORT_TYPES[type];
  if (!config) {
    const error = new Error('不支持的导入导出类型');
    error.statusCode = 404;
    throw error;
  }
  return config;
}

function rowsFromCsv(labels, rows, config) {
  return rows.map((values) => {
    const row = {};
    config.headers.forEach((header) => {
      const labelIndex = labels.indexOf(header.label);
      const keyIndex = labels.indexOf(header.key);
      const index = labelIndex >= 0 ? labelIndex : keyIndex;
      row[header.key] = index >= 0 ? (values[index] || '').trim() : '';
    });
    return row;
  });
}

exports.downloadTemplate = async (req, res) => {
  try {
    const config = getTypeConfig(req.params.type);
    const templateRow = Object.fromEntries(config.headers.map((header) => [header.key, '']));
    sendWorkbook(res, `${config.filenameBase}-template.xlsx`, config.headers, [templateRow]);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

exports.exportData = async (req, res) => {
  try {
    const config = getTypeConfig(req.params.type);
    const rows = await config.exportRows();
    sendWorkbook(res, `${config.filenameBase}-export.xlsx`, config.headers, rows);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

exports.importData = async (req, res) => {
  try {
    const fileData = String(req.body.fileData || req.body.content || '');
    if (!fileData.trim()) {
      return res.status(400).json({ error: '请上传 Excel 文件内容' });
    }

    const config = getTypeConfig(req.params.type);
    const parsed = parseWorkbookInput(fileData);
    const normalizedRows = rowsFromCsv(parsed.labels, parsed.rows, config);
    const result = await config.importRows(normalizedRows);
    res.json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
