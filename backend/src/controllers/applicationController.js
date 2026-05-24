const db = require('../config/db');
const { exec } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

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

exports.updateApplication = async (req, res) => {
  const { id } = req.params;
  const { type, content } = req.body;
  try {
    const { rows: studentRows } = await db.query('SELECT student_id FROM student_profile WHERE user_id = $1', [req.user.userId]);
    if (studentRows.length === 0) {
      return res.status(404).json({ error: 'Student profile not found' });
    }
    const studentId = studentRows[0].student_id;

    // Ensure the application belongs to the student and is in Rejected state (or we just allow it)
    const { rows: checkRows } = await db.query('SELECT * FROM application WHERE application_id = $1 AND student_id = $2', [id, studentId]);
    if (checkRows.length === 0) {
      return res.status(403).json({ error: 'Permission denied or application not found' });
    }

    const { rows } = await db.query(
      'UPDATE application SET type = $1, content = $2, status = $3, submit_time = CURRENT_TIMESTAMP WHERE application_id = $4 RETURNING *',
      [type, content, 'PendingReview', id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: studentRows } = await db.query('SELECT student_id FROM student_profile WHERE user_id = $1', [req.user.userId]);
    if (studentRows.length === 0) {
      return res.status(404).json({ error: 'Student profile not found' });
    }
    const studentId = studentRows[0].student_id;

    const { rows: checkRows } = await db.query('SELECT * FROM application WHERE application_id = $1 AND student_id = $2', [id, studentId]);
    if (checkRows.length === 0) {
      return res.status(403).json({ error: 'Permission denied or application not found' });
    }
    
    if (checkRows[0].status !== 'PendingReview') {
      return res.status(400).json({ error: 'Only pending applications can be cancelled' });
    }

    await db.query('DELETE FROM application WHERE application_id = $1', [id]);
    res.json({ success: true });
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
        a.content,
        (SELECT comment FROM approval_record ar WHERE ar.application_id = a.application_id ORDER BY approval_time DESC LIMIT 1) as admin_comment
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
        attachmentData: contentObj.attachmentData || null,
        templateId: contentObj.templateId || null,
        dynamicFields: contentObj.dynamicFields || {},
        comment: contentObj.comment || contentObj.text || '无',
        admin_comment: row.admin_comment || ''
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

exports.convertDocxToPdf = async (req, res) => {
  const { docxBase64 } = req.body;
  if (!docxBase64) {
    return res.status(400).json({ error: 'docxBase64 is required' });
  }

  try {
    // 1. Decode base64 to binary Buffer
    const base64Data = docxBase64.replace(/^data:.*?;base64,/, '');
    const docxBuffer = Buffer.from(base64Data, 'base64');

    // 2. Prepare FormData for Gotenberg
    const fileId = crypto.randomUUID();
    const file = new File([docxBuffer], `${fileId}.docx`, { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    const formData = new FormData();
    formData.append('files', file);

    // 3. Call Gotenberg API
    // Note: Gotenberg's default port is 3000, which conflicts with this Node app.
    // Assuming Gotenberg is mapped to port 3001 or specified via GOTENBERG_URL env var.
    const gotenbergUrl = process.env.GOTENBERG_URL || 'http://localhost:3001';
    
    const response = await fetch(`${gotenbergUrl}/forms/libreoffice/convert`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gotenberg returned ${response.status}: ${errText}`);
    }

    // 4. Parse PDF response
    const arrayBuffer = await response.arrayBuffer();
    const pdfBuffer = Buffer.from(arrayBuffer);
    const pdfBase64 = `data:application/pdf;base64,${pdfBuffer.toString('base64')}`;

    // 5. Return PDF
    res.json({ pdfDataUri: pdfBase64 });

  } catch (error) {
    console.error("PDF conversion error:", error);
    res.status(500).json({ error: 'Failed to convert document to PDF using Gotenberg: ' + error.message });
  }
};
