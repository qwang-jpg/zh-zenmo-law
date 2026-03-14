/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'zenmo-secondary':       '#0F172A',
        'zenmo-topbar':          '#0D1629',
        'zenmo-btn1':            '#4F47E6',
        'zenmo-btn2':            '#7B3AED',
        'zenmo-icon':            '#4C67E0',
        'zenmo-desc-gray':       '#94A3B8',
        'zenmo-light-bg':        '#F8FAFC',
        'zenmo-footer-text':     '#ABB9C5',
        'zenmo-text':            '#334156',
        'zenmo-subheading':      '#CBD5E1',
        'zenmo-hero-overlay':    '#192133',
        'zenmo-number-bg':       '#10192C',
        'zenmo-hamburger':       '#467FF7',
        'zenmo-number-color':    '#D1D9F0',
        'zenmo-desc-dark':       '#475569',
      },
      fontFamily: {
        noto: ['"Noto Sans SC"', '"Noto Sans"', 'sans-serif'],
        sans: ['"Noto Sans SC"', '"Noto Sans"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
