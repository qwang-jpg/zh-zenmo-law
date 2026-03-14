import { motion } from 'framer-motion'
import { Search, CheckSquare, FileText, Users } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <Search size={22} strokeWidth={1.8} />,
    title: '评估与目标澄清',
    desc: '系统化了解客户背景与目标，明确可行路径及潜在风险要点。',
  },
  {
    number: '02',
    icon: <CheckSquare size={22} strokeWidth={1.8} />,
    title: '策略与方案确认',
    desc: '充分沟通基础上讨论执行策略，协助在知情状态下作出决策。',
  },
  {
    number: '03',
    icon: <FileText size={22} strokeWidth={1.8} />,
    title: '材料与流程管理',
    desc: '严格把控文件质量与对应时间节点，确保案件规范有序推进。',
  },
  {
    number: '04',
    icon: <Users size={22} strokeWidth={1.8} />,
    title: '支持与合规跟进',
    desc: '在阶段性完成后，继续提供身份维持或合规及后续规划建议。',
  },
]

export default function ServiceProcess({ variant = 'home' }) {
  const isSection = variant === 'section'

  return (
    <section className={`py-14 md:py-20 border-t border-gray-100 ${isSection ? 'bg-white' : 'bg-zenmo-light-bg'}`}>
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#4F47E6' }}>Our Process</p>
          <h2 className={isSection ? 'section-heading mb-2' : 'section-title'}>服务方式</h2>
          <p className={isSection ? 'section-body' : 'section-subtitle !mb-0'}>
            以流程管理与风险控制为核心，确保每一项法律事务在清晰、可预期的框架内推进
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 flex items-start gap-5"
              style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}
            >
              <span
                className="absolute top-4 right-5 text-[48px] font-bold leading-none select-none"
                style={{ color: '#4F47E610' }}
              >
                {step.number}
              </span>

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(79,71,230,0.08)', color: '#4F47E6' }}
              >
                {step.icon}
              </div>

              <div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest mb-1.5 block"
                  style={{ color: '#4F47E6' }}
                >
                  Step {step.number}
                </span>
                <h3 className="text-base font-semibold text-zenmo-secondary mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-zenmo-text leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
