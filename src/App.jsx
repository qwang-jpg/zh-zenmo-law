import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ImmigrationPage from '@/pages/ImmigrationPage'
import H1BPage from '@/pages/H1BPage'
import BusinessPage from '@/pages/BusinessPage'
import IndividualPage from '@/pages/IndividualPage'
import ContactPage from '@/pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/"                        element={<HomePage />} />
          <Route path="/about-us"                element={<AboutPage />} />
          <Route path="/immigration-law"         element={<ImmigrationPage />} />
          <Route path="/immigration-law/h-1b"    element={<H1BPage />} />
          <Route path="/business-law"            element={<BusinessPage />} />
          <Route path="/individual-law"          element={<IndividualPage />} />
          <Route path="/contact"                 element={<ContactPage />} />
        </Route>
      </Routes>
    </>
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
