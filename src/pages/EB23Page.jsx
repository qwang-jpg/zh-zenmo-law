import { useSEO } from '@/hooks/useSEO'
import MidCTA from '@/components/shared/Immigration-MidCTA'
import EB23Hero from '@/components/eb23/EB23Hero'
import EB23Categories from '@/components/eb23/EB23Categories'
import EB23Process from '@/components/eb23/EB23Process'
import EB23ServiceProcess from '@/components/eb23/EB23ServiceProcess'
import EB23Fees from '@/components/eb23/EB23Fees'
import EB23WhyZenmo from '@/components/eb23/EB23WhyZenmo'
import EB23EmployerServices from '@/components/eb23/EB23EmployerServices'
import EB23FAQ, { eb23FAQCategories } from '@/components/eb23/EB23FAQ'
import CTASection from '@/components/shared/CTASection'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: eb23FAQCategories.flatMap(cat =>
    cat.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    }))
  ),
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '阡陌律师事务所 — EB-2/EB-3 职业移民绿卡申请服务',
  description: '阡陌律师事务所提供专业中文 EB-2/EB-3 职业移民绿卡申请服务，涵盖 PERM 劳工证申报、I-140 移民申请及 I-485 身份调整全流程支持，协助申请人与企业合规高效推进绿卡申请。',
  url: 'https://zh.zenmolaw.com/immigration-law/eb-2-3',
  areaServed: { '@type': 'Country', name: 'United States' },
  availableLanguage: ['Chinese', 'English'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  serviceType: 'EB-2/EB-3 职业移民绿卡申请',
  priceRange: '$$',
}

export default function EB23Page() {
  useSEO({
    title: 'EB-2/EB-3 职业移民绿卡申请律师服务 · PERM 劳工证到绿卡全流程',
    description: '阡陌律师事务所（纽约）提供专业中文 EB-2/EB-3 职业移民绿卡申请服务。涵盖 PERM 劳工证合规申报、I-140 移民申请及 I-485 身份调整，结合排期动态制定申请策略，支持企业雇主与个人申请人全程推进。',
    canonical: '/immigration-law/eb-2-3',
    schema: [faqSchema, legalServiceSchema],
  })

  return (
    <>
      <EB23Hero />
      <EB23Categories />
      <EB23Process />
      <EB23ServiceProcess />
      <EB23Fees />
      <EB23WhyZenmo />
      <EB23EmployerServices />
      <MidCTA
        badge="免费资质初评"
        title="不确定是否符合 EB-2 或 EB-3 申请条件？"
        description="无论是学历匹配、雇主资质评估，还是 PERM 可行性判断，免费初步评估，无需任何承诺。"
      />
      <EB23FAQ />
      <CTASection
        title="准备开始 EB-2/EB-3 资格评估了吗？"
        description="我们可以从学历资质、雇主合规性、职位设置与排期策略四个维度进行初步评估，帮助申请人和雇主更清晰地判断可行路径与风险点，并在透明流程下推进后续工作。"
      />
    </>
  )
}
