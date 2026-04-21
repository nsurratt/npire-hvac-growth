import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indoor Air Quality — Louisville, KY | Hometown Heating & Air',
  description: 'Whole-home air filtration, humidifiers, and UV systems in Louisville, KY. Especially valuable for families with allergies or asthma. Call (502) 555-0174.',
}

export default function IndoorAirQualityPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">Indoor Air Quality</span>
          <h1 className="font-heading text-brand-text-primary mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Better Air Inside Your Louisville Home
          </h1>
          <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-6 max-w-2xl">
            Most homes have air that&apos;s 2–5x more polluted than outdoor air. For families with allergies, asthma, or young children, whole-home air quality systems make a real difference — not just a filter upgrade.
          </p>
          <Link href="/contact" className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
            Get an Air Quality Assessment
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🌬️', title: 'Whole-Home Air Filtration', desc: 'HEPA-level whole-home filtration removes allergens, dust, and particles that standard filters miss.' },
              { icon: '💧', title: 'Whole-Home Humidifiers', desc: "Louisville winters dry out the air. Proper humidity reduces respiratory issues and protects wood floors and furniture." },
              { icon: '☀️', title: 'UV Air Purification', desc: 'UV systems neutralize mold, bacteria, and viruses inside the air handler — especially valuable for immune-compromised family members.' },
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

      <CTABlock headline="Breathe Better at Home" subtext="Jim will assess your home and recommend what actually makes sense for your family's situation." ctaText="Get a Free Assessment" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
