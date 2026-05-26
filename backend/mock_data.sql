-- 插入测试用户 (密码这里直接使用明文，因为authController.js中目前是明文比对)
INSERT INTO tb_user (user_id, role, account_id, password, status) VALUES 
('U001', 'student', 'stu001', '123456', 'active'),
('U002', 'admin', 'admin001', '123456', 'active');

-- 插入学生档案
INSERT INTO student_profile (student_id, user_id, student_no, name, major, grade, class_name, phone, email) VALUES 
('S001', 'U001', '20260001', '张三', '计算机科学与技术', '2026级', '计科 1 班', '13800000000', 'stu001@example.com');

-- 插入管理员档案
INSERT INTO admin_profile (admin_id, user_id, name, department, role, phone, email) VALUES 
('A001', 'U002', '李老师', '信息学院学生工作办公室', '辅导员', '13900000000', 'admin001@example.com');

-- 插入一条政策测试数据
INSERT INTO policy_item (policy_id, title, category, keywords, content, status) VALUES 
('POL-001', '在读证明开具说明', '证明类', '证明 在读 电子证明 模板', '学生在线填写用途并提交后，由管理老师审核；通过后系统生成带编号的电子证明，可在申请记录中下载。', 'active');
-- 插入党团流程节点与测试学生进度
INSERT INTO party_process_node (node_id, process_type, node_name, sequence, reminder_rule) VALUES
('NODE-001', 'party', '申请递交', 1, '学生主动提交申请表与个人陈述'),
('NODE-002', 'party', '谈话完成', 2, '上一节点通过后安排培养谈话'),
('NODE-003', 'party', '培养考察', 3, '每7天提醒思想汇报提交'),
('NODE-004', 'party', '支部讨论', 4, '材料审核通过后进入支部讨论');

INSERT INTO student_process_record (record_id, student_id, node_id, status, completed_time) VALUES
('REC-001', 'S001', 'NODE-001', 'Completed', TIMESTAMP '2026-03-12 09:20:00'),
('REC-002', 'S001', 'NODE-002', 'Completed', TIMESTAMP '2026-04-02 15:10:00'),
('REC-003', 'S001', 'NODE-003', 'InProgress', NULL);

-- 插入通知与基础管理测试数据
INSERT INTO notice (notice_id, title, target, content, type, publish_time, status) VALUES
('N-001', '就业办：春招信息汇总', '毕业生、就业标签', '新增 14 条岗位信息，含校友企业内推与学院专场宣讲。', '就业', TIMESTAMP '2026-05-16 09:00:00', 'published'),
('N-002', '党建办：思想汇报提交提醒', '入党积极分子', '培养考察节点将在 2026-05-18 到期，请及时上传附件。', '党团', TIMESTAMP '2026-05-15 17:30:00', 'published'),
('N-003', '保卫处：校园安全提醒', '全体学生', '请留意宿舍门禁、实验室用电和个人物品安全。', '生活', TIMESTAMP '2026-05-14 10:00:00', 'published'),
('N-004', '后勤：宿舍维修通知', '宿舍维修标签', '宿舍集中维修时间为周三下午，请提前整理报修内容。', '生活', TIMESTAMP '2026-05-12 15:20:00', 'published');

INSERT INTO notice_delivery (delivery_id, notice_id, student_id, read_status) VALUES
('ND-001', 'N-001', 'S001', 'unread'),
('ND-002', 'N-002', 'S001', 'unread'),
('ND-003', 'N-003', 'S001', 'read'),
('ND-004', 'N-004', 'S001', 'read');

INSERT INTO training_plan (plan_id, name, grade, major, status, updated_at) VALUES
('PLAN-001', '计算机类本科培养方案', '2024级', '计算机类', 'published', TIMESTAMP '2026-04-15 00:00:00'),
('PLAN-002', '人工智能方向培养方案', '2025级', '人工智能', 'pending', TIMESTAMP '2026-04-12 00:00:00'),
('PLAN-003', '数据科学与大数据技术方案', '2026级', '数据科学与大数据技术', 'draft', TIMESTAMP '2026-04-10 00:00:00');

INSERT INTO course_requirement (requirement_id, plan_id, module_name, credit_required) VALUES
('REQ-001', 'PLAN-001', '通识教育', 30),
('REQ-002', 'PLAN-001', '专业必修', 48),
('REQ-003', 'PLAN-001', '专业选修', 20),
('REQ-004', 'PLAN-001', '实践环节', 8);
