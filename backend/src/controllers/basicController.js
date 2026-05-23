const db = require('../config/db');

function pad(value) {
  return String(value).padStart(2, '0');
}

function formatDateTime(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function mapNotice(row) {
  return {
    id: row.notice_id,
    title: row.title,
    target: row.target,
    time: formatDateTime(row.publish_time),
    unread: row.read_status !== 'read',
    type: row.type,
    text: row.content,
    status: row.status,
  };
}

function mapUser(row) {
  const roleName = {
    student: '普通学生',
    student_leader: '班团骨干',
    admin: '管理老师',
    leader: '学院领导',
  }[row.role] || row.role;

  return [
    row.account_id,
    row.name || row.account_id,
    roleName,
    row.organization || '-',
    row.status === 'active' ? '启用' : '停用',
  ];
}

function mapPlan(row) {
  const statusName = {
    published: '已发布',
    pending: '待审核',
    draft: '草稿',
  }[row.status] || row.status;

  return [
    row.name,
    row.grade,
    statusName,
    formatDate(row.updated_at),
  ];
}

exports.getNotices = async (req, res) => {
  try {
    let query = 'SELECT n.*, NULL AS read_status FROM notice n';
    const params = [];

    if (req.user.role === 'student' || req.user.role === 'student_leader') {
      query = `
        SELECT n.*, d.read_status
        FROM notice n
        LEFT JOIN notice_delivery d ON d.notice_id = n.notice_id
        LEFT JOIN student_profile sp ON d.student_id = sp.student_id
        WHERE sp.user_id = $1 OR d.delivery_id IS NULL
      `;
      params.push(req.user.userId);
    }

    query += ' ORDER BY n.publish_time DESC';
    const { rows } = await db.query(query, params);
    res.json(rows.map(mapNotice));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNotice = async (req, res) => {
  const { title, content, target, type, status } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const noticeId = `N-${Date.now()}`;
    const { rows } = await db.query(
      `INSERT INTO notice (notice_id, title, target, content, type, publish_time, status)
       VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6)
       RETURNING *`,
      [noticeId, title, target || '全体学生', content, type || '综合', status || 'published']
    );
    res.status(201).json(mapNotice(rows[0]));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT
        u.account_id,
        u.role,
        u.status,
        COALESCE(sp.name, ap.name) AS name,
        CASE
          WHEN sp.student_id IS NOT NULL THEN sp.major || ' / ' || sp.grade
          ELSE ap.department
        END AS organization
      FROM tb_user u
      LEFT JOIN student_profile sp ON sp.user_id = u.user_id
      LEFT JOIN admin_profile ap ON ap.user_id = u.user_id
      ORDER BY u.account_id
    `);
    res.json(rows.map(mapUser));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPlans = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM training_plan ORDER BY updated_at DESC');
    res.json(rows.map(mapPlan));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
