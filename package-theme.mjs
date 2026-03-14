import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = __dirname
const DIST = path.join(ROOT, 'dist')
const OUT  = path.join(ROOT, 'theme')

// ── 1. 检查 dist/ 是否存在 ────────────────────────
if (!fs.existsSync(DIST)) {
  console.error('❌  dist/ 不存在，请先运行 npm run build')
  process.exit(1)
}

// ── 2. 清空并重建 theme/ ──────────────────────────
if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true })
fs.mkdirSync(OUT)

// ── 3. 复制 dist/ 所有内容平铺到 theme/ 根目录 ───
//      dist/assets/ → theme/assets/
//      dist/index.html → theme/index.html
//      dist/images/ → theme/images/ （如有）
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d)
  }
}
copyDir(DIST, OUT)

// ── 4. 写入 WordPress 主题必要文件 ───────────────

// style.css — WordPress 识别主题的必要文件
fs.writeFileSync(path.join(OUT, 'style.css'), `/*
Theme Name: Zenmo Law 阡陌律师事务所
Theme URI: https://zh.zenmolaw.com
Author: Zenmo Law
Author URI: https://zenmolaw.com
Description: 阡陌律师事务所官方中文网站主题。基于React构建的单页应用。
Version: 1.0.0
License: Proprietary
Text Domain: zenmo-law
Requires at least: 6.0
Requires PHP: 7.4
*/
`)

// index.php — WordPress 要求必须存在，实际路由由 functions.php 处理
fs.writeFileSync(path.join(OUT, 'index.php'), `<?php
// 阡陌律师事务所 - React SPA
// WordPress 要求此文件存在，实际页面由 functions.php 中的 template_redirect 处理。
`)

// functions.php — 直接输出 Vite 构建好的 index.html，与英文网站方案一致
fs.writeFileSync(path.join(OUT, 'functions.php'), `<?php
/**
 * 阡陌律师事务所 - WordPress Theme Functions
 * 采用与英文站相同的方案：直接输出 Vite 构建的 index.html
 */

// ── 1. 移除不必要的 WordPress head 标签 ──────────
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// ── 2. SPA 路由 — 所有前台请求输出 index.html ────
//      index.html 已由 Vite 构建，内含正确的 /wp-content/themes/zh-zenmo-law/assets/... 路径
function zenmo_zh_load_react() {
    // 放行 REST API 与 AJAX，避免破坏 WordPress 后台功能
    if (defined('REST_REQUEST') && REST_REQUEST) return;
    if (wp_doing_ajax()) return;

    $index = get_template_directory() . '/index.html';
    if (file_exists($index)) {
        echo file_get_contents($index);
        exit;
    }
}
add_action('template_redirect', 'zenmo_zh_load_react');

// ── 3. 主题基础支持 ───────────────────────────────
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('html5', ['script', 'style']);
});
`)

// ── 5. 完成 ───────────────────────────────────────
console.log('✅  打包完成！')
console.log('📁  输出目录：theme/')
console.log('👉  将 theme/ 文件夹重命名为 zh-zenmo-law，压缩为 zh-zenmo-law.zip 后上传到 WordPress')
console.log('')
console.log('⚠️  注意：上传前确认 vite.config.js 中 base 与主题文件夹名一致：')
console.log('    base: \'/wp-content/themes/zh-zenmo-law/\'')
