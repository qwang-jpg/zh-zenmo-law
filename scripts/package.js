/**
 * Zenmo Law 阡陌律师事务所
 * 主题打包脚本 - 只复制 WordPress 运行所需文件到 zh-zenmo-law/ 文件夹
 * 用法: node scripts/package.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT   = path.resolve(__dirname, '..')
const THEME  = path.resolve(ROOT, 'zh-zenmo-law')

// ── 工具函数 ──────────────────────────────────────────────────────────────────

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  ⚠ 跳过（不存在）: ${src}`)
    return
  }
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath)
  }
}

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`  ✗ 文件不存在: ${src}`)
    process.exit(1)
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
}

function countFiles(dir) {
  if (!fs.existsSync(dir)) return 0
  let count = 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    count += entry.isDirectory()
      ? countFiles(path.join(dir, entry.name))
      : 1
  }
  return count
}

// ── 检查 dist/ 是否存在且包含 manifest.json ───────────────────────────────────

const distDir      = path.join(ROOT, 'dist')
const manifestFile = path.join(distDir, '.vite', 'manifest.json')

if (!fs.existsSync(distDir)) {
  console.error('\n✗ 找不到 dist/，请先运行 npm run build\n')
  process.exit(1)
}

if (!fs.existsSync(manifestFile)) {
  console.error('\n✗ 找不到 dist/.vite/manifest.json')
  console.error('  请确认 vite.config.js 中 build.manifest 已设为 true，然后重新运行 npm run build\n')
  process.exit(1)
}

// ── 清空并重建 zh-zenmo-law/ ──────────────────────────────────────────────────

console.log('\n📦 开始打包 WordPress 主题...\n')

if (fs.existsSync(THEME)) {
  fs.rmSync(THEME, { recursive: true, force: true })
  console.log('  ✓ 清空旧的 zh-zenmo-law/ 文件夹')
}
fs.mkdirSync(THEME, { recursive: true })

// ── 复制必要文件 ──────────────────────────────────────────────────────────────

// WordPress 主题必须文件
copyFile(path.join(ROOT, 'style.css'),     path.join(THEME, 'style.css'))
copyFile(path.join(ROOT, 'index.php'),     path.join(THEME, 'index.php'))
copyFile(path.join(ROOT, 'functions.php'), path.join(THEME, 'functions.php'))
console.log('  ✓ WordPress 主题文件 (style.css / index.php / functions.php)')

// dist/ 构建产物 — 整个文件夹复制，保留 dist/ 层级
copyDir(path.join(ROOT, 'dist'), path.join(THEME, 'dist'))
console.log(`  ✓ dist/ (${countFiles(path.join(ROOT, 'dist'))} 个文件)`)

// 验证 manifest.json 是否被正确复制
const copiedManifest = path.join(THEME, 'dist', '.vite', 'manifest.json')
if (!fs.existsSync(copiedManifest)) {
  console.error('\n✗ manifest.json 未能正确复制至 zh-zenmo-law/dist/.vite/，请检查 dist/ 目录\n')
  process.exit(1)
}
console.log('  ✓ manifest.json 验证通过')

// public/images/ 图片资源
copyDir(path.join(ROOT, 'public', 'images'), path.join(THEME, 'images'))
console.log(`  ✓ images/ (${countFiles(path.join(ROOT, 'public', 'images'))} 个文件)`)

// ── 完成 ──────────────────────────────────────────────────────────────────────

const total = countFiles(THEME)
console.log(`\n✅ 打包完成！共 ${total} 个文件`)
console.log(`   输出目录: zh-zenmo-law/`)
console.log(`\n📤 上传步骤:`)
console.log(`   1. 将 zh-zenmo-law/ 文件夹压缩为 zh-zenmo-law.zip`)
console.log(`      PowerShell: Compress-Archive -Path zh-zenmo-law -DestinationPath zh-zenmo-law.zip`)
console.log(`   2. 通过 WordPress 后台 → 外观 → 主题 → 上传主题`)
console.log(`   3. 或通过 FTP 上传至 /wp-content/themes/zh-zenmo-law/\n`)
