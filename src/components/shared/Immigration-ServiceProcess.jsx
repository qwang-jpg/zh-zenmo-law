import { motion } from 'framer-motion'

function StepItem({ step, showBorderBottom, showBorderRight }) {
  return (
    <div
      className={`flex items-start gap-3 py-4 px-5
        ${showBorderBottom ? 'border-b border-slate-100' : ''}
        ${showBorderRight  ? 'border-r border-slate-100' : ''}
      `}
    >
      <span className="flex-shrink-0 text-xs font-bold tabular-nums mt-0.5 w-6 text-center text-zenmo-subheading">
        {step.num}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-zenmo-secondary leading-snug mb-1">
          {step.title}
        </p>
        <p className="text-sm text-zenmo-text leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

function PhaseBlock({ phase, phaseIndex }) {
  const { steps, rfeNote } = phase
  const cols = 2

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: phaseIndex * 0.06 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap bg-zenmo-btn1/[0.08] text-zenmo-btn1">
          {phase.phase}
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-zenmo-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {steps.map((step, i) => {
            const isLastRow = i >= steps.length - (steps.length % cols || cols)
            const isRightCol = i % cols === cols - 1
            const isLastItem = i === steps.length - 1

            return (
              <StepItem
                key={step.num}
                step={step}
                showBorderBottom={!isLastRow && !(isLastItem && steps.length % cols !== 0)}
                showBorderRight={
                  !isRightCol &&
                  steps.length > 1 &&
                  !(isLastItem && steps.length % 2 !== 0)
                }
              />
            )
          })}
          {steps.length % 2 !== 0 && <div className="hidden md:block" />}
        </div>

        {/* Optional RFE / supplemental note block */}
        {rfeNote && (
          <div className="border-t border-gray-100 px-5 py-4">
            <p className="text-sm font-semibold text-zenmo-secondary mb-1">
              {rfeNote.title}
            </p>
            <p className="text-sm text-zenmo-text leading-relaxed">
              {rfeNote.content}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ServiceProcessSection({ title, subtitle, phases }) {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-10 max-w-2xl"
        >
          {subtitle}
        </motion.p>
        <div className="flex flex-col gap-6">
          {phases.map((p, i) => (
            <PhaseBlock key={p.phase} phase={p} phaseIndex={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
