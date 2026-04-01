import { useEffect } from 'react'

const SITE_NAME = '阡陌律师事务所'
const BASE_URL  = 'https://zh.zenmolaw.com'

/**
 * useSEO — 页面级 SEO 管理 Hook
 *
 * @param {object}          options
 * @param {string}          options.title        页面标题（最终格式：{title} | 阡陌律师事务所）
 * @param {string}          options.description  页面描述（建议 60–80 中文字符）
 * @param {string}          [options.ogImage]    OG 图片路径（1200×630，不传则不注入 og:image 标签）
 * @param {string}          [options.canonical]  Canonical URL（留空自动使用当前路径）
 * @param {object|object[]} [options.schema]     JSON-LD 结构化数据（单个或数组）
 * @param {boolean}         [options.noindex]    设为 true 时注入 noindex, nofollow（如 404 页面）
 * @param {string}          [options.type]       og:type，默认 'website'；文章页传 'article'
 */
export function useSEO({
  title,
  description,
  ogImage,
  canonical,
  schema,
  noindex,
  type = 'website',
} = {}) {
  // JSON.stringify 确保 schema 对象内容变化时才重跑 effect，
  // 避免调用方在函数体内定义 schema 导致每次 render 都触发
  const schemaKey = JSON.stringify(schema)

  useEffect(() => {
    const base         = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
    const fullTitle    = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const canonicalUrl = canonical
      ? `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`

    // ── Title ───────────────────────────────────────────────────────────────
    document.title = fullTitle

    // ── Helper: upsert <meta>（带 data-useseo 标记统一管理） ────────────────
    function setMeta(selector, attr, value) {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const match = selector.match(/\[(.+?)="(.+?)"\]/)
        if (!match) return           // guard: 非预期格式不抛错，直接跳过
        el.setAttribute(match[1], match[2])
        el.setAttribute('data-useseo', 'true')
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // ── Helper: 移除单个 <meta>（用于清理上一页遗留的 og:image 等） ─────────
    function removeMeta(selector) {
      document.querySelector(selector)?.remove()
    }

    // ── Helper: upsert <link> ───────────────────────────────────────────────
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

    // ── Robots ──────────────────────────────────────────────────────────────
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow')

    // ── Description ─────────────────────────────────────────────────────────
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
    }

    // ── Canonical ───────────────────────────────────────────────────────────
    setLink('canonical', canonicalUrl)

    // ── Open Graph ──────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',     'content', fullTitle)
    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME)
    setMeta('meta[property="og:type"]',      'content', type)
    setMeta('meta[property="og:url"]',       'content', canonicalUrl)
    setMeta('meta[property="og:locale"]',    'content', 'zh_CN')
    if (description) {
      setMeta('meta[property="og:description"]', 'content', description)
    }

    // og:image：只在明确传入图片路径时注入
    // 不使用 logo 作为 fallback —— 尺寸不符的图片比不传更差（社交平台会裁切变形）
    if (ogImage) {
      const imageUrl = `${BASE_URL}${ogImage}`
      setMeta('meta[property="og:image"]',        'content', imageUrl)
      setMeta('meta[property="og:image:width"]',  'content', '1200')
      setMeta('meta[property="og:image:height"]', 'content', '630')
      setMeta('meta[property="og:image:alt"]',    'content', fullTitle)
    } else {
      // 清理上一页可能遗留的 og:image 标签（路由切换场景）
      removeMeta('meta[property="og:image"]')
      removeMeta('meta[property="og:image:width"]')
      removeMeta('meta[property="og:image:height"]')
      removeMeta('meta[property="og:image:alt"]')
    }

    // ── Twitter Card ────────────────────────────────────────────────────────
    // 无图时降为 summary（纯文字卡片），有图时使用 summary_large_image
    setMeta('meta[name="twitter:card"]',  'content', ogImage ? 'summary_large_image' : 'summary')
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    if (description) {
      setMeta('meta[name="twitter:description"]', 'content', description)
    }
    if (ogImage) {
      setMeta('meta[name="twitter:image"]', 'content', `${BASE_URL}${ogImage}`)
    } else {
      removeMeta('meta[name="twitter:image"]')
    }

    // ── JSON-LD Schema ───────────────────────────────────────────────────────
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

    // ── Cleanup on unmount ───────────────────────────────────────────────────
    // 只清理 JSON-LD script 标签；meta/link 标签保留并由下一页的 effect 就地更新，
    // 避免路由切换期间出现 canonical/description 缺失的短暂窗口
    return () => {
      document.querySelectorAll('script[data-useseo="true"]').forEach(el => el.remove())
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, ogImage, canonical, schemaKey, noindex, type])
}
