import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle } from 'lucide-react'

const alerts = [
  {
    tag: '2026 新政',
    title: '抽签机制改为工资加权选择',
    desc: '自 FY-2027 起，USCIS 将按工资层级（Level 1–4）加权选取，高工资层级中签概率显著提高。注册前须提前确认岗位、工作地点与工资层级策略。',
  },
  {
    tag: '2026 新政',
    title: '100,000 美元附加付款要求',
    desc: '部分在美国境外的新 H-1B 受益人，在 2025 年 9 月 21 日后递交的 petition 须附加 $100,000 付款或满足例外条件。具体适用范围需个案评估。',
  },
]

export default function H1BPolicyAlert() {
  return (
    <section className="py-10 md:py-14 bg-zenmo-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* Header bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5 px-4 py-3 rounded-xl"
          style={{
            backgroundColor: 'rgba(251,191,36,0.1)',
            border: '1px solid rgba(251,191,36,0.25)',
          }}
        >
          <AlertTriangle size={18} strokeWidth={2} style={{ color: '#D97706' }} className="flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold" style={{ color: '#92400E' }}>
            2026 年 H-1B 重要政策变动，申请前请务必了解
          </p>
        </motion.div>

        {/* Alert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {alerts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border"
              style={{
                borderColor: 'rgba(251,191,36,0.3)',
                borderLeftWidth: '3px',
                borderLeftColor: '#FBBF24',
                boxShadow: '0 1px 8px rgba(15,23,42,0.05)',
              }}
            >
              <span
                className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
                style={{ backgroundColor: 'rgba(251,191,36,0.15)', color: '#B45309' }}
              >
                {item.tag}
              </span>
              <h3 className="text-base font-semibold text-zenmo-secondary mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-zenmo-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#4F47E6' }}
          >
            不确定新政是否影响你的案件？联系我们免费评估
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
