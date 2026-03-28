import { useSEO } from '@/hooks/useSEO'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'

export default function ContactPage() {
  useSEO({
    title: '联系我们',
    description: '联系阡陌律师事务所，免费预约法律咨询。地址：747 3rd Ave, New York NY 10017。电话：(800) 696-8608。微信：ZENMOLAW。周一至周五 9:00–18:00 EST。',
  })

  return (
    <>
      <ContactHero />
      <ContactInfo />
    </>
  )
}
