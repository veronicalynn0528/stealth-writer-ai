# 合规与基础法律页面 — Stealth Writer AI

## 1. 数据清单

### 用户数据
| 数据类型 | 收集方式 | 用途 | 存储 | 保留期 |
|---------|---------|------|------|--------|
| 提交文本 | 主动输入 | AI 处理 | 不存储 | 实时处理后丢弃 |
| IP 地址 | 被动收集 | Rate limiting, security | Cloudflare | 按 Cloudflare 政策 |
| 使用统计 | 被动收集 | 服务优化 | 可选 (GA4) | 按 GA4 政策 |

### 不收集的数据
- 姓名、邮箱、账户信息（无注册系统）
- 支付信息（首版无付费）
- 位置数据
- 设备标识符

---

## 2. 第三方映射

| 服务 | 用途 | 数据共享 | 隐私政策 |
|------|------|---------|---------|
| DeepSeek AI | 文本改写 | 提交文本（加密传输） | https://www.deepseek.com/privacy |
| Cloudflare | 托管/CDN/安全 | IP 地址 | https://www.cloudflare.com/privacypolicy/ |
| Google Analytics | 使用分析（可选） | 匿名化 IP | https://policies.google.com/privacy |

---

## 3. 风险分级

### P0（不能上线）
- [x] 无 — 已修复

### P1（需修复或披露）
- [x] 法律页面占位符 — **已修复**（terms/cookie/refund 已重写）
- [ ] 邮箱地址未验证（privacy@, legal@, billing@ 需配置）
- [ ] Google Analytics 未明确是否启用（privacy 中写"if enabled"）

### P2（可上线后跟进）
- [ ] 年龄限制声明（13+）可添加到 Terms
- [ ] DMCA / 版权政策（用户上传内容相关）
- [ ] EU GDPR 合规（Cookie 同意横幅）

---

## 4. 法律页 Route Contract

| Route | 状态 | 内容 |
|-------|------|------|
| `/privacy` | ✅ 已更新 | 完整隐私政策 |
| `/terms` | ✅ 已重写 | 完整服务条款 |
| `/cookie` | ✅ 已重写 | 完整 Cookie 政策 |
| `/refund` | ✅ 已重写 | 退款政策（当前免费，未来付费说明） |

**注意：** 所有法律页已设置 `noindex`。

---

## 5. 禁用表达

### 高风险词（禁止）
- ❌ "100% undetectable" — 无法保证
- ❌ "Guaranteed to bypass" — 无法保证
- ❌ "Official" — 无官方认证
- ❌ "Free forever" — 未来可能有付费
- ❌ "Unlimited" — 有每日限制

### 允许表达
- ✅ "Makes AI text more human-like"
- ✅ "Helps reduce AI detection probability"
- ✅ "Free tier with 3,000 words/day"
- ✅ "No signup required"

### 特别审查：AI 声明
- 站点使用 DeepSeek AI API — 已在 Privacy 中披露
- 不声称"AI 生成"内容为自己的 — 在 Terms 中说明
- 不冒充人类写作服务 — 明确是 AI 辅助工具

---

## 6. 合规检查表

- [x] Privacy Policy 与实际数据收集一致
- [x] Terms of Service 覆盖使用限制
- [x] Cookie Policy 说明仅使用 essential cookies
- [x] Refund Policy 与定价策略一致（当前免费，未来付费说明）
- [x] 第三方服务全部披露
- [x] 无高风险素材/IP 问题（自有品牌）
- [x] Footer/legal route 不会 404
- [ ] 邮箱地址需配置（privacy@stealthwriter.online 等）
- [ ] 年龄限制（13+）建议添加到 Terms

---

# 合规与基础法律页面交接摘要

## 当前结论
- 状态：[DONE]
- 一句话结论：法律页面已修复，无 P0 风险，可上线。需配置邮箱地址和添加年龄限制。

## 关键输入
- 项目：stealth-writer-ai
- 当前阶段：04-compliance
- 上游资料：`02-PRD/PRD.md`, `03-pricing/pricing.md`

## 本阶段交付物
- 文件/内容：
  - `04-legal/privacy.html`（已更新）
  - `04-legal/terms.html`（已重写）
  - `04-legal/cookie.html`（已重写）
  - `04-legal/refund.html`（已重写）
  - `04-legal/compliance-check.md`（本文件）
- 核心判断：
  - 无 P0 风险
  - 法律页面从占位符修复为完整内容
  - 禁用表达清单已建立
- 已确认项：
  - 数据收集与 Privacy 一致
  - 第三方服务全部披露
  - 无高风险素材/IP
- 待确认项：
  - [ ] 配置邮箱地址（privacy@, legal@, billing@）
  - [ ] 添加年龄限制（13+）到 Terms
  - [ ] Google Analytics 是否启用决定

## 质量门槛自检
- [x] 法律页与实际数据收集一致
- [x] 第三方服务全部披露
- [x] 高风险素材/IP 有免责声明或替代方案
- [x] footer/legal route 不会 404

## 风险
- P0：无
- P1：邮箱未配置（用户联系无响应）
- P2：年龄限制未声明
- P2：EU GDPR Cookie 横幅（如需面向欧洲用户）

## 给下游的最小必要信息
- 下一阶段：05-copy（文案）
- 必须读取：`04-legal/compliance-check.md`
- 不能假设：
  - 不要假设邮箱已配置
  - 不要假设年龄限制已添加
- 建议启动 Prompt：
  ```
  项目：stealth-writer-ai
  合规已通过：法律页面完整，无 P0 风险
  禁用词清单已建立，文案需避免"100% undetectable"等表达
  请输出 SEO 文案冻结。
  ```

[DONE]
