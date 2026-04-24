import Link from 'next/link'
import DynamicHeroText from './DynamicHeroText'
import ShowroomPoster from './ShowroomPoster'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="hero-aurora-scrim absolute inset-0" />
      <div className="hero-prism-light" aria-hidden="true">
        <span className="hero-prism-light__beam" />
        <span className="hero-prism-light__orb" />
        <span className="hero-prism-light__line" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(161,188,202,0.24),transparent_30%),radial-gradient(circle_at_16%_24%,rgba(255,112,88,0.1),transparent_26%)]" />
      <div className="tech-grid absolute inset-0 opacity-20" />
      <div className="hero-section-blend absolute inset-x-0 bottom-0 h-56 md:h-72" aria-hidden="true" />

      <div className="shell-container relative z-10 py-14 md:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative max-w-3xl">
            <DynamicHeroText />
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              A quieter way to discover premium used vehicles, with verified sellers, clear ownership signals, and inventory presented like a modern showroom.
            </p>
            <div className="hero-gooey-actions mt-8">
              <Link href="/search" className="hero-gooey-button hero-gooey-button--primary">
                <span>Browse Inventory</span>
              </Link>
              <Link href="/register" className="hero-gooey-button hero-gooey-button--secondary">
                <span>Sell With AutoSphere</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <ShowroomPoster />
          </div>
        </div>
      </div>
    </section>
  )
}
