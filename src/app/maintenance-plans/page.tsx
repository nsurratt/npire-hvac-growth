import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Maintenance Plans — Louisville, KY | Hometown Heating & Air',
  description: 'Annual HVAC maintenance plans in Louisville, KY. Jim Barker designed the plan around what actually matters. Catch small problems before they become big ones. (502) 555-0174.',
}

export default function MaintenancePage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            HVAC Maintenance Plans
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto mb-6">
            A tuned-up system runs more efficiently, lasts longer, and breaks down less. Jim designed our plan around what actually makes a difference — not a checklist designed to justify the visit.
          </p>
          <Link href="/contact" className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
            Get a Maintenance Quote
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-8">
              <h3 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: '26px' }}>Annual Comfort Plan</h3>
              <p className="text-brand-accent font-body font-bold text-2xl mb-4">From $149/year</p>
              <ul className="space-y-3 mb-6">
                {['Spring AC tune-up (before cooling season)', 'Fall heating tune-up (before heating season)', 'Filter check and replacement', 'Full electrical and refrigerant inspection', 'Priority scheduling for repairs', '10% discount on any repair parts'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-brand-text-secondary">
                    <span className="text-brand-accent">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold py-3 rounded-lg transition-colors">
                Sign Up Today
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading text-brand-text-primary" style={{ fontSize: '26px' }}>Why It Matters</h3>
              {[
                { stat: '30%', label: 'of HVAC failures are preventable with annual maintenance' },
                { stat: '15%', label: 'efficiency loss in a system that hasn\'t been tuned up in 2+ years' },
                { stat: '2–5 years', label: 'additional life expectancy with proper maintenance' },
              ].map((item) => (
                <div key={item.stat} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-5 flex gap-4 items-center">
                  <span className="font-heading text-brand-accent text-3xl flex-shrink-0">{item.stat}</span>
                  <p className="text-brand-text-secondary font-body text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock headline="Protect Your Investment" subtext="An annual maintenance plan with Hometown is the best insurance for your HVAC system." ctaText="Get a Maintenance Quote" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
