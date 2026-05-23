const db = require('../config/db');
const fs = require('fs/promises');

function parseCsvTranscript(content) {
  const rows = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const courses = rows.slice(1).map((line) => {
    const [name = '', credit = '0', score = '0'] = line.split(',').map((item) => item.trim());
    return {
      name,
      credit: Number.parseFloat(credit) || 0,
      score: Number.parseFloat(score) || 0,
    };
  });

  const totalCredits = courses.reduce((sum, course) => sum + course.credit, 0);
  const electiveCredits = courses
    .filter((course) => /人工智能|数据库|实践|选修|导论|系统/i.test(course.name))
    .reduce((sum, course) => sum + course.credit, 0);

  return { courses, totalCredits, electiveCredits };
}

function buildAnalysis(parsed) {
  if (!parsed.courses.length) {
    return {
      missingModule: '成绩单内容未识别',
      suggestion: '请上传包含课程名称、学分、成绩三列的 CSV 文件。',
      warningLevel: 'High',
    };
  }

  if (parsed.electiveCredits < 8) {
    return {
      missingModule: `专业选修缺少 ${8 - parsed.electiveCredits} 学分`,
      suggestion: `已识别 ${parsed.courses.length} 门课程、合计 ${parsed.totalCredits} 学分。建议补修数据库系统实践、人工智能导论等方向课程。`,
      warningLevel: 'Low',
    };
  }

  return {
    missingModule: '培养方案基本达标',
    suggestion: `已识别 ${parsed.courses.length} 门课程、合计 ${parsed.totalCredits} 学分。建议继续关注实践环节和毕业要求确认。`,
    warningLevel: 'Low',
  };
}

exports.uploadTranscript = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const { rows: profileRows } = await db.query(
      'SELECT student_id FROM student_profile WHERE user_id = $1',
      [req.user.userId]
    );
    if (profileRows.length === 0) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    const transcriptId = `TRN-${Date.now()}`;
    const fileUrl = req.file.path;

    const { rows } = await db.query(
      'INSERT INTO transcript_task (transcript_id, student_id, file_url, parse_status, upload_time) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *',
      [transcriptId, profileRows[0].student_id, fileUrl, 'Pending']
    );

    setTimeout(async () => {
      try {
        const fileContent = await fs.readFile(req.file.path, 'utf8');
        const analysis = buildAnalysis(parseCsvTranscript(fileContent));
        await db.query('UPDATE transcript_task SET parse_status = $1 WHERE transcript_id = $2', ['Success', transcriptId]);
        const resultId = `RES-${Date.now()}`;
        await db.query(
          'INSERT INTO analysis_result (result_id, transcript_id, missing_module, suggestion, warning_level) VALUES ($1, $2, $3, $4, $5)',
          [resultId, transcriptId, analysis.missingModule, analysis.suggestion, analysis.warningLevel]
        );
      } catch (e) {
        console.error('Parsing task failed:', e);
        await db.query('UPDATE transcript_task SET parse_status = $1 WHERE transcript_id = $2', ['Failed', transcriptId]);
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
