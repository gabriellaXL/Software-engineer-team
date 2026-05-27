const db = require('../config/db');
const jwt = require('jsonwebtoken');

let profileSchemaReady = false;
const ALLOWED_GRADES = ['24级', '25级', '26级', '27级'];

async function ensureProfileSchema() {
  if (profileSchemaReady) return;
  await db.query(`
    ALTER TABLE student_profile
      ADD COLUMN IF NOT EXISTS grade VARCHAR(20),
      ADD COLUMN IF NOT EXISTS class_name VARCHAR(100),
      ADD COLUMN IF NOT EXISTS email VARCHAR(100),
      ADD COLUMN IF NOT EXISTS id_card VARCHAR(50),
      ADD COLUMN IF NOT EXISTS gender VARCHAR(20),
      ADD COLUMN IF NOT EXISTS join_party_date DATE;

    ALTER TABLE admin_profile
      ADD COLUMN IF NOT EXISTS phone VARCHAR(20),
      ADD COLUMN IF NOT EXISTS email VARCHAR(100);
  `);
  profileSchemaReady = true;
}

function normalizeValue(value) {
  if (value === undefined || value === null) return null;
  return String(value).trim();
}

async function getJoinedProfile(userId, role) {
  const isStudent = role === 'student' || role === 'student_leader';
  const query = isStudent
    ? `
        SELECT sp.*, u.account_id
        FROM student_profile sp
        JOIN tb_user u ON u.user_id = sp.user_id
        WHERE sp.user_id = $1
      `
    : `
        SELECT ap.*, u.account_id
        FROM admin_profile ap
        JOIN tb_user u ON u.user_id = ap.user_id
        WHERE ap.user_id = $1
      `;
  const { rows } = await db.query(query, [userId]);
  return rows[0] || {};
}

exports.login = async (req, res) => {
  const { accountId, password, role } = req.body;
  try {
    const { rows } = await db.query('SELECT * FROM tb_user WHERE account_id = $1', [accountId]);
    const user = rows[0];

    // Note: Password hashing should be used in production
    if (!user || user.password !== password) {
      return res.status(401).json({ error: '账号或密码错误' });
    }

    // 校验选择的身份是否匹配
    if (role) {
      const isStudentRole = user.role === 'student' || user.role === 'student_leader';
      if ((role === 'student' && !isStudentRole) || (role === 'admin' && user.role !== 'admin')) {
        return res.status(403).json({ error: '身份不匹配，请选择正确的登录身份' });
      }
    }

    const token = jwt.sign(
      { userId: user.user_id, role: user.role, accountId: user.account_id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, user: { userId: user.user_id, role: user.role, status: user.status } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.register = async (req, res) => {
  const { accountId, password, username, email, role } = req.body;
  
  if (!accountId || !password || !username) {
    return res.status(400).json({ error: '请填写所有必填项' });
  }

  try {
    await ensureProfileSchema();
    // 检查是否已存在
    const existing = await db.query('SELECT * FROM tb_user WHERE account_id = $1', [accountId]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: '该学号/工号已被注册' });
    }

    const userId = `USR-${Date.now()}`;
    const userRole = role === 'admin' ? 'admin' : 'student';

    // 插入用户表
    await db.query(
      'INSERT INTO tb_user (user_id, role, account_id, password, status) VALUES ($1, $2, $3, $4, $5)',
      [userId, userRole, accountId, password, 'active']
    );

    // 根据身份插入对应的档案表
    if (userRole === 'student') {
      const studentId = `STU-${Date.now()}`;
      await db.query(
        'INSERT INTO student_profile (student_id, user_id, student_no, name, email) VALUES ($1, $2, $3, $4, $5)',
        [studentId, userId, accountId, username, email || '']
      );
    } else {
      const adminId = `ADM-${Date.now()}`;
      await db.query(
        'INSERT INTO admin_profile (admin_id, user_id, name, role, email) VALUES ($1, $2, $3, $4, $5)',
        [adminId, userId, username, '管理老师', email || '']
      );
    }

    res.status(201).json({ message: '注册成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { userId, role } = req.user;
    await ensureProfileSchema();
    res.json(await getJoinedProfile(userId, role));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  let client = null;
  try {
    const { userId, role } = req.user;
    await ensureProfileSchema();
    client = await db.getClient();

    const isStudent = role === 'student' || role === 'student_leader';
    const name = normalizeValue(req.body.name);
    const phone = normalizeValue(req.body.phone);
    const email = normalizeValue(req.body.email);

    if (isStudent) {
      const studentNo = normalizeValue(req.body.student_no ?? req.body.accountId);
      const className = normalizeValue(req.body.class_name ?? req.body.className);
      const major = normalizeValue(req.body.major);
      const grade = normalizeValue(req.body.grade);
      const idCard = normalizeValue(req.body.id_card);
      const gender = normalizeValue(req.body.gender);
      const joinPartyDate = normalizeValue(req.body.join_party_date);

      const currentProfile = await getJoinedProfile(userId, role);
      if (!currentProfile.user_id) {
        return res.status(404).json({ error: '未找到学生档案' });
      }

      if (!name) {
        return res.status(400).json({ error: '姓名不能为空' });
      }
      if (!studentNo) {
        return res.status(400).json({ error: '学号不能为空' });
      }
      if (!grade || !ALLOWED_GRADES.includes(grade)) {
        return res.status(400).json({ error: '年级只能选择 24级、25级、26级、27级' });
      }

      const { rows: duplicateRows } = await client.query(
        'SELECT user_id FROM tb_user WHERE account_id = $1 AND user_id <> $2',
        [studentNo, userId]
      );
      if (duplicateRows.length > 0) {
        return res.status(409).json({ error: '该学号已被其他账户使用' });
      }

      await client.query('BEGIN');
      await client.query(
        'UPDATE tb_user SET account_id = $1 WHERE user_id = $2',
        [studentNo, userId]
      );
      await client.query(
        `UPDATE student_profile
         SET name = $1,
             student_no = $2,
             class_name = $3,
             major = $4,
             grade = $5,
             phone = $6,
             email = $7,
             id_card = $8,
             gender = $9,
             join_party_date = $10
         WHERE user_id = $11`,
        [name, studentNo, className || '', major || '', grade, phone || '', email || '', idCard || '', gender || '', joinPartyDate || null, userId]
      );
      await client.query('COMMIT');
      return res.json(await getJoinedProfile(userId, role));
    }

    await client.query(
      `UPDATE admin_profile
       SET name = COALESCE($1, name),
           phone = COALESCE($2, phone),
           email = COALESCE($3, email)
       WHERE user_id = $4`,
      [name, phone, email, userId]
    );

    res.json(await getJoinedProfile(userId, role));
  } catch (err) {
    try {
      if (client) await client.query('ROLLBACK');
    } catch (rollbackError) {
      // Ignore rollback failure and surface the original error.
    }
    res.status(500).json({ error: err.message });
  } finally {
    client?.release();
  }
};

exports.changePassword = async (req, res) => {
  const { userId } = req.user;
  const currentPassword = normalizeValue(req.body.currentPassword);
  const newPassword = normalizeValue(req.body.newPassword);

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: '当前密码和新密码不能为空' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ error: '新密码长度不能少于 6 位' });
  }
  if (currentPassword === newPassword) {
    return res.status(400).json({ error: '新密码不能与当前密码相同' });
  }

  try {
    const { rows } = await db.query(
      'SELECT password FROM tb_user WHERE user_id = $1',
      [userId]
    );
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ error: '用户不存在' });
    }
    if (String(user.password || '') !== currentPassword) {
      return res.status(400).json({ error: '当前密码错误' });
    }

    await db.query(
      'UPDATE tb_user SET password = $1 WHERE user_id = $2',
      [newPassword, userId]
    );

    res.json({ message: '密码修改成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
