-- 1. 将 sys_user 修改为 tb_user，避开系统内置关键字
CREATE TABLE tb_user (
    user_id VARCHAR(50) PRIMARY KEY,
    role VARCHAR(50),
    account_id VARCHAR(50) UNIQUE,
    password VARCHAR(100),
    status VARCHAR(20)
);

CREATE TABLE student_profile (
    student_id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES tb_user(user_id), -- 这里同步修改
    student_no VARCHAR(50),
    name VARCHAR(50),
    major VARCHAR(100),
    grade VARCHAR(20),
    class_name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    id_card VARCHAR(50),
    gender VARCHAR(20),
    join_party_date DATE
);

CREATE TABLE admin_profile (
    admin_id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES tb_user(user_id), -- 这里同步修改
    name VARCHAR(50),
    department VARCHAR(100),
    role VARCHAR(50),
    phone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE policy_item (
    policy_id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200),
    category VARCHAR(50),
    keywords TEXT,
    content TEXT,
    status VARCHAR(20)
);

CREATE TABLE qa_pair (
    qa_id VARCHAR(50) PRIMARY KEY,
    policy_id VARCHAR(50) REFERENCES policy_item(policy_id),
    question TEXT,
    answer TEXT,
    priority INTEGER
);

CREATE TABLE template_file (
    template_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(50),
    file_url VARCHAR(255),
    version VARCHAR(20)
);

CREATE TABLE party_process_node (
    node_id VARCHAR(50) PRIMARY KEY,
    process_type VARCHAR(50),
    node_name VARCHAR(100),
    sequence INTEGER,
    reminder_rule VARCHAR(100),
    scheduled_at TIMESTAMP,
    node_detail TEXT,
    attachment_name VARCHAR(255),
    attachment_data TEXT
);

CREATE TABLE student_process_record (
    record_id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES student_profile(student_id),
    node_id VARCHAR(50) REFERENCES party_process_node(node_id),
    status VARCHAR(20),
    completed_time TIMESTAMP
);

CREATE TABLE party_process_submission (
    submission_id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES student_profile(student_id),
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
);

CREATE TABLE application (
    application_id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES student_profile(student_id),
    type VARCHAR(50),
    content TEXT,
    submit_time TIMESTAMP,
    status VARCHAR(20)
);

CREATE TABLE approval_record (
    approval_id VARCHAR(50) PRIMARY KEY,
    application_id VARCHAR(50) REFERENCES application(application_id),
    approver_id VARCHAR(50) REFERENCES admin_profile(admin_id),
    result VARCHAR(20),
    comment TEXT,
    approval_time TIMESTAMP
);

CREATE TABLE certificate (
    certificate_id VARCHAR(50) PRIMARY KEY,
    application_id VARCHAR(50) REFERENCES application(application_id),
    template_id VARCHAR(50) REFERENCES template_file(template_id),
    file_url VARCHAR(255),
    status VARCHAR(20)
);

CREATE TABLE transcript_task (
    transcript_id VARCHAR(50) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES student_profile(student_id),
    file_url VARCHAR(255),
    parse_status VARCHAR(20),
    upload_time TIMESTAMP
);

CREATE TABLE analysis_result (
    result_id VARCHAR(50) PRIMARY KEY,
    transcript_id VARCHAR(50) REFERENCES transcript_task(transcript_id),
    missing_module VARCHAR(100),
    suggestion TEXT,
    warning_level VARCHAR(20)
);

CREATE TABLE notice (
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
);

CREATE TABLE notice_delivery (
    delivery_id VARCHAR(50) PRIMARY KEY,
    notice_id VARCHAR(50) REFERENCES notice(notice_id),
    student_id VARCHAR(50) REFERENCES student_profile(student_id),
    read_status VARCHAR(20)
);

CREATE TABLE training_plan (
    plan_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(200),
    grade VARCHAR(20),
    major VARCHAR(100),
    status VARCHAR(20),
    attachment_name VARCHAR(255),
    attachment_data TEXT,
    updated_at TIMESTAMP
);

CREATE TABLE course_requirement (
    requirement_id VARCHAR(50) PRIMARY KEY,
    plan_id VARCHAR(50) REFERENCES training_plan(plan_id),
    module_name VARCHAR(100),
    credit_required INTEGER
);
