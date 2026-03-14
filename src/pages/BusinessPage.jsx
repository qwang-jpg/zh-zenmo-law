import BusinessHero from '@/components/business/BusinessHero'
import CompanyFormation from '@/components/business/CompanyFormation'
import ContractSection from '@/components/business/ContractSection'
import IPSection from '@/components/business/IPSection'
import ServiceProcess from '@/components/shared/ServiceProcess'
import CTASection from '@/components/shared/CTASection'

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <CompanyFormation />
      <ContractSection />
      <IPSection />
      <ServiceProcess variant="section" />
      <CTASection
        title="与我们讨论您的企业法律需求"
        description="无论您正计划在美国设立公司，还是已在美运营并面临合规或合同相关问题，我们都可以在评估与策略层面协助您更清晰地判断风险与可行方案，并以专业流程推进后续法律事务。"
      />
    </>
  )
}
