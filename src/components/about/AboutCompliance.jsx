import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

export default function AboutCompliance() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-16">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 px-8 md:px-12 py-10 md:py-12"
          style={{ boxShadow: '0 2px 16px rgba(15,23,42,0.05)' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(79,71,230,0.08)', color: '#4F47E6' }}
            >
              <Scale size={22} strokeWidth={1.6} />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-zenmo-secondary leading-snug">
              职业操守与合规承诺
            </h2>
          </div>
          <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: 'rgba(79,71,230,0.3)' }} />
          <p className="text-sm md:text-base text-zenmo-text leading-relaxed">
            阡陌律师事务所严格遵守美国律师职业道德规范及相关法律法规，所有法律服务均在合规框架下由具备执业资格的律师提供或监督完成。我们不会对任何案件结果作出保证或承诺，所有法律意见均基于个案事实、适用法律及政策环境作出专业判断。阡陌坚持以真实、审慎及符合职业规范的方式向客户提供法律建议，确保客户在充分理解风险与可能性的前提下作出决策。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
