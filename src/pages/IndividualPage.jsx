import { useSEO } from '@/hooks/useSEO'
import IndividualHero from '@/components/individual/IndividualHero'
import TrafficSection from '@/components/individual/TrafficSection'
import CivilSection from '@/components/individual/CivilSection'
import InjurySection from '@/components/individual/InjurySection'
import ServiceProcess from '@/components/shared/ServiceProcess'
import CTASection from '@/components/shared/CTASection'

export default function IndividualPage() {
  useSEO({
    title: '美国个人法务服务',
    description: '阡陌律师事务所为在美个人提供交通罚单抗辩、民事纠纷处理及人身伤害索赔等法律服务，协助保障您在美国的合法个人权益，提供中文专业法律支持。',
  })

  return (
    <>
      <IndividualHero />
      <TrafficSection />
      <CivilSection />
      <InjurySection />
      <ServiceProcess variant="section" />
      <CTASection
        title="需要个人法务支持？"
        description="无论您遇到交通罚单、民事纠纷还是人身伤害问题，我们都可以为您提供专业的法律建议和代理服务。"
      />
    </>
  )
}
