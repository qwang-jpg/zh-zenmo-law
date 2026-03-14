import { motion } from 'framer-motion'
import { Car } from 'lucide-react'

const items = [
  { title: '超速罚单抗辩', desc: '专业分析案件，寻找抗辩理由' },
  { title: '违章停车申诉', desc: '帮助减免或撤销不合理罚单' },
  { title: '交通事故责任认定', desc: '协助处理责任划分争议' },
  { title: '驾照积分处理', desc: '保护您的驾驶记录' },
]

export default function TrafficSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#5073F3', borderColor: '#5073F3', color: '#FFFFFF' }}>
            <Car size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">交通罚单</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          协助处理各类交通违规罚单，包括超速、违章停车、DUI 等，最大程度减少对驾照积分和保险费率的影响。
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
