import { motion } from 'framer-motion'

const phases = [
  {
    phase: '抽签阶段',
    steps: [
      { num: '01', title: '免费咨询及资质评估',        desc: '由律师审核申请资质，初步判断申请可行性与风险点，明确推进路径。' },
      { num: '02', title: '签署合同，缴纳抽签费用',    desc: '与阡陌签署委托协议，缴纳抽签阶段相关费用，正式启动服务。' },
      { num: '03', title: '收集抽签材料，参与抽签',    desc: '收集雇员及雇主抽签所需信息，由律师协助完成电子注册并参与抽签。' },
      { num: '04', title: '确定申请方案及工资标准',    desc: '律师结合岗位与背景，确定 H-1B 申请职位方案及现行工资标准。' },
    ],
  },
  {
    phase: '中签确认',
    steps: [
      { num: '05', title: '中签确认 / 未中签规划',     desc: '中签后完成律师费付款，正式进入材料准备阶段；未中签则提供免费后续路径咨询。' },
    ],
  },
  {
    phase: '材料准备与递交',
    steps: [
      { num: '06', title: '收集申请信息及支持性文件',  desc: '律师助理联系雇员与雇主，系统收集 H-1B 申请所需全部信息与文件。' },
      { num: '07', title: '递交劳工情况申报表（LCA）', desc: '律师向劳工部提交 LCA，审批周期通常为 7–14 个工作日，期间同步准备其他材料。' },
      { num: '08', title: '撰写申请表格及雇主支持信',  desc: '律师填写 I-129 表格，起草 Petition Letter，构建完整证据链与论述框架。' },
      { num: '09', title: '雇主审阅并完成最终修改',    desc: '雇主审阅表格与支持信，提出修改意见，由律师进行最终调整确认。' },
      { num: '10', title: '雇主签署申请文件',          desc: '雇主正式签署所有申请表格及支持信，支付移民局申请费用。' },
      { num: '11', title: '律师审查完整申请包裹',      desc: '律师对全部材料进行严格审查，确保内容一致、逻辑完整、符合移民局标准。' },
      { num: '12', title: '邮寄申请包裹至移民局',      desc: '在中签后 90 天内，按移民局规定方式将完整包裹寄送至指定审核中心。' },
    ],
  },
  {
    phase: '审理阶段',
    steps: [
      { num: '13', title: '应对补件要求（RFE）',       desc: '如移民局发出补件通知，律师制定回应策略，逐项组织证据并在截止日期前完成回复。' },
      { num: '14', title: '等待移民局审理结果',        desc: '正常审理约 3 个月；加急服务可在 15 个工作日内获得结果。' },
      { num: '15', title: '收到 H-1B 审理结果',       desc: '雇主与律师分别收到移民局审理通知，律师协助解读结果并指导后续步骤。' },
    ],
    rfeNote: true,
  },
]

function StepItem({ step, showBorderBottom, showBorderRight }) {
  return (
    <div
      className="flex items-start gap-3 py-4 px-5"
      style={{
        borderBottom: showBorderBottom ? '1px solid #F1F5F9' : 'none',
        borderRight:  showBorderRight  ? '1px solid #F1F5F9' : 'none',
      }}
    >
      <span
        className="flex-shrink-0 text-xs font-bold tabular-nums mt-0.5 w-6 text-center"
        style={{ color: '#CBD5E1' }}
      >
        {step.num}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-zenmo-secondary leading-snug mb-1">
          {step.title}
        </p>
        <p className="text-sm text-zenmo-text leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

function PhaseBlock({ phase, phaseIndex }) {
  const { steps, rfeNote } = phase
  const cols = 2

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: phaseIndex * 0.06 }}
    >
      {/* Phase label */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: 'rgba(79,71,230,0.08)', color: '#4F47E6' }}
        >
          {phase.phase}
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Steps grid */}
      <div
        className="rounded-xl overflow-hidden border border-gray-100 bg-white"
        style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.04)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {steps.map((step, i) => {
            const isLastRow   = i >= steps.length - (steps.length % cols || cols)
            const isRightCol  = i % cols === cols - 1
            const isLastItem  = i === steps.length - 1

            return (
              <StepItem
                key={step.num}
                step={step}
                showBorderBottom={!isLastRow && !(isLastItem && steps.length % cols !== 0)}
                showBorderRight={!isRightCol && steps.length > 1}
              />
            )
          })}

          {/* If odd number of steps, fill empty cell */}
          {steps.length % 2 !== 0 && (
            <div className="hidden md:block" />
          )}
        </div>

        {/* RFE note inside same container */}
        {rfeNote && (
          <div className="border-t border-gray-100 px-5 py-4">
            <p className="text-sm font-semibold text-zenmo-secondary mb-1">
              关于补件（RFE）
            </p>
            <p className="text-sm text-zenmo-text leading-relaxed">
              在审理过程中，移民局可能发出补件通知（RFE），要求进一步说明或证明材料。通过合理的申请策略，通常可以有效降低补件风险。RFE 并不代表案件会被拒绝，大多数收到补件通知的案件在提供充分材料后仍可获得批准；但补件通常会延长审理周期并增加准备成本，因此在申请前进行结构性分析，通常比事后补救更为重要。
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

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
          className="section-body mb-10 max-w-2xl"
        >
          从初次咨询到拿到结果，阡陌全程陪同推进，确保每个环节清晰可预期
        </motion.p>

        <div className="flex flex-col gap-6">
          {phases.map((p, i) => (
            <PhaseBlock key={p.phase} phase={p} phaseIndex={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
