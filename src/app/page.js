import Hero from '@/components/home/Hero';
import ModelShowcase from '@/components/home/ModelShowcase';
import BentoBox from '@/components/home/BentoBox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black text-white">
      {/* 
        Step 3.1: Hero Section (First Screen)
        Awwwards-style typography and entrance animations 
      */}
      <Hero />
      
      {/* 
        Step 3.2: 3D Model Showcase (ScrollTrigger Pin)
        Displays rotating 3D car with scrolling feature texts 
      */}
      <ModelShowcase />
      
      {/* 
        Step 3.3: Bento Box Features (Parallax & Hover Glow)
        Highlights system capabilities with Apple-like Bento layout
      */}
      <BentoBox />
    </main>
  );
}
