import { TRUST_ITEMS } from './homeContent'

export default function TrustSection() {
  return (
    <section className="home-band scroll-reveal">
      <div className="shell-container grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#40b878]">Why Buy Here</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">
            Trust should be visible before the first enquiry is sent.
          </h2>
        </div>
        <div className="grid gap-4">
          {TRUST_ITEMS.map((item) => (
            <article key={item.title} className="effect-electric effect-glare shell-card p-5 md:p-6">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
