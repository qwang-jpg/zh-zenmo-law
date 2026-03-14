import { motion } from 'framer-motion'

const timelineSteps = [
  { num: '01', date: '12月 - 2月',     title: '与雇主达成共识',   desc: '确认H-1B申请意向，与律师确定职位及现行工资标准（Prevailing Wage）。' },
  { num: '02', date: '3月4日 - 19日',  title: '线上抽签注册',     desc: '注册窗口开放，在移民局指定时间内完成电子抽签注册并缴纳注册费。' },
  { num: '03', date: '3月20日起',      title: '等待移民局抽签',   desc: '移民局完成抽签选取，结果通常于3月底前公布。' },
  { num: '04', date: '4月1日',         title: '中签后准备材料',   desc: '确认中签后，雇主与雇员按材料清单收集文件，发送律师启动申请。' },
  { num: '05', date: '4月 - 6月30日', title: '律师完成递交',     desc: '在中签后90天内，律师完成全部材料并邮寄至移民局指定审核中心。' },
  { num: '06', date: '审理期间',       title: '移民局审理',       desc: '移民局完成审理；如发出RFE补件，律师将协助回复并持续跟进。' },
  { num: '07', date: '10月1日',        title: 'H-1B统一生效',    desc: '申请获批后，H-1B于10月1日正式生效。' },
]

const CARD_H = 160
const NODE_H = 40

function StepCard({ step }) {
  return (
    <div className="bg-white/5 rounded-xl px-4 py-4 text-center w-full">
      <span className="text-xs font-semibold block mb-1.5" style={{ color: '#7B9EFF' }}>{step.date}</span>
      <h4 className="text-sm font-semibold text-white leading-snug mb-2">{step.title}</h4>
      <p className="text-xs text-zenmo-subheading leading-relaxed">{step.desc}</p>
    </div>
  )
}

export default function H1BTimeline() {
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
          以FY-2027年度H-1B申请周期为参考，具体时间以USCIS公告为准
        </motion.p>

        {/* Desktop: alternating above/below cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-7" style={{ height: `${CARD_H}px` }}>
            {timelineSteps.map((step, i) => (
              <motion.div
                key={`top-${step.num}`}
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-end px-1.5 pb-3"
              >
                {i % 2 === 0 && <StepCard step={step} />}
              </motion.div>
            ))}
          </div>
          <div className="relative grid grid-cols-7" style={{ height: `${NODE_H}px` }}>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
              <div className="w-full h-px bg-white/10" />
            </div>
            {timelineSteps.map((step, i) => (
              <div key={`node-${step.num}`} className="flex items-center justify-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white/15"
                  style={{ backgroundColor: '#7E3DED' }}
                >
                  {step.num}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7" style={{ height: `${CARD_H}px` }}>
            {timelineSteps.map((step, i) => (
              <motion.div
                key={`bottom-${step.num}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start px-1.5 pt-3"
              >
                {i % 2 !== 0 && <StepCard step={step} />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
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
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 z-10 border-2 border-white/15"
                  style={{ backgroundColor: '#7E3DED' }}
                >
                  {step.num}
                </div>
                <div className="flex-1 bg-white/5 rounded-xl px-4 py-3">
                  <span className="text-xs font-semibold block mb-1" style={{ color: '#7B9EFF' }}>{step.date}</span>
                  <h4 className="text-sm font-semibold text-white leading-snug mb-1">{step.title}</h4>
                  <p className="text-xs text-zenmo-subheading leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
