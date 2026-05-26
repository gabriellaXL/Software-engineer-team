const icons = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path></svg>',
  message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>',
  route: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M6 16V9a4 4 0 0 1 4-4h5"></path><path d="M18 8v7a4 4 0 0 1-4 4H9"></path></svg>',
  bell: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M13.7 21a2 2 0 0 1-3.4 0"></path></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg>',
  chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-7"></path></svg>',
  download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>',
  upload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21V9"></path><path d="m17 14-5-5-5 5"></path><path d="M5 3h14"></path></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"></path></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>',
  database: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06A2 2 0 1 1 7.08 4.24l.06.06A1.7 1.7 0 0 0 9 4.64 1.7 1.7 0 0 0 10 3.08V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.1.33.27.64.5.9.32.37.8.57 1.28.57H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51.53Z"></path></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>'
};

const state = {
  role: null, // Default to null until logged in
  isAuthenticated: false,
  token: null,
  userProfile: null,
  studentView: "login", // Start at login view
  studentAppView: "list", // "list", "new", "profile"
  adminView: "dashboard",
  policyQuery: "",
  policyCategory: "全部",
  policies: [],
  templates: [], // fetched templates
  isPolicyLoading: false,
  policyError: "",
  editingPolicyId: null,
  processNodes: [],
  processRecords: [],
  isProcessLoading: false,
  processError: "",
  transcriptId: null,
  transcriptTask: null,
  analysisResult: null,
  isAnalysisLoading: false,
  analysisError: "",
  notices: [],
  users: [],
  planRows: [],
  basicError: "",
  noticeFilter: "全部",
  selectedApproval: "APP-202605-001",
  adminApprovalView: "list",
  approvalFilter: "全部",
  mobileMenuOpen: false
};

const params = new URLSearchParams(window.location.search);
if (params.get("role") === "admin") {
  state.role = "admin";
}
if (params.get("student")) {
  state.studentView = params.get("student");
}
if (params.get("admin")) {
  state.adminView = params.get("admin");
}

const studentNav = [
  ["home", "首页", "home"],
  ["consult", "智能咨询", "message"],
  ["process", "党团流程", "route"],
  ["notices", "通知公告", "bell"],
  ["applications", "证明申请", "file"],
  ["analysis", "成绩分析", "chart"],
  ["templates", "模板下载", "download"]
];

const adminNav = [
  ["dashboard", "后台首页", "home"],
  ["users", "用户管理", "users"],
  ["knowledge", "知识库管理", "message"],
  ["noticeManage", "通知管理", "bell"],
  ["processConfig", "流程配置", "route"],
  ["approval", "审批管理", "shield"],
  ["templateManage", "模板管理", "file"],
  ["training", "培养方案", "chart"],
  ["importExport", "数据导入导出", "database"]
];

const fallbackPolicies = [
  {
    title: "在读证明开具说明",
    category: "证明类",
    keywords: "证明 在读 电子证明 模板",
    answer: "学生在线填写用途并提交后，由管理老师审核；通过后系统生成带编号的电子证明，可在申请记录中下载。",
    owner: "学生事务办公室",
    updated: "2026-05-10",
    attachment: "在读证明模板 v1.2"
  },
  {
    title: "党员发展流程常见问题",
    category: "党团类",
    keywords: "入党 积极分子 发展对象 思想汇报",
    answer: "当前阶段需要按节点提交思想汇报、谈话记录和培养联系人意见。逾期节点会触发提醒并进入管理员待办。",
    owner: "党建办公室",
    updated: "2026-05-08",
    attachment: "思想汇报格式说明"
  },
  {
    title: "奖学金材料提交规范",
    category: "奖助类",
    keywords: "奖学金 综测 材料 成绩 排名",
    answer: "奖学金材料需包含申请表、成绩单、证明材料扫描件。系统支持最多 30MB 附件上传，并保留审批记录至少 1 年。",
    owner: "学生事务办公室",
    updated: "2026-05-06",
    attachment: "奖学金申请表"
  },
  {
    title: "宿舍维修与校园安全提醒",
    category: "生活类",
    keywords: "宿舍 维修 安全 后勤",
    answer: "校内官方办理事项以学校平台为准，本平台提供办理说明、材料模板和外链指引，避免重复填报。",
    owner: "后勤联络员",
    updated: "2026-04-30",
    attachment: "宿舍问题登记表"
  }
];

const processNodes = [
  { name: "申请递交", status: "done", date: "2026-03-12", detail: "申请表与个人陈述已归档" },
  { name: "谈话完成", status: "done", date: "2026-04-02", detail: "培养联系人谈话记录已确认" },
  { name: "培养考察", status: "active", date: "截止 2026-05-18", detail: "本周五前提交思想汇报" },
  { name: "支部讨论", status: "next", date: "待激活", detail: "当前节点完成后自动推进" }
];

const notices = [
  { id: "N-001", title: "就业办：春招信息汇总", target: "毕业生、就业标签", time: "2026-05-16 09:00", unread: true, type: "就业", text: "新增 14 条岗位信息，含校友企业内推与学院专场宣讲。" },
  { id: "N-002", title: "党建办：思想汇报提交提醒", target: "入党积极分子", time: "2026-05-15 17:30", unread: true, type: "党团", text: "培养考察节点将在 2026-05-18 到期，请及时上传附件。" },
  { id: "N-003", title: "保卫处：校园安全提醒", target: "全体学生", time: "2026-05-14 10:00", unread: false, type: "生活", text: "请留意宿舍门禁、实验室用电和个人物品安全。" },
  { id: "N-004", title: "后勤：宿舍维修通知", target: "宿舍维修标签", time: "2026-05-12 15:20", unread: false, type: "生活", text: "宿舍集中维修时间为周三下午，请提前整理报修内容。" }
];

const applications = [
  { id: "APP-202605-001", type: "在读证明开具", applicant: "20232001 张一", status: "待审核", submit: "今天 09:18", file: "身份证明材料.pdf", comment: "用于实习材料提交" },
  { id: "APP-202605-002", type: "党员材料补交", applicant: "20232016 李四", status: "待补充", submit: "今天 10:03", file: "思想汇报.docx", comment: "学生需完善发展对象说明" },
  { id: "APP-202605-003", type: "成绩分析人工核对", applicant: "20232102 王五", status: "待审核", submit: "今天 11:20", file: "成绩单截图.png", comment: "机器解析失败，申请人工核对" }
];

const credits = [
  { name: "通识教育", done: 28, total: 30, tone: "green" },
  { name: "专业必修", done: 42, total: 48, tone: "green" },
  { name: "专业选修", done: 12, total: 20, tone: "amber" },
  { name: "实践环节", done: 6, total: 8, tone: "teal" }
];

const users = [
  ["2023120000", "张同学", "普通学生", "计算机 / 2023级", "启用"],
  ["2022201108", "李同学", "班团骨干", "数据科学 / 2022级", "启用"],
  ["admin01", "管理老师", "管理老师", "学生事务办公室", "启用"],
  ["leader01", "学院领导", "学院领导", "信息学院", "启用"]
];

const knowledgeRows = [
  ["在读证明办理说明", "证明类", "启用", "2026-05-10"],
  ["党员发展流程问答", "党团类", "启用", "2026-05-08"],
  ["成绩分析上传说明", "学业类", "草稿", "2026-05-06"]
];

state.policies = fallbackPolicies.map(normalizePolicy);

const planRows = [
  ["计算机类本科培养方案", "2024级", "已发布", "2026-04-15"],
  ["人工智能方向培养方案", "2025级", "待审核", "2026-04-12"],
  ["数据科学与大数据技术方案", "2026级", "草稿", "2026-04-10"]
];

function icon(name) {
  return icons[name] || "";
}

function mountIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function resolveApiBaseUrl() {
  const configuredBase = window.localStorage.getItem('sds_api_base_url');
  if (configuredBase) {
    return configuredBase.replace(/\/$/, '');
  }

  // Prefer same-origin deployment. This works when the backend also serves the frontend.
  return '/api';
}

const API_BASE_URL = resolveApiBaseUrl();

function apiHeaders(json = false) {
  const headers = {};
  if (json) headers["Content-Type"] = "application/json";
  if (state.token) headers.Authorization = `Bearer ${state.token}`;
  return headers;
}

function saveCurrentView() {
  localStorage.setItem('sds_role', state.role || '');
  localStorage.setItem('sds_student_view', state.studentView || 'home');
  localStorage.setItem('sds_admin_view', state.adminView || 'dashboard');
}

function normalizePolicy(item = {}) {
  const statusText = item.status === "active" ? "启用" : item.status === "draft" ? "草稿" : (item.status || "启用");
  const updatedAt = item.updated_at || item.update_time || item.created_at || item.create_time || "";
  return {
    id: item.policy_id || item.id || item.title || `POL-${Date.now()}`,
    title: item.title || item.question || "未命名政策条目",
    category: item.category || "未分类",
    keywords: item.keywords || item.question || "",
    answer: item.answer || item.content || "暂无标准答复，请联系管理员维护知识库。",
    content: item.content || item.answer || "",
    owner: item.owner || item.department || "学院学生工作办公室",
    updated: updatedAt ? String(updatedAt).slice(0, 10) : "数据库记录",
    attachment: item.attachment || item.template_name || "暂无附件",
    status: statusText
  };
}

async function fetchPolicies(options = {}) {
  if (!state.token) {
    state.policies = fallbackPolicies.map(normalizePolicy);
    state.policyError = "";
    return state.policies;
  }

  const params = new URLSearchParams();
  const keyword = options.keyword ?? state.policyQuery.trim();
  const category = options.category ?? state.policyCategory;
  if (keyword) params.set("keyword", keyword);
  if (category && category !== "全部") params.set("category", category);

  state.isPolicyLoading = true;
  state.policyError = "";
  if (options.renderBefore) render();

  try {
    const response = await fetch(`${API_BASE_URL}/policies/search?${params.toString()}`, {
      headers: apiHeaders()
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "知识库数据获取失败");
    }
    state.policies = (Array.isArray(data) ? data : []).map(normalizePolicy);
    return state.policies;
  } catch (error) {
    state.policyError = error.message;
    if (!state.policies.length) state.policies = fallbackPolicies.map(normalizePolicy);
    if (!options.silent) showToast(`知识库接口异常：${error.message}`);
    return state.policies;
  } finally {
    state.isPolicyLoading = false;
  }
}

function normalizeProcessStatus(status) {
  const value = String(status || "").toLowerCase();
  if (["completed", "done", "approved", "finished"].includes(value)) return "done";
  if (["inprogress", "in_progress", "active", "pending", "pendingreview"].includes(value)) return "active";
  return "next";
}

function formatProcessDate(value, fallback = "待激活") {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);
  return date.toISOString().slice(0, 10);
}


function getProcessTimeline() {
  if (!state.processNodes.length) return processNodes;

  const recordByNodeId = new Map(state.processRecords.map((record) => [record.node_id, record]));
  let hasActive = false;

  return state.processNodes.map((node) => {
    const record = recordByNodeId.get(node.node_id);
    let status = record ? normalizeProcessStatus(record.status) : "next";
    if (status === "active") hasActive = true;
    if (!record && !hasActive) {
      status = "active";
      hasActive = true;
    }
    return {
      id: node.node_id,
      name: node.node_name || node.name || "未命名节点",
      status,
      date: status === "done" ? formatProcessDate(record?.completed_time) : (status === "active" ? "进行中" : "待激活"),
      detail: node.reminder_rule || record?.comment || "请按流程要求完成当前节点。"
    };
  });
}

async function fetchProcessData(options = {}) {
  const canViewProcess = state.role === "student" || state.role === "student_leader";
  if (!state.token || !canViewProcess) {
    state.processNodes = [];
    state.processRecords = [];
    state.processError = "";
    return getProcessTimeline();
  }

  state.isProcessLoading = true;
  state.processError = "";
  if (options.renderBefore) render();

  try {
    const [nodesResponse, progressResponse] = await Promise.all([
      fetch(`${API_BASE_URL}/process/nodes?processType=party`, { headers: apiHeaders() }),
      fetch(`${API_BASE_URL}/process/progress`, { headers: apiHeaders() })
    ]);
    const nodes = await nodesResponse.json();
    const progress = await progressResponse.json();
    if (!nodesResponse.ok) throw new Error(nodes.error || "流程节点获取失败");
    if (!progressResponse.ok) throw new Error(progress.error || "学生进度获取失败");
    state.processNodes = Array.isArray(nodes) ? nodes : [];
    state.processRecords = Array.isArray(progress) ? progress : [];
    return getProcessTimeline();
  } catch (error) {
    state.processError = error.message;
    if (!options.silent) showToast(`流程接口异常：${error.message}`);
    return getProcessTimeline();
  } finally {
    state.isProcessLoading = false;
  }
}

async function fetchAnalysisResult(transcriptId, options = {}) {
  if (!transcriptId) return null;

  try {
    const response = await fetch(`${API_BASE_URL}/analysis/${encodeURIComponent(transcriptId)}`, {
      headers: apiHeaders()
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 404 && options.allowPending) return null;
      throw new Error(data.error || data.message || "成绩分析结果获取失败");
    }
    state.analysisResult = data;
    state.analysisError = "";
    return data;
  } catch (error) {
    if (!options.allowPending) state.analysisError = error.message;
    return null;
  }
}

async function waitForAnalysisResult(transcriptId) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const result = await fetchAnalysisResult(transcriptId, { allowPending: true });
    if (result) return result;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error("成绩单仍在解析中，请稍后刷新查看结果");
}

async function uploadTranscriptFile(file) {
  if (!state.token) throw new Error("请先登录后再上传成绩单");
  if (!file) throw new Error("请选择需要上传的成绩单文件");

  state.role = "student";
  state.studentView = "analysis";
  saveCurrentView();

  const formData = new FormData();
  formData.append("file", file);

  state.isAnalysisLoading = true;
  state.analysisError = "";
  state.analysisResult = null;
  render();

  try {
    const response = await fetch(`${API_BASE_URL}/analysis/upload`, {
      method: "POST",
      headers: apiHeaders(),
      body: formData
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "成绩单上传失败");

    state.transcriptTask = data;
    state.transcriptId = data.transcript_id;
    localStorage.setItem('sds_last_transcript_id', data.transcript_id);
    state.studentView = "analysis";
    saveCurrentView();
    await waitForAnalysisResult(data.transcript_id);
    showToast("成绩单解析完成，已刷新分析结果。");
  } catch (error) {
    state.analysisError = error.message;
    showToast(error.message);
  } finally {
    state.isAnalysisLoading = false;
    render();
  }
}

async function fetchBasicData(options = {}) {
  if (!state.token) {
    state.notices = [];
    state.users = [];
    state.planRows = [];
    return;
  }

  try {
    const requests = [
      fetch(`${API_BASE_URL}/basic/notices`, { headers: apiHeaders() }),
      fetch(`${API_BASE_URL}/basic/plans`, { headers: apiHeaders() })
    ];
    if (state.role !== "student" && state.role !== "student_leader") {
      requests.push(fetch(`${API_BASE_URL}/basic/users`, { headers: apiHeaders() }));
    }

    const responses = await Promise.all(requests);
    const payloads = await Promise.all(responses.map((response) => response.json()));
    responses.forEach((response, index) => {
      if (!response.ok) throw new Error(payloads[index].error || "基础管理数据获取失败");
    });

    state.notices = Array.isArray(payloads[0]) ? payloads[0] : [];
    state.planRows = Array.isArray(payloads[1])
      ? payloads[1].map((item) => item.row || [item.name, item.grade, item.statusName || item.status, item.updatedAt])
      : [];
    state.users = Array.isArray(payloads[2])
      ? payloads[2].map((item) => item.row || [item.accountId || item.account_id, item.name, item.roleName || item.role, item.organization, item.statusText || item.status])
      : [];
    state.basicError = "";
  } catch (error) {
    state.basicError = error.message;
    if (!options.silent) showToast(`基础管理接口异常：${error.message}`);
  }
}

async function savePolicy(payload) {
  const response = await fetch(`${API_BASE_URL}/policies/maintain`, {
    method: "POST",
    headers: apiHeaders(true),
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "知识库条目保存失败");
  }
  return normalizePolicy(data);
}

// Authentication API call
async function login(accountId, password, role) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountId, password, role })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Login failed');
    }

    const data = await response.json();
    
    // Save token and state
    state.token = data.token;
    state.isAuthenticated = true;
    state.role = data.user.role;
    state.user = data.user; // 保存真实用户信息
    
    // You can optionally save to localStorage to persist login
    localStorage.setItem('sds_token', data.token);
    localStorage.setItem('sds_user', JSON.stringify(data.user));
    
    // Fetch profile
    await fetchProfile();
    await fetchPolicies({ silent: true, keyword: "", category: "全部" });
    if (state.role === "student" || state.role === "student_leader") {
      await fetchProcessData({ silent: true });
    }
    await fetchBasicData({ silent: true });

    // Redirect to home
    if (state.role === 'admin' || state.role === 'teacher') {
      state.adminView = 'dashboard';
    } else {
      state.studentView = 'home';
    }
    saveCurrentView();
    
    render();
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
}

async function fetchProfile() {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    });
    if (response.ok) {
      state.userProfile = await response.json();
    }
  } catch (error) {
    console.error('Failed to fetch profile', error);
  }
}

async function fetchTemplates() {
  try {
    const res = await fetch(`${API_BASE_URL}/templates`, { headers: apiHeaders() });
    if (res.ok) {
      state.templates = await res.json();
    }
  } catch(e) {
    console.error("fetch templates failed", e);
  }
}

async function getTemplateBytes(template) {
  if (template.file_data) {
    const base64Data = template.file_data.split(',')[1];
    const binaryString = atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  if (template.file_url) {
    const res = await fetch(template.file_url, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('模板文件下载失败');
    const arrayBuffer = await res.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  }

  throw new Error('模板文件不存在');
}

function isDocxTemplate(template) {
  if (template.file_url) return String(template.file_url).toLowerCase().endsWith('.docx');
  if (template.file_data) return String(template.file_data).startsWith('data:application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  return false;
}

window.handleTemplateSelect = async function() {
  const select = document.getElementById("appTemplateSelect");
  const container = document.getElementById("dynamic-fields-container");
  if (container) container.innerHTML = '';

  if (!select || !select.value) return;

  const template = state.templates.find(t => String(t.id) === select.value);
  if (!template) return;
  if (!isDocxTemplate(template)) {
    showToast("该模板不是 DOCX，无法解析标签");
    return;
  }

  try {
    const bytes = await getTemplateBytes(template);
    const zip = new window.PizZip(bytes);
    const doc = new window.docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });
    
    // Extract text directly from document.xml to avoid parsing fragmentation
    const xml = zip.file("word/document.xml").asText();
    const text = xml.replace(/<[^>]+>/g, ""); // Strip all XML tags
    const tagsMatch = text.match(/\{([^{}]+)\}/g) || [];
    const uniqueTags = [...new Set(tagsMatch.map(t => t.slice(1, -1).trim()))];
    console.log("解析到的 Word 标签:", uniqueTags);

    const p = state.userProfile || {};
    const profileMap = {
      '姓名': p.name || '',
      '学号': p.student_no || '',
      '身份证号': p.id_card || '',
      '性别': p.gender || '',
      '电话': p.phone || '',
      '电话号码': p.phone || '',
      '邮箱': p.email || '',
      '专业': p.major || '',
      '年级': p.grade || '',
      '所在院系': p.department || '信息学院'
    };

    let html = '';
    uniqueTags.forEach(tag => {
      // If we don't have it in profileMap, create an input field
      if (profileMap[tag] === undefined || profileMap[tag] === '') {
        const isLongText = tag.includes('理由') || tag.includes('说明') || tag.includes('原因') || tag.includes('内容');
        if (isLongText) {
          html += `
            <label class="field full">
              <span>${escapeHtml(tag)}</span>
              <textarea name="dynamic_${escapeHtml(tag)}" required></textarea>
            </label>
          `;
        } else {
          html += `
            <label class="field full">
              <span>${escapeHtml(tag)}</span>
              <input type="text" name="dynamic_${escapeHtml(tag)}" required />
            </label>
          `;
        }
      }
    });

    if (container) container.innerHTML = html;
  } catch (e) {
    console.error("解析 docx 模板失败", e);
  }
};

window.previewFilledTemplate = async function() {
  const select = document.getElementById("appTemplateSelect");
  if (!select || !select.value) {
    showToast("请先选择模板");
    return;
  }
  const template = state.templates.find(t => String(t.id) === select.value);
  if (!template) {
    showToast("无法读取模板内容");
    return;
  }
  if (!isDocxTemplate(template)) {
    showToast("该模板不是 DOCX，无法生成可回填的预览");
    return;
  }

  try {
    const bytes = await getTemplateBytes(template);
    const zip = new window.PizZip(bytes);
    const doc = new window.docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    const p = state.userProfile || {};
    const data = {
      '姓名': p.name || '',
      '学号': p.student_no || '',
      '身份证号': p.id_card || '',
      '性别': p.gender || '',
      '电话': p.phone || '',
      '电话号码': p.phone || '',
      '邮箱': p.email || '',
      '专业': p.major || '',
      '年级': p.grade || '',
      '所在院系': p.department || '信息学院'
    };

    const inputs = document.querySelectorAll('[name^="dynamic_"]');
    inputs.forEach(input => {
      const tag = input.name.replace('dynamic_', '');
      data[tag] = input.value;
    });

    doc.render(data);

    const out = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    const reader = new FileReader();
    const docxBase64 = await new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(out);
    });

    showToast("正在通过服务器转换PDF，请稍候...");
    
    const res = await fetch(`${API_BASE_URL}/applications/convert-pdf`, {
      method: 'POST',
      headers: apiHeaders(true),
      body: JSON.stringify({ docxBase64 })
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error || "转换PDF失败");
    }

    const { pdfDataUri } = await res.json();

    const formEl = document.querySelector('form[data-form="application-new"]');
    if (formEl) {
      formEl.dataset.filledPdf = pdfDataUri;
    }

    const blobUrl = dataURLtoBlobURL(pdfDataUri);
    
    // Pop up a modal to show the PDF preview instead of inline
    let html = `
      <div class="modal" id="pdfPreviewModal" style="display: flex;">
        <div class="modal-panel" style="width: 80%; max-width: 900px; height: 90vh; display: flex; flex-direction: column;">
          <div class="modal-head">
            <div><p class="eyebrow">预览</p><h2>生成的证明文件</h2></div>
            <button type="button" class="icon-button" onclick="document.getElementById('pdfPreviewModal').remove()">${icon("x")}</button>
          </div>
          <div style="flex: 1; margin-top: 10px; background: #f1f5f9; border-radius: 6px; overflow: hidden;">
            <iframe src="${blobUrl}#toolbar=0" width="100%" height="100%" style="border: none;"></iframe>
          </div>
          <div class="toolbar" style="margin-top: 20px;">
            <button class="primary-button" onclick="document.getElementById('pdfPreviewModal').remove()">${icon("check")}确认预览并关闭</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);

    // Also update the inline container with a friendly message
    const container = document.getElementById("pdf-preview-container");
    if (container) {
      container.innerHTML = `<span style="color: var(--brand); font-weight: bold;">✅ PDF已生成完毕（如需重新查看请点击上方“预览生成的PDF”按钮）</span>`;
    }
    
    showToast("模板已自动填充并生成PDF预览");
  } catch (error) {
    console.error(error);
    showToast("生成PDF失败: " + error.message);
  }
};

async function handleNewApplicationSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const filledPdf = form.dataset.filledPdf;
  if (!filledPdf) {
    showToast("请先点击预览生成的PDF");
    return;
  }
  
  const purpose = form.purpose.value;
  const comment = form.comment.value;
  const templateId = form.templateId.value;
  
  let attachmentData = null;
  const fileInput = document.getElementById("appAttachment");
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    if (file.size > 15 * 1024 * 1024) {
      showToast("附件大小不能超过15MB");
      return;
    }
    const reader = new FileReader();
    attachmentData = await new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  const template = state.templates.find(t => String(t.id) === templateId);
  const dynamicFields = {};
  form.querySelectorAll('[name^="dynamic_"]').forEach((input) => {
    const tag = input.name.replace('dynamic_', '');
    dynamicFields[tag] = input.value;
  });

  const payload = {
    type: template ? template.name : '证明申请',
    content: JSON.stringify({
      purpose,
      comment,
      dynamicFields,
      fileData: filledPdf, // the generated PDF
      attachmentData: attachmentData, // additional attachment
      templateId
    })
  };

  try {
    let res;
    if (state.editingApplicationId) {
      res = await fetch(`${API_BASE_URL}/applications/${state.editingApplicationId}`, {
        method: 'PUT',
        headers: apiHeaders(true),
        body: JSON.stringify(payload)
      });
      state.editingApplicationId = null; // clear after submit
    } else {
      res = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: apiHeaders(true),
        body: JSON.stringify(payload)
      });
    }
    if (!res.ok) throw new Error(await res.text());
    showToast("申请提交成功！");
    await fetchApplications(); // Refresh applications list
    state.studentAppView = 'list';
    render();
  } catch(e) {
    showToast("提交失败: " + e.message);
  }
}

function getDraftsStorageKey() {
  return `sds_drafts_${state.user.user_id}`;
}

function getStoredDrafts() {
  try {
    return JSON.parse(localStorage.getItem(getDraftsStorageKey()) || '[]');
  } catch (error) {
    console.error('读取草稿箱失败', error);
    return [];
  }
}

function setStoredDrafts(drafts) {
  localStorage.setItem(getDraftsStorageKey(), JSON.stringify(drafts));
}

function collectDynamicFieldValues(form) {
  const dynamicFields = {};
  if (!form) return dynamicFields;
  form.querySelectorAll('[name^="dynamic_"]').forEach((input) => {
    const tag = input.name.replace('dynamic_', '');
    dynamicFields[tag] = input.value;
  });
  return dynamicFields;
}

function buildDraftRecord({ templateId = '', templateName = '未知模板', purpose = '', comment = '', dynamicFields = {} }) {
  return {
    id: 'draft_' + Date.now(),
    templateId,
    templateName,
    purpose,
    comment,
    dynamicFields,
    updatedAt: new Date().toLocaleString()
  };
}

function saveDraftRecord(draft) {
  const drafts = getStoredDrafts();
  drafts.push(draft);
  setStoredDrafts(drafts);
}

async function populateApplicationForm(record = {}, toastMessage = "已加载原申请内容，请修改后重新生成并提交") {
  if (!state.templates.length) {
    await fetchTemplates();
  }
  state.studentView = "applications";
  state.studentAppView = "new";
  render();

  setTimeout(async () => {
    const form = document.querySelector('form[data-form="application-new"]');
    if (!form) return;

    if (record.templateId) {
      form.templateId.value = record.templateId;
      await window.handleTemplateSelect();
    }

    form.purpose.value = record.purpose && record.purpose !== '无' ? record.purpose : '';
    form.comment.value = record.comment && record.comment !== '无' ? record.comment : '';

    const dynamicFields = record.dynamicFields || {};
    form.querySelectorAll('[name^="dynamic_"]').forEach((input) => {
      const tag = input.name.replace('dynamic_', '');
      const value = Object.prototype.hasOwnProperty.call(dynamicFields, tag)
        ? dynamicFields[tag]
        : dynamicFields[input.name];
      if (value !== undefined && value !== null) {
        input.value = value;
      }
    });

    form.dataset.filledPdf = '';
    const previewContainer = document.getElementById("pdf-preview-container");
    if (previewContainer) {
      previewContainer.innerHTML = `<span style="color: #94a3b8;">已回填原申请内容，请重新点击“预览生成的PDF”后再提交</span>`;
    }

    showToast(toastMessage);
  }, 100);
}

function buildDraftFromApplication(app) {
  return buildDraftRecord({
    templateId: app.templateId || '',
    templateName: app.type || '未知模板',
    purpose: app.purpose && app.purpose !== '无' ? app.purpose : '',
    comment: app.comment && app.comment !== '无' ? app.comment : '',
    dynamicFields: app.dynamicFields || {}
  });
}

window.saveDraft = function() {
  const form = document.querySelector('form[data-form="application-new"]');
  if (!form) return;

  const templateId = form.templateId.value;
  if (!templateId) {
    showToast("请先选择模板再保存草稿");
    return;
  }

  const template = state.templates.find(t => String(t.id) === templateId);
  const draft = buildDraftRecord({
    templateId,
    templateName: template ? template.name : '未知模板',
    purpose: form.purpose.value,
    comment: form.comment.value,
    dynamicFields: collectDynamicFieldValues(form)
  });

  saveDraftRecord(draft);
  showToast("草稿保存成功");
};

window.openDrafts = function() {
  const drafts = getStoredDrafts();
  
  let html = `
    <div class="modal" id="draftsModal" style="display: flex;">
      <div class="modal-panel" style="width: 500px;">
        <div class="modal-head">
          <div><p class="eyebrow">草稿箱</p><h2>未提交的申请</h2></div>
          <button type="button" class="icon-button" onclick="document.getElementById('draftsModal').remove()">${icon("x")}</button>
        </div>
        <div class="notice-list" style="margin-top: 10px; max-height: 400px; overflow-y: auto;">
  `;

  if (drafts.length === 0) {
    html += `<p style="color:#94a3b8; padding: 20px; text-align: center;">草稿箱为空</p>`;
  } else {
    drafts.forEach((d, index) => {
      html += `
        <article class="list-card" style="margin-bottom: 10px;">
          <header>
            <h3>${d.templateName}</h3>
          </header>
          <p>更新时间：${d.updatedAt}</p>
          <div class="toolbar" style="margin-top: 10px;">
            <button class="secondary-button" onclick="loadDraft(${index})">${icon("check")}继续编辑</button>
            <button class="ghost-button" onclick="deleteDraft(${index})">${icon("x")}删除</button>
          </div>
        </article>
      `;
    });
  }

  html += `</div></div></div>`;
  document.body.insertAdjacentHTML('beforeend', html);
};

window.deleteDraft = function(index) {
  let drafts = getStoredDrafts();
  drafts.splice(index, 1);
  setStoredDrafts(drafts);
  document.getElementById('draftsModal').remove();
  openDrafts();
};

window.loadDraft = async function(index) {
  const drafts = getStoredDrafts();
  const draft = drafts[index];
  if (!draft) return;
  document.getElementById('draftsModal').remove();
  state.editingApplicationId = null;
  await populateApplicationForm(draft, "草稿加载成功，请重新生成PDF后提交");
};

async function fetchApplications() {
  try {
    const res = await fetch(`${API_BASE_URL}/applications`, { headers: apiHeaders() });
    if (res.ok) {
      state.applications = await res.json();
    }
  } catch (e) {}
}

function render() {
  const app = document.getElementById("app");
  const topbar = document.querySelector(".topbar");
  
  // === 第一步：建造登录大门 ===
  // 如果没有登录，就只显示登录界面，隐藏顶部的导航栏
  if (!state.isAuthenticated) {
    if (topbar) topbar.style.display = 'none';
    app.innerHTML = renderLoginView();
    return;
  }

  // === 第二步：登录成功后，展示真正的系统 ===
  if (topbar) topbar.style.display = 'flex';
  app.innerHTML = state.role === "student" ? renderStudentShell() : renderAdminShell();
  
  // 隐藏原本用来测试的角色切换按钮
  const roleSwitch = document.querySelector('.role-switch');
  if (roleSwitch) roleSwitch.style.display = 'none';

  mountIcons(app);
  syncRoleSwitch();
}

function renderLoginView() {
  const isRegistering = state.studentView === "register"; // Use studentView to toggle login/register for now
  
  if (isRegistering) {
    return `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #f9fafb;">
        <div class="panel" style="width: 400px; padding: 32px;">
          <h2 style="text-align: center; margin-bottom: 24px; color: var(--primary);">注册账号</h2>
          <form onsubmit="handleRegisterSubmit(event)">
            <label class="field full">
              <span>注册身份 <span style="color:red">*</span></span>
              <select id="regRole" required style="margin-top: 4px;">
                <option value="student">学生端</option>
                <option value="admin">管理员端</option>
              </select>
            </label>
            <label class="field full">
              <span>学号/工号 <span style="color:red">*</span></span>
              <input type="text" id="regAccountId" placeholder="请输入学号或工号" required>
            </label>
            <label class="field full">
              <span>姓名 <span style="color:red">*</span></span>
              <input type="text" id="regUsername" placeholder="请输入真实姓名" required>
            </label>
            <label class="field full">
              <span>密码 <span style="color:red">*</span></span>
              <input type="password" id="regPassword" placeholder="至少6位密码" required minlength="6">
            </label>
            <label class="field full">
              <span>确认密码 <span style="color:red">*</span></span>
              <input type="password" id="regConfirmPassword" placeholder="请再次输入密码" required minlength="6">
            </label>
            <div class="toolbar field full" style="margin-top: 16px;">
              <button type="submit" class="primary-button" style="width: 100%; justify-content: center;">注册</button>
            </div>
            <div style="text-align: center; margin-top: 16px; font-size: 14px;">
              <a href="#" onclick="toggleAuthView(event, 'login')" style="color: var(--brand); text-decoration: none;">已有账号？点击登录</a>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  return `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #f9fafb;">
      <div class="panel" style="width: 400px; padding: 32px;">
        <h2 style="text-align: center; margin-bottom: 24px; color: var(--primary);">学院学生综合服务平台</h2>
        <form onsubmit="handleLoginSubmit(event)">
          <label class="field full">
            <span>登录身份 <span style="color:red">*</span></span>
            <select id="loginRole" required style="margin-top: 4px;">
              <option value="student">学生端</option>
              <option value="admin">管理员端</option>
            </select>
          </label>
          <label class="field full">
            <span>账号</span>
            <input type="text" id="accountId" placeholder="stu001 或 admin001" required>
          </label>
          <label class="field full">
            <span>密码</span>
            <input type="password" id="password" placeholder="123456" required>
          </label>
          <div class="toolbar field full" style="margin-top: 16px;">
            <button type="submit" class="primary-button" style="width: 100%; justify-content: center;">登录</button>
          </div>
          <div style="text-align: center; margin-top: 16px; font-size: 14px;">
            <a href="#" onclick="toggleAuthView(event, 'register')" style="color: var(--brand); text-decoration: none;">没有账号？点击注册</a>
          </div>
        </form>
      </div>
    </div>
  `;
}

window.toggleAuthView = function(event, view) {
  event.preventDefault();
  state.studentView = view;
  render();
};

window.handleRegisterSubmit = async function(event) {
  event.preventDefault();
  const accountId = document.getElementById('regAccountId').value.trim();
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;
  const role = document.getElementById('regRole').value;

  if (password !== confirmPassword) {
    alert("两次输入的密码不一致，请重新输入！");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountId, password, username, role })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || '注册失败');
    }

    alert("注册成功！请登录。");
    state.studentView = "login";
    render();
  } catch (error) {
    alert(error.message);
  }
};

window.handleLoginSubmit = function(event) {
  event.preventDefault();
  const accountId = document.getElementById('accountId').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('loginRole').value;
  login(accountId, password, role);
};

function syncRoleSwitch() {
  document.querySelectorAll("[data-role]").forEach((button) => {
    const active = button.dataset.role === state.role;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderStudentShell() {
  return `
    <section class="workspace student-workspace ${state.mobileMenuOpen ? "is-mobile-menu-open" : ""}">
      ${renderMobileMenuButton("student")}
      ${renderSidebar("student")}
      ${renderMobileMenuBackdrop()}
      <section class="content-area">
        ${renderStudentView()}
      </section>
      ${renderMobileNav()}
    </section>
  `;
}

function renderAdminShell() {
  return `
    <section class="workspace admin-workspace ${state.mobileMenuOpen ? "is-mobile-menu-open" : ""}">
      ${renderMobileMenuButton("admin")}
      ${renderSidebar("admin")}
      ${renderMobileMenuBackdrop()}
      <section class="content-area">
        ${renderAdminView()}
      </section>
    </section>
  `;
}

function renderMobileMenuButton(kind) {
  const label = kind === "student" ? "学生端导航" : "后台导航";
  return `
    <button type="button" class="mobile-menu-button" data-action="mobile-menu-toggle" aria-expanded="${state.mobileMenuOpen}" aria-label="${label}">
      ${icon("menu")}
      <span>${label}</span>
    </button>
  `;
}

function renderMobileMenuBackdrop() {
  return `<button type="button" class="mobile-menu-backdrop" data-action="mobile-menu-close" aria-label="关闭导航"></button>`;
}

function renderSidebar(kind) {
  const nav = kind === "student" ? studentNav : adminNav;
  const active = kind === "student" ? state.studentView : state.adminView;
  const subtitle = kind === "student" ? "学生端 Web" : "管理员端 PC 后台";
  
  // 使用真实后端获取到的数据替换假数据
  const profileName = state.userProfile?.name || "未知用户";
  const profileId = state.userProfile?.student_no || state.userProfile?.admin_id || "未知编号";
  const profileDesc = kind === "student" ? "普通学生" : (state.userProfile?.role || "管理老师");

  const profile = kind === "student"
    ? [profileDesc, profileName + " / " + profileId, "当前阶段：培养考察"]
    : [profileDesc, profileName, "系统管理员"];
  
  return `
    <aside class="sidebar">
      <p class="side-title">${kind === "student" ? "学生综合服务" : "后台管理"}</p>
      <p class="side-subtitle">${subtitle}</p>
      <nav class="side-nav" aria-label="${subtitle}导航">
        ${nav.map(([id, label, iconName]) => `
          <button type="button" class="${active === id ? "is-active" : ""}" data-nav="${kind}" data-view="${id}">
            ${icon(iconName)}
            <span>${label}</span>
          </button>
        `).join("")}
      </nav>
      <div class="sidebar-profile">
        <strong>${profile[0]}</strong>
        <span>${profile[1]}</span>
        <span>${profile[2]}</span>
        <button class="ghost-button" style="margin-top: 12px; width: 100%; padding: 6px;" data-action="logout">退出登录</button>
      </div>
    </aside>
  `;
}

function renderMobileNav() {
  const nav = studentNav.slice(0, 4);
  return `
    <nav class="mobile-bottom-nav" aria-label="学生端移动导航">
      ${nav.map(([id, label, iconName]) => `
        <button type="button" class="${state.studentView === id ? "is-active" : ""}" data-nav="student" data-view="${id}">
          ${icon(iconName)}
          <span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function renderStudentView() {
  const views = {
    home: renderStudentHome,
    consult: renderConsult,
    process: renderProcess,
    notices: renderNotices,
    applications: renderApplications,
    analysis: renderAnalysis,
    templates: renderTemplates
  };
  return views[state.studentView]();
}

function renderStudentHome() {
  const noticeRows = state.notices.length ? state.notices : notices;
  return `
    ${pageHead("上午好，张同学", "待办 2 项 · 未读通知 2 条 · 当前党团阶段：入党积极分子培养", [
      ["quick-search", "检索政策", "search", "ghost-button"],
      ["student-new-application", "提交申请", "plus", "primary-button"]
    ])}
    <section class="grid four">
      ${metric("待办提醒", "2", "思想汇报、证明材料", "amber")}
      ${metric("未读通知", "2", "按就业、党团标签推送", "brand")}
      ${metric("流程进度", "3/4", "培养考察进行中", "green")}
      ${metric("证明记录", "6", "近一年审批留痕", "teal")}
    </section>
    <section class="grid four" style="margin-top:14px">
      ${actionCard("consult", "智能咨询", "政策问答与模板定位", "message", "brand")}
      ${actionCard("process", "党团流程", "查看节点和提交材料", "route", "green")}
      ${actionCard("notices", "通知公告", "按标签接收精准提醒", "bell", "amber")}
      ${actionCard("applications", "证明申请", "在线提交与下载结果", "file", "red")}
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">党团培养</p>
            <h2>当前进度</h2>
            <p>节点状态与审批记录保持一致，逾期自动进入提醒。</p>
          </div>
          <button class="secondary-button" type="button" data-nav="student" data-view="process">${icon("arrow")}查看详情</button>
        </div>
        ${renderTimeline()}
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">待办提醒</p>
            <h2>下一步操作</h2>
          </div>
        </div>
        <div class="reminder-list">
          ${reminder("思想汇报待提交", "截止 2026-05-18，请上传本阶段思想汇报附件。", "warning")}
          ${reminder("证明申请需补充材料", "在读证明申请缺少用途说明，可在申请记录中补交。", "danger")}
          ${reminder("成绩分析建议更新", "本学期课程信息已变化，建议重新上传成绩单。", "success")}
        </div>
      </div>
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">智能咨询</p>
            <h2>快速问答</h2>
          </div>
        </div>
        <div class="toolbar">
          <label class="search-field">
            ${icon("search")}
            <input type="search" data-policy-search placeholder="输入关键词，如奖学金 / 档案 / 宿舍" value="${escapeHtml(state.policyQuery)}" />
          </label>
          <button type="button" class="primary-button" data-action="policy-search">查询</button>
        </div>
        <div class="result-list" style="margin-top:12px">
          ${renderPolicyResults(2)}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">最新通知</p>
            <h2>精准推送</h2>
          </div>
          <button class="ghost-button" type="button" data-nav="student" data-view="notices">${icon("bell")}全部通知</button>
        </div>
        <div class="notice-list">
          ${noticeRows.slice(0, 3).map(renderNoticeCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderConsult() {
  const categories = ["全部", "证明类", "党团类", "奖助类", "生活类"];
  const matchedPolicies = filteredPolicies();
  return `
    ${pageHead("智能咨询", "基于政策知识库检索标准问答、附件模板和官方办理渠道。", [
      ["download-template", "下载模板", "download", "ghost-button"]
    ])}
    <section class="panel">
      <div class="toolbar">
        <label class="search-field">
          ${icon("search")}
          <input type="search" data-policy-search placeholder="输入问题或关键词" value="${escapeHtml(state.policyQuery)}" />
        </label>
        <button type="button" class="primary-button" data-action="policy-search">查询</button>
      </div>
      <div class="chip-row" style="margin-top:12px">
        ${categories.map((item) => `<button type="button" class="chip ${state.policyCategory === item ? "is-active" : ""}" data-policy-category="${item}">${item}</button>`).join("")}
      </div>
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">匹配结果</p>
            <h2>知识库条目</h2>
          </div>
          <span class="badge">${matchedPolicies.length} 条</span>
        </div>
        <div class="result-list">
          ${renderPolicyResults()}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">标准答复</p>
            <h2>${escapeHtml(matchedPolicies[0]?.title || "暂无匹配")}</h2>
            <p>${escapeHtml(matchedPolicies[0]?.answer || "换一个关键词试试，例如“在读证明”或“思想汇报”。")}</p>
          </div>
        </div>
        <div class="template-list">
          ${matchedPolicies.slice(0, 3).map((item) => `
            <article class="list-card">
              <header>
                <h3>${escapeHtml(item.attachment)}</h3>
                <span class="badge neutral">${escapeHtml(item.category)}</span>
              </header>
              <p>维护部门：${escapeHtml(item.owner)} · 更新于 ${escapeHtml(item.updated)}</p>
              <div class="toolbar">
                <button type="button" class="secondary-button" data-action="download-template">${icon("download")}下载</button>
                <button type="button" class="ghost-button" data-action="copy-link">${icon("file")}官方渠道</button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProcess() {
  return `
    ${pageHead("党团流程", "线性展示入党/入团全过程，支持节点提醒、材料提交和审批退回处理。", [
      ["submit-material", "提交材料", "upload", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">入党积极分子培养</p>
            <h2>节点状态</h2>
            <p>当前处于培养考察，系统已为下一节点保留支部讨论待办。</p>
          </div>
        </div>
        ${renderTimeline()}
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">节点操作</p>
            <h2>培养考察材料</h2>
            <p>上传后进入管理员待审核，退回时可补充后再次提交。</p>
          </div>
        </div>
        <form class="form-grid" data-form="process">
          <label class="field full">
            <span>材料类型</span>
            <select required>
              <option>思想汇报</option>
              <option>谈话记录</option>
              <option>培养联系人意见</option>
            </select>
          </label>
          <label class="field full">
            <span>说明</span>
            <textarea placeholder="补充本次提交说明"></textarea>
          </label>
          <label class="field full">
            <span>附件</span>
            <input type="file" />
          </label>
          <div class="toolbar field full">
            <button type="submit" class="primary-button">${icon("upload")}提交审核</button>
            <button type="button" class="ghost-button" data-action="save-draft">${icon("file")}保存草稿</button>
          </div>
        </form>
      </div>
    </section>
    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div>
          <p class="eyebrow">历史记录</p>
          <h2>审批与操作日志</h2>
        </div>
      </div>
      ${table(["时间", "节点", "操作", "处理人", "结果"], [
        ["2026-04-02 15:10", "谈话完成", "材料审核", "党建管理员", badge("通过", "success")],
        ["2026-03-12 09:20", "申请递交", "学生提交", "张同学", badge("已归档", "neutral")],
        ["2026-03-10 11:30", "申请递交", "系统提醒", "系统", badge("已送达", "success")]
      ])}
    </section>
  `;
}

function renderNotices() {
  const types = ["全部", "就业", "党团", "生活"];
  const noticeRows = state.notices.length ? state.notices : notices;
  const rows = state.noticeFilter === "全部" ? noticeRows : noticeRows.filter((item) => item.type === state.noticeFilter);
  return `
    ${pageHead("通知公告", "根据学生画像和标签精准推送，支持未读筛选与节点提醒。", [
      ["mark-all-read", "全部已读", "check", "ghost-button"]
    ])}
    <section class="panel">
      <div class="chip-row">
        ${types.map((item) => `<button type="button" class="chip ${state.noticeFilter === item ? "is-active" : ""}" data-notice-filter="${item}">${item}</button>`).join("")}
      </div>
    </section>
    <section class="notice-list" style="margin-top:14px">
      ${rows.map(renderNoticeCard).join("")}
    </section>
  `;
}

function renderApplications() {
  if (state.studentAppView === 'new') {
    return renderNewApplication();
  }
  if (state.studentAppView === 'profile') {
    return renderStudentProfile();
  }

  // List view
  return `
    ${pageHead("申请与证明", "管理您的证明申请记录和个人信息。", [
      ["student-edit-profile", "个人信息维护", "users", "ghost-button"],
      ["student-new-application", "新建申请", "plus", "primary-button"]
    ])}
    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div>
          <p class="eyebrow">申请记录</p>
          <h2>近一年审批留痕</h2>
        </div>
      </div>
      ${table(["申请单号", "类型", "状态", "提交时间", "操作"], state.applications && state.applications.length > 0 ? state.applications.map(item => [
        item.id,
        item.type,
        badge(item.status, item.status === "已通过" ? "success" : (item.status === "待补充" ? "danger" : "warning")),
        item.submit,
        actionButton(
          item.status === "待审核" ? "撤销" : "查看",
          item.status === "待审核" ? "cancel-application" : "view-application",
          item.id
        )
      ]) : [
        ["-", "暂无记录", "-", "-", "-"]
      ])}
    </section>
  `;
}

function renderStudentProfile() {
  const p = state.userProfile || {};
  return `
    <div class="panel-head" style="margin-bottom: 20px;">
      <div>
        <p class="eyebrow">学生端</p>
        <h2>个人信息维护</h2>
      </div>
      <button class="ghost-button" data-action="student-app-back">${icon("arrow")} 返回列表</button>
    </div>
    <section class="panel">
      <form class="form-grid" data-form="student-profile" onsubmit="handleUpdateProfile(event)">
        <label class="field full">
          <span>姓名</span>
          <input type="text" name="name" value="${p.name || ''}" required />
        </label>
        <label class="field full">
          <span>学号</span>
          <input type="text" value="${p.student_no || ''}" disabled style="background: #f1f5f9; cursor: not-allowed;" />
        </label>
        <label class="field full">
          <span>身份证号</span>
          <input type="text" name="id_card" value="${p.id_card || ''}" />
        </label>
        <label class="field full">
          <span>性别</span>
          <select name="gender">
            <option value="男" ${p.gender === '男' ? 'selected' : ''}>男</option>
            <option value="女" ${p.gender === '女' ? 'selected' : ''}>女</option>
          </select>
        </label>
        <label class="field full">
          <span>电话号码</span>
          <input type="tel" name="phone" value="${p.phone || ''}" />
        </label>
        <label class="field full">
          <span>邮箱</span>
          <input type="email" name="email" value="${p.email || ''}" />
        </label>
        <div class="toolbar field full">
          <button type="submit" class="primary-button">${icon("check")}保存信息</button>
        </div>
      </form>
    </section>
  `;
}

window.handleUpdateProfile = async function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: 'PUT',
      headers: apiHeaders(true),
      body: JSON.stringify(payload)
    });
    if(!res.ok) throw new Error(await res.text());
    showToast("个人信息更新成功！");
    await fetchProfile(); // refresh local state
    state.studentAppView = 'list';
    render();
  } catch(e) {
    showToast("更新失败: " + e.message);
  }
};

function renderNewApplication() {
  const tplOptions = state.templates.map(t => `<option value="${t.id}">${t.name}</option>`).join("");
  return `
    <div class="panel-head" style="margin-bottom: 20px;">
      <div>
        <p class="eyebrow">学生端</p>
        <h2>新建申请</h2>
      </div>
      <button class="ghost-button" data-action="student-app-back">${icon("arrow")} 返回列表</button>
    </div>
    <section class="grid two">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">第一步</p>
            <h2>填写与上传</h2>
          </div>
        </div>
        <form class="form-grid" data-form="application-new" onsubmit="handleNewApplicationSubmit(event)">
          <label class="field full">
            <span>选择模板 (.docx)</span>
            <select name="templateId" id="appTemplateSelect" required onchange="handleTemplateSelect()">
              <option value="">请选择模板...</option>
              ${tplOptions}
            </select>
          </label>
          <label class="field full">
            <span>用途</span>
            <input type="text" name="purpose" placeholder="如实习、签证、奖学金" required />
          </label>
          <label class="field full">
            <span>说明</span>
            <textarea name="comment" placeholder="请详细说明修改或复核的理由"></textarea>
          </label>
          <div id="dynamic-fields-container" class="form-grid full" style="margin: 0;"></div>
          <label class="field full">
            <span>其他附件上传 (可选，支持图片/PDF等)</span>
            <input type="file" name="attachment" id="appAttachment" />
          </label>
          <div class="toolbar field full">
            <button type="button" class="secondary-button" onclick="previewFilledTemplate()">${icon("search")}预览生成的PDF</button>
            <button type="button" class="ghost-button" onclick="saveDraft()">${icon("file")}保存草稿</button>
            <button type="button" class="ghost-button" onclick="openDrafts()">${icon("file")}草稿箱</button>
            <button type="submit" class="primary-button">${icon("upload")}提交申请</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">第二步</p>
            <h2>模板预览区</h2>
          </div>
        </div>
        <div id="pdf-preview-container" style="min-height: 400px; border: 1px solid #e2e8f0; border-radius: 6px; display: flex; align-items: center; justify-content: center; background: #f8fafc; overflow: auto;">
          <span style="color: #94a3b8;">请先选择模板并点击预览</span>
        </div>
      </div>
    </section>
  `;
}

function renderAnalysis() {
  const analysisCredits = getAnalysisCredits();
  return `
    ${pageHead("成绩分析", "上传成绩单后与培养方案自动比对，生成缺失模块、学分达成度和选课建议。", [
      ["upload-transcript", "上传成绩单", "upload", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">成绩单解析</p>
            <h2>文件上传</h2>
            <p>支持 Excel / CSV / PDF，单次文件不超过 30MB。</p>
          </div>
        </div>
        <div class="import-drop">
          ${icon("upload")}
          <strong>拖拽文件到此处或选择文件</strong>
          <p>解析失败时可转入人工核对申请。</p>
          <input id="transcriptFileInput" type="file" accept=".pdf,.csv,.xls,.xlsx" hidden />
          <button type="button" class="secondary-button" data-action="upload-transcript">${icon("upload")}选择文件</button>
          ${state.transcriptTask ? `<p>Transcript ID: ${escapeHtml(state.transcriptTask.transcript_id || "")}</p>` : ""}
          ${state.isAnalysisLoading ? `<p>成绩单正在上传或解析，请稍候。</p>` : ""}
          ${state.analysisError ? `<p class="danger-text">${escapeHtml(state.analysisError)}</p>` : ""}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">学分达成度</p>
            <h2>2024 版培养方案</h2>
          </div>
        </div>
        <div class="credit-grid">
          ${analysisCredits.map((item) => creditRow(item)).join("")}
        </div>
      </div>
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">选课建议</p>
            <h2>缺失模块</h2>
          </div>
        </div>
        <div class="result-list">
          ${renderAnalysisSuggestions()}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">解析任务</p>
            <h2>最近记录</h2>
          </div>
        </div>
        ${renderTranscriptTasks()}
      </div>
    </section>
  `;
}

function renderTemplates() {
  return `
    ${pageHead("模板下载", "集中下载证明、党团、奖助与成绩分析相关模板。", [
    ])}
    <section class="grid three">
      ${state.templates && state.templates.length > 0 ? state.templates.map(t => `
        <article class="list-card">
          <header>
            <h3>${t.name}</h3>
            ${badge(t.type, "neutral")}
          </header>
          <p>版本: ${t.version} · 维护部门已审核</p>
          <div class="toolbar">
            <button type="button" class="secondary-button" onclick="downloadTemplateDocx('${t.id}')">${icon("download")}下载纯模板</button>
          </div>
        </article>
      `).join("") : '<p style="padding: 20px;">暂无可下载的模板</p>'}
    </section>
  `;
}

window.downloadTemplateDocx = function(id) {
  const template = (state.templates || []).find(t => String(t.id) === String(id));
  if (!template) return showToast("模板不存在");

  if (template.file_url) {
    const a = document.createElement("a");
    a.href = `${API_BASE_URL}/templates/${encodeURIComponent(template.id)}/download`;
    const ext = String(template.file_url).toLowerCase().endsWith('.pdf') ? '.pdf' : '.docx';
    a.download = `${template.name}${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  }

  if (template.file_data) {
    const isPdf = String(template.file_data).startsWith('data:application/pdf');
    const ext = isPdf ? '.pdf' : '.docx';
    const a = document.createElement("a");
    a.href = template.file_data;
    a.download = `${template.name}${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  }

  showToast("模板文件不存在");
};

function renderAdminView() {
  const views = {
    dashboard: renderAdminDashboard,
    users: renderUserManage,
    knowledge: renderKnowledgeManage,
    noticeManage: renderNoticeManage,
    processConfig: renderProcessConfig,
    approval: renderApprovalManage,
    templateManage: renderTemplateManage,
    training: renderTrainingManage,
    importExport: renderImportExport
  };
  return views[state.adminView]();
}

function renderAdminDashboard() {
  const pendingApprovals = (state.applications || []).filter(app => app.status === "待审核");
  const noticeRows = state.notices.length ? state.notices : notices;
  return `
    ${pageHead("后台首页", "面向老师与管理人员的维护、审核、配置和批量数据处理工作台。", [
      ["new-notice", "新建通知", "plus", "primary-button"]
    ])}
    <section class="grid four">
      ${metric("待处理事项", pendingApprovals.length.toString(), "需要您的审核", "amber")}
      ${metric("平均响应", "1.8s", "常规查询 < 2s", "green")}
      ${metric("知识库条目", "326", "本月新增 24", "brand")}
      ${metric("导入任务", "4", "2 个待校验", "teal")}
    </section>
    <section class="admin-layout" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">审批队列</p>
            <h2>待审批事项</h2>
          </div>
          <button class="ghost-button" type="button" data-nav="admin" data-view="approval">${icon("shield")}进入审批</button>
        </div>
        ${table(["申请单号", "类型", "申请人", "提交时间", "操作"], pendingApprovals.length > 0 ? pendingApprovals.map(item => [
          item.id,
          item.type,
          item.applicant,
          item.submit,
          `<button type="button" class="secondary-button" onclick="openApprovalDetail('${item.id}')">审核</button>`
        ]) : [
          ["-", "暂无待审批事项", "-", "-", "-"]
        ])}
      </div>
      <div class="admin-main-list">
        <div class="panel">
          <div class="panel-head">
            <div>
              <p class="eyebrow">近期通知</p>
              <h2>精准推送</h2>
            </div>
          </div>
          <div class="notice-list">
            ${noticeRows.slice(0, 2).map(renderNoticeCard).join("")}
          </div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <div>
              <p class="eyebrow">系统提示</p>
              <h2>数据健康</h2>
            </div>
          </div>
          <div class="result-list">
            ${reminder("用户权限未发现异常", "4 级权限体系已覆盖学院领导、管理老师、班团骨干、普通学生。", "success")}
            ${reminder("待校验导入文件 2 个", "建议在写入 Kingbase 前完成字段预览确认。", "warning")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderUserManage() {
  const userRows = state.users.length ? state.users : users;
  return adminPageWithTable(
    "用户管理",
    "统一维护学生、老师与 4 级权限体系。",
    ["导出名单", "新建用户"],
    ["账号", "姓名", "角色", "组织/专业", "状态"],
    userRows.map((row) => [row[0], row[1], badge(row[2], row[2] === "普通学生" ? "neutral" : "success"), row[3], badge(row[4], "success")]),
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">权限配置</p><h2>角色资源授权</h2></div></div>
        <form class="form-grid" data-form="admin">
          ${field("角色", "select", ["学院领导", "管理老师", "班团骨干", "普通学生"])}
          ${field("资源", "input", "审批管理 / 知识库 / 通知")}
          ${field("操作范围", "textarea", "查看、编辑、审核、导入导出", true)}
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("check")}保存权限</button></div>
        </form>
      </div>
    `
  );
}

function renderKnowledgeManage() {
  const rows = state.policies.length ? state.policies : fallbackPolicies.map(normalizePolicy);
  const editingPolicy = rows.find((row) => row.id === state.editingPolicyId);
  return adminPageWithTable(
    "知识库管理",
    "维护政策条目、标准问答、附件模板与关键词。",
    ["批量导入", "新增条目"],
    ["标题", "分类", "状态", "更新日期", "操作"],
    rows.map((row) => [
      escapeHtml(row.title),
      escapeHtml(row.category),
      badge(escapeHtml(row.status), row.status === "启用" ? "success" : "neutral"),
      escapeHtml(row.updated),
      `<button type="button" class="ghost-button" data-policy-edit="${escapeHtml(row.id)}">编辑</button>`
    ]),
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">${editingPolicy ? "编辑条目" : "新增条目"}</p><h2>政策内容</h2></div></div>
        <form class="form-grid" data-form="knowledge">
          <label class="field">
            <span>标题</span>
            <input name="title" type="text" placeholder="请输入政策标题" value="${escapeHtml(editingPolicy?.title || "")}" required />
          </label>
          <label class="field">
            <span>分类</span>
            <select name="category" required>
              ${["证明类", "党团类", "奖助类", "生活类", "学业类"].map((item) => `<option ${item === editingPolicy?.category ? "selected" : ""}>${item}</option>`).join("")}
            </select>
          </label>
          <label class="field full">
            <span>关键词</span>
            <input name="keywords" type="text" placeholder="在读证明, 下载, 模板" value="${escapeHtml(editingPolicy?.keywords || "")}" required />
          </label>
          <label class="field full">
            <span>内容</span>
            <textarea name="content" placeholder="支持录入标准答复、注意事项、官方链接与办理说明。" required>${escapeHtml(editingPolicy?.content || editingPolicy?.answer || "")}</textarea>
          </label>
          <label class="field full">
            <span>状态</span>
            <select name="status">
              <option value="active" ${editingPolicy?.status === "启用" ? "selected" : ""}>启用</option>
              <option value="draft" ${editingPolicy?.status === "草稿" ? "selected" : ""}>草稿</option>
            </select>
          </label>
          <div class="toolbar field full">
            ${editingPolicy ? `<button class="ghost-button" type="button" data-action="policy-form-reset">取消编辑</button>` : ""}
            <button class="primary-button" type="submit">${icon("check")}${editingPolicy ? "保存修改" : "保存条目"}</button>
          </div>
        </form>
      </div>
    `
  );
}

function renderNoticeManage() {
  return `
    ${pageHead("通知管理", "发布通知并基于学生标签、专业、年级进行精准推送。", [
      ["preview-notice", "预览通知", "file", "ghost-button"],
      ["publish-notice", "保存并发布", "bell", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">通知录入</p><h2>发布内容</h2></div></div>
        <form class="form-grid" data-form="notice">
          ${field("通知标题", "input", "请输入通知标题", true)}
          ${field("通知内容", "textarea", "支持录入通知正文、截止时间、链接和注意事项。", true)}
          <label class="field full"><span>标签设置</span><div class="chip-row"><button type="button" class="chip is-active">就业</button><button type="button" class="chip is-active">党团</button><button type="button" class="chip">后勤</button><button type="button" class="chip">毕业生</button></div></label>
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("bell")}确认发布</button></div>
        </form>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">推送对象</p><h2>触达预估</h2></div></div>
        <div class="result-list">
          ${reminder("目标年级：2023 级本科生", "预计触达 286 人，其中 214 人已绑定账号。", "success")}
          ${reminder("筛选条件", "计算机 / 数据科学，且包含就业或党团标签。", "warning")}
        </div>
        <div class="toolbar" style="margin-top:14px">
          <button class="ghost-button" data-action="save-draft">${icon("file")}存为草稿</button>
          <button class="primary-button" data-action="publish-notice">${icon("check")}确认发布</button>
        </div>
      </div>
    </section>
  `;
}

function renderProcessConfig() {
  return `
    ${pageHead("流程配置", "配置党团培养阶段、提醒规则、逾期策略和审批节点。", [
      ["add-node", "新增节点", "plus", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">节点列表</p><h2>入党流程</h2></div></div>
        ${table(["顺序", "节点名称", "触发规则", "提醒", "状态"], [
          ["1", "申请递交", "学生主动提交", "提交后 1 天", badge("启用", "success")],
          ["2", "谈话完成", "上一节点通过", "截止前 3 天", badge("启用", "success")],
          ["3", "培养考察", "管理员激活", "每 7 天", badge("启用", "success")],
          ["4", "支部讨论", "材料审核通过", "截止前 2 天", badge("草稿", "neutral")]
        ])}
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">规则编辑</p><h2>节点参数</h2></div></div>
        <form class="form-grid" data-form="admin">
          ${field("节点名称", "input", "培养考察")}
          ${field("截止天数", "input", "30")}
          ${field("提醒规则", "textarea", "节点激活后每 7 天提醒；截止前 3 天加急提醒。", true)}
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("check")}保存规则</button></div>
        </form>
      </div>
    </section>
  `;
}

function renderApprovalManage() {
  if (state.adminApprovalView === 'detail') {
    return renderApprovalDetail();
  }
  
  // list view
  return `
    ${pageHead("审批管理", "集中处理申请单，支持通过、退回补充与操作日志审计。", [
    ])}
    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div><p class="eyebrow">申请列表</p><h2>待审核队列</h2></div>
      </div>
      <div class="notice-list">
        ${state.applications && state.applications.length > 0 ? state.applications.map((item) => `
          <article class="list-card">
            <header>
              <h3>${item.type}</h3>
              ${badge(item.status, item.status === "待补充" ? "danger" : (item.status === "已通过" ? "success" : "warning"))}
            </header>
            <p>${item.applicant} · ${item.submit}</p>
            <p>${item.purpose || '无用途说明'}</p>
            <div class="toolbar">
              <button type="button" class="secondary-button" onclick="openApprovalDetail('${item.id}')">${icon("file")}查看详情</button>
            </div>
          </article>
        `).join("") : '<p style="color:#94a3b8; padding: 20px;">暂无申请记录</p>'}
      </div>
    </section>
  `;
}

window.openApprovalDetail = function(id) {
  state.selectedApproval = id;
  state.adminView = 'approval';
  state.adminApprovalView = 'detail';
  render();
  setTimeout(() => {
    const selected = (state.applications || []).find((item) => String(item.id) === String(id));
    if (selected && selected.fileData && selected.fileData.startsWith('data:application/pdf')) {
      const container = document.getElementById(`pdf-viewer-${selected.id}`);
      if (container) {
        const blobUrl = dataURLtoBlobURL(selected.fileData);
        if (window.EmbedPDF) {
          container.innerHTML = '';
          window.EmbedPDF.init({
            type: 'container',
            target: container,
            src: blobUrl,
            theme: { preference: 'system' }
          });
        } else {
          container.innerHTML = `<iframe src="${blobUrl}" width="100%" height="500px"></iframe>`;
        }
      }
    }
  }, 100);
};

window.dataURLtoBlobURL = function(dataUrl) {
  const parts = dataUrl.split(',');
  const mime = parts[0].match(/:(.*?);/)[1];
  const bstr = atob(parts[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], {type: mime});
  return URL.createObjectURL(blob);
};

window.closeApprovalDetail = function() {
  state.adminApprovalView = 'list';
  render();
};

function renderApprovalDetail() {
  const selected = (state.applications || []).find((item) => item.id === state.selectedApproval);
  if (!selected) {
    return `<div class="panel"><p>记录不存在</p><button onclick="closeApprovalDetail()">返回</button></div>`;
  }

  const isPendingApproval = selected.status === "待审核";
  const statusTone = selected.status === "已通过" ? "success" : (selected.status === "待补充" ? "danger" : "warning");
  const reviewContent = isPendingApproval
    ? `
        <label class="field" style="margin-top:14px">
          <span>审批意见</span>
          <textarea id="approvalCommentInput" placeholder="请输入通过意见或退回原因"></textarea>
        </label>
        <div class="toolbar" style="margin-top:14px">
          <button type="button" class="ghost-button" onclick="handleReview('${selected.id}', 'reject')">${icon("x")}退回补充</button>
          <button type="button" class="primary-button" onclick="handleReview('${selected.id}', 'approve')">${icon("check")}通过</button>
        </div>
      `
    : `
        <div class="field" style="margin-top:14px">
          <span>审批意见</span>
          <div style="margin-top: 6px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; white-space: pre-wrap;">${escapeHtml(selected.admin_comment || '暂无审批意见')}</div>
        </div>
        <div class="toolbar" style="margin-top:14px">
          ${badge(selected.status, statusTone)}
        </div>
      `;

  return `
    <div class="panel-head" style="margin-bottom: 20px;">
      <div>
        <p class="eyebrow">审批管理</p>
        <h2>审批详情</h2>
      </div>
      <button class="ghost-button" type="button" onclick="closeApprovalDetail()">${icon("arrow")} 返回列表</button>
    </div>
    <section class="grid two">
      <div class="panel">
        <div class="panel-head">
          <div><p class="eyebrow">申请详情</p><h2>${selected.type}</h2></div>
        </div>
        <div class="approval-preview">
          <strong>申请人：${selected.applicant}</strong>
          <p>申请单号：${selected.id}</p>
          <p>当前状态：${selected.status}</p>
          <p>用途：${selected.purpose || '无'}</p>
          <p>说明：${selected.comment}</p>
          ${selected.attachmentData ? `<div style="margin-top: 10px;">
            <strong>补充附件：</strong>
            <button class="secondary-button" onclick="downloadAttachment('${selected.id}')">${icon("download")}下载附件</button>
          </div>` : ''}
        </div>
        ${reviewContent}
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">自动生成</p>
            <h2>填写的模板PDF预览</h2>
          </div>
          ${selected.fileData && selected.fileData.startsWith('data:application/pdf') ? `
            <button class="secondary-button" type="button" onclick="downloadBase64PDF('${selected.id}')">${icon("download")}下载PDF</button>
          ` : ''}
        </div>
        <div id="pdf-viewer-${selected.id}" style="min-height: 500px; border: 1px solid #e2e8f0; border-radius: 6px; background: #f8fafc; display: flex; align-items: center; justify-content: center;">
          ${selected.fileData && selected.fileData.startsWith('data:application/pdf') 
            ? `<span style="color: #94a3b8;">正在加载PDF预览...</span>` 
            : `<span style="color: #94a3b8;">该申请暂无PDF模板数据</span>`}
        </div>
      </div>
    </section>
  `;
}

window.downloadAttachment = function(id) {
  const application = (state.applications || []).find(a => String(a.id) === String(id));
  if (application && application.attachmentData) {
    const a = document.createElement("a");
    a.href = application.attachmentData;
    a.download = `attachment-${id}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    showToast("附件不存在");
  }
};

window.downloadBase64PDF = function(id) {
  const application = (state.applications || []).find(a => String(a.id) === String(id));
  if (application && application.fileData) {
    const a = document.createElement("a");
    a.href = application.fileData;
    a.download = `template-${id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    showToast("PDF不存在");
  }
};

window.handleReview = async function(id, result) {
  const comment = document.getElementById("approvalCommentInput").value;
  try {
    const res = await fetch(`${API_BASE_URL}/applications/review`, {
      method: 'POST',
      headers: apiHeaders(true),
      body: JSON.stringify({ applicationId: id, result, comment })
    });
    if (!res.ok) throw new Error(await res.text());
    showToast("审核操作成功");
    await fetchApplications();
    state.adminApprovalView = 'list';
    render();
  } catch(e) {
    showToast("审核失败: " + e.message);
  }
};

function renderTemplateManage() {
  return `
    ${pageHead("模板管理", "维护证明模板、Word模板文件上传和版本状态。", [])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">模板编辑区</p><h2>上传新模板</h2></div></div>
        <form class="form-grid" data-form="admin-template" onsubmit="handleUploadTemplate(event)">
          <label class="field full">
            <span>模板名称</span>
            <input type="text" name="name" required placeholder="例如：在读证明模板" />
          </label>
          <label class="field full">
            <span>模板类型</span>
            <select name="type">
              <option>证明类</option>
              <option>党团类</option>
              <option>奖助类</option>
              <option>学业类</option>
            </select>
          </label>
          <label class="field full">
            <span>模板文件（.docx 支持回填标签；.pdf 仅支持下载）</span>
            <input type="file" name="file" accept=".docx,.pdf" required />
          </label>
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("upload")}上传模板</button></div>
        </form>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">现有模板</p><h2>已上传列表</h2></div></div>
        <div class="template-list">
          ${state.templates.length === 0 ? '<p style="color:#94a3b8; padding: 20px;">暂无模板</p>' : state.templates.map(t => `
            <article class="list-card">
              <header>
                <h3>${t.name}</h3>
                ${badge(t.type, "neutral")}
              </header>
              <p>版本: ${t.version}</p>
              <div class="toolbar">
                <button type="button" class="secondary-button" onclick="deleteTemplate('${t.id}')">${icon("x")}删除</button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

window.handleUploadTemplate = async function(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const fileInput = form.file;

  if (fileInput.files.length === 0) return;
  const file = fileInput.files[0];
  
  const reader = new FileReader();
  reader.onload = async () => {
    const fileData = reader.result; // Base64 Data URL
    try {
      const res = await fetch(`${API_BASE_URL}/templates`, {
        method: 'POST',
        headers: apiHeaders(true),
        body: JSON.stringify({ name, type, fileData })
      });
      if (!res.ok) throw new Error(await res.text());
      showToast("模板上传成功！");
      form.reset();
      await fetchTemplates();
      render();
    } catch(e) {
      showToast("上传失败: " + e.message);
    }
  };
  reader.readAsDataURL(file);
};

window.deleteTemplate = async function(id) {
  if (!confirm("确定要删除此模板吗？")) return;
  try {
    const res = await fetch(`${API_BASE_URL}/templates/${id}`, {
      method: 'DELETE',
      headers: apiHeaders()
    });
    if (!res.ok) throw new Error(await res.text());
    showToast("删除成功");
    await fetchTemplates();
    render();
  } catch(e) {
    showToast("删除失败: " + e.message);
  }
};

function renderTrainingManage() {
  const rows = state.planRows.length ? state.planRows : planRows;
  return adminPageWithTable(
    "培养方案",
    "维护专业培养方案、课程模块要求和学分比对规则。",
    ["导入方案", "新建方案"],
    ["方案名称", "适用年级", "状态", "最近更新", "操作"],
    rows.map((row) => [row[0], row[1], badge(row[2], row[2] === "已发布" ? "success" : row[2] === "待审核" ? "warning" : "neutral"), row[3], actionButton("查看详情")]),
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">课程模块</p><h2>学分要求</h2></div></div>
        <div class="credit-grid">
          ${credits.map((item) => creditRow(item)).join("")}
        </div>
      </div>
    `
  );
}

function renderImportExport() {
  return `
    ${pageHead("数据导入导出", "外部系统暂不直连，业务数据通过 Excel / Word / PDF 批量导入导出。", [
      ["start-import", "开始校验导入", "upload", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">模板下载</p><h2>导入类型</h2></div></div>
        <div class="template-list">
          ${["学生基础信息模板", "党员流程模板", "通知标签模板", "培养方案模板"].map((item) => `
            <article class="list-card">
              <header><h3>${item}</h3>${badge("Excel", "neutral")}</header>
              <div class="toolbar"><button class="secondary-button" data-action="download-template">${icon("download")}下载模板</button></div>
            </article>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">文件上传</p><h2>校验与预览</h2></div></div>
        <div class="import-drop">
          ${icon("upload")}
          <strong>拖拽文件到此处或点击选择文件</strong>
          <p>支持 Excel / CSV / PDF，最大 30MB；写入前必须完成预览确认。</p>
          <button class="secondary-button" data-action="start-import">${icon("upload")}选择文件</button>
        </div>
        <div class="result-list" style="margin-top:14px">
          ${reminder("学生信息_2026.xlsx 校验完成", "发现 3 条错误：第 12 行缺少学号，第 28 行专业字段不在枚举范围内。", "warning")}
          ${reminder("导入审计", "确认写入后将同步记录管理员、时间、来源文件与影响行数。", "success")}
        </div>
      </div>
    </section>
  `;
}

function adminPageWithTable(title, subtitle, actions, headers, rows, side) {
  return `
    ${pageHead(title, subtitle, [
      [title + "-secondary", actions[0], actions[0].includes("导") ? "download" : "file", "ghost-button"],
      [title + "-primary", actions[1], "plus", "primary-button"]
    ])}
    <section class="admin-layout">
      <div class="panel">
        <div class="toolbar" style="margin-bottom:14px">
          <label class="search-field">${icon("search")}<input type="search" placeholder="搜索标题 / 姓名 / 学号" /></label>
          <button class="ghost-button" type="button">${icon("search")}查询</button>
        </div>
        ${table(headers, rows)}
      </div>
      ${side}
    </section>
  `;
}

function pageHead(title, subtitle, actions = []) {
  return `
    <header class="page-head">
      <div>
        <p class="eyebrow">${state.role === "student" ? "学生端" : "管理员端"}</p>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="head-actions">
        ${actions.map(([action, label, iconName, className]) => `<button type="button" class="${className}" data-action="${action}">${icon(iconName)}${label}</button>`).join("")}
      </div>
    </header>
  `;
}

function metric(label, value, caption, tone) {
  const toneClass = tone === "brand" ? "" : `tone-${tone}`;
  return `
    <article class="metric-card">
      <span class="badge-icon ${toneClass}">${icon(tone === "amber" ? "bell" : tone === "green" ? "check" : tone === "teal" ? "database" : "chart")}</span>
      <span>${label}</span>
      <strong>${value}</strong>
      <span>${caption}</span>
    </article>
  `;
}

function actionCard(view, title, caption, iconName, tone) {
  return `
    <button type="button" class="action-card" data-nav="student" data-view="${view}">
      <span class="action-icon ${tone === "brand" ? "" : `tone-${tone}`}">${icon(iconName)}</span>
      <strong>${title}</strong>
      <span>${caption}</span>
    </button>
  `;
}

function renderTimeline() {
  const timelineNodes = getProcessTimeline();
  return `
    ${state.isProcessLoading ? `<article class="list-card"><h3>Process data is syncing</h3><p>Loading party process nodes and current student progress.</p></article>` : ""}
    ${state.processError ? `<article class="list-card is-unread"><h3>Process API unavailable</h3><p>${escapeHtml(state.processError)}. Showing local fallback data.</p></article>` : ""}
    <div class="timeline">
      ${timelineNodes.map((node) => `
        <div class="timeline-step ${node.status === "next" ? "is-next" : ""}">
          <span class="status-dot ${node.status === "done" ? "tone-green" : node.status === "active" ? "" : ""}">${node.status === "next" ? "" : icon(node.status === "done" ? "check" : "route")}</span>
          <strong>${node.name}</strong>
          <span>${node.date}</span>
          <span>${node.detail}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function reminder(title, text, type) {
  const badgeClass = type === "danger" ? "danger" : type === "warning" ? "warning" : "success";
  return `
    <article class="list-card">
      <header>
        <h3>${title}</h3>
        ${badge(type === "danger" ? "需处理" : type === "warning" ? "提醒" : "正常", badgeClass)}
      </header>
      <p>${text}</p>
    </article>
  `;
}

function renderNoticeCard(item) {
  return `
    <article class="list-card ${item.unread ? "is-unread" : ""}">
      <header>
        <h3>${item.title}</h3>
        ${badge(item.unread ? "未读" : "已读", item.unread ? "warning" : "neutral")}
      </header>
      <p>${item.text}</p>
      <div class="list-meta">
        <span>${item.time}</span>
        <span>${item.target}</span>
      </div>
    </article>
  `;
}

async function bootstrapSession() {
  const savedToken = localStorage.getItem('sds_token');
  if (!savedToken) {
    render();
    return;
  }

  state.token = savedToken;
  state.isAuthenticated = true;

  try {
    const savedUser = JSON.parse(localStorage.getItem('sds_user') || 'null');
    if (savedUser) {
      state.user = savedUser;
      state.role = savedUser.role === 'student' ? 'student' : 'admin';
    }
    const savedRole = localStorage.getItem('sds_role');
    const savedStudentView = localStorage.getItem('sds_student_view');
    const savedAdminView = localStorage.getItem('sds_admin_view');

    await fetchProfile();
    if (!state.role && state.userProfile?.role) {
      state.role = state.userProfile.role === 'student' ? 'student' : 'admin';
    }
    if (savedRole === 'student' || savedRole === 'admin') state.role = savedRole;
    if (!state.role) state.role = params.get("role") === "admin" ? "admin" : "student";

    if (state.role === "student" || state.role === "student_leader") {
      if (savedStudentView) {
        state.studentView = savedStudentView;
      }
      if (state.studentView === "login" || state.studentView === "register") state.studentView = "home";
      await fetchProcessData({ silent: true });
      const lastTranscriptId = localStorage.getItem('sds_last_transcript_id');
      if (lastTranscriptId && state.studentView === "analysis") {
        state.transcriptTask = { transcript_id: lastTranscriptId, upload_time: "" };
        state.transcriptId = lastTranscriptId;
        await fetchAnalysisResult(lastTranscriptId, { allowPending: true });
      }
    } else {
      state.adminView = savedAdminView || state.adminView || "dashboard";
    }

    await fetchPolicies({ silent: true, keyword: "", category: "全部" });
    await fetchBasicData({ silent: true });
  } catch (error) {
    state.token = null;
    state.isAuthenticated = false;
    state.user = null;
    state.userProfile = null;
    localStorage.removeItem('sds_token');
    localStorage.removeItem('sds_user');
    localStorage.removeItem('sds_role');
    localStorage.removeItem('sds_student_view');
    localStorage.removeItem('sds_admin_view');
    localStorage.removeItem('sds_last_transcript_id');
  }

  render();
}

function renderAnalysisSuggestions() {
  if (state.isAnalysisLoading) {
    return reminder("成绩单解析中", "系统正在比对培养方案并生成缺失模块建议。", "warning");
  }
  if (state.analysisResult) {
    const level = String(state.analysisResult.warning_level || "").toLowerCase();
    const type = level === "high" ? "danger" : level === "low" ? "success" : "warning";
    return reminder(
      state.analysisResult.missing_module || "未命名缺失模块",
      state.analysisResult.suggestion || "暂无建议，请联系管理员维护培养方案规则。",
      type
    );
  }
  return `
    ${reminder("专业选修缺少 8 学分", "建议优先选择数据库系统实践、人工智能导论等方向课程。", "warning")}
    ${reminder("实践环节缺少 2 学分", "可通过科研训练或学院认定竞赛补足。", "success")}
  `;
}

function getAnalysisCredits() {
  const moduleProgress = state.analysisResult?.module_progress || state.analysisResult?.moduleProgress;
  if (!Array.isArray(moduleProgress) || !moduleProgress.length) return credits;
  return moduleProgress.map((item) => ({
    name: item.name || item.module_name || '未命名模块',
    done: Number(item.done || item.credit_done || 0),
    total: Number(item.total || item.credit_required || 0),
    tone: item.tone || 'green',
  }));
}

function renderTranscriptTasks() {
  if (state.transcriptTask) {
    const status = state.analysisResult ? badge("解析成功", "success") : badge(state.isAnalysisLoading ? "解析中" : "待解析", "warning");
    return table(["任务号", "上传时间", "状态", "结果"], [[
      state.transcriptTask.transcript_id || "-",
      String(state.transcriptTask.upload_time || "").slice(0, 10) || "-",
      status,
      state.analysisResult ? "1 个建议" : "等待结果"
    ]]);
  }
  return table(["任务号", "上传时间", "状态", "结果"], [
    ["TR-202605-006", "2026-05-16", badge("解析成功", "success"), "2 个建议"],
    ["TR-202604-014", "2026-04-20", badge("人工核对", "warning"), "已处理"]
  ]);
}

function filteredPolicies() {
  const query = state.policyQuery.trim().toLowerCase();
  return (state.policies.length ? state.policies : fallbackPolicies.map(normalizePolicy)).filter((item) => {
    const inCategory = state.policyCategory === "全部" || item.category === state.policyCategory;
    const haystack = `${item.title} ${item.category} ${item.keywords} ${item.answer}`.toLowerCase();
    return inCategory && (!query || haystack.includes(query));
  });
}

function renderPolicyResults(limit) {
  const results = filteredPolicies().slice(0, limit || filteredPolicies().length);
  if (state.isPolicyLoading) {
    return `<article class="list-card"><h3>正在查询知识库</h3><p>正在从后端同步政策条目，请稍候。</p></article>`;
  }
  if (state.policyError) {
    return `<article class="list-card is-unread"><h3>接口暂不可用</h3><p>${escapeHtml(state.policyError)}。已保留当前可用数据用于浏览。</p></article>`;
  }
  if (!results.length) {
    return `<article class="list-card"><h3>暂无匹配结果</h3><p>请尝试更换关键词，或联系管理员维护知识库。</p></article>`;
  }
  return results.map((item) => `
    <article class="list-card">
      <header>
        <h3>${escapeHtml(item.title)}</h3>
        <span class="badge">${escapeHtml(item.category)}</span>
      </header>
      <p>${escapeHtml(item.answer)}</p>
      <div class="list-meta">
        <span>${escapeHtml(item.owner)}</span>
        <span>更新于 ${escapeHtml(item.updated)}</span>
        <span>附件：${escapeHtml(item.attachment)}</span>
      </div>
    </article>
  `).join("");
}

function creditRow(item) {
  const pct = Math.min(100, Math.round((item.done / item.total) * 100));
  return `
    <div class="credit-row">
      <strong>${item.name}</strong>
      <div class="progress-bar"><span class="tone-${item.tone}" style="width:${pct}%"></span></div>
      <span>${item.done}/${item.total}</span>
    </div>
  `;
}

function approvalTable() {
  return table(["申请类型", "申请人", "状态", "提交时间", "操作"], applications.map((item) => [
    item.type,
    item.applicant,
    badge(item.status, item.status === "待补充" ? "danger" : "warning"),
    item.submit,
    `<button class="secondary-button" type="button" data-nav="admin" data-view="approval" data-select-approval="${item.id}">${icon("file")}处理</button>`
  ]));
}

function table(headers, rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${headers.map((head) => `<th>${head}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function badge(text, type) {
  return `<span class="badge ${type || ""}">${text}</span>`;
}

function actionButton(text, action = "table-action", dataId = "") {
  const idAttr = dataId ? ` data-id="${escapeHtml(dataId)}"` : "";
  return `<button type="button" class="ghost-button" data-action="${escapeHtml(action)}"${idAttr}>${text}</button>`;
}

function field(label, type, value, full = false) {
  if (type === "select") {
    return `
      <label class="field ${full ? "full" : ""}">
        <span>${label}</span>
        <select>${value.map((item) => `<option>${item}</option>`).join("")}</select>
      </label>
    `;
  }
  if (type === "textarea") {
    return `
      <label class="field ${full ? "full" : ""}">
        <span>${label}</span>
        <textarea name="${fieldName(label)}" placeholder="${value}"></textarea>
      </label>
    `;
  }
  return `
    <label class="field ${full ? "full" : ""}">
      <span>${label}</span>
      <input name="${fieldName(label)}" type="text" placeholder="${value}" />
    </label>
  `;
}

function fieldName(label) {
  const names = {
    "通知标题": "title",
    "通知内容": "content",
  };
  return names[label] || "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function openQuickSearch() {
  const modal = document.getElementById("quickSearchModal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  const input = document.getElementById("globalSearchInput");
  input.value = state.policyQuery;
  renderGlobalSearchResults();
  input.focus();
}

function closeModal() {
  const modal = document.getElementById("quickSearchModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function renderGlobalSearchResults() {
  const input = document.getElementById("globalSearchInput");
  const results = document.getElementById("globalSearchResults");
  const query = input.value.trim().toLowerCase();
  const source = state.policies.length ? state.policies : fallbackPolicies.map(normalizePolicy);
  const matched = source.filter((item) => `${item.title} ${item.keywords} ${item.answer}`.toLowerCase().includes(query));
  results.innerHTML = (query ? matched : source).map((item) => `
    <article class="list-card">
      <header><h3>${escapeHtml(item.title)}</h3>${badge(escapeHtml(item.category), "neutral")}</header>
      <p>${escapeHtml(item.answer)}</p>
      <div class="toolbar">
        <button class="secondary-button" data-action="go-consult">${icon("message")}进入咨询</button>
        <button class="ghost-button" data-action="download-template">${icon("download")}下载附件</button>
      </div>
    </article>
  `).join("") || `<article class="list-card"><h3>暂无结果</h3><p>请换一个关键词。</p></article>`;
}

document.addEventListener("click", async (event) => {
  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    state.role = roleButton.dataset.role;
    render();
    return;
  }

  const navButton = event.target.closest("[data-nav]");
  if (navButton) {
    if (navButton.dataset.selectApproval) {
      state.selectedApproval = navButton.dataset.selectApproval;
    }
    if (navButton.dataset.nav === "student") {
      state.studentView = navButton.dataset.view;
      state.role = "student";
      if (state.studentView === "applications") {
        state.studentAppView = "list";
        await fetchApplications();
      } else if (state.studentView === "templates") {
        await fetchTemplates();
      }
      if (state.studentView === "process" || state.studentView === "home") {
        await fetchProcessData({ silent: true });
      }
      if (["home", "notices"].includes(state.studentView)) {
        await fetchBasicData({ silent: true });
      }
    } else {
      state.adminView = navButton.dataset.view;
      state.role = "admin";
      if (state.adminView === "knowledge") {
        await fetchPolicies({ silent: true, keyword: "", category: "全部" });
      } else if (state.adminView === "approval") {
        await fetchApplications();
      } else if (state.adminView === "templateManage") {
        await fetchTemplates();
      }
      if (["dashboard", "users", "noticeManage", "training"].includes(state.adminView)) {
        await fetchBasicData({ silent: true });
      }
    }
    state.mobileMenuOpen = false;
    saveCurrentView();
    render();
    return;
  }

  const selectApproval = event.target.closest("[data-select-approval]");
  if (selectApproval) {
    state.selectedApproval = selectApproval.dataset.selectApproval;
    state.adminView = "approval";
    state.role = "admin";
    render();
    return;
  }

  const policyCategory = event.target.closest("[data-policy-category]");
  if (policyCategory) {
    state.policyCategory = policyCategory.dataset.policyCategory;
    await fetchPolicies({ silent: true });
    render();
    return;
  }

  const policyEdit = event.target.closest("[data-policy-edit]");
  if (policyEdit) {
    state.editingPolicyId = policyEdit.dataset.policyEdit;
    render();
    showToast("已载入该政策条目，可在右侧表单维护。");
    return;
  }

  const noticeFilter = event.target.closest("[data-notice-filter]");
  if (noticeFilter) {
    state.noticeFilter = noticeFilter.dataset.noticeFilter;
    render();
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  const messages = {
    "quick-search": null,
    "close-modal": null,
    "policy-search": "已根据关键词刷新知识库匹配结果。",
    "download-template": "已模拟下载模板文件，后续可接入真实文件服务。",
    "copy-link": "已复制官方渠道说明编号。",
    "student-new-application": "已定位到证明申请表。",
    "submit-material": "请在节点操作区上传材料。",
    "save-draft": "草稿已保存。",
    "mark-all-read": "当前筛选范围已标记为已读。",
    "upload-transcript": "已模拟选择成绩单文件。",
    "new-notice": "已打开通知发布工作区。",
    "publish-notice": "通知已模拟发布并写入投递队列。",
    "preview-notice": "已生成通知预览。",
    "add-node": "已准备新增流程节点。",
    "approval-return": "申请已模拟退回补充。",
    "approval-pass": "申请已模拟通过，电子证明将进入生成队列。",
    "start-import": "已完成文件格式校验，等待预览确认。",
    "table-action": "已打开该记录的操作入口。"
  };

  if (action === "quick-search") {
    openQuickSearch();
    return;
  }
  if (action === "mobile-menu-toggle") {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
    return;
  }
  if (action === "mobile-menu-close") {
    state.mobileMenuOpen = false;
    render();
    return;
  }
  if (action === "close-modal") {
    closeModal();
    return;
  }
  if (action === "policy-form-reset" || action === "知识库管理-primary") {
    state.editingPolicyId = null;
    render();
    return;
  }
  // === 第三步：处理退出登录 ===
  if (action === "logout") {
    state.isAuthenticated = false;
    state.token = null;
    state.user = null;
    state.userProfile = null;
    state.mobileMenuOpen = false;
    state.editingPolicyId = null;
    localStorage.removeItem('sds_token');
    localStorage.removeItem('sds_user');
    localStorage.removeItem('sds_role');
    localStorage.removeItem('sds_student_view');
    localStorage.removeItem('sds_admin_view');
    localStorage.removeItem('sds_last_transcript_id');
    render();
    showToast("已安全退出");
    return;
  }
  if (action === "cancel-application") {
    const id = event.target.closest("[data-action]").dataset.id;
    if (confirm("确定要撤销该申请吗？")) {
      try {
        const application = state.applications.find(a => String(a.id) === String(id));
        const res = await fetch(`${API_BASE_URL}/applications/${id}`, {
          method: 'DELETE',
          headers: apiHeaders()
        });
        if (!res.ok) throw new Error(await res.text());
        if (application) {
          saveDraftRecord(buildDraftFromApplication(application));
        }
        showToast("申请已撤销，内容已自动保存到草稿箱");
        await fetchApplications();
        render();
      } catch (e) {
        showToast("撤销失败: " + e.message);
      }
    }
    return;
  }
  if (action === "table-action") {
    const id = event.target.closest("[data-action]").dataset.id;
    // ... logic if needed for generic table actions ...
  }
  if (action === "view-application") {
    const id = event.target.closest("[data-action]").dataset.id;
    const app = state.applications.find(a => String(a.id) === String(id));
    if (app) {
      const adminComment = app.admin_comment || "暂无批语";
      let html = `
        <div class="modal" id="appDetailModal" style="display: flex;">
          <div class="modal-panel" style="width: 500px;">
            <div class="modal-head">
              <div><p class="eyebrow">申请详情</p><h2>审核结果</h2></div>
              <button type="button" class="icon-button" onclick="document.getElementById('appDetailModal').remove()">${icon("x")}</button>
            </div>
            <div style="padding-top: 10px;">
              <p><strong>状态：</strong> ${app.status}</p>
              <p><strong>用途：</strong> ${escapeHtml(app.purpose || '无')}</p>
              <p><strong>说明：</strong> ${escapeHtml(app.comment || '无')}</p>
              <p><strong>管理员批语：</strong></p>
              <div style="background: #f1f5f9; padding: 10px; border-radius: 6px; margin-top: 5px;">
                ${escapeHtml(adminComment)}
              </div>
              ${app.attachmentData ? `
                <div style="margin-top: 12px;">
                  <button class="secondary-button" onclick="downloadAttachment('${app.id}')">${icon("download")}下载补充附件</button>
                </div>
              ` : ''}
            </div>
            <div class="toolbar" style="margin-top: 20px;">
              ${app.status === "已通过" ? `<button class="secondary-button" onclick="downloadBase64PDF('${app.id}')">${icon("download")}下载证明文件</button>` : ''}
              ${app.status === "待补充" ? `<button class="secondary-button" data-action="resubmit-application" data-id="${app.id}">${icon("file")}修改</button>` : ''}
              <button class="primary-button" onclick="document.getElementById('appDetailModal').remove()">${icon("check")}确定</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', html);
    }
    return;
  }
  if (action === "resubmit-application") {
    document.getElementById('appDetailModal')?.remove();
    const id = event.target.closest("[data-action]").dataset.id;
    const app = state.applications.find(a => String(a.id) === String(id));
    if (app) {
      state.editingApplicationId = app.id;
      await populateApplicationForm(app);
    }
    return;
  }
  if (action === "student-new-application") {
    state.studentView = "applications";
    state.studentAppView = "new";
    state.editingApplicationId = null; // Clear any editing state for new application
    state.role = "student";
    await fetchTemplates();
    saveCurrentView();
    render();
    return;
  }
  if (action === "student-edit-profile") {
    state.studentView = "applications";
    state.studentAppView = "profile";
    render();
    return;
  }
  if (action === "student-app-back") {
    state.studentAppView = "list";
    state.editingApplicationId = null; // Clear editing state
    render();
    return;
  }
  if (action === "new-notice") {
    state.adminView = "noticeManage";
    state.role = "admin";
    saveCurrentView();
    render();
    showToast("已进入通知管理。");
    return;
  }
  if (action === "go-consult") {
    closeModal();
    state.role = "student";
    state.studentView = "consult";
    saveCurrentView();
    state.policyQuery = document.getElementById("globalSearchInput").value;
    await fetchPolicies({ silent: true });
    render();
    return;
  }
  if (action === "policy-search") {
    await fetchPolicies({ silent: false, renderBefore: true });
    render();
    showToast(state.policyError ? "已显示当前可用知识库数据。" : "已根据关键词刷新知识库匹配结果。");
    return;
  }
  if (action === "upload-transcript") {
    const input = document.getElementById("transcriptFileInput");
    if (input) input.click();
    return;
  }
  showToast(messages[action] || "操作已完成。");
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-policy-search]")) {
    state.policyQuery = event.target.value;
  }
  if (event.target.id === "globalSearchInput") {
    renderGlobalSearchResults();
  }
});

document.addEventListener("change", async (event) => {
  if (event.target.id === "transcriptFileInput") {
    const file = event.target.files?.[0];
    event.target.value = "";
    await uploadTranscriptFile(file);
  }
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();

  if (form.dataset.form === "knowledge") {
    const formData = new FormData(form);
    const payload = {
      title: formData.get("title")?.toString().trim(),
      category: formData.get("category")?.toString(),
      keywords: formData.get("keywords")?.toString().trim(),
      content: formData.get("content")?.toString().trim(),
      status: formData.get("status")?.toString() || "active"
    };
    if (state.editingPolicyId) {
      payload.policy_id = state.editingPolicyId;
    }
    if (!payload.title || !payload.keywords || !payload.content) {
      showToast("请完整填写标题、关键词和内容。");
      return;
    }
    try {
      await savePolicy(payload);
      await fetchPolicies({ silent: true, keyword: "", category: "全部" });
      state.editingPolicyId = null;
      form.reset();
      state.adminView = "knowledge";
      render();
      showToast("知识库条目已保存并刷新。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  if (form.dataset.form === "notice") {
    const formData = new FormData(form);
    const payload = {
      title: formData.get("title")?.toString().trim(),
      content: formData.get("content")?.toString().trim(),
      target: "全体学生",
      type: "综合",
      status: "published"
    };
    if (!payload.title || !payload.content) {
      showToast("请填写通知标题和内容。");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/basic/notices`, {
        method: "POST",
        headers: apiHeaders(true),
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "通知发布失败");
      await fetchBasicData({ silent: true });
      form.reset();
      render();
      showToast("通知已发布并刷新列表。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  // === 第三步：绑定开门逻辑（向后端发送登录请求） ===
  if (form.id === "loginForm") {
    const accountId = document.getElementById("accountId").value;
    const password = document.getElementById("password").value;
    
    try {
      // 呼叫快递员，把账号密码送去后端的 /auth/login 接口
      const data = await fetchAPI('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ accountId, password })
      });
      
      // 后端验证通过了！给了我们通行证（token）和用户信息
      state.token = data.token;
      state.user = data.user;
      state.isAuthenticated = true;
      state.role = data.user.role === 'student' ? 'student' : 'admin';
      state.studentView = state.role === 'student' ? 'home' : state.studentView;
      state.adminView = state.role === 'admin' ? 'dashboard' : state.adminView;
      saveCurrentView();
      
      // 存到浏览器的兜里，刷新页面也不会掉
      localStorage.setItem('sds_token', data.token);
      localStorage.setItem('sds_user', JSON.stringify(data.user));
      await fetchProfile();
      await fetchPolicies({ silent: true, keyword: "", category: "全部" });
      if (state.role === "student" || state.role === "student_leader") {
        await fetchProcessData({ silent: true });
      }
      await fetchBasicData({ silent: true });
      
      showToast("登录成功！");
      render(); // 重新画出界面（这次就会显示真正的系统界面了）
    } catch (error) {
      showToast(error.message); // 如果密码错了，后端会报错，我们在这里提示给用户
    }
    return;
  }

  showToast(form.dataset.form === "application" ? "申请已提交，状态更新为待审核。" : "内容已保存。");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (state.mobileMenuOpen) {
      state.mobileMenuOpen = false;
      render();
      return;
    }
    closeModal();
  }
});

mountIcons();
bootstrapSession();
