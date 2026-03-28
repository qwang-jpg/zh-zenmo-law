import { useSEO } from '@/hooks/useSEO'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import H1BHero from '@/components/h1b/H1BHero'
import H1BCorePoints from '@/components/h1b/H1BCorePoints'
import H1BPolicyAlert from '@/components/h1b/H1BPolicyAlert'
import H1BServiceProcess from '@/components/h1b/H1BServiceProcess'
import H1BTimeline from '@/components/h1b/H1BTimeline'
import H1BFees from '@/components/h1b/H1BFees'
import H1BWhyZenmo from '@/components/h1b/H1BWhyZenmo'
import H1BEligibility from '@/components/h1b/H1BEligibility'
import H1BFAQ from '@/components/h1b/H1BFAQ'
import CTASection from '@/components/shared/CTASection'

function MidCTA() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-16">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <div
          className="rounded-2xl px-7 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white border border-gray-100"
          style={{ boxShadow: '0 2px 20px rgba(15,23,42,0.06)' }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#7E3DED' }}>
              免费资质初评
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-zenmo-secondary mb-2 leading-snug">
              对申请条件有疑问？先和我们聊聊
            </h3>
            <p className="text-sm text-zenmo-text max-w-lg leading-relaxed">
              无论是学历匹配、雇主资质还是 2026 年新政影响，免费初步评估，无需任何承诺。
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary whitespace-nowrap flex-shrink-0 hover:shadow-lg"
          >
            免费咨询
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function H1BPage() {
  useSEO({
    title: 'H-1B 非移民工作签证',
    description: '阡陌律师事务所提供专业的H-1B工作签证申请服务，涵盖资质评估、抽签注册、LCA申报、材料准备及RFE应对。了解2026年加权抽签新政，免费预约资质评估。',
  })

  return (
    <>
      <H1BHero />
      <H1BCorePoints />
      <H1BPolicyAlert />
      <H1BServiceProcess />
      <H1BTimeline />
      <H1BFees />
      <H1BWhyZenmo />
      <H1BEligibility />
      <MidCTA />
      <H1BFAQ />
      <CTASection
        title="准备开始 H-1B 资格评估了吗？"
        description="我们可以从岗位、学历匹配、工资标准与用工合规四个维度进行初步评估，帮助申请人与雇主更清晰地判断可行路径与风险点，并在透明流程下推进后续工作。"
      />
    </>
  )
}
