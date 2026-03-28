import { motion } from 'framer-motion'
import { ShieldCheck, Users, FileSearch, MessageCircle, Lightbulb, RefreshCw } from 'lucide-react'

const reasons = [
  { icon: <ShieldCheck size={18} strokeWidth={1.8} />, title: '深耕 H-1B 实务', desc: '长期专注于 H-1B 申请，熟悉各类复杂背景案件——包括非传统专业、初创公司雇主、自雇结构及 RFE 应对。' },
  { icon: <Users size={18} strokeWidth={1.8} />, title: '全程中文服务', desc: '所有沟通、文件解读与申请说明均以中文完成，确保申请人与雇主在每个节点都清晰理解流程与风险。' },
  { icon: <FileSearch size={18} strokeWidth={1.8} />, title: '材料结构严谨', desc: '每个案件由律师主导撰写支持信和证据框架，而非简单套用模板，确保职位描述、工资标准与公司背景之间逻辑一致。' },
  { icon: <Lightbulb size={18} strokeWidth={1.8} />, title: '熟悉 2026 年新政', desc: '我们持续跟踪加权抽签规则、100,000 美元政策及 USCIS 最新执法动态，帮助客户在注册前做出更合理的策略选择。' },
  { icon: <RefreshCw size={18} strokeWidth={1.8} />, title: '未中签也有跟进', desc: '未中签并不意味着服务结束。我们会免费评估替代路径，包括 OPT 延期、Cap-Exempt、O-1 等可行方案。' },
  { icon: <MessageCircle size={18} strokeWidth={1.8} />, title: '透明流程，无隐性费用', desc: '服务启动前明确报价，流程节点清晰告知，不设模糊的附加收费项目，让申请人和雇主都能放心推进。' },
]

export default function H1BWhyZenmo() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          为什么选择阡陌处理 H-1B
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-10 max-w-2xl"
        >
          H-1B 不只是填表递交，更是对职位、背景、雇主合规性的综合论证。我们的工作是把这件事做扎实。
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-xl p-5 border border-gray-100"
              style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.05)' }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(126,61,237,0.1)', color: '#7E3DED' }}>
                {item.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-zenmo-secondary mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-zenmo-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
