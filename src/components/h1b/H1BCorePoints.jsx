import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'

const suitable = [
  '拥有本科或以上学历',
  '专业背景与岗位直接相关',
  '岗位需要专业知识支持',
  '雇主有真实招聘需求',
  '薪资符合行业标准',
  '希望在美国长期发展职业',
]

const needsEval = [
  '专业与岗位并非完全对应',
  '岗位职责较为综合或跨领域',
  '公司规模较小或成立时间较短',
  '岗位为远程或多地点工作模式',
  '申请人为海外学历',
  '岗位属于较新兴职业方向',
]

// 根据列数判断是否为最后一行
function isLastRow(i, total, cols) {
  const lastRowStart = total - ((total % cols) || cols)
  return i >= lastRowStart
}

function Group({ title, subtitle, items, variant, delay }) {
  const isGood = variant === 'good'
  const accentColor = isGood ? '#4F47E6' : '#94A3B8'
  const iconBg    = isGood ? 'rgba(79,71,230,0.08)'   : 'rgba(148,163,184,0.12)'
  const iconColor = isGood ? '#4F47E6' : '#94A3B8'
  const Icon = isGood ? Check : Minus

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-4 w-0.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
        <span className="text-sm font-semibold text-zenmo-secondary">{title}</span>
        <span className="hidden md:inline text-xs text-zenmo-desc-gray">{subtitle}</span>
      </div>
      <p className="md:hidden text-xs text-zenmo-desc-gray mb-4 leading-relaxed">{subtitle}</p>

      {/* Grid: 3 cols on desktop, 2 cols on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6">
        {items.map((text, i) => (
          <div
            key={text}
            className="flex items-center gap-2.5 py-2.5"
            style={{
              // 手机2列、桌面3列分别计算是否末行，用 CSS 无法区分，统一用最保守策略：
              // 只要不是 3 列末行就加线（3列比2列更严格，多数情况正确）
              borderBottom: !isLastRow(i, items.length, 3) ? '1px solid #F1F5F9' : 'none',
            }}
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: iconBg }}
            >
              <Icon size={9} strokeWidth={2.5} style={{ color: iconColor }} />
            </div>
            <span className="text-sm text-zenmo-text leading-snug">{text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function H1BCorePoints() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-2"
        >
          H-1B 适用情况
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-12"
        >
          在申请前进行合理评估，有助于降低补件或延期风险
        </motion.p>

        <div className="flex flex-col gap-8">
          <Group
            title="通常适合申请"
            subtitle="满足以下条件的申请人，申请路径相对清晰"
            items={suitable}
            variant="good"
            delay={0}
          />
          <div className="border-t border-gray-100" />
          <Group
            title="需要额外策略评估"
            subtitle="存在以下情形时，建议提前与律师制定应对方案"
            items={needsEval}
            variant="warn"
            delay={0.1}
          />
        </div>

      </div>
    </section>
  )
}
