import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

export default function H1BHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[480px] md:min-h-[560px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/Backgrounds/Immigration-background.jpg')})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(25,33,51,0.95) 0%, rgba(25,33,51,0.80) 100%)' }}
      />

      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-14 md:py-24">
        <div className="w-full md:w-[85%] lg:w-[60%]">

          {/* Label badge — 统一使用 #4F47E6 系紫色，与 L1/O1 保持一致 */}
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
              H-1B Visa
            </span>
            <span className="text-[10px] text-white/30 tracking-widest uppercase">非移民工作签证</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[28px] leading-[1.3] md:text-4xl lg:text-[50px] lg:leading-[1.15] font-semibold text-white mb-7 md:mb-8"
          >
            H-1B 签证律师服务
          </motion.h1>

          {/* Two-paragraph subtitle with divider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 mb-8"
          >
            <p className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed">
              H-1B 是最常见的工作签证之一，适用于从事专业性岗位的外国人才。签证允许美国雇主雇佣具备特定专业背景的员工在美国合法工作，并为后续长期身份发展提供基础。
            </p>
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)' }}
            />
            <p className="text-sm md:text-base font-normal leading-relaxed" style={{ color: 'rgba(203,213,225,0.75)' }}>
              我们的服务不仅限于准备申请材料，更侧重从整体身份规划角度出发，为申请人和雇主制定合理的申请策略，降低申请风险，并为未来职业发展与身份安排提供持续法律支持。
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
