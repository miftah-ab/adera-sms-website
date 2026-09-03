export default function ProblemSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden transition-colors duration-250">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            The Reality of Missed Calls
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            A missed call shouldn&apos;t mean a lost customer.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            When you&apos;re busy, driving, helping someone else, or simply can&apos;t answer, the caller is left waiting. Adera gives them an immediate response.
          </p>
        </div>

        {/* Realistic Contrast Storytelling */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Card 1: Without Adera */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-rose-200 bg-gradient-to-b from-slate-50 to-white p-7 sm:p-9 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-rose-700">Without Adera</span>
                </div>
                <span className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full">
                  Silence & Uncertainty
                </span>
              </div>

              {/* Simulation of the missed opportunity */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white p-4 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500">Caller&apos;s Perspective:</p>
                  <p className="mt-1 text-sm text-slate-800">
                    &quot;They didn&apos;t answer. I guess they&apos;re closed or not taking new clients. Let me search for someone else.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 p-3 text-xs text-rose-700">
                  <svg className="w-4 h-4 shrink-0 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No acknowledgment. Higher chance of lost opportunities.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Outcome</span>
              <span className="font-semibold text-rose-600">Unanswered friction</span>
            </div>
          </div>

          {/* Card 2: With Adera */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-emerald-300 bg-gradient-to-b from-[#ecfdf5] to-[#f8fafc] p-7 sm:p-9 shadow-md glow-brand">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-emerald-800">With Adera SMS</span>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300">
                  Instant Reassurance
                </span>
              </div>

              {/* Simulation of the Adera experience */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white p-4 border border-emerald-300 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-emerald-800 font-semibold mb-1">
                    <span>Instant SMS Received (2s after call)</span>
                    <span className="text-[10px] text-slate-500 font-normal">Delivered</span>
                  </div>
                  <p className="text-sm text-slate-800 italic">
                    &quot;Hi, I missed your call while assisting a client. I have your number and will call you right back!&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 p-3 text-xs text-emerald-800">
                  <svg className="w-4 h-4 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Caller feels valued and waits for your callback with peace of mind.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Outcome</span>
              <span className="font-semibold text-emerald-700">Professional connection preserved</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
