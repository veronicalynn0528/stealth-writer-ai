# 视觉设计与页面生成 — Stealth Writer AI

## 1. Visual Style Rationale

### 风格定位：Editorial Minimalism（编辑极简主义）

**为什么适合这个项目：**
- **工具类型**：文本处理工具，用户需要专注阅读和写作
- **目标市场**：US/English，学生、撰稿人、营销人员
- **SERP 预期**：与 stealthwriter.ai（科技感）形成差异化，走"写作工具"而非"黑客工具"路线
- **内容密度**：中等，单页工具站，需要清晰的信息层级

### 3 种风格比较

| 风格 | 优点 | 缺点 | 选择 |
|------|------|------|------|
| **Editorial Minimalism**（选中） | 专业、可信、专注内容、差异化 | 可能显得保守 | ✅ |
| Tech SaaS（紫蓝渐变） | 现代、科技感 | 过于常见、AI 味重、与竞品撞脸 | ❌ |
| Brutalist（粗野主义） | 独特、 memorable | 可能显得不专业、转化率风险 | ❌ |

**选择原因**：Editorial Minimalism 用"纸和墨水"的隐喻，让工具感觉像高级写作环境，而非"绕过检测的黑客工具"。这有助于建立品牌信任，与竞品形成差异化。

---

## 2. 设计系统

### 色彩
```css
:root {
    --paper: #f5f2e8;        /* 主背景 - 米白/纸张色 */
    --paper-dark: #e8e4d9;   /* 次要背景 - 暗纸张 */
    --ink: #1a1a1a;          /* 主文字 - 近黑 */
    --ink-light: #5c5c5c;    /* 次要文字 - 灰 */
    --border: #1a1a1a;       /* 边框 - 黑色 */
    --white: #ffffff;        /* 纯白 - 输入区背景 */
    --error: #c41e3a;        /* 错误 - 暗红 */
    --success: #2d5016;      /* 成功 - 暗绿 */
}
```

### 字体
- **主字体**：Georgia, serif（标题、正文）
- **辅助字体**：Courier Prime, monospace（标签、数据、技术元素）
- **字体层级**：
  - H1: 3.2rem, Georgia, 400 weight
  - H2: 1.8rem, Georgia, 400 weight
  - Body: 1rem (18px base), Georgia, 1.8 line-height
  - Label: 0.8rem, Courier Prime, uppercase, letter-spacing 0.05em

### 间距
- 容器最大宽度：720px（阅读舒适宽度）
- 容器边距：2rem
- 模块间距：3rem
- 元素间距：1.5rem

### 边框与圆角
- 边框：1px solid var(--border)
- 圆角：0（方角，编辑风格）
- 无阴影

---

## 3. 页面结构

### Desktop
```
[Nav]
  Logo (left) | Links (right)

[Hero]
  H1: Free AI Humanizer
  Subtitle: Make AI-generated text sound more natural...
  CTA: Humanize Your Text → (scroll to input)

[Input Area]
  Label: Input / Output
  Textarea (white bg, 1px border)
  Button Group: [Humanize] [Clear]
  Stats: Word count, Processing time

[Features]
  H2: How It Works
  3 steps: Paste → Click → Copy
  
  H2: Why Choose Stealth Writer AI
  Feature list (vertical, not cards)

[FAQ]
  H2: Frequently Asked Questions
  8 Q&A items

[Footer]
  Links: Privacy, Terms, Cookie, Refund
  Contact: contact@stealthwriter.online
```

### Mobile
- 单栏布局
- 按钮全宽
- 字体略微缩小（H1: 2.4rem）
- 输入区高度自适应

---

## 4. 关键状态

### 空态
- 输入区 placeholder："Paste your AI-generated text here..."
- 输出区：隐藏或显示提示 "Your humanized text will appear here"

### 加载态
- 按钮显示 "Humanizing..." + 动画
- 输入区禁用
- 预计时间提示："Usually takes 2-3 seconds"

### 错误态
- 红色边框 + 错误消息
- 类型：API error, rate limit, text too long, empty input

### 成功态
- 输出区显示结果
- 复制按钮可用
- 字数统计更新

### 免费额度耗尽
- 提示："Daily limit reached (3,000 words). Try again tomorrow."
- 可选：加入等待列表（邮件收集）

---

## 5. 素材清单

| 素材 | 状态 | 来源 |
|------|------|------|
| Logo | 文字 logo（Courier Prime） | 系统字体 |
| OG Image | 待生成 | 需要设计 |
| Favicon | 待生成 | 需要设计 |
| 演示 GIF | 可选 | 后续添加 |

---

## 6. 前端 Handoff

### 已实现的文件
- `07-code/index.html` — 主站（804 行，完整实现）
- `07-code/css/` — 样式目录
- `07-code/js/` — 脚本目录
- `07-code/assets/` — 资源目录

### 实现状态
- ✅ 设计系统已应用（色彩、字体、间距）
- ✅ 响应式布局（media queries 在 480px）
- ✅ 交互状态（加载、错误、成功）
- ✅ API 集成（Worker 转发）
- ⚠️ OG Image 待生成
- ⚠️ Favicon 待生成

### 代码质量
- 纯 HTML/CSS/JS，无框架依赖
- CSS 变量系统化
- 移动端优先（min-width media queries）

---

## 7. 反 AI 味自检（硬闸门）

- [x] 主字体不是 Inter/Roboto/system-ui → Georgia + Courier Prime
- [x] 背景色不是深紫/深蓝/纯黑 → #f5f2e8 米白
- [x] 强调色不是霓虹青/霓虹紫 → #1a1a1a 黑 + #c41e3a 暗红
- [x] 布局不是居中 hero + 三卡片 → 左对齐单栏，无卡片
- [x] 圆角不是统一 16px → 0px 方角
- [x] 无弥散阴影 → 无 shadow
- [x] 无通用占位图 → 无图片

**硬闸门：通过 ✅**

---

# 视觉设计与页面生成交接摘要

## 当前结论
- 状态：[DONE]
- 一句话结论：Editorial Minimalism 风格，反 AI 味硬闸门通过，现有实现已符合设计系统。

## 关键输入
- 项目：stealth-writer-ai
- 当前阶段：06-design
- 上游资料：`02-PRD/PRD.md`, `05-copy/copy.md`

## 本阶段交付物
- 文件/内容：`~/projects/stealth-writer-ai/06-design/design-handoff.md`
- 核心判断：
  - 风格：Editorial Minimalism（纸墨隐喻）
  - 设计系统：色彩、字体、间距、边框
  - 页面结构：Desktop + Mobile
  - 关键状态：空/加载/错误/成功/额度耗尽
- 已确认项：
  - 反 AI 味硬闸门通过
  - 现有实现符合设计系统
- 待确认项：
  - [ ] OG Image 生成
  - [ ] Favicon 生成

## 质量门槛自检
- [x] 设计是真源，不是单张概念图
- [x] 前端可提取字体/颜色/间距/图标
- [x] 关键交互状态齐全
- [x] 视觉和上一个项目不撞脸

## 风险
- P0：无
- P1：OG Image / Favicon 缺失（影响社交分享）
- P2：无 Stitch 自动化（手动设计审查）

## 给下游的最小必要信息
- 下一阶段：07-frontend（更新现有代码）或 08-backend（API 优化）
- 必须读取：`06-design/design-handoff.md`
- 不能假设：
  - 不要假设 OG Image 已生成
  - 不要假设 Favicon 已生成
- 建议启动 Prompt：
  ```
  项目：stealth-writer-ai
  设计已完成：Editorial Minimalism，反 AI 味通过
  现有代码在 07-code/，需更新文案和修复合规问题
  请执行前端实现和 QA 验收。
  ```

[DONE]
