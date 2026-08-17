export default function ProblemSection() {
  return (
    <section className="relative bg-[#050b08] py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            The Reality of Missed Calls
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            A missed call shouldn&apos;t mean a lost customer.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            When you&apos;re busy, driving, helping someone else, or simply can&apos;t answer, the caller is left waiting. Adera gives them an immediate response.
          </p>
        </div>

        {/* Realistic Contrast Storytelling */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          
          {/* Card 1: Without Adera */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-rose-500/20 bg-gradient-to-b from-[#190d10] to-[#0d0708] p-7 sm:p-9 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-rose-500/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-rose-300">Without Adera</span>
                </div>
                <span className="text-xs font-semibold text-rose-400/80 bg-rose-500/10 px-2.5 py-1 rounded-full">
                  Silence & Uncertainty
                </span>
              </div>

              {/* Simulation of the missed opportunity */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-black/50 p-4 border border-white/[0.04]">
                  <p className="text-xs font-semibold text-zinc-400">Caller&apos;s Perspective:</p>
                  <p className="mt-1 text-sm text-zinc-200">
                    &quot;They didn&apos;t answer. I guess they&apos;re closed or not taking new clients. Let me search for someone else.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 p-3 text-xs text-rose-300/80">
                  <svg className="w-4 h-4 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No acknowledgment. Higher chance of lost opportunities.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/10 flex items-center justify-between text-xs text-zinc-400">
              <span>Outcome</span>
              <span className="font-semibold text-rose-400">Unanswered friction</span>
            </div>
          </div>

          {/* Card 2: With Adera */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#0a2317] to-[#06140d] p-7 sm:p-9 shadow-2xl glow-brand">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-emerald-500/15">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-emerald-300">With Adera SMS</span>
                </div>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Instant Reassurance
                </span>
              </div>

              {/* Simulation of the Adera experience */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-black/60 p-4 border border-emerald-500/20 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold mb-1">
                    <span>Instant SMS Received (2s after call)</span>
                    <span className="text-[10px] text-zinc-400 font-normal">Delivered</span>
                  </div>
                  <p className="text-sm text-zinc-100 italic">
                    &quot;Hi, I missed your call while assisting a client. I have your number and will call you right back!&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 p-3 text-xs text-emerald-300">
                  <svg className="w-4 h-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Caller feels valued and waits for your callback with peace of mind.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs text-zinc-400">
              <span>Outcome</span>
              <span className="font-semibold text-emerald-300">Professional connection preserved</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
