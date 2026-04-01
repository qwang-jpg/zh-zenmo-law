import { useSEO } from '@/hooks/useSEO'
import MidCTA from '@/components/shared/Immigration-MidCTA'
import O1Hero from '@/components/o1/O1Hero'
import O1Categories from '@/components/o1/O1Categories'
import O1Process from '@/components/o1/O1Process'
import O1ServiceProcess from '@/components/o1/O1ServiceProcess'
import O1Fees from '@/components/o1/O1Fees'
import O1WhyZenmo from '@/components/o1/O1WhyZenmo'
import O1EmployerServices from '@/components/o1/O1EmployerServices'
import O1FAQ from '@/components/o1/O1FAQ'
import CTASection from '@/components/shared/CTASection'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O-1 签证是否需要抽签？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O-1 签证不受年度配额限制，也不存在抽签程序，可全年任何时间提交申请。建议在活动开始前至少 3–6 个月启动准备，确保有充裕时间收集证据材料。',
      },
    },
    {
      '@type': 'Question',
      name: 'O-1A 和 O-1B 有什么区别？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O-1A 适用于科学、教育、商业或体育领域具有杰出能力的专业人士，需满足 8 项认定标准中的至少 3 项；O-1B 适用于艺术、影视或电视领域具有卓越成就的人士，需满足 6 项认定标准中的至少 3 项。',
      },
    },
    {
      '@type': 'Question',
      name: 'O-1 申请是否必须有雇主？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '申请须由美国境内的请愿人提交，可以是正式雇主，也可以是具备代理资格的个人代理人（Agent）。代理人模式常见于演出、艺术、体育等行业，适合有多个项目安排或无固定雇主的申请人。',
      },
    },
    {
      '@type': 'Question',
      name: 'O-1 审批时间通常多久？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '加急处理通常在 15 个工作日内获得结果，费用为 $2,965（2026 年 3 月 1 日起）；常规处理通常需要 2–3 个月。有明确活动安排的申请人建议优先选择加急处理。',
      },
    },
    {
      '@type': 'Question',
      name: 'O-1 是否可以转绿卡？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。O-1A 持有人通常可以评估 EB-1A 杰出人才绿卡路径，通常无需劳工证，部分情况下可自我担保申请。EB-2 NIW 国家利益豁免也是常见衔接路径，适合科研、教育或具有社会影响力的申请人。',
      },
    },
  ],
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '阡陌律师事务所 — O-1 签证申请服务',
  description: '阡陌律师事务所提供专业中文 O-1 杰出人才签证申请服务，涵盖资质评估、案件策略设计、证据框架搭建、法律文件撰写及 RFE 应对，支持科学、商业、艺术及影视等各领域申请人。',
  url: 'https://zh.zenmolaw.com/immigration-law/o-1',
  areaServed: { '@type': 'Country', name: 'United States' },
  availableLanguage: ['Chinese', 'English'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  serviceType: 'O-1 杰出人才签证申请',
  priceRange: '$$',
}

export default function O1Page() {
  useSEO({
    title: 'O-1 杰出人才签证律师服务 · 科学、商业、艺术及影视领域',
    description: '阡陌律师事务所（纽约）提供专业中文 O-1 杰出人才签证申请服务。涵盖资质评估、案件策略设计、证据框架搭建及 RFE 应对，支持 O-1A 与 O-1B 全类别申请，并提供 EB-1A 及 NIW 绿卡后续规划。无需抽签，全年可申请。',
    canonical: '/immigration-law/o-1',
    schema: [faqSchema, legalServiceSchema],
  })

  return (
    <>
      <O1Hero />
      <O1Categories />
      <O1Process />
      <O1ServiceProcess />
      <O1Fees />
      <O1WhyZenmo />
      <O1EmployerServices />
      <MidCTA
        badge="免费资质初评"
        title="不确定自己是否符合 O-1 申请标准？"
        description="无论是成就材料的充分程度、适用类别的判断，还是整体申请可行性评估，免费初步评估，无需任何承诺。"
      />
      <O1FAQ />
      <CTASection
        title="准备开始 O-1 资格评估了吗？"
        description="我们可以从成就材料充分程度、认定标准组合、申请人职业定位与证据逻辑四个维度进行初步评估，帮助申请人更清晰地判断申请可行路径与风险点，并在透明流程下推进后续工作。"
      />
    </>
  )
}
