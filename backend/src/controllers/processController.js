const db = require('../config/db');

exports.getProcessNodes = async (req, res) => {
  const processType = req.query.processType || 'party';
  try {
    const { rows } = await db.query('SELECT * FROM party_process_node WHERE process_type = $1 ORDER BY sequence ASC', [processType]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentProgress = async (req, res) => {
  const { studentId } = req.query;
  try {
    let resolvedStudentId = studentId;
    if (!resolvedStudentId && (req.user.role === 'student' || req.user.role === 'student_leader')) {
      const { rows: profileRows } = await db.query(
        'SELECT student_id FROM student_profile WHERE user_id = $1',
        [req.user.userId]
      );
      resolvedStudentId = profileRows[0]?.student_id;
    }
    if (!resolvedStudentId) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    const { rows } = await db.query(
      `SELECT r.*, n.node_name, n.process_type, n.sequence 
       FROM student_process_record r 
       JOIN party_process_node n ON r.node_id = n.node_id 
       WHERE r.student_id = $1 ORDER BY n.sequence ASC`,
      [resolvedStudentId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProgress = async (req, res) => {
  const { recordId, status } = req.body;
  try {
    const { rows } = await db.query(
      'UPDATE student_process_record SET status = $1, completed_time = CURRENT_TIMESTAMP WHERE record_id = $2 RETURNING *',
      [status, recordId]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
