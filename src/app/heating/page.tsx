import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Heating Repair & Installation — Louisville, KY | Hometown Heating & Air',
  description: 'Furnace repair, heat pump service, and heating installation in Louisville, KY. Jim and Nate Barker, NATE Certified. 24/7 emergency. Call (502) 555-0174.',
}

export default function HeatingPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">Heating</span>
          <h1 className="font-heading text-brand-text-primary mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Heating Repair &amp; Installation in Louisville
          </h1>
          <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-6 max-w-2xl">
            Louisville winters are serious. Jim and Nate take heating calls as a priority — a home without heat in January is an emergency, and they treat it like one.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:5025550174" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
              <span aria-hidden="true">📞</span> Call Now — 24/7
            </a>
            <Link href="/contact" className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '🔧', title: 'Furnace Repair', desc: 'Gas, electric, and heat pump furnaces. Jim diagnoses the real problem — not just the symptom.' },
              { icon: '🏗️', title: 'Furnace Replacement', desc: "When it makes more sense to replace, Jim recommends the right size and efficiency rating for your home." },
              { icon: '♨️', title: 'Heat Pump Service', desc: "Heat pump repair, refrigerant charging, and full system replacement." },
              { icon: '🚨', title: '24/7 Emergency Heating', desc: "No heat in winter = emergency. We respond around the clock — a real person always answers." },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-heading text-brand-text-primary mb-2" style={{ fontSize: '22px' }}>{item.title}</h3>
                <p className="text-brand-text-secondary font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline="Heating Issues? We're Here." subtext="Jim and Nate are NATE Certified and available 24/7 for heating emergencies." ctaText="Schedule Heating Service" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
