import { motion } from 'framer-motion'
import { HeartPulse } from 'lucide-react'

const items = [
  { title: '交通事故伤害', desc: '车祸造成的人身损害赔偿' },
  { title: '工作场所伤害', desc: '工伤事故的赔偿申请' },
  { title: '滑倒摔伤', desc: '公共场所意外伤害索赔' },
  { title: '医疗事故', desc: '医疗过失造成的损害赔偿' },
]

export default function InjurySection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#7860F3', borderColor: '#7860F3', color: '#FFFFFF' }}>
            <HeartPulse size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">人身伤害</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          为因他人过失而受伤的受害者提供法律援助，协助获得应有的赔偿，包括医疗费用、误工损失等。
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div key={item.title} className="bg-zenmo-light-bg rounded-xl p-4 pl-5">
              <h4 className="text-xs md:text-sm font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
