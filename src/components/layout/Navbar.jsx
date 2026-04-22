'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navInnerRef = useRef(null);

  useGSAP(() => {
    // Apple-like navbar shrink effect on scroll
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: {
        className: 'scrolled',
        targets: navRef.current,
      },
    });

    // Animate width of inner container
    gsap.to(navInnerRef.current, {
      scrollTrigger: {
        start: 'top -50',
        end: 'top -150',
        scrub: true,
      },
      paddingY: '0.5rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    });
  }, { scope: navRef });

  const navLinks = [
    { name: 'Search', href: '/search' },
    { name: 'Add Car', href: '/add-car' },
    { name: 'Seller Register', href: '/register' },
    { name: 'Login', href: '/login' },
  ];

  return (
    <header 
      ref={navRef} 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
    >
      <div 
        ref={navInnerRef}
        className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between transition-all duration-300"
      >
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
          AutoSphere
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors block py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
