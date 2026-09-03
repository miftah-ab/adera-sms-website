"use client";

import { useState, useEffect } from"react";
import AderaLogo from"./AderaLogo";

export default function Hero() {
  const [simState, setSimState] = useState<"idle" |"missed" |"sending" |"sent">("idle");

  useEffect(() => {
    const timer = setInterval(() => {
      setSimState((prev) => {
        if (prev ==="idle") return"missed";
        if (prev ==="missed") return"sending";
        if (prev ==="sending") return"sent";
        return"idle";
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white text-slate-900 transition-colors duration-250">
      {/* Precision ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-amber-500/[0.05] blur-[120px] pointer-events-none" />

      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Narrative & Conversion */}
          <div className="flex flex-col items-start text-left lg:col-span-6 xl:col-span-7">

            {/* Category / Platform Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Android App
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-medium text-slate-500">
                Automated Response
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Miss a call. <br className="hidden sm:inline" />
              <span className="text-emerald-600">
                Adera responds.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 max-w-xl text-lg sm:text-xl font-normal leading-relaxed text-slate-700">
              Automatically send a text message when you miss a call so callers know you’ll get back to them.
            </p>

            {/* CTA Group */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="/downloads/AderaSMS.apk"
                download="AderaSMS.apk"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Adera SMS</span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-4 text-base font-semibold text-slate-700 backdrop-blur-md transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-300 active:scale-95"
              >
                <span>See how it works</span>
                <svg className="w-4 h-4 text-slate-500 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Microcopy & Assurance */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-600">
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to download
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                100% On-Device Processing
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">
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
                <div className="rounded-[28px] bg-[#fbf7ee] border border-[#132a1f]/10 overflow-hidden shadow-inner text-[#132a1f] font-sans">

                  {/* Status Bar */}
                  <div className="h-7 bg-[#0b6b45] flex items-center justify-between px-4 text-[10px] text-[#fbf7ee] font-semibold">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>4G</span>
                      <div className="h-2 w-3.5 rounded-[1px] border border-[#fbf7ee] p-[1.5px]">
                        <div className="h-full w-full bg-[#17b871]" />
                      </div>
                    </div>
                  </div>

                  {/* App Bar */}
                  <div className="bg-[#0b6b45] text-[#fbf7ee] px-4.5 py-3.5 relative overflow-hidden">
                    <div className="text-base font-bold font-serif relative z-10">Adera<span className="text-[#f5a623] font-normal"> SMS</span></div>
                    <div className="flex items-center gap-1.5 mt-1 relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] shadow-[0_0_0_3px_rgba(245,166,35,0.18)] animate-pulse" />
                      <span className="text-[10px] text-[#ffe1a8] font-medium">Active, auto reply protection is on</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-3.5 space-y-3">

                    {/* Toggle Card */}
                    <div className="bg-gradient-to-br from-[#17b871] to-[#0e8557] rounded-2xl p-4 text-white flex justify-between items-center shadow-md">
                      <div>
                        <div className="text-[10px] opacity-90 font-medium">Auto-reply</div>
                        <div className="text-base font-bold font-serif mt-0.5">Turned On</div>
                      </div>
                      <div className="w-11 h-6 bg-white/35 rounded-full p-0.5 flex justify-end">
                        <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                      </div>
                    </div>

                    {/* Active Message Card */}
                    <div className="bg-white rounded-xl p-3 border border-[#0b6b45]/10 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-bold tracking-wider uppercase text-[#0e8557]">Active Message</span>
                        <span className="text-[10px] font-semibold text-[#0e8557] cursor-pointer">Edit</span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#3b423c] bg-[#e7f5ec] rounded-lg p-2.5 font-medium">
                        አመሰግናለሁ፣ ጥሪዎን አግኝቻለሁ። በኋላ እደውልልዎታለሁ።
                      </p>
                    </div>

                    {/* Recent Activity Card */}
                    <div className="bg-white rounded-xl p-3 border border-[#0b6b45]/10 shadow-sm space-y-2">
                      <div className="flex justify-between items-center pb-1 border-b border-[#e7f5ec]">
                        <span className="text-[9px] font-bold tracking-wider uppercase text-[#0e8557]">Recent Activity</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSimState("missed");
                            setTimeout(() => setSimState("sending"), 1200);
                            setTimeout(() => setSimState("sent"), 2400);
                          }}
                          className="text-[9px] font-bold text-[#f5a623] hover:underline bg-[#f5a623]/10 px-2 py-0.5 rounded cursor-pointer"
                        >
                          Simulate Call
                        </button>
                      </div>

                      {/* Log 1 */}
                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <p className="font-bold text-[#132a1f]">+251 91 234 5642</p>
                          <p className="text-[9px] text-[#9aa196]">
                            {simState ==="idle" ?"Today, 2:14 PM" : simState ==="missed" ?"Ringing..." : simState ==="sending" ?"Sending SMS..." :"Today, 2:14 PM"}
                          </p>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          simState ==="missed" ?"text-amber-700 bg-amber-50" : simState ==="sending" ?"text-blue-700 bg-blue-50 animate-pulse" :"text-[#0e8557] bg-[#e7f5ec]"
                        }`}>
                          {simState ==="idle" ?"Sent" : simState ==="missed" ?"Missed" : simState ==="sending" ?"Sending" :"Sent"}
                        </span>
                      </div>

                      {/* Log 2 */}
                      <div className="flex justify-between items-center text-xs pt-1 border-t border-[#e7f5ec]/65">
                        <div>
                          <p className="font-bold text-[#132a1f]">+251 92 887 1017</p>
                          <p className="text-[9px] text-[#9aa196]">Today, 11:02 AM</p>
                        </div>
                        <span className="text-[9px] font-bold text-[#0e8557] bg-[#e7f5ec] px-2 py-0.5 rounded-full">
                          Sent
                        </span>
                      </div>
                    </div>

                    {/* Quiet Hours Card */}
                    <div className="bg-white rounded-xl p-3 border border-[#0b6b45]/10 shadow-sm flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#e7f5ec] flex items-center justify-center text-sm">🌙</div>
                        <div>
                          <p className="text-xs font-bold text-[#132a1f]">Quiet Hours</p>
                          <p className="text-[9px] text-[#4a574e]">11:00 PM – 6:00 AM</p>
                        </div>
                      </div>
                      <span className="text-[#b7bcb2] text-sm">›</span>
                    </div>

                  </div>

                  {/* Bottom Navigation */}
                  <div className="bg-white border-t border-[#e7f5ec] flex py-2 text-center text-[9px] text-[#9aa196] font-medium">
                    <div className="flex-1 text-[#0e8557] font-bold">
                      <span className="block text-sm">⌂</span>Home
                    </div>
                    <div className="flex-1">
                      <span className="block text-sm">💬</span>Templates
                    </div>
                    <div className="flex-1">
                      <span className="block text-sm">☰</span>Recents
                    </div>
                    <div className="flex-1">
                      <span className="block text-sm">⚙</span>Settings
                    </div>
                  </div>

                </div>

                {/* Local security footer badge */}
                <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] text-zinc-400">
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
    </section>
  );
}
