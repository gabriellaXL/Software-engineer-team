const db = require('../config/db');

exports.generateCertificate = async (req, res) => {
  const { applicationId, templateId } = req.body;
  try {
    // Mock implementation for generating a certificate file
    const certId = `CERT-${Date.now()}`;
    const fileUrl = `/files/certificates/${certId}.pdf`;
    
    const { rows } = await db.query(
      'INSERT INTO certificate (certificate_id, application_id, template_id, file_url, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [certId, applicationId, templateId, fileUrl, 'Generated']
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCertificates = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT c.* FROM certificate c 
       JOIN application a ON c.application_id = a.application_id 
       WHERE a.student_id = $1`,
      [req.user.userId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
