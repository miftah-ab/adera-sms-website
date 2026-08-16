import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="bg-green-deep text-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex flex-col items-center">
          <Image src="/aderasms-logo.png" alt="Adera SMS Logo" width={64} height={64} className="mb-2" />
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold">
            Adera<span className="text-gold"> SMS</span>
          </span>
        </div>
        <a
          href="/downloads/AderaSMS.apk"
          className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105 active:scale-95"
        >
          Download
        </a>
      </nav>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-10 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          No more sorry I missed your call
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gold-soft sm:text-xl">
          Adera SMS replies for you the moment a call is missed, so callers
          never have to wonder. Fully offline. Nothing leaves your phone.
        </p>

        <a
          id="download"
          href="/downloads/AderaSMS.apk"
          className="mt-10 rounded-full bg-gold px-10 py-4 text-lg font-semibold text-ink shadow-lg shadow-gold/30 transition-transform hover:scale-105 active:scale-95"
        >
          Download Now
        </a>
        <p className="mt-3 font-medium text-cream/90">
          Over 1.3K people have downloaded Adera SMS
        </p>
        <p className="mt-2 text-sm text-gold-soft">
          Free to use. Works on Android. Nothing is uploaded, ever.
        </p>
      </div>
    </header>
  );
}
