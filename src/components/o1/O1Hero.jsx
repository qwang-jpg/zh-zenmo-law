import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

export default function O1Hero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[480px] md:min-h-[560px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/Backgrounds/Immigration-background.jpg')})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(25,33,51,0.95) 0%, rgba(25,33,51,0.80) 100%)' }}
      />

      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-14 md:py-24">
        <div className="w-full md:w-[85%] lg:w-[60%]">

          {/* Label badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(79,71,230,0.25)', color: '#C4B0FF' }}
            >
              O-1 Visa
            </span>
            <span className="text-[10px] text-white/30 tracking-widest uppercase">杰出人才工作签证</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[28px] leading-[1.3] md:text-4xl lg:text-[50px] lg:leading-[1.15] font-semibold text-white mb-7 md:mb-8"
          >
            O-1 签证律师服务
          </motion.h1>

          {/* Two-paragraph subtitle with divider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 mb-8"
          >
            <p className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed">
              O-1 签证适用于在科学、教育、商业、艺术、影视或体育领域具有杰出能力的专业人士。签证允许申请人在美国从事与其专业领域相关的工作，并根据项目安排获得合法工作身份。
            </p>
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)' }}
            />
            <p className="text-sm md:text-base font-normal leading-relaxed" style={{ color: 'rgba(203,213,225,0.75)' }}>
              我们协助申请人通过系统化案件策略设计与法律论证，建立符合移民局审查逻辑的证据结构，提升整体申请质量与稳定性。
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link to="/contact" className="btn-primary hover:shadow-lg">
              免费预约资质评估
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
