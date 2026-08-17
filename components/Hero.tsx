"use client";

import { useState, useEffect } from "react";
import AderaLogo from "./AderaLogo";

export default function Hero() {
  const [simState, setSimState] = useState<"missed" | "sending" | "sent">("sent");
  const [isCopied, setIsCopied] = useState(false);

  // Subtle interactive loop demonstration
  useEffect(() => {
    const timer = setInterval(() => {
      setSimState((prev) => {
        if (prev === "missed") return "sending";
        if (prev === "sending") return "sent";
        return "missed";
      });
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#050b08]">
      {/* Precision ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-600/[0.12] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-amber-500/[0.08] blur-[120px] pointer-events-none" />
      
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Narrative & Conversion */}
          <div className="flex flex-col items-start text-left lg:col-span-6 xl:col-span-7">
            
            {/* Category / Platform Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Android App
              </span>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs font-medium text-zinc-400">
                Automated Response
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Miss a call. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">
                Adera responds.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 max-w-xl text-lg sm:text-xl font-normal leading-relaxed text-zinc-300">
              Automatically send a text message when you miss a call so callers know you’ll get back to them.
            </p>

            {/* CTA Group */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-zinc-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_45px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                <svg className="w-5 h-5 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Adera SMS</span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-4 text-base font-semibold text-zinc-200 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2] active:scale-95"
              >
                <span>See how it works</span>
                <svg className="w-4 h-4 text-zinc-400 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Microcopy & Assurance */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to download
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                100% On-Device Processing
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">
                Direct Android APK
              </span>
            </div>

          </div>

          {/* Right Column: Premium Realistic Android Product Presentation */}
          <div className="flex justify-center lg:col-span-6 xl:col-span-5">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer decorative back glow */}
              <div className="absolute -inset-1.5 rounded-[44px] bg-gradient-to-b from-emerald-500/30 via-emerald-800/10 to-amber-500/20 blur-xl opacity-80" />

              {/* Realistic Android Hardware Frame */}
              <div className="relative rounded-[40px] border-[6px] border-[#18261e] bg-[#09150e] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1)]">
                
                {/* Hardware Speaker & Camera Notch */}
                <div className="relative mb-3 flex items-center justify-between px-3 pt-1 text-[11px] font-semibold text-zinc-400">
                  <span>9:41</span>
                  <div className="h-3.5 w-20 rounded-full bg-[#050b08] border border-white/5 mx-auto" />
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 18.9c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.29-1.29C8.93 20.26 10.88 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                    </svg>
                    <span className="text-[10px]">5G</span>
                    <div className="h-2.5 w-5 rounded-[2px] border border-zinc-400 p-[1px]">
                      <div className="h-full w-full bg-emerald-400 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* In-App Experience Canvas */}
                <div className="space-y-3 rounded-[28px] bg-[#06110a] p-4 border border-emerald-950/80">
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <AderaLogo className="w-6 h-6" variant="badge" />
                      <div>
                        <p className="text-sm font-bold text-white tracking-tight">Adera SMS</p>
                        <p className="text-[10px] font-medium text-emerald-400 flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Protection Active
                        </p>
                      </div>
                    </div>
                    
                    {/* Switch state */}
                    <div className="flex items-center gap-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1">
                      <span className="text-[11px] font-semibold text-emerald-300">ON</span>
                      <div className="h-4 w-7 rounded-full bg-emerald-500 p-0.5 flex items-center justify-end">
                        <div className="h-3 w-3 rounded-full bg-zinc-950 shadow-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Active Message Template Card */}
                  <div className="rounded-2xl border border-white/[0.08] bg-[#0c2015] p-3.5">
                    <div className="flex items-center justify-between text-[11px] font-medium text-emerald-300 mb-1.5">
                      <span>Configured Auto-Reply</span>
                      <span className="text-[10px] text-zinc-400 bg-white/[0.06] px-2 py-0.5 rounded-full">Default</span>
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-100 font-normal">
                      &quot;Thank you for calling. I am currently unavailable, but I received your call and will get back to you shortly.&quot;
                    </p>
                  </div>

                  {/* Live Simulation Card */}
                  <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-[#091e14] to-[#06140d] p-3.5 shadow-inner">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        Live Activity Stream
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setSimState("missed");
                          setTimeout(() => setSimState("sending"), 1200);
                          setTimeout(() => setSimState("sent"), 2400);
                        }}
                        className="text-[10px] font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded transition-colors"
                      >
                        Simulate Call
                      </button>
                    </div>

                    {/* Notification Event */}
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5 rounded-xl bg-black/40 p-2.5 border border-white/[0.05]">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-[11px] font-bold text-zinc-200 truncate">+1 (555) 019-4821</p>
                            <span className="text-[10px] text-zinc-500">Just now</span>
                          </div>
                          <p className="text-[10px] text-rose-300/90 font-medium">Missed call detected</p>
                        </div>
                      </div>

                      {/* Automated Response Sent Event */}
                      <div className="flex items-start gap-2.5 rounded-xl bg-emerald-950/40 p-2.5 border border-emerald-500/30">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-[11px] font-bold text-emerald-300">Automated SMS Dispatched</p>
                            <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                              {simState === "missed" ? "QUEUED" : simState === "sending" ? "SENDING..." : "DELIVERED"}
                            </span>
                          </div>
                          <p className="text-[10px] text-zinc-300 line-clamp-1 mt-0.5">
                            &quot;Thank you for calling. I am currently unavailable...&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Local security footer badge */}
                  <div className="flex items-center justify-center gap-1.5 pt-1 text-[10px] text-zinc-400">
                    <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Processed 100% locally on this device</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
