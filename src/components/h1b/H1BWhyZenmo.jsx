import WhyZenmoSection from '@/components/shared/Immigration-WhyZenmo'
import { ShieldCheck, Users, FileSearch, MessageCircle, Lightbulb, RefreshCw } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck size={18} strokeWidth={1.8} />,
    title: '深耕 H-1B 实务',
    desc: '长期专注于 H-1B 申请，熟悉各类复杂背景案件——包括非传统专业、初创公司雇主、自雇结构及 RFE 应对。',
  },
  {
    icon: <Users size={18} strokeWidth={1.8} />,
    title: '全程中文服务',
    desc: '所有沟通、文件解读与申请说明均以中文完成，确保申请人与雇主在每个节点都清晰理解流程与风险。',
  },
  {
    icon: <FileSearch size={18} strokeWidth={1.8} />,
    title: '材料结构严谨',
    desc: '每个案件由律师主导撰写支持信和证据框架，而非简单套用模板，确保职位描述、工资标准与公司背景之间逻辑一致。',
  },
  {
    icon: <Lightbulb size={18} strokeWidth={1.8} />,
    title: '熟悉 2026 年新政',
    desc: '我们持续跟踪加权抽签规则、100,000 美元政策及 USCIS 最新执法动态，帮助客户在注册前做出更合理的策略选择。',
  },
  {
    icon: <RefreshCw size={18} strokeWidth={1.8} />,
    title: '未中签也有跟进',
    desc: '未中签并不意味着服务结束。我们会免费评估替代路径，包括 OPT 延期、Cap-Exempt、O-1 等可行方案。',
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.8} />,
    title: '透明流程，无隐性费用',
    desc: '服务启动前明确报价，流程节点清晰告知，不设模糊的附加收费项目，让申请人和雇主都能放心推进。',
  },
]

export default function H1BWhyZenmo() {
  return (
    <WhyZenmoSection
      title="为什么选择阡陌处理 H-1B"
      subtitle="H-1B 不仅只是填表递交，更是对职位、背景、雇主合规性的综合论证。且H-1B阶段的申请材料对于后期的绿卡申请都会同步产生影响，系统性的规划才能避免长期隐患。"
      reasons={reasons}
    />
  )
}
