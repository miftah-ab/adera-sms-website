"use client";

import { useEffect, useState } from "react";

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (~500px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-[#06140d]/95 p-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white truncate">Adera SMS</p>
          <p className="text-[10px] text-emerald-400 truncate">Android APK • Free</p>
        </div>

        <a
          href="#download"
          className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-zinc-950 shadow-md active:scale-95 transition-transform"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download</span>
        </a>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-zinc-400 hover:text-white"
          aria-label="Dismiss download bar"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
