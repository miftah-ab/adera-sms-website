export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-green-deep px-6 py-28 text-center text-cream">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-mid/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-br from-cream to-gold-soft">
          Never leave them wondering
        </h2>
        <a
          href="/downloads/AderaSMS.apk"
          className="group relative mt-12 inline-flex overflow-hidden rounded-full bg-gold px-12 py-5 text-lg font-bold text-ink shadow-[0_0_30px_rgba(245,166,35,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(245,166,35,0.45)] active:scale-95"
        >
          {/* Subtle shine effect on button */}
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
          <span className="relative z-10">Download Now</span>
        </a>
      </div>
    </section>
  );
}
