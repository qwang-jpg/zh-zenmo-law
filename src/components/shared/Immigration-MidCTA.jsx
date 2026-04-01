import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function MidCTA({ badge, title, description }) {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-16">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <div className="rounded-2xl px-7 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white border border-gray-100 shadow-zenmo-lg">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-zenmo-btn2">
              {badge}
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-zenmo-secondary mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-zenmo-text max-w-lg leading-relaxed">
              {description}
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary whitespace-nowrap flex-shrink-0 hover:shadow-lg"
          >
            免费咨询
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  )
}
