const db = require('../config/db');

exports.uploadTranscript = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const transcriptId = `TRN-${Date.now()}`;
    const fileUrl = `/uploads/${req.file.filename}`;

    const { rows } = await db.query(
      'INSERT INTO transcript_task (transcript_id, student_id, file_url, parse_status, upload_time) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *',
      [transcriptId, req.user.userId, fileUrl, 'Pending']
    );

    // Mock asynchronous parsing task
    setTimeout(async () => {
      try {
        await db.query('UPDATE transcript_task SET parse_status = $1 WHERE transcript_id = $2', ['Success', transcriptId]);
        const resultId = `RES-${Date.now()}`;
        await db.query(
          'INSERT INTO analysis_result (result_id, transcript_id, missing_module, suggestion, warning_level) VALUES ($1, $2, $3, $4, $5)',
          [resultId, transcriptId, 'Professional Electives', 'Consider taking Advanced AI.', 'Low']
        );
      } catch (e) {
        console.error('Parsing task failed:', e);
      }
    }, 2000);

    res.status(202).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAnalysisResult = async (req, res) => {
  const { transcriptId } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM analysis_result WHERE transcript_id = $1', [transcriptId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Result not found or parsing in progress' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
