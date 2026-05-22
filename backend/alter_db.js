const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function alterDb() {
  try {
    await pool.query('ALTER TABLE application ADD COLUMN content TEXT;');
    console.log('Added content column to application table.');
  } catch (err) {
    console.error('Failed to alter db:', err);
  } finally {
    await pool.end();
  }
}

alterDb();
