import { motion } from 'framer-motion'

export default function EmployerServicesSection({
  title,
  mainDescription,
  sideNote,
  services,
  sectionLabel = '常见服务包括',
}) {
  const n = services.length

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
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-sm md:text-base text-zenmo-text leading-relaxed max-w-xl"
            >
              {mainDescription}
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-zenmo-desc-gray leading-relaxed mt-4 md:mt-0 md:text-right md:max-w-[260px] flex-shrink-0"
          >
            {sideNote}
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
            {sectionLabel}
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </motion.div>

        {/* Services grid: 2 cols mobile / 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-0">
          {services.map((item, i) => {
            const mobileLeftCol = i % 2 === 0
            const desktopRightCol = i % 4 === 3

            const rightClasses = [
              mobileLeftCol ? 'border-r border-gray-100' : '',
              !mobileLeftCol ? 'md:border-r md:border-gray-100' : '',
              desktopRightCol ? 'md:border-r-0' : '',
            ].join(' ')

            const mobileBottom = i < n - 2
            const desktopBottom = i < n - 4
            const bottomClasses = [
              mobileBottom ? 'border-b border-gray-100' : '',
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
                <span className="text-xs font-bold tabular-nums flex-shrink-0 mt-0.5 text-zenmo-subheading">
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
