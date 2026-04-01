import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CreditCard } from 'lucide-react'

const greenCardItems = [
  { title: 'EB-1A 杰出人才绿卡',                   desc: '适用于各领域杰出人才',       hasLink: false },
  { title: 'EB-1B 杰出科研绿卡',                   desc: '适用于杰出教授和研究人员',     hasLink: false },
  { title: 'EB-1C 跨国公司绿卡',               desc: '适用于跨国公司高管和经理',     hasLink: false },
  { title: 'EB-2/3 职业移民绿卡 →',       desc: '雇主担保类移民',               hasLink: true, link: '/immigration-law/eb-2-3' },
  { title: 'EB-2 NIW 国家利益豁免绿卡',            desc: '无需雇主担保的移民途径',       hasLink: false },
  { title: 'EB-5 投资移民绿卡',                         desc: '投资创造就业移民',             hasLink: false },
  { title: '亲属移民绿卡',                               desc: '基于家庭关系的移民',           hasLink: false },
]

function GreenCardItem({ item }) {
  const content = (
    <div className={`bg-white rounded-xl p-4 pl-5 ${item.hasLink ? 'hover:bg-gray-50 transition-colors cursor-pointer' : ''}`}>
      <h4 className="text-xs md:text-sm font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
      <p className="text-xs text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
    </div>
  )
  return item.hasLink ? <Link to={item.link}>{content}</Link> : content
}

export default function GreenCardSection() {
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
            <CreditCard size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">绿卡申请</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          协助分析不同永久居留路径的可行性、排期影响及时间成本，并在整个申请过程中持续提供法律支持。
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {greenCardItems.map((item) => (
            <GreenCardItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
