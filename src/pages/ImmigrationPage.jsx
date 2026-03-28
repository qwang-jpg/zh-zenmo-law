import { useSEO } from '@/hooks/useSEO'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import VisaSection from '@/components/immigration/VisaSection'
import GreenCardSection from '@/components/immigration/GreenCardSection'
import StatusSection from '@/components/immigration/StatusSection'
import EmployerSection from '@/components/immigration/EmployerSection'
import ServiceProcess from '@/components/shared/ServiceProcess'
import CTASection from '@/components/shared/CTASection'

export default function ImmigrationPage() {
  useSEO({
    title: '美国移民法律服务',
    description: '阡陌律师事务所提供全面的美国移民法律支持，涵盖H-1B、L-1、O-1工作签证，EB-1/EB-2/EB-3绿卡，NIW国家利益豁免，身份转换维持及企业移民合规管理。',
  })

  return (
    <>
      <ImmigrationHero />
      <VisaSection />
      <GreenCardSection />
      <StatusSection />
      <EmployerSection />
      <ServiceProcess variant="section" />
      <CTASection
        title="与我们讨论您的移民法律路径"
        description="无论是正处于赴美规划阶段，还是已经在美学习、工作或经营企业，我们都可以在评估与策略层面来协助清晰地判断可行路径与潜在风险，并以透明的流程推进后续法律事务。"
      />
    </>
  )
}
