export interface ServiceItem {
  title: string
  description: string
  href: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  imageSrc: string
}

export interface Testimonial {
  name: string
  neighborhood: string
  rating: number
  text: string
}

export interface ServiceAreaDetail {
  city: string
  description: string
}

export const heroContent = {
  badge: 'Serving Louisville Since 2006',
  headline: "Louisville's Family Heating & Air Company",
  subheadline:
    "Jim and Nate Barker have kept Louisville families comfortable for 18 years. Your neighbors — not a call center.",
  ctaText: 'Get a Free Estimate',
  ctaHref: '/contact',
  secondaryCtaText: "Call Us — We're Your Neighbors",
  secondaryCtaHref: 'tel:5025550174',
}

export const homeServices: ServiceItem[] = [
  {
    title: 'AC Repair',
    description:
      "AC not cooling? Jim and Nate diagnose fast and fix it right. No parts replaced that don't need replacing.",
    href: '/ac-repair',
    icon: '❄️',
  },
  {
    title: 'AC Installation',
    description:
      "New system installation done by NATE-certified technicians. Jim recommends the right size unit — not the one with the highest margin.",
    href: '/ac-installation',
    icon: '🏗️',
  },
  {
    title: 'Heating',
    description:
      "Furnace repair and replacement. Heat pump service. Louisville winters are serious — we make sure your heat works when it needs to.",
    href: '/heating',
    icon: '🔥',
  },
  {
    title: 'Maintenance Plans',
    description:
      "Annual tune-ups extend equipment life and catch small problems before they become big ones. Jim designed our plan around what actually matters.",
    href: '/maintenance-plans',
    icon: '🔧',
  },
  {
    title: 'Indoor Air Quality',
    description:
      "Whole-home air filtration, humidifiers, and UV systems. Especially valuable for families with allergies or asthma.",
    href: '/indoor-air-quality',
    icon: '🌬️',
  },
  {
    title: 'Financing',
    description:
      "New system too big a hit at once? We offer financing options so you're not putting it on a credit card.",
    href: '/financing',
    icon: '💲',
  },
]

export const homeTestimonials: Testimonial[] = [
  {
    name: 'Rhonda L.',
    neighborhood: 'St. Matthews',
    rating: 5,
    text: "Jim came out on a 95-degree day in July, diagnosed the issue in 20 minutes, and had us cooling again in two hours. He even noticed our filter was clogged and changed it without charging extra. That's a neighbor, not a technician.",
  },
  {
    name: 'Brad T.',
    neighborhood: 'Middletown',
    rating: 5,
    text: "We got three quotes for a new AC system. Jim's wasn't the lowest but he was the only one who did a proper load calculation and explained why the other quotes were recommending an oversized unit. We went with Hometown and have had zero issues.",
  },
  {
    name: 'Maria S.',
    neighborhood: 'Jeffersontown',
    rating: 5,
    text: "Nate did our spring tune-up and caught a cracked heat exchanger — a real safety issue. He didn't try to scare us into a full system replacement; he explained the options clearly and let us decide. That kind of honesty is why I'll never call anyone else.",
  },
]

export const serviceAreaDetails: ServiceAreaDetail[] = [
  { city: 'Louisville', description: "Jim's home. We know every neighborhood from the East End to the South End." },
  { city: 'Jeffersontown', description: "Regular service routes in J-Town — residential and light commercial." },
  { city: 'St. Matthews', description: "Serving St. Matthews homeowners for over 15 years." },
  { city: 'Middletown', description: "HVAC service for Middletown homes and newer developments." },
  { city: 'Prospect', description: "Servicing Prospect and River Road area properties." },
  { city: 'Goshen', description: "Goshen and Oldham County service available." },
  { city: 'LaGrange', description: "LaGrange and surrounding Oldham County communities." },
  { city: 'Shelbyville', description: "Shelbyville and Shelby County service area." },
]

export const ownerStory = {
  ownerName: 'Jim Barker',
  paragraph1:
    "Jim Barker started Hometown Heating & Air in 2006 after 12 years working for a large HVAC company in Louisville. 'I kept seeing customers get nickel-and-dimed by big operations,' Jim says. 'I wanted to run an honest shop where people knew they were getting a fair deal.'",
  paragraph2:
    "His son Nate joined the business in 2021 after earning his HVAC certification — and brought his dad's same instinct for doing things right. Today Jim and Nate work most service calls together, a father and son team that Louisville families have come to trust for 18 years.",
  imageSrc: 'https://picsum.photos/seed/jim-barker-owner/600/700',
  imageAlt: 'Jim Barker, owner of Hometown Heating & Air in Louisville, KY',
}
