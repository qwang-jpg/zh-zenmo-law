import { motion } from 'framer-motion'

export default function WhyZenmoSection({ title, subtitle, reasons }) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-zenmo-sm"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-zenmo-btn2/10 text-zenmo-btn2">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-zenmo-secondary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zenmo-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
