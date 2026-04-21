import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'

export const metadata: Metadata = {
  title: 'HVAC Financing — Louisville, KY | Hometown Heating & Air',
  description: 'HVAC financing options in Louisville, KY. New system installation without the big upfront hit. Call Jim Barker at (502) 555-0174.',
}

export default function FinancingPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            HVAC Financing Options
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            A new HVAC system is a real investment. We work with financing partners so you&apos;re not putting it on a credit card or going without heat to save up.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '💳', title: 'Low Monthly Payments', desc: 'Spread the cost of a new system over 12–60 months with competitive rates.' },
              { icon: '0️⃣', title: '0% Promotional Rates', desc: 'Qualifying customers may be eligible for 0% financing for 12–18 months.' },
              { icon: '⚡', title: 'Fast Approval', desc: 'Application process takes minutes. Know your options before we start the job.' },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6 text-center">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-heading text-brand-text-primary mb-2" style={{ fontSize: '22px' }}>{item.title}</h3>
                <p className="text-brand-text-secondary font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-8">
            <h2 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: '28px' }}>No Pressure. Just Options.</h2>
            <p className="text-brand-text-secondary font-body text-base leading-relaxed">
              Jim will present financing as one option alongside the total cost — he won&apos;t push financing to increase his sale. If you&apos;d rather pay upfront, great. If financing makes more sense for your family, he&apos;ll walk you through the numbers.
            </p>
          </div>
        </div>
      </section>

      <CTABlock headline="Let's Talk About Your Options" subtext="Call Jim or fill out the form. He'll show you what the job costs and what financing looks like — no obligation." ctaText="Get a Free Quote" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
