# Design System — Stealth Writer AI

## 风格定位：Editorial Minimalism（编辑极简主义）

用"纸和墨水"的隐喻，让工具感觉像高级写作环境，而非"绕过检测的黑客工具"。这有助于建立品牌信任，与竞品（stealthwriter.ai 的科技感）形成差异化。

---

## 色彩系统

### CSS 变量
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

### 色彩用途
| Token | 色值 | 用途 |
|-------|------|------|
| `--paper` | `#f5f2e8` | 页面主背景 |
| `--paper-dark` | `#e8e4d9` | 次要背景、hover 背景 |
| `--ink` | `#1a1a1a` | 主文字、边框、按钮背景 |
| `--ink-light` | `#5c5c5c` | 次要文字、placeholder |
| `--border` | `#1a1a1a` | 边框、分割线 |
| `--white` | `#ffffff` | 输入区背景、反色按钮 |
| `--error` | `#c41e3a` | 错误状态、禁用表达 |
| `--success` | `#2d5016` | 成功状态、完成提示 |

---

## 字体系统

### 字体栈
| 用途 | 字体 | 备选 |
|------|------|------|
| 标题/正文 | Georgia | serif |
| 标签/数据/技术元素 | Courier Prime | monospace |

### 字号层级
| 元素 | 字体 | 大小 | 字重 | 行高 | 其他 |
|------|------|------|------|------|------|
| H1 | Georgia | 2.8rem (44.8px) | 400 | 1.3 | — |
| H2 | Georgia | 1.8rem (28.8px) | 400 | 1.3 | margin-top: 3rem |
| H3 | Georgia | 1.3rem (20.8px) | 400 | 1.3 | — |
| Body | Georgia | 1rem (18px) | 400 | 1.8 | — |
| Label | Courier Prime | 0.8rem (12.8px) | 400 | 1.5 | uppercase, letter-spacing: 0.05em |
| Small | Georgia | 0.9rem | 400 | 1.6 | — |

### 移动端字号
| 元素 | 大小 |
|------|------|
| H1 | 2.4rem |
| H2 | 1.6rem |
| Body | 1rem |

---

## 间距系统

### 容器
- 最大宽度：720px
- 水平边距：2rem（移动端 1rem）

### 模块间距
| 场景 | 数值 |
|------|------|
| Section 之间 | 3rem |
| 元素之间 | 1.5rem |
| 按钮内边距 | 0.8rem 1.5rem |
| 输入框内边距 | 1rem |
| 卡片内边距 | 1.5rem |

---

## 边框与圆角

| 属性 | 值 | 说明 |
|------|-----|------|
| 边框 | 1px solid var(--border) | 统一黑色边框 |
| 圆角 | 0 | 方角，编辑风格 |
| 阴影 | none | 无阴影 |

---

## 组件规范

### 按钮

#### Primary Button
```css
background: var(--ink);
color: var(--paper);
border: 1px solid var(--border);
padding: 0.8rem 1.5rem;
font-family: 'Courier Prime', monospace;
font-size: 0.9rem;
text-transform: uppercase;
letter-spacing: 0.05em;
cursor: pointer;
transition: opacity 0.2s;
```
Hover: opacity 0.85
Disabled: opacity 0.5, cursor not-allowed

#### Secondary Button
```css
background: transparent;
color: var(--ink);
border: 1px solid var(--border);
```
Hover: background var(--paper-dark)

#### Ghost Button
```css
background: transparent;
color: var(--ink-light);
border: none;
text-decoration: underline;
```

### 输入框

#### Textarea
```css
background: var(--white);
border: 1px solid var(--border);
padding: 1rem;
font-family: 'Georgia', serif;
font-size: 1rem;
line-height: 1.8;
width: 100%;
resize: vertical;
```
Focus: outline 2px solid var(--ink)
Error: border-color var(--error)

### 卡片

#### Feature Item
```css
border-bottom: 1px solid var(--border);
padding: 1.5rem 0;
```
无背景色、无圆角、无阴影

#### FAQ Item
```css
border-bottom: 1px solid var(--border);
padding: 1.5rem 0;
```
Question: font-weight bold
Answer: color var(--ink-light), margin-top 0.5rem

### 导航
```css
border-bottom: 1px solid var(--border);
padding: 1.5rem 0;
margin-bottom: 3rem;
```
Layout: flex, space-between, align-items baseline

---

## 响应式断点

| 断点 | 宽度 | 调整 |
|------|------|------|
| Mobile | < 480px | 单栏、字体缩小、按钮全宽 |
| Tablet | 480px - 768px | 容器边距减小 |
| Desktop | > 768px | 默认布局 |

---

## 动画规范

| 动画 | 时长 | 缓动 | 说明 |
|------|------|------|------|
| Button hover | 0.2s | ease | opacity 变化 |
| Input focus | 0.2s | ease | outline 出现 |
| Loading dots | 1.5s | linear | 循环动画 |
| Fade in | 0.3s | ease-out | 内容显示 |

---

## 反 AI 味自检（硬闸门）

- [x] 主字体不是 Inter/Roboto/system-ui → Georgia + Courier Prime
- [x] 背景色不是深紫/深蓝/纯黑 → #f5f2e8 米白
- [x] 强调色不是霓虹青/霓虹紫 → #1a1a1a 黑 + #c41e3a 暗红
- [x] 布局不是居中 hero + 三卡片 → 左对齐单栏，无卡片
- [x] 圆角不是统一 16px → 0px 方角
- [x] 无弥散阴影 → 无 shadow
- [x] 无通用占位图 → 无图片

**硬闸门：通过 ✅**
