import { motion } from 'framer-motion'
import { Building2, CheckCircle2, Handshake } from 'lucide-react'

const capabilities = [
  { title: '签证全程管理', desc: '外籍员工签证申请、续签与雇主转移的全程管理，涵盖 H-1B、L-1、O-1、TN 等主要工作签证类别' },
  { title: '雇主担保绿卡', desc: '雇主担保绿卡（PERM / EB-2 / EB-3）的申请策划与流程推进' },
  { title: '身份状态追踪', desc: '员工移民身份状态追踪，提前预警到期节点，避免身份失效风险' },
  { title: '招聘阶段预评估', desc: '协助 HR 在 offer 前了解候选人签证可行性与时间成本，减少招聘不确定性' },
  { title: '政策变化通报', desc: '移民政策变化的及时通报，分析对现有外籍员工的实际影响' },
]

const collaboration = [
  { title: '随时咨询渠道', desc: '与 HR 及法务团队直接对接，作为日常移民合规问题的随时咨询渠道' },
  { title: '定期状态汇报', desc: '定期梳理在职外籍员工的身份现状与续签节点，确保团队掌握全局' },
  { title: '前瞻性策略建议', desc: '针对企业用工结构与发展计划，提供前瞻性的移民策略建议' },
]

export default function EmployerSection() {
  return (
    <section
      className="py-12 md:py-20"
      style={{ background: 'linear-gradient(330deg, #471F8B 0%, #11192C 100%)' }}
    >
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#7661F3', borderColor: '#7661F3', color: '#FFFFFF' }}>
            <Building2 size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading text-white">企业移民法律支持服务</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-base text-zenmo-subheading leading-relaxed max-w-3xl mb-10 md:mb-12"
        >
          对于没有内部移民律师的企业，管理外籍员工的移民合规事务往往由 HR 兼顾，容易因专业知识不足而错过关键节点或产生合规风险。阡陌可以作为您公司的外部移民法律支持团队，系统管理外籍员工在用工全周期内的移民事务，让您的 HR 团队专注于核心人事工作。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <div className="rounded-2xl p-5 md:p-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-2.5 mb-5">
              <CheckCircle2 size={18} strokeWidth={1.8} className="text-[#7661F3] flex-shrink-0" />
              <h3 className="text-sm md:text-base font-semibold text-white">我们能为您的公司做什么</h3>
            </div>
            <div className="flex flex-col gap-4">
              {capabilities.map((item) => (
                <div key={item.title}>
                  <span className="text-xs md:text-sm font-medium text-white/90 block">{item.title}</span>
                  <span className="text-xs text-zenmo-subheading/75 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-5 md:p-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-2.5 mb-5">
              <Handshake size={18} strokeWidth={1.8} className="text-[#7661F3] flex-shrink-0" />
              <h3 className="text-sm md:text-base font-semibold text-white">我们如何与您的团队协作</h3>
            </div>
            <div className="flex flex-col gap-4">
              {collaboration.map((item) => (
                <div key={item.title}>
                  <span className="text-xs md:text-sm font-medium text-white/90 block">{item.title}</span>
                  <span className="text-xs text-zenmo-subheading/75 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: 'rgba(118,97,243,0.15)', border: '1px solid rgba(118,97,243,0.25)' }}>
              <p className="text-xs text-white/70 leading-relaxed">
                无论您的团队规模大小，阡陌都可以根据公司的外籍员工数量与用工节奏，灵活调整服务深度与介入方式。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
