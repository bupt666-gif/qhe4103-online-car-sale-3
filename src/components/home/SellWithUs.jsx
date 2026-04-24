import Link from 'next/link'

import { SELLER_PERKS } from './homeContent'

export default function SellWithUs() {
  return (
    <section className="home-band scroll-reveal pb-24 md:pb-32">
      <div className="shell-container">
        <div className="effect-electric shell-card relative overflow-hidden p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,127,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,212,59,0.3),transparent_26%),radial-gradient(circle_at_74%_86%,rgba(0,180,216,0.24),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.16))]" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff3d7f]">Sell With Us</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">
                Present your vehicle with the same confidence buyers expect from a premium showroom.
              </h2>
            </div>
            <div>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">
                {SELLER_PERKS.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <Link href="/add-car" className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(16,24,40,0.22)] transition hover:bg-slate-800">
                Start Listing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
