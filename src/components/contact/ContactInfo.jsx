import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

const contactItems = [
  { label: '微信', value: 'ZENMOLAW', icon: <MessageCircle size={18} strokeWidth={1.8} /> },
  { label: '电话', value: '(800) 696-8608', icon: <Phone size={18} strokeWidth={1.8} /> },
  { label: '邮箱', value: 'contact@zenmolaw.com', icon: <Mail size={18} strokeWidth={1.8} /> },
  { label: '地址', value: '747 3rd Ave, New York NY 10017', icon: <MapPin size={18} strokeWidth={1.8} /> },
  { label: '工作时间', value: 'Mon - Fri 9:00 - 18:00 EST', icon: <Clock size={18} strokeWidth={1.8} /> },
]

export default function ContactInfo() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">

          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="section-heading mb-8">联系方式</h2>
            <div className="flex flex-col gap-4 mb-8">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="icon-framed-rounded flex-shrink-0"
                    style={{ backgroundColor: '#F5F3FF', borderColor: '#F5F3FF', color: '#7E3DED' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs text-zenmo-desc-dark font-medium">{item.label}</span>
                    <p className="text-sm md:text-base text-zenmo-secondary font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 my-6" />

            {/* WeChat QR */}
            <div className="flex items-center gap-4">
              <img
                src={assetUrl('/images/QR Codes/微信客服二维码.png')}
                alt="微信扫码免费咨询"
                className="w-24 h-24 md:w-28 md:h-28 rounded"
              />
              <div>
                <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary mb-1">微信扫码免费咨询</h4>
                <p className="text-sm text-zenmo-text">阡陌律师事务所 Suzy</p>
              </div>
            </div>
          </motion.div>

          {/* Right — map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-1/2"
          >
            <div className="w-full h-[360px] md:h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1838512684916!2d-73.97425808459418!3d40.75479794274672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe5d0e7c75%3A0x249fadd40208c45b!2s747%203rd%20Ave%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zenmo Law 阡陌律师事务所位置"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
