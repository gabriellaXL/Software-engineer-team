const db = require('../config/db');
const fs = require('fs/promises');
const path = require('path');
const xlsx = require('xlsx');
const { ensureCoreTables } = require('../bootstrap/ensureCoreTables');

const SUPPORTED_GRADES = ['24级', '25级'];

const PRESET_PLAN_RULES = {
  '24级': {
    id: 'PRESET-INFO-2024',
    name: '2024级信息学院大类培养方案基础规则',
    source: 'preset_info_college_2024',
    description: '按培养方案核心模块预置的保守展示规则，复杂认定以学院人工审核为准。',
    modules: [
      {
        key: 'general',
        name: '通识模块',
        requiredCredits: 30,
        categories: [
          '公共体育',
          '新生研讨课',
          '思想政治理论课',
          '公共外语',
          '公共外语（拓展类课程）',
          '心理健康教育',
          '公共选修课',
          '军事课',
          '通识核心课',
          '一般通识课',
          '美育课程',
          '职业生涯规划',
        ],
        keywords: ['体育', '英语', '思政', '马克思', '心理', '美育', '军事', '通识', '职业生涯', '新生研讨'],
      },
      {
        key: 'major_foundation',
        name: '部类与专业基础',
        requiredCredits: 26,
        categories: ['部类基础', '部类共同'],
        requiredCourses: ['高等数学Ⅰ', '高等数学Ⅱ', '高等代数Ⅰ', '高等代数Ⅱ', '程序设计'],
        keywords: ['高等数学', '高等代数', '程序设计'],
      },
      {
        key: 'major_required',
        name: '专业核心/必修',
        requiredCredits: 26,
        categories: ['专业核心课', '专业必修', '专业必修课'],
        requiredCourses: [
          '离散数学A',
          '概率论与数理统计',
          '数据科学导论',
          '计算机系统基础Ⅰ',
          '数据结构与算法Ⅰ',
          '网络空间安全引论',
          '数据库系统',
          '操作系统',
        ],
        keywords: ['离散数学', '概率论', '数据科学导论', '计算机系统', '数据结构', '网络空间安全', '数据库', '操作系统'],
      },
      {
        key: 'major_elective',
        name: '专业选修/个性化选修',
        requiredCredits: 12,
        categories: ['专业选修', '专业选修课', '个性化选修', '方向选修'],
        keywords: ['选修', '图论', '机器学习', '人工智能', '数据挖掘', '云计算', '前沿', '专题'],
      },
      {
        key: 'practice',
        name: '科研与实践环节',
        requiredCredits: 8,
        categories: ['科研与实践环节', '实践环节', '实验实践', '专业实践'],
        requiredCourses: ['军训', '综合设计', '毕业论文（设计）'],
        keywords: ['实践', '实训', '实验', '课程设计', '综合设计', '军训', '毕业论文', '毕业设计', '科研训练', '竞赛'],
      },
    ],
  },
  '25级': {
    id: 'PRESET-INFO-2025',
    name: '2025级信息学院大类培养方案基础规则',
    source: 'preset_info_college_2025',
    description: '按培养方案核心模块预置的保守展示规则，复杂认定以学院人工审核为准。',
    modules: [
      {
        key: 'general',
        name: '通识模块',
        requiredCredits: 30,
        categories: [
          '公共体育',
          '新生研讨课',
          '思想政治理论课',
          '公共外语',
          '公共外语（拓展类课程）',
          '心理健康教育',
          '公共选修课',
          '军事课',
          '通识核心课',
          '一般通识课',
          '美育课程',
          '职业生涯规划',
        ],
        keywords: ['体育', '英语', '思政', '马克思', '心理', '美育', '军事', '通识', '职业生涯', '新生研讨'],
      },
      {
        key: 'major_foundation',
        name: '部类与专业基础',
        requiredCredits: 26,
        categories: ['部类基础', '部类共同'],
        requiredCourses: ['高等数学Ⅰ', '高等数学Ⅱ', '高等代数Ⅰ', '高等代数Ⅱ', '程序设计'],
        keywords: ['高等数学', '高等代数', '程序设计'],
      },
      {
        key: 'major_required',
        name: '专业核心/必修',
        requiredCredits: 28,
        categories: ['专业核心课', '专业必修', '专业必修课'],
        requiredCourses: [
          '离散数学A',
          '概率论与数理统计',
          '数据科学导论',
          '计算机系统基础Ⅰ',
          '数据结构与算法Ⅰ',
          '网络空间安全引论',
          '数据库系统',
          '操作系统',
        ],
        keywords: ['离散数学', '概率论', '数据科学导论', '计算机系统', '数据结构', '网络空间安全', '数据库', '操作系统'],
      },
      {
        key: 'major_elective',
        name: '专业选修/个性化选修',
        requiredCredits: 14,
        categories: ['专业选修', '专业选修课', '个性化选修', '方向选修'],
        keywords: ['选修', '图论', '机器学习', '人工智能', '数据挖掘', '云计算', '前沿', '专题'],
      },
      {
        key: 'practice',
        name: '科研与实践环节',
        requiredCredits: 8,
        categories: ['科研与实践环节', '实践环节', '实验实践', '专业实践'],
        requiredCourses: ['军训', '综合设计', '毕业论文（设计）'],
        keywords: ['实践', '实训', '实验', '课程设计', '综合设计', '军训', '毕业论文', '毕业设计', '科研训练', '竞赛'],
      },
    ],
  },
};

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

function normalizeCourseText(value) {
  return String(value || '')
    .trim()
    .replace(/[（）]/g, (char) => (char === '（' ? '(' : ')'))
    .replace(/[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ]/g, (char) => ({
      Ⅰ: 'I',
      Ⅱ: 'II',
      Ⅲ: 'III',
      Ⅳ: 'IV',
      Ⅴ: 'V',
      Ⅵ: 'VI',
      Ⅶ: 'VII',
      Ⅷ: 'VIII',
      Ⅸ: 'IX',
      Ⅹ: 'X',
    }[char] || char))
    .replace(/\s+/g, '')
    .toLowerCase();
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
    P: 65,
    p: 65,
    F: 0,
    f: 0,
  };
  if (gradeMap[text] !== undefined) return gradeMap[text];
  const numeric = Number.parseFloat(text.replace(/[^\d.]/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
}

function isPassed(course) {
  const rawScore = String(course.rawScore ?? '').trim();
  if (/不及格|未通过|不合格|fail|^f$/i.test(rawScore)) return false;
  if (/优|良|中|及格|通过|合格|pass|^p$/i.test(rawScore)) return true;
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
      const code = String(pickValue(row, ['课程代码', '课程编码', 'code', 'course_code']) || '').trim();
      const credit = Number.parseFloat(String(pickValue(row, ['学分', 'credit', 'credits']) || '').replace(/[^\d.]/g, '')) || 0;
      const rawScore = pickValue(row, ['最终成绩', '总评成绩', '成绩', '分数', 'score', 'grade', '成绩标志', '期末成绩']);
      const category = String(pickValue(row, ['课程类别', '类别', '课程性质', '性质', 'category', 'type']) || '').trim();
      const module = String(pickValue(row, ['模块', '课程模块', 'module']) || '').trim();
      return {
        code,
        name,
        credit,
        score: parseScore(rawScore),
        rawScore,
        category,
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

function courseMatchesText(course, value) {
  const target = normalizeCourseText(value);
  if (!target) return false;
  const name = normalizeCourseText(course.name);
  const code = normalizeCourseText(course.code);
  return name === target || code === target || name.includes(target) || target.includes(name);
}

function classifyCourseByRule(course, rule) {
  const category = String(course.category || '').trim();
  const text = `${course.name || ''} ${course.category || ''} ${course.module || ''}`;

  for (const moduleRule of rule.modules || []) {
    if ((moduleRule.requiredCourses || []).some((item) => courseMatchesText(course, item))) {
      return {
        key: moduleRule.key,
        name: moduleRule.name,
        confidence: 'high',
        reason: '匹配培养方案必修/核心课程清单',
      };
    }
  }

  for (const moduleRule of rule.modules || []) {
    if ((moduleRule.categories || []).some((item) => normalizeCourseText(item) === normalizeCourseText(category))) {
      return {
        key: moduleRule.key,
        name: moduleRule.name,
        confidence: 'high',
        reason: `匹配成绩单课程类别“${category}”`,
      };
    }
  }

  for (const moduleRule of rule.modules || []) {
    if ((moduleRule.keywords || []).some((keyword) => new RegExp(keyword).test(text))) {
      return {
        key: moduleRule.key,
        name: moduleRule.name,
        confidence: 'low',
        reason: '按课程名称关键词保守归类',
      };
    }
  }

  return null;
}

function buildPresetRuleAnalysis(parsed, rule, context) {
  const moduleProgress = (rule.modules || []).map((moduleRule) => ({
    key: moduleRule.key,
    name: moduleRule.name,
    done: 0,
    total: Number(moduleRule.requiredCredits) || 0,
    missing: Number(moduleRule.requiredCredits) || 0,
    tone: 'red',
    lowConfidenceCredits: 0,
  }));
  const moduleMap = new Map(moduleProgress.map((item) => [item.key, item]));
  const matchedCourses = [];
  const unclassifiedCourses = [];

  for (const course of parsed.courses) {
    const matched = classifyCourseByRule(course, rule);
    if (!matched) {
      unclassifiedCourses.push({
        name: course.name,
        credit: course.credit,
        category: course.category || '',
        module: course.module || '',
        reason: '未命中课程清单、课程类别或关键词规则',
      });
      continue;
    }
    const progress = moduleMap.get(matched.key);
    if (progress) {
      progress.done = Number((progress.done + course.credit).toFixed(1));
      if (matched.confidence !== 'high') {
        progress.lowConfidenceCredits = Number((progress.lowConfidenceCredits + course.credit).toFixed(1));
      }
    }
    matchedCourses.push({
      name: course.name,
      credit: course.credit,
      category: course.category || '',
      module: course.module || '',
      matchedModule: matched.name,
      confidence: matched.confidence,
      reason: matched.reason,
    });
  }

  for (const item of moduleProgress) {
    const pct = item.total ? item.done / item.total : 0;
    item.missing = Number(Math.max(item.total - item.done, 0).toFixed(1));
    item.tone = pct >= 1 ? 'green' : pct >= 0.7 ? 'amber' : 'red';
  }

  const passedCourseNames = new Set(parsed.courses.map((course) => normalizeCourseText(course.name)));
  const missingRequiredCourses = [];
  for (const moduleRule of rule.modules || []) {
    for (const requiredName of moduleRule.requiredCourses || []) {
      const normalizedRequired = normalizeCourseText(requiredName);
      const hasCourse = [...passedCourseNames].some((name) => name === normalizedRequired || name.includes(normalizedRequired) || normalizedRequired.includes(name));
      if (!hasCourse) {
        missingRequiredCourses.push({
          name: requiredName,
          module: moduleRule.name,
        });
      }
    }
  }

  const missingModules = moduleProgress.filter((item) => item.done < item.total);
  const sourceText = `已匹配${context.grade}预置培养方案规则“${rule.name}”`;
  const missingModuleText = [
    ...missingModules.map((item) => `${item.name}缺少 ${item.missing} 学分`),
    ...missingRequiredCourses.slice(0, 4).map((item) => `${item.module}未识别《${item.name}》`),
  ].join('，') || '培养方案基础学分要求已基本达成';
  const cautionText = unclassifiedCourses.length
    ? `另有 ${unclassifiedCourses.length} 门课程暂未归类，已列为需人工确认。`
    : '未发现需人工确认的未归类课程。';
  const suggestion = missingModules.length || missingRequiredCourses.length
    ? `${sourceText}。已识别 ${parsed.courses.length} 门已通过课程，合计 ${parsed.totalCredits} 学分；建议优先补足 ${missingModules.map((item) => item.name).join('、') || '缺失必修课程'}。${cautionText}`
    : `${sourceText}。已识别 ${parsed.courses.length} 门已通过课程，合计 ${parsed.totalCredits} 学分；建议继续核对毕业论文、科研实践和学院人工审核要求。${cautionText}`;

  return {
    missingModule: missingModuleText,
    suggestion,
    warningLevel: missingModules.some((item) => item.missing >= 8) || missingRequiredCourses.length >= 3 ? 'High' : (missingModules.length || missingRequiredCourses.length || unclassifiedCourses.length ? 'Medium' : 'Low'),
    moduleProgress,
    missingRequiredCourses,
    unclassifiedCourses,
    matchedCourses,
    confidence: unclassifiedCourses.length || matchedCourses.some((course) => course.confidence !== 'high') ? 'medium' : 'high',
    rule,
  };
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
  await db.query(`
    ALTER TABLE training_plan
      ADD COLUMN IF NOT EXISTS rule_json TEXT
  `);
  await db.query('ALTER TABLE analysis_result ALTER COLUMN missing_module TYPE TEXT');
}

function parsePlanRuleJson(plan) {
  if (!plan?.rule_json) return null;
  try {
    const rule = JSON.parse(plan.rule_json);
    if (rule && Array.isArray(rule.modules)) return rule;
  } catch (e) {
    console.warn('Invalid training_plan.rule_json:', e.message);
  }
  return null;
}

function getPresetRuleForGrade(grade) {
  return PRESET_PLAN_RULES[normalizeGrade(grade)] || PRESET_PLAN_RULES['24级'];
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
      rule: getPresetRuleForGrade(normalizedGrade),
      ruleSource: 'preset',
      usesFallback: false,
    };
  }

  const { rows: requirementRows } = await db.query(
    `SELECT module_name, credit_required
     FROM course_requirement
     WHERE plan_id = $1
     ORDER BY requirement_id ASC`,
    [plan.plan_id]
  );

  const storedRule = parsePlanRuleJson(plan);

  return {
    plan,
    requirements: requirementRows.length
      ? requirementRows
      : (DEFAULT_REQUIREMENTS_BY_GRADE[normalizedGrade] || DEFAULT_REQUIREMENTS_BY_GRADE['24级']),
    rule: storedRule || getPresetRuleForGrade(normalizedGrade),
    ruleSource: storedRule ? 'training_plan_rule' : 'preset',
    usesFallback: !storedRule && requirementRows.length === 0,
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
        const analysis = planContext.rule
          ? buildPresetRuleAnalysis(parsed, planContext.rule, {
            grade: selectedGrade,
            plan: planContext.plan,
            usesFallback: planContext.usesFallback,
          })
          : buildAnalysis(parsed, planContext.requirements, {
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
              ruleSource: planContext.ruleSource || (planContext.usesFallback ? 'default' : 'training_plan'),
              ruleName: analysis.rule?.name || '',
              confidence: analysis.confidence || 'medium',
              missingRequiredCourses: analysis.missingRequiredCourses || [],
              unclassifiedCourses: analysis.unclassifiedCourses || [],
              matchedCourses: analysis.matchedCourses || [],
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
              ruleSource: planContext.ruleSource || (planContext.usesFallback ? 'default' : 'training_plan'),
              ruleName: planContext.rule?.name || '',
              confidence: 'low',
              missingRequiredCourses: [],
              unclassifiedCourses: [],
              matchedCourses: [],
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
      rule_source: planContext.ruleSource || (planContext.usesFallback ? 'default' : 'training_plan'),
      rule_name: planContext.rule?.name || '',
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
      `SELECT ar.*, tt.parse_status, tt.upload_time, tt.original_name, tt.student_id
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
    if (req.user.role === 'student' || req.user.role === 'student_leader') {
      const { rows: profileRows } = await db.query(
        'SELECT student_id FROM student_profile WHERE user_id = $1',
        [req.user.userId]
      );
      if (!profileRows.length || profileRows[0].student_id !== result.student_id) {
        return res.status(403).json({ error: 'No permission to view this analysis result' });
      }
    }
    if (result.detail_json) {
      try {
        const detail = JSON.parse(result.detail_json);
        result.module_progress = detail.moduleProgress || [];
        result.selected_grade = result.selected_grade || detail.selectedGrade;
        result.plan = detail.plan || null;
        result.requirement_source = detail.requirementSource || '';
        result.rule_source = detail.ruleSource || '';
        result.rule_name = detail.ruleName || '';
        result.confidence = detail.confidence || '';
        result.missing_required_courses = detail.missingRequiredCourses || [];
        result.unclassified_courses = detail.unclassifiedCourses || [];
        result.matched_courses = detail.matchedCourses || [];
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
