-- 插入测试用户 (密码这里直接使用明文，因为authController.js中目前是明文比对)
INSERT INTO tb_user (user_id, role, account_id, password, status) VALUES 
('U001', 'student', 'stu001', '123456', 'active'),
('U002', 'admin', 'admin001', '123456', 'active');

-- 插入学生档案
INSERT INTO student_profile (student_id, user_id, student_no, name, major, grade, phone) VALUES 
('S001', 'U001', '20260001', '张三', '计算机科学与技术', '2026级', '13800000000');

-- 插入管理员档案
INSERT INTO admin_profile (admin_id, user_id, name, department, role) VALUES 
('A001', 'U002', '李老师', '信息学院学生工作办公室', '辅导员');

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
