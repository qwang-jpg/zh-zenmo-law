import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'

const workVisas = [
  { title: 'H-1B 非移民工作签证 →', desc: '专业职业工作签证', link: '/immigration-law/h-1b', hasLink: true },
  { title: 'L-1 跨国公司高管签证 →', desc: '跨国企业内部调动', link: '/immigration-law/l-1', hasLink: true },
  { title: 'O-1 杰出人才工作签证', desc: '杰出能力人才签证', hasLink: false },
]

const studyVisas = [
  { title: 'F-1 学生签证 · OPT / STEM OPT', desc: '学生签证及工作许可', hasLink: false },
  { title: 'J-1 访问学者签证 · J-1 Waiver', desc: '交流访问项目签证', hasLink: false },
]

function VisaItem({ item }) {
  const content = (
    <div className={`bg-white rounded-lg p-4 pl-5 ${item.hasLink ? 'hover:bg-gray-50 transition-colors cursor-pointer' : ''}`}>
      <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary">{item.title}</h4>
      <p className="text-xs md:text-sm text-zenmo-text mt-0.5">{item.desc}</p>
    </div>
  )
  return item.hasLink ? <Link to={item.link}>{content}</Link> : content
}

export default function VisaSection() {
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
            <FileText size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">签证申请</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          协助客户评估签证类别适配性、准备申请材料，并就入境合规及后续身份规划提供法律建议。
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="bg-zenmo-light-bg rounded-xl p-4">
            <h4 className="text-sm font-semibold text-zenmo-secondary/70 uppercase tracking-wide mb-3">工作类签证</h4>
            <div className="flex flex-col gap-2">
              {workVisas.map((v) => <VisaItem key={v.title} item={v} />)}
            </div>
          </div>
          <div className="bg-zenmo-light-bg rounded-xl p-4">
            <h4 className="text-sm font-semibold text-zenmo-secondary/70 uppercase tracking-wide mb-3">学习与交流类签证</h4>
            <div className="flex flex-col gap-2">
              {studyVisas.map((v) => <VisaItem key={v.title} item={v} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
