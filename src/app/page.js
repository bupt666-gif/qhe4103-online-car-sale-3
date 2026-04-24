import Hero from '@/components/home/Hero'
import CuratedInventory from '@/components/home/CuratedInventory'
import TrustSection from '@/components/home/TrustSection'
import SellWithUs from '@/components/home/SellWithUs'

export default function Home() {
  return (
    <main className="home-root relative overflow-hidden text-foreground">
      <div className="home-holo-silk" aria-hidden="true">
        <span className="home-holo-silk__base" />
        <span className="home-holo-silk__veil home-holo-silk__veil--one" />
        <span className="home-holo-silk__veil home-holo-silk__veil--two" />
        <span className="home-holo-silk__spot home-holo-silk__spot--left" />
        <span className="home-holo-silk__spot home-holo-silk__spot--right" />
        <span className="home-holo-silk__grain" />
      </div>
      <Hero />
      <CuratedInventory />
      <TrustSection />
      <SellWithUs />
    </main>
  )
}
