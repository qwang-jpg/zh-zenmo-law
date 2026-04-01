import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

export default function L1Hero() {
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
              L-1 Visa
            </span>
            <span className="text-[10px] text-white/30 tracking-widest uppercase">跨国公司调派签证</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[28px] leading-[1.3] md:text-4xl lg:text-[50px] lg:leading-[1.15] font-semibold text-white mb-7 md:mb-8"
          >
            L-1 签证律师服务
          </motion.h1>

          {/* Two-paragraph subtitle with divider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 mb-8"
          >
            <p className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed">
              L-1 签证适用于跨国企业将海外员工调派至美国公司工作的情形，常见于企业设立美国分公司、拓展美国市场、建立本地管理团队等场景。
            </p>
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)' }}
            />
            <p className="text-sm md:text-base font-normal leading-relaxed" style={{ color: 'rgba(203,213,225,0.75)' }}>
              我们协助企业完成从公司结构设计、签证申请到绿卡规划的整体法律策略，确保企业在美国的业务发展与移民规划保持一致。
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
