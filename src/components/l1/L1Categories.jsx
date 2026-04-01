import { motion } from 'framer-motion'

const categories = [
  {
    code: 'L-1A',
    title: '跨国公司高管 / 经理',
    accentColor: '#4F47E6',
    accentBg: 'rgba(79,71,230,0.07)',
    accentBadgeBg: 'rgba(79,71,230,0.10)',
    accentBadgeText: '#4F47E6',
    desc: '适用于被派往美国公司担任管理层或高管职位的员工',
    items: [
      '公司董事、总经理、副总裁等高级管理人员',
      '负责部门运营及团队管理的经理级人员',
      '负责战略决策或业务发展方向的核心人员',
    ],
    totalYears: 7,
    timelines: [
      {
        label: '新公司',
        segments: [
          { years: 1, shade: 0.25 },
          { years: 2, shade: 0.45 },
          { years: 2, shade: 0.65 },
          { years: 2, shade: 0.85 },
        ],
      },
      {
        label: '已成立公司',
        segments: [
          { years: 3, shade: 0.25 },
          { years: 2, shade: 0.55 },
          { years: 2, shade: 0.85 },
        ],
      },
    ],
  },
  {
    code: 'L-1B',
    title: '跨国公司专业知识人员',
    accentColor: '#0891B2',
    accentBg: 'rgba(8,145,178,0.07)',
    accentBadgeBg: 'rgba(8,145,178,0.10)',
    accentBadgeText: '#0891B2',
    desc: '适用于具备公司专门技术或专业知识的员工',
    items: [
      '掌握公司核心产品技术的专业人员',
      '熟悉公司内部系统、流程或解决方案的关键员工',
      '对公司商业模式或技术体系具有深度理解的专业人员',
    ],
    totalYears: 5,
    timelines: [
      {
        label: '新公司',
        segments: [
          { years: 1, shade: 0.25 },
          { years: 2, shade: 0.55 },
          { years: 2, shade: 0.85 },
        ],
      },
      {
        label: '已成立公司',
        segments: [
          { years: 3, shade: 0.30 },
          { years: 2, shade: 0.85 },
        ],
      },
    ],
  },
]

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  }
}

function TimelineRow({ row, totalYears, accentColor }) {
  const { r, g, b } = hexToRgb(accentColor)
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-zenmo-desc-gray w-16 flex-shrink-0 leading-tight">
        {row.label}
      </span>
      <div className="flex flex-1 h-6 rounded-lg overflow-hidden" style={{ gap: '2px' }}>
        {row.segments.map((seg, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-full"
            style={{
              flex: seg.years,
              backgroundColor: `rgba(${r},${g},${b},${seg.shade})`,
              borderRadius: i === 0 ? '6px 0 0 6px' : i === row.segments.length - 1 ? '0 6px 6px 0' : '0',
            }}
          >
            <span className="text-[10px] font-semibold text-white leading-none">
              {seg.years}年
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function L1Categories() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          L-1 签证类别
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-12"
        >
          L-1 签证分为两个子类别，适用范围与停留期限有所不同，申请前须明确员工的实际职能与定位
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
              <div className="bg-white px-6 py-5">
                <p className="text-sm text-zenmo-text leading-relaxed mb-4">{cat.desc}，例如：</p>
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

              <div className="h-px bg-gray-100" />

              {/* Timeline block */}
              <div className="bg-white px-6 py-5 flex flex-col gap-3">
                <p className="text-xs font-semibold text-zenmo-secondary mb-0.5">
                  在美停留最长可延期至 {cat.totalYears} 年：
                </p>
                {cat.timelines.map((row) => (
                  <TimelineRow
                    key={row.label}
                    row={row}
                    totalYears={cat.totalYears}
                    accentColor={cat.accentColor}
                  />
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
