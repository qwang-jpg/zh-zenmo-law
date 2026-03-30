import { useSEO } from '@/hooks/useSEO'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import L1Hero from '@/components/l1/L1Hero'
import L1Categories from '@/components/l1/L1Categories'
import L1ServiceProcess from '@/components/l1/L1ServiceProcess'
import L1Process from '@/components/l1/L1Process'
import L1Fees from '@/components/l1/L1Fees'
import L1WhyZenmo from '@/components/l1/L1WhyZenmo'
import L1EmployerServices from '@/components/l1/L1EmployerServices'
import L1FAQ from '@/components/l1/L1FAQ'
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
              不确定是否符合 L-1 申请条件？
            </h3>
            <p className="text-sm text-zenmo-text max-w-lg leading-relaxed">
              无论是员工资质、公司关联关系还是 L-1A / L-1B 类别判断，免费初步评估，无需任何承诺。
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

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '阡陌律师事务所 — L-1 签证申请服务',
  description: '阡陌律师事务所提供专业中文 L-1 跨国公司签证申请服务，涵盖 L-1A 高管签证与 L-1B 专业知识签证，协助企业完成美国实体设立、申请材料准备及后续 EB-1C 绿卡规划。',
  url: 'https://zh.zenmolaw.com/immigration-law/l-1',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  availableLanguage: ['Chinese', 'English'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  serviceType: 'L-1 跨国公司签证申请',
  priceRange: '$$',
}

export default function L1Page() {
  useSEO({
    title: 'L-1 签证申请律师服务 · 跨国公司高管及专业人员',
    description: '阡陌律师事务所（纽约）提供专业中文 L-1 跨国公司签证申请服务，涵盖 L-1A 高管签证、L-1B 专业知识签证，协助企业设立美国实体、准备申请材料，并提供 EB-1C 绿卡后续规划，一体化法律支持。',
    canonical: '/immigration-law/l-1',
    schema: [legalServiceSchema],
  })

  return (
    <>
      <L1Hero />
      <L1Categories />
      <L1Process />
      <L1ServiceProcess />
      <L1Fees />
      <L1WhyZenmo />
      <L1EmployerServices />
      <MidCTA />
      <L1FAQ />
      <CTASection
        title="准备开始 L-1 资格评估了吗？"
        description="我们可以从员工资质、公司关联关系、职位定性与申请策略四个维度进行初步评估，帮助企业和员工更清晰地判断可行路径与风险点，并在透明流程下推进后续工作。"
      />
    </>
  )
}
