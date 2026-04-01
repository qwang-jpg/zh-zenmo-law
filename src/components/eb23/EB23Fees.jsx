import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fees = [
  {
    title: 'PWD 现行工资标准申报（ETA-9141）',
    amount: '无费用',
    note: '向劳工部提交，无官方缴费',
  },
  {
    title: 'PERM 招聘广告费',
    amount: '$3,000 – $4,500',
    note: '雇主在六种以上媒介方式发布职位广告的实际费用，不含律师费',
  },
  {
    title: 'PERM 劳工证申报（ETA-9089）',
    amount: '无费用',
    note: '向劳工部提交，无官方缴费',
  },
  {
    title: 'I-140 移民申请',
    amount: '$715',
    note: '适用于所有 EB-2 及 EB-3 路径；通常由雇主缴纳，不得转嫁申请人',
  },
  {
    title: '加急处理费（I-140 可选）',
    amount: '$2,805',
    note: '15 个工作日内获得审理结果；PERM 获批后 180 天内可申请',
  },
  {
    title: '庇护资助费（Asylum Program Fee）',
    amount: '$300 – $600',
    note: '≤25 名全职员工 $300；>25 名全职员工 $600；非营利机构免除',
  },
  {
    title: 'I-485 身份调整申请（境内）',
    amount: '$1,440',
    note: '适用于 18–79 岁申请人，含生物特征采集；与 I-485 同步递交的 I-131 及 I-765 无额外费用',
  },
  {
    title: '体检费（I-693）',
    amount: '因地而异',
    note: '须由移民局指定医生（Civil Surgeon）完成，通常约 $200–$500',
  },
  {
    title: '移民签证申请费（境外，DS-260）',
    amount: '$325 / 人',
    note: '向 NVC / 美国国务院缴纳，适用于在美境外通过领事馆办理移民签证的申请人',
  },
]

export default function EB23Fees() {
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
          以下为移民局及劳工部官方费用及主要实际费用参考，律师费用将在正式咨询后单独说明
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xs text-zenmo-desc-gray leading-relaxed mb-8"
        >
          * 官方费用可能随时调整，请以移民局（USCIS）及劳工部（DOL）最新公告为准。I-140 及 PERM 相关官方费用须由雇主承担，不得转嫁申请人。律师费用将在委托协议中单独说明。
        </motion.p>

        <Link to="/contact" className="btn-primary hover:shadow-lg">
          联系我们，免费咨询
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  )
}
