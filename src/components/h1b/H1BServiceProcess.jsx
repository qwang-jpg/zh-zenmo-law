import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: '免费咨询及资质评估', desc: '由律师审核申请资质，初步判断申请可行性与风险点，明确推进路径。' },
  { num: '02', title: '签署合同，缴纳抽签费用', desc: '与阡陌签署委托协议，缴纳抽签阶段相关费用，正式启动服务。' },
  { num: '03', title: '收集抽签材料，参与抽签', desc: '收集雇员及雇主抽签所需信息，由律师协助完成电子注册并参与抽签。' },
  { num: '04', title: '确定申请方案及工资标准', desc: '律师结合岗位与背景，确定H-1B申请职位方案及现行工资标准（Prevailing Wage）。' },
  { num: '05', title: '中签确认 / 未中签规划', desc: '中签后完成律师费付款，正式进入材料准备阶段；未中签则提供免费后续路径咨询。', highlight: true },
  { num: '06', title: '收集申请信息及支持性文件', desc: '律师助理联系雇员与雇主，系统收集H-1B申请所需全部信息与文件。' },
  { num: '07', title: '递交劳工情况申报表（LCA）', desc: '律师向劳工部提交LCA，审批周期通常为7-14个工作日，期间同步准备其他材料。' },
  { num: '08', title: '撰写申请表格及雇主支持信', desc: '律师填写I-129表格，起草Petition Letter雇主支持信，构建完整证据链与论述框架。' },
  { num: '09', title: '雇主审阅并完成最终修改', desc: '雇主审阅表格与支持信，提出修改意见，由律师进行最终调整确认。' },
  { num: '10', title: '雇主签署申请文件', desc: '雇主正式签署所有申请表格及支持信，支付移民局申请费用。' },
  { num: '11', title: '律师审查完整申请包裹', desc: '律师对全部材料进行严格审查，确保内容一致、逻辑完整、符合移民局标准。' },
  { num: '12', title: '邮寄申请包裹至移民局', desc: '在中签后90天内，按移民局规定方式将完整包裹寄送至指定审核中心。' },
  { num: '13', title: '应对补件要求（RFE）', desc: '如移民局发出补件通知，律师制定回应策略，逐项组织证据并在截止日期前完成回复。', highlight: true },
  { num: '14', title: '等待移民局审理结果', desc: '正常审理约3个月；加急服务可在15个工作日内获得结果。' },
  { num: '15', title: '收到H-1B审理结果', desc: '雇主与律师分别收到移民局审理通知，律师协助解读结果并指导后续步骤。' },
]

export default function H1BServiceProcess() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          我们的服务流程
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-8 max-w-2xl"
        >
          从初次咨询到拿到结果，阡陌全程陪同推进，确保每个环节清晰可预期
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`flex items-start gap-5 bg-white rounded-xl px-5 py-5 border ${step.highlight ? 'border-zenmo-btn2/25' : 'border-gray-100'}`}
              style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.05)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                style={{ backgroundColor: step.highlight ? '#5073F3' : '#7E3DED' }}
              >
                {step.num}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-zenmo-secondary mb-1.5 leading-snug">{step.title}</h4>
                <p className="text-xs md:text-sm text-zenmo-text leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
