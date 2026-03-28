import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn, Globe } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'

const topBarItems = [
  { icon: 'weixin', text: 'ZENMOLAW' },
  { icon: 'phone',  text: '+1 (800) 696 - 8608' },
  { icon: 'email',  text: 'Contact@zenmolaw.com' },
  { icon: 'clock',  text: 'Mon - Fri: 9:00 - 18:00 EST' },
]

const navItems = [
  { label: '关于我们', path: '/about-us',        external: false },
  { label: '移民法律', path: '/immigration-law',  external: false },
  { label: '商业法律', path: '/business-law',     external: false },
  { label: '个人法务', path: '/individual-law',   external: false },
  { label: '最新资讯', path: 'https://zh.zenmolaw.com/insights/', external: true },
  { label: '联系我们', path: '/contact',          external: false },
]

const PORTAL_URL  = 'https://zenmolaw.com/portal'
const ENGLISH_URL = 'https://zenmolaw.com/'

function TopBarIcon({ type }) {
  const icons = {
    weixin: (
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-3.8-13-5.9-26.8-5.9-41.2 0-90.5 77.7-153.6 164-153.6zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.5 0-29-9.7-29-24.2.0-14.7 14.5-24.4 29-24.4zm-136.4 48.6c-14.5 0-29-9.7-29-24.2.0-14.7 14.5-24.4 29-24.4 14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-4.8 58.1-9.7l53.4 29-14.5-48.8C542.7 399.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6.0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.2 9.7 24.2 19.3.0 9.9-9.7 19.6-24.2 19.6zm136.4 0c-9.7 0-19.3-9.7-19.3-19.6.0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.2 9.7 24.2 19.3.0 9.9-9.7 19.6-24.2 19.6z" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
      </svg>
    ),
  }
  return icons[type] || null
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (item) =>
    !item.external && (
      location.pathname === item.path ||
      (item.path && item.path !== '/' && location.pathname.startsWith(item.path + '/'))
    )

  return (
    <>
      {/* ── Top Bar ──────────────────────────────────────── */}
      <div className="hidden md:block bg-zenmo-topbar w-full">
        <div className="max-w-content mx-auto flex items-center justify-between px-5 md:px-8 lg:px-0 min-h-[40px]">
          <div className="flex items-center gap-6 lg:gap-8">
            {topBarItems.map((item) => (
              <div key={item.icon} className="flex items-center gap-2 text-zenmo-subheading">
                <TopBarIcon type={item.icon} />
                <span className="text-xs">{item.text}</span>
              </div>
            ))}
          </div>
          <a
            href={ENGLISH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zenmo-subheading hover:text-white transition-colors"
          >
            <Globe size={14} strokeWidth={1.8} />
            <span className="text-xs">English</span>
          </a>
        </div>
      </div>

      {/* ── Nav Bar ──────────────────────────────────────── */}
      <div
        className="sticky top-0 z-50 bg-white w-full"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
      >
        <nav
          className="max-w-content mx-auto flex items-center justify-between px-5 md:px-8 lg:px-0 min-h-[70px]"
          aria-label="主导航"
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="阡陌律师事务所首页">
            <img
              src={assetUrl('/images/Logos/Website-logo.png')}
              alt="Zenmo Law 阡陌律师事务所"
              className="h-9 md:h-10 w-auto"
              width="160"
              height="40"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors duration-200 hover:text-zenmo-btn1 text-zenmo-text"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-zenmo-btn1 relative ${
                    isActive(item) ? 'text-zenmo-btn1' : 'text-zenmo-text'
                  }`}
                >
                  {item.label}
                  {isActive(item) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zenmo-btn1 rounded-full" />
                  )}
                </Link>
              )
            )}

            {/* 客户登录 — external */}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border border-zenmo-btn1/30 text-zenmo-btn1 hover:bg-zenmo-btn1 hover:text-white hover:border-zenmo-btn1 transition-all duration-200"
            >
              <LogIn size={14} strokeWidth={2} />
              客户登录
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-zenmo-hamburger p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-t overflow-hidden"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
            >
              <nav className="flex flex-col py-2" aria-label="移动端导航">
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 text-zenmo-secondary font-medium transition-colors hover:bg-zenmo-light-bg"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`px-6 py-3.5 text-zenmo-secondary font-medium transition-colors hover:bg-zenmo-light-bg ${
                        isActive(item) ? 'bg-zenmo-light-bg text-zenmo-btn1' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="px-6 py-3">
                  <a
                    href={PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full justify-center py-3 rounded-lg text-sm font-semibold border border-zenmo-btn1/30 text-zenmo-btn1 hover:bg-zenmo-btn1 hover:text-white transition-colors"
                  >
                    <LogIn size={14} strokeWidth={2} />
                    客户登录
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
