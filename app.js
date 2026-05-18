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
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>'
};

const state = {
  role: "student",
  studentView: "home",
  adminView: "dashboard",
  policyQuery: "",
  policyCategory: "全部",
  noticeFilter: "全部",
  selectedApproval: "APP-202605-001"
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

const policies = [
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

function render() {
  const app = document.getElementById("app");
  app.innerHTML = state.role === "student" ? renderStudentShell() : renderAdminShell();
  mountIcons(app);
  syncRoleSwitch();
}

function syncRoleSwitch() {
  document.querySelectorAll("[data-role]").forEach((button) => {
    const active = button.dataset.role === state.role;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderStudentShell() {
  return `
    <section class="workspace student-workspace">
      ${renderSidebar("student")}
      <section class="content-area">
        ${renderStudentView()}
      </section>
      ${renderMobileNav()}
    </section>
  `;
}

function renderAdminShell() {
  return `
    <section class="workspace admin-workspace">
      ${renderSidebar("admin")}
      <section class="content-area">
        ${renderAdminView()}
      </section>
    </section>
  `;
}

function renderSidebar(kind) {
  const nav = kind === "student" ? studentNav : adminNav;
  const active = kind === "student" ? state.studentView : state.adminView;
  const subtitle = kind === "student" ? "学生端 Web" : "管理员端 PC 后台";
  const profile = kind === "student"
    ? ["普通学生", "2023120000", "当前阶段：培养考察"]
    : ["管理老师", "admin01", "系统管理员"];
  return `
    <aside class="sidebar">
      <img class="sidebar-logo" src="./imgs/logo.png" alt="中国人民大学信息学院" />
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
          ${notices.slice(0, 3).map(renderNoticeCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderConsult() {
  const categories = ["全部", "证明类", "党团类", "奖助类", "生活类"];
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
          <span class="badge">${filteredPolicies().length} 条</span>
        </div>
        <div class="result-list">
          ${renderPolicyResults()}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">标准答复</p>
            <h2>${filteredPolicies()[0]?.title || "暂无匹配"}</h2>
            <p>${filteredPolicies()[0]?.answer || "换一个关键词试试，例如“在读证明”或“思想汇报”。"}</p>
          </div>
        </div>
        <div class="template-list">
          ${filteredPolicies().slice(0, 3).map((item) => `
            <article class="list-card">
              <header>
                <h3>${item.attachment}</h3>
                <span class="badge neutral">${item.category}</span>
              </header>
              <p>维护部门：${item.owner} · 更新于 ${item.updated}</p>
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
  const rows = state.noticeFilter === "全部" ? notices : notices.filter((item) => item.type === state.noticeFilter);
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
  return `
    ${pageHead("申请与证明", "在线提交申请、查看审批结果，并在通过后预览或下载电子证明。", [
      ["student-new-application", "新建申请", "plus", "primary-button"]
    ])}
    <section class="grid two">
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">申请提交</p>
            <h2>证明申请表</h2>
          </div>
        </div>
        <form class="form-grid" data-form="application">
          <label class="field">
            <span>申请类型</span>
            <select required>
              <option>在读证明开具</option>
              <option>党员材料补交</option>
              <option>奖学金材料确认</option>
            </select>
          </label>
          <label class="field">
            <span>用途</span>
            <input type="text" placeholder="如实习、签证、奖学金" required />
          </label>
          <label class="field full">
            <span>说明</span>
            <textarea placeholder="请补充使用场景、接收单位或特殊要求"></textarea>
          </label>
          <label class="field full">
            <span>附件上传</span>
            <input type="file" />
          </label>
          <div class="toolbar field full">
            <button type="submit" class="primary-button">${icon("upload")}提交申请</button>
            <button type="button" class="ghost-button" data-action="save-draft">${icon("file")}保存草稿</button>
          </div>
        </form>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">审批结果</p>
            <h2>电子证明预览</h2>
            <p>审核通过后自动生成文件编号，支持下载并保留操作日志。</p>
          </div>
        </div>
        <div class="approval-preview">
          <span class="badge success">已生成示例</span>
          <strong>在读证明 / CERT-202605-009</strong>
          <p>姓名：张同学 · 学号：2023120000 · 专业：计算机科学与技术</p>
          <p>状态：等待管理员最终签发</p>
          <div class="toolbar">
            <button type="button" class="secondary-button" data-action="download-template">${icon("download")}下载 PDF</button>
            <button type="button" class="ghost-button" data-action="copy-link">${icon("file")}复制编号</button>
          </div>
        </div>
      </div>
    </section>
    <section class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div>
          <p class="eyebrow">申请记录</p>
          <h2>近一年审批留痕</h2>
        </div>
      </div>
      ${table(["申请单号", "类型", "状态", "提交时间", "操作"], [
        ["APP-202605-001", "在读证明开具", badge("待审核", "warning"), "今天 09:18", actionButton("查看")],
        ["APP-202604-022", "成绩排名证明", badge("已通过", "success"), "2026-04-22", actionButton("下载")],
        ["APP-202604-009", "党员材料补交", badge("待补充", "danger"), "2026-04-14", actionButton("补交")]
      ])}
    </section>
  `;
}

function renderAnalysis() {
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
          <button type="button" class="secondary-button" data-action="upload-transcript">${icon("upload")}选择文件</button>
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
          ${credits.map((item) => creditRow(item)).join("")}
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
          ${reminder("专业选修缺少 8 学分", "建议优先选择数据库系统实践、人工智能导论等方向课程。", "warning")}
          ${reminder("实践环节缺少 2 学分", "可通过科研训练或学院认定竞赛补足。", "success")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">解析任务</p>
            <h2>最近记录</h2>
          </div>
        </div>
        ${table(["任务号", "上传时间", "状态", "结果"], [
          ["TR-202605-006", "2026-05-16", badge("解析成功", "success"), "2 个建议"],
          ["TR-202604-014", "2026-04-20", badge("人工核对", "warning"), "已处理"]
        ])}
      </div>
    </section>
  `;
}

function renderTemplates() {
  const templates = [
    ["在读证明模板", "证明类", "v1.2", "启用"],
    ["党员材料模板", "党团类", "v2.0", "启用"],
    ["奖学金申请表", "奖助类", "v1.5", "启用"],
    ["成绩单核对说明", "学业类", "v1.0", "草稿"]
  ];
  return `
    ${pageHead("模板下载", "集中下载证明、党团、奖助与成绩分析相关模板。", [
      ["quick-search", "检索模板", "search", "ghost-button"]
    ])}
    <section class="grid three">
      ${templates.map(([name, type, version, status]) => `
        <article class="list-card">
          <header>
            <h3>${name}</h3>
            ${badge(status, status === "启用" ? "success" : "neutral")}
          </header>
          <p>${type} · ${version} · 维护部门已审核</p>
          <div class="toolbar">
            <button type="button" class="secondary-button" data-action="download-template">${icon("download")}下载</button>
            <button type="button" class="ghost-button" data-action="copy-link">${icon("file")}查看说明</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

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
  return `
    ${pageHead("后台首页", "面向老师与管理人员的维护、审核、配置和批量数据处理工作台。", [
      ["new-notice", "新建通知", "plus", "primary-button"]
    ])}
    <section class="grid four">
      ${metric("待处理事项", "18", "较昨日 +3", "amber")}
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
        ${approvalTable()}
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
            ${notices.slice(0, 2).map(renderNoticeCard).join("")}
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
  return adminPageWithTable(
    "用户管理",
    "统一维护学生、老师与 4 级权限体系。",
    ["导出名单", "新建用户"],
    ["账号", "姓名", "角色", "组织/专业", "状态"],
    users.map((row) => [row[0], row[1], badge(row[2], row[2] === "普通学生" ? "neutral" : "success"), row[3], badge(row[4], "success")]),
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
  return adminPageWithTable(
    "知识库管理",
    "维护政策条目、标准问答、附件模板与关键词。",
    ["批量导入", "新增条目"],
    ["标题", "分类", "状态", "更新日期", "操作"],
    knowledgeRows.map((row) => [row[0], row[1], badge(row[2], row[2] === "启用" ? "success" : "neutral"), row[3], actionButton("编辑")]),
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">新增 / 编辑条目</p><h2>政策内容</h2></div></div>
        <form class="form-grid" data-form="admin">
          ${field("标题", "input", "请输入政策标题")}
          ${field("分类", "select", ["证明类", "党团类", "奖助类", "生活类"])}
          ${field("关键词", "input", "在读证明, 下载, 模板", true)}
          ${field("内容", "textarea", "支持录入标准答复、注意事项、官方链接与办理说明。", true)}
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("check")}保存条目</button></div>
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
        <form class="form-grid" data-form="admin">
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
  const selected = applications.find((item) => item.id === state.selectedApproval) || applications[0];
  return `
    ${pageHead("审批管理", "集中处理申请单，支持通过、退回补充与操作日志审计。", [
      ["export-approval", "批量导出", "download", "ghost-button"],
      ["view-returned", "查看可撤回记录", "file", "ghost-button"]
    ])}
    <section class="admin-layout">
      <div class="panel">
        <div class="panel-head">
          <div><p class="eyebrow">申请列表</p><h2>待审核队列</h2></div>
          <div class="chip-row">
            <button class="chip is-active" type="button">待审核</button>
            <button class="chip" type="button">筛选</button>
          </div>
        </div>
        <div class="notice-list">
          ${applications.map((item) => `
            <article class="list-card ${state.selectedApproval === item.id ? "is-unread" : ""}">
              <header>
                <h3>${item.type}</h3>
                ${badge(item.status, item.status === "待补充" ? "danger" : "warning")}
              </header>
              <p>${item.applicant} · ${item.submit}</p>
              <p>${item.comment}</p>
              <div class="toolbar">
                <button type="button" class="secondary-button" data-select-approval="${item.id}">${icon("file")}查看详情</button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">申请详情</p><h2>${selected.type}</h2></div></div>
        <div class="approval-preview">
          <strong>申请人：${selected.applicant}</strong>
          <p>申请单号：${selected.id}</p>
          <p>附件：${selected.file}</p>
          <p>说明：${selected.comment}</p>
        </div>
        <label class="field" style="margin-top:14px">
          <span>审批意见</span>
          <textarea placeholder="请输入通过意见或退回原因"></textarea>
        </label>
        <div class="toolbar" style="margin-top:14px">
          <button type="button" class="ghost-button" data-action="approval-return">${icon("x")}退回补充</button>
          <button type="button" class="primary-button" data-action="approval-pass">${icon("check")}通过</button>
        </div>
      </div>
    </section>
  `;
}

function renderTemplateManage() {
  return adminPageWithTable(
    "模板管理",
    "维护证明模板、变量字段、版本和发布状态。",
    ["模板预览", "新增模板"],
    ["模板名称", "类型", "版本", "状态", "操作"],
    [
      ["在读证明模板", "证明类", "v1.2", badge("启用", "success"), actionButton("编辑")],
      ["党员材料模板", "党团类", "v2.0", badge("草稿", "neutral"), actionButton("发布")]
    ],
    `
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow">模板编辑区</p><h2>变量字段</h2></div></div>
        <form class="form-grid" data-form="admin">
          ${field("模板名称", "input", "在读证明模板")}
          ${field("变量字段", "textarea", "姓名、学号、专业、年级、日期", true)}
          ${field("模板说明", "textarea", "支持上传 Word/PDF 模板，并配置字段映射与导出格式。", true)}
          <div class="toolbar field full"><button class="primary-button" type="submit">${icon("check")}保存模板</button></div>
        </form>
      </div>
    `
  );
}

function renderTrainingManage() {
  return adminPageWithTable(
    "培养方案",
    "维护专业培养方案、课程模块要求和学分比对规则。",
    ["导入方案", "新建方案"],
    ["方案名称", "适用年级", "状态", "最近更新", "操作"],
    planRows.map((row) => [row[0], row[1], badge(row[2], row[2] === "已发布" ? "success" : row[2] === "待审核" ? "warning" : "neutral"), row[3], actionButton("查看详情")]),
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
  return `
    <div class="timeline">
      ${processNodes.map((node) => `
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

function filteredPolicies() {
  const query = state.policyQuery.trim().toLowerCase();
  return policies.filter((item) => {
    const inCategory = state.policyCategory === "全部" || item.category === state.policyCategory;
    const haystack = `${item.title} ${item.category} ${item.keywords} ${item.answer}`.toLowerCase();
    return inCategory && (!query || haystack.includes(query));
  });
}

function renderPolicyResults(limit) {
  const results = filteredPolicies().slice(0, limit || filteredPolicies().length);
  if (!results.length) {
    return `<article class="list-card"><h3>暂无匹配结果</h3><p>请尝试更换关键词，或联系管理员维护知识库。</p></article>`;
  }
  return results.map((item) => `
    <article class="list-card">
      <header>
        <h3>${item.title}</h3>
        <span class="badge">${item.category}</span>
      </header>
      <p>${item.answer}</p>
      <div class="list-meta">
        <span>${item.owner}</span>
        <span>更新于 ${item.updated}</span>
        <span>附件：${item.attachment}</span>
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

function actionButton(text) {
  return `<button type="button" class="ghost-button" data-action="table-action">${text}</button>`;
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
        <textarea placeholder="${value}"></textarea>
      </label>
    `;
  }
  return `
    <label class="field ${full ? "full" : ""}">
      <span>${label}</span>
      <input type="text" placeholder="${value}" />
    </label>
  `;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
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
  const matched = policies.filter((item) => `${item.title} ${item.keywords} ${item.answer}`.toLowerCase().includes(query));
  results.innerHTML = (query ? matched : policies).map((item) => `
    <article class="list-card">
      <header><h3>${item.title}</h3>${badge(item.category, "neutral")}</header>
      <p>${item.answer}</p>
      <div class="toolbar">
        <button class="secondary-button" data-action="go-consult">${icon("message")}进入咨询</button>
        <button class="ghost-button" data-action="download-template">${icon("download")}下载附件</button>
      </div>
    </article>
  `).join("") || `<article class="list-card"><h3>暂无结果</h3><p>请换一个关键词。</p></article>`;
}

document.addEventListener("click", (event) => {
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
    } else {
      state.adminView = navButton.dataset.view;
      state.role = "admin";
    }
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
    render();
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
  if (action === "close-modal") {
    closeModal();
    return;
  }
  if (action === "student-new-application") {
    state.studentView = "applications";
    state.role = "student";
    render();
    showToast(messages[action]);
    return;
  }
  if (action === "new-notice") {
    state.adminView = "noticeManage";
    state.role = "admin";
    render();
    showToast("已进入通知管理。");
    return;
  }
  if (action === "go-consult") {
    closeModal();
    state.role = "student";
    state.studentView = "consult";
    state.policyQuery = document.getElementById("globalSearchInput").value;
    render();
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

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();
  showToast(form.dataset.form === "application" ? "申请已提交，状态更新为待审核。" : "内容已保存。");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

mountIcons();
render();
