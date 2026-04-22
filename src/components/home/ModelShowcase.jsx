'use client';

import { useRef, useState, Suspense } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF, Html, Float } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

// Note: Replace '/car-model.glb' with the actual path to your 3D car model
// Ensure the model is placed inside the 'public' directory
const CAR_MODEL_PATH = '/car-model.glb';

function CarModel({ scrollProgress }) {
  const modelRef = useRef(null);
  
  // To load an actual model, uncomment the line below:
  // const { scene } = useGLTF(CAR_MODEL_PATH);

  useFrame(() => {
    if (modelRef.current) {
      // Rotate the car based on scroll progress
      // The car completes a 180-degree rotation (Math.PI) during the scroll
      modelRef.current.rotation.y = scrollProgress * Math.PI * 2;
    }
  });

  return (
    <group ref={modelRef}>
      {/* If using actual model: <primitive object={scene} scale={2} /> */}
      
      {/* Placeholder model */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <boxGeometry args={[3, 1, 6]} />
          <meshStandardMaterial color="#2997ff" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Wheels placeholder */}
        <mesh position={[-1.6, -0.5, 2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[1.6, -0.5, 2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[-1.6, -0.5, -2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[1.6, -0.5, -2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </Float>
    </group>
  );
}

export default function ModelShowcase() {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    // Pin the container and animate text opacities based on scroll progress
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // Pin for 3 viewport heights
        pin: true,
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    // Animate text sections appearing and disappearing
    tl.to(textRef1.current, { opacity: 1, y: 0, duration: 1 })
      .to(textRef1.current, { opacity: 0, y: -20, duration: 1 })
      .to(textRef2.current, { opacity: 1, y: 0, duration: 1 })
      .to(textRef2.current, { opacity: 0, y: -20, duration: 1 })
      .to(textRef3.current, { opacity: 1, y: 0, duration: 1 })
      .to(textRef3.current, { opacity: 0, y: -20, duration: 1 });
  }, { scope: containerRef });

  return (
    <section 
      id="models"
      ref={containerRef} 
      className="relative h-screen w-full bg-[#050505] overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Suspense fallback={<Html center className="text-white">Loading 3D Model...</Html>}>
            <CarModel scrollProgress={progress} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Overlay Text */}
      <div className="relative z-10 h-full w-full pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6">
        
        {/* Feature 1 */}
        <div 
          ref={textRef1} 
          className="absolute top-1/4 left-6 md:left-24 max-w-md opacity-0 translate-y-10"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            极致动力
          </h3>
          <p className="text-lg text-gray-300 drop-shadow-md">
            Unparalleled performance. 0 to 60 in under 3 seconds. Dual-motor all-wheel drive.
          </p>
        </div>

        {/* Feature 2 */}
        <div 
          ref={textRef2} 
          className="absolute top-1/2 right-6 md:right-24 max-w-md text-right opacity-0 translate-y-10"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            智能座舱
          </h3>
          <p className="text-lg text-gray-300 drop-shadow-md">
            Advanced autonomous capabilities. 360-degree cameras. Immersive spatial audio.
          </p>
        </div>

        {/* Feature 3 */}
        <div 
          ref={textRef3} 
          className="absolute bottom-1/4 left-6 md:left-24 max-w-md opacity-0 translate-y-10"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            安全交易
          </h3>
          <p className="text-lg text-gray-300 drop-shadow-md">
            Direct from verified sellers. Transparent history. Secure online payments.
          </p>
        </div>

      </div>
    </section>
  );
}

// Ensure preloading if using actual model
// useGLTF.preload(CAR_MODEL_PATH);
