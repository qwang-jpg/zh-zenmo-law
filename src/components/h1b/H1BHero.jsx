import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

export default function H1BHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[420px] md:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/Backgrounds/Immigration-background.jpg')})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(25,33,51,0.93) 0%, rgba(25,33,51,0.82) 100%)' }}
      />
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="w-full md:w-[85%] lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[26px] leading-[1.35] md:text-4xl lg:text-[50px] lg:leading-[1.2] font-semibold text-white mb-4 md:mb-6"
          >
            H-1B
            <br />
            非移民工作签证
          </motion.h1>
        </div>
        <div className="w-full md:w-[85%] lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed mb-7"
          >
            H-1B 是美国雇主为符合条件的专业岗位聘用外籍员工所使用的非移民工作签证类别。该类别涉及"专业性职位（Specialty Occupation）""工资标准（Prevailing Wage / LCA）""雇佣控制关系（Employer-Employee Relationship）"以及抽签限制等关键规则。
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
