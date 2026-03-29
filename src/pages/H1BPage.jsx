import { useSEO } from '@/hooks/useSEO'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import H1BHero from '@/components/h1b/H1BHero'
import H1BCorePoints from '@/components/h1b/H1BCorePoints'
import H1BPolicyAlert from '@/components/h1b/H1BPolicyAlert'
import H1BTimeline from '@/components/h1b/H1BTimeline'
import H1BServiceProcess from '@/components/h1b/H1BServiceProcess'
import H1BFees from '@/components/h1b/H1BFees'
import H1BWhyZenmo from '@/components/h1b/H1BWhyZenmo'
import H1BEmployerServices from '@/components/h1b/H1BEmployerServices'
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'H-1B 签证每年有多少名额？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'H-1B 每个财政年度包括 65,000 个常规名额（Regular Cap）以及 20,000 个面向在美国非营利大学取得硕士或以上学位申请人的额外名额（Master Cap），合计 85,000 个名额。Cap-Exempt 雇主（如高校、非营利研究机构）不受名额限制。',
      },
    },
    {
      '@type': 'Question',
      name: '什么样的职位属于"专业性职位（Specialty Occupation）"？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '专业性职位要求该岗位通常需要至少本科及以上学历，且所需学历方向须与职位职责直接相关。常见专业性职位包括软件工程师、会计师、建筑师、工程师等，但具体判断需结合岗位描述、行业惯例与雇主用工结构综合评估。',
      },
    },
    {
      '@type': 'Question',
      name: '2026 年加权抽签新政如何影响 H-1B 中签率？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '自 FY-2027 起，USCIS 将按工资层级（Level 1–4）加权抽签，高工资层级对应更高的中签概率。根据 DHS 测算，Level 1 约 15.29%，Level 4 约 61.16%。注册前确认岗位与工资层级策略变得更为关键。',
      },
    },
    {
      '@type': 'Question',
      name: '没有抽中 H-1B 还有哪些替代路径？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '常见替代方案包括：继续维持或延长 F-1/OPT/STEM OPT 身份、评估免抽签 H-1B（Cap-Exempt）路径、O-1 杰出人才签证、L-1 跨国公司调派签证等。阡陌对未中签客户提供免费的后续路径分析。',
      },
    },
    {
      '@type': 'Question',
      name: '申请 H-1B 的费用由谁承担？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '部分费用（如反欺诈费 $500、教育培训费 $750–$1,500）必须由雇主承担，不得转嫁给申请人。电子注册费 $215 由雇主支付。律师费与加急费可由双方协商分担。',
      },
    },
    {
      '@type': 'Question',
      name: '什么是 RFE？收到 RFE 怎么办？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RFE（Request for Evidence）是移民局在审理过程中发出的补件通知。收到 RFE 并不意味着申请被拒，但回复质量至关重要。律师会及时制定回应策略，确保在截止日期前提交完整、有力的回复。',
      },
    },
  ],
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '阡陌律师事务所 — H-1B 签证申请服务',
  description: '阡陌律师事务所提供专业中文 H-1B 工作签证申请服务，涵盖资质评估、抽签注册、LCA 申报、材料准备及 RFE 应对，支持初创公司及复杂案件。',
  url: 'https://zh.zenmolaw.com/h1b',
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
  serviceType: 'H-1B 工作签证申请',
  priceRange: '$$',
}

export default function H1BPage() {
  useSEO({
    title: 'H-1B 签证申请律师服务 · 抽签注册到获批全程代办',
    description: '阡陌律师事务所（纽约）提供专业中文 H-1B 工作签证申请服务。涵盖资质评估、抽签注册、LCA 申报、材料准备及 RFE 应对。熟悉 2026 年加权抽签新政与 $100,000 政策，支持初创公司及复杂案件，未中签提供免费替代路径评估。',
    canonical: '/h1b',
    schema: [faqSchema, legalServiceSchema],
  })

  return (
    <>
      <H1BHero />
      <H1BCorePoints />
      <H1BPolicyAlert />
      <H1BTimeline />
      <H1BServiceProcess />
      <H1BFees />
      <H1BWhyZenmo />
      <H1BEmployerServices />
      <MidCTA />
      <H1BFAQ />
      <CTASection
        title="准备开始 H-1B 资格评估了吗？"
        description="我们可以从岗位、学历匹配、工资标准与用工合规四个维度进行初步评估，帮助申请人与雇主更清晰地判断可行路径与风险点，并在透明流程下推进后续工作。"
      />
    </>
  )
}
