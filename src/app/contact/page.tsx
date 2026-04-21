import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = { title: "Contact Us — Hometown Heating & Air, Louisville, KY", description: "Get a free HVAC estimate from Hometown Heating & Air in Louisville, KY. Call Jim at (502) 555-0174 or fill out the form. 24/7 emergency line." }

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Get a Free Estimate</h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">Fill out the form or call Jim directly. For emergencies, (502) 555-0174 is answered 24/7.</p>
        </div>
      </section>
      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-brand-text-primary mb-6 text-2xl">Contact Information</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">📞</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Phone</p>
                      <a href="tel:5025550174" className="text-brand-primary hover:text-brand-primary-hover font-body font-semibold text-lg transition-colors">(502) 555-0174</a>
                      <p className="text-brand-accent font-body text-xs font-semibold mt-0.5">24/7 Emergency</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">✉️</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Email</p>
                      <a href="mailto:hello@hometownheatingair.com" className="text-brand-primary hover:text-brand-primary-hover font-body font-medium text-sm transition-colors">hello@hometownheatingair.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Address</p>
                      <address className="not-italic text-brand-text-secondary font-body text-sm leading-relaxed">4445 Shelbyville Rd<br />Louisville, KY 40207</address>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">🕐</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Hours</p>
                      <p className="text-brand-text-secondary font-body text-sm leading-relaxed">Mon–Fri: 8am–5:30pm<br />Sat: 9am–2pm<br /><span className="text-brand-accent font-semibold">24/7 Emergency Service</span></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6">
                <h3 className="font-body font-bold text-brand-text-primary mb-3 text-sm">Service Areas</h3>
                <p className="text-brand-text-secondary font-body text-xs leading-relaxed">Louisville · Jeffersontown · St. Matthews · Middletown · Prospect · Goshen · LaGrange · Shelbyville</p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="font-heading text-brand-text-primary mb-6 text-2xl">Tell Us About Your System</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
