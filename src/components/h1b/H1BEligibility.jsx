import { motion } from 'framer-motion'
import { User, Building2 } from 'lucide-react'

const employeeChecklist = [
  '是否拥有与岗位职责直接相关的本科或以上学历？',
  '若学历与岗位不完全匹配，是否能通过课程、工作经历证明专业相关性？',
  '学历是否来自认可院校？如为海外学历，是否需要做学历认证/等同评估？',
  '是否存在既往拒签、身份中断、逾期停留、SEVIS/OPT 合规问题等潜在风险？',
  '目前在美身份与时间线是否允许衔接 H-1B（如 OPT、Cap-Gap 等）？',
]

const employerChecklist = [
  '公司是否为真实运营实体，能提供公司业务、组织结构、营收/运营证据？',
  '岗位是否构成专业性职位（职责复杂、需要专业背景）？',
  '公司是否能支付并持续支付不低于适用工资标准的薪资？',
  '公司是否具备对员工的雇佣控制权（W-2员工）？',
  '公司是否曾被审计或收到 RFE/NOID/拒签？是否有合规历史需要提前处理？',
]

function ChecklistCard({ icon, title, subtitle, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100"
      style={{ boxShadow: '0 1px 12px rgba(15,23,42,0.06)' }}
    >
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(126,61,237,0.08)', color: '#7E3DED' }}>
          {icon}
        </div>
        <div>
          <h3 className="text-sm md:text-base font-semibold text-zenmo-secondary leading-tight">{title}</h3>
          <p className="text-xs text-zenmo-desc-gray mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="px-5 py-4 flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={item} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-4 h-4 rounded-sm flex items-center justify-center text-[9px] font-bold mt-0.5" style={{ backgroundColor: 'rgba(126,61,237,0.08)', color: '#7E3DED' }}>
              {i + 1}
            </span>
            <span className="text-xs md:text-sm text-zenmo-text leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function H1BEligibility() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          H-1B 资格基础评估
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-8 max-w-3xl"
        >
          以下问题用于初步判断与风险识别，最终结论需结合文件、岗位职责与用工安排进行个案评估。
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChecklistCard
            icon={<User size={16} strokeWidth={1.8} />}
            title="申请人"
            subtitle="Employee / Beneficiary"
            items={employeeChecklist}
            delay={0}
          />
          <ChecklistCard
            icon={<Building2 size={16} strokeWidth={1.8} />}
            title="雇主"
            subtitle="Employer / Petitioner"
            items={employerChecklist}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  )
}
