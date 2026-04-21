import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'

export const metadata: Metadata = { title: "Before & After — HVAC Results | Hometown Heating & Air", description: "Real before and after photos from Hometown Heating & Air customer jobs in Louisville, KY." }

const projects = [
  { title: 'Full System Replacement — St. Matthews', description: 'Replaced a 19-year-old Carrier system with a new 18 SEER2 unit. Proper load calc showed previous system was oversized by 0.5 tons.', beforeSeed: 'before-hvac-1', afterSeed: 'after-hvac-1' },
  { title: 'Heat Pump Installation — Middletown', description: 'Switched from a gas furnace + window AC setup to a whole-home heat pump. The customer cut energy costs by 35% in the first year.', beforeSeed: 'before-hvac-2', afterSeed: 'after-hvac-2' },
  { title: 'Ductwork Overhaul — Jeffersontown', description: 'Found collapsed flex duct in attic causing 30% efficiency loss. Replaced with hard duct — the customer immediately noticed the difference.', beforeSeed: 'before-hvac-3', afterSeed: 'after-hvac-3' },
]

export default function BeforeAfterPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>Real Jobs, Real Results</h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">Every project shown is from a real customer in our Louisville service area.</p>
        </div>
      </section>
      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map((project) => (
            <div key={project.title}>
              <h2 className="font-heading text-brand-text-primary mb-2" style={{ fontSize: '26px' }}>{project.title}</h2>
              <p className="text-brand-text-secondary font-body text-sm mb-6">{project.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-body font-semibold text-brand-text-muted text-xs uppercase tracking-wider mb-2">Before</p>
                  <div className="rounded-2xl overflow-hidden aspect-video"><img src={`https://picsum.photos/seed/${project.beforeSeed}/700/400`} alt={`Before — ${project.title}`} className="w-full h-full object-cover" /></div>
                </div>
                <div>
                  <p className="font-body font-semibold text-brand-accent text-xs uppercase tracking-wider mb-2">After</p>
                  <div className="rounded-2xl overflow-hidden aspect-video"><img src={`https://picsum.photos/seed/${project.afterSeed}/700/400`} alt={`After — ${project.title}`} className="w-full h-full object-cover" /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABlock headline="Ready for Better Comfort?" subtext="Call Jim and Nate. Honest HVAC from Louisville neighbors since 2006." ctaText="Get a Free Estimate" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
