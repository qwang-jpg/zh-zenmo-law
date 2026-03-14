import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const statusItems = [
  { title: 'I-539 境内身份转换', desc: '在美国境内转换非移民身份' },
  { title: 'I-539 身份延期', desc: '延长非移民身份有效期' },
  { title: 'I-539 身份恢复', desc: '恢复失效的非移民身份' },
  { title: 'I-765 EAD工卡申请', desc: '工作许可申请' },
  { title: 'I-983 STEM OPT申请', desc: 'STEM专业工作许可延期' },
  { title: 'I-485 境内身份调整', desc: '在美国境内调整为永久居民身份' },
]

export default function StatusSection() {
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
            <RefreshCw size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">身份转换与维持</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          合理规划身份转换时点与方式，是降低风险、保持合法身份的关键因素。
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {statusItems.map((item) => (
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
