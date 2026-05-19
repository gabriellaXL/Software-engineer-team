# 学院学生综合服务与党团管理平台 - 后端服务说明

各位团队成员好，

目前我们项目的**后端基础架构**已经搭建完成，并且成功接入了**人大金仓（Kingbase）数据库**。为了方便大家在各自的电脑上把项目跑起来并进行后续的开发与联调，请参考以下说明：

## 1. 当前后端架构与技术栈
* **运行环境**：Node.js
* **Web 框架**：Express
* **数据库**：人大金仓 KingbaseES（使用 `pg` 驱动进行连接）
* **接口规范**：RESTful API
* **认证方式**：JWT (JSON Web Token) 校验

## 2. 本地运行步骤

### 2.1 安装依赖
请确保你的电脑上已经安装了 Node.js。在终端中进入 `backend` 目录并安装所需依赖：
```bash
cd backend
npm install
```

### 2.2 数据库初始化
为了保证大家的表结构一致，避免手动执行 SQL 脚本带来的繁琐和错误，我们已经编写了一键初始化脚本。

1. **前提**：请在本地的人大金仓数据库管理工具中，新建一个空的数据库，命名为 `sds_db`（或者你自定义的名字）。
2. **配置连接**：在运行脚本前，请先完成下一步 **2.3 配置环境变量**，确保 Node.js 能够连上你本地的金仓数据库。
3. **一键初始化**：在 `backend` 目录下执行以下命令：
   ```bash
   node init_db.js
   ```
   **这个脚本会自动帮你完成以下事情**：
   - 清理可能存在的旧表。
   - 读取并执行 `schema.sql`，创建所有的业务表（注：已将设计文档中的 `sys_user` 表名修改为了 `tb_user`，以避开金仓数据库的系统内置关键字冲突）。
   - 读取并执行 `mock_data.sql`，插入用于联调的测试账号和基础数据。

**内置的测试账号如下**：
- 学生端账号：`stu001`，密码：`123456`
- 管理端账号：`admin001`，密码：`123456`

### 2.3 配置环境变量
在 `backend` 目录下有一个 `.env` 文件，记录了数据库的连接信息。请大家**根据自己本地的数据库设置**修改该文件（特别是密码和用户名）：
```env
PORT=3000
DB_HOST=localhost
DB_PORT=54321
DB_USER=system           # 替换为你的本地数据库用户名
DB_PASSWORD=manager      # 替换为你的本地数据库密码
DB_NAME=sds_db           # 替换为你创建的数据库名
JWT_SECRET=sds_super_secret_key_2026
```
*(注：`.env` 文件包含敏感密码信息，建议在配置 `.gitignore` 时将其忽略，避免提交到代码仓库。)*

### 2.4 启动服务
配置完成后，在 `backend` 目录下执行：
```bash
node server.js
```
如果终端输出 `Connected to the Kingbase database`，则说明启动并连接数据库成功。

## 3. 已实现的接口清单 (API)
目前后端已经初步实现了设计文档中要求的核心接口，基础 URL 为 `http://localhost:3000`：

* **认证模块** (`/api/auth`)
  * `POST /login`：用户登录（返回 JWT Token）
  * `GET /profile`：获取当前用户档案
* **智能问答模块** (`/api/policies`)
  * `GET /search`：查询政策知识库
  * `POST /maintain`：管理员维护知识库
* **党团流程模块** (`/api/process`)
  * `GET /nodes`：获取流程节点定义
  * `GET /progress`：获取学生当前进度
  * `PUT /progress`：更新节点状态
* **申请与审批模块** (`/api/applications`)
  * `POST /`：学生提交申请
  * `GET /`：查询申请列表
  * `POST /review`：管理员审核申请
* **电子证明模块** (`/api/certificates`)
  * `POST /generate`：生成电子证明（需管理员权限）
  * `GET /`：获取学生的证明文件列表
* **学业分析模块** (`/api/analysis`)
  * `POST /upload`：上传成绩单（目前包含模拟的异步解析逻辑）
  * `GET /:transcriptId`：获取分析结果与建议

*(详细的请求参数与返回格式可以查看 `src/controllers/` 目录下的具体代码实现。)*

## 4. 下一步工作建议
* **前端同学**：可以开始将 [app.js](../app.js) 中写死的假数据替换为真实的 `fetch` 请求。注意在请求头中携带 `Authorization: Bearer <token>` 进行鉴权。
* **后端同学**：可以根据联调的情况，进一步完善异常处理、丰富数据校验规则，并将“学业分析”模块中模拟的解析逻辑替换为真实的解析算法。

如果有任何环境配置或接口调用的问题，请随时在群里沟通！
