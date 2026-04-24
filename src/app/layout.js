import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SiteBackdrop from '@/components/layout/SiteBackdrop';
import SiteInteractionEffects from '@/components/layout/SiteInteractionEffects';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <SmoothScroll>
          <SiteBackdrop />
          <SiteInteractionEffects />
          <Navbar />
          <div className="site-page-shell relative isolate">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
