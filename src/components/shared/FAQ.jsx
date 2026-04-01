import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
          className={`flex-shrink-0 text-zenmo-btn1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default function ImmigrationFAQ({ title, subtitle, categories }) {
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)

  function handleTab(i) {
    setActiveTab(i)
    setOpenIndex(null)
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-3"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-8 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => handleTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === i
                  ? 'bg-zenmo-btn1 text-white'
                  : 'bg-zenmo-light-bg text-slate-500 border border-slate-200'
              }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-xs ${activeTab === i ? 'opacity-70' : 'opacity-45'}`}>
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
          className="bg-zenmo-light-bg rounded-xl px-6 py-1 shadow-zenmo-md"
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
