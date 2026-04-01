/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'zenmo-secondary':      '#0F172A',
        'zenmo-topbar':         '#0D1629',
        'zenmo-btn1':           '#4F47E6',
        'zenmo-btn2':           '#7B3AED',
        'zenmo-icon':           '#4C67E0',
        'zenmo-desc-gray':      '#94A3B8',
        'zenmo-light-bg':       '#F8FAFC',
        'zenmo-footer-text':    '#ABB9C5',
        'zenmo-text':           '#334156',
        'zenmo-subheading':     '#CBD5E1',
        'zenmo-hero-overlay':   '#192133',
        'zenmo-number-bg':      '#10192C',
        'zenmo-hamburger':      '#467FF7',
        'zenmo-number-color':   '#D1D9F0',
        'zenmo-desc-dark':      '#475569',
        // New tokens — previously hardcoded without names
        'zenmo-badge-text':     '#C4B0FF',  // Hero badge 文字浅紫色
        'zenmo-timeline-label': '#7B9EFF',  // Timeline 步骤日期标签
      },
      boxShadow: {
        // 三档阴影体系，底色统一使用 zenmo-secondary (#0F172A)
        // sm: 细边卡片内容区 (WhyZenmo card, ServiceProcess step)
        'zenmo-sm': '0 1px 8px rgba(15,23,42,0.05)',
        // md: 标准卡片 (Categories card, FAQ container, MidCTA inner)
        'zenmo-md': '0 2px 12px rgba(15,23,42,0.05)',
        // lg: 悬浮容器 (MidCTA 卡片整体)
        'zenmo-lg': '0 2px 20px rgba(15,23,42,0.06)',
      },
      fontFamily: {
        // Overrides Tailwind's default `sans` — use `font-sans` everywhere
        sans: ['"Noto Sans SC"', '"Noto Sans"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
