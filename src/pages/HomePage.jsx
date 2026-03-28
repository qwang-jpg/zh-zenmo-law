import { useSEO } from '@/hooks/useSEO'
import HomeHero from '@/components/home/HomeHero'
import HomeNumbers from '@/components/home/HomeNumbers'
import HomePracticeAreas from '@/components/home/HomePracticeAreas'
import ServiceProcess from '@/components/shared/ServiceProcess'
import WhyZenmo from '@/components/shared/WhyZenmo'
import CTASection from '@/components/shared/CTASection'

export default function HomePage() {
  useSEO({
    title: '美国移民、商业及个人法律服务',
    description: '阡陌律师事务所立足纽约曼哈顿，为个人及企业提供美国移民、商业及个人法律服务。专注H-1B工作签证、绿卡申请、公司设立等法律事务。免费初步咨询。',
  })

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
