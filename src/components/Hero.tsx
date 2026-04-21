import Link from 'next/link'

interface HeroProps {
  badge: string
  headline: string
  subheadline: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function Hero({ badge, headline, subheadline }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center" role="banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hometown-hvac-comfort/1600/900')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-10 items-center">

          {/* Left: headline + trust pills */}
          <div>
            <span className="inline-block bg-brand-accent text-white rounded-full px-4 py-1.5 text-sm font-body font-semibold mb-6">
              {badge}
            </span>
            <h1 className="font-heading text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
              {headline}
            </h1>
            <p className="text-white/85 font-body text-lg leading-relaxed mb-8 max-w-xl">
              {subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span><strong>4.9</strong> · 203 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                24/7 Emergency Service
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Satisfaction Guarantee
              </div>
            </div>
          </div>

          {/* Right: quote form card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <h2 className="font-heading text-brand-text-primary text-xl mb-1">Get Your Free Quote</h2>
            <p className="text-brand-text-muted font-body text-sm mb-5">Same-day response · No obligation</p>
            <form action="/contact" className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-brand-border rounded-lg px-4 py-3 font-body text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-brand-border rounded-lg px-4 py-3 font-body text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
              />
              <select
                name="service"
                required
                className="w-full border border-brand-border rounded-lg px-4 py-3 font-body text-sm text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
              >
                <option value="">Select a Service</option>
                <option value="ac-repair">AC Repair</option>
                <option value="ac-installation">AC Installation</option>
                <option value="heating-repair">Heating Repair</option>
                <option value="heating-installation">Heating Installation</option>
                <option value="maintenance">Maintenance Plan</option>
              </select>
              <div className="flex items-start gap-3 py-1">
                <input id="emergency" name="emergency" type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-brand-border text-brand-accent focus:ring-brand-accent/40 shrink-0" />
                <label htmlFor="emergency" className="text-brand-text-secondary font-body text-sm">
                  This is an emergency — I need service today
                </label>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <input id="consent" type="checkbox" required
                  className="mt-1 w-4 h-4 rounded border-brand-border text-brand-accent focus:ring-brand-accent/40 shrink-0" />
                <label htmlFor="consent" className="text-brand-text-secondary font-body text-xs leading-relaxed">
                  I consent to receive calls and SMS from this business. Message and data rates may apply. Reply STOP to unsubscribe.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold py-3.5 rounded-lg transition-colors text-base"
              >
                Request Quote →
              </button>
              <p className="text-brand-text-muted font-body text-xs text-center">
                NATE Certified · Licensed &amp; Insured · Louisville, KY
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
