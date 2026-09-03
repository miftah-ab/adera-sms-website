"use client";

import { useState } from"react";

export default function InteractiveStory() {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);

  const tabs = [
    {
      id: 1 as const,
      label:"01. Configuration",
      title:"Set your response template once",
      description:"Define what you want callers to receive. Tailor the message to match your personal or professional voice.",
    },
    {
      id: 2 as const,
      label:"02. Detection",
      title:"Recognizes the missed call locally",
      description:"When an incoming call ends unanswered, Adera instantly logs the event and reads the sender information.",
    },
    {
      id: 3 as const,
      label:"03. Automatic Delivery",
      title:"Dispatches the SMS via mobile network",
      description:"Your phone sends the automated SMS directly to the caller without requiring you to open or touch your phone.",
    },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden border-t border-slate-200 transition-colors duration-250">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Interactive Product Tour
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            See the flow from setup to response.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore how Adera silently bridges the gap between a missed call and your eventual callback.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer ${
                  activeTab === tab.id
                    ?"bg-emerald-600 text-white shadow-md"
                    :"text-slate-500 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Container */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 shadow-md">
          <div className="grid items-center gap-12 lg:grid-cols-12">

            {/* Story Details (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-300 px-3 py-1 text-xs font-bold text-emerald-700">
                Phase {activeTab} of 3
              </span>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                {tabs[activeTab - 1].title}
              </h3>

              <p className="text-base leading-relaxed text-slate-700">
                {tabs[activeTab - 1].description}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Processed completely on your Android device</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Supports dual SIM selection automatically</span>
                </div>
              </div>

              {/* Progress buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveTab((prev) => (prev === 1 ? 3 : ((prev - 1) as any)))}
                  className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 cursor-pointer"
                  aria-label="Previous step"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab((prev) => (prev === 3 ? 1 : ((prev + 1) as any)))}
                  className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 cursor-pointer"
                  aria-label="Next step"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Simulated Live UI Stage (Right 7 Cols) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[420px] rounded-3xl border-4 border-slate-300 bg-slate-50 p-5 shadow-lg">

                {/* Simulated Android Screen Content */}
                {activeTab === 1 && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold text-slate-600">Message Settings</span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Ready</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-medium text-slate-500">Response Template</label>
                      <div className="rounded-xl border border-emerald-300 bg-white p-3.5 text-xs text-slate-800 leading-relaxed">
                        &quot;Thank you for calling. I am currently unavailable, but I received your call and will get back to you shortly.&quot;
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-3 border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Auto Reply Active</span>
                        <div className="h-4 w-7 rounded-full bg-emerald-500 p-0.5 flex justify-end">
                          <div className="h-3 w-3 rounded-full bg-white" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                        <span className="text-slate-600">SIM Card Preference</span>
                        <span className="text-[11px] font-mono text-emerald-600">SIM 1 (Default)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold text-slate-600">Android System Event</span>
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Triggered</span>
                    </div>

                    <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-rose-700">Missed Call Logged</span>
                        <span className="text-[10px] text-slate-500">14:02 PM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600 font-bold text-sm">
                          +1
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">+1 (206) 555-0149</p>
                          <p className="text-[11px] text-slate-500">Incoming call rang for 22 seconds</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-800 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Adera background service matched missed-call event</span>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold text-slate-600">SMS Outbox Log</span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Sent</span>
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-4 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-emerald-800">To: +1 (206) 555-0149</span>
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Delivered</span>
                        </div>
                        <p className="text-xs text-slate-800 italic leading-relaxed">
                          &quot;Thank you for calling. I am currently unavailable, but I received your call and will get back to you shortly.&quot;
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                          <span>Via Mobile Carrier (SIM 1)</span>
                          <span>Timestamp: 14:02:02</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-3 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                      <span>Caller Status</span>
                      <span className="font-semibold text-emerald-600">Reassured & Waiting</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
