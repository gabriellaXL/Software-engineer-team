const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function checkDb() {
  try {
    const res = await pool.query('SELECT column_name FROM information_schema.columns WHERE table_name = \'application\';');
    console.log(res.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

checkDb();
