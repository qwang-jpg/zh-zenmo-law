import { motion } from 'framer-motion'
import { Check, Minus, Clock3, Infinity as InfinityIcon } from 'lucide-react'

// ─── 适用情况数据 ────────────────────────────────────────────

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

// ─── 有效期数据 ──────────────────────────────────────────────

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  }
}

const ACCENT_RGB = hexToRgb('#4F47E6') // zenmo-btn1

const validityScenarios = [
  {
    label: '常规路径',
    segments: [
      { years: 3, shade: 0.30 },
      { years: 3, shade: 0.72 },
    ],
    totalYears: 6,
    note: '初始最长 3 年，可申请延期 3 年，合计最长 6 年',
  },
  {
    label: '自雇申请',
    segments: [
      { years: 1.5, shade: 0.22 },
      { years: 1.5, shade: 0.50 },
      { years: 3,   shade: 0.80 },
    ],
    totalYears: 6,
    note: '持有雇主 50% 以上股权或多数表决权；初始 1.5 年 + 延期 1.5 年 + 延期 3 年',
  },
]

// ─── 子组件 ──────────────────────────────────────────────────

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

function ValidityCard({ scenario }) {
  const { r, g, b } = ACCENT_RGB
  return (
    <div className="px-6 py-5 flex flex-col gap-3">
      {/* Title + total badge */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zenmo-secondary">{scenario.label}</span>
        <span className="text-xs font-semibold text-zenmo-btn1">最长 {scenario.totalYears} 年</span>
      </div>

      {/* Segmented bar */}
      <div className="flex h-7 rounded-lg overflow-hidden" style={{ gap: '2px' }}>
        {scenario.segments.map((seg, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-full"
            style={{
              flex: seg.years,
              backgroundColor: `rgba(${r},${g},${b},${seg.shade})`,
              borderRadius:
                i === 0
                  ? '6px 0 0 6px'
                  : i === scenario.segments.length - 1
                  ? '0 6px 6px 0'
                  : '0',
            }}
          >
            <span className="text-[10px] font-semibold text-white leading-none px-0.5">
              {seg.years}年
            </span>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-xs text-zenmo-desc-gray leading-relaxed">{scenario.note}</p>
    </div>
  )
}

function ValidityBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="rounded-2xl border border-gray-100 overflow-hidden shadow-zenmo-md"
    >
      {/* Header */}
      <div className="px-6 py-3.5 flex items-center gap-2.5 border-b border-gray-100 bg-zenmo-light-bg">
        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-zenmo-btn1/10 text-zenmo-btn1">
          <Clock3 size={13} strokeWidth={2} />
        </div>
        <p className="text-xs font-semibold text-zenmo-secondary">H-1B 在美有效期说明</p>
      </div>

      {/* 2-column scenario cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white">
        {validityScenarios.map((scenario) => (
          <ValidityCard key={scenario.label} scenario={scenario} />
        ))}
      </div>

      {/* Beyond 6 years note */}
      <div className="border-t border-gray-100 px-6 py-4 bg-zenmo-light-bg flex items-start gap-3">
        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-zenmo-btn1/10 text-zenmo-btn1 mt-0.5">
          <InfinityIcon size={11} strokeWidth={2.2} />
        </div>
        <div>
          <p className="text-xs font-semibold text-zenmo-secondary mb-1">
            I-140 已批准且排期未到 — 可突破六年上限
          </p>
          <p className="text-xs text-zenmo-text leading-relaxed">
            若受益人持有已批准的 I-140 移民申请（EB-1/EB-2/EB-3）且绿卡排期尚未到达，可依据 AC21 在六年到期后继续申请延期，每次最长 3 年，直至绿卡申请最终完成或身份最终确定。
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── 主组件 ──────────────────────────────────────────────────

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

        {/* 适用情况分组 */}
        <div className="flex flex-col gap-8 mb-10 md:mb-12">
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

        {/* 有效期说明 */}
        <ValidityBlock />

      </div>
    </section>
  )
}
