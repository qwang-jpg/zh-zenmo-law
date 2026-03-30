/**
 * Resolves a public-folder image path using Vite's BASE_URL.
 * In production: /wp-content/themes/zh-zenmo-law/images/...
 * In dev:        /images/...
 *
 * @param {string} path  - Must start with '/', e.g. '/images/Backgrounds/Home-background.jpeg'
 */
export function assetUrl(path) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${base}${path}`
}
