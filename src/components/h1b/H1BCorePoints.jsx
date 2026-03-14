import { motion } from 'framer-motion'

const corePoints = [
  {
    num: '01',
    en: 'Specialty Occupation',
    title: '专业性职位要求',
    desc: '岗位需要具备与职位职责直接相关的本科及以上学历（或等同资历），并能以职责、行业惯例与雇主用工结构进行证明。',
  },
  {
    num: '02',
    en: 'Employer-Led Process',
    title: '雇主主导的申请机制',
    desc: 'H-1B 由雇主发起并承担主要合规责任，包括岗位设定、工资标准、LCA 提交、用工管理与记录保留等。',
  },
  {
    num: '03',
    en: 'LCA / Prevailing Wage',
    title: '工资标准与合规要求',
    desc: '雇主需承诺支付不低于适用工资标准的薪资，并遵守与公告、工作地点、工作内容变动相关的合规义务。',
  },
  {
    num: '04',
    en: 'Cap & Timeline',
    title: '名额与时间线',
    desc: '常规 H-1B 申请受年度名额限制并涉及抽签；部分雇主或岗位可能属于免抽签（cap-exempt）路径，是否适用需结合雇主性质与岗位安排评估。',
  },
]

export default function H1BCorePoints() {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-2"
        >
          H-1B 申请核心要点
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-14"
        >
          了解 H-1B 的四个基础维度，是判断申请可行性的前提
        </motion.p>

        {/* Desktop: 4-column with dividers */}
        <div className="hidden md:grid md:grid-cols-4 divide-x divide-gray-200">
          {corePoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="flex flex-col px-7 first:pl-0 last:pr-0 group"
            >
              <div className="h-0.5 w-8 mb-6 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: '#7E3DED' }} />
              <span className="text-6xl font-black leading-none mb-4 select-none" style={{ color: 'rgba(126,61,237,0.08)' }}>
                {point.num}
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: '#7E3DED' }}>
                {point.en}
              </span>
              <h3 className="text-sm font-semibold text-zenmo-secondary mb-3 leading-snug">{point.title}</h3>
              <p className="text-xs text-zenmo-text leading-relaxed mt-auto">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col divide-y divide-gray-100">
          {corePoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex gap-4 py-5"
            >
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <div className="w-0.5 h-full min-h-[3rem]" style={{ backgroundColor: 'rgba(126,61,237,0.2)' }} />
                <span className="text-xs font-black" style={{ color: 'rgba(126,61,237,0.35)' }}>{point.num}</span>
              </div>
              <div className="flex-1 pb-1">
                <span className="text-[10px] font-semibold tracking-widest uppercase block mb-1.5" style={{ color: '#7E3DED' }}>
                  {point.en}
                </span>
                <h3 className="text-sm font-semibold text-zenmo-secondary mb-2 leading-snug">{point.title}</h3>
                <p className="text-xs text-zenmo-text leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
