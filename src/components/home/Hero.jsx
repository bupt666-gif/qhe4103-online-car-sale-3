'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const bgRef = useRef(null);

  useGSAP(() => {
    // Initial fade in from bottom
    const tl = gsap.timeline();
    tl.fromTo(
      textRefs.current,
      { y: 50, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: 'power4.out',
        delay: 0.2
      }
    );

    // Parallax background on scroll
    gsap.to(bgRef.current, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade out text on scroll
    gsap.to(textRefs.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background with gradient overlay */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#1c1c1e] to-black opacity-80"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(41,151,255,0.15) 0%, rgba(0,0,0,1) 70%)',
        }}
      />
      
      {/* Optional: Add a subtle grid or noise pattern here */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2 
          ref={(el) => (textRefs.current[0] = el)} 
          className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Welcome to the Future
        </h2>
        
        <h1 
          ref={(el) => (textRefs.current[1] = el)} 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-none mb-6 drop-shadow-2xl"
        >
          Drive <br className="md:hidden" /> Beyond.
        </h1>
        
        <p 
          ref={(el) => (textRefs.current[2] = el)} 
          className="max-w-xl text-lg md:text-2xl text-gray-400 font-medium mb-10"
        >
          The most seamless way to buy and sell premium vehicles.
          Experience automotive excellence.
        </p>
        
        <div 
          ref={(el) => (textRefs.current[3] = el)} 
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#models" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            Explore Models
          </a>
          <a href="/register" className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
            Become a Seller
          </a>
        </div>
      </div>
    </section>
  );
}
