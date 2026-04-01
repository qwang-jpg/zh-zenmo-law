import EmployerServicesSection from '@/components/shared/Immigration-EmployerServices'

const services = [
  { num: '01', title: '请愿人资质评估' },
  { num: '02', title: '雇佣合同及聘用文件准备' },
  { num: '03', title: '工作内容及项目行程安排' },
  { num: '04', title: '行业意见文件协调' },
  { num: '05', title: '申请时间安排规划' },
  { num: '06', title: '多申请人案件统筹安排' },
  { num: '07', title: '延期与持续聘用安排' },
  { num: '08', title: '家属 O-3 签证安排' },
  { num: '09', title: '职位及申请结构合理性评估' },
  { num: '10', title: '政策变化影响提示' },
  { num: '11', title: 'EB-1A 或 NIW 路径衔接建议' },
  { num: '12', title: '长期身份规划支持' },
]

export default function O1EmployerServices() {
  return (
    <EmployerServicesSection
      title="雇主支持服务"
      mainDescription="O-1 申请须由美国境内的雇主或代理人作为请愿人提交。阡陌协助企业、经纪机构及相关合作方规范准备申请材料，确保请愿人文件完整、安排合理，并符合移民局审查要求。"
      sideNote="对于持续聘用国际专业人才的机构，我们可提供长期移民法律支持。"
      services={services}
    />
  )
}
