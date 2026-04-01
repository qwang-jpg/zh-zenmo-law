import TimelineSection from '@/components/shared/Immigration-Timeline'

const steps = [
  { num: '01', label: '12月 - 2月',     title: '与雇主达成共识',  desc: '确认 H-1B 申请意向，与律师确定职位及现行工资标准。' },
  { num: '02', label: '3月4日 - 19日',  title: '线上抽签注册',    desc: '注册窗口开放，在移民局指定时间内完成电子抽签注册并缴纳注册费。' },
  { num: '03', label: '3月20日起',      title: '等待移民局抽签',  desc: '移民局完成抽签选取，结果通常于3月底前公布。' },
  { num: '04', label: '4月1日',         title: '中签后准备材料',  desc: '确认中签后，雇主与雇员按材料清单收集文件，发送律师启动申请。' },
  { num: '05', label: '4月 - 6月30日', title: '律师完成递交',    desc: '在中签后90天内，律师完成全部材料并邮寄至移民局指定审核中心。' },
  { num: '06', label: '审理期间',       title: '移民局审理',      desc: '移民局完成审理；如发出RFE补件，律师将协助回复并持续跟进。' },
  { num: '07', label: '10月1日',        title: 'H-1B 统一生效',  desc: '申请获批后，H-1B于10月1日正式生效。' },
]

export default function H1BTimeline() {
  return (
    <TimelineSection
      title="申请时间线参考"
      subtitle="以 FY-2027 年度 H-1B 申请周期为参考，具体时间以 USCIS 公告为准"
      steps={steps}
      cols={7}
      bleed="30%"
    />
  )
}
