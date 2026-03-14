import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section
      className="py-14 md:py-20 flex items-center justify-center min-h-[240px] md:min-h-[300px]"
      style={{ background: 'linear-gradient(325deg, #4E2995 0%, #121B2E 100%)' }}
    >
      <div className="max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[40px] font-semibold text-white mb-3"
        >
          联系我们
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base text-white/80 max-w-xl mx-auto"
        >
          无论您有任何法律问题，我们都愿意为您提供专业的信息咨询
        </motion.p>
      </div>
    </section>
  )
}
