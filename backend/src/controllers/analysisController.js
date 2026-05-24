const db = require('../config/db');
const fs = require('fs/promises');

const DEFAULT_REQUIREMENTS = [
  { module_name: '通识教育', credit_required: 30 },
  { module_name: '专业必修', credit_required: 48 },
  { module_name: '专业选修', credit_required: 20 },
  { module_name: '实践环节', credit_required: 8 },
];

function detectModule(course) {
  const text = `${course.module || ''} ${course.name || ''}`;
  if (/通识|大学英语|体育|思政|马克思|心理|美育/.test(text)) return '通识教育';
  if (/实践|实训|实验|课程设计|毕业设计|科研训练|竞赛/.test(text)) return '实践环节';
  if (/选修|人工智能|数据库|导论|系统|大数据|云计算|安全/.test(text)) return '专业选修';
  return '专业必修';
}

function parseCsvTranscript(content) {
  const rows = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const courses = rows.slice(1).map((line) => {
    const [name = '', credit = '0', score = '0', module = ''] = line.split(',').map((item) => item.trim());
    return {
      name,
      credit: Number.parseFloat(credit) || 0,
      score: Number.parseFloat(score) || 0,
      module,
    };
  });

  const totalCredits = courses.reduce((sum, course) => sum + course.credit, 0);
  const creditsByModule = courses.reduce((acc, course) => {
    const moduleName = detectModule(course);
    acc[moduleName] = (acc[moduleName] || 0) + course.credit;
    return acc;
  }, {});

  return { courses, totalCredits, creditsByModule };
}

function buildModuleProgress(parsed, requirements = DEFAULT_REQUIREMENTS) {
  return requirements.map((requirement) => {
    const total = Number(requirement.credit_required) || 0;
    const done = Number((parsed.creditsByModule[requirement.module_name] || 0).toFixed(1));
    const pct = total ? done / total : 0;
    return {
      name: requirement.module_name,
      done,
      total,
      tone: pct >= 1 ? 'green' : pct >= 0.7 ? 'amber' : 'red',
    };
  });
}

function buildAnalysis(parsed, requirements) {
  const moduleProgress = buildModuleProgress(parsed, requirements);
  const missingModules = moduleProgress
    .filter((item) => item.done < item.total)
    .map((item) => ({ ...item, missing: Number((item.total - item.done).toFixed(1)) }));

  if (!parsed.courses.length) {
    return {
      missingModule: '成绩单内容未识别',
      suggestion: '请上传包含课程名称、学分、成绩三列的 CSV 文件。',
      warningLevel: 'High',
      moduleProgress,
    };
  }

  if (missingModules.length) {
    const firstMissing = missingModules[0];
    return {
      missingModule: `${firstMissing.name}缺少 ${firstMissing.missing} 学分`,
      suggestion: `已识别 ${parsed.courses.length} 门课程、合计 ${parsed.totalCredits} 学分。建议优先补足${missingModules.map((item) => item.name).join('、')}模块要求。`,
      warningLevel: missingModules.some((item) => item.missing >= 8) ? 'High' : 'Low',
      moduleProgress,
    };
  }

  return {
    missingModule: '培养方案基本达标',
    suggestion: `已识别 ${parsed.courses.length} 门课程、合计 ${parsed.totalCredits} 学分。建议继续关注实践环节和毕业要求确认。`,
    warningLevel: 'Low',
    moduleProgress,
  };
}

async function getRequirements() {
  const { rows } = await db.query(
    `SELECT module_name, credit_required
     FROM course_requirement
     ORDER BY requirement_id ASC`
  );
  return rows.length ? rows : DEFAULT_REQUIREMENTS;
}

async function ensureAnalysisDetailColumn() {
  await db.query('ALTER TABLE analysis_result ADD COLUMN IF NOT EXISTS detail_json TEXT');
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
        const requirements = await getRequirements();
        const analysis = buildAnalysis(parseCsvTranscript(fileContent), requirements);
        await ensureAnalysisDetailColumn();
        await db.query('UPDATE transcript_task SET parse_status = $1 WHERE transcript_id = $2', ['Success', transcriptId]);
        const resultId = `RES-${Date.now()}`;
        await db.query(
          'INSERT INTO analysis_result (result_id, transcript_id, missing_module, suggestion, warning_level, detail_json) VALUES ($1, $2, $3, $4, $5, $6)',
          [
            resultId,
            transcriptId,
            analysis.missingModule,
            analysis.suggestion,
            analysis.warningLevel,
            JSON.stringify({ moduleProgress: analysis.moduleProgress }),
          ]
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
    await ensureAnalysisDetailColumn();
    const { rows } = await db.query('SELECT * FROM analysis_result WHERE transcript_id = $1', [transcriptId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Result not found or parsing in progress' });
    }
    const result = rows[0];
    if (result.detail_json) {
      try {
        const detail = JSON.parse(result.detail_json);
        result.module_progress = detail.moduleProgress || [];
      } catch (e) {
        result.module_progress = [];
      }
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
