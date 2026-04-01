import { useSEO } from '@/hooks/useSEO'
import MidCTA from '@/components/shared/Immigration-MidCTA'
import L1Hero from '@/components/l1/L1Hero'
import L1Categories from '@/components/l1/L1Categories'
import L1ServiceProcess from '@/components/l1/L1ServiceProcess'
import L1Process from '@/components/l1/L1Process'
import L1Fees from '@/components/l1/L1Fees'
import L1WhyZenmo from '@/components/l1/L1WhyZenmo'
import L1EmployerServices from '@/components/l1/L1EmployerServices'
import L1FAQ from '@/components/l1/L1FAQ'
import CTASection from '@/components/shared/CTASection'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'L-1 签证是否需要抽签？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不需要。L-1 签证不受年度配额限制，也不存在抽签程序。企业可以根据业务发展需要，在全年任何时间提交申请，无需等待特定注册窗口。',
      },
    },
    {
      '@type': 'Question',
      name: 'L-1A 和 L-1B 有什么区别？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L-1A 适用于跨国公司高管或经理，在美最长可停留 7 年，可衔接 EB-1C 绿卡；L-1B 适用于具备公司专门知识的员工，在美最长可停留 5 年。两者均要求申请人在过去 3 年内至少有 1 年在境外关联公司工作。',
      },
    },
    {
      '@type': 'Question',
      name: 'L-1 是否可以用于新成立的美国公司（New Office）？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。New Office L-1 允许企业设立新的美国公司并派遣管理人员赴美运营。通常需要提供商业计划书、公司发展规划、办公室租赁证明及启动资金证明等材料。首次通常批准 1 年，后续可申请延期。',
      },
    },
    {
      '@type': 'Question',
      name: 'L-1 签证是否可以转绿卡？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L-1A 持有人通常可以申请 EB-1C 跨国公司高管绿卡，通常要求美国公司运营满 1 年以上。EB-1C 通常无需劳工证，整体周期相比 EB-2、EB-3 更短，约 1.5–2 年。',
      },
    },
    {
      '@type': 'Question',
      name: 'L-1 审批时间通常多久？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '加急处理（Premium Processing）通常在 15 个工作日内获得结果，费用为 $2,965（2026 年 3 月 1 日起生效）；常规处理通常需要 4–6 个月。',
      },
    },
    {
      '@type': 'Question',
      name: '家属是否可以随 L-1 申请人一同赴美？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。配偶及 21 岁以下未婚子女可申请 L-2 签证随行入境。L-2 配偶可以申请工作许可（EAD），获批后可在美国合法工作；L-2 子女可在美国就读学校。',
      },
    },
  ],
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '阡陌律师事务所 — L-1 签证申请服务',
  description: '阡陌律师事务所提供专业中文 L-1 跨国公司签证申请服务，涵盖 L-1A 高管签证与 L-1B 专业知识签证，协助企业完成美国实体设立、申请材料准备及后续 EB-1C 绿卡规划。',
  url: 'https://zh.zenmolaw.com/immigration-law/l-1',
  areaServed: { '@type': 'Country', name: 'United States' },
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
    schema: [faqSchema, legalServiceSchema],
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
      <MidCTA
        badge="免费资质初评"
        title="不确定是否符合 L-1 申请条件？"
        description="无论是员工资质、公司关联关系还是 L-1A / L-1B 类别判断，免费初步评估，无需任何承诺。"
      />
      <L1FAQ />
      <CTASection
        title="准备开始 L-1 资格评估了吗？"
        description="我们可以从员工资质、公司关联关系、职位定性与申请策略四个维度进行初步评估，帮助企业和员工更清晰地判断可行路径与风险点，并在透明流程下推进后续工作。"
      />
    </>
  )
}
