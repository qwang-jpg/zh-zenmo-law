# 阡陌律师事务所 — 中文官网

> **zh-zenmo-law** · React 18 SPA 嵌入 WordPress 主题  
> 线上地址：[zh.zenmolaw.com](https://zh.zenmolaw.com)

---

## 目录

1. [项目概览](#项目概览)
2. [技术栈](#技术栈)
3. [目录结构](#目录结构)
4. [本地开发环境搭建](#本地开发环境搭建)
5. [常用开发指令](#常用开发指令)
6. [构建与部署](#构建与部署)
7. [SEO 管理](#seo-管理)
8. [Git 备份与版本管理流程](#git-备份与版本管理流程)
9. [注意事项](#注意事项)

---

## 项目概览

本项目是阡陌律师事务所的中文官网，采用 **React SPA + WordPress 主题**的混合架构：

- **前端**：React 18 应用，由 Vite 构建，输出到 `dist/`
- **后端宿主**：WordPress 6.x，仅作为静态资产宿主和路由入口，不使用任何 WP 内容管理功能
- **部署方式**：将构建产物打包为 WordPress 主题（`theme/`），上传至服务器 `/wp-content/themes/zh-zenmo-law/`

SPA 路由由 React Router DOM 接管，WordPress 通过 `functions.php` 的 `template_redirect` 钩子将所有前台请求转发至 `index.php`（即 React 挂载点），实现完整的客户端路由。

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
| 包管理器 | npm | >=9.x |

---

## 目录结构

```
zh-zenmo-law/
├── public/
│   └── images/                  # 静态图片资源
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
│   ├── pages/                   # 页面组件
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ImmigrationPage.jsx
│   │   ├── H1BPage.jsx
│   │   ├── BusinessPage.jsx
│   │   ├── IndividualPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── components/
│   │   ├── layout/              # Header / Footer / PageLayout
│   │   ├── shared/              # 跨页面复用组件（CTASection / ServiceProcess / WhyZenmo）
│   │   ├── home/                # 首页专属组件
│   │   ├── about/               # 关于我们专属组件
│   │   ├── immigration/         # 移民法律专属组件
│   │   ├── h1b/                 # H-1B 专属组件
│   │   ├── business/            # 商业法律专属组件
│   │   ├── individual/          # 个人法务专属组件
│   │   └── contact/             # 联系我们专属组件
│   │
│   ├── hooks/
│   │   └── useSEO.js            # 页面级 SEO 管理 Hook
│   │
│   └── lib/
│       └── assetUrl.js          # 图片路径工具函数
│
├── scripts/
│   ├── deploy.js                # 一键构建+打包脚本
│   └── package.js               # WordPress 主题打包脚本
│
├── dist/                        # Vite 构建产物（gitignore）
├── theme/                       # 打包后的 WP 主题（gitignore）
│
├── index.html                   # Vite HTML 入口（开发环境）
├── index.php                    # WordPress 主题 HTML 入口
├── functions.php                # WordPress 主题功能函数
├── style.css                    # WordPress 主题声明文件
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 本地开发环境搭建

### 前置要求

- Node.js >= 18.x（推荐使用 [nvm](https://github.com/nvm-sh/nvm) 管理版本）
- npm >= 9.x

### 步骤

**1. 克隆仓库**

```bash
git clone https://github.com/你的组织/zh-zenmo-law.git
cd zh-zenmo-law
```

**2. 安装依赖**

```bash
npm install
```

**3. 启动开发服务器**

```bash
npm run dev
```

浏览器访问 `http://localhost:5173`，支持热更新（HMR）。

> **注意**：开发环境下图片路径以 `/` 开头，直接读取 `public/images/`，无需 WordPress 环境即可预览所有页面和组件。

---

## 常用开发指令

| 指令 | 说明 |
|------|------|
| `npm run dev` | 启动本地开发服务器（端口 5173） |
| `npm run build` | 构建生产产物至 `dist/` |
| `npm run preview` | 本地预览 `dist/` 构建结果 |
| `npm run package` | 仅执行主题打包（需先 build） |
| `npm run deploy` | 一键执行：build → 主题打包 |
| `npm run lint` | ESLint 代码检查 |

---

## 构建与部署

### 完整部署流程

**第一步：一键构建打包**

```bash
npm run deploy
```

执行顺序：
1. `vite build` — 编译 React 应用，输出至 `dist/`，同时生成 `dist/.vite/manifest.json`
2. `node scripts/package.js` — 将 WP 主题必要文件 + `dist/` + `images/` 复制至 `theme/`

**第二步：压缩主题文件夹**

```bash
# macOS / Linux
cd theme && zip -r ../zh-zenmo-law.zip . && cd ..

# Windows（PowerShell）
Compress-Archive -Path theme\* -DestinationPath zh-zenmo-law.zip
```

**第三步：上传至服务器**（二选一）

- **FTP 上传**：将 `theme/` 文件夹内容上传至服务器 `/wp-content/themes/zh-zenmo-law/`，覆盖旧文件
- **WordPress 后台**：外观 → 主题 → 上传主题 → 选择 `zh-zenmo-law.zip`

**第四步：激活主题**（首次部署时）

WordPress 后台 → 外观 → 主题 → 激活「Zenmo Law 阡陌律师事务所」

### 主题文件结构（打包后）

```
theme/
├── style.css          # WP 主题声明（必须）
├── index.php          # SPA HTML 入口（必须）
├── functions.php      # 资产注册 + SPA 路由拦截
├── dist/
│   ├── assets/        # JS / CSS 构建产物（哈希文件名）
│   └── .vite/
│       └── manifest.json   # 入口文件映射（functions.php 依赖）
└── images/            # 图片资源
```

### 注意事项

- `dist/` 和 `theme/` 均已加入 `.gitignore`，不纳入版本管理
- 每次修改代码后需重新执行 `npm run deploy` 生成新的构建产物
- `manifest.json` 是 `functions.php` 识别入口 JS/CSS 的依据，不可删除

---

## SEO 管理

每个页面通过 `useSEO` Hook 管理标题、描述、Open Graph 及 Canonical 标签。

### 使用方式

```jsx
import { useSEO } from '@/hooks/useSEO'

export default function YourPage() {
  useSEO({
    title: '页面标题',              // 最终格式：页面标题 | 阡陌律师事务所
    description: '页面描述...',     // 建议 120–160 字符
    // ogImage: '/images/og/xxx.jpg' // 留空则使用全站默认图（当前为 Logo）
  })
  return <> ... </>
}
```

### 全站默认 OG 图片

当前使用 Logo 作为临时方案，路径配置在 `src/hooks/useSEO.js` 顶部：

```js
const DEFAULT_IMG = '/wp-content/themes/zh-zenmo-law/images/Logos/Website-logo.png'
```

**日后替换为专属 OG 图（建议 1200×630px）时，只需修改此一处，所有页面自动生效。**

---

## Git 备份与版本管理流程

### 初始化仓库（仅首次）

```bash
git init
git remote add origin https://github.com/你的组织/zh-zenmo-law.git
git branch -M main
git push -u origin main
```

### 日常开发提交规范

本项目使用语义化提交信息（Conventional Commits）：

| 前缀 | 适用场景 | 示例 |
|------|---------|------|
| `feat` | 新增功能或页面 | `feat: 新增 H-1B 时间线组件` |
| `fix` | 修复 bug | `fix: 修复移动端菜单关闭逻辑` |
| `style` | 样式调整（不影响逻辑） | `style: 统一按钮圆角为 rounded-[10px]` |
| `refactor` | 代码重构 | `refactor: 提取共享 SVG 图标组件` |
| `seo` | SEO 相关修改 | `seo: 更新移民页 meta description` |
| `content` | 文案内容修改 | `content: 更新 H-1B 费用表数据` |
| `chore` | 构建配置、依赖更新 | `chore: 升级 framer-motion 至 v11.4` |
| `docs` | 文档更新 | `docs: 更新 README 部署流程` |

### 标准提交流程

```bash
# 1. 查看当前改动
git status

# 2. 暂存改动（精确暂存推荐用文件路径，避免误提交）
git add src/components/h1b/H1BTimeline.jsx
# 或全部暂存
git add .

# 3. 提交
git commit -m "feat: 新增 H-1B 申请时间线桌面端交错布局"

# 4. 推送到远端
git push origin main
```

### 功能分支工作流（多人协作或大功能开发时）

```bash
# 从 main 创建功能分支
git checkout -b feat/insights-page

# ... 开发 ...

# 提交并推送分支
git add .
git commit -m "feat: 新增最新资讯页面"
git push origin feat/insights-page

# 在 GitHub 创建 Pull Request，审核后合并至 main
# 合并后删除功能分支
git branch -d feat/insights-page
git push origin --delete feat/insights-page
```

### 版本标签（正式上线时打标签）

```bash
# 打标签
git tag -a v1.0.0 -m "正式上线版本 v1.0.0"

# 推送标签至远端
git push origin v1.0.0

# 查看所有标签
git tag -l
```

### 回滚操作

```bash
# 查看提交历史
git log --oneline -20

# 回滚到某个版本（不丢失本地修改）
git revert <commit-hash>

# 强制回滚（谨慎，会丢失之后的提交）
git reset --hard <commit-hash>
git push origin main --force
```

### `.gitignore` 关键配置

```
node_modules/
dist/
theme/
*.zip
.DS_Store
*.local
```

---

## 注意事项

**图片路径**

图片通过 `src/lib/assetUrl.js` 的 `assetUrl()` 函数处理，会根据环境自动拼接正确路径：

- 开发环境：直接读取 `public/images/`
- 生产环境：拼接 WordPress 主题路径 `/wp-content/themes/zh-zenmo-law/images/`

新增图片时，将文件放入 `public/images/` 对应子目录，代码中使用 `assetUrl('/images/你的图片.jpg')` 引用。

**新增页面步骤**

1. 在 `src/pages/` 新建页面组件，调用 `useSEO()` 配置 SEO 信息
2. 在 `src/App.jsx` 的 `Routes` 中添加对应 `<Route>`，并用 `lazy()` 包裹
3. 如需加入导航，在 `src/components/layout/Header.jsx` 的 `navItems` 数组中添加条目

**依赖升级**

```bash
# 查看可升级的依赖
npm outdated

# 升级单个依赖
npm install framer-motion@latest

# 升级所有依赖（谨慎，建议逐个测试）
npm update
```
