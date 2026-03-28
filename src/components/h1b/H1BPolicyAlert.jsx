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
    <section className="py-10 md:py-14" style={{ background: '#0F172A' }}>
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <AlertTriangle size={18} strokeWidth={1.8} style={{ color: '#FBBF24' }} className="flex-shrink-0" />
          <h2 className="text-sm md:text-base font-semibold text-white">
            2026 年 H-1B 重要政策变动，申请前请务必了解
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {alerts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl p-4 border"
              style={{ backgroundColor: 'rgba(251,191,36,0.05)', borderColor: 'rgba(251,191,36,0.2)' }}
            >
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: 'rgba(251,191,36,0.15)', color: '#FBBF24' }}>
                {item.tag}
              </span>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{item.title}</h3>
              <p className="text-xs text-zenmo-subheading leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact" className="inline-flex items-center gap-2 text-xs md:text-sm font-medium transition-colors" style={{ color: '#7B9EFF' }}>
            不确定新政是否影响你的案件？联系我们免费评估
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
