import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight } from 'lucide-react'

const eb2Items = [
  { label: '硕士学位及以上',           desc: '美国或海外同等学历，所申请职位通常也要求此类学历背景' },
  { label: '学士学位 + 五年累进工作经验', desc: '在同一专业领域内，工作职责在深度或复杂程度上有所递进' },
  { label: '卓越能力（无需高级学位）',   desc: '在科学、艺术或商业领域超出同行，须以具体成就证明' },
]

const eb3Types = [
  { label: '熟练工人',   desc: '入职前须具备至少两年相关全职工作经验或培训，不要求学士学位' },
  { label: '专业人员',   desc: '须持有学士学位或同等外国学历，且所申请职位要求以该学位作为入职条件' },
  { label: '非熟练工人', desc: '工作要求低于两年培训或经验的其他工人类别，此类别通常排期时间较长' },
]

export default function EB23Categories() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          EB-2 / EB-3 申请类别
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-12"
        >
          两类职业移民均需美国雇主担保，申请前须结合学历、工作经历与职位要求明确适用类别
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-5">

          {/* ── EB-2 ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-zenmo-md"
          >
            {/* Header — includes intro text */}
            <div className="px-6 pt-6 pb-5" style={{ backgroundColor: 'rgba(79,71,230,0.07)' }}>
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3"
                style={{ backgroundColor: 'rgba(79,71,230,0.10)', color: '#4F47E6' }}
              >
                EB-2
              </span>
              <h3 className="text-base md:text-lg font-semibold text-zenmo-secondary leading-snug mb-1.5">
                专业人员及卓越能力人才
              </h3>
              <p className="text-xs text-zenmo-desc-gray leading-relaxed">
                申请人须满足以下条件之一
              </p>
            </div>

            <div className="h-px bg-gray-100" />

            {/* 3 equal rows — flex-1 each for height alignment */}
            <div className="flex-1 flex flex-col bg-white divide-y divide-slate-100">
              {eb2Items.map((item) => (
                <div key={item.label} className="flex items-start gap-3 flex-1 px-6 py-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                    style={{ backgroundColor: '#4F47E6' }}
                  />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-zenmo-secondary">{item.label}</span>
                    <span className="mx-1.5 text-zenmo-desc-gray">—</span>
                    <span className="text-zenmo-text">{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── EB-3 ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-zenmo-md"
          >
            {/* Header — includes intro text */}
            <div className="px-6 pt-6 pb-5" style={{ backgroundColor: 'rgba(8,145,178,0.07)' }}>
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3"
                style={{ backgroundColor: 'rgba(8,145,178,0.10)', color: '#0891B2' }}
              >
                EB-3
              </span>
              <h3 className="text-base md:text-lg font-semibold text-zenmo-secondary leading-snug mb-1.5">
                技能工人、专业人员及其他工人
              </h3>
              <p className="text-xs text-zenmo-desc-gray leading-relaxed">
                包含三个子类别，在所有职业移民类别中涵盖人群最广
              </p>
            </div>

            <div className="h-px bg-gray-100" />

            {/* 3 equal rows — flex-1 each for height alignment */}
            <div className="flex-1 flex flex-col bg-white divide-y divide-slate-100">
              {eb3Types.map((type) => (
                <div key={type.label} className="flex items-start gap-3 flex-1 px-6 py-4">
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(8,145,178,0.10)', color: '#0891B2' }}
                  >
                    {type.label}
                  </span>
                  <p className="text-sm text-zenmo-text leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Priority date — text above, link below, clear spacing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-gray-100 overflow-hidden shadow-zenmo-md"
        >
          <div className="px-6 py-3.5 flex items-center gap-2.5 border-b border-gray-100 bg-zenmo-light-bg">
            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-zenmo-btn1/10 text-zenmo-btn1">
              <CalendarDays size={13} strokeWidth={2} />
            </div>
            <p className="text-xs font-semibold text-zenmo-secondary">排期因国籍差异显著</p>
          </div>
          <div className="bg-white px-6 py-5">
            <p className="text-sm text-zenmo-text leading-relaxed mb-4">
              中国出生申请人的 EB-2/EB-3 排期通常存在数年至数十年积压；其他大多数国家申请人等待时间相对较短，部分类别当前可用。优先日期以 PERM 劳工部受理日为准，每月随国务院签证公告更新。
            </p>
            <a
              href="https://zh.zenmolaw.com/insights/%e7%bb%bf%e5%8d%a1%e6%8e%92%e6%9c%9f%e6%95%b0%e6%8d%ae/"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: '#4F47E6' }}
            >
              查看当前绿卡排期数据
              <ArrowRight size={14} strokeWidth={1.8} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
