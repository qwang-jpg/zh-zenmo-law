import TimelineSection from '@/components/shared/Immigration-Timeline'

const steps = [
  {
    num: '01',
    label: '约 1–2 周',
    title: '资质评估与方案确认',
    desc: '律师评估申请人学历与工作经历，确认 EB-2 或 EB-3 适用类别及子类，签署委托协议并确定申请方案。',
  },
  {
    num: '02',
    label: '约 6–9 个月',
    title: '现行工资标准申报（PWD）',
    desc: '雇主向劳工部提交 ETA-9141，申报职位对应的现行工资标准，审批通常需要 6–9 个月。',
  },
  {
    num: '03',
    label: '约 2–3 个月',
    title: '执行合规性招聘活动',
    desc: 'PWD 获批后，雇主须通过六种以上媒介方式发布招聘广告，完整记录招聘过程，广告费约 $3,000–$4,500。',
  },
  {
    num: '04',
    label: '约 15–18 个月',
    title: 'PERM 劳工证申报与审理',
    desc: '招聘完成后递交 ETA-9089，劳工部完成审批，如被审计将进一步延长审理时间。',
  },
  {
    num: '05',
    label: '加急 15 工作日 · 常规 3–6 个月',
    title: 'I-140 移民申请',
    desc: 'PERM 获批后 180 天内，由雇主向移民局递交 I-140；获批后确立优先日期，开始等待排期。',
  },
  {
    num: '06',
    label: '排期到达后',
    title: 'I-485 身份调整或 DS-260 签证 → 绿卡',
    desc: '境内申请人递交 I-485，同步申请工卡（EAD）和回美证（AP）；境外申请人通过领事馆办理移民签证。',
  },
]

export default function EB23Process() {
  return (
    <TimelineSection
      title="申请时间线参考"
      subtitle="EB-2/EB-3 整体周期因 PERM 审理及排期等待差异较大，以下各阶段时间以移民局及劳工部公告为准"
      steps={steps}
    />
  )
}
