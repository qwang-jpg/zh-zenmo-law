import WhyZenmoSection from '@/components/shared/Immigration-WhyZenmo'
import { ShieldCheck, Users, FileSearch, RefreshCw, MessageCircle, ClipboardList } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
    title: '深耕职业移民实务',
    desc: '长期专注于 EB-2/EB-3 申请，熟悉 PERM 合规管理、I-140 论证及各类复杂背景的 RFE 应对实务。',
  },
  {
    icon: <FileSearch size={18} strokeWidth={1.8} />,
    title: 'PERM 材料严谨合规',
    desc: '每个 PERM 案件由律师主导设计职位描述与招聘方案，确保招聘记录完整、合规性无漏洞，有效降低审计与拒件风险。',
  },
  {
    icon: <ClipboardList size={18} strokeWidth={1.8} />,
    title: '申请材料系统完整',
    desc: '按雇主材料与雇员材料两条线系统整理，律师主导撰写支持信与证据框架，确保 I-140 申请内容逻辑一致、符合移民局审查标准。',
  },
  {
    icon: <RefreshCw size={18} strokeWidth={1.8} />,
    title: '排期动态跟踪与策略调整',
    desc: '持续监控签证公告，结合 EB-2/EB-3 排期变化为客户提供类别调整建议，帮助争取最优递交时机。',
  },
  {
    icon: <Users size={18} strokeWidth={1.8} />,
    title: '全程中文服务',
    desc: '所有沟通、材料说明及进度反馈均以中文进行，确保申请人与雇主在每个节点清晰理解流程状态与潜在风险。',
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
    title: '透明流程，无隐性费用',
    desc: '服务启动前明确报价，流程节点清晰告知，不设模糊的附加收费项目，让申请人和雇主都能放心推进。',
  },
]

export default function EB23WhyZenmo() {
  return (
    <WhyZenmoSection
      title="为什么选择阡陌处理 EB-2/EB-3"
      subtitle="职业移民不只是填表递交，更是对 PERM 合规性、I-140 论证质量与排期策略的综合把控。我们的工作是在流程清晰的前提下，把每个环节做扎实。"
      reasons={reasons}
    />
  )
}
