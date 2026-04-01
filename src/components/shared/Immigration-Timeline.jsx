import { motion } from 'framer-motion'

function StepCard({ step, position, index, isFirst, isLast, bleed }) {
  const ml = isFirst ? '0%' : `-${bleed}`
  const mr = isLast  ? '0%' : `-${bleed}`

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -16 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="relative z-10 rounded-xl px-4 py-4 text-center bg-white/5"
      style={{ marginLeft: ml, marginRight: mr }}
    >
      <span className="text-[11px] font-semibold block mb-1.5 leading-snug text-zenmo-timeline-label">
        {step.label}
      </span>
      <h4 className="text-sm font-semibold text-white leading-snug mb-2">{step.title}</h4>
      <p className="text-sm text-zenmo-subheading leading-relaxed">{step.desc}</p>
    </motion.div>
  )
}

export default function TimelineSection({
  title,
  subtitle,
  steps,
  cols = 6,
  bleed = '28%',
}) {
  return (
    <section className="py-12 md:py-20 overflow-hidden bg-zenmo-secondary">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-white mb-3"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body text-zenmo-subheading mb-10 md:mb-14"
        >
          {subtitle}
        </motion.p>

        {/* ── Desktop: alternating top / bottom ── */}
        <div className="hidden md:block">
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>

            {/* Top row: even-index cards */}
            {steps.map((step, i) => (
              <div key={`top-${step.num}`} className="flex flex-col justify-end pb-3 px-1.5">
                {i % 2 === 0 ? (
                  <StepCard
                    step={step}
                    position="top"
                    index={i}
                    isFirst={i === 0}
                    isLast={i === steps.length - 1}
                    bleed={bleed}
                  />
                ) : (
                  <div />
                )}
              </div>
            ))}

            {/* Axis row */}
            {steps.map((step, i) => (
              <div key={`node-${step.num}`} className="relative flex items-center justify-center py-2">
                {i > 0 && (
                  <div className="absolute right-1/2 left-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
                )}
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-zenmo-btn2 border-2 border-white/15"
                >
                  {step.num}
                </motion.div>
              </div>
            ))}

            {/* Bottom row: odd-index cards */}
            {steps.map((step, i) => (
              <div key={`bottom-${step.num}`} className="flex flex-col justify-start pt-3 px-1.5">
                {i % 2 !== 0 ? (
                  <StepCard
                    step={step}
                    position="bottom"
                    index={i}
                    isFirst={i === 0}
                    isLast={i === steps.length - 1}
                    bleed={bleed}
                  />
                ) : (
                  <div />
                )}
              </div>
            ))}

          </div>
        </div>

        {/* ── Mobile: vertical list ── */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
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
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 z-10 bg-zenmo-btn2 border-2 border-white/15">
                  {step.num}
                </div>
                <div className="flex-1 rounded-xl px-4 py-4 bg-white/5">
                  <span className="text-xs font-semibold block mb-1 leading-snug text-zenmo-timeline-label">
                    {step.label}
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
