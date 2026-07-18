# PRD v1 — Stealth Writer AI

## 1. 读取机会

### 关键词
- 主词：`stealth writer ai`（老词机会）
- 月搜索量：4,400
- CPC：$2.35
- KD：12（LOW）
- 意图：Transactional（工具化）

### SERP 缝隙
- 低竞争（KD 12），但已有成熟竞品 stealthwriter.ai
- 差异化空间：免费策略、速度、UI 简洁度、无注册体验
- 长尾词机会：`free ai humanizer`, `humanize ai text free`, `undetectable ai writer free`

### 竞品最低能力
| 竞品 | 域名 | 能力 | 缺口 |
|------|------|------|------|
| Stealth Writer | stealthwriter.ai | 付费为主，功能全 | 免费额度少，需注册 |
| Undetectable AI | undetectable.ai | 成熟，价格高 | 价格门槛 |
| HideMyAI | hidemy.ai | 新兴 | 品牌认知度低 |
| AI Humanizer | aihumanizer.org | 内容站为主 | 工具体验差 |

### 风险
- P1：老词需长期 SEO 投入，非短期爆发
- P1：SERP 扫描不完整（Google bot 检测），Top 10 细节待补
- P2：竞品 stealthwriter.ai 品牌认知度高

---

## 2. 定义 ICP

### 主 ICP：内容创作者（学生/自由撰稿人/营销人员）
- 痛点：AI 生成内容被检测，影响平台发布/学术提交
- 付费意愿：中等（FREEMIUM 模式）
- 触达：SEO 自然流量

### 次要 ICP：
- 学生：需要绕过 Turnitin/GPTZero
- 营销人员：需要"人性化"AI 文案用于社交媒体
- 非英语母语者：需要润色 AI 生成的英文内容

---

## 3. 定位与边界

### 一句话定位
> Free AI Humanizer that makes AI-generated text undetectable — no signup, instant results.

### 替代方案
- 直接竞品：stealthwriter.ai, undetectable.ai
- 间接方案：手动改写、ChatGPT "rewrite in human style" prompt

### 差异化
1. **免费额度更慷慨** — 每日免费字数 > 竞品
2. **无注册即用** — 零 friction
3. **速度优先** — < 3 秒返回结果
4. **简洁 UI** — 单页，无干扰

### NOT-DO
- 不做浏览器插件（首版）
- 不做 API 售卖（首版）
- 不做多语言支持（首版仅 English）
- 不做用户账户系统（首版）
- 不做内容存储/历史记录（首版）

---

## 4. 站点类型

**工具站（Tool）** — 单功能、高转化、即时价值

交互基线：
- 输入框 → 按钮 → 结果展示
- 零学习成本
- 移动端优先（60%+ 流量可能来自移动）

---

## 5. 页面矩阵

| URL | Index | 主词 | H1 | H2 | CTA | Schema | 素材需求 |
|-----|-------|------|----|----|-----|--------|---------|
| `/` | ✅ | stealth writer ai | Free AI Humanizer | How it works, Features, FAQ | Try Now | WebApplication, FAQPage | 截图/演示 |
| `/privacy` | ❌ | — | Privacy Policy | — | — | — | — |
| `/terms` | ❌ | — | Terms of Service | — | — | — | — |
| `/cookie` | ❌ | — | Cookie Policy | — | — | — | — |
| `/refund` | ❌ | — | Refund Policy | — | — | — | — |

### 内链结构
- 首页 → privacy/terms（footer 链接）
- 无其他内链（单页工具站）

---

## 6. 合同闸门

### Route Contract
```
GET /         → 主站（HTML）
POST /api/humanize → AI Humanizer API（Worker）
GET /privacy  → 隐私政策（HTML）
GET /terms    → 服务条款（HTML）
GET /cookie   → Cookie 政策（HTML）
GET /refund   → 退款政策（HTML）
GET /sitemap.xml → SEO
GET /robots.txt  → SEO
```

### SEO-Copy Freeze 输入
- Title: `Free AI Humanizer | Stealth Writer AI`
- Meta Description: `Free AI humanizer that makes AI-generated text undetectable. No signup required. Instant results. Try Stealth Writer AI now.`
- H1: `Free AI Humanizer`
- H2: `How It Works`, `Why Choose Us`, `FAQ`

### Data Contract
- 输入：用户文本（max 5,000 chars）
- 输出：humanized 文本 + 检测评分（可选）
- 存储：不存储用户输入（隐私卖点）
- API：DeepSeek API（Worker 转发）

### 素材 Inventory
- 主站截图/演示 GIF
- 功能图标（3-4 个）
- 品牌 Logo

---

## 7. 产品验收标准

### P0 用户任务（必须完成）
1. 用户粘贴 AI 生成文本 → 点击 Humanize → 获得改写后的文本
2. 移动端完整可用
3. 加载时间 < 3 秒（首屏）
4. API 响应 < 5 秒

### P1 用户任务（重要）
1. 检测评分显示（AI 检测概率）
2. 复制结果按钮
3. 字数统计

### P2 用户任务（加分）
1. 多种改写模式（正式/ casual/ 学术）
2. 示例文本

### Competitive Minimum
- 功能 ≥ stealthwriter.ai 免费版
- 速度 ≥ 竞品平均
- 体验 ≥ 竞品（无注册 = 优势）

---

# 产品定义与 PRD 交接摘要

## 当前结论
- 状态：[DONE]
- 一句话结论：FREEMIUM 单页工具站，差异化靠免费+无注册+速度，首版聚焦核心 humanize 功能。

## 关键输入
- 项目：stealth-writer-ai
- 当前阶段：02-product
- 上游资料：`01-research/research.md`

## 本阶段交付物
- 文件/内容：`~/projects/stealth-writer-ai/02-PRD/PRD.md`
- 核心判断：
  - 工具站类型，单页 MVP
  - 差异化：免费额度 + 无注册 + 速度
  - NOT-DO 明确（插件/API/多语言/账户系统）
- 已确认项：
  - 页面矩阵
  - Route Contract
  - SEO-Copy Freeze 输入
  - Data Contract
- 待确认项：
  - [ ] 免费额度具体数字（需定价阶段确定）
  - [ ] DeepSeek API 成本核算（需定价阶段确定）

## 质量门槛自检
- [x] PRD 不只是关键词说明，而是可开发产品
- [x] 每个 indexable 页面有真实价值和用户任务
- [x] NOT-DO 明确
- [x] 设计/文案/前后端都知道交付边界

## 风险
- P0：无
- P1：免费额度 vs API 成本需精算
- P1：竞品可能跟进免费策略
- P2：老词 SEO 周期长

## 给下游的最小必要信息
- 下一阶段：03-pricing + 04-compliance（可并行）
- 必须读取：`02-PRD/PRD.md`
- 不能假设：
  - 不要假设免费额度已确定（待定价阶段）
  - 不要假设 API 成本已精算（待定价阶段）
- 建议启动 Prompt：
  ```
  项目：stealth-writer-ai
  PRD 已确定：FREEMIUM 工具站，无注册，单页，DeepSeek API
  请输出定价策略 + 合规检查。
  ```

[DONE]
