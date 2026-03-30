import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.7 } },
}

export default function NotFoundPage() {
  useSEO({
    title:   '页面未找到',
    noindex: true,
  })

  return (
    <section
      className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[calc(100vh-70px)]"
      style={{ background: 'linear-gradient(160deg, #0D1629 0%, #192133 100%)' }}
      aria-label="404 页面未找到"
    >

      {/* ── 装饰背景：大字 404 ──────────────────────────────────────────────── */}
      <motion.span
        variants={fadeIn}
        initial="hidden"
        animate="show"
        aria-hidden="true"
        className="absolute select-none font-black leading-none pointer-events-none"
        style={{
          fontSize: 'clamp(160px, 28vw, 380px)',
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.04em',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
        }}
      >
        404
      </motion.span>

      {/* ── 装饰线条 ───────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: 'linear-gradient(90deg, #4F47E6, #7B3AED, transparent)' }}
      />

      {/* ── 主内容 ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >

          {/* 标签 */}
          <motion.p
            variants={fadeUp}
            className="text-[10px] font-bold uppercase tracking-[0.25em] mb-6"
            style={{ color: '#7B9EFF' }}
          >
            Error 404
          </motion.p>

          {/* 主标题 */}
          <motion.h1
            variants={fadeUp}
            className="text-[28px] md:text-4xl lg:text-5xl font-semibold text-white leading-snug mb-4"
          >
            页面未找到
          </motion.h1>

          {/* 分隔线 */}
          <motion.div
            variants={fadeUp}
            className="w-12 h-0.5 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #4F47E6, #7B3AED)' }}
          />

          {/* 说明文字 */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10"
            style={{ color: '#CBD5E1' }}
          >
            您访问的页面不存在或已被移除。
            <br />
            请返回首页，或直接联系我们获取法律咨询。
          </motion.p>

          {/* 按钮组 */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-[10px] border transition-all duration-300"
              style={{
                borderColor: 'rgba(255,255,255,0.15)',
                color: '#CBD5E1',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.color = '#CBD5E1'
              }}
            >
              <ArrowLeft size={15} strokeWidth={2} />
              返回首页
            </Link>

            <Link
              to="/contact"
              className="btn-primary group"
            >
              联系我们，免费咨询
              <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* 快捷导航 */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {[
              { label: '关于我们',   to: '/about-us' },
              { label: '移民法律',   to: '/immigration-law' },
              { label: 'H-1B 签证', to: '/immigration-law/h-1b' },
              { label: '商业法律',   to: '/business-law' },
              { label: '个人法务',   to: '/individual-law' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(171,185,197,0.6)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ABB9C5' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(171,185,197,0.6)' }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── 底部装饰 ───────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-[11px]" style={{ color: 'rgba(171,185,197,0.3)' }}>
          © 2026 Global Focus Law Group PLLC DBA Zenmo Law（阡陌律师事务所）
        </p>
      </motion.div>

    </section>
  )
}
