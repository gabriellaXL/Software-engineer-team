const db = require('../config/db');

let ensured = false;

async function ensureCoreTables() {
  if (ensured) return;

  await db.query(`
    CREATE TABLE IF NOT EXISTS party_process_node (
      node_id VARCHAR(50) PRIMARY KEY,
      process_type VARCHAR(50),
      node_name VARCHAR(100),
      sequence INTEGER,
      reminder_rule VARCHAR(255),
      scheduled_at TIMESTAMP,
      start_at TIMESTAMP,
      due_at TIMESTAMP,
      node_detail TEXT,
      attachment_name VARCHAR(255),
      attachment_data TEXT
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS student_process_record (
      record_id VARCHAR(50) PRIMARY KEY,
      student_id VARCHAR(50),
      node_id VARCHAR(50) REFERENCES party_process_node(node_id),
      status VARCHAR(20),
      completed_time TIMESTAMP
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS party_process_submission (
      submission_id VARCHAR(50) PRIMARY KEY,
      student_id VARCHAR(50),
      node_id VARCHAR(50) REFERENCES party_process_node(node_id),
      material_type VARCHAR(100),
      description TEXT,
      attachment_name VARCHAR(255),
      attachment_data TEXT,
      status VARCHAR(20),
      review_comment TEXT,
      reviewed_at TIMESTAMP,
      created_at TIMESTAMP,
      updated_at TIMESTAMP,
      submitted_at TIMESTAMP
    )
  `);

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
      attachment_name VARCHAR(255),
      attachment_data TEXT,
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
    ALTER TABLE party_process_node
      ADD COLUMN IF NOT EXISTS process_type VARCHAR(50),
      ADD COLUMN IF NOT EXISTS node_name VARCHAR(100),
      ADD COLUMN IF NOT EXISTS sequence INTEGER,
      ADD COLUMN IF NOT EXISTS reminder_rule VARCHAR(255),
      ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS start_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS due_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS node_detail TEXT,
      ADD COLUMN IF NOT EXISTS attachment_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS attachment_data TEXT
  `);

  await db.query(`
    ALTER TABLE student_process_record
      ADD COLUMN IF NOT EXISTS status VARCHAR(20),
      ADD COLUMN IF NOT EXISTS completed_time TIMESTAMP
  `);

  await db.query(`
    ALTER TABLE party_process_submission
      ADD COLUMN IF NOT EXISTS material_type VARCHAR(100),
      ADD COLUMN IF NOT EXISTS description TEXT,
      ADD COLUMN IF NOT EXISTS attachment_name VARCHAR(255),
      ADD COLUMN IF NOT EXISTS attachment_data TEXT,
      ADD COLUMN IF NOT EXISTS status VARCHAR(20),
      ADD COLUMN IF NOT EXISTS review_comment TEXT,
      ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMP
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
    ALTER TABLE training_plan
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
