import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'

export default function ImmigrationHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[460px] md:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/Backgrounds/Immigration-background.jpg')})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(25,33,51,0.93) 0%, rgba(25,33,51,0.82) 100%)' }}
      />
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[26px] leading-[1.35] md:text-4xl lg:text-[50px] lg:leading-[1.2] font-semibold text-white mb-4 md:mb-6 w-full md:w-[85%] lg:w-[55%]"
        >
          为不同发展阶段
          <br />
          提供系统化的美国移民法律支持
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed w-full md:w-[85%] lg:w-[55%]"
        >
          美国移民法律体系复杂且持续变化，不同身份路径之间往往相互关联，单一申请通常只是长期规划中的一个阶段。
          阡陌律师事务所以整体路径设计与合规连续性为核心，在充分了解客户背景、发展目标及潜在风险因素的基础上，协助制定符合个人或企业发展节奏的移民法律策略。
        </motion.p>
      </div>
    </section>
  )
}
