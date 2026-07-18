# Page Layout — Stealth Writer AI

## 全局结构

```
[Nav]           — 固定宽度，底部边框
[Hero]          — 大标题 + 副标题 + CTA
[Input Area]    — 核心工具区（输入/输出/按钮）
[Features]      — How It Works + Why Choose Us
[FAQ]           — 8 条问答
[Footer]        — 链接 + 联系
```

---

## Section 1: Nav

### Layout
- 宽度：100%
- 底部边框：1px solid var(--border)
- 内边距：1.5rem 0
- 下边距：3rem

### Content
```
[Logo]                          [Links]
Stealth Writer AI               Privacy | Terms | Cookie | Refund
```

### Logo 样式
- 字体：Courier Prime, monospace
- 大小：1rem
- 样式：uppercase, letter-spacing 0.05em
- 颜色：var(--ink)

### Links 样式
- 字体：Courier Prime, monospace
- 大小：0.75rem
- 颜色：var(--ink-light)
- 间距：1.5rem
- Hover：color var(--ink)

---

## Section 2: Hero

### Layout
- 容器：max-width 720px, margin 0 auto
- 内边距：0 2rem
- 文字对齐：左对齐

### Content
```
Eyebrow:    "FREE AI HUMANIZER"
H1:         "Free AI Humanizer"
Subtitle:   "Make AI-generated text sound more natural. No signup, no credit card — just paste your text and get human-like results in seconds."
CTA:        [Humanize Your Text]  [See How It Works →]
```

### Eyebrow 样式
- 字体：Courier Prime, monospace
- 大小：0.8rem
- 颜色：var(--ink-light)
- 样式：uppercase, letter-spacing 0.05em
- 下边距：1rem

### H1 样式
- 字体：Georgia, serif
- 大小：2.8rem（移动端 2.4rem）
- 颜色：var(--ink)
- 下边距：1.5rem

### Subtitle 样式
- 字体：Georgia, serif
- 大小：1.1rem
- 颜色：var(--ink-light)
- 行高：1.8
- 最大宽度：600px
- 下边距：2rem

### CTA Group
- 布局：flex, gap 1rem
- 移动端：flex-direction column

#### Primary CTA: "Humanize Your Text"
- 样式：Primary Button
- 功能：scroll to input area

#### Secondary CTA: "See How It Works →"
- 样式：Ghost Button
- 功能：scroll to features section

---

## Section 3: Input Area（核心工具区）

### Layout
- 容器：max-width 720px
- 背景：var(--white)
- 边框：1px solid var(--border)
- 内边距：2rem
- 上边距：3rem

### Content
```
Label:      "INPUT"
Textarea:   [Paste your AI-generated text here...]

Stats:      "0 words | 0 characters"

Button Group:
            [HUMANIZE]  [CLEAR]

Label:      "OUTPUT"
Textarea:   [Your humanized text will appear here]
            [Copy Result]
```

### Input Label
- 字体：Courier Prime, monospace
- 大小：0.8rem
- 颜色：var(--ink-light)
- 样式：uppercase, letter-spacing 0.05em
- 下边距：0.5rem

### Input Textarea
- 背景：var(--white)
- 边框：1px solid var(--border)
- 内边距：1rem
- 字体：Georgia, serif
- 大小：1rem
- 行高：1.8
- 最小高度：200px
- 宽度：100%
- resize: vertical

### Stats 行
- 字体：Courier Prime, monospace
- 大小：0.8rem
- 颜色：var(--ink-light)
- 对齐：右对齐
- 上边距：0.5rem

### Button Group
- 布局：flex, gap 1rem
- 上边距：1.5rem
- 移动端：flex-direction column

#### "HUMANIZE" Button
- 样式：Primary Button
- 宽度：auto（移动端 100%）
- Loading 状态：文字变为 "Humanizing..." + 动画点
- Disabled 状态：opacity 0.5

#### "CLEAR" Button
- 样式：Secondary Button
- 宽度：auto（移动端 100%）

### Output Area
- 与 Input 结构相同，但：
  - 初始状态：placeholder "Your humanized text will appear here"
  - 成功状态：显示结果文本
  - 只读：不可编辑

#### "Copy Result" Button
- 位置：Output textarea 下方，右对齐
- 样式：Ghost Button
- 成功反馈：文字变为 "Copied!" 2秒后恢复

### 状态设计

#### 空态
- Input：placeholder 显示
- Output：placeholder 显示
- Humanize 按钮：可用（但点击后提示输入文本）

#### 加载态
- Humanize 按钮：文字变为 "Humanizing..."
- 按钮内：三个点动画（opacity 循环）
- Input：禁用（disabled）
- 预计时间提示："Usually takes 2-3 seconds"

#### 错误态
- 错误类型：API error, rate limit, text too long, empty input
- 显示：红色边框 + 错误消息文本
- 错误消息样式：
  - 颜色：var(--error)
  - 字体：Georgia, serif
  - 大小：0.9rem
  - 上边距：1rem

#### 成功态
- Output：显示 humanized 文本
- Copy 按钮：可用
- 字数统计：更新为输出字数

#### 免费额度耗尽
- 提示："Daily limit reached (3,000 words). Try again tomorrow."
- 样式：
  - 背景：var(--paper-dark)
  - 边框：1px solid var(--border)
  - 内边距：1rem
  - 字体：Georgia, serif
  - 颜色：var(--ink-light)

---

## Section 4: Features

### Layout
- 容器：max-width 720px
- 上边距：3rem

### 4.1 How It Works

#### H2
- 文字："How It Works"
- 样式：H2 标准

#### Steps
```
1. Paste Your Text
   Drop in AI-generated content — essays, emails, articles, anything.

2. Click Humanize
   Our AI rewrites it to sound more natural and human-like.

3. Copy & Use
   Get results instantly. Copy and paste wherever you need.
```

#### Step 样式
- 布局：垂直列表，每个 step 之间 border-bottom
- Step 数字：
  - 字体：Courier Prime, monospace
  - 大小：0.8rem
  - 颜色：var(--ink-light)
  - 样式：uppercase
- Step 标题：
  - 字体：Georgia, serif
  - 大小：1.1rem
  - 颜色：var(--ink)
  - 字重：bold
- Step 描述：
  - 字体：Georgia, serif
  - 大小：1rem
  - 颜色：var(--ink-light)

### 4.2 Why Choose Stealth Writer AI

#### H2
- 文字："Why Choose Stealth Writer AI"
- 样式：H2 标准

#### Feature List
```
✓ Free to Use          3,000 words per day at no cost
✓ No Signup            Start immediately, no account needed
✓ Fast Results         Average processing time under 5 seconds
✓ Meaning Preserved    Keeps your original intent and message
✓ Works Anywhere       Essays, emails, social media, blog posts
```

#### Feature Item 样式
- 布局：flex, space-between
- 边框：border-bottom 1px solid var(--border)
- 内边距：1.5rem 0
- 移动端：flex-direction column

#### Feature Name
- 字体：Georgia, serif
- 大小：1rem
- 颜色：var(--ink)
- 字重：bold

#### Feature Description
- 字体：Georgia, serif
- 大小：0.95rem
- 颜色：var(--ink-light)
- 对齐：右对齐（移动端左对齐）

---

## Section 5: FAQ

### Layout
- 容器：max-width 720px
- 上边距：3rem

### H2
- 文字："Frequently Asked Questions"
- 样式：H2 标准

### FAQ Items

#### 结构
```
Q: Is Stealth Writer AI free?
A: Yes, our free tier includes 3,000 words per day at no cost. No credit card required.

Q: Do I need to create an account?
A: No. Stealth Writer AI works without registration. Just visit the site and start using it.

Q: How does it work?
A: Paste your AI-generated text, click "Humanize," and our AI rewrites it to sound more natural and human-like while preserving your original meaning.

Q: Will this make my text pass AI detectors?
A: Our tool makes text more natural and human-like, which may reduce AI detection probability. However, we cannot guarantee results with any specific detection system.

Q: Is my text stored or shared?
A: No. Your text is processed in real-time and immediately discarded. We do not store, log, or share your content. See our Privacy Policy for details.

Q: What types of text work best?
A: Essays, blog posts, emails, social media content, marketing copy — any AI-generated text that needs to sound more natural.

Q: Is there a word limit?
A: Free users can process up to 3,000 words per day. Each individual request supports up to 5,000 characters.

Q: Do you offer paid plans?
A: We currently offer a free tier only. Paid plans may be introduced in the future with additional features.
```

#### Question 样式
- 字体：Georgia, serif
- 大小：1rem
- 颜色：var(--ink)
- 字重：bold
- 内边距：1.5rem 0 0.5rem

#### Answer 样式
- 字体：Georgia, serif
- 大小：1rem
- 颜色：var(--ink-light)
- 行高：1.8
- 内边距：0 0 1.5rem
- 边框：border-bottom 1px solid var(--border)

#### 链接样式
- 颜色：var(--ink)
- 下划线：underline
- Hover：opacity 0.7

---

## Section 6: Footer

### Layout
- 宽度：100%
- 边框：border-top 1px solid var(--border)
- 内边距：3rem 0
- 上边距：3rem

### Content
```
[Links]                                    [Contact]
Privacy | Terms | Cookie | Refund          For questions: contact@stealthwriter.online
```

### Links 样式
- 字体：Courier Prime, monospace
- 大小：0.8rem
- 颜色：var(--ink-light)
- 间距：1.5rem
- Hover：color var(--ink)

### Contact 样式
- 字体：Georgia, serif
- 大小：0.9rem
- 颜色：var(--ink-light)
- 对齐：右对齐（移动端左对齐）

### 移动端布局
- flex-direction column
- gap 1.5rem
- 所有文字左对齐

---

## 页面级 Meta

### Title
`Free AI Humanizer | Stealth Writer AI`

### Meta Description
`Free AI humanizer that makes AI-generated text more natural and human-like. No signup required. Try Stealth Writer AI now.`

### Open Graph
- og:title: `Free AI Humanizer | Stealth Writer AI`
- og:description: `Free AI humanizer. Make AI-generated text more natural in seconds. No signup required.`
- og:image: `https://stealthwriter.online/assets/og-image.png`

### Schema.org
- @type: WebApplication
- name: Stealth Writer AI
- applicationCategory: TextEditor
- offers: price 0, priceCurrency USD

---

## 响应式适配总结

| 元素 | Desktop | Mobile (<480px) |
|------|---------|-----------------|
| 容器边距 | 2rem | 1rem |
| H1 | 2.8rem | 2.4rem |
| H2 | 1.8rem | 1.6rem |
| CTA 按钮 | 并排 | 堆叠 |
| Feature List | 并排 | 堆叠 |
| Footer | 并排 | 堆叠 |
