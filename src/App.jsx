import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'

const HomePage        = lazy(() => import('@/pages/HomePage'))
const AboutPage       = lazy(() => import('@/pages/AboutPage'))
const ImmigrationPage = lazy(() => import('@/pages/ImmigrationPage'))
const H1BPage         = lazy(() => import('@/pages/H1BPage'))
const L1Page          = lazy(() => import('@/pages/L1Page'))
const BusinessPage    = lazy(() => import('@/pages/BusinessPage'))
const IndividualPage  = lazy(() => import('@/pages/IndividualPage'))
const ContactPage     = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage    = lazy(() => import('@/pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-8 h-8 rounded-full border-2 border-zenmo-btn1 border-t-transparent animate-spin" />
      </div>
    }>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/"                        element={<HomePage />} />
          <Route path="/about-us"                element={<AboutPage />} />
          <Route path="/immigration-law"         element={<ImmigrationPage />} />
          <Route path="/immigration-law/h-1b"    element={<H1BPage />} />
          <Route path="/immigration-law/l-1"     element={<L1Page />} />
          <Route path="/business-law"            element={<BusinessPage />} />
          <Route path="/individual-law"          element={<IndividualPage />} />
          <Route path="/contact"                 element={<ContactPage />} />
          <Route path="*"                        element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter
      basename="/"
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AppRoutes />
    </BrowserRouter>
  )
}
