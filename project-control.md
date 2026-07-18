# Project Control Board — stealth-writer-ai

## 1. 项目启动卡

- 项目：stealth-writer-ai
- 域名：stealthwriter.online
- 目标市场：US / English
- 种子词：AI humanizer, stealth writer, undetectable AI, AI text humanizer
- 项目类型：TOOL
- 商业化：FREEMIUM（免费+付费额度）
- 上线期望：NORMAL
- 状态：MIGRATING → RUNNING

## 2. 学员只需要处理

- [x] 域名已注册（stealthwriter.online）
- [ ] DNS / Cloudflare 权限可用（域名待 Active）
- [x] GitHub 权限可用
- [x] Cloudflare 权限可用
- [ ] GSC / Bing 权限可用
- [ ] Stitch / 设计工具登录态可用
- [ ] 生产部署已确认（预览版已部署，待绑定域名）
- [ ] 公开发布已确认

## 3. 自动流水线状态

| 阶段 | Skill | Owner | 状态 | 输入 | 输出 | 闸门 |
|---|---|---|---|---|---|---|
| 01 research | keyword-research-agent | 单 Agent | DONE | seed keywords | keyword-report | Research Gate |
| 02 PRD | product-definition-prd | 单 Agent | DONE | keyword-report | PRD + route contract | PRD Gate |
| 03 pricing | site-pricing-calibration | 单 Agent | DONE | PRD | pricing strategy | Pricing Gate |
| 04 compliance | student-site-compliance-pipeline | 单 Agent | DONE | PRD + pricing | compliance report | Compliance Gate |
| 05 copy | site-copywriting-student | @lulu_contentbot | MISSING | PRD + compliance | SEO-copy freeze | Copy Freeze |
| 06 design | site-design-student | @lulu_designbot | MISSING | copy freeze | design source | Design Gate |
| 08 backend/data | backend-auto-site-cloudflare-workers | @lulu_codingbot | PARTIAL | PRD + data needs | data contract/API | Data Gate |
| 07 frontend | frontend-site-automation | @lulu_codingbot | DONE | design + data | deployed preview | Build Gate |
| 10 SEO | seo-launch-workflow | @lulu_growthbot | PARTIAL | preview | SEO_GO | SEO Gate |
| 09 QA | student-site-qa-acceptance | @lulu_growthbot | MISSING | preview + gates | QA report | QA_GO |
| 11 launch | site-ops-growth-launch | @lulu_growthbot | WAITING | QA_GO | launch report | Launch Gate |
| 12 review | site-data-review-iteration | @lulu_growthbot | WAITING | live site + analytics | review report | Review Gate |

## 4. 当前汇报

### done
- 07 frontend：预览版已部署 → https://2936e62c.stealth-writer-ai.pages.dev
- 08 backend：API Worker 在 `08-backend/api/`，DeepSeek API 已接入
- 10 SEO：sitemap.xml + robots.txt 已存在
- 04 compliance：privacy.html + terms.html + cookie.html + refund.html 已存在

### running
- 01 research：迁移中（从已有站点反推关键词）

### waiting
- 02 PRD（等 01 done）
- 03 pricing（等 02 done）
- 05 copy（等 03+04 done）
- 06 design（等 05 done）
- 09 QA（等 07+08+10 done）
- 11 launch（等 09 done）
- 12 review（等 11 done）

### blocked
- 域名绑定：stealthwriter.online 待 Active
- GSC/Bing：未配置

## 5. 卡点处理

- 类型：domain
- 学员动作：确认 stealthwriter.online 是否已 Active
- 做完后回复："域名已 Active" 或 "域名已绑定"
- 自动继续阶段：10 SEO（域名绑定后更新 canonical）

## 6. 下一步自动动作

1. 补 01-research：基于已有站点反推关键词报告
2. 补 02-PRD：基于站点功能写产品定义
3. 补 03-pricing：设计定价策略
4. 04-compliance：审查现有法律页面是否合规
5. 05-copy：重写 SEO 文案（当前标题已优化为 "Free AI Humanizer | Stealth Writer AI"）
6. 06-design：生成 Stitch 设计真源
7. 09-QA：全面验收
8. 11-launch：绑定域名 + 提交目录

---

## 现有产物归档

| 产物 | 路径 | 说明 |
|---|---|---|
| 前端页面 | `07-code/index.html` | 主站（标题已优化） |
| 前端备份 | `07-code/index.html.backup` | 旧版备份 |
| 隐私政策 | `04-legal/privacy.html` | 需审查合规性 |
| 服务条款 | `04-legal/terms.html` | 需审查合规性 |
| Cookie 政策 | `04-legal/cookie.html` | 需审查合规性 |
| 退款政策 | `04-legal/refund.html` | 需审查合规性 |
| Sitemap | `10-seo/sitemap.xml` | 需更新域名 |
| Robots | `10-seo/robots.txt` | 需更新域名 |
| API Worker | `08-backend/api/` | DeepSeek API 接入 |
| Wrangler 配置 | `07-code/wrangler.toml` | 需更新域名 |
| CSS/JS/Assets | `07-code/css/`, `js/`, `assets/` | 静态资源 |

