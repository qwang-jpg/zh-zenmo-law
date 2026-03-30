import { motion } from 'framer-motion'

const phases = [
  {
    phase: '企业结构与申请路径分析',
    steps: [
      { num: '01', title: '分析境内外公司关联关系',    desc: '梳理母公司与美国公司的股权结构，判断是否满足 L-1 对于合格关联公司的要求。' },
      { num: '02', title: '识别结构风险与路径选择',   desc: '识别潜在结构风险，评估适合 L-1A 或 L-1B 的申请路径，分析 New Office 申请可行性。' },
      { num: '03', title: '规划签证与绿卡衔接路径',   desc: '结合企业发展阶段，提前规划 L-1 延期策略及 EB-1C 绿卡路径，避免身份断层风险。' },
    ],
  },
  {
    phase: '管理岗位法律结构设计',
    steps: [
      { num: '04', title: '设计岗位职责结构',         desc: '根据移民局对"管理人员"或"专业知识人员"的认定标准，设计符合审查逻辑的职责框架。' },
      { num: '05', title: '区分管理职责与执行职责',   desc: '明确汇报关系与决策权限，优化职位描述逻辑，确保岗位体现管理或专业属性。' },
      { num: '06', title: '设计组织架构说明',         desc: '协助搭建符合移民局审查重点的组织架构图，避免因岗位描述不合理导致补件或拒签。' },
    ],
  },
  {
    phase: '跨国公司关系证明体系搭建',
    steps: [
      { num: '07', title: '梳理股权与关联公司证明',   desc: '系统准备境内外公司关联关系证明文件，建立符合移民局要求的公司关系说明体系。' },
      { num: '08', title: '确保结构支持 L-1 申请',   desc: '核查公司结构完整性，确保关联关系清晰可证明，降低因结构问题导致的审理风险。' },
    ],
  },
  {
    phase: '申请材料法律逻辑整合',
    steps: [
      { num: '09', title: '整合材料逻辑框架',         desc: '统一岗位职责、组织架构及公司业务说明之间的逻辑关系，确保申请材料内部一致。' },
      { num: '10', title: '起草律师法律支持信',       desc: '由律师撰写法律支持信，阐述申请人资质与岗位的符合性，强化申请整体论证逻辑。' },
      { num: '11', title: '确保材料符合 USCIS 审查重点', desc: '针对移民局常见审查方向进行材料质量把控，提高通过率，降低 RFE 补件概率。' },
    ],
  },
  {
    phase: '申请递交及补件策略支持',
    steps: [
      { num: '12', title: '完成申请文件审核与递交',   desc: '律师对全部材料进行最终审查，确保逻辑一致性与合规性，完成向 USCIS 的正式递交。' },
      { num: '13', title: 'RFE 补件分析与应对',      desc: '如收到补件通知，律师分析补件原因，制定法律论证策略，协助补充支持文件并回复。' },
    ],
  },
  {
    phase: '长期身份与企业发展衔接规划',
    steps: [
      { num: '14', title: '规划 L-1 延期与身份维持', desc: '根据公司运营情况，提前规划 L-1 续签策略，确保申请人在美身份连续稳定。' },
      { num: '15', title: '评估 EB-1C 绿卡申请可行性', desc: '公司运营满 1 年后，评估 EB-1C 申请条件，优化公司管理结构，推进长期绿卡规划。' },
      { num: '16', title: '提供持续法律支持',         desc: '为企业长期在美发展提供移民合规建议，减少重复准备材料的成本，降低用工风险。' },
    ],
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
  const { steps } = phase
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
          className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
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
            const isLastRow  = i >= steps.length - (steps.length % cols || cols)
            const isRightCol = i % cols === cols - 1
            const isLastItem = i === steps.length - 1

            return (
              <StepItem
                key={step.num}
                step={step}
                showBorderBottom={!isLastRow && !(isLastItem && steps.length % cols !== 0)}
                showBorderRight={!isRightCol && steps.length > 1 && !(isLastItem && steps.length % 2 !== 0)}
              />
            )
          })}
          {/* Fill empty cell if odd count */}
          {steps.length % 2 !== 0 && <div className="hidden md:block" />}
        </div>
      </div>
    </motion.div>
  )
}

export default function L1ServiceProcess() {
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
          L-1 申请的核心不只是准备材料，而是通过合理的公司结构、岗位设计及法律论证，使申请符合移民局对跨国公司管理人员或专业知识人员的认定标准，并为后续延期或绿卡路径提前做好规划。
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
