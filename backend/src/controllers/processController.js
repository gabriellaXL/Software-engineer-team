const db = require('../config/db');
const { ensureCoreTables } = require('../bootstrap/ensureCoreTables');

function isStudentRole(role) {
  return role === 'student' || role === 'student_leader';
}

function normalizeSubmissionStatus(status) {
  const value = String(status || '').trim().toLowerCase();
  if (['draft', '草稿'].includes(value)) return 'draft';
  if (['pending', 'submitted', '待审核', '待提交'].includes(value)) return 'pending';
  if (['approved', '通过'].includes(value)) return 'approved';
  if (['rejected', '退回'].includes(value)) return 'rejected';
  return 'draft';
}

function normalizeProgressStatus(status) {
  const value = String(status || '').trim().toLowerCase();
  if (['completed', 'done', 'approved', 'finished', '通过'].includes(value)) return 'Completed';
  if (['pending', 'inprogress', 'in_progress', 'active', '待审核', '进行中'].includes(value)) return 'InProgress';
  return 'Pending';
}

function normalizeProcessType(value) {
  const processType = String(value || '').trim().toLowerCase();
  return processType === 'league' ? 'league' : 'party';
}

function normalizeNodeTime(value, errorMessage = '节点日期时间格式无效') {
  if (value === undefined || value === null) return null;
  const raw = String(value).trim();
  if (!raw) return null;

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(errorMessage);
  }

  const normalized = raw.replace('T', ' ');
  return normalized.length === 16 ? `${normalized}:00` : normalized;
}

function normalizeNodeRange({ startAt, dueAt, scheduledAt }) {
  const normalizedStartAt = startAt !== undefined
    ? normalizeNodeTime(startAt, '开始时间格式无效')
    : (scheduledAt !== undefined ? normalizeNodeTime(scheduledAt, '节点日期时间格式无效') : null);
  const normalizedDueAt = dueAt !== undefined
    ? normalizeNodeTime(dueAt, '截止时间格式无效')
    : null;

  if (normalizedStartAt && normalizedDueAt) {
    const startTime = new Date(normalizedStartAt).getTime();
    const dueTime = new Date(normalizedDueAt).getTime();
    if (dueTime < startTime) {
      throw new Error('截止时间不能早于开始时间');
    }
  }

  return {
    normalizedStartAt,
    normalizedDueAt
  };
}

function normalizeReviewDecision(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (['approve', 'approved', 'pass', '通过'].includes(raw)) return 'approved';
  if (['reject', 'rejected', '退回'].includes(raw)) return 'rejected';
  throw new Error('审核结果无效');
}

function mapSubmission(row) {
  return {
    submissionId: row.submission_id,
    studentId: row.student_id,
    studentName: row.student_name || '',
    studentNo: row.student_no || '',
    nodeId: row.node_id,
    nodeName: row.node_name || '',
    processType: row.process_type || 'party',
    materialType: row.material_type || '',
    description: row.description || '',
    attachmentName: row.attachment_name || '',
    attachmentData: row.attachment_data || '',
    status: row.status || 'draft',
    reviewComment: row.review_comment || '',
    reviewedAt: row.reviewed_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    submittedAt: row.submitted_at
  };
}

function mapNode(row) {
  const startAt = row.start_at || row.scheduled_at || null;
  return {
    node_id: row.node_id,
    process_type: row.process_type,
    node_name: row.node_name,
    sequence: row.sequence,
    reminder_rule: row.reminder_rule || '',
    scheduled_at: startAt,
    start_at: startAt,
    due_at: row.due_at || null,
    node_detail: row.node_detail || '',
    attachment_name: row.attachment_name || '',
    attachment_data: row.attachment_data || ''
  };
}

function mapHistoryItem(row) {
  return {
    id: row.id,
    time: row.event_time,
    nodeName: row.node_name || '',
    action: row.action || '',
    actor: row.actor || '',
    result: row.result || '',
    detail: row.detail || '',
    resultTone: row.result_tone || 'neutral'
  };
}

async function resolveStudentId(req, explicitStudentId) {
  if (explicitStudentId) return explicitStudentId;
  if (!isStudentRole(req.user.role)) return null;
  const { rows } = await db.query('SELECT student_id FROM student_profile WHERE user_id = $1', [req.user.userId]);
  return rows[0]?.student_id || null;
}

exports.getProcessNodes = async (req, res) => {
  const processType = normalizeProcessType(req.query.processType);
  try {
    await ensureCoreTables();
    const { rows } = await db.query(
      'SELECT * FROM party_process_node WHERE process_type = $1 ORDER BY sequence ASC',
      [processType]
    );
    res.json(rows.map(mapNode));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProcessNode = async (req, res) => {
  const {
    processType = 'party',
    nodeName,
    sequence,
    reminderRule,
    startAt,
    dueAt,
    scheduledAt,
    nodeDetail,
    attachmentName,
    attachmentData
  } = req.body;
  if (!nodeName || !Number.isFinite(Number(sequence))) {
    return res.status(400).json({ error: '节点名称和顺序不能为空' });
  }

  try {
    await ensureCoreTables();
    const nodeId = `NODE-${Date.now()}`;
    const { normalizedStartAt, normalizedDueAt } = normalizeNodeRange({ startAt, dueAt, scheduledAt });
    const { rows } = await db.query(
      `INSERT INTO party_process_node (
         node_id, process_type, node_name, sequence, reminder_rule, scheduled_at, start_at, due_at, node_detail, attachment_name, attachment_data
       )
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING *`,
      [
        nodeId,
        normalizeProcessType(processType),
        String(nodeName).trim(),
        Number(sequence),
        String(reminderRule || '').trim(),
        normalizedStartAt,
        normalizedStartAt,
        normalizedDueAt,
        String(nodeDetail || '').trim(),
        String(attachmentName || '').trim(),
        String(attachmentData || '')
      ]
    );
    res.status(201).json(mapNode(rows[0]));
  } catch (err) {
    if (['节点日期时间格式无效', '开始时间格式无效', '截止时间格式无效', '截止时间不能早于开始时间'].includes(err.message)) {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.updateProcessNode = async (req, res) => {
  const { nodeId } = req.params;
  const { processType, nodeName, sequence, reminderRule, startAt, dueAt, scheduledAt, nodeDetail, attachmentName, attachmentData } = req.body;

  try {
    await ensureCoreTables();
    const hasStartAt = startAt !== undefined || scheduledAt !== undefined;
    const hasDueAt = dueAt !== undefined;
    const { normalizedStartAt, normalizedDueAt } = normalizeNodeRange({ startAt, dueAt, scheduledAt });
    const hasNodeDetail = nodeDetail !== undefined;
    const hasAttachmentName = attachmentName !== undefined;
    const hasAttachmentData = attachmentData !== undefined;
    const { rows } = await db.query(
      `UPDATE party_process_node
       SET process_type = COALESCE($1, process_type),
           node_name = COALESCE($2, node_name),
           sequence = COALESCE($3, sequence),
           reminder_rule = COALESCE($4, reminder_rule),
           scheduled_at = CASE WHEN $5 THEN $6 ELSE scheduled_at END,
           start_at = CASE WHEN $5 THEN $6 ELSE start_at END,
           due_at = CASE WHEN $7 THEN $8 ELSE due_at END,
           node_detail = CASE WHEN $9 THEN $10 ELSE node_detail END,
           attachment_name = CASE WHEN $11 THEN $12 ELSE attachment_name END,
           attachment_data = CASE WHEN $13 THEN $14 ELSE attachment_data END
       WHERE node_id = $15
       RETURNING *`,
      [
        processType ? normalizeProcessType(processType) : null,
        nodeName ? String(nodeName).trim() : null,
        Number.isFinite(Number(sequence)) ? Number(sequence) : null,
        reminderRule !== undefined ? String(reminderRule || '').trim() : null,
        hasStartAt,
        normalizedStartAt,
        hasDueAt,
        normalizedDueAt,
        hasNodeDetail,
        hasNodeDetail ? String(nodeDetail || '').trim() : null,
        hasAttachmentName,
        hasAttachmentName ? String(attachmentName || '').trim() : null,
        hasAttachmentData,
        hasAttachmentData ? String(attachmentData || '') : null,
        nodeId
      ]
    );
    if (!rows.length) return res.status(404).json({ error: '流程节点不存在' });
    res.json(mapNode(rows[0]));
  } catch (err) {
    if (['节点日期时间格式无效', '开始时间格式无效', '截止时间格式无效', '截止时间不能早于开始时间'].includes(err.message)) {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProcessNode = async (req, res) => {
  const { nodeId } = req.params;

  try {
    await ensureCoreTables();
    await db.query('DELETE FROM party_process_submission WHERE node_id = $1', [nodeId]);
    await db.query('DELETE FROM student_process_record WHERE node_id = $1', [nodeId]);
    const { rowCount } = await db.query('DELETE FROM party_process_node WHERE node_id = $1', [nodeId]);
    if (!rowCount) return res.status(404).json({ error: '流程节点不存在' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentProgress = async (req, res) => {
  const { studentId } = req.query;
  const processType = normalizeProcessType(req.query.processType);
  try {
    await ensureCoreTables();
    const resolvedStudentId = await resolveStudentId(req, studentId);
    if (!resolvedStudentId) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    const { rows } = await db.query(
      `SELECT r.*, n.node_name, n.process_type, n.sequence
       FROM student_process_record r
       JOIN party_process_node n ON r.node_id = n.node_id
       WHERE r.student_id = $1 AND n.process_type = $2
       ORDER BY n.sequence ASC`,
      [resolvedStudentId, processType]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProcessSubmissions = async (req, res) => {
  const { studentId, status } = req.query;
  const processType = normalizeProcessType(req.query.processType);
  try {
    await ensureCoreTables();
    const params = [processType];
    let sql = `
      SELECT
        s.*,
        n.node_name,
        n.process_type,
        sp.name AS student_name,
        sp.student_no
      FROM party_process_submission s
      LEFT JOIN party_process_node n ON n.node_id = s.node_id
      LEFT JOIN student_profile sp ON sp.student_id = s.student_id
      WHERE n.process_type = $1
    `;

    if (isStudentRole(req.user.role)) {
      const resolvedStudentId = await resolveStudentId(req, studentId);
      if (!resolvedStudentId) {
        return res.status(404).json({ error: 'Student profile not found' });
      }
      params.push(resolvedStudentId);
      sql += ` AND s.student_id = $${params.length}`;
    } else if (studentId) {
      params.push(studentId);
      sql += ` AND s.student_id = $${params.length}`;
    }

    if (status) {
      params.push(normalizeSubmissionStatus(status));
      sql += ` AND s.status = $${params.length}`;
    }
    sql += ' ORDER BY COALESCE(s.updated_at, s.created_at) DESC';
    const { rows } = await db.query(sql, params);
    res.json(rows.map(mapSubmission));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProcessHistory = async (req, res) => {
  const { studentId } = req.query;
  const processType = normalizeProcessType(req.query.processType);
  try {
    await ensureCoreTables();
    const resolvedStudentId = await resolveStudentId(req, studentId);
    if (!resolvedStudentId) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    const { rows } = await db.query(
      `
        SELECT
          s.submission_id AS id,
          CASE
            WHEN s.status IN ('approved', 'rejected') THEN COALESCE(s.reviewed_at, s.updated_at, s.submitted_at, s.created_at)
            ELSE COALESCE(s.submitted_at, s.updated_at, s.created_at)
          END AS event_time,
          n.node_name,
          CASE
            WHEN s.status IN ('approved', 'rejected') THEN '材料审核'
            ELSE '材料提交'
          END AS action,
          CASE
            WHEN s.status IN ('approved', 'rejected') THEN '管理员审核'
            ELSE '学生提交'
          END AS actor,
          CASE
            WHEN s.status = 'approved' THEN '已通过'
            WHEN s.status = 'rejected' THEN '已退回'
            ELSE '待审核'
          END AS result,
          CASE
            WHEN s.status = 'approved' THEN 'success'
            WHEN s.status = 'rejected' THEN 'danger'
            ELSE 'warning'
          END AS result_tone,
          CASE
            WHEN COALESCE(s.review_comment, '') <> '' AND COALESCE(s.description, '') <> ''
              THEN s.description || '；审批意见：' || s.review_comment
            WHEN COALESCE(s.review_comment, '') <> ''
              THEN '审批意见：' || s.review_comment
            ELSE COALESCE(s.description, '')
          END AS detail
        FROM party_process_submission s
        LEFT JOIN party_process_node n ON n.node_id = s.node_id
        WHERE s.student_id = $1 AND n.process_type = $2 AND s.status <> 'draft'

        UNION ALL

        SELECT
          r.record_id AS id,
          r.completed_time AS event_time,
          n.node_name,
          '节点推进' AS action,
          '系统记录' AS actor,
          '已完成' AS result,
          'success' AS result_tone,
          COALESCE(n.reminder_rule, '') AS detail
        FROM student_process_record r
        JOIN party_process_node n ON n.node_id = r.node_id
        WHERE r.student_id = $1
          AND n.process_type = $2
          AND LOWER(COALESCE(r.status, '')) IN ('completed', 'done', 'approved', 'finished')
          AND r.completed_time IS NOT NULL

        ORDER BY event_time DESC
      `,
      [resolvedStudentId, processType]
    );
    res.json(rows.map(mapHistoryItem));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.saveProcessSubmission = async (req, res) => {
  const {
    submissionId,
    studentId,
    nodeId,
    materialType,
    description,
    attachmentName,
    attachmentData,
    status
  } = req.body;

  if (!nodeId || !materialType) {
    return res.status(400).json({ error: '节点和材料类型不能为空' });
  }

  const normalizedStatus = normalizeSubmissionStatus(status);
  if (!['draft', 'pending'].includes(normalizedStatus)) {
    return res.status(400).json({ error: '当前仅支持保存草稿或提交待审核' });
  }

  const normalizedMaterialType = String(materialType).trim();
  const normalizedDescription = String(description || '').trim();
  const normalizedAttachmentName = String(attachmentName || '').trim();
  const normalizedAttachmentData = String(attachmentData || '');

  let client = null;
  try {
    await ensureCoreTables();
    const resolvedStudentId = await resolveStudentId(req, studentId);
    if (!resolvedStudentId) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    const { rows: nodeRows } = await db.query(
      'SELECT * FROM party_process_node WHERE node_id = $1',
      [nodeId]
    );
    const node = nodeRows[0];
    if (!node) {
      return res.status(404).json({ error: '流程节点不存在' });
    }
    const now = Date.now();
    const startTime = node.start_at || node.scheduled_at ? new Date(node.start_at || node.scheduled_at).getTime() : null;
    const dueTime = node.due_at ? new Date(node.due_at).getTime() : null;
    if (startTime && now < startTime) {
      return res.status(400).json({ error: '当前未到该节点开始时间，暂不可提交' });
    }
    if (dueTime && now > dueTime) {
      return res.status(400).json({ error: '当前已超过该节点截止时间，暂不可提交' });
    }

    client = await db.getClient();
    await client.query('BEGIN');

    let targetSubmissionId = submissionId;
    let existingSubmission = null;

    if (targetSubmissionId) {
      const { rows } = await client.query(
        'SELECT * FROM party_process_submission WHERE submission_id = $1',
        [targetSubmissionId]
      );
      existingSubmission = rows[0] || null;
      if (!existingSubmission) {
        await client.query('ROLLBACK');
        return res.status(404).json({ error: '流程草稿不存在' });
      }
      if (isStudentRole(req.user.role) && existingSubmission.student_id !== resolvedStudentId) {
        await client.query('ROLLBACK');
        return res.status(403).json({ error: '无权修改该流程草稿' });
      }
    } else {
      targetSubmissionId = `SUB-${Date.now()}`;
    }

    if (existingSubmission) {
      const nextAttachmentName = normalizedAttachmentData
        ? normalizedAttachmentName
        : String(existingSubmission.attachment_name || '').trim();
      const nextAttachmentData = normalizedAttachmentData
        ? normalizedAttachmentData
        : String(existingSubmission.attachment_data || '');
      const submittedAtValue = normalizedStatus === 'pending' ? new Date() : null;
      await client.query(
        `UPDATE party_process_submission
         SET node_id = $1,
             material_type = $2,
             description = $3,
             attachment_name = $4,
             attachment_data = $5,
             status = $6,
             updated_at = CURRENT_TIMESTAMP,
             submitted_at = COALESCE($7, submitted_at)
         WHERE submission_id = $8`,
        [
          nodeId,
          normalizedMaterialType,
          normalizedDescription,
          nextAttachmentName,
          nextAttachmentData,
          normalizedStatus,
          submittedAtValue,
          targetSubmissionId
        ]
      );
    } else {
      const submittedAtValue = normalizedStatus === 'pending' ? new Date() : null;
      await client.query(
        `INSERT INTO party_process_submission
          (submission_id, student_id, node_id, material_type, description, attachment_name, attachment_data, status, created_at, updated_at, submitted_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $9)`,
        [
          targetSubmissionId,
          resolvedStudentId,
          nodeId,
          normalizedMaterialType,
          normalizedDescription,
          normalizedAttachmentName,
          normalizedAttachmentData,
          normalizedStatus,
          submittedAtValue
        ]
      );
    }

    if (normalizedStatus === 'pending') {
      const { rows: recordRows } = await client.query(
        'SELECT * FROM student_process_record WHERE student_id = $1 AND node_id = $2',
        [resolvedStudentId, nodeId]
      );
      const existingRecord = recordRows[0] || null;
      if (!existingRecord) {
        await client.query(
          `INSERT INTO student_process_record (record_id, student_id, node_id, status, completed_time)
           VALUES ($1, $2, $3, $4, NULL)`,
          [`REC-${Date.now()}`, resolvedStudentId, nodeId, 'InProgress']
        );
      } else if (!['completed', 'done', 'approved', 'finished'].includes(String(existingRecord.status || '').toLowerCase())) {
        await client.query(
          `UPDATE student_process_record
           SET status = 'InProgress', completed_time = NULL
           WHERE record_id = $1`,
          [existingRecord.record_id]
        );
      }
    }

    const { rows } = await client.query(
      `
        SELECT s.*, n.node_name
        FROM party_process_submission s
        LEFT JOIN party_process_node n ON n.node_id = s.node_id
        WHERE s.submission_id = $1
      `,
      [targetSubmissionId]
    );

    await client.query('COMMIT');
    res.json(mapSubmission(rows[0]));
  } catch (err) {
    try {
      if (client) await client.query('ROLLBACK');
    } catch (rollbackError) {}
    res.status(500).json({ error: err.message });
  } finally {
    client?.release();
  }
};

exports.reviewProcessSubmission = async (req, res) => {
  const { submissionId } = req.params;
  const { result, comment } = req.body;

  let client = null;
  try {
    await ensureCoreTables();
    const reviewedStatus = normalizeReviewDecision(result);
    client = await db.getClient();
    await client.query('BEGIN');

    const { rows: submissionRows } = await client.query(
      `
        SELECT s.*, n.node_name, n.process_type, sp.name AS student_name, sp.student_no
        FROM party_process_submission s
        LEFT JOIN party_process_node n ON n.node_id = s.node_id
        LEFT JOIN student_profile sp ON sp.student_id = s.student_id
        WHERE s.submission_id = $1
      `,
      [submissionId]
    );
    const submission = submissionRows[0];
    if (!submission) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: '流程提交记录不存在' });
    }
    if (!['pending', 'rejected'].includes(String(submission.status || '').toLowerCase())) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: '当前状态不支持审核' });
    }

    await client.query(
      `UPDATE party_process_submission
       SET status = $1,
           review_comment = $2,
           reviewed_at = CURRENT_TIMESTAMP,
           updated_at = CURRENT_TIMESTAMP
       WHERE submission_id = $3`,
      [reviewedStatus, String(comment || '').trim(), submissionId]
    );

    const { rows: recordRows } = await client.query(
      'SELECT * FROM student_process_record WHERE student_id = $1 AND node_id = $2',
      [submission.student_id, submission.node_id]
    );
    const existingRecord = recordRows[0] || null;
    const nextRecordStatus = reviewedStatus === 'approved' ? 'Completed' : 'Pending';
    const completedTimeSql = reviewedStatus === 'approved' ? 'CURRENT_TIMESTAMP' : 'NULL';

    if (!existingRecord) {
      await client.query(
        `INSERT INTO student_process_record (record_id, student_id, node_id, status, completed_time)
         VALUES ($1, $2, $3, $4, ${completedTimeSql})`,
        [`REC-${Date.now()}`, submission.student_id, submission.node_id, nextRecordStatus]
      );
    } else {
      await client.query(
        `UPDATE student_process_record
         SET status = $1,
             completed_time = ${completedTimeSql}
         WHERE record_id = $2`,
        [nextRecordStatus, existingRecord.record_id]
      );
    }

    const { rows } = await client.query(
      `
        SELECT
          s.*,
          n.node_name,
          n.process_type,
          sp.name AS student_name,
          sp.student_no
        FROM party_process_submission s
        LEFT JOIN party_process_node n ON n.node_id = s.node_id
        LEFT JOIN student_profile sp ON sp.student_id = s.student_id
        WHERE s.submission_id = $1
      `,
      [submissionId]
    );

    await client.query('COMMIT');
    res.json(mapSubmission(rows[0]));
  } catch (err) {
    try {
      if (client) await client.query('ROLLBACK');
    } catch (rollbackError) {}
    if (err.message === '审核结果无效') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  } finally {
    client?.release();
  }
};

exports.deleteProcessSubmission = async (req, res) => {
  const { submissionId } = req.params;
  try {
    await ensureCoreTables();
    const { rows } = await db.query(
      'SELECT * FROM party_process_submission WHERE submission_id = $1',
      [submissionId]
    );
    const submission = rows[0];
    if (!submission) return res.status(404).json({ error: '流程草稿不存在' });
    if (submission.status !== 'draft') {
      return res.status(400).json({ error: '仅支持删除草稿状态的记录' });
    }

    if (isStudentRole(req.user.role)) {
      const resolvedStudentId = await resolveStudentId(req);
      if (!resolvedStudentId || resolvedStudentId !== submission.student_id) {
        return res.status(403).json({ error: '无权删除该流程草稿' });
      }
    }

    await db.query('DELETE FROM party_process_submission WHERE submission_id = $1', [submissionId]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProgress = async (req, res) => {
  const { recordId, status } = req.body;
  try {
    await ensureCoreTables();
    const normalizedStatus = normalizeProgressStatus(status);
    const completedTime = normalizedStatus === 'Completed' ? 'CURRENT_TIMESTAMP' : 'NULL';
    const { rows } = await db.query(
      `UPDATE student_process_record
       SET status = $1, completed_time = ${completedTime}
       WHERE record_id = $2
       RETURNING *`,
      [normalizedStatus, recordId]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
