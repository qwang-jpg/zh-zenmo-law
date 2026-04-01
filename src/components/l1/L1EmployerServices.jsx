import EmployerServicesSection from '@/components/shared/Immigration-EmployerServices'

const services = [
  { num: '01', title: '企业关联结构合规评估' },
  { num: '02', title: '岗位职责框架设计' },
  { num: '03', title: '组织架构文件准备' },
  { num: '04', title: 'New Office 申请全程支持' },
  { num: '05', title: '多员工调派统筹安排' },
  { num: '06', title: '申请时间线规划' },
  { num: '07', title: '续签与延期合规管理' },
  { num: '08', title: 'EB-1C 绿卡衔接规划' },
  { num: '09', title: '家属 L-2 签证安排' },
  { num: '10', title: '移民合规风险评估' },
  { num: '11', title: '政策变化影响分析' },
  { num: '12', title: '长期身份规划建议' },
]

export default function L1EmployerServices() {
  return (
    <EmployerServicesSection
      title="雇主支持服务"
      mainDescription="L-1 申请涉及公司结构、岗位设计与跨国关联关系的综合论证。阡陌协助企业从申请策略到后续合规，系统性地降低调派风险，确保在美业务稳定推进。"
      sideNote="对于有持续员工调派需求的企业，我们可以提供长期法律支持。"
      services={services}
    />
  )
}
