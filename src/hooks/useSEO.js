import { useEffect } from 'react'

const SITE_NAME   = '阡陌律师事务所'
const BASE_URL    = 'https://zh.zenmolaw.com'

/**
 * useSEO — 页面级 SEO 管理 Hook
 *
 * @param {object} options
 * @param {string} options.title        页面标题（最终格式：{title} | 阡陌律师事务所）
 * @param {string} options.description  页面描述（建议 60–80 中文字符）
 * @param {string} [options.ogImage]    OG 图片路径（留空使用全站默认图）
 * @param {string} [options.canonical]  Canonical URL（留空自动使用当前路径）
 * @param {object|object[]} [options.schema]  JSON-LD 结构化数据（单个或数组）
 * @param {boolean} [options.noindex]   设为 true 时注入 noindex, nofollow（如 404 页面）
 */
export function useSEO({ title, description, ogImage, canonical, schema, noindex } = {}) {
  useEffect(() => {
    const base         = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
    const DEFAULT_IMG  = `${base}/images/Logos/Website-logo.png`

    const fullTitle    = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const image        = ogImage ? `${BASE_URL}${ogImage}` : `${BASE_URL}${DEFAULT_IMG}`
    const canonicalUrl = canonical
      ? `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`

    // ── Title ──────────────────────────────────────────────────────────────
    document.title = fullTitle

    // ── Helper: upsert a <meta> tag（带 data-useseo 标记统一管理） ──────────
    function setMeta(selector, attr, value) {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [attrName, attrVal] = selector.match(/\[(.+?)="(.+?)"\]/).slice(1)
        el.setAttribute(attrName, attrVal)
        el.setAttribute('data-useseo', 'true')
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // ── Helper: upsert a <link> tag ────────────────────────────────────────
    function setLink(rel, href) {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        el.setAttribute('data-useseo', 'true')
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Robots ─────────────────────────────────────────────────────────────
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow')

    // ── Description ────────────────────────────────────────────────────────
    if (description) {
      setMeta('meta[name="description"]',         'content', description)
    }

    // ── Canonical ──────────────────────────────────────────────────────────
    setLink('canonical', canonicalUrl)

    // ── Open Graph ────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',          'content', fullTitle)
    setMeta('meta[property="og:site_name"]',      'content', SITE_NAME)
    setMeta('meta[property="og:type"]',           'content', 'website')
    setMeta('meta[property="og:url"]',            'content', canonicalUrl)
    setMeta('meta[property="og:image"]',          'content', image)
    setMeta('meta[property="og:locale"]',         'content', 'zh_CN')
    if (description) {
      setMeta('meta[property="og:description"]',  'content', description)
    }

    // ── Twitter Card ──────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]',          'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]',         'content', fullTitle)
    setMeta('meta[name="twitter:image"]',         'content', image)
    if (description) {
      setMeta('meta[name="twitter:description"]', 'content', description)
    }

    // ── JSON-LD Schema ────────────────────────────────────────────────────
    document.querySelectorAll('script[data-useseo="true"]').forEach(el => el.remove())

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema]
      schemas.forEach(s => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-useseo', 'true')
        script.textContent = JSON.stringify(s)
        document.head.appendChild(script)
      })
    }

    // ── Cleanup on unmount ────────────────────────────────────────────────
    return () => {
      document.querySelectorAll('[data-useseo="true"]').forEach(el => el.remove())
    }
  }, [title, description, ogImage, canonical, schema, noindex])
}
