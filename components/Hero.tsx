import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-green-deep text-cream">
      {/* Ambient background glows */}
      <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] h-[400px] w-[400px] rounded-full bg-green-bright/10 blur-[100px] pointer-events-none" />

      {/* Sticky, frosted-glass navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-green-deep/70 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex flex-col items-center">
            <Image src="/aderasms-logo.png" alt="Adera SMS Logo" width={56} height={56} className="mb-1 drop-shadow-md" />
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
              Adera<span className="text-gold drop-shadow-sm"> SMS</span>
            </span>
          </div>
          <a
            href="/downloads/AderaSMS.apk"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_15px_rgba(245,166,35,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] active:scale-95"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-16 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-cream to-gold-soft drop-shadow-sm">
          No more sorry I missed your call
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gold-soft/90 sm:text-xl font-medium leading-relaxed">
          Adera SMS replies for you the moment a call is missed, so callers
          never have to wonder. Fully offline. Nothing leaves your phone.
        </p>

        <a
          id="download"
          href="/downloads/AderaSMS.apk"
          className="group relative mt-12 overflow-hidden rounded-full bg-gold px-12 py-5 text-lg font-bold text-ink shadow-[0_0_30px_rgba(245,166,35,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(245,166,35,0.45)] active:scale-95"
        >
          {/* Subtle shine effect on button */}
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
          <span className="relative z-10">Download Now</span>
        </a>
        <p className="mt-5 font-medium text-cream/90 flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green-bright animate-pulse" />
          Over 1.3K people have downloaded Adera SMS
        </p>
        <p className="mt-2 text-sm text-gold-soft/70">
          Free to use. Works on Android. Nothing is uploaded, ever.
        </p>
      </div>
    </header>
  );
}
