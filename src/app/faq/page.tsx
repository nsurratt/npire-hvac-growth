import type { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import { faqItems } from '@/content/faq'

export const metadata: Metadata = { title: "FAQ — Hometown Heating & Air, Louisville, KY", description: "Common questions about Hometown Heating & Air. Service areas, NATE certification, emergency response, and more." }

export default function FAQPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>Frequently Asked Questions</h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            Call Jim directly at <a href="tel:5025550174" className="text-brand-primary font-semibold hover:underline">(502) 555-0174</a> if you don&apos;t find your answer.
          </p>
        </div>
      </section>
      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <CTABlock headline="Still Have Questions?" subtext="Jim personally responds to every inquiry." ctaText="Contact Us" ctaHref="/contact" phone="(502) 555-0174" phoneTel="5025550174" warm={true} />
    </>
  )
}
