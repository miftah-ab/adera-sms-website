"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AderaLogo from "./AderaLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">

        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          aria-label="Adera SMS Home"
        >
          <AderaLogo className="w-7 h-7" variant="badge" />
          <span className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
            Adera <span className="text-emerald-600">SMS</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5"
          aria-label="Main Navigation"
        >
          {[
            { href: "#how-it-works", label: "How it works" },
            { href: "#features",     label: "Features" },
            { href: "#privacy",      label: "Privacy" },
            { href: "#faq",          label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-700 hover:bg-emerald-50 rounded-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: Download CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/downloads/AderaSMS.apk"
            download="AderaSMS.apk"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-emerald-500 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Adera SMS
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white px-6 pt-4 pb-6 shadow-lg animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-2">
            {[
              { href: "#how-it-works", label: "How it works" },
              { href: "#features",     label: "Features" },
              { href: "#privacy",      label: "Privacy" },
              { href: "#faq",          label: "FAQ" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/downloads/AderaSMS.apk"
                download="AderaSMS.apk"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-3 text-base font-semibold text-white shadow-md active:scale-95 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Adera SMS
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
