import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import OwnerStory from '@/components/OwnerStory'
import { ownerStory } from '@/content/home'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'About Hometown Heating & Air — Louisville, KY Since 2006',
  description: "Learn about Jim and Nate Barker and Hometown Heating & Air. Family-owned HVAC in Louisville, KY since 2006. NATE Certified. Honest work, fair pricing.",
}

const values = [
  { icon: '🤝', title: 'Family Business', description: "Jim and Nate work most service calls together. When you call Hometown, you get a father and son who put their name on every job." },
  { icon: '💬', title: 'Honest Assessments', description: "Jim will never recommend a new system when repair makes more sense. He'll never install an oversized unit because it costs more. That's how you keep customers for 18 years." },
  { icon: '🏅', title: 'NATE Certified', description: "The highest certification in the HVAC industry. Jim and Nate earn and maintain their certification because it makes them better technicians — not just for marketing." },
]

export default function AboutPage() {
  const teamMembers = business.team.map((t) => ({ name: t.name, role: t.role, imageSrc: `https://picsum.photos/seed/${t.imageSeed}/400/500` }))

  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">Our Story</span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                An Honest Shop. A Father &amp; Son Team.
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed">
                Jim Barker started Hometown Heating &amp; Air in 2006 because he was tired of watching customers get nickel-and-dimed. 18 years later, Nate has joined the business — and they bring the same philosophy to every job.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img src="https://picsum.photos/seed/hometown-team-about/1200/600" alt="Hometown Heating & Air team in Louisville, KY" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <OwnerStory ownerName={ownerStory.ownerName} paragraph1={ownerStory.paragraph1} paragraph2={ownerStory.paragraph2} imageSrc={ownerStory.imageSrc} imageAlt={ownerStory.imageAlt} linkHref="/contact" />

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-10 text-center" style={{ fontSize: '34px' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-8">
                <div className="text-3xl mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="font-body font-bold text-brand-text-primary mb-3 text-lg">{value.title}</h3>
                <p className="text-brand-text-secondary font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-10 text-center" style={{ fontSize: '34px' }}>Our People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative rounded-2xl overflow-hidden mx-auto mb-4 shadow-md" style={{ width: '180px', height: '220px' }}>
                  <img src={member.imageSrc} alt={`${member.name} — ${member.role}`} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-body font-bold text-brand-text-primary mb-0.5 text-base">{member.name}</h3>
                <p className="text-brand-accent font-body text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8 text-center" style={{ fontSize: '28px' }}>Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏅', label: 'NATE Certified', detail: 'Jim & Nate Barker' },
              { icon: '📋', label: 'KY HVAC License', detail: '#HM-04421' },
              { icon: '☢️', label: 'EPA 608 Certified', detail: 'All refrigerant work' },
              { icon: '🛡️', label: 'Fully Insured', detail: 'All work covered' },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-5 text-center">
                <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                <p className="font-body font-bold text-brand-text-primary text-xs mb-1">{item.label}</p>
                <p className="text-brand-text-muted font-body text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline="Work With Your Neighbors" subtext="Get a free estimate from Hometown Heating & Air — Louisville's family HVAC company since 2006." ctaText="Get a Free Estimate" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
