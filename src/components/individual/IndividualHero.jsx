import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'

export default function IndividualHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[460px] md:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/Backgrounds/Individual-background.jpg')})` }}
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
          为在美生活中的个人法律事务
          <br />
          提供及时可靠的法律支持
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed w-full md:w-[85%] lg:w-[55%]"
        >
          在美国学习、工作或生活过程中，个人可能面临交通纠纷、民事争议、人身损害或其他法律问题。阡陌律师事务所为在美个人客户提供系统化个人法律支持，在充分了解案件事实与风险因素的基础上，协助客户判断法律责任范围、程序路径及潜在影响，并在合规框架内推进后续法律事务。
        </motion.p>
      </div>
    </section>
  )
}
