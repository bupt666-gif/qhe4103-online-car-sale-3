import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'AutoSphere - The Future of Car Sales',
  description: 'Premium online car sale platform. QHE4103 Coursework Project.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased selection:bg-[#2997ff] selection:text-white">
        {/* Step 1.3: Lenis Smooth Scroll Wrapper */}
        <SmoothScroll>
          {/* Step 2.1: Global Glassmorphism Navbar */}
          <Navbar />
          
          {/* Main Content (Injected by Next.js router) */}
          {children}
          
          {/* Step 2.2: Global Footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
