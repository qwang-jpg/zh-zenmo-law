import { motion } from 'framer-motion'
import { Globe2, Scale, TrendingUp, Users } from 'lucide-react'

const highlights = [
  {
    icon: <Globe2 size={18} strokeWidth={1.7} />,
    color: '#7C3AED',
    label: '核心业务',
    value: '美国移民法律',
  },
  {
    icon: <Scale size={18} strokeWidth={1.7} />,
    color: '#2563EB',
    label: '执业规范',
    value: '纽约州律师职业行为规范',
  },
  {
    icon: <Users size={18} strokeWidth={1.7} />,
    color: '#0891B2',
    label: '服务对象',
    value: '个人及企业客户',
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.7} />,
    color: '#4F47E6',
    label: '服务理念',
    value: '长期法律合作伙伴',
  },
]

export default function AboutContent() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* ── Highlight strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 md:mb-16"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-3 px-4 py-4 rounded-xl border border-gray-100 bg-gray-50"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${h.color}12`, color: h.color }}
              >
                {h.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{h.label}</p>
                <p className="text-xs font-semibold text-zenmo-secondary leading-snug">{h.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Main content ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16">

          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            {/* 关于阡陌 */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#4F47E6' }} />
              <h2 className="text-2xl md:text-3xl font-semibold text-zenmo-secondary">关于阡陌律师事务所</h2>
            </div>
            <div className="space-y-4 text-sm md:text-base text-zenmo-text leading-relaxed mb-10">
              <p>
                阡陌律师事务所是一家立足美国、面向国际客户的综合型法律服务机构，长期为个人及企业客户提供涵盖移民、商业及个人事务在内的多领域法律支持。我们致力于以稳健、专业且高度责任导向的执业标准，协助客户应对在美国发展过程中所面临的各类法律事务。
              </p>
              <p>
                在业务实践中，阡陌在美国移民法律领域积累了丰富经验，服务范围覆盖签证申请、绿卡规划、身份转换以及各类移民项目等多个方向。同时，我们也为客户提供与移民密切相关的企业合规、合同事务及个人法律支持，帮助客户在不同阶段实现法律事务的系统衔接与长期规划。
              </p>
              <p>
                阡陌坚持以清晰的流程管理、严谨的法律分析及持续沟通机制为服务基础，确保每一项委托都在可控、透明与高效的框架内推进。我们重视与客户建立长期稳定的合作关系，而不仅限于单一事项的阶段性服务。
              </p>
            </div>

            {/* 我们的使命 */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#7C3AED' }} />
              <h2 className="text-2xl md:text-3xl font-semibold text-zenmo-secondary">我们的使命</h2>
            </div>
            <div className="space-y-4 text-sm md:text-base text-zenmo-text leading-relaxed">
              <p>
                阡陌致力于成为客户长期发展过程中的重要法律合作伙伴，通过专业代理、系统化服务及具有前瞻性的法律策略支持，协助客户在跨境流动与美国发展过程中实现稳健、合规与可持续的长期规划。
              </p>
              <p>
                我们不仅关注单一申请或案件的结果，更重视整体路径规划、合规风险管理及长期身份与商业结构的稳定性。阡陌希望通过专业能力与持续投入，切实参与并支持客户在美国及国际发展过程中的关键决策与重要阶段。
              </p>
            </div>
          </motion.div>

          {/* Right — Pull Quote + Office card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:w-[340px] flex flex-col gap-5 flex-shrink-0"
          >
            {/* Pull Quote */}
            <div
              className="rounded-2xl px-7 py-8"
              style={{ background: 'linear-gradient(150deg, #EEF0F8 0%, #E4E8F6 100%)' }}
            >
              <p className="text-[32px] leading-none text-zenmo-btn1 opacity-30 font-serif mb-3 select-none">"</p>
              <p className="text-base font-semibold text-zenmo-secondary leading-relaxed mb-4">
                法律工作在系统、透明、真正着眼长期结果的框架下，才能发挥最大价值。
              </p>
              <p className="text-xs text-zenmo-text/60 uppercase tracking-widest">— 阡陌律师事务所</p>
            </div>

            {/* Office card */}
            <div
              className="rounded-2xl border border-gray-100 bg-white px-7 py-7"
              style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}
            >
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">我们的办公室</h4>
              <div className="space-y-3 text-sm text-zenmo-text">
                <p className="font-semibold text-zenmo-secondary">阡陌律师事务所</p>
                <p>747 3rd Ave, New York, NY 10017</p>
                <p>周一至周五 &nbsp;·&nbsp; 9:00 AM – 6:00 PM EST</p>
                <div className="pt-1 border-t border-gray-100">
                  <a
                    href="tel:+18006968608"
                    className="text-zenmo-btn1 font-medium hover:underline"
                  >
                    +1 (800) 696-8608
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
