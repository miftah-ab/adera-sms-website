import Link from "next/link";
import AderaLogo from "./AderaLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#030805] border-t border-white/[0.06] text-zinc-400 text-sm">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid gap-10 md:grid-cols-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AderaLogo className="w-7 h-7" variant="badge" />
              <span className="text-lg font-bold text-white tracking-tight">
                Adera <span className="text-emerald-400">SMS</span>
              </span>
            </div>
            
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              A simple response for missed calls.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Android Application • Version 1.0.1</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Product</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy & Trust
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Quick Link */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Download</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/downloads/AderaSMS.apk"
                  download="AderaSMS.apk"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Android APK
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Adera. All rights reserved.</p>
          <p className="text-zinc-400">
            Engineered for Android. Offline-first missed call engagement.
          </p>
        </div>

      </div>
    </footer>
  );
}
