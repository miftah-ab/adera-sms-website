import Link from"next/link";
import AderaLogo from"./AderaLogo";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 text-slate-600 text-sm transition-colors duration-250">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">

        {/* Main Footer Row */}
        <div className="grid gap-10 md:grid-cols-12">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AderaLogo className="w-7 h-7" variant="badge" />
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Adera <span className="text-emerald-600">SMS</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              A simple response for missed calls.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Product</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  Privacy & Trust
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Quick Link */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Download</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/downloads/AderaSMS.apk"
                  download="AderaSMS.apk"
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-500 font-semibold transition-colors"
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
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Adera. All rights reserved.</p>
          <p className="text-slate-500">
            Engineered for Android. Offline-first missed call engagement.
          </p>
        </div>

      </div>
    </footer>
  );
}
