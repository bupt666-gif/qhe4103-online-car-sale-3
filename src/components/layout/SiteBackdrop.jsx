export default function SiteBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fff7d7_0%,#e4fbff_36%,#f9e2ff_68%,#e8ffe9_100%)]" />
      <div className="dopamine-aura absolute inset-0 opacity-80" />
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-[-18%] top-[-18%] h-[42vh] rotate-[-4deg] bg-white/50 blur-3xl" />
      <div className="absolute inset-x-[-10%] bottom-[-20%] h-[44vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.62),transparent_70%)]" />
    </div>
  )
}
