'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BentoCard({ children, className = '' }) {
  const cardRef = useRef(null);

  // Hover Glow Effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 group ${className}`}
    >
      {/* Glow effect overlay */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-3xl"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

export default function BentoBox() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Parallax entry for Bento Cards
    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Everything you need. <br className="hidden md:block"/> In one place.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Designed for buyers and sellers. Experience the most intuitive automotive platform ever created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Large Feature */}
          <BentoCard className="md:col-span-2 md:row-span-1" ref={(el) => (cardsRef.current[0] = el)}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">安全交易 (Secure Transactions)</h3>
              <p className="text-gray-400 max-w-sm">Every seller is verified. Every transaction is encrypted. Buy with absolute confidence.</p>
            </div>
            {/* Visual Placeholder */}
            <div className="mt-8 h-32 w-full rounded-xl bg-gradient-to-r from-[#2997ff]/20 to-purple-500/20 flex items-center justify-center border border-white/5">
              <span className="text-white/50 font-mono text-sm">SECURE_TUNNEL_ESTABLISHED</span>
            </div>
          </BentoCard>

          {/* Card 2: Medium Feature */}
          <BentoCard className="md:col-span-1 md:row-span-1" ref={(el) => (cardsRef.current[1] = el)}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">精准搜索</h3>
              <p className="text-gray-400">Filter by make, model, year, and condition instantly.</p>
            </div>
            <div className="mt-8 self-end text-[#2997ff]">
              {/* Fake UI Element */}
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-2 w-1/2 bg-[#2997ff]/50 rounded-full" />
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Medium Feature */}
          <BentoCard className="md:col-span-1 md:row-span-1" ref={(el) => (cardsRef.current[2] = el)}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Seller Dashboard</h3>
              <p className="text-gray-400">Manage your listings, track views, and respond to offers in real-time.</p>
            </div>
          </BentoCard>

          {/* Card 4: Large Feature */}
          <BentoCard className="md:col-span-2 md:row-span-1" ref={(el) => (cardsRef.current[3] = el)}>
            <div className="flex flex-col md:flex-row h-full items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold text-white mb-2">Performance Analytics</h3>
                <p className="text-gray-400">Get insights into market trends and price your vehicle competitively.</p>
              </div>
              <div className="md:w-1/2 h-32 rounded-xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover opacity-50 flex items-center justify-center border border-white/10">
                 {/* Chart Placeholder */}
                 <div className="flex items-end space-x-2 h-16">
                   <div className="w-4 bg-white/30 h-8 rounded-t-sm"></div>
                   <div className="w-4 bg-[#2997ff] h-12 rounded-t-sm"></div>
                   <div className="w-4 bg-white/30 h-6 rounded-t-sm"></div>
                   <div className="w-4 bg-purple-500 h-16 rounded-t-sm"></div>
                 </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
