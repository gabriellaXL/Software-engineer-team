# 学院学生综合服务与党团管理平台 UML 图

本文档基于仓库中的需求文档和模板文档整理，使用 Mermaid 绘制 UML 用例图、分析模型顺序图和分析类图，便于直接插入课程文档或继续导出为图片。

## 1. UML 用例图

```mermaid
flowchart LR
    student[学生]
    admin[管理员]
    extfile[外部数据文件]

    subgraph system[学院学生综合服务与党团管理平台]
        uc1((登录系统))
        uc2((政策咨询))
        uc3((下载模板文件))
        uc4((查看党团流程与个人进度))
        uc5((接收节点提醒))
        uc6((提交申请))
        uc7((查看审批结果))
        uc8((下载电子证明))
        uc9((上传成绩单并查看分析结果))

        uc10((维护知识库))
        uc11((发布通知并精准推送))
        uc12((审核申请))
        uc13((配置流程节点与提醒规则))
        uc14((导入导出业务数据))
        uc15((维护培养方案))
    end

    student --> uc1
    student --> uc2
    student --> uc3
    student --> uc4
    student --> uc5
    student --> uc6
    student --> uc7
    student --> uc8
    student --> uc9

    admin --> uc10
    admin --> uc11
    admin --> uc12
    admin --> uc13
    admin --> uc14
    admin --> uc15

    extfile --> uc14

    uc6 -. 包含 .-> uc7
    uc6 -. 扩展 .-> uc8
    uc9 -. 依赖 .-> uc15
    uc2 -. 依赖 .-> uc10
```

用例图说明：

- 学生侧重点是查询、申请、进度查看、证明获取和成绩分析。
- 管理员侧重点是知识库维护、通知发布、审批流处理、流程配置和数据维护。
- 外部数据文件主要参与模板导入、批量导入导出和培养方案维护等场景。

## 2. 分析模型顺序图

### 2.1 政策咨询顺序图

```mermaid
sequenceDiagram
    actor Student as 学生
    participant StudentWeb as 学生端网页
    participant PolicyService as 政策咨询服务
    participant KB as 知识库

    Student->>StudentWeb: 输入问题/关键词
    StudentWeb->>PolicyService: 提交咨询请求
    PolicyService->>KB: 检索问答、政策条目、附件链接
    KB-->>PolicyService: 返回匹配结果

    alt 命中标准答案
        PolicyService-->>StudentWeb: 返回答案、政策说明、附件/链接
        StudentWeb-->>Student: 展示咨询结果
    else 未命中有效内容
        PolicyService-->>StudentWeb: 返回“未找到准确答案”提示
        StudentWeb-->>Student: 提示联系管理员或查看官方渠道
    end
```

### 2.2 申请审批顺序图

```mermaid
sequenceDiagram
    actor Student as 学生
    actor Admin as 管理员
    participant StudentWeb as 学生端网页
    participant AppService as 申请服务
    participant Workflow as 审批流引擎
    participant DB as 业务数据库
    participant Notify as 通知服务

    Student->>StudentWeb: 填写申请表并提交
    StudentWeb->>AppService: 提交申请数据
    AppService->>DB: 保存 Application(状态=待审核)
    AppService->>Workflow: 创建审批任务
    Workflow->>Notify: 向管理员发送待办通知
    Notify-->>Admin: 推送审核提醒

    Admin->>AppService: 审核申请(通过/驳回)
    AppService->>DB: 写入 ApprovalRecord

    alt 审核通过
        AppService->>DB: 更新 Application(状态=审核通过)
        AppService->>Notify: 通知学生审核通过
        Notify-->>Student: 收到通过消息
    else 审核驳回
        AppService->>DB: 更新 Application(状态=审核驳回/待修改)
        AppService->>Notify: 通知学生补充或修改
        Notify-->>Student: 收到驳回消息
    end
```

### 2.3 电子证明生成顺序图

```mermaid
sequenceDiagram
    actor Student as 学生
    actor Admin as 管理员
    participant StudentWeb as 学生端网页
    participant CertService as 证明生成服务
    participant DB as 业务数据库
    participant Template as 模板文件库
    participant Generator as PDF生成器

    Student->>StudentWeb: 选择证明类型并提交申请
    StudentWeb->>CertService: 提交证明申请
    CertService->>DB: 创建 Application
    Admin->>CertService: 审批通过
    CertService->>DB: 读取 StudentProfile
    CertService->>Template: 读取 TemplateFile
    CertService->>Generator: 合并模板与学生信息
    Generator-->>CertService: 返回证明文件
    CertService->>DB: 保存 Certificate 记录
    CertService-->>StudentWeb: 返回预览/下载地址
    StudentWeb-->>Student: 展示电子证明
```

### 2.4 成绩分析顺序图

```mermaid
sequenceDiagram
    actor Student as 学生
    participant StudentWeb as 学生端网页
    participant AnalysisService as 成绩分析服务
    participant Parser as 成绩单解析器
    participant DB as 业务数据库

    Student->>StudentWeb: 上传成绩单文件
    StudentWeb->>AnalysisService: 提交成绩分析任务
    AnalysisService->>DB: 保存 TranscriptTask(状态=待解析)
    AnalysisService->>Parser: 解析课程与学分信息

    alt 解析成功
        Parser-->>AnalysisService: 返回课程明细
        AnalysisService->>DB: 读取 TrainingPlan 和 CourseRequirement
        AnalysisService->>DB: 保存 AnalysisResult
        AnalysisService->>DB: 更新 TranscriptTask(状态=解析成功)
        AnalysisService-->>StudentWeb: 返回完成情况、缺失项、选课建议
        StudentWeb-->>Student: 展示分析结果
    else 解析失败
        Parser-->>AnalysisService: 返回失败原因
        AnalysisService->>DB: 更新 TranscriptTask(状态=解析失败)
        AnalysisService-->>StudentWeb: 提示重新上传或人工核对
        StudentWeb-->>Student: 展示失败信息
    end
```

## 3. 分析类图

```mermaid
classDiagram
    class User {
        +user_id: String
        +role: String
        +accountId: String
        +status: String
    }

    class StudentProfile {
        +student_id: String
        +student_no: String
        +name: String
        +major: String
        +grade: String
        +phone: String
    }

    class AdminProfile {
        +admin_id: String
        +name: String
        +department: String
        +role: String
    }

    class PolicyItem {
        +policy_id: String
        +title: String
        +category: String
        +keywords: String
        +content: Text
        +attachment_url: String
        +status: String
    }

    class QAPair {
        +qa_id: String
        +question: String
        +answer: Text
        +priority: int
    }

    class TemplateFile {
        +template_id: String
        +name: String
        +type: String
        +file_url: String
        +version: String
    }

    class PartyProcessNode {
        +node_id: String
        +process_type: String
        +node_name: String
        +sequence: int
        +description: String
        +reminder_rule: String
    }

    class StudentProcessRecord {
        +record_id: String
        +status: String
        +completed_time: Datetime
    }

    class Notice {
        +notice_id: String
        +title: String
        +content: Text
        +publish_time: Datetime
        +status: String
    }

    class NoticeTag {
        +tag_id: String
        +tag_name: String
    }

    class NoticeDelivery {
        +delivery_id: String
        +channel: String
        +delivery_status: String
        +read_status: String
    }

    class Application {
        +application_id: String
        +type: String
        +submit_time: Datetime
        +status: String
    }

    class ApprovalRecord {
        +approval_id: String
        +result: String
        +comment: String
        +approval_time: Datetime
    }

    class Certificate {
        +certificate_id: String
        +file_url: String
        +generate_time: Datetime
        +status: String
    }

    class TrainingPlan {
        +plan_id: String
        +major: String
        +grade: String
        +version: String
    }

    class CourseRequirement {
        +requirement_id: String
        +module_name: String
        +credit_required: float
    }

    class TranscriptTask {
        +transcript_id: String
        +file_url: String
        +parse_status: String
        +upload_time: Datetime
    }

    class AnalysisResult {
        +result_id: String
        +missing_module: String
        +suggestion: String
        +warning_level: String
    }

    User "1" --> "0..1" StudentProfile : 对应
    User "1" --> "0..1" AdminProfile : 对应

    PolicyItem "1" --> "0..*" QAPair : 包含

    StudentProfile "1" --> "0..*" StudentProcessRecord : 拥有
    PartyProcessNode "1" --> "0..*" StudentProcessRecord : 定义节点

    Notice "1" --> "0..*" NoticeDelivery : 产生
    Notice "0..*" --> "0..*" NoticeTag : 使用
    StudentProfile "1" --> "0..*" NoticeDelivery : 接收

    StudentProfile "1" --> "0..*" Application : 提交
    AdminProfile "1" --> "0..*" ApprovalRecord : 审核
    Application "1" --> "0..*" ApprovalRecord : 记录
    Application "1" --> "0..*" Certificate : 生成
    TemplateFile "1" --> "0..*" Certificate : 套用

    StudentProfile "1" --> "0..*" TranscriptTask : 上传
    TrainingPlan "1" --> "0..*" CourseRequirement : 包含
    TranscriptTask "1" --> "0..*" AnalysisResult : 产生
    TrainingPlan "1" --> "0..*" AnalysisResult : 作为比对依据
```

类图说明：

- `User` 是统一账号抽象，向下对应学生资料或管理员资料。
- `Application + ApprovalRecord + Certificate` 构成申请办理与电子证明的核心业务链。
- `PolicyItem + QAPair` 支撑政策咨询与知识库问答。
- `PartyProcessNode + StudentProcessRecord` 支撑党团流程可视化与节点提醒。
- `TrainingPlan + CourseRequirement + TranscriptTask + AnalysisResult` 支撑成绩分析与学业预警。

## 4. 使用建议

- 如果你们要直接交课程文档，可以把本文件中的图复制到 `template.md` 的 `3.2` 和 `3.3` 小节。
- 如果老师要求导出图片，可以用支持 Mermaid 的 Markdown 编辑器直接导出 PNG 或 SVG。
- 如果你还需要 `状态图`，下一步最适合补的是“申请单状态图”和“党团流程节点状态图”。
