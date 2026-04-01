# 阡陌律师事务所 — 中文官网

> **zh-zenmo-law** · React 18 SPA 嵌入 WordPress 主题  
> 线上地址：[zh.zenmolaw.com](https://zh.zenmolaw.com)

---

## 目录

1. [项目概览](#项目概览)
2. [技术栈](#技术栈)
3. [目录结构](#目录结构)
4. [本地开发](#本地开发)
5. [构建与部署](#构建与部署)
6. [新增页面标准流程](#新增页面标准流程)
7. [共享组件系统](#共享组件系统)
8. [SEO 管理](#seo-管理)
9. [Git 提交规范](#git-提交规范)
10. [注意事项](#注意事项)

---

## 项目概览

本项目是阡陌律师事务所的中文官网，采用 **React SPA + WordPress 主题**的混合架构：

- **前端**：React 18 应用，由 Vite 构建，输出到 `dist/`
- **后端宿主**：WordPress 6.x，仅作为静态资产宿主和路由入口，不使用任何 WP 内容管理功能
- **部署方式**：将构建产物打包为 WordPress 主题（`theme/`），上传至服务器 `/wp-content/themes/zh-zenmo-law/`

SPA 路由由 React Router DOM 接管，WordPress 通过 `functions.php` 的 `template_redirect` 钩子将所有前台请求转发至 `index.php`，实现完整的客户端路由。

---

## 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| UI 框架 | React | ^18.3.1 |
| 构建工具 | Vite | ^5.4.0 |
| 路由 | React Router DOM | ^6.26.0 |
| 样式 | Tailwind CSS | ^3.4.9 |
| 动画 | Framer Motion | ^11.3.0 |
| 图标 | Lucide React | ^0.460.0 |
| 工具类合并 | clsx + tailwind-merge | ^2.1.1 / ^2.5.2 |
| 宿主平台 | WordPress | ^6.0 |
| 运行环境 | Node.js | >=18.x |

---

## 目录结构

```
zh-zenmo-law/
├── public/
│   └── images/
│       ├── Backgrounds/         # 页面背景图
│       ├── Logos/               # 网站 Logo
│       ├── Icons/               # favicon
│       └── QR Codes/            # 微信二维码
│
├── src/
│   ├── main.jsx                 # React 入口
│   ├── App.jsx                  # 路由配置
│   ├── index.css                # 全局样式 + Tailwind 指令
│   │
│   ├── pages/                   # 页面入口组件（仅负责组件编排 + useSEO）
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ImmigrationPage.jsx
│   │   ├── H1BPage.jsx
│   │   ├── L1Page.jsx
│   │   ├── O1Page.jsx
│   │   ├── EB23Page.jsx
│   │   ├── BusinessPage.jsx
│   │   ├── IndividualPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── components/
│   │   ├── layout/              # Header / Footer / PageLayout
│   │   ├── shared/              # 跨页面复用组件（见「共享组件系统」章节）
│   │   ├── home/                # 首页专属组件
│   │   ├── about/               # 关于我们专属组件
│   │   ├── immigration/         # 移民法律概览页专属组件
│   │   ├── h1b/                 # H-1B 签证页专属组件
│   │   ├── l1/                  # L-1 签证页专属组件
│   │   ├── o1/                  # O-1 签证页专属组件
│   │   ├── eb23/                # EB-2/3 绿卡页专属组件
│   │   ├── business/            # 商业法律专属组件
│   │   ├── individual/          # 个人法务专属组件
│   │   └── contact/             # 联系我们专属组件
│   │
│   ├── hooks/
│   │   └── useSEO.js            # 页面级 SEO 管理 Hook
│   │
│   └── lib/
│       ├── assetUrl.js          # 图片路径工具函数
│       └── motion.js            # Framer Motion 动画参数工具函数
│
├── scripts/
│   ├── deploy.js                # 一键构建+打包脚本
│   └── package.js               # WordPress 主题打包脚本
│
├── index.html                   # Vite HTML 入口（开发环境）
├── index.php                    # WordPress 主题 HTML 入口
├── functions.php                # WordPress 主题功能函数
├── style.css                    # WordPress 主题声明文件
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 本地开发

```bash
npm install       # 安装依赖
npm run dev       # 启动开发服务器（localhost:5173，支持 HMR）
npm run build     # 构建生产产物至 dist/
npm run preview   # 本地预览构建结果
npm run deploy    # 一键执行：build → 主题打包至 theme/
npm run lint      # ESLint 检查
```

开发环境下图片通过 `public/images/` 直接读取，无需 WordPress 环境即可预览所有页面。

---

## 构建与部署

```bash
# 第一步：构建并打包主题
npm run deploy

# 第二步：压缩 theme/ 目录
cd theme && zip -r ../zh-zenmo-law.zip . && cd ..

# 第三步：上传至服务器
# 方式 A：FTP 上传 theme/ 内容至 /wp-content/themes/zh-zenmo-law/（覆盖旧文件）
# 方式 B：WordPress 后台 → 外观 → 主题 → 上传主题 → 选择 zh-zenmo-law.zip
```

**注意**：`dist/` 和 `theme/` 均已加入 `.gitignore`，不纳入版本管理。每次修改代码后均需重新执行 `npm run deploy`。

---

## 新增页面标准流程

以新增一个签证子页面（如 EB-2 NIW）为例：

**1. 创建页面专属组件目录及文件**

在 `src/components/niw/` 下创建各模块组件（Hero、Categories、Process 等），参照同类页面（如 `src/components/eb23/`）的结构和命名规范。

**2. 创建页面入口**

在 `src/pages/` 新建 `NIWPage.jsx`，页面组件只负责两件事：调用 `useSEO()` 注入 SEO 信息，以及按顺序编排各区块组件。Schema 数据应从 FAQ 组件的具名导出（`export const niwFAQCategories`）直接生成，避免双份维护。

```jsx
import { useSEO } from '@/hooks/useSEO'
import { niwFAQCategories } from '@/components/niw/NIWFAQ'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: niwFAQCategories.flatMap(cat =>
    cat.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    }))
  ),
}

export default function NIWPage() {
  useSEO({
    title: '页面标题',
    description: '页面描述...',
    canonical: '/immigration-law/niw',
    schema: [faqSchema, legalServiceSchema],
  })
  return (
    <>
      <NIWHero />
      {/* ... */}
    </>
  )
}
```

**3. 注册路由**

在 `src/App.jsx` 中用 `lazy()` 引入并添加 `<Route>`：

```jsx
const NIWPage = lazy(() => import('@/pages/NIWPage'))
// 在 Routes 中添加：
<Route path="/immigration-law/niw" element={<NIWPage />} />
```

**4. 更新导航入口**

根据需要在 `src/components/layout/Header.jsx` 的 `navItems` 数组中添加对应条目，并在相关落地页（如 `GreenCardSection.jsx`）中补充链接卡片。

---

## 共享组件系统

`src/components/shared/` 目录下的组件是所有签证/绿卡子页面共用的区块，通过 props 接受数据，不包含任何硬编码的业务内容。新增页面时应优先复用这些组件，而非重新实现。

### 移民类子页面共享组件

| 组件文件 | 用途 | 主要 Props |
|---|---|---|
| `Immigration-Timeline.jsx` | 申请时间线（深色背景，交错卡片布局） | `title` `subtitle` `steps[]` `cols` `bleed` |
| `Immigration-ServiceProcess.jsx` | 分阶段服务流程（多 Phase + Step 结构） | `title` `subtitle` `phases[]` |
| `Immigration-WhyZenmo.jsx` | 为什么选择阡陌（6 格图标卡片） | `title` `subtitle` `reasons[]` |
| `Immigration-EmployerServices.jsx` | 雇主支持服务（4 列服务列表） | `title` `mainDescription` `sideNote` `services[]` `sectionLabel` |
| `Immigration-MidCTA.jsx` | 页面中段 CTA 模块 | `badge` `title` `description` |
| `FAQ.jsx` | 分类标签页 FAQ | `title` `subtitle` `categories[]` |
| `CTASection.jsx` | 页面底部 CTA 区块 | `title` `description` `buttonText` `buttonLink` |

### 各页面薄包装模式

每个页面的业务组件（如 `H1BTimeline.jsx`）只负责准备 data 并传入对应的共享组件，不包含任何 UI 逻辑：

```jsx
// src/components/h1b/H1BTimeline.jsx
import TimelineSection from '@/components/shared/Immigration-Timeline'

const steps = [ /* 数据 */ ]

export default function H1BTimeline() {
  return <TimelineSection title="..." subtitle="..." steps={steps} cols={7} bleed="30%" />
}
```

### Timeline 组件参数说明

`cols` 默认值为 `6`，`bleed` 默认值为 `28%`。当步骤数量不等于 6 时需显式传入 `cols`：

| 页面 | steps 数量 | cols | bleed |
|---|---|---|---|
| H-1B | 7 | `7`（显式传入） | `"30%"` |
| L-1 | 6 | 使用默认值 | 使用默认值 |
| O-1 | 6 | 使用默认值 | 使用默认值 |
| EB-2/3 | 6 | 使用默认值 | 使用默认值 |

### FAQ 具名导出规范

每个 FAQ 组件须同时具名导出 `categories` 数组，供页面组件自动生成 JSON-LD Schema，避免 FAQ 内容在组件和 Schema 之间双份维护：

```jsx
// src/components/eb23/EB23FAQ.jsx
export const eb23FAQCategories = [ /* 数据 */ ]

export default function EB23FAQ() {
  return <ImmigrationFAQ categories={eb23FAQCategories} ... />
}

// src/pages/EB23Page.jsx
import { eb23FAQCategories } from '@/components/eb23/EB23FAQ'

const faqSchema = {
  mainEntity: eb23FAQCategories.flatMap(cat =>
    cat.faqs.map(faq => ({ /* schema */ }))
  ),
}
```

### 设计 Token

颜色和阴影 token 统一在 `tailwind.config.js` 中定义，组件中应使用 token 类名，不得直接写裸 hex 值：

| Token | 色值 | 用途 |
|---|---|---|
| `zenmo-btn1` | `#4F47E6` | 品牌主紫，交互元素（按钮、tab 激活、phase 标签） |
| `zenmo-btn2` | `#7B3AED` | 品牌强调紫，装饰元素（Timeline 节点、图标底色、badge 文字） |
| `zenmo-secondary` | `#0F172A` | 标题文字、深色背景（Timeline section 背景） |
| `zenmo-text` | `#334156` | 正文文字 |
| `zenmo-desc-gray` | `#94A3B8` | 说明性次要文字 |
| `zenmo-light-bg` | `#F8FAFC` | 浅色区块背景 |
| `zenmo-subheading` | `#CBD5E1` | 深色背景上的次要文字、步骤编号 |
| `zenmo-badge-text` | `#C4B0FF` | Hero badge 浅紫文字 |
| `zenmo-timeline-label` | `#7B9EFF` | Timeline 步骤日期标签 |
| `shadow-zenmo-sm` | `0 1px 8px rgba(15,23,42,0.05)` | 轻量卡片阴影（WhyZenmo、ServiceProcess） |
| `shadow-zenmo-md` | `0 2px 12px rgba(15,23,42,0.05)` | 标准卡片阴影（Categories、FAQ 容器） |
| `shadow-zenmo-lg` | `0 2px 20px rgba(15,23,42,0.06)` | 悬浮容器阴影（MidCTA 卡片） |

---

## SEO 管理

每个页面通过 `src/hooks/useSEO.js` Hook 统一管理 `<title>`、`<meta>`、Canonical、Open Graph、Twitter Card 及 JSON-LD 结构化数据。

### 使用方式

```jsx
useSEO({
  title: '页面标题',           // 最终格式：{title} | 阡陌律师事务所
  description: '页面描述',     // 建议 60–80 中文字符
  canonical: '/your-path',    // 不传则自动使用 window.location.pathname
  ogImage: '/images/og/page.jpg', // 须为 1200×630px；不传则不注入 og:image 相关标签
  schema: [faqSchema, legalServiceSchema], // JSON-LD，单个对象或数组均可
  noindex: false,             // 设为 true 用于 404 等不需索引的页面
  type: 'website',            // og:type，文章页传 'article'
})
```

### OG 图片说明

当前网站**尚未配置专属 OG 图片**。`ogImage` 不传时，`useSEO` 不会注入任何 `og:image` 标签（不使用 logo 作为 fallback，避免比例不符导致社交平台裁切变形）。Twitter Card 在无图时自动降为 `summary` 模式。

日后为各页面配置 OG 图时，将 `1200×630` 的图片放入 `public/images/og/`，并在对应页面的 `useSEO()` 调用中传入 `ogImage` 路径即可，其余标签（`og:image:width`、`og:image:height`、`og:image:alt`、`twitter:image`、`twitter:card`）会自动注入。

### 结构化数据（JSON-LD Schema）

每个签证/绿卡页面注入两个 Schema：

- **`FAQPage`**：由 FAQ 组件的具名导出数组自动生成，内容与页面渲染内容始终保持一致
- **`LegalService`**：描述该页面对应的法律服务，包含服务名称、URL、语言、地址等

Schema 对象定义在各 `*Page.jsx` 文件顶部（模块级常量，不在组件函数体内），传入 `useSEO()` 的 `schema` 参数。

### Cleanup 机制

`useSEO` 在路由切换时只清理 `<script type="application/ld+json">` 标签；`<meta>` 和 `<link>` 标签由下一页的 effect 就地更新（upsert 模式），避免切换过程中出现 canonical / description 短暂缺失的窗口。

---

## Git 提交规范

本项目使用语义化提交信息（Conventional Commits）：

| 前缀 | 适用场景 | 示例 |
|------|---------|------|
| `feat` | 新增功能或页面 | `feat: 新增 EB-2/3 绿卡申请页` |
| `fix` | 修复 bug | `fix: 修复移动端菜单关闭逻辑` |
| `style` | 样式调整（不影响逻辑） | `style: 统一卡片阴影为 shadow-zenmo-md` |
| `refactor` | 代码重构 | `refactor: 提取 FAQ 具名导出规范` |
| `seo` | SEO 相关修改 | `seo: 更新 H-1B 页 meta description` |
| `content` | 文案内容修改 | `content: 更新 EB-2/3 费用表数据` |
| `chore` | 构建配置、依赖更新 | `chore: 升级 framer-motion 至 v11.4` |
| `docs` | 文档更新 | `docs: 更新 README 共享组件章节` |

---

## 注意事项

**图片路径**

图片通过 `src/lib/assetUrl.js` 的 `assetUrl()` 函数处理，开发环境读取 `public/images/`，生产环境自动拼接 WordPress 主题路径。新增图片放入 `public/images/` 对应子目录，代码中使用 `assetUrl('/images/your-image.jpg')` 引用。

**动画参数**

Framer Motion 的 `fadeUp` 动画参数通过 `src/lib/motion.js` 统一导出，各组件应使用工具函数而非重复定义相同的 `initial / whileInView / viewport / transition` 对象：

```js
// src/lib/motion.js
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

// 组件中使用
<motion.h2 {...fadeUp()}>标题</motion.h2>
<motion.p  {...fadeUp(0.08)}>描述</motion.p>
```

**排期数据**

绿卡排期数据维护在独立的 Insights 页面（[绿卡排期数据](https://zh.zenmolaw.com/insights/绿卡排期数据/)），签证子页面中的排期说明应链接至该页面，不在页面内维护具体排期数字，避免数据过期。
