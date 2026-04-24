'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PRIMARY_NAV_LINKS } from '@/lib/siteNavigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() ?? ''

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={[
          'shell-container rounded-full border transition-all duration-500',
          isScrolled
            ? 'border-white/80 bg-white/80 py-2 shadow-[0_20px_70px_rgba(24,31,53,0.18)] backdrop-blur-2xl'
            : 'border-white/60 bg-white/60 py-3 shadow-[0_18px_60px_rgba(24,31,53,0.1)] backdrop-blur-xl',
        ].join(' ')}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="shrink-0 bg-gradient-to-r from-[#ff3d7f] via-[#ffb703] to-[#00b4d8] bg-clip-text text-[0.95rem] font-black tracking-[0.18em] text-transparent"
          >
            AutoSphere
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {PRIMARY_NAV_LINKS.map((link) => {
              const active = pathname === link.href
              const isSearch = link.href === '/search'

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'rounded-full px-3 py-1.5 text-sm tracking-[0.02em] transition-colors',
                    active
                      ? 'bg-slate-950 text-white shadow-[0_10px_28px_rgba(16,24,40,0.18)]'
                      : isSearch
                        ? 'text-slate-950 hover:bg-white/70'
                        : 'text-slate-600 hover:bg-white/70 hover:text-slate-950',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 text-slate-950 transition-colors hover:bg-white"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={[
            'md:hidden overflow-hidden transition-all duration-300 ease-out',
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <nav className="pt-3">
            <div className="grid gap-1 rounded-[1.5rem] border border-white/70 bg-white/80 p-2 shadow-[0_20px_60px_rgba(24,31,53,0.14)] backdrop-blur-2xl">
              {PRIMARY_NAV_LINKS.map((link) => {
                const active = pathname === link.href
                const isSearch = link.href === '/search'

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'flex items-center justify-between rounded-[1.1rem] px-4 py-3 text-sm transition-colors',
                      active
                        ? 'bg-slate-950 text-white'
                        : isSearch
                          ? 'text-slate-950 hover:bg-white/70'
                          : 'text-slate-600 hover:bg-white/70 hover:text-slate-950',
                    ].join(' ')}
                  >
                    <span>{link.label}</span>
                    {active ? (
                      <span className="text-[0.72rem] uppercase tracking-[0.2em] text-white/60">
                        Active
                      </span>
                    ) : null}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
