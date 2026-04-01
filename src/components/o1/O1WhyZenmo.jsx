import WhyZenmoSection from '@/components/shared/Immigration-WhyZenmo'
import { ShieldCheck, Users, FileSearch, MessageCircle, Lightbulb, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
    title: '深耕 O-1 申请实务',
    desc: '长期专注于 O-1 签证申请，熟悉科学、商业、艺术及影视等不同领域的案件特点，具备处理非典型背景、成果形式多样及补件（RFE）情况的实务经验。',
  },
  {
    icon: <Lightbulb size={18} strokeWidth={1.8} />,
    title: '申请策略先行，而非材料堆积',
    desc: '在材料准备前，我们会先完成申请标准组合分析、证据优势评估及整体申请思路设计，使每一项材料均围绕申请目标展开，而非简单增加材料数量。',
  },
  {
    icon: <FileSearch size={18} strokeWidth={1.8} />,
    title: '结构清晰的申请体系',
    desc: '由律师主导案件结构设计及 Petition Letter 撰写，确保申请人成果、推荐信内容与职业发展方向之间形成一致的专业表达方式，而非使用固定模板套用不同案件。',
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.8} />,
    title: '兼顾签证申请与长期规划',
    desc: '部分申请人在获得 O-1 后，可能进一步考虑 EB-1A 杰出人才绿卡或 EB-2 NIW 路径。我们在 O-1 申请阶段即提前考虑后续路径衔接，减少重复准备材料的时间成本。',
  },
  {
    icon: <Users size={18} strokeWidth={1.8} />,
    title: '全程中文沟通',
    desc: '所有沟通、材料说明及申请进度反馈均可使用中文进行，确保申请人在每个阶段均能清晰理解申请策略与时间安排。',
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
    title: '流程透明，费用清晰',
    desc: '服务开始前明确费用结构及服务范围，各阶段节点清晰告知，不设置不明确的附加收费项目，使申请人能够更安心推进申请计划。',
  },
]

export default function O1WhyZenmo() {
  return (
    <WhyZenmoSection
      title="为什么选择阡陌处理 O-1"
      subtitle={`O-1 申请不仅是展示个人成就，更需要通过合理的案件结构与专业法律分析，使移民局能够清晰理解申请人如何符合"杰出能力"的认定标准。我们的工作重点，是帮助申请人建立完整、可信且具有说服力的申请体系。`}
      reasons={reasons}
    />
  )
}
