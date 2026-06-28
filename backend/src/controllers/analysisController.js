const db = require('../config/db');
const fs = require('fs/promises');
const path = require('path');
const xlsx = require('xlsx');
const { ensureCoreTables } = require('../bootstrap/ensureCoreTables');

const SUPPORTED_GRADES = ['24级', '25级'];

const DEFAULT_REQUIREMENTS_BY_GRADE = {
  '24级': [
    { module_name: '通识教育', credit_required: 30 },
    { module_name: '专业必修', credit_required: 50 },
    { module_name: '专业选修', credit_required: 18 },
    { module_name: '实践环节', credit_required: 10 },
  ],
  '25级': [
    { module_name: '通识教育', credit_required: 28 },
    { module_name: '专业必修', credit_required: 48 },
    { module_name: '专业选修', credit_required: 20 },
    { module_name: '实践环节', credit_required: 12 },
  ],
};

function normalizeGrade(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  if (/2024|24级|24/.test(text)) return '24级';
  if (/2025|25级|25/.test(text)) return '25级';
  return text;
}

function normalizeHeader(value) {
  return String(value || '').replace(/\s+/g, '').toLowerCase();
}

function pickValue(row, aliases) {
  const keys = Object.keys(row);
  const normalizedAliases = aliases.map(normalizeHeader);
  const matchedKey = keys.find((key) => normalizedAliases.includes(normalizeHeader(key)));
  return matchedKey ? row[matchedKey] : '';
}

function parseScore(value) {
  const text = String(value ?? '').trim();
  if (!text) return 0;
  const gradeMap = {
    优: 95,
    良: 85,
    中: 75,
    及格: 65,
    通过: 65,
    合格: 65,
    不及格: 0,
    未通过: 0,
  };
  if (gradeMap[text] !== undefined) return gradeMap[text];
  const numeric = Number.parseFloat(text.replace(/[^\d.]/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
}

function isPassed(course) {
  const rawScore = String(course.rawScore ?? '').trim();
  if (/不及格|未通过|不合格|fail/i.test(rawScore)) return false;
  if (/优|良|中|及格|通过|合格|pass/i.test(rawScore)) return true;
  return Number(course.score || 0) >= 60;
}

function detectModule(course) {
  const text = `${course.module || ''} ${course.name || ''}`;
  if (/通识|大学英语|体育|思政|马克思|心理|美育|军事|创新创业|劳动教育/.test(text)) return '通识教育';
  if (/实践|实训|实验|课程设计|毕业设计|科研训练|竞赛|实习|项目实践/.test(text)) return '实践环节';
  if (/选修|人工智能|机器学习|数据挖掘|大数据|云计算|安全|前沿|专题|方向/.test(text)) return '专业选修';
  return '专业必修';
}

function parseDelimitedLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function rowsFromCsv(content) {
  const lines = content
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return [];
  const headers = parseDelimitedLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseDelimitedLine(line);
    return headers.reduce((row, header, index) => {
      row[header || `列${index + 1}`] = values[index] || '';
      return row;
    }, {});
  });
}

function rowsFromExcel(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) return [];
  return xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
}

async function parseTranscriptFile(filePath, originalName = '') {
  const extension = path.extname(originalName || filePath).toLowerCase();
  let rows = [];

  if (extension === '.csv' || extension === '.txt') {
    rows = rowsFromCsv(await fs.readFile(filePath, 'utf8'));
  } else if (extension === '.xls' || extension === '.xlsx') {
    rows = rowsFromExcel(filePath);
  } else {
    throw new Error('暂不支持自动解析该文件类型，请上传 CSV、XLS 或 XLSX 格式成绩单。');
  }

  const courses = rows
    .map((row) => {
      const name = String(pickValue(row, ['课程名称', '课程名', '课程', 'name', 'course', 'course_name']) || '').trim();
      const credit = Number.parseFloat(String(pickValue(row, ['学分', 'credit', 'credits']) || '').replace(/[^\d.]/g, '')) || 0;
      const rawScore = pickValue(row, ['成绩', '分数', 'score', 'grade', '总评成绩']);
      const module = String(pickValue(row, ['模块', '课程模块', '类别', '课程类别', 'module', 'category']) || '').trim();
      return {
        name,
        credit,
        score: parseScore(rawScore),
        rawScore,
        module,
      };
    })
    .filter((course) => course.name && course.credit > 0 && isPassed(course));

  const totalCredits = Number(courses.reduce((sum, course) => sum + course.credit, 0).toFixed(1));
  const creditsByModule = courses.reduce((acc, course) => {
    const moduleName = detectModule(course);
    acc[moduleName] = Number(((acc[moduleName] || 0) + course.credit).toFixed(1));
    return acc;
  }, {});

  return { courses, totalCredits, creditsByModule, rawRowCount: rows.length };
}

function buildModuleProgress(parsed, requirements) {
  return requirements.map((requirement) => {
    const total = Number(requirement.credit_required) || 0;
    const done = Number((parsed.creditsByModule[requirement.module_name] || 0).toFixed(1));
    const pct = total ? done / total : 0;
    return {
      name: requirement.module_name,
      done,
      total,
      missing: Number(Math.max(total - done, 0).toFixed(1)),
      tone: pct >= 1 ? 'green' : pct >= 0.7 ? 'amber' : 'red',
    };
  });
}

function buildAnalysis(parsed, requirements, context) {
  const moduleProgress = buildModuleProgress(parsed, requirements);
  const missingModules = moduleProgress.filter((item) => item.done < item.total);
  const planName = context.plan?.name || `${context.grade}默认培养方案`;
  const sourceText = context.usesFallback
    ? '当前年级尚未维护课程规则，系统已使用内置规则进行演示分析'
    : `已匹配培养方案“${planName}”`;

  if (!parsed.courses.length) {
    return {
      missingModule: '成绩单内未识别到已通过课程',
      suggestion: `请选择${context.grade}后上传包含“课程名称、学分、成绩”的 CSV 或 Excel 文件；${sourceText}。`,
      warningLevel: 'High',
      moduleProgress,
    };
  }

  if (missingModules.length) {
    const missingText = missingModules.map((item) => `${item.name}缺少 ${item.missing} 学分`).join('，');
    return {
      missingModule: missingText,
      suggestion: `${sourceText}。已识别 ${parsed.courses.length} 门已通过课程，合计 ${parsed.totalCredits} 学分；建议优先补足 ${missingModules.map((item) => item.name).join('、')} 模块。`,
      warningLevel: missingModules.some((item) => item.missing >= 8) ? 'High' : 'Low',
      moduleProgress,
    };
  }

  return {
    missingModule: '培养方案学分要求已基本达成',
    suggestion: `${sourceText}。已识别 ${parsed.courses.length} 门已通过课程，合计 ${parsed.totalCredits} 学分；建议继续核对毕业设计、实践环节和学院人工审核要求。`,
    warningLevel: 'Low',
    moduleProgress,
  };
}

async function ensureAnalysisSchema() {
  await ensureCoreTables();
  await db.query(`
    CREATE TABLE IF NOT EXISTS transcript_task (
      transcript_id VARCHAR(50) PRIMARY KEY,
      student_id VARCHAR(50) REFERENCES student_profile(student_id),
      file_url VARCHAR(255),
      parse_status VARCHAR(20),
      upload_time TIMESTAMP
    )
  `);
  await db.query(`
    CREATE TABLE IF NOT EXISTS analysis_result (
      result_id VARCHAR(50) PRIMARY KEY,
      transcript_id VARCHAR(50) REFERENCES transcript_task(transcript_id),
      missing_module VARCHAR(255),
      suggestion TEXT,
      warning_level VARCHAR(20)
    )
  `);
  await db.query(`
    ALTER TABLE transcript_task
      ADD COLUMN IF NOT EXISTS selected_grade VARCHAR(20),
      ADD COLUMN IF NOT EXISTS plan_id VARCHAR(50),
      ADD COLUMN IF NOT EXISTS original_name VARCHAR(255)
  `);
  await db.query(`
    ALTER TABLE analysis_result
      ADD COLUMN IF NOT EXISTS detail_json TEXT,
      ADD COLUMN IF NOT EXISTS plan_id VARCHAR(50),
      ADD COLUMN IF NOT EXISTS selected_grade VARCHAR(20)
  `);
  await db.query('ALTER TABLE analysis_result ALTER COLUMN missing_module TYPE TEXT');
}

async function getPlanForGrade(grade, studentMajor = '') {
  const normalizedGrade = normalizeGrade(grade);
  const { rows: planRows } = await db.query(
    `SELECT *
     FROM training_plan
     WHERE COALESCE(status, 'published') = 'published'
     ORDER BY updated_at DESC`
  );

  const matchingPlans = planRows.filter((plan) => normalizeGrade(plan.grade) === normalizedGrade);
  const majorText = String(studentMajor || '').trim();
  const plan = matchingPlans.find((item) => majorText && String(item.major || '').includes(majorText))
    || matchingPlans.find((item) => !String(item.major || '').trim())
    || matchingPlans[0]
    || null;

  if (!plan) {
    return {
      plan: null,
      requirements: DEFAULT_REQUIREMENTS_BY_GRADE[normalizedGrade] || DEFAULT_REQUIREMENTS_BY_GRADE['24级'],
      usesFallback: true,
    };
  }

  const { rows: requirementRows } = await db.query(
    `SELECT module_name, credit_required
     FROM course_requirement
     WHERE plan_id = $1
     ORDER BY requirement_id ASC`,
    [plan.plan_id]
  );

  return {
    plan,
    requirements: requirementRows.length
      ? requirementRows
      : (DEFAULT_REQUIREMENTS_BY_GRADE[normalizedGrade] || DEFAULT_REQUIREMENTS_BY_GRADE['24级']),
    usesFallback: requirementRows.length === 0,
  };
}

exports.uploadTranscript = async (req, res) => {
  try {
    await ensureAnalysisSchema();
    if (!req.file) {
      return res.status(400).json({ error: '请先选择需要上传的成绩单文件' });
    }

    const selectedGrade = normalizeGrade(req.body.grade || req.body.selectedGrade);
    if (!SUPPORTED_GRADES.includes(selectedGrade)) {
      return res.status(400).json({ error: '请先选择 24级 或 25级本科生，再上传成绩单' });
    }

    const { rows: profileRows } = await db.query(
      'SELECT student_id, major, grade FROM student_profile WHERE user_id = $1',
      [req.user.userId]
    );
    if (profileRows.length === 0) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    const profile = profileRows[0];
    const planContext = await getPlanForGrade(selectedGrade, profile.major);
    const transcriptId = `TRN-${Date.now()}`;
    const fileUrl = req.file.path;

    const { rows } = await db.query(
      `INSERT INTO transcript_task (transcript_id, student_id, file_url, parse_status, upload_time, selected_grade, plan_id, original_name)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, $5, $6, $7)
       RETURNING *`,
      [
        transcriptId,
        profile.student_id,
        fileUrl,
        'Pending',
        selectedGrade,
        planContext.plan?.plan_id || null,
        req.file.originalname || '',
      ]
    );

    setTimeout(async () => {
      try {
        const parsed = await parseTranscriptFile(req.file.path, req.file.originalname);
        const analysis = buildAnalysis(parsed, planContext.requirements, {
          grade: selectedGrade,
          plan: planContext.plan,
          usesFallback: planContext.usesFallback,
        });
        await ensureAnalysisSchema();
        await db.query('UPDATE transcript_task SET parse_status = $1 WHERE transcript_id = $2', ['Success', transcriptId]);
        const resultId = `RES-${Date.now()}`;
        await db.query(
          `INSERT INTO analysis_result (result_id, transcript_id, missing_module, suggestion, warning_level, detail_json, plan_id, selected_grade)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [
            resultId,
            transcriptId,
            analysis.missingModule,
            analysis.suggestion,
            analysis.warningLevel,
            JSON.stringify({
              moduleProgress: analysis.moduleProgress,
              selectedGrade,
              plan: planContext.plan ? {
                id: planContext.plan.plan_id,
                name: planContext.plan.name,
                grade: planContext.plan.grade,
                major: planContext.plan.major,
              } : null,
              requirementSource: planContext.usesFallback ? 'default' : 'training_plan',
              parsedCourseCount: parsed.courses.length,
              parsedTotalCredits: parsed.totalCredits,
              rawRowCount: parsed.rawRowCount,
            }),
            planContext.plan?.plan_id || null,
            selectedGrade,
          ]
        );
      } catch (e) {
        console.error('Parsing task failed:', e);
        await db.query('UPDATE transcript_task SET parse_status = $1 WHERE transcript_id = $2', ['Failed', transcriptId]);
        const resultId = `RES-${Date.now()}`;
        await ensureAnalysisSchema();
        await db.query(
          `INSERT INTO analysis_result (result_id, transcript_id, missing_module, suggestion, warning_level, detail_json, plan_id, selected_grade)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [
            resultId,
            transcriptId,
            '成绩单解析失败',
            e.message || '成绩单解析失败，请检查文件格式后重新上传。',
            'High',
            JSON.stringify({
              moduleProgress: buildModuleProgress({ creditsByModule: {} }, planContext.requirements),
              selectedGrade,
              plan: planContext.plan ? {
                id: planContext.plan.plan_id,
                name: planContext.plan.name,
                grade: planContext.plan.grade,
                major: planContext.plan.major,
              } : null,
              requirementSource: planContext.usesFallback ? 'default' : 'training_plan',
              parseError: e.message,
            }),
            planContext.plan?.plan_id || null,
            selectedGrade,
          ]
        );
      }
    }, 800);

    res.status(202).json({
      ...rows[0],
      selected_grade: selectedGrade,
      matched_plan: planContext.plan ? {
        id: planContext.plan.plan_id,
        name: planContext.plan.name,
        grade: planContext.plan.grade,
        major: planContext.plan.major,
      } : null,
      requirement_source: planContext.usesFallback ? 'default' : 'training_plan',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAnalysisResult = async (req, res) => {
  const { transcriptId } = req.params;
  try {
    await ensureAnalysisSchema();
    const { rows } = await db.query(
      `SELECT ar.*, tt.parse_status, tt.upload_time, tt.original_name
       FROM analysis_result ar
       LEFT JOIN transcript_task tt ON tt.transcript_id = ar.transcript_id
       WHERE ar.transcript_id = $1
       ORDER BY ar.result_id DESC
       LIMIT 1`,
      [transcriptId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Result not found or parsing in progress' });
    }
    const result = rows[0];
    if (result.detail_json) {
      try {
        const detail = JSON.parse(result.detail_json);
        result.module_progress = detail.moduleProgress || [];
        result.selected_grade = result.selected_grade || detail.selectedGrade;
        result.plan = detail.plan || null;
        result.requirement_source = detail.requirementSource || '';
        result.parsed_course_count = detail.parsedCourseCount || 0;
        result.parsed_total_credits = detail.parsedTotalCredits || 0;
        result.parse_error = detail.parseError || '';
      } catch (e) {
        result.module_progress = [];
      }
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
