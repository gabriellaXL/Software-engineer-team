# 单机部署指南（课程服务器）

本指南适用于将本项目部署到一台 Linux 服务器上，并由后端服务同时托管前端静态页面。

部署完成后访问：

- Web 页面：`http://<服务器IP>:3000/`
- API：`http://<服务器IP>:3000/api/...`

## 0. 说明

- 本项目采用“单机一服务”方式：只需要启动 `backend/server.js`，前端页面会由后端直接托管。
- PDF 转换依赖 Gotenberg（Docker）。如果服务器不支持 Docker，可先不启用该能力，主流程仍可演示。
- 数据库为 KingbaseES（人大金仓）。请确保服务器上数据库已就绪，或后端能连到指定数据库实例。

## 1. 服务器端前置条件

在服务器上确认：

- 已安装 Node.js（建议 18+）
- 已安装 npm
- 已安装 git（若采用 git 拉取方式）
- 已安装并启动 KingbaseES，且你有可用的数据库账号
- 服务器防火墙放行 `3000` 端口（或你配置的端口）

验证命令：

```bash
node -v
npm -v
git --version
```

## 2. 获取代码（两种方式选其一）

### 方式 A：通过 git 拉取（推荐）

在服务器上执行：

```bash
mkdir -p ~/apps
cd ~/apps
git clone <你的仓库地址> software-engineer-team
cd software-engineer-team
```

后续更新：

```bash
cd ~/apps/software-engineer-team
git pull
```

### 方式 B：从本机上传（无仓库权限时使用）

在你本机执行（把路径替换为你的本地仓库路径）：

```bash
scp -r d:/Software/Software-engineer-team user@<服务器IP>:/home/user/apps/software-engineer-team
```

## 3. 配置后端环境变量

进入后端目录：

```bash
cd ~/apps/software-engineer-team/backend
```

复制并编辑 `.env`：

```bash
cp .env.example .env
vi .env
```

至少确认这些字段正确：

- `PORT`
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `JWT_SECRET`

## 4. 安装依赖与初始化数据库

```bash
cd ~/apps/software-engineer-team/backend
npm install
node init_db.js
```

初始化会建表并导入测试账号：

- 学生：`stu001 / 123456`
- 管理员：`admin001 / 123456`

## 5. 启动服务（推荐用脚本）

在仓库根目录执行：

```bash
cd ~/apps/software-engineer-team
bash deploy/linux/single-server-start.sh --init-db
```

如果你已经初始化过数据库，可省略参数：

```bash
bash deploy/linux/single-server-start.sh
```

脚本会：

- 自动安装后端依赖
- 可选初始化数据库
- 用 `nohup` 启动服务并写入日志与 PID

日志位置：

```text
deploy/logs/backend.out
```

## 6. 可选：启动 Gotenberg（PDF 转换）

如果服务器已安装 Docker，可执行：

```bash
docker run --rm -p 3001:3000 gotenberg/gotenberg:8
```

也可以在后端 `.env` 中设置：

```env
GOTENBERG_URL=http://localhost:3001
```

## 7. 验收

1. 打开页面：`http://<服务器IP>:3000/`
2. 使用测试账号登录
3. 验证至少两条链路：
   - 政策查询
   - 学生提交申请 -> 管理员审批

