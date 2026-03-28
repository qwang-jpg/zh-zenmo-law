import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'H-1B 签证每年有多少名额？',
    a: '常规 H-1B 每年有 65,000 个名额，持有美国硕士或以上学历的申请人可额外参与 20,000 个名额的抽签。Cap-Exempt 雇主（如大学、非营利研究机构等）不受名额限制。',
  },
  {
    q: '什么样的职位属于"专业性职位（Specialty Occupation）"？',
    a: '专业性职位要求该岗位通常需要至少本科及以上学历（或等同资历），且所需学历方向须与职位职责直接相关。常见专业性职位包括软件工程师、会计师、建筑师、工程师、律师等，但具体判断仍需结合岗位描述、行业惯例与雇主用工结构综合评估。',
  },
  {
    q: '申请 H-1B 费用主要由雇主还是申请人承担？',
    a: '移民局规定，部分费用（如反欺诈费、教育培训费）必须由雇主承担，不得转嫁给申请人。律师费与加急费则由雇主与申请人协商承担。电子注册费自 FY-2027 起为 $215，由雇主支付。',
  },
  {
    q: '2026 年加权抽签新政具体如何影响中签率？',
    a: '自 FY-2027 起，USCIS 将按工资层级（Wage Level 1–4）加权抽签，Level IV 中签概率最高。这意味着注册前确定岗位与工资层级策略变得更为关键，尤其是对于可能跨多个层级的岗位。我们建议在注册前与律师详细评估岗位的工资层级定位。',
  },
  {
    q: '如果没有抽中 H-1B，还有哪些选择？',
    a: 'Cap-Gap 保护（如持有 OPT 正等待 H-1B 生效）、Cap-Exempt 路径（通过非营利、高校等免抽签雇主）、O-1 杰出人才签证、L-1 跨国公司调派签证，以及延长 STEM OPT 等都是可评估的替代方案。阡陌对未中签客户提供免费的后续路径评估。',
  },
  {
    q: '什么是 RFE？收到 RFE 怎么办？',
    a: 'RFE（Request for Evidence）是移民局在审理过程中发出的补件通知，要求申请人在规定时间内补充证明材料。收到 RFE 并不意味着申请被拒，但回复质量至关重要。阡陌将在收到 RFE 后及时制定回应策略，逐项组织证据，确保在截止日期前提交完整、有力的回复。',
  },
  {
    q: 'H-1B 获批后可以带配偶和子女吗？',
    a: 'H-1B 持有人的配偶及未满21岁子女可申请 H-4 身份随行入境。持 H-4 身份的配偶在特定条件下（主申请人已进入绿卡 I-140 批准阶段）可申请 H-4 EAD 工卡，获得合法工作资格。',
  },
  {
    q: '我是否可以同时拥有多个 H-1B 雇主？',
    a: '可以。H-1B 允许多家雇主同时担保，称为"concurrent H-1B"。每位雇主需分别提交 petition，申请人在所有已批准雇主处均可合法工作。这对于兼职、顾问类岗位尤为常见。',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 group hover:bg-zenmo-light-bg transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-semibold text-zenmo-secondary leading-snug">{item.q}</span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: '#7E3DED' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-gray-100">
              <p className="text-sm text-zenmo-text leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function H1BFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-12 md:py-20 bg-zenmo-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          常见问题
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-8 max-w-2xl"
        >
          关于 H-1B 申请流程、资格条件与新政变化的常见疑问
        </motion.p>
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
