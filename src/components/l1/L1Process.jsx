import TimelineSection from '@/components/shared/Immigration-Timeline'

const steps = [
  {
    num: '01',
    label: '约 1–2 周',
    title: '申请策略评估',
    desc: '评估企业结构与申请可行性，确定 L-1A 或 L-1B 路径，制定申请时间规划。',
  },
  {
    num: '02',
    label: '约 2–6 周',
    title: '准备申请材料',
    desc: '准备公司文件、运营证明材料，设计岗位职责与组织架构，律师起草法律支持文件。',
  },
  {
    num: '03',
    label: '加急 15 工作日 · 常规 4–6 个月',
    title: '递交 I-129 并等待审理',
    desc: '向 USCIS 递交 L-1 申请；如收到 RFE 补件通知，律师协助制定回应策略并准备材料。',
  },
  {
    num: '04',
    label: '约 2–6 周（如需领事馆面签）',
    title: '获得 L-1 身份',
    desc: '境内申请人可直接转换身份；境外申请人获批后前往领事馆面签，取得签证后入境工作。',
  },
  {
    num: '05',
    label: '可与主申请同步办理',
    title: '家属申请 L-2 签证',
    desc: '配偶及 21 岁以下未婚子女可申请 L-2 签证随行，配偶可申请工作许可（EAD）。',
  },
  {
    num: '06',
    label: '公司运营满 1 年后',
    title: '规划 EB-1C 绿卡路径',
    desc: 'L-1A 持有人可在条件成熟后申请 EB-1C 跨国高管绿卡，无需劳工证，实现长期在美发展。',
  },
]

export default function L1Process() {
  return (
    <TimelineSection
      title="申请时间线参考"
      subtitle="从策略评估到绿卡规划，阡陌全程协助推进，确保每个节点清晰可预期"
      steps={steps}
    />
  )
}
