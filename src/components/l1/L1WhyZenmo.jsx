import WhyZenmoSection from '@/components/shared/Immigration-WhyZenmo'
import { ShieldCheck, Users, FileSearch, MessageCircle, GitBranch, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
    title: '深耕跨国公司移民实务',
    desc: '长期专注于 L-1 签证申请，熟悉各类复杂案件——包括新设美国公司、非典型关联结构、L-1B 专业知识论证及 RFE 应对。',
  },
  {
    icon: <GitBranch size={18} strokeWidth={1.8} />,
    title: '公司结构与岗位设计并重',
    desc: '我们不只准备申请材料，更从公司关联关系、岗位职责框架与组织架构设计入手，确保申请逻辑符合移民局审查标准。',
  },
  {
    icon: <FileSearch size={18} strokeWidth={1.8} />,
    title: '材料逻辑严谨，降低补件风险',
    desc: '每个案件由律师主导撰写法律支持信与证据框架，统一岗位职责、公司结构与业务说明之间的逻辑一致性，而非套用模板。',
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.8} />,
    title: '签证与绿卡一体化规划',
    desc: 'L-1A 持有人可进一步申请 EB-1C 绿卡。我们在签证申请阶段即提前规划衔接路径，减少重复准备材料的成本与时间。',
  },
  {
    icon: <Users size={18} strokeWidth={1.8} />,
    title: '全程中文服务',
    desc: '所有沟通、文件解读与申请说明均以中文完成，确保企业与员工在每个节点都清晰理解流程、进度与潜在风险。',
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
    title: '透明流程，无隐性费用',
    desc: '服务启动前明确报价，流程节点清晰告知，不设模糊的附加收费项目，让企业和员工都能放心推进申请。',
  },
]

export default function L1WhyZenmo() {
  return (
    <WhyZenmoSection
      title="为什么选择阡陌处理 L-1"
      subtitle="L-1 不只是调派一名员工，更是对公司结构、岗位属性与跨国关联关系的整体法律论证。我们的工作是把这件事做扎实。"
      reasons={reasons}
    />
  )
}
