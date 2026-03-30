import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const categories = [
  {
    label: '基本问题',
    faqs: [
      {
        q: 'L-1 签证是否需要抽签？',
        a: '不需要。L-1 签证不受年度配额限制，也不存在抽签程序。企业可以根据业务发展需要，在全年任何时间提交申请，无需等待特定注册窗口。',
      },
      {
        q: 'L-1 签证适合哪些公司？',
        a: 'L-1 通常适用于以下情形：已在境外运营的公司计划进入美国市场；企业计划设立美国子公司、分公司或关联公司；需要派遣管理人员或核心技术员工赴美负责本地业务；或希望通过企业路径实现长期在美国发展的申请人。',
      },
      {
        q: 'L-1 申请是否必须有境外公司？',
        a: '通常需要。境外公司与美国公司之间需存在符合移民局要求的合格关联关系，例如母公司、子公司、分公司或关联公司。境外公司需要能够证明具有真实业务运营能力，并能够支持美国公司的发展。',
      },
      {
        q: 'L-1 申请人是否必须是公司股东？',
        a: '不必须。申请人可以是公司股东，也可以是公司员工。关键在于申请人在公司中担任管理或高管职位（L-1A），或具备公司专门知识（L-1B），而不是其股权比例。',
      },
      {
        q: 'L-1 签证是否要求学历或英语成绩？',
        a: '没有固定学历或语言成绩要求。移民局重点审查的是申请人的岗位职责是否符合管理人员或专业知识人员的认定标准，以及公司结构是否满足要求，而不是考试成绩或学历证书。',
      },
      {
        q: 'L-1 与 H-1B 有什么主要区别？',
        a: 'L-1 适用于跨国公司内部员工调动，要求境内外公司存在合格关联关系，无需抽签，可全年申请；H-1B 通常用于美国公司直接招聘专业员工，不需要公司关联关系，但通常需要参加年度抽签。两者适用场景不同，选择哪条路径取决于企业结构和申请人背景。',
      },
      {
        q: 'L-1 签证是否适合创业者？',
        a: '在符合公司结构要求的情况下，创业者可以通过设立美国公司申请 L-1。需要满足：境外公司与美国公司存在合格关联关系、申请人担任管理岗位、公司具备真实业务计划。建议在启动前与律师评估结构可行性。',
      },
    ],
  },
  {
    label: '申请条件',
    faqs: [
      {
        q: 'L-1A 申请人需要满足什么条件？',
        a: '申请人需要在过去 3 年内，至少有 1 年在境外关联公司工作；赴美后在美国公司担任管理或高管职位；具备管理团队或负责业务决策的能力；工作职责以管理或战略为主，而非日常执行工作。',
      },
      {
        q: 'L-1B 申请人需要满足什么条件？',
        a: '申请人需要在过去 3 年内，至少有 1 年在境外关联公司工作；在美国公司担任专业知识岗位；对公司产品、服务或系统具有专门知识；且该专门知识难以在短期内由其他员工替代。',
      },
      {
        q: '美国公司需要满足哪些条件？',
        a: '美国公司需与境外公司存在合格关联关系（母公司、子公司、分公司或关联公司）；需真实开展业务，而非仅作为联络机构；具备持续提供产品或服务的能力；以及具备支持员工长期工作的运营能力。',
      },
      {
        q: '境外公司需要运营多久才可以申请 L-1？',
        a: '法律并未规定最低运营年限，但通常需要能够证明公司具有真实业务运营，例如稳定的业务活动、合理的员工规模、持续经营能力，以及能够支持美国公司发展的实力。运营历史越长、证明材料越充分，申请风险越低。',
      },
      {
        q: '公司规模较小是否可以申请 L-1？',
        a: '可以，但需要能够证明：公司具备真实业务、组织结构合理、岗位职责符合管理人员或专业知识人员的定义，以及公司具有持续发展的潜力。小型企业的申请通常会面临更严格的审查，建议提前与律师评估并充分准备相关证明材料。',
      },
      {
        q: 'L-1 是否可以用于新成立的美国公司（New Office）？',
        a: '可以。New Office L-1 允许企业设立新的美国公司并派遣管理人员赴美运营。通常需要提供商业计划书、公司发展规划、办公室租赁证明及启动资金证明等材料。New Office L-1 首次通常批准 1 年，后续可申请延期。',
      },
      {
        q: 'L-1 申请是否一定需要办公室？',
        a: '通常需要证明公司具备真实运营能力。常见证明包括办公室租赁合同、商业地址证明、员工团队信息及运营计划等。对于 New Office 申请，移民局会重点审查办公场地与运营规划的可行性。',
      },
      {
        q: 'L-1 申请是否必须有收入？',
        a: '不一定必须已有收入，但通常需要证明公司具备真实业务计划或运营能力，例如客户合同、业务计划、市场拓展计划或已有资金投入。对于 New Office 申请，商业计划书和资金证明是核心材料。',
      },
    ],
  },
  {
    label: '申请材料',
    faqs: [
      {
        q: '员工（受益人）通常需要准备哪些材料？',
        a: '常见员工材料包括：护照、简历、学历证明、详细职位描述、组织架构图、任职证明、过去三年工作证明，以及管理职责说明。具体清单因案件情况而异，律师会在启动服务后提供定制化材料清单。',
      },
      {
        q: '美国公司通常需要准备哪些材料？',
        a: '常见美国公司材料包括：公司注册文件、EIN 税号、公司介绍材料、商业计划书（New Office 必需）、组织架构图、办公室租赁文件、财务报表、客户合同或发票，以及股权结构文件。',
      },
      {
        q: '境外公司通常需要准备哪些材料？',
        a: '常见境外公司材料包括：营业执照、公司章程、公司介绍、财务报表、客户合同、员工名单、组织架构图，以及办公场地证明。境外材料通常需要提供官方翻译件。',
      },
      {
        q: '如果美国公司刚成立，部分材料是否可以替换？',
        a: '可以。如涉及新设美国公司的 New Office 申请，尚未产生的财务材料（如财务报表）可以用商业计划书、预计收入说明及资金投入证明替代。具体替换方案以律师评估为准，不同案件情况有所差异。',
      },
      {
        q: 'L-1 申请是否需要商业计划书？',
        a: 'New Office L-1 申请通常需要提供商业计划书，以证明美国公司的发展规划与运营可行性。已运营一定时间的公司通常不需要完整的商业计划书，但仍需提供能够证明真实业务运营的相关说明材料。',
      },
    ],
  },
  {
    label: '审理与补件',
    faqs: [
      {
        q: 'L-1 审批时间通常多久？',
        a: '加急处理（Premium Processing）通常在 15 个工作日内获得结果，费用为 $2,965（2026 年 3 月 1 日起生效）；常规处理通常需要 4–6 个月。具体时间取决于移民局当前审理进度与案件复杂程度。',
      },
      {
        q: 'L-1 申请是否可能收到补件通知（RFE）？',
        a: '有可能。常见补件原因包括：岗位职责不符合管理人员定义、公司规模不足以支持管理层结构、公司运营证明材料不充分，以及组织架构描述不清晰等。通过合理设计申请材料、事先构建清晰的论证框架，可以有效降低补件概率。',
      },
      {
        q: 'L-1 是否可以多次延期？',
        a: 'L-1A 最长可在美国停留 7 年（新公司首次 1 年，后续可申请 2 年一次的延期）；L-1B 最长可停留 5 年（新公司首次 1 年，后续可申请 2 年一次的延期）。已成立公司的 L-1 首次通常批准 3 年。到达最长年限后，如已申请或转换为其他身份，可继续留美。',
      },
      {
        q: '续签时移民局会重点审查什么？',
        a: '续签审查通常关注：美国公司的实际运营状况与发展情况、申请人是否仍在从事符合 L-1 要求的管理或专业知识工作、公司是否具备支持管理层的合理组织规模，以及申请人是否符合管理职责的实际履行记录。提前整理运营证明材料对续签至关重要。',
      },
    ],
  },
  {
    label: '获批后安排',
    faqs: [
      {
        q: 'L-1 签证是否可以转绿卡？',
        a: '可以。L-1A 持有人通常可以申请 EB-1C 跨国公司高管绿卡，通常要求美国公司运营满 1 年以上，且公司持续具备真实经营活动与合理组织规模。EB-1C 通常无需劳工证，整体周期相比 EB-2、EB-3 更短，约 1.5–2 年。',
      },
      {
        q: 'L-1 是否可以转换为其他签证身份？',
        a: '可以。常见转换路径包括：L-1A → EB-1C 绿卡、L-1 → H-1B（如有工作机会且符合条件）、L-1 → O-1，以及其他工作签证类别。具体路径需根据个人情况与当时身份状态进行评估。',
      },
      {
        q: '家属是否可以一同赴美？',
        a: '可以。配偶及 21 岁以下未婚子女可申请 L-2 签证随行入境。L-2 配偶可以申请工作许可（EAD），获批后可在美国合法工作；L-2 子女可在美国就读学校。',
      },
      {
        q: 'L-1 持有人可以在美国自由更换工作吗？',
        a: 'L-1 签证绑定特定雇主，持有人通常不能自由更换到无关联的新雇主处工作。如需换到新的关联公司，需要重新评估是否满足 L-1 申请要求并提交新的申请。如希望彻底更换雇主，通常需要转换为其他签证类别（如 H-1B 或 O-1）。',
      },
    ],
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-0 py-4 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-semibold text-zenmo-secondary leading-snug">
          {item.q}
        </span>
        <ChevronDown
          size={17}
          strokeWidth={2}
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: '#4F47E6' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-zenmo-text leading-relaxed pb-5">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function L1FAQ() {
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)

  function handleTab(i) {
    setActiveTab(i)
    setOpenIndex(null)
  }

  return (
    <section className="py-12 md:py-20 bg-zenmo-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          常见问题
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-8 max-w-2xl"
        >
          关于 L-1 签证申请条件、所需材料、审理流程及获批后安排的常见疑问
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => handleTab(i)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={
                activeTab === i
                  ? { backgroundColor: '#4F47E6', color: '#fff' }
                  : { backgroundColor: '#fff', color: '#64748B', border: '1px solid #E2E8F0' }
              }
            >
              {cat.label}
              <span
                className="ml-1.5 text-xs"
                style={{ opacity: activeTab === i ? 0.7 : 0.45 }}
              >
                {cat.faqs.length}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="bg-zenmo-light-bg rounded-xl px-6 py-1"
          style={{ boxShadow: '0 1px 12px rgba(15,23,42,0.06)' }}
        >
          {categories[activeTab].faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
