import Link from 'next/link'
import { FOOTER_GROUPS } from '@/lib/siteNavigation'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/70 bg-white/60 px-5 py-14 shadow-[0_-28px_90px_rgba(24,31,53,0.1)] backdrop-blur-2xl md:px-8">
      <div className="shell-container grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <p className="bg-gradient-to-r from-[#ff3d7f] via-[#ffb703] to-[#00b4d8] bg-clip-text text-xs font-black uppercase tracking-[0.28em] text-transparent">
            AutoSphere
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">
            Exceptional cars, presented with calm confidence.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            A premium coursework concept for browsing, listing, and presenting
            high-end used vehicles.
          </p>
        </div>

        {FOOTER_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-slate-950">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#ff3d7f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell-container mt-10 border-t border-slate-950/10 pt-5 text-xs text-slate-500">
        QHE4103 Fundamentals of Web Technology · Member 1 shell and homepage
        integration by wangchaoyu.
      </div>
    </footer>
  )
}
