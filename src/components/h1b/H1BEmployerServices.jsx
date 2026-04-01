import EmployerServicesSection from '@/components/shared/Immigration-EmployerServices'

const services = [
  { num: '01', title: '岗位职责结构建议' },
  { num: '02', title: '岗位专业性评估' },
  { num: '03', title: '薪资结构合规建议' },
  { num: '04', title: '招聘时间线规划' },
  { num: '05', title: 'OPT 转 H-1B 规划' },
  { num: '06', title: '多员工申请安排' },
  { num: '07', title: '合规风险评估' },
  { num: '08', title: '身份路径规划建议' },
]

export default function H1BEmployerServices() {
  return (
    <EmployerServicesSection
      title="雇主支持服务"
      mainDescription="我们协助企业建立规范的 H-1B 申请流程，帮助企业更稳定地聘用国际人才。"
      sideNote="对于有长期国际人才需求的企业，我们可以提供持续法律支持。"
      services={services}
    />
  )
}
