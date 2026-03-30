import { motion } from 'framer-motion'

const services = [
  { num: '01', title: '企业关联结构合规评估' },
  { num: '02', title: '岗位职责框架设计' },
  { num: '03', title: '组织架构文件准备' },
  { num: '04', title: 'New Office 申请全程支持' },
  { num: '05', title: '多员工调派统筹安排' },
  { num: '06', title: '申请时间线规划' },
  { num: '07', title: '续签与延期合规管理' },
  { num: '08', title: 'EB-1C 绿卡衔接规划' },
  { num: '09', title: '家属 L-2 签证安排' },
  { num: '10', title: '移民合规风险评估' },
  { num: '11', title: '政策变化影响分析' },
  { num: '12', title: '长期身份规划建议' },
]

export default function L1EmployerServices() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* Header row */}
        <div className="md:flex md:items-end md:justify-between md:gap-12 mb-10 md:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-3"
            >
              雇主支持服务
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-sm md:text-base text-zenmo-text leading-relaxed max-w-xl"
            >
              L-1 申请涉及公司结构、岗位设计与跨国关联关系的综合论证。阡陌协助企业从申请策略到后续合规，系统性地降低调派风险，确保在美业务稳定推进。
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-zenmo-desc-gray leading-relaxed mt-4 md:mt-0 md:text-right md:max-w-[260px] flex-shrink-0"
          >
            对于有持续员工调派需求的企业，我们可以提供长期法律支持。
          </motion.p>
        </div>

        {/* Divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-semibold text-zenmo-desc-gray tracking-wider">
            常见服务包括
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-0">
          {services.map((item, i) => {
            const n = services.length // 12

            // Right border — mobile: left col (i%2===0); desktop: not rightmost col (i%4!==3)
            const mobileLeftCol   = i % 2 === 0
            const desktopRightCol = i % 4 === 3
            const rightClasses = [
              mobileLeftCol   ? 'border-r border-gray-100' : '',   // show on mobile left col
              !mobileLeftCol  ? 'md:border-r md:border-gray-100' : '', // add back for desktop non-right-col
              desktopRightCol ? 'md:border-r-0' : '',               // remove on desktop right col
            ].join(' ')

            // Bottom border — mobile: not last 2 (i<10); desktop: not last 4 (i<8)
            const mobileBottom  = i < n - 2
            const desktopBottom = i < n - 4
            const bottomClasses = [
              mobileBottom               ? 'border-b border-gray-100' : '',
              mobileBottom && !desktopBottom ? 'md:border-b-0' : '',
            ].join(' ')

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`flex items-start gap-3 py-4 px-4 ${rightClasses} ${bottomClasses}`}
              >
                <span
                  className="text-xs font-bold tabular-nums flex-shrink-0 mt-0.5"
                  style={{ color: '#CBD5E1' }}
                >
                  {item.num}
                </span>
                <span className="text-sm font-medium text-zenmo-secondary leading-snug">
                  {item.title}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
