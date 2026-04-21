import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import OwnerStory from '@/components/OwnerStory'
import ServiceGrid from '@/components/ServiceGrid'
import ServiceAreaMap from '@/components/ServiceAreaMap'
import TeamSection from '@/components/TeamSection'
import Testimonials from '@/components/Testimonials'
import CTABlock from '@/components/CTABlock'
import { heroContent, homeServices, homeTestimonials, serviceAreaDetails, ownerStory } from '@/content/home'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: "Louisville's Family Heating & Air Company | Hometown Heating & Air",
  description:
    "Jim and Nate Barker have kept Louisville families comfortable for 18 years. NATE Certified HVAC. AC repair, heating, installation, and maintenance. Call (502) 555-0174.",
  openGraph: {
    title: "Louisville's Family Heating & Air Company | Hometown Heating & Air",
    description: "Jim and Nate Barker. Your neighbors — not a call center. NATE Certified since 2006.",
  },
}

export default function HomePage() {
  const teamMembers = business.team.map((t) => ({
    name: t.name,
    role: t.role,
    imageSrc: `https://picsum.photos/seed/${t.imageSeed}/300/400`,
  }))

  return (
    <>
      <Hero
        badge={heroContent.badge}
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        ctaText={heroContent.ctaText}
        ctaHref={heroContent.ctaHref}
        secondaryCtaText={heroContent.secondaryCtaText}
        secondaryCtaHref={heroContent.secondaryCtaHref}
      />

      <OwnerStory
        ownerName={ownerStory.ownerName}
        paragraph1={ownerStory.paragraph1}
        paragraph2={ownerStory.paragraph2}
        imageSrc={ownerStory.imageSrc}
        imageAlt={ownerStory.imageAlt}
        linkHref="/about"
      />

      <ServiceGrid
        services={homeServices}
        headline="Your Home's Comfort Is Our Business"
        subheadline="From emergency repairs to full system replacements — Jim and Nate handle it with the care they'd give their own home."
        bgAlt={false}
      />

      <ServiceAreaMap
        areas={serviceAreaDetails}
        headline="Hometown Heating & Air Serves Louisville and Surrounding Communities"
        tagline="Jim grew up in Louisville. When we work in your neighborhood, we're working in ours."
        state="KY"
      />

      <TeamSection members={teamMembers} />

      <Testimonials
        reviews={homeTestimonials}
        headline="What Our Neighbors Say"
        subheadline="4.9 stars across 203 Google reviews from Louisville-area homeowners."
        bgAlt={false}
      />

      <CTABlock
        headline="Call Us — We're Your Neighbors"
        subtext="We live here too. We'll treat your home like it's our own — because your neighborhood is our neighborhood."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone="(502) 555-0174"
        phoneTel="5025550174"
        warm={true}
      />
    </>
  )
}
