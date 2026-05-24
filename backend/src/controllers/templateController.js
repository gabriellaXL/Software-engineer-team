const db = require('../config/db');

exports.uploadTemplate = async (req, res) => {
  const { name, type, fileData } = req.body;
  try {
    const templateId = `TPL-${Date.now()}`;
    const { rows } = await db.query(
      'INSERT INTO template_file (template_id, name, type, file_data, version) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [templateId, name, type, fileData, '1.0']
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTemplates = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT template_id as id, name, type, file_data, version FROM template_file ORDER BY template_id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM template_file WHERE template_id = $1', [id]);
    res.json({ message: 'Template deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
