import { motion } from 'framer-motion'
import { User, Building2, Globe } from 'lucide-react'

const employeeGroups = [
  {
    code: 'L-1A',
    accentColor: '#4F47E6',
    accentBg: 'rgba(79,71,230,0.08)',
    accentText: '#4F47E6',
    items: [
      '在过去 3 年内，至少有 1 年在境外关联公司工作',
      '在美国公司担任管理或高管职位',
      '具备管理团队或负责业务决策的能力',
      '工作职责以管理或战略为主，而非日常执行',
    ],
  },
  {
    code: 'L-1B',
    accentColor: '#0891B2',
    accentBg: 'rgba(8,145,178,0.08)',
    accentText: '#0891B2',
    items: [
      '在过去 3 年内，至少有 1 年在境外关联公司工作',
      '在美国公司担任专业知识岗位',
      '对公司产品、服务或系统具有专门知识',
      '该知识难以在短期内由其他员工替代',
    ],
  },
]

const usCompanyItems = [
  {
    label: '合格关联关系',
    sub: ['母公司', '子公司', '分公司', '关联公司'],
  },
  { label: '真实开展业务，而非仅作为联络机构' },
  { label: '具备持续提供产品或服务的能力' },
  { label: '具备支持员工长期工作的运营能力' },
]

const foreignCompanyItems = [
  '一定经营历史',
  '稳定运营能力',
  '合理员工规模',
  '持续业务收入',
  '能够支持美国公司运营',
]

function SectionLabel({ icon, title, color, bg }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: bg, color }}
      >
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-zenmo-secondary">{title}</h3>
    </div>
  )
}

export default function L1Requirements() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          申请条件
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-body mb-10 md:mb-12"
        >
          L-1 申请涉及员工、美国公司与境外公司三方条件，建议在启动申请前进行系统性评估
        </motion.p>

        <div className="flex flex-col gap-5">

          {/* ── Employee requirements ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
            style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.05)' }}
          >
            <div className="px-6 pt-6 pb-2">
              <SectionLabel
                icon={<User size={18} strokeWidth={1.8} />}
                title="员工（受益人）条件"
                color="#4F47E6"
                bg="rgba(79,71,230,0.08)"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {employeeGroups.map((group) => (
                <div key={group.code} className="px-6 pb-6">
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
                    style={{ backgroundColor: group.accentBg, color: group.accentText }}
                  >
                    {group.code}
                  </span>
                  <div className="flex flex-col gap-0">
                    {group.items.map((item, j) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 py-3"
                        style={{
                          borderBottom: j < group.items.length - 1 ? '1px solid #F1F5F9' : 'none',
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ backgroundColor: group.accentColor }}
                        />
                        <span className="text-sm text-zenmo-text leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── US company + Foreign company ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* US company */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-6"
              style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.05)' }}
            >
              <SectionLabel
                icon={<Building2 size={18} strokeWidth={1.8} />}
                title="美国公司条件"
                color="#7B3AED"
                bg="rgba(123,58,237,0.08)"
              />
              <div className="flex flex-col gap-0">
                {usCompanyItems.map((item, j) => (
                  <div
                    key={item.label}
                    className="py-3"
                    style={{
                      borderBottom: j < usCompanyItems.length - 1 ? '1px solid #F1F5F9' : 'none',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: '#7B3AED' }}
                      />
                      <span className="text-sm text-zenmo-text leading-relaxed">{item.label}</span>
                    </div>
                    {item.sub && (
                      <div className="ml-4 mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
                        {item.sub.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{ backgroundColor: 'rgba(123,58,237,0.07)', color: '#7B3AED' }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foreign company */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="rounded-2xl border border-gray-100 bg-white p-6"
              style={{ boxShadow: '0 1px 8px rgba(15,23,42,0.05)' }}
            >
              <SectionLabel
                icon={<Globe size={18} strokeWidth={1.8} />}
                title="境外公司条件"
                color="#0891B2"
                bg="rgba(8,145,178,0.08)"
              />
              <p className="text-sm text-zenmo-text leading-relaxed mb-4">
                通常建议境外公司具备：
              </p>
              <div className="flex flex-col gap-0">
                {foreignCompanyItems.map((item, j) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-3"
                    style={{
                      borderBottom: j < foreignCompanyItems.length - 1 ? '1px solid #F1F5F9' : 'none',
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#0891B2' }}
                    />
                    <span className="text-sm text-zenmo-text leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
