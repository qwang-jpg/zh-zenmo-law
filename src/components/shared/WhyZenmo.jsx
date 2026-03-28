import { motion } from 'framer-motion'
import { ShieldCheck, MessageCircle, GitMerge, TrendingUp } from 'lucide-react'

const items = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.7} />,
    color: '#4F47E6',
    bg: 'rgba(79,71,230,0.08)',
    title: '合规优先的执业标准',
    desc: '所有法律意见均基于个案事实，专业经验及适用法律作出判断。',
  },
  {
    icon: <MessageCircle size={22} strokeWidth={1.7} />,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    title: '清晰透明的沟通机制',
    desc: '重要节点主动沟通，避免信息不对称带来沟通错误或不确定性。',
  },
  {
    icon: <GitMerge size={22} strokeWidth={1.7} />,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    title: '跨领域协同服务能力',
    desc: '移民、商业与个人事务间信息同步，避免客户碎片化解决问题。',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.7} />,
    color: '#0891B2',
    bg: 'rgba(8,145,178,0.08)',
    title: '长期发展的法律规划',
    desc: '关注长期的身份稳定、企业合规与个人发展，持续陪伴与支持。',
  },
]

export default function WhyZenmo({ title = '选择阡陌' }) {
  return (
    <section className="border-t border-gray-100 py-14 md:py-20 bg-zenmo-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-widest mb-3 text-zenmo-btn1">Why Choose Us</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle !mb-0">
            专业、透明与长期陪伴——我们在思维方式、沟通机制与服务交付上的核心差异
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group bg-white rounded-2xl p-7 border border-gray-100 flex items-start gap-5 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zenmo-secondary mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-zenmo-text leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
