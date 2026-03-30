import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    tag: '约 1–2 周',
    title: '申请策略评估',
    desc: '评估企业结构与申请可行性，确定 L-1A 或 L-1B 路径，制定申请时间规划。',
  },
  {
    num: '02',
    tag: '约 2–6 周',
    title: '准备申请材料',
    desc: '准备公司文件、运营证明材料，设计岗位职责与组织架构，律师起草法律支持文件。',
  },
  {
    num: '03',
    tag: '加急 15 工作日 · 常规 4–6 个月',
    title: '递交 I-129 并等待审理',
    desc: '向 USCIS 递交 L-1 申请；如收到 RFE 补件通知，律师协助制定回应策略并准备材料。',
  },
  {
    num: '04',
    tag: '约 2–6 周（如需领事馆面签）',
    title: '获得 L-1 身份',
    desc: '境内申请人可直接转换身份；境外申请人获批后前往领事馆面签，取得签证后入境工作。',
  },
  {
    num: '05',
    tag: '可与主申请同步办理',
    title: '家属申请 L-2 签证',
    desc: '配偶及 21 岁以下未婚子女可申请 L-2 签证随行，配偶可申请工作许可（EAD）。',
  },
  {
    num: '06',
    tag: '公司运营满 1 年后',
    title: '规划 EB-1C 绿卡路径',
    desc: 'L-1A 持有人可在条件成熟后申请 EB-1C 跨国高管绿卡，无需劳工证，实现长期在美发展。',
  },
]

const BLEED = '28%'

function StepCard({ step, position, index, isFirst, isLast }) {
  const ml = isFirst ? '0%' : `-${BLEED}`
  const mr = isLast  ? '0%' : `-${BLEED}`

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -16 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="relative z-10 rounded-xl px-4 py-4 text-center"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <span
        className="text-[11px] font-semibold block mb-1.5 leading-snug"
        style={{ color: '#7B9EFF' }}
      >
        {step.tag}
      </span>
      <h4 className="text-sm font-semibold text-white leading-snug mb-2">{step.title}</h4>
      <p className="text-xs text-zenmo-subheading leading-relaxed">{step.desc}</p>
    </motion.div>
  )
}

export default function L1Process() {
  return (
    <section className="py-12 md:py-20 overflow-hidden" style={{ background: '#0F172A' }}>
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-white mb-3"
        >
          申请时间线参考
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body text-zenmo-subheading mb-10 md:mb-14"
        >
          从策略评估到绿卡规划，阡陌全程协助推进，确保每个节点清晰可预期
        </motion.p>

        {/* ── Desktop: alternating top/bottom across 6 columns ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6">

            {/* Top row: even-index (01, 03, 05) */}
            {steps.map((step, i) => (
              <div key={`top-${step.num}`} className="flex flex-col justify-end pb-3 px-1.5">
                {i % 2 === 0 ? (
                  <StepCard step={step} position="top" index={i} isFirst={i === 0} isLast={i === steps.length - 1} />
                ) : (
                  <div />
                )}
              </div>
            ))}

            {/* Axis row */}
            {steps.map((step, i) => (
              <div key={`node-${step.num}`} className="relative flex items-center justify-center py-2">
                {i > 0 && (
                  <div
                    className="absolute right-1/2 left-0 top-1/2 -translate-y-1/2 h-px"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  />
                )}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    backgroundColor: '#7E3DED',
                    border: '2px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {step.num}
                </motion.div>
              </div>
            ))}

            {/* Bottom row: odd-index (02, 04, 06) */}
            {steps.map((step, i) => (
              <div key={`bottom-${step.num}`} className="flex flex-col justify-start pt-3 px-1.5">
                {i % 2 !== 0 ? (
                  <StepCard step={step} position="bottom" index={i} isFirst={i === 0} isLast={i === steps.length - 1} />
                ) : (
                  <div />
                )}
              </div>
            ))}

          </div>
        </div>

        {/* ── Mobile: vertical list ── */}
        <div className="md:hidden relative">
          <div
            className="absolute left-4 top-2 bottom-2 w-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          />
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 relative"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 z-10"
                  style={{
                    backgroundColor: '#7E3DED',
                    border: '2px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {step.num}
                </div>
                <div
                  className="flex-1 rounded-xl px-4 py-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <span
                    className="text-xs font-semibold block mb-1 leading-snug"
                    style={{ color: '#7B9EFF' }}
                  >
                    {step.tag}
                  </span>
                  <h4 className="text-sm font-semibold text-white leading-snug mb-1">{step.title}</h4>
                  <p className="text-sm text-zenmo-subheading leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
