import { motion } from 'framer-motion'

const timelineSteps = [
  { num: '01', date: '12月 - 2月',     title: '与雇主达成共识',  desc: '确认 H-1B 申请意向，与律师确定职位及现行工资标准。' },
  { num: '02', date: '3月4日 - 19日',  title: '线上抽签注册',    desc: '注册窗口开放，在移民局指定时间内完成电子抽签注册并缴纳注册费。' },
  { num: '03', date: '3月20日起',      title: '等待移民局抽签',  desc: '移民局完成抽签选取，结果通常于3月底前公布。' },
  { num: '04', date: '4月1日',         title: '中签后准备材料',  desc: '确认中签后，雇主与雇员按材料清单收集文件，发送律师启动申请。' },
  { num: '05', date: '4月 - 6月30日', title: '律师完成递交',    desc: '在中签后90天内，律师完成全部材料并邮寄至移民局指定审核中心。' },
  { num: '06', date: '审理期间',       title: '移民局审理',      desc: '移民局完成审理；如发出RFE补件，律师将协助回复并持续跟进。' },
  { num: '07', date: '10月1日',        title: 'H-1B 统一生效',  desc: '申请获批后，H-1B于10月1日正式生效。' },
]

const BLEED = '30%'

function StepCard({ step, position, index, isFirst, isLast }) {
  const ml = isFirst ? '0%' : `-${BLEED}`
  const mr = isLast  ? '0%' : `-${BLEED}`

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -16 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="relative z-10 rounded-xl px-5 py-5 text-center"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <span className="text-sm font-semibold block mb-2" style={{ color: '#7B9EFF' }}>
        {step.date}
      </span>
      <h4 className="text-sm font-semibold text-white leading-snug mb-2">{step.title}</h4>
      <p className="text-sm text-zenmo-subheading leading-relaxed">{step.desc}</p>
    </motion.div>
  )
}

export default function H1BTimeline() {
  return (
    <section className="py-12 md:py-20 overflow-hidden" style={{ background: '#0F172A' }}>
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* Heading */}
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
          以 FY-2027 年度 H-1B 申请周期为参考，具体时间以 USCIS 公告为准
        </motion.p>

        {/* ── Desktop ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-7">

            {/* Top row: even-index cards */}
            {timelineSteps.map((step, i) => (
              <div key={`top-${step.num}`} className="flex flex-col justify-end pb-3">
                {i % 2 === 0 ? (
                  <StepCard
                    step={step}
                    position="top"
                    index={i}
                    isFirst={i === 0}
                    isLast={i === timelineSteps.length - 1}
                  />
                ) : (
                  <div />
                )}
              </div>
            ))}

            {/* Axis row */}
            {timelineSteps.map((step, i) => (
              <div key={`node-${step.num}`} className="relative flex items-center justify-center py-2">
                {i > 0 && (
                  <div
                    className="absolute right-1/2 left-0 top-1/2 -translate-y-1/2 h-px"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  />
                )}
                {i < timelineSteps.length - 1 && (
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

            {/* Bottom row: odd-index cards */}
            {timelineSteps.map((step, i) => (
              <div key={`bottom-${step.num}`} className="flex flex-col justify-start pt-3">
                {i % 2 !== 0 ? (
                  <StepCard
                    step={step}
                    position="bottom"
                    index={i}
                    isFirst={i === 0}
                    isLast={i === timelineSteps.length - 1}
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
          <div
            className="absolute left-4 top-2 bottom-2 w-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          />
          <div className="flex flex-col gap-5">
            {timelineSteps.map((step, i) => (
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
                  <span className="text-sm font-semibold block mb-1" style={{ color: '#7B9EFF' }}>
                    {step.date}
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
