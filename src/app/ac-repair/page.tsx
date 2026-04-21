import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AC Repair — Louisville, KY | Hometown Heating & Air',
  description: 'AC repair in Louisville, KY. NATE Certified Jim and Nate Barker diagnose fast and fix right. Same-day service available. Call (502) 555-0174.',
}

export default function ACRepairPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">AC Repair</span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
                AC Repair in Louisville, KY
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-4">
                Jim and Nate are NATE Certified — the highest certification in the HVAC industry. When they diagnose your AC, they know what they&apos;re looking at. No guessing, no parts replaced that don&apos;t need replacing.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary rounded-lg px-4 py-2 mb-6">
                <span aria-hidden="true">🏅</span>
                <span className="font-body text-sm font-semibold">NATE Certified Technicians</span>
              </div>
              <div>
                <Link href="/contact" className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">Schedule AC Repair</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img src="https://picsum.photos/seed/ac-repair-louisville/800/500" alt="AC repair in Louisville, KY" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8" style={{ fontSize: '34px' }}>Common AC Issues We Fix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '❄️', title: 'AC Not Cooling', desc: 'Low refrigerant, failed compressor, dirty coils — we find the real cause.' },
              { icon: '💧', title: 'Water Leaks', desc: 'Clogged condensate drain or refrigerant issues causing ice buildup.' },
              { icon: '🔊', title: 'Unusual Noises', desc: 'Banging, rattling, or grinding usually means a mechanical issue that needs attention now.' },
              { icon: '💸', title: 'High Energy Bills', desc: 'A system that runs constantly without cooling well is costing you money.' },
              { icon: '🌬️', title: 'Poor Airflow', desc: 'Blower motor issues, duct problems, or clogged filters.' },
              { icon: '🔁', title: 'Short Cycling', desc: "System turns on and off too frequently — usually a sizing or thermostat issue." },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-5 flex gap-3">
                <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="font-body font-semibold text-brand-text-primary text-sm mb-1">{item.title}</p>
                  <p className="text-brand-text-secondary font-body text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline="AC Acting Up?" subtext="Call Jim or Nate. NATE Certified diagnosis, honest assessment, fair pricing." ctaText="Schedule AC Repair" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
