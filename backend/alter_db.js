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
    await pool.query(`
      ALTER TABLE application ADD COLUMN IF NOT EXISTS content TEXT;

      CREATE TABLE IF NOT EXISTS notice (
        notice_id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(200),
        target VARCHAR(100),
        content TEXT,
        type VARCHAR(50),
        publish_time TIMESTAMP,
        status VARCHAR(20)
      );

      CREATE TABLE IF NOT EXISTS notice_delivery (
        delivery_id VARCHAR(50) PRIMARY KEY,
        notice_id VARCHAR(50) REFERENCES notice(notice_id),
        student_id VARCHAR(50) REFERENCES student_profile(student_id),
        read_status VARCHAR(20)
      );

      CREATE TABLE IF NOT EXISTS training_plan (
        plan_id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(200),
        grade VARCHAR(20),
        major VARCHAR(100),
        status VARCHAR(20),
        updated_at TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS course_requirement (
        requirement_id VARCHAR(50) PRIMARY KEY,
        plan_id VARCHAR(50) REFERENCES training_plan(plan_id),
        module_name VARCHAR(100),
        credit_required INTEGER
      );
    `);

    await pool.query(`
      INSERT INTO notice (notice_id, title, target, content, type, publish_time, status) VALUES
      ('N-001', '就业办：春招信息汇总', '毕业生、就业标签', '新增 14 条岗位信息，含校友企业内推与学院专场宣讲。', '就业', TIMESTAMP '2026-05-16 09:00:00', 'published'),
      ('N-002', '党建办：思想汇报提交提醒', '入党积极分子', '培养考察节点将在 2026-05-18 到期，请及时上传附件。', '党团', TIMESTAMP '2026-05-15 17:30:00', 'published'),
      ('N-003', '保卫处：校园安全提醒', '全体学生', '请留意宿舍门禁、实验室用电和个人物品安全。', '生活', TIMESTAMP '2026-05-14 10:00:00', 'published'),
      ('N-004', '后勤：宿舍维修通知', '宿舍维修标签', '宿舍集中维修时间为周三下午，请提前整理报修内容。', '生活', TIMESTAMP '2026-05-12 15:20:00', 'published')
      ON CONFLICT (notice_id) DO NOTHING;

      INSERT INTO notice_delivery (delivery_id, notice_id, student_id, read_status) VALUES
      ('ND-001', 'N-001', 'S001', 'unread'),
      ('ND-002', 'N-002', 'S001', 'unread'),
      ('ND-003', 'N-003', 'S001', 'read'),
      ('ND-004', 'N-004', 'S001', 'read')
      ON CONFLICT (delivery_id) DO NOTHING;

      INSERT INTO training_plan (plan_id, name, grade, major, status, updated_at) VALUES
      ('PLAN-001', '计算机类本科培养方案', '2024级', '计算机类', 'published', TIMESTAMP '2026-04-15 00:00:00'),
      ('PLAN-002', '人工智能方向培养方案', '2025级', '人工智能', 'pending', TIMESTAMP '2026-04-12 00:00:00'),
      ('PLAN-003', '数据科学与大数据技术方案', '2026级', '数据科学与大数据技术', 'draft', TIMESTAMP '2026-04-10 00:00:00')
      ON CONFLICT (plan_id) DO NOTHING;

      INSERT INTO course_requirement (requirement_id, plan_id, module_name, credit_required) VALUES
      ('REQ-001', 'PLAN-001', '通识教育', 30),
      ('REQ-002', 'PLAN-001', '专业必修', 48),
      ('REQ-003', 'PLAN-001', '专业选修', 20),
      ('REQ-004', 'PLAN-001', '实践环节', 8)
      ON CONFLICT (requirement_id) DO NOTHING;
    `);

    console.log('Basic management tables are ready.');
  } catch (err) {
    console.error('Failed to alter db:', err);
  } finally {
    await pool.end();
  }
}

alterDb();
