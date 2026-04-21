import Link from 'next/link'

export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden" style={{ backgroundColor: '#2D5016', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex items-stretch divide-x divide-white/20">
        <a href="tel:5025550174" className="flex-1 flex items-center justify-center gap-2 text-white font-body font-semibold text-sm py-4 hover:bg-white/10 transition-colors" aria-label="Call Hometown Heating & Air">
          <span aria-hidden="true">📞</span><span>Emergency Line</span>
        </a>
        <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold text-sm py-4 transition-colors" aria-label="Get a free HVAC estimate">
          <span aria-hidden="true">📅</span><span>Free Estimate</span>
        </Link>
      </div>
    </div>
  )
}
