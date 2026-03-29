import { motion } from 'framer-motion'

const services = [
  { num: '01', title: '岗位职责结构建议' },
  { num: '02', title: '岗位专业性评估' },
  { num: '03', title: '薪资结构合规建议' },
  { num: '04', title: '招聘时间线规划' },
  { num: '05', title: 'OPT 转 H-1B 规划' },
  { num: '06', title: '多员工申请安排' },
  { num: '07', title: '合规风险评估' },
  { num: '08', title: '身份路径规划建议' },
]

export default function H1BEmployerServices() {
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
              我们协助企业建立规范的 H-1B 申请流程，帮助企业更稳定地聘用国际人才。
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-zenmo-desc-gray leading-relaxed mt-4 md:mt-0 md:text-right md:max-w-[260px] flex-shrink-0"
          >
            对于有长期国际人才需求的企业，我们可以提供持续法律支持。
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
            const col = i % 4
            const totalRows = Math.ceil(services.length / 4)
            const isLastRowDesktop = Math.floor(i / 4) === totalRows - 1

            const mobileCol = i % 2
            const mobileTotalRows = Math.ceil(services.length / 2)
            const isLastRowMobile = Math.floor(i / 2) === mobileTotalRows - 1

            // 保守策略：桌面末行 & 手机末行都不加底线
            const showBorderBottom = !isLastRowDesktop && !isLastRowMobile

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-3 py-4 px-4"
                style={{
                  borderBottom: showBorderBottom ? '1px solid #F1F5F9' : 'none',
                  borderRight: col < 3 ? '1px solid #F1F5F9' : 'none',
                }}
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
