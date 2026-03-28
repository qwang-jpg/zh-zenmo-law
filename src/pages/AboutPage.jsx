import { useSEO } from '@/hooks/useSEO'
import AboutHero from '@/components/about/AboutHero'
import AboutContent from '@/components/about/AboutContent'
import AboutCompliance from '@/components/about/AboutCompliance'
import CTASection from '@/components/shared/CTASection'

export default function AboutPage() {
  useSEO({
    title: '关于我们',
    description: '阡陌律师事务所是一家立足纽约曼哈顿、面向国际客户的综合型法律机构，专注于美国移民法律，并提供商业及个人法律支持。以专业、透明与长期陪伴为核心执业理念。',
  })

  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutCompliance />
      <CTASection />
    </>
  )
}
