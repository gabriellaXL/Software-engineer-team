const db = require('../config/db');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { accountId, password } = req.body;
  try {
    const { rows } = await db.query('SELECT * FROM tb_user WHERE account_id = $1', [accountId]);
    const user = rows[0];

    // Note: Password hashing should be used in production
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
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
