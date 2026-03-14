import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

const ipItems = [
  { title: '商标注册', desc: '品牌保护的第一步，建立商标权益' },
  { title: '版权申请', desc: '保护原创作品，包括软件、文字、艺术作品' },
  { title: '专利申请', desc: '保护发明创新，建立技术竞争优势' },
]

export default function IPSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#0DB7BD', borderColor: '#0DB7BD', color: '#FFFFFF' }}>
            <Lightbulb size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">知识产权维护</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          在美国市场开展业务，品牌与内容资产的法律保护尤为重要。我们协助客户建立基础知识产权保护结构，并就潜在侵权风险提供法律评估。
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ipItems.map((item) => (
            <div key={item.title} className="bg-zenmo-light-bg rounded-xl p-4 pl-5">
              <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs md:text-sm text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
