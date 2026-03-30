import { motion } from 'framer-motion'
import { User, Building2, Globe } from 'lucide-react'

const docGroups = [
  {
    icon: <User size={18} strokeWidth={1.8} />,
    title: '员工材料',
    color: '#4F47E6',
    bg: 'rgba(79,71,230,0.08)',
    items: [
      '护照',
      '简历',
      '学历证明',
      '详细职位描述',
      '组织架构图',
      '任职证明',
      '过去三年工作证明',
      '管理职责说明',
    ],
  },
  {
    icon: <Building2 size={18} strokeWidth={1.8} />,
    title: '美国公司材料',
    color: '#7B3AED',
    bg: 'rgba(123,58,237,0.08)',
    items: [
      '公司注册文件',
      'EIN 税号',
      '公司介绍材料',
      '商业计划书',
      '组织架构图',
      '办公室租赁文件',
      '财务报表',
      '客户合同或发票',
      '股权结构文件',
    ],
  },
  {
    icon: <Globe size={18} strokeWidth={1.8} />,
    title: '境外公司材料',
    color: '#0891B2',
    bg: 'rgba(8,145,178,0.08)',
    items: [
      '营业执照',
      '公司章程',
      '公司介绍',
      '财务报表',
      '客户合同',
      '员工名单',
      '组织架构图',
      '办公场地证明',
    ],
  },
]

export default function L1Documents() {
  return (
    <section className="py-12 md:py-20 bg-zenmo-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          申请材料参考
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-12"
        >
          以下为常规申请所需材料，具体清单因案件情况而异，律师将在正式启动后提供定制化清单
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {docGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.05)' }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ backgroundColor: group.bg }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: group.color, color: '#fff' }}
                >
                  {group.icon}
                </div>
                <h3 className="text-sm font-semibold text-zenmo-secondary">{group.title}</h3>
                <span
                  className="ml-auto text-xs font-semibold tabular-nums px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: group.bg, color: group.color }}
                >
                  {group.items.length} 项
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Items */}
              <div className="px-5 py-2">
                {group.items.map((item, j) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-2.5"
                    style={{
                      borderBottom: j < group.items.length - 1 ? '1px solid #F8FAFC' : 'none',
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: group.color, opacity: 0.6 }}
                    />
                    <span className="text-sm text-zenmo-text">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-xs text-zenmo-desc-gray leading-relaxed"
        >
          * 如涉及新设美国公司申请，部分财务材料可替换为商业计划书及预计收入说明。具体要求以律师评估为准。
        </motion.p>

      </div>
    </section>
  )
}
