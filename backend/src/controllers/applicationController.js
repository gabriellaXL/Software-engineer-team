const db = require('../config/db');

exports.submitApplication = async (req, res) => {
  const { type, content } = req.body;
  try {
    const { rows: studentRows } = await db.query('SELECT student_id FROM student_profile WHERE user_id = $1', [req.user.userId]);
    if (studentRows.length === 0) {
      return res.status(404).json({ error: 'Student profile not found' });
    }
    const studentId = studentRows[0].student_id;

    const applicationId = `APP-${Date.now()}`;
    const { rows } = await db.query(
      'INSERT INTO application (application_id, student_id, type, content, submit_time, status) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, $5) RETURNING *',
      [applicationId, studentId, type, content, 'PendingReview']
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    let query = `
      SELECT 
        a.application_id as id, 
        a.type, 
        sp.student_no || ' ' || sp.name as applicant, 
        a.status, 
        a.submit_time as submit, 
        a.content 
      FROM application a
      JOIN student_profile sp ON a.student_id = sp.student_id
    `;
    const params = [];
    if (req.user.role === 'student' || req.user.role === 'student_leader') {
      query += ' WHERE sp.user_id = $1';
      params.push(req.user.userId);
    }
    query += ' ORDER BY a.submit_time DESC';
    const { rows } = await db.query(query, params);
    
    // Parse content if it's stored as JSON string, or just map it directly
    const formattedRows = rows.map(row => {
      let contentObj = {};
      if (typeof row.content === 'object' && row.content !== null) {
        contentObj = row.content;
      } else {
        try {
          contentObj = JSON.parse(row.content || '{}');
        } catch (e) {
          contentObj = { text: row.content };
        }
      }
      
      // Map status from English to Chinese for frontend matching
      let statusZh = '待审核';
      if (row.status === 'PendingReview') statusZh = '待审核';
      if (row.status === 'Approved') statusZh = '已通过';
      if (row.status === 'Rejected') statusZh = '待补充'; // matching frontend mock

      // Format date
      const submitDate = new Date(row.submit);
      const submitStr = submitDate.toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      
      return {
        id: row.id,
        type: row.type,
        applicant: row.applicant,
        status: statusZh,
        submit: submitStr,
        purpose: contentObj.purpose || '无',
        file: contentObj.file || '未上传文件',
        fileData: contentObj.fileData || null,
        comment: contentObj.comment || contentObj.text || '无'
      };
    });
    
    res.json(formattedRows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.reviewApplication = async (req, res) => {
  const { applicationId, result, comment } = req.body;
  try {
    const { rows: adminRows } = await db.query('SELECT admin_id FROM admin_profile WHERE user_id = $1', [req.user.userId]);
    if (adminRows.length === 0) {
      return res.status(404).json({ error: 'Admin profile not found' });
    }
    const adminId = adminRows[0].admin_id;

    const approvalId = `APR-${Date.now()}`;
    
    await db.query('BEGIN');
    
    await db.query(
      'INSERT INTO approval_record (approval_id, application_id, approver_id, result, comment, approval_time) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)',
      [approvalId, applicationId, adminId, result, comment]
    );

    const newStatus = result === 'approve' ? 'Approved' : 'Rejected';
    const { rows } = await db.query(
      'UPDATE application SET status = $1 WHERE application_id = $2 RETURNING *',
      [newStatus, applicationId]
    );

    await db.query('COMMIT');
    res.json(rows[0]);
  } catch (err) {
    await db.query('ROLLBACK');
    res.status(500).json({ error: err.message });
  }
};
