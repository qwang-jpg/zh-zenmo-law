import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const contractTypes = [
  { title: '服务协议与合作合同', desc: '明确合作权责，规避履约风险' },
  { title: '雇佣合同与独立承包商协议', desc: '规范用工关系，区分雇员与承包商身份' },
  { title: '跨境交易合同', desc: '处理跨境商业合作中的法律适用与争议解决条款' },
  { title: '其他商业相关合同', desc: '涵盖各类商业场景下的合同起草与审核，不限于以上类别' },
]

export default function ContractSection() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#5073F3', borderColor: '#5073F3', color: '#FFFFFF' }}>
            <FileText size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">合同起草与审核</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          合同是企业风险管理的重要工具。我们协助企业在交易及合作过程中合理分配权利义务，降低未来争议发生概率。
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contractTypes.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 pl-5">
              <h4 className="text-xs md:text-sm font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
