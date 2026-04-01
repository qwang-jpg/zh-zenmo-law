import { motion } from 'framer-motion'
import { Infinity } from 'lucide-react'

const categories = [
  {
    code: 'O-1A',
    title: '科学、教育、商业或体育领域杰出人才',
    accentColor: '#4F47E6',
    accentBg: 'rgba(79,71,230,0.07)',
    accentBadgeBg: 'rgba(79,71,230,0.10)',
    accentBadgeText: '#4F47E6',
    desc: '适用于在相关领域达到顶尖水平、具有杰出能力的专业人士，例如：',
    items: [
      '获得国际或全国性重要奖项的研究人员、科学家',
      '在商业或管理领域拥有突出成就的高级专业人士',
      '具有国家级或国际级参赛资历的运动员',
      '在学术或教育领域拥有广泛认可成果的专家',
    ],
  },
  {
    code: 'O-1B',
    title: '艺术、影视或电视领域卓越成就人才',
    accentColor: '#7B3AED',
    accentBg: 'rgba(123,58,237,0.07)',
    accentBadgeBg: 'rgba(123,58,237,0.10)',
    accentBadgeText: '#7B3AED',
    desc: '适用于在艺术创作或影视领域取得卓越成就、具有业界认可度的专业人士，例如：',
    items: [
      '在主要演出场所或制作项目中担任主要或重要角色的演员、导演',
      '在业界具备广泛认可度的音乐家、舞蹈家或视觉艺术家',
      '拥有重要影视制作参与记录的编剧、制片人或艺术指导',
      '在国际或全国性艺术节、展览中获得突出成就的创作者',
    ],
  },
]

const validityPoints = [
  {
    label: '首次批准',
    value: '最长 3 年',
    sub: '根据活动或项目安排确定，不超过 3 年',
  },
  {
    label: '续签',
    value: '每次 1 年，次数不限',
    sub: '只要仍有从事杰出能力工作的需要，可持续申请延期',
  },
]

export default function O1Categories() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          O-1 签证类别
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-12"
        >
          O-1 签证分为两个子类别，适用范围因领域不同而有所区分，申请前须明确申请人的专业方向与成就性质
        </motion.p>

        {/* ── Category cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-zenmo-md"
            >
              {/* Card header */}
              <div className="px-6 pt-6 pb-5" style={{ backgroundColor: cat.accentBg }}>
                <div className="mb-3">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ backgroundColor: cat.accentBadgeBg, color: cat.accentBadgeText }}
                  >
                    {cat.code}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-zenmo-secondary leading-snug">
                  {cat.title}
                </h3>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Bullet list */}
              <div className="bg-white px-6 py-5 flex-1">
                <p className="text-sm text-zenmo-text leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-col">
                  {cat.items.map((item, j) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 py-3"
                      style={{
                        borderBottom: j < cat.items.length - 1 ? '1px solid #F1F5F9' : 'none',
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: cat.accentColor }}
                      />
                      <span className="text-sm text-zenmo-text leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Shared validity block ── */}
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
              <Infinity size={13} strokeWidth={2} />
            </div>
            <p className="text-xs font-semibold text-zenmo-secondary">
              O-1A 与 O-1B 有效期规则相同
            </p>
          </div>

          {/* Two validity points side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white">
            {validityPoints.map((point) => (
              <div key={point.label} className="px-6 py-5 flex items-center gap-5">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-zenmo-desc-gray tracking-wide uppercase block mb-1">
                    {point.label}
                  </span>
                  <span className="text-lg md:text-xl font-semibold leading-snug block mb-1 text-zenmo-btn1">
                    {point.value}
                  </span>
                  <span className="text-xs text-zenmo-text leading-relaxed">
                    {point.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
