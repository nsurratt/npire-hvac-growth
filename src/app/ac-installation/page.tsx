import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AC Installation — Louisville, KY | Hometown Heating & Air',
  description: 'AC installation in Louisville, KY. Jim Barker does a proper load calculation and recommends the right sized unit — not the biggest. NATE Certified. (502) 555-0174.',
}

export default function ACInstallationPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">AC Installation</span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
                AC Installation in Louisville, KY
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-6">
                Jim does a proper Manual J load calculation before recommending any system. Bigger isn&apos;t better for AC — an oversized system short-cycles and leaves your home humid. Right-sized means comfortable and efficient.
              </p>
              <Link href="/contact" className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">Get an Installation Quote</Link>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img src="https://picsum.photos/seed/ac-install-louisville/800/500" alt="AC installation in Louisville, KY" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8" style={{ fontSize: '34px' }}>Why Our Installs Are Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '📐', title: 'Proper Sizing', desc: "Jim does a Manual J load calculation — every time. No eyeballing, no oversizing to increase the ticket." },
              { icon: '🏅', title: 'NATE Certified Installation', desc: "Certified installation means the manufacturer warranty is protected and the system performs as designed." },
              { icon: '🌡️', title: 'All Major Brands', desc: "We install Carrier, Lennox, Trane, Goodman, and more. Jim recommends based on value, not brand deals." },
              { icon: '📋', title: 'Full Startup & Testing', desc: "We don't hand over your keys until the system is running and verified at spec." },
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

      <CTABlock headline="Ready for a New AC System?" subtext="Jim will come out, measure your home, and recommend exactly what you need — no overselling." ctaText="Get a Free Quote" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
