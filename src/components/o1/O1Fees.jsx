import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fees = [
  {
    title: 'I-129 申请费',
    amount: '$460',
    note: '纸质申请；在线申请可减 $50，为 $410',
  },
  {
    title: '庇护项目附加费',
    amount: '$300 – $600',
    note: '≤25 人小型雇主 $300；大型雇主 $600；非营利机构免除',
  },
  {
    title: '加急处理费（可选）',
    amount: '$2,965',
    note: '2026 年 3 月 1 日起生效新费率；15 个工作日内获得审理结果',
  },
  {
    title: '签证费（如需领事馆申请）',
    amount: '$205 / 人',
    note: 'DS-160 非移民签证申请费',
  },
]

export default function O1Fees() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          申请费用参考
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-8"
        >
          以下为移民局官方费用参考，律师费用将在正式咨询后单独说明
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zenmo-light-bg rounded-xl overflow-hidden mb-4"
        >
          {fees.map((fee, i) => (
            <div
              key={fee.title}
              className={`flex items-start justify-between gap-4 px-5 md:px-6 py-4 ${
                i < fees.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm md:text-base font-medium text-zenmo-secondary">
                  {fee.title}
                </span>
                {fee.note && (
                  <span className="text-xs text-zenmo-desc-gray leading-relaxed">
                    {fee.note}
                  </span>
                )}
              </div>
              <span className="text-sm md:text-base font-semibold text-zenmo-secondary whitespace-nowrap flex-shrink-0 pt-0.5">
                {fee.amount}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 补充免责说明，与 L1Fees 保持一致 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xs text-zenmo-desc-gray leading-relaxed mb-8"
        >
          * 以上费用均为 USCIS 官方费用，可能随时调整，请以移民局最新公告为准。O-1 申请无需缴纳 ACWIA 培训费。律师费用将在委托协议中单独说明。
        </motion.p>

        <Link to="/contact" className="btn-primary hover:shadow-lg">
          联系我们，免费咨询
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  )
}
