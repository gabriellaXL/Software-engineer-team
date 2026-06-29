const jwt = require('jsonwebtoken');
const db = require('../config/db');

let authSchemaReady = false;

async function ensureAuthSchema() {
  if (authSchemaReady) return;
  await db.query(`
    ALTER TABLE tb_user
      ADD COLUMN IF NOT EXISTS token_version INTEGER DEFAULT 0
  `);
  authSchemaReady = true;
}

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await ensureAuthSchema();
    const { rows } = await db.query(
      'SELECT token_version FROM tb_user WHERE user_id = $1',
      [decoded.userId]
    );
    if (!rows.length) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    if (Number(decoded.tokenVersion || 0) !== Number(rows[0].token_version || 0)) {
      return res.status(401).json({ error: 'Session expired, please log in again' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

module.exports = { authenticate, authorize };
