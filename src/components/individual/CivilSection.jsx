import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

const items = [
  { title: '合同纠纷', desc: '违约、解除、赔偿等争议处理' },
  { title: '财产纠纷', desc: '房产、遗产等财产权益保护' },
  { title: '消费者权益', desc: '维护您的合法消费权益' },
  { title: '债务追讨', desc: '协助追回欠款及损失' },
]

export default function CivilSection() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#0DB7BD', borderColor: '#0DB7BD', color: '#FFFFFF' }}>
            <Scale size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">民事纠纷</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          为个人客户提供民事纠纷的法律代理服务，包括合同纠纷、财产纠纷、消费者权益保护等领域。
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 pl-5">
              <h4 className="text-xs md:text-sm font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
