import HomeHero from '@/components/home/HomeHero'
import HomeNumbers from '@/components/home/HomeNumbers'
import HomePracticeAreas from '@/components/home/HomePracticeAreas'
import ServiceProcess from '@/components/shared/ServiceProcess'
import WhyZenmo from '@/components/shared/WhyZenmo'
import CTASection from '@/components/shared/CTASection'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeNumbers />
      <HomePracticeAreas />
      <ServiceProcess />
      <WhyZenmo />
      <CTASection />
    </>
  )
}
