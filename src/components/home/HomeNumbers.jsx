import { motion } from 'framer-motion'

const numbers = [
  { num: '01', title: '策略先行', desc: '避免模板化路径' },
  { num: '02', title: '流程透明', desc: '节点清晰可追踪' },
  { num: '03', title: '长期支持', desc: '持续跟进避风险' },
]

export default function HomeNumbers() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0 py-8 md:py-10 flex flex-col md:flex-row items-stretch md:items-center">
        {numbers.map((item, index) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center gap-4 flex-1 justify-start md:justify-center py-4 md:py-0
              ${index < numbers.length - 1 ? 'border-b border-gray-100 md:border-b-0 md:border-r md:border-gray-100' : ''}`}
          >
            <span
              className="text-[42px] md:text-[52px] font-bold leading-none select-none flex-shrink-0"
              style={{ color: '#D1D9F0' }}
            >
              {item.num}
            </span>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-zenmo-secondary">{item.title}</h3>
              <p className="text-sm text-zenmo-text">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
