const db = require('../config/db');
const jwt = require('jsonwebtoken');

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
        'INSERT INTO student_profile (student_id, user_id, student_no, name) VALUES ($1, $2, $3, $4)',
        [studentId, userId, accountId, username]
      );
    } else {
      const adminId = `ADM-${Date.now()}`;
      await db.query(
        'INSERT INTO admin_profile (admin_id, user_id, name, role) VALUES ($1, $2, $3, $4)',
        [adminId, userId, username, '管理老师']
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
    let profileQuery = '';
    
    if (role === 'student' || role === 'student_leader') {
      profileQuery = 'SELECT * FROM student_profile WHERE user_id = $1';
    } else {
      profileQuery = 'SELECT * FROM admin_profile WHERE user_id = $1';
    }

    const { rows } = await db.query(profileQuery, [userId]);
    res.json(rows[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { userId, role } = req.user;
    if (role !== 'student' && role !== 'student_leader') {
      return res.status(403).json({ error: '仅学生可更新档案' });
    }

    const { name, id_card, gender, phone, email, join_party_date } = req.body;
    
    const { rows } = await db.query(
      `UPDATE student_profile 
       SET name = COALESCE($1, name),
           id_card = COALESCE($2, id_card),
           gender = COALESCE($3, gender),
           phone = COALESCE($4, phone),
           email = COALESCE($5, email),
           join_party_date = COALESCE($6, join_party_date)
       WHERE user_id = $7 RETURNING *`,
      [name, id_card, gender, phone, email, join_party_date, userId]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
