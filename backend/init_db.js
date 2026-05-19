const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function initDb() {
  try {
    console.log('Connecting to database...');
    
    // 2. Read SQL files
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    const mockDataSql = fs.readFileSync(path.join(__dirname, 'mock_data.sql'), 'utf8');
    
    // 3. Execute Schema
    console.log('Executing schema.sql...');
    // pg supports multiple statements in one query string
    await pool.query(schemaSql);
    console.log('Schema created successfully.');
    
    // 4. Execute Mock Data
    console.log('Executing mock_data.sql...');
    await pool.query(mockDataSql);
    console.log('Mock data inserted successfully.');
    
  } catch (err) {
    console.error('Database initialization failed:', err);
  } finally {
    await pool.end();
  }
}

initDb();
