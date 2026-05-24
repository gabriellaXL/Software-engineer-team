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

function statusToText(status) {
  return status === 'active' ? '启用' : '停用';
}

function mapUser(row) {
  const roleName = {
    student: '普通学生',
    student_leader: '班团骨干',
    admin: '管理老师',
    leader: '学院领导',
  }[row.role] || row.role;

  return {
    id: row.user_id,
    accountId: row.account_id,
    account_id: row.account_id,
    name: row.name || row.account_id,
    role: row.role,
    roleName,
    organization: row.organization || '-',
    status: row.status,
    statusText: statusToText(row.status),
    row: [
      row.account_id,
      row.name || row.account_id,
      roleName,
      row.organization || '-',
      statusToText(row.status),
    ],
  };
}

function mapPlan(row) {
  const statusName = {
    published: '已发布',
    pending: '待审核',
    draft: '草稿',
  }[row.status] || row.status;

  return {
    id: row.plan_id,
    name: row.name,
    grade: row.grade,
    major: row.major,
    status: row.status,
    statusName,
    updatedAt: formatDate(row.updated_at),
    row: [
      row.name,
      row.grade,
      statusName,
      formatDate(row.updated_at),
    ],
  };
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

exports.updateNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { title, content, target, type, status } = req.body;

  try {
    const { rows } = await db.query(
      `UPDATE notice
       SET title = COALESCE($1, title),
           content = COALESCE($2, content),
           target = COALESCE($3, target),
           type = COALESCE($4, type),
           status = COALESCE($5, status)
       WHERE notice_id = $6
       RETURNING *`,
      [title, content, target, type, status, noticeId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Notice not found' });
    res.json(mapNotice(rows[0]));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNotice = async (req, res) => {
  const { noticeId } = req.params;

  try {
    await db.query('DELETE FROM notice_delivery WHERE notice_id = $1', [noticeId]);
    const { rowCount } = await db.query('DELETE FROM notice WHERE notice_id = $1', [noticeId]);
    if (!rowCount) return res.status(404).json({ error: 'Notice not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT
        u.user_id,
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

exports.createUser = async (req, res) => {
  const {
    accountId,
    account_id: accountIdAlias,
    password,
    role = 'student',
    status = 'active',
    name,
    major,
    grade,
    phone,
    department,
  } = req.body;
  const resolvedAccountId = accountId || accountIdAlias;
  if (!resolvedAccountId || !password) {
    return res.status(400).json({ error: 'Account and password are required' });
  }

  const userId = `U-${Date.now()}`;
  try {
    await db.query('BEGIN');
    const { rows } = await db.query(
      'INSERT INTO tb_user (user_id, role, account_id, password, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, role, resolvedAccountId, password, status]
    );

    if (role === 'student' || role === 'student_leader') {
      const studentId = `S-${Date.now()}`;
      await db.query(
        'INSERT INTO student_profile (student_id, user_id, student_no, name, major, grade, phone) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [studentId, userId, resolvedAccountId, name || resolvedAccountId, major || '', grade || '', phone || '']
      );
    } else {
      const adminId = `A-${Date.now()}`;
      await db.query(
        'INSERT INTO admin_profile (admin_id, user_id, name, department, role) VALUES ($1, $2, $3, $4, $5)',
        [adminId, userId, name || resolvedAccountId, department || '', role]
      );
    }

    await db.query('COMMIT');
    res.status(201).json(rows[0]);
  } catch (err) {
    await db.query('ROLLBACK');
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { role, status, password, name, major, grade, phone, department } = req.body;

  try {
    await db.query('BEGIN');
    const { rows } = await db.query(
      `UPDATE tb_user
       SET role = COALESCE($1, role),
           status = COALESCE($2, status),
           password = COALESCE($3, password)
       WHERE user_id = $4
       RETURNING *`,
      [role, status, password, userId]
    );
    if (!rows.length) {
      await db.query('ROLLBACK');
      return res.status(404).json({ error: 'User not found' });
    }

    await db.query(
      `UPDATE student_profile
       SET name = COALESCE($1, name),
           major = COALESCE($2, major),
           grade = COALESCE($3, grade),
           phone = COALESCE($4, phone)
       WHERE user_id = $5`,
      [name, major, grade, phone, userId]
    );
    await db.query(
      `UPDATE admin_profile
       SET name = COALESCE($1, name),
           department = COALESCE($2, department),
           role = COALESCE($3, role)
       WHERE user_id = $4`,
      [name, department, role, userId]
    );

    await db.query('COMMIT');
    res.json(rows[0]);
  } catch (err) {
    await db.query('ROLLBACK');
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await db.query('BEGIN');
    await db.query('DELETE FROM admin_profile WHERE user_id = $1', [userId]);
    const { rows: studentRows } = await db.query('SELECT student_id FROM student_profile WHERE user_id = $1', [userId]);
    for (const student of studentRows) {
      const { rows: applicationRows } = await db.query(
        'SELECT application_id FROM application WHERE student_id = $1',
        [student.student_id]
      );
      for (const application of applicationRows) {
        await db.query('DELETE FROM approval_record WHERE application_id = $1', [application.application_id]);
        await db.query('DELETE FROM certificate WHERE application_id = $1', [application.application_id]);
      }
      const { rows: transcriptRows } = await db.query(
        'SELECT transcript_id FROM transcript_task WHERE student_id = $1',
        [student.student_id]
      );
      for (const transcript of transcriptRows) {
        await db.query('DELETE FROM analysis_result WHERE transcript_id = $1', [transcript.transcript_id]);
      }
      await db.query('DELETE FROM notice_delivery WHERE student_id = $1', [student.student_id]);
      await db.query('DELETE FROM student_process_record WHERE student_id = $1', [student.student_id]);
      await db.query('DELETE FROM transcript_task WHERE student_id = $1', [student.student_id]);
      await db.query('DELETE FROM application WHERE student_id = $1', [student.student_id]);
    }
    await db.query('DELETE FROM student_profile WHERE user_id = $1', [userId]);
    const { rowCount } = await db.query('DELETE FROM tb_user WHERE user_id = $1', [userId]);
    if (!rowCount) {
      await db.query('ROLLBACK');
      return res.status(404).json({ error: 'User not found' });
    }
    await db.query('COMMIT');
    res.json({ success: true });
  } catch (err) {
    await db.query('ROLLBACK');
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

exports.createPlan = async (req, res) => {
  const { name, grade, major, status = 'draft' } = req.body;
  if (!name || !grade) {
    return res.status(400).json({ error: 'Plan name and grade are required' });
  }

  try {
    const planId = `PLAN-${Date.now()}`;
    const { rows } = await db.query(
      `INSERT INTO training_plan (plan_id, name, grade, major, status, updated_at)
       VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
       RETURNING *`,
      [planId, name, grade, major || '', status]
    );
    res.status(201).json(mapPlan(rows[0]));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePlan = async (req, res) => {
  const { planId } = req.params;
  const { name, grade, major, status } = req.body;

  try {
    const { rows } = await db.query(
      `UPDATE training_plan
       SET name = COALESCE($1, name),
           grade = COALESCE($2, grade),
           major = COALESCE($3, major),
           status = COALESCE($4, status),
           updated_at = CURRENT_TIMESTAMP
       WHERE plan_id = $5
       RETURNING *`,
      [name, grade, major, status, planId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Training plan not found' });
    res.json(mapPlan(rows[0]));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePlan = async (req, res) => {
  const { planId } = req.params;

  try {
    await db.query('DELETE FROM course_requirement WHERE plan_id = $1', [planId]);
    const { rowCount } = await db.query('DELETE FROM training_plan WHERE plan_id = $1', [planId]);
    if (!rowCount) return res.status(404).json({ error: 'Training plan not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
