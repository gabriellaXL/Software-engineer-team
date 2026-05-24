# 学院学生综合服务与党团管理平台 - 后端服务说明

本文档面向项目交付、前后端联调和答辩准备。

当前后端已完成核心模块开发，重点工作已从“补功能”转为“稳定交付、可复现启动、便于演示与答辩”。

## 1. 技术栈与系统说明

- 运行环境：Node.js
- Web 框架：Express
- 数据库：人大金仓 KingbaseES
- 数据库驱动：`pg`
- 接口规范：RESTful API
- 认证方式：JWT
- 文件上传：`multer`
- 第三方依赖服务：Gotenberg，用于将 DOCX 模板转换为 PDF

## 2. 项目当前状态

目前后端已包含以下模块：

- 认证模块
- 政策知识库模块
- 党团流程模块
- 业务申请与审批模块
- 电子证明模块
- 学业分析模块
- 通知、用户、培养方案等基础管理模块
- 模板上传与管理模块

说明：

- README 中旧版本提到“任务块五可能尚未实现”的描述已不再适用。
- 当前仓库中已经提供通知、用户、培养方案相关接口，可直接联调。
- 建议当前阶段优先做文档收口、全链路回归和答辩材料准备。

## 3. 本地启动前准备

启动前请确认本机已经具备以下环境：

- Node.js
- npm
- Docker
- 人大金仓 KingbaseES 数据库

建议使用以下交付流程启动项目：

1. 启动 Gotenberg
2. 创建本地数据库
3. 配置环境变量
4. 安装依赖
5. 初始化数据库
6. 启动后端服务

## 4. 启动顺序

### 4.1 启动 Gotenberg 服务

电子证明相关流程依赖 Gotenberg 进行 DOCX 转 PDF。

请先在新终端中执行：

```bash
docker run --rm -p 3001:3000 gotenberg/gotenberg:8
```

说明：

- 容器启动后会监听本地 `3001` 端口
- 后端会将待转换的文件发送到该端口
- 如果未启动该服务，电子证明或 PDF 转换相关功能会失败

### 4.2 创建本地数据库

请先在本地金仓数据库中创建一个空数据库，推荐名称：

```text
sds_db
```

你也可以自定义数据库名，但必须与环境变量中的 `DB_NAME` 保持一致。

### 4.3 配置环境变量

请在 `backend` 目录下新建 `.env` 文件，推荐直接复制 `.env.example` 后修改。

示例内容如下：

```env
PORT=3000
DB_HOST=localhost
DB_PORT=54321
DB_USER=system
DB_PASSWORD=manager
DB_NAME=sds_db
JWT_SECRET=sds_super_secret_key_2026
```

说明：

- `DB_USER`、`DB_PASSWORD`、`DB_NAME` 需要改成你本地数据库的真实配置
- `.env` 属于敏感文件，不应提交到仓库

### 4.4 安装依赖

在 `backend` 目录下执行：

```bash
npm install
```

### 4.5 初始化数据库

在 `backend` 目录下执行：

```bash
node init_db.js
```

初始化脚本会自动完成以下工作：

- 清理旧表
- 执行 `schema.sql`
- 执行 `mock_data.sql`
- 导入联调用基础数据与测试账号

说明：

- 数据表名称已统一使用 `tb_user`，避免与数据库系统关键字冲突

### 4.6 启动后端服务

在 `backend` 目录下执行：

```bash
node server.js
```

若终端出现以下日志，说明服务已正常启动：

- `Server is running on port 3000`
- `Successfully connected to the Kingbase database`

## 5. 测试账号

执行 `node init_db.js` 后，系统会自动写入以下联调用账号：

| 角色 | 账号 | 密码 | 说明 |
| --- | --- | --- | --- |
| 学生 | `stu001` | `123456` | 学生端测试账号 |
| 管理员 | `admin001` | `123456` | 管理端测试账号 |

补充说明：

- 当前默认测试数据中主要提供学生和管理员两个账号
- `teacher`、`leader`、`student_leader` 角色在代码中已支持权限控制，但默认测试数据中未内置
- 如需测试更多角色，可以通过管理接口新增用户，或自行向数据库插入测试数据

## 6. 角色与权限说明

当前后端主要涉及以下角色：

- `student`
- `student_leader`
- `admin`
- `teacher`
- `leader`

常用权限矩阵如下：

| 模块 | 接口示例 | 可访问角色 |
| --- | --- | --- |
| 认证 | `/api/auth/login` | 全部 |
| 当前用户档案 | `/api/auth/profile` | 已登录用户 |
| 政策查询 | `/api/policies/search` | 已登录用户 |
| 知识库维护 | `/api/policies/maintain` | `admin`、`teacher` |
| 流程节点查看 | `/api/process/nodes` | 已登录用户 |
| 流程进度查看 | `/api/process/progress` | 已登录用户 |
| 流程进度更新 | `/api/process/progress` | `admin`、`teacher`、`student_leader` |
| 申请提交/修改/删除 | `/api/applications` | `student`、`student_leader` |
| 申请查询 | `/api/applications` | 已登录用户 |
| 申请审核 | `/api/applications/review` | `admin`、`teacher` |
| PDF 转换 | `/api/applications/convert-pdf` | 已登录用户 |
| 电子证明生成 | `/api/certificates/generate` | `admin`、`teacher` |
| 电子证明列表 | `/api/certificates` | `student`、`student_leader` |
| 成绩单上传/分析结果查询 | `/api/analysis` | 已登录用户 |
| 通知查看 | `/api/basic/notices` | 已登录用户 |
| 通知管理 | `/api/basic/notices` | `admin`、`teacher`、`leader` |
| 用户管理 | `/api/basic/users` | `admin`、`teacher`、`leader` |
| 培养方案查看 | `/api/basic/plans` | 已登录用户 |
| 培养方案管理 | `/api/basic/plans` | `admin`、`teacher`、`leader` |
| 模板管理 | `/api/templates` | 查询为已登录用户；新增/删除为 `admin`、`teacher` |

前端联调时，请在请求头中携带：

```http
Authorization: Bearer <token>
```

## 7. 已实现接口概览

基础 URL：

```text
http://localhost:3000
```

### 7.1 认证模块

- `POST /api/auth/login`：登录
- `POST /api/auth/register`：注册
- `GET /api/auth/profile`：获取当前用户档案
- `PUT /api/auth/profile`：更新当前学生档案

### 7.2 政策知识库模块

- `GET /api/policies/search`：政策查询
- `POST /api/policies/maintain`：知识库维护

### 7.3 党团流程模块

- `GET /api/process/nodes`：获取节点定义
- `GET /api/process/progress`：获取学生进度
- `PUT /api/process/progress`：更新节点状态

### 7.4 申请与审批模块

- `POST /api/applications`：提交申请
- `GET /api/applications`：查询申请列表
- `PUT /api/applications/:id`：修改申请
- `DELETE /api/applications/:id`：删除申请
- `POST /api/applications/review`：审核申请
- `POST /api/applications/convert-pdf`：DOCX 转 PDF

### 7.5 电子证明模块

- `POST /api/certificates/generate`：生成电子证明
- `GET /api/certificates`：获取学生证明列表

### 7.6 学业分析模块

- `POST /api/analysis/upload`：上传成绩单
- `GET /api/analysis/:transcriptId`：获取分析结果

### 7.7 基础管理模块

- `GET /api/basic/notices`：通知列表
- `POST /api/basic/notices`：新增通知
- `PUT /api/basic/notices/:noticeId`：更新通知
- `DELETE /api/basic/notices/:noticeId`：删除通知
- `GET /api/basic/users`：用户列表
- `POST /api/basic/users`：新增用户
- `PUT /api/basic/users/:userId`：更新用户
- `DELETE /api/basic/users/:userId`：删除用户
- `GET /api/basic/plans`：培养方案列表
- `POST /api/basic/plans`：新增培养方案
- `PUT /api/basic/plans/:planId`：更新培养方案
- `DELETE /api/basic/plans/:planId`：删除培养方案

### 7.8 模板管理模块

- `POST /api/templates`：上传模板
- `GET /api/templates`：获取模板列表
- `DELETE /api/templates/:id`：删除模板

详细请求参数与返回格式可继续查看 `src/controllers/` 与 `src/routes/` 下的实现。

## 8. 建议的联调验收链路

为了确保项目达到“稳定交付”标准，建议至少走通以下链路：

### 链路一：登录与身份识别

- 使用 `stu001` 登录
- 获取 JWT
- 调用 `/api/auth/profile`

### 链路二：学生申请与管理员审批

- 学生提交申请
- 管理员查看申请列表
- 管理员执行通过或驳回

### 链路三：政策查询

- 学生查询政策
- 管理员维护知识库后重新验证查询结果

### 链路四：成绩分析或电子证明

- 上传成绩单并获取分析结果
- 或生成电子证明并验证 PDF 转换流程

## 9. 常见问题排查

### 9.1 数据库连接失败

现象：

- 启动时报错数据库无法连接

优先检查：

- `.env` 中数据库主机、端口、用户名、密码、库名是否正确
- 金仓数据库服务是否已经启动
- 数据库是否已经创建

### 9.2 JWT 无效或提示未登录

现象：

- 返回 `Authentication required`
- 返回 `Invalid token`

优先检查：

- 是否在请求头中携带 `Authorization: Bearer <token>`
- 是否登录后使用了最新 token
- `JWT_SECRET` 是否与签发 token 时保持一致

### 9.3 Gotenberg 未启动

现象：

- 电子证明生成失败
- DOCX 转 PDF 失败

优先检查：

- Docker 是否正常运行
- Gotenberg 容器是否已经启动
- 本地 `3001` 端口是否可用

### 9.4 端口占用

现象：

- 服务启动失败

优先检查：

- `3000` 端口是否已被其他进程占用
- 如有需要，可修改 `.env` 中的 `PORT`

## 10. 当前阶段建议

如果任务块一到任务块六都已完成，当前不建议继续盲目增加新功能，建议按以下顺序收尾：

1. 完成 README 和环境模板整理
2. 做一轮全链路回归
3. 整理接口验收清单
4. 补安全和参数校验
5. 准备答辩图和演示脚本

交付清单可参考项目根目录下的 `DELIVERY_CHECKLIST.md`。
