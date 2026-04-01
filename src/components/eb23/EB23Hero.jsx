import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

export default function EB23Hero() {
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
              EB-2 / EB-3
            </span>
            <span className="text-[10px] text-white/30 tracking-widest uppercase">职业移民绿卡</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[28px] leading-[1.3] md:text-4xl lg:text-[50px] lg:leading-[1.15] font-semibold text-white mb-7 md:mb-8"
          >
            EB-2 / EB-3 绿卡律师服务
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 mb-8"
          >
            <p className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed">
              EB-2 和 EB-3 是美国职业移民签证中最常见的两个类别，适用于由美国雇主担保的专业人员和技能工人。EB-2 还包含无需雇主担保的国家利益豁免路径（NIW），为符合条件的申请人提供了更灵活的绿卡申请方式。
            </p>
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)' }}
            />
            <p className="text-sm md:text-base font-normal leading-relaxed" style={{ color: 'rgba(203,213,225,0.75)' }}>
              我们协助申请人与雇主完成从 PERM 劳工证、I-140 移民申请到 I-485 身份调整的全流程法律服务，并结合排期动态制定合理的申请策略，帮助申请人在复杂的移民程序中清晰推进。
            </p>
          </motion.div>

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
