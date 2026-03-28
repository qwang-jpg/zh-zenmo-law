/**
 * useSEO — 页面级 SEO 管理 Hook
 *
 * 用法（在每个 Page 组件顶层调用）：
 *
 *   import { useSEO } from '@/hooks/useSEO'
 *
 *   export default function HomePage() {
 *     useSEO({
 *       title: '首页',
 *       description: '阡陌律师事务所立足纽约曼哈顿...',
 *     })
 *     return <> ... </>
 *   }
 *
 * 说明：
 *  - title 留空时直接使用 SITE_NAME 作为文档标题
 *  - ogImage 填写相对于网站根目录的完整路径（如有独立 OG 图时使用）
 *  - noindex 仅对不应被收录的页面（如 404）设为 true
 *  - 当前 DEFAULT_IMG 使用 Logo 图片作为默认 OG 图，
 *    日后准备好专属 1200×630 的 OG 图片后，
 *    将 DEFAULT_IMG 替换为对应路径即可，无需改动各页面
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ── 全站常量 ──────────────────────────────────────────────────────────────────
const SITE_NAME    = '阡陌律师事务所'
const SITE_URL     = 'https://zh.zenmolaw.com'
const DEFAULT_DESC = '阡陌律师事务所立足纽约曼哈顿，为个人及企业提供美国移民、商业及个人法律服务。专注H-1B、绿卡、公司设立等法律事务。'

// 当前使用 Logo 作为 OG 图片临时方案
// 待专属 OG 图（1200×630px）准备好后替换此路径即可
const DEFAULT_IMG  = '/wp-content/themes/zh-zenmo-law/images/Logos/Website-logo.png'

// ── 工具函数 ──────────────────────────────────────────────────────────────────

/**
 * 设置或更新 <meta> 标签
 * @param {string} key     - name 或 property 的值
 * @param {string} content - meta content
 * @param {'name'|'property'} attr - 属性选择器类型
 */
function setMeta(key, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * 设置或更新 <link rel="canonical">
 */
function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * @param {object}  options
 * @param {string}  [options.title]       - 页面标题（不含站名）
 * @param {string}  [options.description] - 页面描述（建议 120–160 字符）
 * @param {string}  [options.ogImage]     - OG 图片完整路径（留空则使用 DEFAULT_IMG）
 * @param {string}  [options.ogType]      - OG 类型，默认 'website'
 * @param {boolean} [options.noindex]     - 是否禁止搜索引擎收录，默认 false
 */
export function useSEO({
  title,
  description,
  ogImage,
  ogType  = 'website',
  noindex = false,
} = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle    = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const desc         = description || DEFAULT_DESC
    const canonicalUrl = `${SITE_URL}${pathname}`
    const imageUrl     = `${SITE_URL}${ogImage || DEFAULT_IMG}`

    // ── 文档标题 ──────────────────────────────────────────────────────────────
    document.title = fullTitle

    // ── 基础 Meta ─────────────────────────────────────────────────────────────
    setMeta('description',   desc)
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    // ── Open Graph ────────────────────────────────────────────────────────────
    setMeta('og:title',       fullTitle,    'property')
    setMeta('og:description', desc,         'property')
    setMeta('og:url',         canonicalUrl, 'property')
    setMeta('og:image',       imageUrl,     'property')
    setMeta('og:type',        ogType,       'property')
    setMeta('og:locale',      'zh_CN',      'property')
    setMeta('og:site_name',   SITE_NAME,    'property')

    // ── Twitter Card ──────────────────────────────────────────────────────────
    setMeta('twitter:card',        'summary_large_image')
    setMeta('twitter:title',       fullTitle)
    setMeta('twitter:description', desc)
    setMeta('twitter:image',       imageUrl)

    // ── Canonical ─────────────────────────────────────────────────────────────
    setCanonical(canonicalUrl)
  }, [title, description, ogImage, ogType, noindex, pathname])
}
