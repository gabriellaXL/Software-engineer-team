const db = require('../config/db');

let ensured = false;

async function ensureCoreTables() {
  if (ensured) return;

  await db.query(`
    CREATE TABLE IF NOT EXISTS notice (
      notice_id VARCHAR(50) PRIMARY KEY,
      title VARCHAR(200),
      target VARCHAR(100),
      content TEXT,
      summary TEXT,
      tags TEXT,
      audience_grades TEXT,
      attachment_name VARCHAR(255),
      attachment_data TEXT,
      type VARCHAR(50),
      publish_time TIMESTAMP,
      status VARCHAR(20)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS notice_delivery (
      delivery_id VARCHAR(50) PRIMARY KEY,
      notice_id VARCHAR(50) REFERENCES notice(notice_id),
      student_id VARCHAR(50),
      read_status VARCHAR(20),
      read_time TIMESTAMP
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS training_plan (
      plan_id VARCHAR(50) PRIMARY KEY,
      name VARCHAR(200),
      grade VARCHAR(20),
      major VARCHAR(100),
      status VARCHAR(20),
      updated_at TIMESTAMP
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS course_requirement (
      requirement_id VARCHAR(50) PRIMARY KEY,
      plan_id VARCHAR(50) REFERENCES training_plan(plan_id),
      module_name VARCHAR(100),
      credit_required INTEGER
    )
  `);

  await db.query(`
    ALTER TABLE notice
      ADD COLUMN IF NOT EXISTS summary TEXT,
      ADD COLUMN IF NOT EXISTS tags TEXT,
      ADD COLUMN IF NOT EXISTS audience_grades TEXT,
      ADD COLUMN IF NOT EXISTS attachment_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS attachment_data TEXT
  `);

  await db.query(`
    ALTER TABLE notice_delivery
      ADD COLUMN IF NOT EXISTS read_time TIMESTAMP
  `);

  ensured = true;
}

module.exports = {
  ensureCoreTables,
};
