import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fees = [
  { title: '电子注册费（如参与抽签）', amount: '$215' },
  { title: '反欺诈费用', amount: '$500' },
  { title: 'I-129申请表', amount: '$460 - $780' },
  { title: '教育及培训费用', amount: '$750 - $1,500' },
  { title: '庇护资助费', amount: '$300 - $600' },
  { title: '加急处理费（可选）', amount: '$2,805' },
]

export default function H1BFees() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          申请费用参考
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-8"
        >
          费用参考仅适用于 FY-2027 年度H-1B抽签及办理部分
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zenmo-light-bg rounded-xl overflow-hidden mb-8"
        >
          {fees.map((fee, i) => (
            <div
              key={fee.title}
              className={`flex items-center justify-between px-5 md:px-6 py-4 ${i < fees.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <span className="text-sm md:text-base font-medium text-zenmo-secondary">{fee.title}</span>
              <span className="text-sm md:text-base font-semibold text-zenmo-secondary whitespace-nowrap ml-4">{fee.amount}</span>
            </div>
          ))}
        </motion.div>
        <Link to="/contact" className="btn-primary hover:shadow-lg">
          联系我们，免费咨询
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
