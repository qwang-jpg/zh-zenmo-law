import EmployerServicesSection from '@/components/shared/Immigration-EmployerServices'

const services = [
  { num: '01', title: '岗位职责结构设计' },
  { num: '02', title: '劳工工资标准申报（PWD）' },
  { num: '03', title: '招聘方案设计与合规审查' },
  { num: '04', title: 'PERM 申报全程支持' },
  { num: '05', title: 'PERM 审计应对策略' },
  { num: '06', title: 'I-140 材料准备与递交' },
  { num: '07', title: 'RFE / NOID 补件策略支持' },
  { num: '08', title: '多员工绿卡申请统筹规划' },
  { num: '09', title: '排期监控与策略调整建议' },
  { num: '10', title: 'I-485 并联申请安排' },
  { num: '11', title: 'AC21 换雇主合规评估' },
  { num: '12', title: '移民合规风险评估' },
]

export default function EB23EmployerServices() {
  return (
    <EmployerServicesSection
      title="雇主支持服务"
      mainDescription="EB-2/EB-3 申请涉及 PERM 劳工证合规、岗位职责论证及多员工绿卡统筹等复杂事项。阡陌协助企业从申请策略到长期合规，系统性地降低审批风险，确保国际人才的绿卡流程稳定推进。"
      sideNote="对于有持续绿卡担保需求的企业，我们可以提供长期法律支持。"
      services={services}
    />
  )
}
