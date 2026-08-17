"use client";

import { useState } from "react";
import ChecksumDisplay from "./ChecksumDisplay";

export default function DownloadSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 4000);
  };

  const steps = [
    {
      num: "01",
      title: "Download APK",
      desc: "Tap the button below to download the official AderaSMS.apk package.",
    },
    {
      num: "02",
      title: "Open the file",
      desc: "Tap the notification or find the file in your device's Downloads folder.",
    },
    {
      num: "03",
      title: "Allow installation",
      desc: "If Android prompts for permission, choose 'Allow from this source'.",
    },
    {
      num: "04",
      title: "Activate Auto-Reply",
      desc: "Open Adera SMS, configure your message, and switch Auto Reply ON.",
    },
  ];

  return (
    <section id="download" className="relative bg-gradient-to-b from-[#07150e] to-[#040906] py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Radiant glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/[0.12] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Header & Primary Conversion Destination */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-300">
              Version 1.0.1 (Latest) • Direct APK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Let Adera handle the first response.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Download Adera SMS and stay responsive, even when you can&apos;t answer.
          </p>

          {/* Download Button */}
          <div className="mt-10 flex flex-col items-center">
            <a
              href="/downloads/AderaSMS.apk"
              download="AderaSMS.apk"
              onClick={handleDownload}
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-10 py-5 text-lg font-bold text-zinc-950 shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <svg className="w-6 h-6 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{downloading ? "Downloading APK..." : "Download Adera SMS"}</span>
            </a>

            {/* Micro details */}
            <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">Android APK (~8.4 MB)</span>
              <span>•</span>
              <span>Free to download</span>
              <span>•</span>
              <span>Android 8.0+</span>
            </div>
          </div>
        </div>

        {/* 4-Step Installation Guide */}
        <div className="mt-20 rounded-3xl border border-white/[0.08] bg-[#08170f]/80 p-8 sm:p-10 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Fast 4-Step Installation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Adera is distributed as a direct APK install. Takes less than a minute.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-white/[0.06] bg-black/40 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                    {s.num}
                  </span>
                  <h4 className="mt-4 text-base font-bold text-white">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional SHA-256 Checksum */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <ChecksumDisplay />
          </div>
        </div>

      </div>
    </section>
  );
}
