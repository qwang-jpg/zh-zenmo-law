import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip navigation — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-zenmo-btn1 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        跳到主内容
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
