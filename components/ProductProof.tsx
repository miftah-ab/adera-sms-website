"use client";

import { useState } from"react";

export default function ProductProof() {
  const [activeStep, setActiveStep] = useState(3);

  const steps = [
    {
      id: 1,
      title:"Incoming Call",
      time:"00:00",
      description:"A customer or contact calls while you're occupied.",
      badge:"Ring",
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      snippet:"+1 (415) 890-2341 is calling...",
    },
    {
      id: 2,
      title:"Missed Call",
      time:"+ 15s",
      description:"You cannot pick up. Call ends unanswered.",
      badge:"Unanswered",
      icon: (
        <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
        </svg>
      ),
      snippet:"Missed Call logged on Android OS",
    },
    {
      id: 3,
      title:"Adera Detects",
      time:"+ 16s",
      description:"Adera's on-device engine triggers your active reply rule.",
      badge:"Engine Active",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      snippet:"Rule matched: Send standard SMS template",
    },
    {
      id: 4,
      title:"SMS Sent",
      time:"+ 17s",
      description:"The caller immediately receives your text message.",
      badge:"Delivered",
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      snippet:"Delivered: 'I missed your call, will get back shortly!'",
    },
  ];

  return (
    <section className="relative border-y border-slate-200 bg-white py-20 lg:py-28 overflow-hidden transition-colors duration-250">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[700px] rounded-full bg-emerald-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Immediate Product Proof
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            One missed call. One automatic response.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From the second a call is missed to the moment your text arrives, completely automatic in under 2 seconds.
          </p>
        </div>

        {/* Behavioral Sequence Pipeline */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${
                activeStep === step.id
                  ?"bg-[#ecfdf5] border-emerald-500/50 shadow-md"
                  :"bg-slate-50/50 border-slate-200 hover:bg-slate-100/50 hover:border-slate-300"
              }`}
            >
              {/* Connector line on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {step.time}
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    Step 0{step.id}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-mono text-slate-700 border border-slate-200 truncate">
                  {step.snippet}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Flow Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-slate-500">
          <span className="text-slate-800">CALL</span>
          <span className="text-emerald-500">→</span>
          <span className="text-slate-800">MISSED CALL</span>
          <span className="text-emerald-500">→</span>
          <span className="text-emerald-600 font-bold">ADERA</span>
          <span className="text-emerald-500">→</span>
          <span className="text-slate-800">AUTOMATIC TEXT</span>
          <span className="text-emerald-500">→</span>
          <span className="text-emerald-600 font-semibold">CALLER REASSURED</span>
        </div>

      </div>
    </section>
  );
}
