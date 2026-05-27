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
  processDrafts: [],
  processHistory: [],
  studentProcessType: "party",
  adminProcessType: "party",
  isProcessLoading: false,
  processError: "",
  editingProcessDraftId: null,
  editingProcessNodeId: null,
  processDraftAttachment: null,
  processNodeAttachment: null,
  processReviews: [],
  processReviewError: "",
  processForm: {
    nodeId: "",
    materialType: "思想汇报",
    customMaterialType: "",
    description: "",
    attachmentName: "",
    attachmentData: ""
  },
  transcriptId: null,
  transcriptTask: null,
  analysisResult: null,
  isAnalysisLoading: false,
  analysisError: "",
  applications: [],
  notices: [],
  noticeError: "",
  users: [],
  userRecords: [],
  planRows: [],
  planRecords: [],
  basicError: "",
  noticeFilter: "全部",
  noticeDraftTags: ["就业", "党团"],
  noticeAudienceGrades: ["大一", "大二", "大三", "大四"],
  noticeDraftAttachment: null,
  selectedApproval: "APP-202605-001",
  adminApprovalView: "list",
  approvalFilter: "全部",
  mobileMenuOpen: false,
  editingUserId: null,
  editingPlanId: null,
  importPreview: null,
  importResult: null,
  isImporting: false
};

const DEFAULT_NOTICE_TAGS = ["就业", "党团", "后勤", "毕业生", "奖助", "安全", "活动"];
const STUDENT_NOTICE_FILTER_TAGS = ["全部", ...DEFAULT_NOTICE_TAGS, "其它"];
const NOTICE_DRAFT_STORAGE_KEY = "sds_notice_drafts";
const GRADE_OPTIONS = ["大一", "大二", "大三", "大四"];
const PROCESS_TYPE_OPTIONS = [
  { value: "party", label: "入党流程" },
  { value: "league", label: "入团流程" }
];

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

const notices = [
  { id: "N-001", title: "就业办：春招信息汇总", target: "毕业生、就业标签", time: "2026-05-16 09:00", unread: true, type: "就业", text: "新增 14 条岗位信息，含校友企业内推与学院专场宣讲。详细岗位信息请查看学院就业群公告。", summary: "新增 14 条岗位信息，含校友企业内推与学院专场宣讲。", tags: ["就业", "毕业生"], attachmentName: "", attachmentData: "" },
  { id: "N-002", title: "党建办：思想汇报提交提醒", target: "入党积极分子", time: "2026-05-15 17:30", unread: true, type: "党团", text: "培养考察节点将在 2026-05-18 到期，请及时上传附件，并按要求填写思想汇报。", summary: "培养考察节点将在 2026-05-18 到期，请及时上传附件。", tags: ["党团", "思想汇报"], attachmentName: "", attachmentData: "" },
  { id: "N-003", title: "保卫处：校园安全提醒", target: "全体学生", time: "2026-05-14 10:00", unread: false, type: "生活", text: "请留意宿舍门禁、实验室用电和个人物品安全，发现异常及时联系值班老师。", summary: "请留意宿舍门禁、实验室用电和个人物品安全。", tags: ["安全", "生活"], attachmentName: "", attachmentData: "" },
  { id: "N-004", title: "后勤：宿舍维修通知", target: "宿舍维修标签", time: "2026-05-12 15:20", unread: false, type: "生活", text: "宿舍集中维修时间为周三下午，请提前整理报修内容，并保持联系电话畅通。", summary: "宿舍集中维修时间为周三下午，请提前整理报修内容。", tags: ["后勤", "宿舍维修"], attachmentName: "", attachmentData: "" }
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

function getSessionItem(key) {
  return window.sessionStorage.getItem(key);
}

function setSessionItem(key, value) {
  window.sessionStorage.setItem(key, value);
}

function removeSessionItem(key) {
  window.sessionStorage.removeItem(key);
}

function clearSessionState() {
  removeSessionItem('sds_token');
  removeSessionItem('sds_user');
  removeSessionItem('sds_role');
  removeSessionItem('sds_student_view');
  removeSessionItem('sds_admin_view');
  removeSessionItem('sds_student_process_type');
  removeSessionItem('sds_admin_process_type');
  removeSessionItem('sds_last_transcript_id');
}

function saveCurrentView() {
  setSessionItem('sds_role', state.role || '');
  setSessionItem('sds_student_view', state.studentView || 'home');
  setSessionItem('sds_admin_view', state.adminView || 'dashboard');
  setSessionItem('sds_student_process_type', state.studentProcessType || 'party');
  setSessionItem('sds_admin_process_type', state.adminProcessType || 'party');
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
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).replace(/\//g, "-");
}

function formatDateTimeLocalValue(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).replace(" ", "T").slice(0, 16);

  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function resetProcessForm() {
  const processType = getStudentProcessType();
  state.editingProcessDraftId = null;
  state.processDraftAttachment = null;
  state.processForm = {
    nodeId: "",
    materialType: processType === "league" ? "入团申请书" : "思想汇报",
    customMaterialType: "",
    description: "",
    attachmentName: "",
    attachmentData: ""
  };
}

function normalizeProcessType(value) {
  return value === "league" ? "league" : "party";
}

function getStudentProcessType() {
  return normalizeProcessType(state.studentProcessType);
}

function getAdminProcessType() {
  return normalizeProcessType(state.adminProcessType);
}

function getProcessTypeLabel(value) {
  const normalized = normalizeProcessType(value);
  return normalized === "league" ? "入团流程" : "入党流程";
}

function getProcessBaseMaterialOptions(processType) {
  return normalizeProcessType(processType) === "league"
    ? ["入团申请书", "团课心得", "支部推荐意见"]
    : ["思想汇报", "谈话记录", "培养联系人意见"];
}

function getProcessMaterialOptions(processType) {
  return [...getProcessBaseMaterialOptions(processType), "其他"];
}

function isCustomProcessMaterial(value, processType) {
  const normalizedValue = String(value || "").trim();
  if (!normalizedValue || normalizedValue === "其他") return false;
  return !getProcessBaseMaterialOptions(processType).includes(normalizedValue);
}

function getProcessSubmissionStatusMeta(status) {
  return String(status || "").toLowerCase() === "rejected"
    ? { label: "待补充", tone: "danger" }
    : { label: "草稿", tone: "neutral" };
}

function getCurrentProcessNode() {
  const timeline = getProcessTimeline();
  return timeline.find((item) => item.status === "active") || timeline.find((item) => item.status === "next") || null;
}

function getCurrentProcessStageText() {
  const currentNode = getCurrentProcessNode();
  return currentNode ? `${getProcessTypeLabel(getStudentProcessType())} / ${currentNode.name}` : `${getProcessTypeLabel(getStudentProcessType())} / 暂无流程节点`;
}

function getProcessPendingCount() {
  const activeCount = getProcessTimeline().filter((item) => item.status === "active").length;
  const pendingDraftCount = Array.isArray(state.processDrafts) ? state.processDrafts.length : 0;
  return activeCount + pendingDraftCount;
}

function getUnreadNoticeCount() {
  return getNoticeRows().filter((item) => item.unread).length;
}

function getProcessFormState() {
  const currentNode = getCurrentProcessNode();
  const processType = getStudentProcessType();
  const defaultMaterialType = getProcessBaseMaterialOptions(processType)[0];
  const savedMaterialType = state.processForm?.materialType || defaultMaterialType;
  const customMaterialType = isCustomProcessMaterial(savedMaterialType, processType)
    ? savedMaterialType
    : (state.processForm?.customMaterialType || "");
  return {
    nodeId: state.processForm?.nodeId || currentNode?.id || "",
    materialType: savedMaterialType,
    materialTypeSelection: customMaterialType ? "其他" : savedMaterialType,
    customMaterialType,
    description: state.processForm?.description || "",
    attachmentName: state.processForm?.attachmentName || "",
    attachmentData: state.processForm?.attachmentData || ""
  };
}

function loadProcessDraftToForm(draft) {
  if (!draft) return;
  const processType = getStudentProcessType();
  const materialType = draft.materialType || getProcessBaseMaterialOptions(processType)[0];
  state.editingProcessDraftId = draft.submissionId || "";
  state.processForm = {
    nodeId: draft.nodeId || "",
    materialType,
    customMaterialType: isCustomProcessMaterial(materialType, processType) ? materialType : "",
    description: draft.description || "",
    attachmentName: draft.attachmentName || "",
    attachmentData: draft.attachmentData || ""
  };
  state.processDraftAttachment = draft.attachmentData
    ? { name: draft.attachmentName || "流程草稿附件", data: draft.attachmentData }
    : null;
}


function getProcessTimeline() {
  if (!state.processNodes.length) return [];

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
    const scheduledText = node.scheduled_at ? formatProcessDate(node.scheduled_at, "") : "";
    const completedText = record?.completed_time ? formatProcessDate(record.completed_time, "") : "";
    const detailParts = [];
    if (scheduledText) detailParts.push(`节点时间：${scheduledText}`);
    if (status === "done" && completedText) detailParts.push(`完成时间：${completedText}`);
    if (node.reminder_rule || record?.comment) detailParts.push(node.reminder_rule || record?.comment);
    return {
      id: node.node_id,
      name: node.node_name || node.name || "未命名节点",
      status,
      date: scheduledText || (status === "done" ? formatProcessDate(record?.completed_time) : (status === "active" ? "进行中" : "待激活")),
      detail: detailParts.join(" · ") || "请按流程要求完成当前节点。"
    };
  });
}

async function fetchProcessData(options = {}) {
  const canViewProcess = state.role === "student" || state.role === "student_leader";
  const processType = normalizeProcessType(options.processType || state.studentProcessType);
  if (!state.token || !canViewProcess) {
    state.processNodes = [];
    state.processRecords = [];
    state.processDrafts = [];
    state.processHistory = [];
    state.processError = "";
    return getProcessTimeline();
  }

  state.isProcessLoading = true;
  state.processError = "";
  if (options.renderBefore) render();

  try {
    const [nodesResponse, progressResponse, draftsResponse, rejectedResponse, historyResponse] = await Promise.all([
      fetch(`${API_BASE_URL}/process/nodes?processType=${encodeURIComponent(processType)}`, { headers: apiHeaders() }),
      fetch(`${API_BASE_URL}/process/progress?processType=${encodeURIComponent(processType)}`, { headers: apiHeaders() }),
      fetch(`${API_BASE_URL}/process/submissions?status=draft&processType=${encodeURIComponent(processType)}`, { headers: apiHeaders() }),
      fetch(`${API_BASE_URL}/process/submissions?status=rejected&processType=${encodeURIComponent(processType)}`, { headers: apiHeaders() }),
      fetch(`${API_BASE_URL}/process/history?processType=${encodeURIComponent(processType)}`, { headers: apiHeaders() })
    ]);
    const nodes = await nodesResponse.json();
    const progress = await progressResponse.json();
    const drafts = await draftsResponse.json();
    const rejected = await rejectedResponse.json();
    const history = await historyResponse.json();
    if (!nodesResponse.ok) throw new Error(nodes.error || "流程节点获取失败");
    if (!progressResponse.ok) throw new Error(progress.error || "学生进度获取失败");
    if (!draftsResponse.ok) throw new Error(drafts.error || "流程草稿获取失败");
    if (!rejectedResponse.ok) throw new Error(rejected.error || "流程退回记录获取失败");
    if (!historyResponse.ok) throw new Error(history.error || "流程历史获取失败");
    const editableSubmissions = [...(Array.isArray(drafts) ? drafts : []), ...(Array.isArray(rejected) ? rejected : [])]
      .sort((left, right) => {
        const leftTime = new Date(left.updatedAt || left.createdAt || 0).getTime();
        const rightTime = new Date(right.updatedAt || right.createdAt || 0).getTime();
        return rightTime - leftTime;
      });
    state.processNodes = Array.isArray(nodes) ? nodes : [];
    state.processRecords = Array.isArray(progress) ? progress : [];
    state.processDrafts = editableSubmissions;
    state.processHistory = Array.isArray(history) ? history : [];
    return getProcessTimeline();
  } catch (error) {
    state.processError = error.message;
    state.processDrafts = [];
    state.processHistory = [];
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
    setSessionItem('sds_last_transcript_id', data.transcript_id);
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
    state.noticeError = "";
    state.users = [];
    state.userRecords = [];
    state.planRows = [];
    state.planRecords = [];
    return;
  }

  const errors = [];

  try {
    const noticeResponse = await fetch(`${API_BASE_URL}/basic/notices`, { headers: apiHeaders() });
    const noticePayload = await noticeResponse.json();
    if (!noticeResponse.ok) throw new Error(noticePayload.error || "通知数据获取失败");
    state.notices = Array.isArray(noticePayload) ? noticePayload : [];
    state.noticeError = "";
  } catch (error) {
    state.notices = [];
    state.noticeError = error.message;
    errors.push(`通知：${error.message}`);
  }

  try {
    const planResponse = await fetch(`${API_BASE_URL}/basic/plans`, { headers: apiHeaders() });
    const planPayload = await planResponse.json();
    if (!planResponse.ok) throw new Error(planPayload.error || "培养方案获取失败");
    state.planRecords = Array.isArray(planPayload) ? planPayload : [];
    state.planRows = Array.isArray(planPayload)
      ? planPayload.map((item) => item.row || [item.name, item.grade, item.statusName || item.status, item.updatedAt])
      : [];
  } catch (error) {
    state.planRecords = [];
    state.planRows = [];
    errors.push(`培养方案：${error.message}`);
  }

  if (state.role !== "student" && state.role !== "student_leader") {
    try {
      const userResponse = await fetch(`${API_BASE_URL}/basic/users`, { headers: apiHeaders() });
      const userPayload = await userResponse.json();
      if (!userResponse.ok) throw new Error(userPayload.error || "用户数据获取失败");
      state.userRecords = Array.isArray(userPayload) ? userPayload : [];
      state.users = Array.isArray(userPayload)
        ? userPayload.map((item) => item.row || [item.accountId || item.account_id, item.name, item.roleName || item.role, item.organization, item.statusText || item.status])
        : [];
    } catch (error) {
      state.userRecords = [];
      state.users = [];
      errors.push(`用户：${error.message}`);
    }
  }

  state.basicError = errors.join("；");
  if (errors.length && !options.silent) {
    showToast(`基础管理接口异常：${state.basicError}`);
  }
}

async function fetchAdminProcessNodes(options = {}) {
  if (!state.token || state.role === "student" || state.role === "student_leader") {
    return [];
  }
  const processType = normalizeProcessType(options.processType || state.adminProcessType);

  try {
    const response = await fetch(`${API_BASE_URL}/process/nodes?processType=${encodeURIComponent(processType)}`, {
      headers: apiHeaders()
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "流程节点获取失败");
    state.processNodes = Array.isArray(data) ? data : [];
    return state.processNodes;
  } catch (error) {
    if (!options.silent) showToast(`流程节点接口异常：${error.message}`);
    return state.processNodes || [];
  }
}

async function fetchProcessReviews(options = {}) {
  if (!state.token || state.role === "student" || state.role === "student_leader") {
    state.processReviews = [];
    state.processReviewError = "";
    return [];
  }
  const processType = normalizeProcessType(options.processType || state.adminProcessType);

  try {
    const response = await fetch(`${API_BASE_URL}/process/submissions?status=pending&processType=${encodeURIComponent(processType)}`, {
      headers: apiHeaders()
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "流程待审数据获取失败");
    state.processReviews = Array.isArray(data) ? data : [];
    state.processReviewError = "";
    return state.processReviews;
  } catch (error) {
    state.processReviews = [];
    state.processReviewError = error.message;
    if (!options.silent) showToast(`流程审核接口异常：${error.message}`);
    return [];
  }
}

async function saveProcessNode(payload) {
  const isEditing = Boolean(state.editingProcessNodeId);
  const url = isEditing
    ? `${API_BASE_URL}/process/nodes/${encodeURIComponent(state.editingProcessNodeId)}`
    : `${API_BASE_URL}/process/nodes`;
  const method = isEditing ? "PUT" : "POST";
  const response = await fetch(url, {
    method,
    headers: apiHeaders(true),
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "流程节点保存失败");
  return data;
}

async function deleteProcessNode(nodeId) {
  const response = await fetch(`${API_BASE_URL}/process/nodes/${encodeURIComponent(nodeId)}`, {
    method: "DELETE",
    headers: apiHeaders()
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "流程节点删除失败");
  return data;
}

function fallbackUserRecords() {
  return users.map((row, index) => ({
    id: `mock-user-${index}`,
    accountId: row[0],
    account_id: row[0],
    name: row[1],
    roleName: row[2],
    organization: row[3],
    statusText: row[4],
    role: row[2] === "普通学生" ? "student" : row[2] === "班团骨干" ? "student_leader" : row[2] === "学院领导" ? "leader" : "admin",
    status: row[4] === "启用" ? "active" : "inactive",
    major: row[3].includes("/") ? row[3].split("/")[0].trim() : "",
    grade: row[3].includes("/") ? row[3].split("/")[1].trim() : "",
    department: row[3].includes("/") ? "" : row[3]
  }));
}

function fallbackPlanRecords() {
  return planRows.map((row, index) => ({
    id: `mock-plan-${index}`,
    name: row[0],
    grade: row[1],
    statusName: row[2],
    status: row[2] === "已发布" ? "published" : row[2] === "待审核" ? "pending" : "draft",
    updatedAt: row[3],
    major: ""
  }));
}

async function saveUserRecord(payload) {
  const isEditing = Boolean(state.editingUserId);
  const url = isEditing ? `${API_BASE_URL}/basic/users/${encodeURIComponent(state.editingUserId)}` : `${API_BASE_URL}/basic/users`;
  const method = isEditing ? "PUT" : "POST";
  const response = await fetch(url, {
    method,
    headers: apiHeaders(true),
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "用户保存失败");
  return data;
}

async function deleteUserRecord(userId) {
  const response = await fetch(`${API_BASE_URL}/basic/users/${encodeURIComponent(userId)}`, {
    method: "DELETE",
    headers: apiHeaders()
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "用户删除失败");
  return data;
}

async function savePlanRecord(payload) {
  const isEditing = Boolean(state.editingPlanId);
  const url = isEditing ? `${API_BASE_URL}/basic/plans/${encodeURIComponent(state.editingPlanId)}` : `${API_BASE_URL}/basic/plans`;
  const method = isEditing ? "PUT" : "POST";
  const response = await fetch(url, {
    method,
    headers: apiHeaders(true),
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "培养方案保存失败");
  return data;
}

async function deletePlanRecord(planId) {
  const response = await fetch(`${API_BASE_URL}/basic/plans/${encodeURIComponent(planId)}`, {
    method: "DELETE",
    headers: apiHeaders()
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "培养方案删除失败");
  return data;
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
    
    // Keep auth state isolated per browser tab.
    setSessionItem('sds_token', data.token);
    setSessionItem('sds_user', JSON.stringify(data.user));
    
    // Fetch profile
    await fetchProfile();
    await fetchPolicies({ silent: true, keyword: "", category: "全部" });
    if (state.role === "student" || state.role === "student_leader") {
      await fetchProcessData({ silent: true });
      await fetchApplications();
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
  const currentStageText = getCurrentProcessStageText();

  const profile = kind === "student"
    ? [profileDesc, profileName + " / " + profileId, `当前阶段：${currentStageText}`]
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
        <button class="secondary-button" style="margin-top: 12px; width: 100%; padding: 6px;" data-action="edit-profile">修改个人信息</button>
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
  const noticeRows = getNoticeRows();
  const userName = getCurrentUserName();
  const applicationCount = Array.isArray(state.applications) ? state.applications.length : 0;
  const unreadNoticeCount = getUnreadNoticeCount();
  const processTimeline = getProcessTimeline();
  const completedProcessCount = processTimeline.filter((item) => item.status === "done").length;
  const processSummary = processTimeline.length
    ? `${completedProcessCount}/${processTimeline.length}`
    : "0/0";
  const currentStageText = getCurrentProcessStageText();
  const processReminder = getCurrentProcessNode();
  return `
    ${pageHead(`上午好，${escapeHtml(userName)}`, `待办 ${getProcessPendingCount()} 项 · 未读通知 ${unreadNoticeCount} 条 · 当前党团阶段：${escapeHtml(currentStageText)}`, [
      ["quick-search", "检索政策", "search", "ghost-button"],
      ["student-new-application", "提交申请", "plus", "primary-button"]
    ])}
    <section class="grid four">
      ${metric("待办提醒", String(getProcessPendingCount()), processReminder ? `${processReminder.name}待处理` : "暂无待办", "amber")}
      ${metric("未读通知", String(unreadNoticeCount), "按标签和年级筛选推送", "brand")}
      ${metric("流程进度", processSummary, processReminder ? `${processReminder.name}进行中` : "等待管理员配置流程", "green")}
      ${metric("证明记录", String(applicationCount), "近一年审批留痕", "teal")}
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
          ${processReminder
            ? reminder(`${processReminder.name}待处理`, processReminder.detail || "请按流程要求提交当前阶段材料。", "warning")
            : reminder("暂无党团待办", "当前没有激活中的党团流程节点。", "success")
          }
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
          ${noticeRows.length
            ? noticeRows.slice(0, 3).map(renderNoticeCard).join("")
            : `<article class="list-card"><h3>暂无通知</h3><p>${escapeHtml(state.noticeError ? `通知接口异常：${state.noticeError}` : "当前没有可显示的通知记录。")}</p></article>`
          }
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
  const currentNode = getCurrentProcessNode();
  const formState = getProcessFormState();
  const historyRows = Array.isArray(state.processHistory) ? state.processHistory : [];
  const draftRows = Array.isArray(state.processDrafts) ? state.processDrafts : [];
  const currentProcessType = getStudentProcessType();
  const materialOptions = getProcessMaterialOptions(currentProcessType);
  return `
    ${pageHead("党团流程", "线性展示入党/入团全过程，支持节点提醒、材料提交和审批退回处理。", [
      ["submit-material", "提交材料", "upload", "primary-button"]
    ])}
    <section class="panel">
      <div class="chip-row">
        ${PROCESS_TYPE_OPTIONS.map((item) => `
          <button
            type="button"
            class="chip ${currentProcessType === item.value ? "is-active" : ""}"
            data-action="switch-student-process-type"
            data-type="${item.value}"
          >${item.label}</button>
        `).join("")}
      </div>
    </section>
    <section class="grid two">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">${escapeHtml(getProcessTypeLabel(currentProcessType))}</p>
            <h2>节点状态</h2>
            <p>${escapeHtml(currentNode ? `当前激活节点：${currentNode.name}` : "管理员尚未配置党团流程节点。")}</p>
          </div>
        </div>
        ${renderTimeline()}
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">节点操作</p>
            <h2>${escapeHtml(currentNode ? `${currentNode.name}材料` : "流程材料")}</h2>
            <p>${escapeHtml(`当前查看：${getProcessTypeLabel(currentProcessType)}。保存草稿后可稍后继续编辑；正式提交后会进入管理员待审核队列。`)}</p>
          </div>
        </div>
        <form class="form-grid" data-form="process">
          <label class="field full">
            <span>所属节点</span>
            <select name="nodeId" required>
              ${state.processNodes.map((node) => `<option value="${escapeHtml(node.node_id)}" ${String(formState.nodeId) === String(node.node_id) ? "selected" : ""}>${escapeHtml(node.node_name)}${node.scheduled_at ? `（${escapeHtml(formatProcessDate(node.scheduled_at, ""))}）` : ""}</option>`).join("")}
            </select>
          </label>
          <label class="field full">
            <span>材料类型</span>
            <select name="materialType" required>
              ${materialOptions.map((item) => `<option ${formState.materialTypeSelection === item ? "selected" : ""}>${item}</option>`).join("")}
            </select>
          </label>
          ${formState.materialTypeSelection === "其他" ? `
            <label class="field full">
              <span>其它材料名称</span>
              <input name="customMaterialType" type="text" placeholder="请输入实际提交的材料名称" value="${escapeHtml(formState.customMaterialType)}" required />
            </label>
          ` : ""}
          <label class="field full">
            <span>说明</span>
            <textarea name="description" placeholder="补充本次提交说明">${escapeHtml(formState.description)}</textarea>
          </label>
          <label class="field full">
            <span>附件</span>
            <input name="attachment" type="file" />
            <small id="processAttachmentHint" style="color:#64748b;">${escapeHtml(state.processDraftAttachment?.name ? `当前已缓存附件：${state.processDraftAttachment.name}` : "支持上传思想汇报、谈话记录等附件。")}</small>
          </label>
          <div class="toolbar field full">
            <button type="submit" class="primary-button">${icon("upload")}提交审核</button>
            <button type="button" class="ghost-button" data-action="save-process-draft">${icon("file")}保存草稿</button>
            ${(state.editingProcessDraftId || state.processDraftAttachment) ? `<button type="button" class="ghost-button" data-action="reset-process-form">${icon("x")}清空表单</button>` : ""}
          </div>
        </form>
      </div>
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">待处理材料</p>
            <h2>草稿与退回补充</h2>
          </div>
          <span class="badge neutral">${draftRows.length} 条</span>
        </div>
        <div class="result-list">
          ${draftRows.length ? draftRows.map((draft) => `
            ${(() => {
              const statusMeta = getProcessSubmissionStatusMeta(draft.status);
              return `
            <article class="list-card">
              <header>
                <h3>${escapeHtml(draft.materialType || "未命名草稿")}</h3>
                ${badge(statusMeta.label, statusMeta.tone)}
              </header>
              <p>${escapeHtml(draft.nodeName || "未绑定节点")} · ${escapeHtml(draft.description || "暂无补充说明")}</p>
              ${draft.reviewComment ? `<p style="color:#b91c1c;">审批意见：${escapeHtml(draft.reviewComment)}</p>` : ""}
              <div class="list-meta">
                <span>${escapeHtml(formatProcessDate(draft.updatedAt, "未更新时间"))}</span>
                ${draft.attachmentName ? `<span>附件：${escapeHtml(draft.attachmentName)}</span>` : ""}
              </div>
              <div class="toolbar" style="margin-top:12px;">
                <button type="button" class="secondary-button" data-action="load-process-draft" data-id="${escapeHtml(draft.submissionId)}">${icon("file")}${statusMeta.label === "待补充" ? "修改并重提" : "继续编辑"}</button>
                ${String(draft.status || "").toLowerCase() === "draft" ? `<button type="button" class="ghost-button" data-action="delete-process-draft" data-id="${escapeHtml(draft.submissionId)}">${icon("x")}删除</button>` : ""}
              </div>
            </article>
          `;
            })()}
          `).join("") : `<article class="list-card"><h3>暂无待处理材料</h3><p>当前没有草稿或待补充的党团材料。</p></article>`}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">历史记录</p>
            <h2>审批与操作日志</h2>
          </div>
          <span class="badge neutral">${historyRows.length} 条</span>
        </div>
        ${historyRows.length ? table(["时间", "节点", "操作", "处理人", "结果"], historyRows.map((item) => [
          escapeHtml(formatProcessDate(item.time, "未记录")),
          escapeHtml(item.nodeName || "未命名节点"),
          escapeHtml(item.action || ""),
          escapeHtml(item.actor || ""),
          badge(escapeHtml(item.result || "已记录"), item.resultTone || "neutral")
        ])) : `<article class="list-card"><h3>暂无历史记录</h3><p>当前还没有党团流程提交或节点推进记录。</p></article>`}
      </div>
    </section>
  `;
}

function renderNotices() {
  const noticeRows = getNoticeRows();
  const rows = state.noticeFilter === "全部"
    ? noticeRows
    : state.noticeFilter === "其它"
      ? noticeRows.filter(hasOtherNoticeTag)
      : noticeRows.filter((item) => (item.tags || []).includes(state.noticeFilter) || item.type === state.noticeFilter);
  return `
    ${pageHead("通知公告", "列表仅显示简介，点击可查看完整内容并下载附件。", [
      ["mark-all-read", "全部已读", "check", "ghost-button"]
    ])}
    <section class="panel">
      <div class="chip-row">
        ${STUDENT_NOTICE_FILTER_TAGS.map((item) => `<button type="button" class="chip ${state.noticeFilter === item ? "is-active" : ""}" data-notice-filter="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("")}
      </div>
    </section>
    <section class="notice-list" style="margin-top:14px">
      ${rows.length
        ? rows.map((item) => renderNoticeCard(item, { summaryOnly: true, showDetailButton: true })).join("")
        : `<article class="list-card"><h3>暂无通知</h3><p>${escapeHtml(state.noticeError ? `通知接口异常：${state.noticeError}` : "管理员尚未发布通知。")}</p></article>`
      }
    </section>
  `;
}

function getNoticeRows() {
  return Array.isArray(state.notices) ? state.notices : [];
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
          <input type="text" name="student_no" value="${p.student_no || p.account_id || ''}" required />
        </label>
        <label class="field full">
          <span>班级</span>
          <input type="text" name="class_name" value="${p.class_name || ''}" placeholder="例如：计科 1 班" />
        </label>
        <label class="field full">
          <span>年级</span>
          <select name="grade" required>
            ${GRADE_OPTIONS.map((item) => `<option value="${item}" ${p.grade === item ? "selected" : ""}>${item}</option>`).join("")}
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
        <label class="field full">
          <span>账户绑定说明</span>
          <input type="text" value="当前登录账号与学号绑定，修改学号后请使用新学号重新登录" disabled style="background: #f1f5f9; cursor: not-allowed;" />
        </label>
        <div class="toolbar field full">
          <button type="submit" class="primary-button">${icon("check")}保存信息</button>
        </div>
      </form>
    </section>
  `;
}

function renderAdminProfile() {
  const p = state.userProfile || {};
  return `
    <div class="panel-head" style="margin-bottom: 20px;">
      <div>
        <p class="eyebrow">管理员端</p>
        <h2>个人信息维护</h2>
      </div>
      <button class="ghost-button" data-action="admin-profile-back">${icon("arrow")} 返回首页</button>
    </div>
    <section class="panel">
      <form class="form-grid" data-form="admin-profile" onsubmit="handleUpdateProfile(event)">
        <label class="field full">
          <span>姓名</span>
          <input type="text" name="name" value="${p.name || ''}" required />
        </label>
        <label class="field full">
          <span>账号</span>
          <input type="text" value="${p.account_id || ''}" disabled style="background: #f1f5f9; cursor: not-allowed;" />
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
    const data = await res.json().catch(() => ({}));
    if(!res.ok) throw new Error(data.error || "个人信息更新失败");
    if (data && typeof data === "object") {
      state.userProfile = data;
    }
    showToast("个人信息更新成功！");
    if (state.role === "student" || state.role === "student_leader") {
      state.studentAppView = 'list';
    } else {
      state.adminView = 'dashboard';
    }
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
            <button type="button" class="secondary-button" onclick="downloadTemplateDocx('${t.id}')">${icon("download")}下载 DOCX 模板</button>
          </div>
        </article>
      `).join("") : '<p style="padding: 20px;">暂无可下载的模板</p>'}
    </section>
  `;
}

window.downloadTemplateDocx = async function(id) {
  const template = (state.templates || []).find(t => String(t.id) === String(id));
  if (!template) return showToast("模板不存在");

  try {
    const response = await fetch(`${API_BASE_URL}/templates/${encodeURIComponent(template.id)}/download`, {
      headers: apiHeaders()
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "模板下载失败");
    }
    const blob = await response.blob();
    const fileName = parseDownloadFileName(response.headers.get("content-disposition")) || `${template.name}.docx`;
    triggerBlobDownload(blob, fileName);
    showToast("模板下载成功");
  } catch (error) {
    showToast("模板下载失败: " + error.message);
  }
};

function renderAdminView() {
  const views = {
    dashboard: renderAdminDashboard,
    profile: renderAdminProfile,
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
  const noticeRows = getNoticeRows();
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
            ${noticeRows.length
              ? noticeRows.slice(0, 2).map(renderNoticeCard).join("")
              : `<article class="list-card"><h3>暂无通知</h3><p>${escapeHtml(state.noticeError ? `通知接口异常：${state.noticeError}` : "当前通知表为空，可在通知管理中发布。")}</p></article>`
            }
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
  const userRecords = state.userRecords.length ? state.userRecords : fallbackUserRecords();
  const editingUser = userRecords.find((item) => String(item.id || item.user_id) === String(state.editingUserId));
  return adminPageWithTable(
    "用户管理",
    "统一维护学生、老师与 4 级权限体系。",
    ["导出名单", "新建用户"],
    ["账号", "姓名", "角色", "组织/专业", "状态", "操作"],
    userRecords.map((item) => [
      escapeHtml(item.accountId || item.account_id || "-"),
      escapeHtml(item.name || "-"),
      badge(escapeHtml(item.roleName || item.role || "-"), (item.role || "").includes("student") ? "neutral" : "success"),
      escapeHtml(item.organization || [item.major, item.grade].filter(Boolean).join(" / ") || item.department || "-"),
      badge(escapeHtml(item.statusText || item.status || "-"), item.status === "active" ? "success" : "warning"),
      `${actionButton("编辑", "user-edit", item.id || item.user_id)} ${actionButton("删除", "user-delete", item.id || item.user_id)}`
    ]),
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">${editingUser ? "编辑用户" : "新建用户"}</p><h2>账号信息</h2></div></div>
        <form class="form-grid" data-form="user">
          <label class="field">
            <span>账号</span>
            <input name="accountId" type="text" placeholder="请输入账号" value="${escapeHtml(editingUser?.accountId || editingUser?.account_id || "")}" ${editingUser ? "readonly" : ""} required />
          </label>
          <label class="field">
            <span>${editingUser ? "重置密码（可选）" : "初始密码"}</span>
            <input name="password" type="text" placeholder="${editingUser ? "留空则不修改密码" : "请输入初始密码"}" ${editingUser ? "" : "required"} />
          </label>
          <label class="field">
            <span>姓名</span>
            <input name="name" type="text" placeholder="请输入姓名" value="${escapeHtml(editingUser?.name || "")}" />
          </label>
          <label class="field">
            <span>角色</span>
            <select name="role">
              ${[
                ["student", "普通学生"],
                ["student_leader", "班团骨干"],
                ["admin", "管理老师"],
                ["leader", "学院领导"]
              ].map(([value, label]) => `<option value="${value}" ${value === (editingUser?.role || "student") ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>状态</span>
            <select name="status">
              <option value="active" ${editingUser?.status !== "inactive" ? "selected" : ""}>启用</option>
              <option value="inactive" ${editingUser?.status === "inactive" ? "selected" : ""}>停用</option>
            </select>
          </label>
          <label class="field">
            <span>电话</span>
            <input name="phone" type="text" placeholder="请输入联系电话" value="${escapeHtml(editingUser?.phone || "")}" />
          </label>
          <label class="field">
            <span>专业</span>
            <input name="major" type="text" placeholder="学生角色可填写专业" value="${escapeHtml(editingUser?.major || "")}" />
          </label>
          <label class="field">
            <span>年级</span>
            <input name="grade" type="text" placeholder="如 2024级" value="${escapeHtml(editingUser?.grade || "")}" />
          </label>
          <label class="field full">
            <span>部门</span>
            <input name="department" type="text" placeholder="老师/领导角色可填写部门" value="${escapeHtml(editingUser?.department || "")}" />
          </label>
          <div class="toolbar field full">
            ${editingUser ? `<button class="ghost-button" type="button" data-action="user-form-reset">取消编辑</button>` : ""}
            <button class="primary-button" type="submit">${icon("check")}${editingUser ? "保存用户" : "创建用户"}</button>
          </div>
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
  const availableTags = getAvailableNoticeTags();
  return `
    ${pageHead("通知管理", "发布通知时可选择已有标签、自定义标签、填写简介并上传附件。", [
      ["preview-notice", "预览通知", "file", "ghost-button"],
      ["publish-notice", "保存并发布", "bell", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">通知录入</p><h2>发布内容</h2></div></div>
        <form class="form-grid" data-form="notice">
          ${field("通知标题", "input", "请输入通知标题", true)}
          ${field("通知简介", "textarea", "学生端列表只展示简介，建议控制在一两句话内。", true)}
          ${field("通知内容", "textarea", "支持录入通知正文、截止时间、链接和注意事项。", true)}
          <label class="field full">
            <span>标签设置</span>
            <div class="chip-row">
              ${availableTags.map((tag) => `
                <button
                  type="button"
                  class="chip ${state.noticeDraftTags.includes(tag) ? "is-active" : ""}"
                  data-action="toggle-notice-tag"
                  data-tag="${escapeHtml(tag)}"
                >${escapeHtml(tag)}</button>
              `).join("")}
            </div>
          </label>
          <label class="field full">
            <span>自定义标签</span>
            <input name="customTags" type="text" placeholder="可输入多个标签，用逗号分隔，如：科研,竞赛,实习" />
          </label>
          <label class="field full">
            <span>推送年级</span>
            <div class="chip-row">
              ${GRADE_OPTIONS.map((grade) => `
                <button
                  type="button"
                  class="chip ${state.noticeAudienceGrades.includes(grade) ? "is-active" : ""}"
                  data-action="toggle-notice-audience-grade"
                  data-grade="${escapeHtml(grade)}"
                >${escapeHtml(grade)}</button>
              `).join("")}
            </div>
            <small style="color:#64748b;">只有选中年级的学生可以看到这条推送。默认四个年级都可见。</small>
          </label>
          <label class="field full">
            <span>附件上传</span>
            <input name="attachment" type="file" />
            <small id="noticeAttachmentHint" style="color:#64748b;">${escapeHtml(state.noticeDraftAttachment?.name ? `当前已缓存附件：${state.noticeDraftAttachment.name}` : "支持上传通知附件，学生端详情页可直接下载。")}</small>
          </label>
          <input type="hidden" name="selectedTags" value="${escapeHtml(JSON.stringify(state.noticeDraftTags))}" />
          <input type="hidden" name="audienceGrades" value="${escapeHtml(JSON.stringify(state.noticeAudienceGrades))}" />
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("bell")}确认发布</button></div>
        </form>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">草稿箱</p><h2>未发布通知</h2></div></div>
        <div class="result-list">
          <article class="list-card">
            <header>
              <h3>推送范围</h3>
              ${badge("提醒", "warning")}
            </header>
            <p id="noticeTagSummaryText">${escapeHtml(getNoticeTagSummaryText())}</p>
            <p id="noticeAudienceSummaryText" style="margin-top:6px;color:#64748b;">${escapeHtml(getNoticeAudienceSummaryText())}</p>
          </article>
          ${reminder("附件与简介", "学生端列表只显示简介；点击详情后可查看正文并下载附件。", "success")}
          <div id="noticeDraftList">${renderNoticeDraftList()}</div>
        </div>
        <div class="toolbar" style="margin-top:14px">
          <button class="ghost-button" data-action="notice-save-draft">${icon("file")}存为草稿</button>
          <button class="primary-button" data-action="publish-notice">${icon("check")}确认发布</button>
        </div>
      </div>
    </section>
  `;
}

function renderProcessConfig() {
  const editingNode = (state.processNodes || []).find((item) => String(item.node_id) === String(state.editingProcessNodeId));
  const currentProcessType = getAdminProcessType();
  const processReviewRows = Array.isArray(state.processReviews) ? state.processReviews : [];
  return `
    ${pageHead("流程配置", "配置党团培养阶段、提醒规则、逾期策略和审批节点。", [
      ["add-node", "新增节点", "plus", "primary-button"]
    ])}
    <section class="panel">
      <div class="chip-row">
        ${PROCESS_TYPE_OPTIONS.map((item) => `
          <button
            type="button"
            class="chip ${currentProcessType === item.value ? "is-active" : ""}"
            data-action="switch-admin-process-type"
            data-type="${item.value}"
          >${item.label}</button>
        `).join("")}
      </div>
    </section>
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">节点列表</p><h2>${escapeHtml(getProcessTypeLabel(currentProcessType))}</h2></div></div>
        ${state.processNodes.length ? table(["顺序", "节点名称", "流程类型", "节点时间", "提醒规则", "操作"], state.processNodes.map((node) => [
          escapeHtml(String(node.sequence || "")),
          escapeHtml(node.node_name || ""),
          escapeHtml(getProcessTypeLabel(node.process_type || "party")),
          escapeHtml(formatProcessDate(node.scheduled_at, "未设置")),
          escapeHtml(node.reminder_rule || "未配置"),
          `<div class="toolbar"><button type="button" class="ghost-button" data-action="process-node-edit" data-id="${escapeHtml(node.node_id)}">编辑</button><button type="button" class="ghost-button" data-action="process-node-delete" data-id="${escapeHtml(node.node_id)}">删除</button></div>`
        ])) : `<article class="list-card"><h3>暂无流程节点</h3><p>请先在右侧创建党团流程节点。</p></article>`}
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">${editingNode ? "规则编辑" : "新增节点"}</p><h2>节点参数</h2></div></div>
        <form class="form-grid" data-form="process-node">
          <label class="field">
            <span>流程类型</span>
            <select name="processType" required>
              ${PROCESS_TYPE_OPTIONS.map((item) => `<option value="${item.value}" ${(editingNode?.process_type || currentProcessType) === item.value ? "selected" : ""}>${item.label}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>顺序</span>
            <input name="sequence" type="number" min="1" value="${escapeHtml(String(editingNode?.sequence || (state.processNodes.length + 1)))}" required />
          </label>
          <label class="field full">
            <span>节点名称</span>
            <input name="nodeName" type="text" placeholder="如：培养考察" value="${escapeHtml(editingNode?.node_name || "")}" required />
          </label>
          <label class="field full">
            <span>详细说明</span>
            <textarea name="nodeDetail" placeholder="补充该节点的流程要求、所需材料、注意事项等。">${escapeHtml(editingNode?.node_detail || "")}</textarea>
          </label>
          <label class="field full">
            <span>节点时间</span>
            <input name="scheduledAt" type="datetime-local" value="${escapeHtml(formatDateTimeLocalValue(editingNode?.scheduled_at))}" />
          </label>
          <label class="field full">
            <span>提醒规则</span>
            <textarea name="reminderRule" placeholder="例如：节点激活后每 7 天提醒一次。">${escapeHtml(editingNode?.reminder_rule || "")}</textarea>
          </label>
          <label class="field full">
            <span>节点附件</span>
            <input name="attachment" type="file" />
            <small id="processNodeAttachmentHint" style="color:#64748b;">${escapeHtml(state.processNodeAttachment?.name ? `当前已缓存附件：${state.processNodeAttachment.name}` : "支持上传该节点的说明文档、模板附件，学生端详情可下载。")}</small>
          </label>
          <div class="toolbar field full">
            ${editingNode ? `<button class="ghost-button" type="button" data-action="process-node-reset">取消编辑</button>` : ""}
            <button class="primary-button" type="submit">${icon("check")}${editingNode ? "保存节点" : "创建节点"}</button>
          </div>
        </form>
      </div>
    </section>
    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div><p class="eyebrow">流程审核</p><h2>${escapeHtml(getProcessTypeLabel(currentProcessType))}待审材料</h2></div>
        <span class="badge neutral">${processReviewRows.length} 条</span>
      </div>
      <div class="notice-list">
        ${processReviewRows.length ? processReviewRows.map((item) => `
          <article class="list-card">
            <header>
              <h3>${escapeHtml(item.materialType || "流程材料")}</h3>
              ${badge("待审核", "warning")}
            </header>
            <p>${escapeHtml(item.studentName || item.studentId || "未知学生")} · ${escapeHtml(item.nodeName || "未绑定节点")}</p>
            <p>${escapeHtml(item.description || "暂无提交说明")}</p>
            <div class="list-meta">
              <span>${escapeHtml(formatProcessDate(item.submittedAt || item.updatedAt || item.createdAt, "未提交"))}</span>
              ${item.attachmentName ? `<span>附件：${escapeHtml(item.attachmentName)}</span>` : ""}
            </div>
            <div class="toolbar" style="margin-top:12px;">
              <button type="button" class="secondary-button" data-action="review-process-submission" data-id="${escapeHtml(item.submissionId)}">${icon("shield")}审核</button>
              ${item.attachmentData ? `<button type="button" class="ghost-button" data-action="download-process-submission-attachment" data-id="${escapeHtml(item.submissionId)}">${icon("download")}下载附件</button>` : ""}
            </div>
          </article>
        `).join("") : `<article class="list-card"><h3>暂无待审核材料</h3><p>${escapeHtml(state.processReviewError ? `流程审核接口异常：${state.processReviewError}` : "学生提交后会在这里进入审核队列。")}</p></article>`}
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
    ${pageHead("审批管理", "集中处理证明申请与党团流程材料，支持通过、退回补充与操作留痕。", [
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
    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div><p class="eyebrow">流程材料</p><h2>党团流程待审核</h2></div>
      </div>
      <div class="notice-list">
        ${state.processReviews && state.processReviews.length > 0 ? state.processReviews.map((item) => `
          <article class="list-card">
            <header>
              <h3>${escapeHtml(item.materialType || "流程材料")}</h3>
              ${badge("待审核", "warning")}
            </header>
            <p>${escapeHtml(item.studentName || item.studentId || "未知学生")} · ${escapeHtml(item.nodeName || "未绑定节点")}</p>
            <p>${escapeHtml(item.description || "暂无提交说明")}</p>
            <div class="list-meta">
              <span>${escapeHtml(formatProcessDate(item.submittedAt || item.updatedAt || item.createdAt, "未提交"))}</span>
              ${item.attachmentName ? `<span>附件：${escapeHtml(item.attachmentName)}</span>` : ""}
            </div>
            <div class="toolbar">
              <button type="button" class="secondary-button" data-action="review-process-submission" data-id="${escapeHtml(item.submissionId)}">${icon("file")}查看详情</button>
            </div>
          </article>
        `).join("") : '<p style="color:#94a3b8; padding: 20px;">暂无党团流程待审核材料</p>'}
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

function downloadDataUrl(dataUrl, fileName) {
  if (!dataUrl) {
    showToast("附件不存在");
    return;
  }
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = fileName || "attachment";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function renderProcessNodeDetailModal(node) {
  return `
    <div class="modal" id="processNodeDetailModal" style="display:flex;">
      <div class="modal-panel" style="width: 560px;">
        <div class="modal-head">
          <div><p class="eyebrow">节点详情</p><h2>${escapeHtml(node.node_name || "未命名节点")}</h2></div>
          <button type="button" class="icon-button" data-action="close-process-node-modal">${icon("x")}</button>
        </div>
        <div class="stack">
          <p><strong>流程类型：</strong>${escapeHtml(getProcessTypeLabel(node.process_type || "party"))}</p>
          <p><strong>顺序：</strong>${escapeHtml(String(node.sequence || "-"))}</p>
          <p><strong>节点时间：</strong>${escapeHtml(formatProcessDate(node.scheduled_at, "未设置"))}</p>
          <p><strong>提醒规则：</strong>${escapeHtml(node.reminder_rule || "未设置")}</p>
          <p style="margin-top: 12px;"><strong>详细说明：</strong></p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;white-space:pre-wrap;">${escapeHtml(node.node_detail || "管理员暂未补充详细说明。")}</div>
          ${node.attachment_name ? `
            <div style="margin-top: 14px;">
              <strong>节点附件：</strong>
              ${node.attachment_data
                ? `<button type="button" class="secondary-button" data-action="download-process-node-attachment" data-id="${escapeHtml(node.node_id)}">${icon("download")}下载 ${escapeHtml(node.attachment_name)}</button>`
                : `<span style="color:#64748b;">${escapeHtml(node.attachment_name)}</span>`
              }
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

function openProcessNodeDetail(nodeId) {
  const node = (state.processNodes || []).find((item) => String(item.node_id) === String(nodeId));
  if (!node) {
    showToast("节点不存在");
    return;
  }
  document.getElementById("processNodeDetailModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", renderProcessNodeDetailModal(node));
}

function downloadProcessNodeAttachment(nodeId) {
  const node = (state.processNodes || []).find((item) => String(item.node_id) === String(nodeId));
  if (!node?.attachment_data) {
    showToast("该节点暂无附件");
    return;
  }
  downloadDataUrl(node.attachment_data, node.attachment_name || `node-${nodeId}-attachment`);
}

function renderProcessReviewModal(submission) {
  return `
    <div class="modal" id="processReviewModal" style="display:flex;">
      <div class="modal-panel" style="width: 620px;">
        <div class="modal-head">
          <div><p class="eyebrow">流程审核</p><h2>${escapeHtml(submission.materialType || "流程材料")}</h2></div>
          <button type="button" class="icon-button" data-action="close-process-review-modal">${icon("x")}</button>
        </div>
        <div class="stack">
          <p><strong>学生：</strong>${escapeHtml(submission.studentName || submission.studentId || "未知学生")}${submission.studentNo ? `（${escapeHtml(submission.studentNo)}）` : ""}</p>
          <p><strong>节点：</strong>${escapeHtml(submission.nodeName || "未命名节点")}</p>
          <p><strong>提交流程：</strong>${escapeHtml(getProcessTypeLabel(submission.processType || state.adminProcessType))}</p>
          <p><strong>提交时间：</strong>${escapeHtml(formatProcessDate(submission.submittedAt || submission.updatedAt || submission.createdAt, "未提交"))}</p>
          <p style="margin-top: 12px;"><strong>提交说明：</strong></p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;white-space:pre-wrap;">${escapeHtml(submission.description || "暂无提交说明")}</div>
          ${submission.attachmentName ? `
            <div style="margin-top: 14px;">
              <strong>学生附件：</strong>
              ${submission.attachmentData
                ? `<button type="button" class="secondary-button" data-action="download-process-submission-attachment" data-id="${escapeHtml(submission.submissionId)}">${icon("download")}下载 ${escapeHtml(submission.attachmentName)}</button>`
                : `<span style="color:#64748b;">${escapeHtml(submission.attachmentName)}</span>`
              }
            </div>
          ` : ""}
          <label class="field" style="margin-top:14px">
            <span>审核意见</span>
            <textarea id="processReviewCommentInput" placeholder="请输入通过意见或退回原因"></textarea>
          </label>
          <div class="toolbar" style="margin-top:14px">
            <button type="button" class="ghost-button" onclick="handleProcessReview('${submission.submissionId}', 'reject')">${icon("x")}退回补充</button>
            <button type="button" class="primary-button" onclick="handleProcessReview('${submission.submissionId}', 'approve')">${icon("check")}通过</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openProcessReviewModal(submissionId) {
  const submission = (state.processReviews || []).find((item) => String(item.submissionId) === String(submissionId));
  if (!submission) {
    showToast("待审核记录不存在");
    return;
  }
  document.getElementById("processReviewModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", renderProcessReviewModal(submission));
}

function downloadProcessSubmissionAttachment(submissionId) {
  const rows = [...(state.processReviews || []), ...(state.processDrafts || [])];
  const submission = rows.find((item) => String(item.submissionId) === String(submissionId));
  if (!submission?.attachmentData) {
    showToast("该流程材料暂无附件");
    return;
  }
  downloadDataUrl(submission.attachmentData, submission.attachmentName || `submission-${submissionId}-attachment`);
}

window.handleProcessReview = async function(submissionId, result) {
  const comment = document.getElementById("processReviewCommentInput")?.value || "";
  try {
    const response = await fetch(`${API_BASE_URL}/process/submissions/${encodeURIComponent(submissionId)}/review`, {
      method: "POST",
      headers: apiHeaders(true),
      body: JSON.stringify({ result, comment })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "流程审核失败");
    document.getElementById("processReviewModal")?.remove();
    await fetchAdminProcessNodes({ silent: true });
    await fetchProcessReviews({ silent: true });
    render();
    showToast(result === "approve" ? "流程材料已审核通过。" : "流程材料已退回给学生补充。");
  } catch (error) {
    showToast(error.message);
  }
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
    ${pageHead("模板管理", "请上传可回填的 DOCX 模板，系统会读取其中的 {} 标签生成填写项。", [])}
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
            <span>模板文件（仅支持 .docx）</span>
            <input type="file" name="file" accept=".docx" required />
          </label>
          <div class="list-card" style="padding: 14px;">
            <strong>上传说明</strong>
            <p style="margin-top: 8px;">请上传 .docx 文件，并在需要学生填写的位置使用 {姓名}、{学号}、{用途} 这样的花括号占位。</p>
            <p style="margin-top: 8px;">花括号中间必须写明要填写的内容，否则系统无法识别并自动生成证明。</p>
          </div>
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
  if (!String(file.name).toLowerCase().endsWith('.docx')) {
    showToast("请上传 .docx 模板文件");
    return;
  }
  
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
  const planRecords = state.planRecords.length ? state.planRecords : fallbackPlanRecords();
  const editingPlan = planRecords.find((item) => String(item.id || item.plan_id) === String(state.editingPlanId));
  return adminPageWithTable(
    "培养方案",
    "维护专业培养方案、课程模块要求和学分比对规则。",
    ["导入方案", "新建方案"],
    ["方案名称", "适用年级", "状态", "最近更新", "操作"],
    planRecords.map((item) => [
      escapeHtml(item.name || "-"),
      escapeHtml(item.grade || "-"),
      badge(escapeHtml(item.statusName || item.status || "-"), item.status === "published" ? "success" : item.status === "pending" ? "warning" : "neutral"),
      escapeHtml(item.updatedAt || "-"),
      `${actionButton("编辑", "plan-edit", item.id || item.plan_id)} ${actionButton("删除", "plan-delete", item.id || item.plan_id)}`
    ]),
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">${editingPlan ? "编辑方案" : "新建方案"}</p><h2>方案信息</h2></div></div>
        <form class="form-grid" data-form="plan">
          <label class="field full">
            <span>方案名称</span>
            <input name="name" type="text" placeholder="请输入培养方案名称" value="${escapeHtml(editingPlan?.name || "")}" required />
          </label>
          <label class="field">
            <span>适用年级</span>
            <input name="grade" type="text" placeholder="如 2024级" value="${escapeHtml(editingPlan?.grade || "")}" required />
          </label>
          <label class="field">
            <span>专业方向</span>
            <input name="major" type="text" placeholder="请输入专业或方向" value="${escapeHtml(editingPlan?.major || "")}" />
          </label>
          <label class="field full">
            <span>状态</span>
            <select name="status">
              <option value="draft" ${editingPlan?.status === "draft" ? "selected" : ""}>草稿</option>
              <option value="pending" ${editingPlan?.status === "pending" ? "selected" : ""}>待审核</option>
              <option value="published" ${editingPlan?.status === "published" ? "selected" : ""}>已发布</option>
            </select>
          </label>
          <div class="toolbar field full">
            ${editingPlan ? `<button class="ghost-button" type="button" data-action="plan-form-reset">取消编辑</button>` : ""}
            <button class="primary-button" type="submit">${icon("check")}${editingPlan ? "保存方案" : "创建方案"}</button>
          </div>
        </form>
      </div>
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
  const configs = getImportExportConfigs();
  const preview = state.importPreview;
  const previewRows = preview?.rows?.slice(0, 5) || [];
  const selectedConfig = configs.find((item) => item.type === preview?.type);
  const importResult = state.importResult;

  return `
    ${pageHead("数据导入导出", "已接入当前系统真实数据，支持 Excel 模板下载、当前数据导出和批量导入。", [
      ["start-import", "开始校验导入", "upload", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">真实数据</p><h2>导入与导出类型</h2></div></div>
        <div class="template-list">
          ${configs.map((item) => `
            <article class="list-card">
              <header><h3>${item.title}</h3>${badge(`${item.count} 条`, "neutral")}</header>
              <p>${item.description}</p>
              <div class="toolbar">
                <button class="secondary-button" type="button" onclick="downloadImportExportTemplate('${item.type}')">${icon("download")}下载模板</button>
                <button class="ghost-button" type="button" onclick="exportImportExportData('${item.type}')">${icon("database")}导出当前数据</button>
                <button class="ghost-button" type="button" onclick="pickImportFile('${item.type}')">${icon("upload")}选择 Excel</button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">文件上传</p><h2>校验与预览</h2></div></div>
        <div class="import-drop">
          ${icon("upload")}
          <strong>${preview ? `当前文件：${escapeHtml(preview.fileName)}` : "请选择 Excel 文件进行预览"}</strong>
          <p>${preview ? `导入类型：${escapeHtml(selectedConfig?.title || preview.type)}，共 ${preview.rows.length} 行数据。` : "当前支持 Excel 导入；写入前会先显示前 5 行预览。"}</p>
          <button class="secondary-button" type="button" ${preview ? `onclick="pickImportFile('${preview.type}')"` : `data-action="start-import"`}>${icon("upload")}选择文件</button>
          <input id="importFileInput" type="file" accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" hidden onchange="handleImportFileChange(event)" />
        </div>
        <div class="result-list" style="margin-top:14px">
          ${preview ? `
            <article class="list-card">
              <header>
                <h3>预览前 5 行</h3>
                ${badge(`${preview.rows.length} 行`, "neutral")}
              </header>
              <div class="table-wrap" style="margin-top: 10px;">
                <table>
                  <thead><tr>${preview.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
                  <tbody>
                    ${previewRows.map((row) => `<tr>${preview.headers.map((_, index) => `<td>${escapeHtml(row[index] || "")}</td>`).join("")}</tr>`).join("")}
                  </tbody>
                </table>
              </div>
              <div class="toolbar" style="margin-top: 12px;">
                <button class="primary-button" type="button" onclick="confirmImportData()" ${state.isImporting ? "disabled" : ""}>${icon("check")}${state.isImporting ? "导入中..." : "确认导入真实数据"}</button>
              </div>
            </article>
          ` : reminder("未选择导入文件", "请选择左侧任一类型的 Excel 文件后，系统会在这里展示预览内容。", "warning")}
          ${importResult ? reminder(`导入完成：成功 ${importResult.imported} 行`, `新增 ${importResult.created} 行，更新 ${importResult.updated} 行，失败 ${importResult.failed} 行。`, importResult.failed ? "warning" : "success") : reminder("导入审计", "导入成功后会立即刷新当前系统真实数据，并返回新增、更新、失败条数。", "success")}
          ${importResult?.errors?.length ? `<article class="list-card is-unread"><header><h3>失败明细</h3>${badge(`${importResult.errors.length} 条`, "danger")}</header><p>${escapeHtml(importResult.errors.join("；"))}</p></article>` : ""}
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
    ${state.isProcessLoading ? `<article class="list-card"><h3>流程数据同步中</h3><p>正在加载党团流程节点、当前进度、草稿和历史记录。</p></article>` : ""}
    ${state.processError ? `<article class="list-card is-unread"><h3>流程接口异常</h3><p>${escapeHtml(state.processError)}</p></article>` : ""}
    ${!timelineNodes.length && !state.isProcessLoading ? `<article class="list-card"><h3>暂无流程节点</h3><p>管理员尚未发布党团流程配置。</p></article>` : ""}
    <div class="timeline">
      ${timelineNodes.map((node) => `
        <div class="timeline-step ${node.status === "next" ? "is-next" : ""}">
          <span class="status-dot ${node.status === "done" ? "tone-green" : node.status === "active" ? "" : ""}">${node.status === "next" ? "" : icon(node.status === "done" ? "check" : "route")}</span>
          <button type="button" class="ghost-button" style="padding:0;border:none;background:none;color:#0f172a;font-weight:700;justify-content:flex-start;" data-action="view-process-node-detail" data-id="${escapeHtml(node.id)}">${node.name}</button>
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

function renderNoticeCard(item, options = {}) {
  const summaryOnly = options.summaryOnly !== false;
  const showDetailButton = options.showDetailButton !== false;
  const summary = item.summary || item.text || "";
  const tags = Array.isArray(item.tags) ? item.tags : [];
  return `
    <article class="list-card ${item.unread ? "is-unread" : ""}">
      <header>
        <h3>${escapeHtml(item.title)}</h3>
        ${badge(item.unread ? "未读" : "已读", item.unread ? "warning" : "neutral")}
      </header>
      <p>${escapeHtml(summaryOnly ? summary : (item.text || summary))}</p>
      ${tags.length ? `<div class="chip-row" style="margin-top:12px;">${tags.map((tag) => `<span class="chip is-active">${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
      <div class="list-meta">
        <span>${escapeHtml(item.time)}</span>
        <span>${escapeHtml(item.target || "全体学生")}</span>
        ${item.attachmentName ? `<span>附件：${escapeHtml(item.attachmentName)}</span>` : ""}
      </div>
      ${showDetailButton ? `<div class="toolbar" style="margin-top:12px;"><button type="button" class="secondary-button" data-action="view-notice" data-id="${escapeHtml(item.id)}">${icon("file")}查看详情</button></div>` : ""}
    </article>
  `;
}

function getAvailableNoticeTags(sourceRows) {
  const rows = Array.isArray(sourceRows) ? sourceRows : getNoticeRows();
  const merged = new Set(DEFAULT_NOTICE_TAGS);
  rows.forEach((item) => {
    (item.tags || []).forEach((tag) => {
      const normalized = String(tag || "").trim();
      if (normalized) merged.add(normalized);
    });
    const typeTag = String(item.type || "").trim();
    if (typeTag && typeTag !== "综合") merged.add(typeTag);
  });
  return Array.from(merged);
}

function hasOtherNoticeTag(item) {
  const tags = Array.isArray(item?.tags) ? item.tags : [];
  return tags.some((tag) => {
    const normalized = String(tag || "").trim();
    return normalized && !DEFAULT_NOTICE_TAGS.includes(normalized);
  });
}

function parseCustomTags(value) {
  return String(value || "")
    .split(/[，,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getStoredNoticeDrafts() {
  try {
    return JSON.parse(localStorage.getItem(NOTICE_DRAFT_STORAGE_KEY) || "[]");
  } catch (error) {
    console.error("读取通知草稿失败", error);
    return [];
  }
}

function setStoredNoticeDrafts(drafts) {
  localStorage.setItem(NOTICE_DRAFT_STORAGE_KEY, JSON.stringify(drafts));
}

async function buildNoticeDraftFromForm(form) {
  const formData = new FormData(form);
  const attachmentFile = form.querySelector('input[name="attachment"]')?.files?.[0] || null;
  let attachment = state.noticeDraftAttachment;
  if (attachmentFile) {
    attachment = {
      name: attachmentFile.name,
      data: await fileToDataUrl(attachmentFile)
    };
  }
  return {
    id: `notice-draft-${Date.now()}`,
    title: formData.get("title")?.toString().trim() || "",
    summary: formData.get("summary")?.toString().trim() || "",
    content: formData.get("content")?.toString().trim() || "",
    customTags: formData.get("customTags")?.toString().trim() || "",
    selectedTags: [...state.noticeDraftTags],
    audienceGrades: [...state.noticeAudienceGrades],
    attachmentName: attachment?.name || "",
    attachmentData: attachment?.data || "",
    updatedAt: new Date().toLocaleString()
  };
}

function renderNoticeDraftList() {
  const drafts = getStoredNoticeDrafts();
  if (!drafts.length) {
    return `<p style="color:#94a3b8; padding: 16px 0;">草稿箱为空</p>`;
  }
  return drafts.map((draft) => `
    <article class="list-card">
      <header>
        <h3>${escapeHtml(draft.title || "未命名草稿")}</h3>
        ${badge("草稿", "neutral")}
      </header>
      <p>${escapeHtml(draft.summary || draft.content || "暂无内容")}</p>
      <div class="list-meta">
        <span>${escapeHtml(draft.updatedAt || "")}</span>
        <span>${escapeHtml((draft.selectedTags || []).join("、") || "未选标签")}</span>
        <span>${escapeHtml((draft.audienceGrades || []).join("、") || "全体年级")}</span>
      </div>
      <div class="toolbar" style="margin-top:12px;">
        <button type="button" class="secondary-button" data-action="load-notice-draft" data-id="${escapeHtml(draft.id)}">${icon("file")}加载</button>
        <button type="button" class="ghost-button" data-action="delete-notice-draft" data-id="${escapeHtml(draft.id)}">${icon("x")}删除</button>
      </div>
    </article>
  `).join("");
}

function updateNoticeDraftListUI() {
  const container = document.getElementById("noticeDraftList");
  if (container) {
    container.innerHTML = renderNoticeDraftList();
  }
}

function loadNoticeDraft(draftId) {
  const draft = getStoredNoticeDrafts().find((item) => String(item.id) === String(draftId));
  if (!draft) {
    showToast("未找到该通知草稿");
    return;
  }
  const form = document.querySelector('form[data-form="notice"]');
  if (!form) {
    showToast("当前未打开通知表单");
    return;
  }
  form.querySelector('[name="title"]').value = draft.title || "";
  form.querySelector('[name="summary"]').value = draft.summary || "";
  form.querySelector('[name="content"]').value = draft.content || "";
  form.querySelector('[name="customTags"]').value = draft.customTags || "";
  state.noticeDraftTags = Array.isArray(draft.selectedTags) && draft.selectedTags.length ? draft.selectedTags : ["就业", "党团"];
  state.noticeAudienceGrades = Array.isArray(draft.audienceGrades) && draft.audienceGrades.length ? draft.audienceGrades : [...GRADE_OPTIONS];
  state.noticeDraftAttachment = draft.attachmentData ? { name: draft.attachmentName || "草稿附件", data: draft.attachmentData } : null;
  updateNoticeTagSelectionUI();
  updateNoticeAttachmentHint();
  showToast("通知草稿已加载");
}

function deleteNoticeDraft(draftId) {
  const drafts = getStoredNoticeDrafts().filter((item) => String(item.id) !== String(draftId));
  setStoredNoticeDrafts(drafts);
}

function getNoticeTagSummaryText() {
  return state.noticeDraftTags.length
    ? `当前已选择标签：${state.noticeDraftTags.join("、")}`
    : "当前未选标签，发布后会以“综合通知”展示。";
}

function getNoticeAudienceSummaryText() {
  return state.noticeAudienceGrades.length === GRADE_OPTIONS.length
    ? "当前推送年级：大一、大二、大三、大四"
    : state.noticeAudienceGrades.length
      ? `当前推送年级：${state.noticeAudienceGrades.join("、")}`
      : "当前未选推送年级，发布时将默认所有年级可见。";
}

function updateNoticeTagSelectionUI() {
  const noticeForm = document.querySelector('form[data-form="notice"]');
  if (!noticeForm) return;

  noticeForm.querySelectorAll('[data-action="toggle-notice-tag"]').forEach((button) => {
    const tag = button.dataset.tag;
    button.classList.toggle("is-active", state.noticeDraftTags.includes(tag));
  });

  const hiddenInput = noticeForm.querySelector('input[name="selectedTags"]');
  if (hiddenInput) {
    hiddenInput.value = JSON.stringify(state.noticeDraftTags);
  }
  const audienceInput = noticeForm.querySelector('input[name="audienceGrades"]');
  if (audienceInput) {
    audienceInput.value = JSON.stringify(state.noticeAudienceGrades);
  }

  noticeForm.querySelectorAll('[data-action="toggle-notice-audience-grade"]').forEach((button) => {
    const grade = button.dataset.grade;
    button.classList.toggle("is-active", state.noticeAudienceGrades.includes(grade));
  });

  const summaryText = document.getElementById("noticeTagSummaryText");
  if (summaryText) {
    summaryText.textContent = getNoticeTagSummaryText();
  }
  const audienceSummaryText = document.getElementById("noticeAudienceSummaryText");
  if (audienceSummaryText) {
    audienceSummaryText.textContent = getNoticeAudienceSummaryText();
  }
}

function updateNoticeAttachmentHint() {
  const hint = document.getElementById("noticeAttachmentHint");
  if (!hint) return;
  if (state.noticeDraftAttachment?.name) {
    hint.textContent = `当前已缓存附件：${state.noticeDraftAttachment.name}`;
  } else {
    hint.textContent = "支持上传通知附件，学生端详情页可直接下载。";
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("附件读取失败"));
    reader.readAsDataURL(file);
  });
}

function renderNoticeDetailModal(notice) {
  const tags = Array.isArray(notice.tags) ? notice.tags : [];
  return `
    <div class="modal" id="noticeDetailModal" style="display:flex;">
      <div class="modal-panel" style="width: 560px;">
        <div class="modal-head">
          <div><p class="eyebrow">通知详情</p><h2>${escapeHtml(notice.title)}</h2></div>
          <button type="button" class="icon-button" onclick="document.getElementById('noticeDetailModal').remove()">${icon("x")}</button>
        </div>
        <div style="padding-top: 10px;">
          <p><strong>发布时间：</strong>${escapeHtml(notice.time || "-")}</p>
          <p><strong>面向对象：</strong>${escapeHtml(notice.target || "全体学生")}</p>
          <p><strong>简介：</strong>${escapeHtml(notice.summary || notice.text || "无")}</p>
          ${tags.length ? `<p><strong>标签：</strong>${escapeHtml(tags.join("、"))}</p>` : ""}
          <p style="margin-top: 12px;"><strong>正文内容：</strong></p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;white-space:pre-wrap;">${escapeHtml(notice.text || "暂无正文")}</div>
          ${notice.attachmentName ? `
            <div style="margin-top: 14px;">
              <strong>通知附件：</strong>
              ${notice.attachmentData
                ? `<button class="secondary-button" type="button" onclick="downloadNoticeAttachment('${escapeHtml(notice.id)}')">${icon("download")}下载 ${escapeHtml(notice.attachmentName)}</button>`
                : `<span style="color:#64748b;">${escapeHtml(notice.attachmentName)}（预览中，发布后可下载）</span>`
              }
            </div>
          ` : ""}
        </div>
        <div class="toolbar" style="margin-top: 18px;">
          <button class="primary-button" type="button" onclick="document.getElementById('noticeDetailModal').remove()">${icon("check")}关闭</button>
        </div>
      </div>
    </div>
  `;
}

function openNoticeDetail(noticeId) {
  const noticeRows = getNoticeRows();
  const notice = noticeRows.find((item) => String(item.id) === String(noticeId));
  if (!notice) {
    showToast("未找到该通知");
    return;
  }
  document.getElementById("noticeDetailModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", renderNoticeDetailModal(notice));
}

window.downloadNoticeAttachment = function(noticeId) {
  const noticeRows = getNoticeRows();
  const notice = noticeRows.find((item) => String(item.id) === String(noticeId));
  if (!notice?.attachmentData) {
    showToast("该通知暂无附件");
    return;
  }
  const anchor = document.createElement("a");
  anchor.href = notice.attachmentData;
  anchor.download = notice.attachmentName || `notice-${noticeId}-attachment`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

async function bootstrapSession() {
  const savedToken = getSessionItem('sds_token');
  if (!savedToken) {
    render();
    return;
  }

  state.token = savedToken;
  state.isAuthenticated = true;

  try {
    const savedUser = JSON.parse(getSessionItem('sds_user') || 'null');
    if (savedUser) {
      state.user = savedUser;
      state.role = savedUser.role === 'student' ? 'student' : 'admin';
    }
    const savedRole = getSessionItem('sds_role');
    const savedStudentView = getSessionItem('sds_student_view');
    const savedAdminView = getSessionItem('sds_admin_view');
    const savedStudentProcessType = getSessionItem('sds_student_process_type');
    const savedAdminProcessType = getSessionItem('sds_admin_process_type');

    await fetchProfile();
    if (!state.role && state.userProfile?.role) {
      state.role = state.userProfile.role === 'student' ? 'student' : 'admin';
    }
    if (savedRole === 'student' || savedRole === 'admin') state.role = savedRole;
    if (!state.role) state.role = params.get("role") === "admin" ? "admin" : "student";

    if (state.role === "student" || state.role === "student_leader") {
      state.studentProcessType = normalizeProcessType(savedStudentProcessType || state.studentProcessType);
      if (savedStudentView) {
        state.studentView = savedStudentView;
      }
      if (state.studentView === "login" || state.studentView === "register") state.studentView = "home";
      await fetchProcessData({ silent: true });
      await fetchApplications();
      const lastTranscriptId = getSessionItem('sds_last_transcript_id');
      if (lastTranscriptId && state.studentView === "analysis") {
        state.transcriptTask = { transcript_id: lastTranscriptId, upload_time: "" };
        state.transcriptId = lastTranscriptId;
        await fetchAnalysisResult(lastTranscriptId, { allowPending: true });
      }
    } else {
      state.adminView = savedAdminView || state.adminView || "dashboard";
      state.adminProcessType = normalizeProcessType(savedAdminProcessType || state.adminProcessType);
    }

    await fetchPolicies({ silent: true, keyword: "", category: "全部" });
    await fetchBasicData({ silent: true });
    if (state.role !== "student" && state.role !== "student_leader" && ["importExport", "processConfig"].includes(state.adminView)) {
      await fetchAdminProcessNodes({ silent: true });
      await fetchProcessReviews({ silent: true });
    }
    if (state.role !== "student" && state.role !== "student_leader" && state.adminView === "approval") {
      await fetchProcessReviews({ silent: true });
    }
  } catch (error) {
    state.token = null;
    state.isAuthenticated = false;
    state.user = null;
    state.userProfile = null;
    clearSessionState();
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
    "通知简介": "summary",
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

function getCurrentUserName() {
  return state.userProfile?.name || "同学";
}

function parseDownloadFileName(disposition) {
  const value = String(disposition || "");
  const utf8Match = value.match(/filename\*\s*=\s*UTF-8''([^;]+)/i);
  if (utf8Match) {
    try {
      return decodeURIComponent(utf8Match[1]);
    } catch (error) {
      return utf8Match[1];
    }
  }
  const plainMatch = value.match(/filename\s*=\s*"([^"]+)"/i) || value.match(/filename\s*=\s*([^;]+)/i);
  return plainMatch ? plainMatch[1].trim() : "";
}

function triggerBlobDownload(blob, fileName) {
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
}

function getImportExportConfigs() {
  return [
    {
      type: "users",
      title: "学生基础信息",
      description: "导出和导入用户账号、角色、专业、年级等真实 Excel 数据。",
      count: state.userRecords.length
    },
    {
      type: "process_nodes",
      title: "党员流程节点",
      description: "导出和导入党团流程节点顺序、名称与提醒规则 Excel 数据。",
      count: state.processNodes.length
    },
    {
      type: "notices",
      title: "通知公告",
      description: "导出和导入通知标题、内容、目标人群与状态 Excel 数据。",
      count: state.notices.length
    },
    {
      type: "plans",
      title: "培养方案",
      description: "导出和导入培养方案名称、适用年级、专业方向与状态 Excel 数据。",
      count: state.planRecords.length
    }
  ];
}

function parseWorkbookPreview(arrayBuffer) {
  if (!window.XLSX) {
    throw new Error("Excel 解析库尚未加载完成");
  }

  const workbook = window.XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Excel 文件中没有工作表");
  }

  const worksheet = workbook.Sheets[sheetName];
  const rows = window.XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
  if (rows.length < 2) {
    throw new Error("Excel 文件至少需要表头和一行数据");
  }

  return {
    headers: rows[0].map((item) => String(item || "").trim()),
    rows: rows.slice(1).map((row) => row.map((item) => String(item ?? "").trim()))
  };
}

async function downloadImportExportFile(type, mode) {
  const actionPath = mode === "template" ? "templates" : "data";
  const response = await fetch(`${API_BASE_URL}/basic/import-export/${actionPath}/${encodeURIComponent(type)}`, {
    headers: apiHeaders()
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "下载失败");
  }
  const blob = await response.blob();
  const fileName = parseDownloadFileName(response.headers.get("content-disposition")) || `${type}.xlsx`;
  triggerBlobDownload(blob, fileName);
}

window.downloadImportExportTemplate = async function(type) {
  try {
    await downloadImportExportFile(type, "template");
    showToast("模板下载成功");
  } catch (error) {
    showToast(`模板下载失败: ${error.message}`);
  }
};

window.exportImportExportData = async function(type) {
  try {
    await downloadImportExportFile(type, "data");
    showToast("当前数据导出成功");
  } catch (error) {
    showToast(`数据导出失败: ${error.message}`);
  }
};

window.pickImportFile = function(type) {
  const input = document.getElementById("importFileInput");
  if (!input) {
    showToast("导入控件尚未加载完成");
    return;
  }
  input.dataset.type = type;
  input.click();
};

window.handleImportFileChange = async function(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;

  const type = event.target.dataset.type || "";
  if (!type) {
    showToast("请先选择导入类型");
    return;
  }
  const lowerFileName = String(file.name).toLowerCase();
  if (!lowerFileName.endsWith(".xlsx") && !lowerFileName.endsWith(".xls")) {
    showToast("当前请导入 Excel 文件（.xlsx 或 .xls）");
    return;
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const preview = parseWorkbookPreview(arrayBuffer);
    const fileData = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
    state.importPreview = {
      type,
      fileName: file.name,
      headers: preview.headers,
      rows: preview.rows,
      fileData
    };
    state.importResult = null;
    render();
    showToast("文件已读取，请确认预览后执行导入");
  } catch (error) {
    showToast(`文件解析失败: ${error.message}`);
  }
};

window.confirmImportData = async function() {
  if (!state.importPreview?.type || !state.importPreview?.fileData) {
    showToast("请先选择要导入的 Excel 文件");
    return;
  }

  state.isImporting = true;
  render();

  try {
    const response = await fetch(`${API_BASE_URL}/basic/import-export/import/${encodeURIComponent(state.importPreview.type)}`, {
      method: "POST",
      headers: apiHeaders(true),
      body: JSON.stringify({
        fileName: state.importPreview.fileName,
        fileData: state.importPreview.fileData
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "导入失败");
    state.importResult = data;
    await fetchBasicData({ silent: true });
    await fetchAdminProcessNodes({ silent: true });
    await fetchProcessReviews({ silent: true });
    showToast("数据导入完成");
  } catch (error) {
    showToast(`导入失败: ${error.message}`);
  } finally {
    state.isImporting = false;
    render();
  }
};

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
  if (roleButton && !state.isAuthenticated) {
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
        await fetchApplications();
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
        await fetchProcessReviews({ silent: true });
      } else if (state.adminView === "templateManage") {
        await fetchTemplates();
      } else if (["importExport", "processConfig"].includes(state.adminView)) {
        await fetchBasicData({ silent: true });
        await fetchAdminProcessNodes({ silent: true });
        await fetchProcessReviews({ silent: true });
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

  const userEdit = event.target.closest("[data-action='user-edit']");
  if (userEdit) {
    state.editingUserId = userEdit.dataset.id;
    render();
    showToast("已载入该用户，可在右侧表单维护。");
    return;
  }

  const userDelete = event.target.closest("[data-action='user-delete']");
  if (userDelete) {
    const userId = userDelete.dataset.id;
    if (confirm("确定要删除该用户吗？该操作不可撤销。")) {
      try {
        await deleteUserRecord(userId);
        await fetchBasicData({ silent: true });
        if (String(state.editingUserId) === String(userId)) state.editingUserId = null;
        render();
        showToast("用户已删除并刷新列表。");
      } catch (error) {
        showToast(error.message);
      }
    }
    return;
  }

  const planEdit = event.target.closest("[data-action='plan-edit']");
  if (planEdit) {
    state.editingPlanId = planEdit.dataset.id;
    render();
    showToast("已载入该培养方案，可在右侧表单维护。");
    return;
  }

  const planDelete = event.target.closest("[data-action='plan-delete']");
  if (planDelete) {
    const planId = planDelete.dataset.id;
    if (confirm("确定要删除该培养方案吗？")) {
      try {
        await deletePlanRecord(planId);
        await fetchBasicData({ silent: true });
        if (String(state.editingPlanId) === String(planId)) state.editingPlanId = null;
        render();
        showToast("培养方案已删除并刷新列表。");
      } catch (error) {
        showToast(error.message);
      }
    }
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
    "download-template": "请在具体业务模块中选择真实模板或数据文件。",
    "copy-link": "已复制官方渠道说明编号。",
    "student-new-application": "已定位到证明申请表。",
    "submit-material": "请在节点操作区上传材料。",
    "notice-save-draft": "通知草稿已保存。",
    "mark-all-read": "当前筛选范围已标记为已读。",
    "upload-transcript": "已模拟选择成绩单文件。",
    "new-notice": "已打开通知发布工作区。",
    "publish-notice": "通知已发布。",
    "preview-notice": "已生成通知预览。",
    "add-node": "已切换到新增节点表单。",
    "approval-return": "申请已模拟退回补充。",
    "approval-pass": "申请已模拟通过，电子证明将进入生成队列。",
    "start-import": "请选择一个导入类型后再上传 Excel 文件。",
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
  if (action === "start-import") {
    const configs = getImportExportConfigs();
    if (!configs.length) {
      showToast("暂无可导入的数据类型");
      return;
    }
    pickImportFile(configs[0].type);
    return;
  }
  if (action === "submit-material") {
    const form = document.querySelector('form[data-form="process"]');
    if (form) {
      form.requestSubmit();
    }
    return;
  }
  if (action === "switch-student-process-type") {
    const processType = event.target.closest("[data-action]")?.dataset.type;
    state.studentProcessType = normalizeProcessType(processType);
    resetProcessForm();
    saveCurrentView();
    await fetchProcessData({ silent: true, processType: state.studentProcessType });
    render();
    return;
  }
  if (action === "switch-admin-process-type") {
    const processType = event.target.closest("[data-action]")?.dataset.type;
    state.adminProcessType = normalizeProcessType(processType);
    state.editingProcessNodeId = null;
    state.processNodeAttachment = null;
    saveCurrentView();
    await fetchAdminProcessNodes({ silent: true, processType: state.adminProcessType });
    await fetchProcessReviews({ silent: true, processType: state.adminProcessType });
    render();
    return;
  }
  if (action === "toggle-notice-tag") {
    const tag = event.target.closest("[data-action]")?.dataset.tag;
    if (!tag) return;
    if (state.noticeDraftTags.includes(tag)) {
      state.noticeDraftTags = state.noticeDraftTags.filter((item) => item !== tag);
    } else {
      state.noticeDraftTags = [...state.noticeDraftTags, tag];
    }
    updateNoticeTagSelectionUI();
    return;
  }
  if (action === "toggle-notice-audience-grade") {
    const grade = event.target.closest("[data-action]")?.dataset.grade;
    if (!grade) return;
    if (state.noticeAudienceGrades.includes(grade)) {
      state.noticeAudienceGrades = state.noticeAudienceGrades.filter((item) => item !== grade);
    } else {
      state.noticeAudienceGrades = [...state.noticeAudienceGrades, grade];
    }
    updateNoticeTagSelectionUI();
    return;
  }
  if (action === "load-notice-draft") {
    const draftId = event.target.closest("[data-action]")?.dataset.id;
    loadNoticeDraft(draftId);
    return;
  }
  if (action === "delete-notice-draft") {
    const draftId = event.target.closest("[data-action]")?.dataset.id;
    deleteNoticeDraft(draftId);
    updateNoticeDraftListUI();
    showToast("通知草稿已删除");
    return;
  }
  if (action === "notice-save-draft") {
    const form = document.querySelector('form[data-form="notice"]');
    if (!form) return;
    const draft = await buildNoticeDraftFromForm(form);
    const drafts = getStoredNoticeDrafts();
    drafts.unshift(draft);
    setStoredNoticeDrafts(drafts);
    state.noticeDraftAttachment = draft.attachmentData ? { name: draft.attachmentName, data: draft.attachmentData } : null;
    updateNoticeDraftListUI();
    updateNoticeAttachmentHint();
    showToast("通知草稿已保存");
    return;
  }
  if (action === "save-process-draft") {
    const form = document.querySelector('form[data-form="process"]');
    if (!form) return;
    const formData = new FormData(form);
    const selectedMaterialType = formData.get("materialType")?.toString() || "";
    const customMaterialType = formData.get("customMaterialType")?.toString().trim() || "";
    const materialType = selectedMaterialType === "其他" ? customMaterialType : selectedMaterialType;
    const attachmentFile = form.querySelector('input[name="attachment"]')?.files?.[0] || null;
    let attachmentData = state.processDraftAttachment?.data || state.processForm?.attachmentData || "";
    let attachmentName = state.processDraftAttachment?.name || state.processForm?.attachmentName || "";
    if (attachmentFile) {
      attachmentData = await fileToDataUrl(attachmentFile);
      attachmentName = attachmentFile.name;
    }
    const payload = {
      submissionId: state.editingProcessDraftId || undefined,
      nodeId: formData.get("nodeId")?.toString(),
      materialType,
      description: formData.get("description")?.toString().trim(),
      attachmentName,
      attachmentData,
      status: "draft"
    };
    if (!payload.nodeId || !selectedMaterialType) {
      showToast("请先选择流程节点和材料类型。");
      return;
    }
    if (selectedMaterialType === "其他" && !customMaterialType) {
      showToast("请选择“其他”时请补充具体材料名称。");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/process/submissions`, {
        method: "POST",
        headers: apiHeaders(true),
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "流程草稿保存失败");
      state.processDraftAttachment = data.attachmentData ? { name: data.attachmentName, data: data.attachmentData } : null;
      state.processForm = {
        nodeId: data.nodeId || payload.nodeId || "",
        materialType: data.materialType || payload.materialType || getProcessBaseMaterialOptions(getStudentProcessType())[0],
        customMaterialType: isCustomProcessMaterial(data.materialType || payload.materialType, getStudentProcessType())
          ? (data.materialType || payload.materialType || "")
          : "",
        description: data.description || payload.description || "",
        attachmentName: data.attachmentName || attachmentName || "",
        attachmentData: data.attachmentData || attachmentData || ""
      };
      state.editingProcessDraftId = data.submissionId || state.editingProcessDraftId;
      await fetchProcessData({ silent: true });
      render();
      showToast("党团流程草稿已保存");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }
  if (action === "load-process-draft") {
    const draftId = event.target.closest("[data-action]")?.dataset.id;
    const draft = state.processDrafts.find((item) => String(item.submissionId) === String(draftId));
    if (!draft) {
      showToast("未找到该流程草稿");
      return;
    }
    loadProcessDraftToForm(draft);
    render();
    showToast("流程草稿已载入");
    return;
  }
  if (action === "delete-process-draft") {
    const draftId = event.target.closest("[data-action]")?.dataset.id;
    if (!draftId) return;
    if (!confirm("确定要删除这条流程草稿吗？")) return;
    try {
      const response = await fetch(`${API_BASE_URL}/process/submissions/${encodeURIComponent(draftId)}`, {
        method: "DELETE",
        headers: apiHeaders()
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "流程草稿删除失败");
      if (String(state.editingProcessDraftId) === String(draftId)) {
        resetProcessForm();
      }
      await fetchProcessData({ silent: true });
      render();
      showToast("流程草稿已删除");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }
  if (action === "view-notice") {
    const noticeId = event.target.closest("[data-action]")?.dataset.id;
    openNoticeDetail(noticeId);
    return;
  }
  if (action === "preview-notice") {
    const form = document.querySelector('form[data-form="notice"]');
    if (!form) return;
    const formData = new FormData(form);
    const selectedTags = [...state.noticeDraftTags, ...parseCustomTags(formData.get("customTags"))];
    const attachmentFile = form.querySelector('input[name="attachment"]')?.files?.[0];
    const cachedAttachment = attachmentFile
      ? { name: attachmentFile.name, data: "" }
      : state.noticeDraftAttachment;
    const audienceGrades = state.noticeAudienceGrades.length ? [...state.noticeAudienceGrades] : [...GRADE_OPTIONS];
    const previewNotice = {
      id: "preview-notice",
      title: formData.get("title")?.toString().trim() || "未命名通知",
      summary: formData.get("summary")?.toString().trim() || "",
      text: formData.get("content")?.toString().trim() || "暂无正文内容",
      target: audienceGrades.length === GRADE_OPTIONS.length ? "全体年级" : audienceGrades.join("、"),
      time: new Date().toLocaleString(),
      unread: true,
      type: selectedTags[0] || "综合",
      tags: Array.from(new Set(selectedTags)),
      audienceGrades,
      attachmentName: cachedAttachment?.name || "",
      attachmentData: cachedAttachment?.data || ""
    };
    document.getElementById("noticeDetailModal")?.remove();
    document.body.insertAdjacentHTML("beforeend", renderNoticeDetailModal(previewNotice));
    return;
  }
  if (action === "publish-notice") {
    const form = document.querySelector('form[data-form="notice"]');
    if (form) {
      form.requestSubmit();
    }
    return;
  }
  if (action === "add-node") {
    state.editingProcessNodeId = null;
    state.processNodeAttachment = null;
    render();
    return;
  }
  if (action === "process-node-edit") {
    state.editingProcessNodeId = event.target.closest("[data-action]")?.dataset.id || null;
    const editingNode = (state.processNodes || []).find((item) => String(item.node_id) === String(state.editingProcessNodeId));
    state.processNodeAttachment = editingNode?.attachment_data
      ? { name: editingNode.attachment_name || "节点附件", data: editingNode.attachment_data }
      : null;
    render();
    showToast("已载入该流程节点，可在右侧维护。");
    return;
  }
  if (action === "process-node-delete") {
    const nodeId = event.target.closest("[data-action]")?.dataset.id;
    if (!nodeId) return;
    if (!confirm("确定要删除该流程节点吗？该节点下的流程记录也会一并删除。")) return;
    try {
      await deleteProcessNode(nodeId);
      if (String(state.editingProcessNodeId) === String(nodeId)) {
        state.editingProcessNodeId = null;
        state.processNodeAttachment = null;
      }
      await fetchAdminProcessNodes({ silent: true });
      render();
      showToast("流程节点已删除并刷新列表。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }
  if (action === "process-node-reset") {
    state.editingProcessNodeId = null;
    state.processNodeAttachment = null;
    render();
    return;
  }
  if (action === "view-process-node-detail") {
    const nodeId = event.target.closest("[data-action]")?.dataset.id;
    openProcessNodeDetail(nodeId);
    return;
  }
  if (action === "review-process-submission") {
    const submissionId = event.target.closest("[data-action]")?.dataset.id;
    openProcessReviewModal(submissionId);
    return;
  }
  if (action === "download-process-node-attachment") {
    const nodeId = event.target.closest("[data-action]")?.dataset.id;
    downloadProcessNodeAttachment(nodeId);
    return;
  }
  if (action === "download-process-submission-attachment") {
    const submissionId = event.target.closest("[data-action]")?.dataset.id;
    downloadProcessSubmissionAttachment(submissionId);
    return;
  }
  if (action === "close-process-node-modal") {
    document.getElementById("processNodeDetailModal")?.remove();
    return;
  }
  if (action === "close-process-review-modal") {
    document.getElementById("processReviewModal")?.remove();
    render();
    return;
  }
  if (action === "reset-process-form") {
    resetProcessForm();
    render();
    return;
  }
  if (action === "policy-form-reset" || action === "知识库管理-primary") {
    state.editingPolicyId = null;
    render();
    return;
  }
  if (action === "user-form-reset" || action === "用户管理-primary") {
    state.editingUserId = null;
    render();
    return;
  }
  if (action === "plan-form-reset" || action === "培养方案-primary") {
    state.editingPlanId = null;
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
    state.editingUserId = null;
    state.editingPlanId = null;
    clearSessionState();
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
  if (action === "edit-profile") {
    if (state.role === "student" || state.role === "student_leader") {
      state.studentView = "applications";
      state.studentAppView = "profile";
    } else {
      state.adminView = "profile";
    }
    render();
    return;
  }
  if (action === "student-edit-profile") {
    state.studentView = "applications";
    state.studentAppView = "profile";
    render();
    return;
  }
  if (action === "admin-profile-back") {
    state.adminView = "dashboard";
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
    state.noticeDraftTags = ["就业", "党团"];
    state.noticeAudienceGrades = [...GRADE_OPTIONS];
    state.noticeDraftAttachment = null;
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
  if (event.target.closest('form[data-form="process"]')) {
    const form = event.target.closest('form[data-form="process"]');
    if (form) {
      const formData = new FormData(form);
      const processType = getStudentProcessType();
      const selectedMaterialType = formData.get("materialType")?.toString() || getProcessBaseMaterialOptions(processType)[0];
      const customMaterialType = formData.get("customMaterialType")?.toString().trim() || "";
      state.processForm = {
        nodeId: formData.get("nodeId")?.toString() || "",
        materialType: selectedMaterialType === "其他" ? customMaterialType : selectedMaterialType,
        customMaterialType,
        description: formData.get("description")?.toString() || "",
        attachmentName: state.processDraftAttachment?.name || state.processForm?.attachmentName || "",
        attachmentData: state.processDraftAttachment?.data || state.processForm?.attachmentData || ""
      };
    }
  }
});

document.addEventListener("change", async (event) => {
  if (event.target.id === "transcriptFileInput") {
    const file = event.target.files?.[0];
    event.target.value = "";
    await uploadTranscriptFile(file);
  }
  if (event.target.matches('form[data-form="process"] input[name="attachment"]')) {
    const file = event.target.files?.[0] || null;
    state.processDraftAttachment = file ? { name: file.name, data: "" } : null;
    const hint = document.getElementById("processAttachmentHint");
    if (hint) {
      hint.textContent = state.processDraftAttachment?.name
        ? `当前已缓存附件：${state.processDraftAttachment.name}`
        : "支持上传思想汇报、谈话记录等附件。";
    }
  }
  if (event.target.matches('form[data-form="process"] select[name="materialType"]')) {
    const form = event.target.closest('form[data-form="process"]');
    if (form) {
      const formData = new FormData(form);
      const processType = getStudentProcessType();
      const selectedMaterialType = formData.get("materialType")?.toString() || getProcessBaseMaterialOptions(processType)[0];
      const customMaterialType = formData.get("customMaterialType")?.toString().trim() || "";
      state.processForm = {
        nodeId: formData.get("nodeId")?.toString() || "",
        materialType: selectedMaterialType === "其他" ? customMaterialType : selectedMaterialType,
        customMaterialType,
        description: formData.get("description")?.toString() || "",
        attachmentName: state.processDraftAttachment?.name || state.processForm?.attachmentName || "",
        attachmentData: state.processDraftAttachment?.data || state.processForm?.attachmentData || ""
      };
      render();
    }
  }
  if (event.target.matches('form[data-form="process-node"] input[name="attachment"]')) {
    const file = event.target.files?.[0] || null;
    state.processNodeAttachment = file ? { name: file.name, data: "" } : null;
    const hint = document.getElementById("processNodeAttachmentHint");
    if (hint) {
      hint.textContent = state.processNodeAttachment?.name
        ? `当前已缓存附件：${state.processNodeAttachment.name}`
        : "支持上传该节点的说明文档、模板附件，学生端详情可下载。";
    }
  }
  if (event.target.matches('form[data-form="notice"] input[name="attachment"]')) {
    const file = event.target.files?.[0] || null;
    state.noticeDraftAttachment = file ? { name: file.name, data: "" } : null;
    updateNoticeAttachmentHint();
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
    const customTags = parseCustomTags(formData.get("customTags"));
    const tags = Array.from(new Set([...state.noticeDraftTags, ...customTags]));
    const attachmentFile = form.querySelector('input[name="attachment"]')?.files?.[0] || null;
    let attachmentData = state.noticeDraftAttachment?.data || "";
    let attachmentName = state.noticeDraftAttachment?.name || "";
    if (attachmentFile) {
      attachmentData = await fileToDataUrl(attachmentFile);
      attachmentName = attachmentFile.name;
    }
    const payload = {
      title: formData.get("title")?.toString().trim(),
      summary: formData.get("summary")?.toString().trim(),
      content: formData.get("content")?.toString().trim(),
      target: state.noticeAudienceGrades.length === GRADE_OPTIONS.length ? "全体年级" : state.noticeAudienceGrades.join("、"),
      type: tags[0] || "综合",
      tags,
      audienceGrades: state.noticeAudienceGrades.length ? state.noticeAudienceGrades : [...GRADE_OPTIONS],
      attachmentName,
      attachmentData,
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
      state.noticeDraftTags = ["就业", "党团"];
      state.noticeAudienceGrades = [...GRADE_OPTIONS];
      state.noticeDraftAttachment = null;
      form.reset();
      render();
      showToast("通知已发布并刷新列表。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  if (form.dataset.form === "process") {
    const formData = new FormData(form);
    const selectedMaterialType = formData.get("materialType")?.toString() || "";
    const customMaterialType = formData.get("customMaterialType")?.toString().trim() || "";
    const materialType = selectedMaterialType === "其他" ? customMaterialType : selectedMaterialType;
    const attachmentFile = form.querySelector('input[name="attachment"]')?.files?.[0] || null;
    let attachmentData = state.processDraftAttachment?.data || state.processForm?.attachmentData || "";
    let attachmentName = state.processDraftAttachment?.name || state.processForm?.attachmentName || "";
    if (attachmentFile) {
      attachmentData = await fileToDataUrl(attachmentFile);
      attachmentName = attachmentFile.name;
    }
    const payload = {
      submissionId: state.editingProcessDraftId || undefined,
      nodeId: formData.get("nodeId")?.toString(),
      materialType,
      description: formData.get("description")?.toString().trim(),
      attachmentName,
      attachmentData,
      status: "pending"
    };
    if (!payload.nodeId || !selectedMaterialType) {
      showToast("请先选择流程节点和材料类型。");
      return;
    }
    if (selectedMaterialType === "其他" && !customMaterialType) {
      showToast("请选择“其他”时请补充具体材料名称。");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/process/submissions`, {
        method: "POST",
        headers: apiHeaders(true),
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "流程材料提交失败");
      resetProcessForm();
      form.reset();
      await fetchProcessData({ silent: true });
      render();
      showToast("党团流程材料已提交，等待管理员审核。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  if (form.dataset.form === "process-node") {
    const formData = new FormData(form);
    const attachmentFile = form.querySelector('input[name="attachment"]')?.files?.[0] || null;
    let attachmentData = state.processNodeAttachment?.data || "";
    let attachmentName = state.processNodeAttachment?.name || "";
    if (attachmentFile) {
      attachmentData = await fileToDataUrl(attachmentFile);
      attachmentName = attachmentFile.name;
    }
    const payload = {
      processType: formData.get("processType")?.toString().trim() || "party",
      sequence: Number(formData.get("sequence")),
      nodeName: formData.get("nodeName")?.toString().trim(),
      nodeDetail: formData.get("nodeDetail")?.toString().trim(),
      scheduledAt: formData.get("scheduledAt")?.toString().trim(),
      reminderRule: formData.get("reminderRule")?.toString().trim(),
      attachmentName,
      attachmentData
    };
    if (!payload.nodeName || !Number.isFinite(payload.sequence) || payload.sequence <= 0) {
      showToast("请完整填写节点名称和有效顺序。");
      return;
    }
    try {
      await saveProcessNode(payload);
      await fetchAdminProcessNodes({ silent: true });
      await fetchProcessReviews({ silent: true });
      state.editingProcessNodeId = null;
      state.processNodeAttachment = null;
      form.reset();
      render();
      showToast("流程节点已保存并刷新列表。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  if (form.dataset.form === "user") {
    const formData = new FormData(form);
    const payload = {
      accountId: formData.get("accountId")?.toString().trim(),
      password: formData.get("password")?.toString().trim(),
      name: formData.get("name")?.toString().trim(),
      role: formData.get("role")?.toString() || "student",
      status: formData.get("status")?.toString() || "active",
      major: formData.get("major")?.toString().trim(),
      grade: formData.get("grade")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      department: formData.get("department")?.toString().trim()
    };
    if (!payload.accountId) {
      showToast("请填写账号。");
      return;
    }
    if (!state.editingUserId && !payload.password) {
      showToast("新建用户时请填写初始密码。");
      return;
    }
    if (state.editingUserId && !payload.password) {
      delete payload.password;
    }
    try {
      await saveUserRecord(payload);
      await fetchBasicData({ silent: true });
      state.editingUserId = null;
      form.reset();
      render();
      showToast("用户信息已保存并刷新列表。");
    } catch (error) {
      showToast(error.message);
    }
    return;
  }

  if (form.dataset.form === "plan") {
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      grade: formData.get("grade")?.toString().trim(),
      major: formData.get("major")?.toString().trim(),
      status: formData.get("status")?.toString() || "draft"
    };
    if (!payload.name || !payload.grade) {
      showToast("请完整填写方案名称和适用年级。");
      return;
    }
    try {
      await savePlanRecord(payload);
      await fetchBasicData({ silent: true });
      state.editingPlanId = null;
      form.reset();
      render();
      showToast("培养方案已保存并刷新列表。");
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
      setSessionItem('sds_token', data.token);
      setSessionItem('sds_user', JSON.stringify(data.user));
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
