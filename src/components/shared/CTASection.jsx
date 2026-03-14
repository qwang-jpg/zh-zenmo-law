import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = '准备好了解更多了吗？',
  description = '无论您正在规划赴美发展，还是已在美国学习、工作或经营企业，我们都会在评估与策略层面协助您更清晰地判断可行路径与潜在风险，并以透明的流程推进后续工作。',
  buttonText = '联系我们，免费咨询',
  buttonLink = '/contact',
}) {
  return (
    <section className="py-12 md:py-20 px-5 md:px-8 lg:px-0" aria-label="联系咨询">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="cta-gradient rounded-[16px] md:rounded-[20px] py-10 md:py-16 lg:py-20 px-6 md:px-16 lg:px-24 text-center"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-7 md:mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 md:gap-3 bg-white/15 hover:bg-white/25 text-white px-6 py-3 md:px-8 md:py-4 rounded-[10px] font-medium transition-all duration-300 border border-white/30 hover:border-white/50 group text-sm md:text-base"
          >
            {buttonText}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
