import Link from 'next/link'
import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import { serviceAreaDetails } from '@/content/home'

export const metadata: Metadata = { title: "Service Areas — Louisville, KY and Surrounding | Hometown Heating & Air", description: "Hometown Heating & Air serves Louisville, Jeffersontown, St. Matthews, Middletown, Prospect, Goshen, LaGrange, and Shelbyville. NATE Certified HVAC." }

export default function ServiceAreasPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>We Know Louisville — Because We Live Here</h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">Jim grew up in Louisville. When he works in your neighborhood, he&apos;s working in a community his family has been part of for decades.</p>
        </div>
      </section>
      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceAreaDetails.map((area) => (
              <Link key={area.city} href={`/service-areas/${area.city.toLowerCase().replace(/\s+/g, '-')}`} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="block p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-accent text-xl" aria-hidden="true">📍</span>
                  <h2 className="font-heading text-brand-text-primary" style={{ fontSize: '22px' }}>{area.city}, KY</h2>
                </div>
                <p className="text-brand-text-secondary font-body text-sm leading-relaxed mb-4">{area.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['AC Repair', 'Heating', 'Installation', 'Maintenance'].map((svc) => (
                    <span key={svc} className="bg-brand-primary/10 text-brand-primary font-body font-medium px-3 py-1.5 rounded-lg text-center">{svc}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABlock headline="Serving Your Neighborhood" subtext="Call Jim and Nate for a free estimate. NATE Certified HVAC from Louisville neighbors." ctaText="Get a Free Estimate" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
