# Component Inventory — Stealth Writer AI

## shadcn/ui 组件清单

本项目使用纯 HTML/CSS/JS 实现，不依赖 shadcn/ui 或 React。以下为等效原生组件清单。

---

## 自定义组件清单

### Layout 组件

| 组件名 | 文件 | 用途 | 依赖 |
|--------|------|------|------|
| `Nav` | index.html | 顶部导航 | 无 |
| `Hero` | index.html | 首屏区域 | 无 |
| `InputArea` | index.html | 核心工具区 | `Textarea`, `Button`, `Stats` |
| `Features` | index.html | 特性展示 | 无 |
| `FAQ` | index.html | 问答区 | 无 |
| `Footer` | index.html | 页脚 | 无 |

### UI 组件

| 组件名 | 文件 | 用途 | 状态 |
|--------|------|------|------|
| `Button` | index.html (CSS) | 按钮样式 | Primary / Secondary / Ghost |
| `Textarea` | index.html (CSS) | 文本输入区 | Empty / Focus / Error / Disabled |
| `Stats` | index.html (JS) | 字数统计 | 实时更新 |
| `CopyButton` | index.html (JS) | 复制功能 | Idle / Success |
| `ErrorMessage` | index.html (JS) | 错误提示 | 动态显示 |
| `LoadingState` | index.html (JS) | 加载状态 | 动画点 |

### Section 组件

| 组件名 | 说明 |
|--------|------|
| `HowItWorks` | 3 步流程展示 |
| `WhyChooseUs` | 5 条特性列表 |
| `FAQList` | 8 条问答 |

---

## 组件依赖树

```
page (index.html)
├── Nav
│   ├── Logo
│   └── NavLinks
├── Hero
│   ├── Eyebrow
│   ├── H1
│   ├── Subtitle
│   └── CTAGroup
│       ├── PrimaryButton
│       └── GhostButton
├── InputArea
│   ├── InputLabel
│   ├── Textarea (Input)
│   ├── Stats
│   ├── ButtonGroup
│   │   ├── PrimaryButton (Humanize)
│   │   └── SecondaryButton (Clear)
│   ├── ErrorMessage
│   ├── OutputLabel
│   ├── Textarea (Output)
│   └── CopyButton
├── Features
│   ├── HowItWorks
│   │   └── StepItem × 3
│   └── WhyChooseUs
│       └── FeatureItem × 5
├── FAQ
│   └── FAQItem × 8
└── Footer
    ├── FooterLinks
    └── ContactInfo
```

---

## State Management

### 全局状态（JavaScript 对象）

```javascript
const appState = {
    inputText: '',           // 输入文本
    outputText: '',          // 输出文本
    wordCount: 0,            // 输入字数
    charCount: 0,            // 输入字符数
    isLoading: false,        // 加载状态
    error: null,             // 错误信息
    dailyUsed: 0,            // 今日已用字数
    dailyLimit: 3000,        // 每日限制
    copySuccess: false       // 复制成功状态
};
```

### 状态流转

```
[空态]
  ↓ 输入文本
[有输入]
  ↓ 点击 Humanize
[加载态] → 显示错误 → [错误态]
  ↓ 成功
[成功态] → 点击 Copy → [复制成功]
  ↓ 点击 Clear
[空态]
```

---

## 动画实现

| 动画 | 实现方式 | 代码 |
|------|----------|------|
| Button hover | CSS transition | `transition: opacity 0.2s` |
| Input focus | CSS outline | `outline: 2px solid var(--ink)` |
| Loading dots | CSS animation | `@keyframes dots` opacity 循环 |
| Fade in | CSS transition | `opacity 0 → 1, 0.3s ease-out` |
| Copy success | JS + CSS | 文字切换 + 2秒恢复 |

### Loading Dots 动画
```css
@keyframes dots {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}
.loading-dots span {
    animation: dots 1.5s infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
```

---

## 外部依赖

| 依赖 | 来源 | 用途 |
|------|------|------|
| Google Fonts | fonts.googleapis.com | Georgia + Courier Prime |
| DeepSeek API | api.deepseek.com | AI Humanize 功能 |

---

## 文件结构

```
07-code/
├── index.html          # 主页面（包含所有 HTML + CSS + JS）
├── css/                # 样式目录（备用）
├── js/                 # 脚本目录（备用）
├── assets/
│   └── og-image.png    # OG 图片（待生成）
└── wrangler.toml       # Cloudflare Worker 配置
```

### 实现说明
- 当前为单文件 HTML 实现（CSS 和 JS 内联）
- 无框架依赖
- 无构建步骤
- 纯静态部署到 Cloudflare Pages
