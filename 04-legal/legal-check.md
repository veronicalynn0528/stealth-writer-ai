# Legal Compliance Checklist — Stealth Writer AI

**Project:** stealth-writer-ai  
**Domain:** stealthwriter.online  
**Date:** 2026-06-12  
**Status:** [DONE]

---

## 1. 合规审查清单

### 1.1 Privacy Policy ✅

- [x] 已输出到 `~/projects/stealth-writer-ai/04-legal/privacy-policy.md`
- [x] 包含生效日期和最后更新日期
- [x] 明确说明不存储用户提交的文本
- [x] 披露 DeepSeek API 作为第三方数据处理方
- [x] 披露 Cloudflare 作为托管和 analytics 提供方
- [x] 包含 GDPR 合规条款（第12条）
- [x] 包含 CCPA/CPRA 合规条款（第13条）
- [x] 包含儿童隐私条款（13+年龄限制，第7条）
- [x] 包含数据保留政策（30天日志）
- [x] 提供联系邮箱：privacy@stealthwriter.online

### 1.2 Terms of Service ✅

- [x] 已输出到 `~/projects/stealth-writer-ai/04-legal/terms-of-service.md`
- [x] 包含生效日期和最后更新日期
- [x] 明确年龄限制：13+（第2条）
- [x] 明确服务性质：AI 文本 humanization（第3条）
- [x] **关键免责声明**：不保证 evade AI 检测工具（第3.2条）
- [x] **学术诚信条款**：明确不鼓励学术不端，用户自担责任（第4.2条）
- [x] 明确禁止用途：非法、欺诈、学术 dishonesty（第4.1条）
- [x] 知识产权条款：用户保留原创内容所有权（第5条）
- [x] AI 生成内容版权说明：可能不享有版权保护（第5.2条）
- [x] 责任限制："AS IS" 免责声明，$100 责任上限（第6条）
- [x] 赔偿条款：用户 indemnify 我们（第7条）
- [x] 管辖法律：Delaware 州法律（第10条）
- [x] 仲裁条款和集体诉讼豁免（第10.2、10.3条）
- [x] 提供联系邮箱：legal@stealthwriter.online

### 1.3 Cookie Policy ✅

- [x] 已输出到 `~/projects/stealth-writer-ai/04-legal/cookie-policy.md`
- [x] 说明使用 Cloudflare Web Analytics（隐私优先，无 cookie）
- [x] 说明不使用第三方广告 cookie
- [x] 提供浏览器 cookie 控制指南
- [x] 尊重 Do Not Track 信号

---

## 2. AI 声明审查（FTC 合规）⚠️

### 2.1 审查结论

**状态：合规，但需网站文案注意**

本项目**确实使用 AI API**（DeepSeek API），因此可以在网站中提及 "AI" 功能。但 FTC 对 AI 声明有严格要求，需注意以下事项：

### 2.2 FTC 合规要点

| 检查项 | 状态 | 说明 |
|--------|------|------|
| 是否声称使用 AI？ | ✅ 是 | 确实使用 DeepSeek API |
| 是否夸大 AI 能力？ | ⚠️ 需审查 | 不得声称 "100% human" 或 "guaranteed undetectable" |
| 是否披露 AI 使用？ | ✅ 已披露 | ToS 第3.1条明确说明使用 DeepSeek AI |
| 是否暗示人工创作？ | ✅ 无 | 工具明确是 AI humanizer |

### 2.3 网站文案禁忌

**以下表述在网站文案中应避免：**

- ❌ "100% undetectable by AI detectors"
- ❌ "Guaranteed to pass Turnitin"
- ❌ "Human-written content"（暗示非 AI 生成）
- ❌ "Invisible to all AI detection tools"
- ❌ "Foolproof" / "Fool any detector"

**建议替代表述：**

- ✅ "AI-powered text humanization"
- ✅ "Make AI text sound more natural"
- ✅ "Improve text readability and flow"
- ✅ "Reduce AI-like patterns in text"
- ✅ "Helps text appear more human-like"

### 2.4 广告/营销合规

如果未来投放广告（Google Ads, Meta Ads 等）：

- 不得声称产品能 "cheat" 或 "bypass" 学术检测
- 不得针对 "plagiarism" 或 "cheating" 关键词投放
- 避免暗示产品可用于学术 dishonesty
- 广告文案应强调 "improve readability" 而非 "evade detection"

---

## 3. 第三方数据披露 ✅

| 第三方服务 | 数据类型 | 用途 | 披露位置 |
|------------|----------|------|----------|
| DeepSeek API | 用户提交的文本 | 文本 humanization | Privacy Policy 第4.1条 |
| Cloudflare | IP 地址、使用数据 | 托管、安全、analytics | Privacy Policy 第4.2条 |
| Cloudflare Web Analytics | 匿名使用数据 | 网站分析 | Privacy Policy 第2.3条、Cookie Policy |

---

## 4. 年龄限制 ✅

- [x] 明确声明：13+ 岁方可使用（ToS 第2条）
- [x] 18 岁以下需家长同意（ToS 第2条第4款）
- [x] 不故意收集 13 岁以下儿童数据（Privacy Policy 第7条）
- [x] 发现儿童数据将立即删除（Privacy Policy 第7条）

---

## 5. 版权角色过滤 ✅

### 5.1 审查结论

本项目为文本处理工具，不涉及：
- 图像生成
- 角色/人物生成
- 商标使用
- 迪士尼/任天堂等第三方 IP

**风险等级：低**

### 5.2 注意事项

- 用户输入的文本可能包含受版权保护的内容
- 用户需确保其输入内容不侵犯第三方版权
- ToS 第5条已明确用户保留其内容所有权，我们不对用户输入内容主张权利
- 建议在 ToS 中增加用户对其输入内容版权负责的条款（已包含在第4.1条第6款）

---

## 6. 学术诚信风险 ⚠️

### 6.1 风险识别

本项目核心功能是 "humanize AI text"，主要用户为学生。这存在以下风险：

1. **学生可能用于学术 dishonesty**（用 AI 写作业后 humanize 以逃避检测）
2. **学校可能封锁网站**（如果被视为 "cheating tool"）
3. **负面公关风险**（媒体可能报道为 "cheating aid"）
4. **支付处理商风险**（Stripe/PayPal 可能拒绝服务学术 dishonesty 工具）

### 6.2 缓解措施（已在 ToS 中实施）

- [x] 明确免责声明：不保证 evade 检测（ToS 3.2）
- [x] 学术诚信条款：用户自担责任（ToS 4.2）
- [x] 禁止用途：明确禁止学术 dishonesty（ToS 4.1.2）
- [x] 赔偿条款：用户 indemnify 我们（ToS 第7条）

### 6.3 额外建议

1. **网站文案**：强调 "improve readability" 而非 "evade detection"
2. **FAQ 页面**：添加 "Is this for cheating?" 问答，明确回答 "No"
3. **营销定位**：target 内容创作者和专业人士，弱化学生定位（虽然学生是主要用户）
4. **博客内容**：发布 "How to use AI tools ethically" 等文章建立正面形象

---

## 7. 数据跨境传输 ⚠️

### 7.1 风险识别

- DeepSeek API 可能在中国处理数据
- 这可能引发 GDPR 数据跨境传输合规问题
- 美国用户可能关注数据是否传输到中国

### 7.2 缓解措施（已在 Privacy Policy 中实施）

- [x] 明确披露数据可能传输到中国（Privacy Policy 第9条）
- [x] 用户同意条款：使用服务即同意数据传输（Privacy Policy 第9条）
- [x] 提供 DeepSeek 隐私政策链接

### 7.3 额外建议

- 考虑未来切换到非中国 API 提供商（如 OpenAI、Anthropic）以降低合规风险
- 监控美国政策变化（如 TikTok 禁令类似风险）

---

## 8. 总结与建议

### 8.1 合规状态

| 检查项 | 状态 |
|--------|------|
| Privacy Policy | ✅ 完成 |
| Terms of Service | ✅ 完成 |
| Cookie Policy | ✅ 完成 |
| 第三方数据披露 | ✅ 完成 |
| AI 声明（FTC） | ⚠️ 需文案注意 |
| 年龄限制（13+） | ✅ 完成 |
| 版权角色过滤 | ✅ 低风险 |
| 学术诚信风险 | ⚠️ 需持续关注 |
| 数据跨境传输 | ⚠️ 需监控 |

### 8.2 关键建议

1. **网站文案避免夸大**：不得声称 "100% undetectable" 或 "guaranteed to pass Turnitin"
2. **营销定位调整**：强调 "improve readability" 而非 "evade detection"
3. **考虑 API 迁移**：长期考虑切换到非中国 API 提供商以降低数据跨境风险
4. **建立正面内容**：通过博客/FAQ 建立 "ethical AI use" 品牌形象
5. **监控政策变化**：关注 FTC、GDPR、美国对华科技政策变化

### 8.3 后续跟进

- [ ] 网站上线前审查所有文案，确保符合 FTC 要求
- [ ] 设置 privacy@stealthwriter.online 和 legal@stealthwriter.online 邮箱
- [ ] 考虑购买 Errors & Omissions 保险
- [ ] 定期（每季度）审查合规文件是否需要更新

---

[DONE]
