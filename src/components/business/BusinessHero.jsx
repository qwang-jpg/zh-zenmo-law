import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'

export default function BusinessHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[460px] md:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/Backgrounds/business-background.jpg')})` }}
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
          为企业经营与发展的关键阶段
          <br />
          提供合规导向的法律支持
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed w-full md:w-[85%] lg:w-[55%]"
        >
          在美国开展业务涉及公司设立、合同关系、知识产权及合规责任等多个法律维度，任何单一事务的处理都可能对企业的长期运营产生连锁影响。阡陌律师事务所为在美经营及跨境布局的企业提供系统化商业法律支持，协助企业建立合规基础、降低交易与运营风险，并在出现争议时获得及时有效的法律应对方案。
        </motion.p>
      </div>
    </section>
  )
}
