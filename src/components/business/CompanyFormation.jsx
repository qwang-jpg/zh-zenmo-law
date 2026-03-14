import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const companyTypes = [
  { title: 'Corporation (Inc) 股份制公司注册', desc: '适合计划上市或寻求投资的企业' },
  { title: 'LLC 有限责任公司注册', desc: '灵活的企业结构，税务优势明显' },
  { title: 'Not For Profit 非盈利公司注册', desc: '适合慈善、教育等非盈利组织' },
]

export default function CompanyFormation() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#7860F3', borderColor: '#7860F3', color: '#FFFFFF' }}>
            <Building2 size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">公司设立与治理</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          我们协助客户完成公司注册、组织结构设计及基础合规框架搭建，并就不同州法律要求及公司类型差异提供法律建议。
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {companyTypes.map((item) => (
            <div key={item.title} className="bg-zenmo-light-bg rounded-xl p-4 pl-5">
              <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs md:text-sm text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
