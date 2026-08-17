"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AderaLogo from "./AderaLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050b08]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          aria-label="Adera SMS Home"
        >
          <AderaLogo className="w-7 h-7" variant="badge" />
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
            Adera <span className="text-emerald-400">SMS</span>
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          <a
            href="#how-it-works"
            className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white hover:bg-white/[0.06] rounded-full"
          >
            How it works
          </a>
          <a
            href="#features"
            className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white hover:bg-white/[0.06] rounded-full"
          >
            Features
          </a>
          <a
            href="#privacy"
            className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white hover:bg-white/[0.06] rounded-full"
          >
            Privacy
          </a>
          <a
            href="#faq"
            className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white hover:bg-white/[0.06] rounded-full"
          >
            FAQ
          </a>
        </nav>

        {/* Right: Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#download"
            className="relative group overflow-hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Adera SMS
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
        <div className="md:hidden border-b border-white/[0.08] bg-[#050b08]/95 px-6 pt-4 pb-6 backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3">
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-base font-medium text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg transition-colors"
            >
              How it works
            </a>
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-base font-medium text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg transition-colors"
            >
              Features
            </a>
            <a
              href="#privacy"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-base font-medium text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg transition-colors"
            >
              Privacy
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-base font-medium text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg transition-colors"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-500 py-3 text-base font-semibold text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
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
