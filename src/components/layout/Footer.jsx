import { Link } from 'react-router-dom'
import { assetUrl } from '@/lib/assetUrl'

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-4 h-4">
        <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-3.8-13-5.9-26.8-5.9-41.2 0-90.5 77.7-153.6 164-153.6zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.5 0-29-9.7-29-24.2.0-14.7 14.5-24.4 29-24.4zm-136.4 48.6c-14.5 0-29-9.7-29-24.2.0-14.7 14.5-24.4 29-24.4 14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-4.8 58.1-9.7l53.4 29-14.5-48.8C542.7 399.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6.0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.2 9.7 24.2 19.3.0 9.9-9.7 19.6-24.2 19.6zm136.4 0c-9.7 0-19.3-9.7-19.3-19.6.0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.2 9.7 24.2 19.3.0 9.9-9.7 19.6-24.2 19.6z" />
      </svg>
    ),
    text: 'ZENMOLAW',
  },
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
      </svg>
    ),
    text: '(800) 696-8608',
  },
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
      </svg>
    ),
    text: 'contact@zenmolaw.com',
  },
  {
    icon: (
      <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
      </svg>
    ),
    text: '747 3rd Ave, New York NY 10017',
  },
]

// External links (open in new tab)
const externalLinks = [
  { label: '职业发展', href: 'https://zenmolaw.com/career' },
  { label: '隐私政策', href: 'https://zenmolaw.com/privacy-policy' },
  { label: '法律声明', href: 'https://zenmolaw.com/legal-statement' },
  { label: '律师广告声明', href: 'https://zenmolaw.com/attorney-advertising' },
]

export default function Footer() {
  return (
    <footer className="bg-zenmo-secondary" role="contentinfo">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* Main content */}
        <div className="pt-8 pb-6 md:pt-10 md:pb-8 flex flex-col md:flex-row gap-8 md:gap-0">

          <div className="grid grid-cols-2 md:contents gap-6">
            {/* Contact */}
            <div className="md:w-[26%] flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">联系方式</h3>
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-zenmo-footer-text">
                  <span className="flex-shrink-0 mt-0.5 opacity-70">{item.icon}</span>
                  <span className="text-xs md:text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="md:w-[25%] flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">快速链接</h3>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-zenmo-footer-text hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* QR Codes */}
          <div className="flex-1 flex flex-row gap-5 justify-center md:justify-end items-center md:items-start">
            <div className="flex flex-col items-center gap-1.5">
              <img
                src={assetUrl('/images/QR Codes/阡陌公众号.png')}
                alt="阡陌律师事务所微信公众号二维码"
                className="w-20 h-20 md:w-28 md:h-28 rounded"
                width="112"
                height="112"
                loading="lazy"
              />
              <span className="text-[11px] text-zenmo-footer-text">扫码关注公众号</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <img
                src={assetUrl('/images/QR Codes/微信客服二维码.png')}
                alt="阡陌律师事务所客服微信二维码"
                className="w-20 h-20 md:w-28 md:h-28 rounded"
                width="112"
                height="112"
                loading="lazy"
              />
              <span className="text-[11px] text-zenmo-footer-text">扫码免费咨询</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="py-5 text-center">
          <p className="text-[11px] text-zenmo-footer-text/60">
            © 2026 Global Focus Law Group PLLC DBA Zenmo Law（阡陌律师事务所）. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
