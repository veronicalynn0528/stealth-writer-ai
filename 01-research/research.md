# 关键词研究 Agent 交接摘要

## 当前结论
- 状态：[DONE]
- 一句话结论：stealth writer ai 是低竞争老词机会（KD 12, 月搜 4,400, CPC $2.35），项目方向成立，建议继续。

## 关键输入
- 项目：stealth-writer-ai
- 当前阶段：01-research
- 上游资料：种子词 "AI humanizer, stealth writer, undetectable AI, AI text humanizer, bypass AI detection"
- 限制：SERP 实时扫描因 bot 检测受阻，依赖 discoverkeywords.co API 数据 + 已知竞品信息

## 本阶段交付物
- 文件/内容：`~/projects/stealth-writer-ai/01-research/research.md`
- 核心判断：
  - 主词 "stealth writer ai"：月搜 4,400，CPC $2.35，KD 12（LOW），评分 4,646
  - 老词机会（非新词爆发），需靠产品差异化和内容深度切入
  - 已知竞品：Stealth Writer（stealthwriter.ai，已有成熟产品，DR 较高）
  - 差异化空间：免费额度更慷慨、UI 更简洁、速度更快、或 targeting 长尾词
- 已确认项：
  - 关键词搜索意图：工具化（transactional）
  - 商业意图：高（CPC $2.35）
  - 竞争度：低（KD 12）
- 待确认项：
  - [ ] SERP Top 10 详细拆解（需人工或代理完成）
  - [ ] 竞品反向链接差距分析
  - [ ] 长尾词扩展（"free ai humanizer", "humanize ai text free", "undetectable ai writer" 等）

## 质量门槛自检
- [x] 主推荐有趋势数据（discoverkeywords.co 缓存数据）
- [ ] 没有把稳定老词伪装成新词 — 明确标注为老词机会
- [ ] 没有用品牌词或定义词硬做工具站 — 主词为工具意图
- [x] 结论可被 PRD 直接接住

## 风险
- P0：无
- P1：SERP 扫描不完整，Top 10 竞争格局待补
- P2：老词需长期 SEO 投入，非短期爆发机会

## 给下游的最小必要信息
- 下一阶段：产品定义与 PRD（02-PRD）
- 必须读取：`01-research/research.md`
- 不能假设：
  - 不要假设 SERP 已详细扫描
  - 不要假设竞品 DR 已准确评估
- 建议启动 Prompt：
  ```
  项目：stealth-writer-ai
  域名：stealthwriter.online
  关键词：stealth writer ai（老词机会，KD 12, 月搜 4,400, CPC $2.35）
  竞品：stealthwriter.ai（已有成熟产品，需差异化）
  目标：FREEMIUM 工具站
  请输出 PRD + Route Contract。
  ```

---

# 关键词机会报告（详细）

## 数据来源
- 工具：discoverkeywords.co API（共享缓存）
- 时间：2026-06-12
- 种子词：AI humanizer, stealth writer, undetectable AI, AI text humanizer, bypass AI detection

## 老词机会（Old-Word Opportunities）

| # | 关键词 | 月搜索量 | CPC | KD | 竞争 | 评分 | 意图 | 来源种子 |
|---|--------|---------|-----|----|------|------|------|---------|
| 1 | **stealth writer ai** | 4,400 | $2.35 | 12 | LOW | 4,646 | Transactional | — |
| 2 | ai avatar generator | 4,400 | $4.24 | 35 | MEDIUM | 3,432 | Transactional | — |
| 3 | ai-writing tool | 60,500 | $4.82 | 26 | MEDIUM | 53,724 | Transactional | — |

## 推荐判断

### BUILD_NOW（立即做）
- **stealth writer ai**
  - 理由：KD 12 低竞争，CPC $2.35 商业意图明确，域名完全匹配（stealthwriter.online）
  - 风险：已有 stealthwriter.ai 竞品，需差异化定位
  - 切入方向：免费额度更慷慨、无注册即用、速度更快、或 targeting 学生/内容创作者细分

### WATCH（观察）
- 暂无明确新词爆发机会，下一轮缓存更新后重点观察

### PASS（不做）
- 其他种子词扩展出的稳定老词（ai app, google ai studio 等）与项目方向无关

## 竞品已知信息

| 竞品 | 域名 | 状态 | 差异化缺口 |
|------|------|------|-----------|
| Stealth Writer | stealthwriter.ai | 成熟产品，付费为主 | 免费额度、UI 简洁度、速度 |
| Undetectable AI | undetectable.ai | 成熟产品 | 价格、免费试用 |
| HideMyAI | hidemy.ai | 新兴 | 品牌认知度 |
| AI Humanizer | aihumanizer.org | 内容站为主 | 工具体验 |

## 下一步建议

1. **立即补 SERP 扫描**：用住宅代理或手动检查 "stealth writer ai" Top 10
2. **长尾词扩展**：
   - "free ai humanizer"
   - "humanize ai text free"
   - "undetectable ai writer free"
   - "ai text humanizer online"
   - "bypass ai detection free"
3. **差异化定位**：在 PRD 中明确与 stealthwriter.ai 的差异（免费策略、速度、UI、targeting）
4. **反向链接差距**：Ahrefs/Semrush 检查 stealthwriter.ai 的 backlink profile

---

[DONE]
