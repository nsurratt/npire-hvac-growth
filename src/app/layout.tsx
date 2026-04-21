import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileBottomCTA from '@/components/MobileBottomCTA'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Hometown Heating & Air — Louisville, KY',
    default: 'Hometown Heating & Air — Family HVAC in Louisville, KY',
  },
  description:
    'Jim and Nate Barker have kept Louisville families comfortable since 2006. Family-owned HVAC: AC repair, heating, installation, and maintenance. NATE Certified. 24/7 emergency.',
  keywords: [
    'HVAC Louisville KY',
    'AC repair Louisville',
    'heating repair Louisville KY',
    'HVAC company Louisville',
    'family HVAC Louisville',
  ],
  metadataBase: new URL('https://hometownheatingair.com'),
  twitter: {
    card: 'summary_large_image',
    title: 'Hometown Heating & Air — Family HVAC in Louisville, KY',
    description: "Jim and Nate Barker. Louisville's family heating and air company since 2006. NATE Certified, 24/7 emergency.",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hometownheatingair.com',
    siteName: 'Hometown Heating & Air',
    title: "Hometown Heating & Air — Family HVAC in Louisville, KY",
    description: "Jim and Nate Barker. Louisville's family heating and air company since 2006. NATE Certified, 24/7 emergency.",
    images: [
      { url: 'https://picsum.photos/seed/hometown-hvac-hero/1200/630', width: 1200, height: 630, alt: 'Hometown Heating & Air — Louisville, KY' },
    ],
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HVACBusiness'],
  name: 'Hometown Heating & Air',
  image: 'https://picsum.photos/seed/hometown-hvac-hero/1200/630',
  telephone: '+15025550174',
  email: 'hello@hometownheatingair.com',
  url: 'https://hometownheatingair.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4445 Shelbyville Rd',
    addressLocality: 'Louisville',
    addressRegion: 'KY',
    postalCode: '40207',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
  ],
  priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '203' },
  areaServed: ['Louisville, KY', 'Jeffersontown, KY', 'St. Matthews, KY', 'Middletown, KY', 'Prospect, KY', 'Goshen, KY', 'LaGrange, KY', 'Shelbyville, KY'],
  foundingDate: '2006',
  founder: { '@type': 'Person', name: 'Jim Barker' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSerifDisplay.variable + ' ' + dmSans.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="font-body text-brand-text-primary antialiased" style={{ backgroundColor: '#FEFDF8' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-brand-primary">
          Skip to main content
        </a>
        <header>
          <AnnouncementBar />
          <Navigation />
        </header>
        <main id="main-content" className="pt-24">{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  )
}
