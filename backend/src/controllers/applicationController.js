const db = require('../config/db');

exports.submitApplication = async (req, res) => {
  const { type, content } = req.body;
  try {
    const applicationId = `APP-${Date.now()}`;
    const { rows } = await db.query(
      'INSERT INTO application (application_id, student_id, type, submit_time, status) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4) RETURNING *',
      [applicationId, req.user.userId, type, 'PendingReview']
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    let query = 'SELECT * FROM application';
    const params = [];
    if (req.user.role === 'student') {
      query += ' WHERE student_id = $1';
      params.push(req.user.userId);
    }
    const { rows } = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.reviewApplication = async (req, res) => {
  const { applicationId, result, comment } = req.body;
  try {
    const approvalId = `APR-${Date.now()}`;
    
    await db.query('BEGIN');
    
    await db.query(
      'INSERT INTO approval_record (approval_id, application_id, approver_id, result, comment, approval_time) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)',
      [approvalId, applicationId, req.user.userId, result, comment]
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
