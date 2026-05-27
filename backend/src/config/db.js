const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

// Kingbase is highly compatible with PostgreSQL, so the 'pg' driver works.
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Immediately test the connection when this file is loaded
pool.connect()
  .then(client => {
    console.log('Successfully connected to the Kingbase database');
    client.release();
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err.message);
  });

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: () => pool.connect(),
};
