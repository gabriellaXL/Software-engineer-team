const db = require('../config/db');

exports.getProcessNodes = async (req, res) => {
  const { processType } = req.query;
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
    const { rows } = await db.query(
      `SELECT r.*, n.node_name, n.process_type, n.sequence 
       FROM student_process_record r 
       JOIN party_process_node n ON r.node_id = n.node_id 
       WHERE r.student_id = $1 ORDER BY n.sequence ASC`,
      [studentId || req.user.userId]
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
