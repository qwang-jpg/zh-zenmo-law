import TimelineSection from '@/components/shared/Immigration-Timeline'

const steps = [
  {
    num: '01',
    label: '约 1–2 周',
    title: '资质评估与类别确认',
    desc: '律师评估申请人背景，确认适用 O-1A 或 O-1B 类别，判断现有证据强度与案件可行性。',
  },
  {
    num: '02',
    label: '约 1–2 周',
    title: '证据框架规划',
    desc: '根据移民局认定标准，制定证据类别组合策略，明确需要补充或强化的材料方向。',
  },
  {
    num: '03',
    label: '约 4–8 周',
    title: '收集与整理证据材料',
    desc: '系统收集奖项、发表记录、评审经历、薪资证明、媒体报道等支持性材料，律师协助判断证据效力。',
  },
  {
    num: '04',
    label: '视具体情况，可与第三步同步推进',
    title: '确认请愿人并取得同行评审意见',
    desc: '确定美国境内的请愿人或代理人；O-1B 申请须附同行协会或工会的书面咨询意见。',
  },
  {
    num: '05',
    label: '约 2–4 周',
    title: '起草支持文件并递交申请',
    desc: '律师撰写法律支持信，整合全部证据材料，完成 I-129 表格并向移民局正式递交申请。',
  },
  {
    num: '06',
    label: '加急 15 工作日 · 常规 2–3 个月',
    title: '等待审理并完成获批安排',
    desc: '等待移民局审理结果；如收到 RFE 补件通知，律师协助制定回应策略。获批后，境内申请人完成身份转换，境外申请人前往领事馆办理签证。',
  },
]

export default function O1Process() {
  return (
    <TimelineSection
      title="申请时间线参考"
      subtitle="从策略评估到绿卡规划，阡陌全程协助推进，确保每个节点清晰可预期"
      steps={steps}
    />
  )
}
