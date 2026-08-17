export default function FeaturesBento() {
  return (
    <section id="features" className="relative bg-[#07130b] py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Features & Capabilities
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Everything you need to respond without thinking about it.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Built specifically for Android. Purposefully focused on doing one job exceptionally well.
          </p>
        </div>

        {/* Bento Grid Composition */}
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          
          {/* Feature 01: Large 2/3 Feature (Col span 7 or 8) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#0c2217] to-[#07150e] p-8 md:col-span-7 lg:col-span-8 shadow-xl transition-all duration-300 hover:border-emerald-500/40">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Feature 01
                </span>
                <span className="text-xs text-zinc-400">Core Engine</span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Automatic replies
              </h3>
              <p className="mt-3 text-base text-zinc-300 max-w-lg leading-relaxed">
                When you miss a call, Adera can send your response automatically.
              </p>
            </div>

            {/* Feature UI representation */}
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/50 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-3">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Auto Reply Status: Active
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                  Instant Trigger
                </span>
              </div>
              <div className="rounded-xl bg-[#091b12] p-3.5 border border-emerald-500/30 text-xs text-zinc-200">
                <span className="text-emerald-400 font-semibold block mb-1">Standard Outgoing Message:</span>
                &quot;Thank you for calling. I missed your call, but will get back to you shortly.&quot;
              </div>
            </div>
          </div>

          {/* Feature 02: 1/3 Feature (Col span 5 or 4) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0b1c14] to-[#07120c] p-8 md:col-span-5 lg:col-span-4 shadow-xl transition-all duration-300 hover:border-white/[0.15]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Feature 02
                </span>
                <span className="text-xs text-zinc-400">Customization</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                Your message. Your choice.
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Set the message callers receive when you can&apos;t answer.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/40 p-4 space-y-2 text-xs">
              <div className="text-zinc-400 font-medium">Quick Template Presets:</div>
              <div className="rounded-lg bg-white/[0.04] p-2 text-zinc-200 border border-white/[0.04] text-[11px]">
                • Professional / Client response
              </div>
              <div className="rounded-lg bg-white/[0.04] p-2 text-zinc-200 border border-white/[0.04] text-[11px]">
                • Personal / In a meeting
              </div>
              <div className="rounded-lg bg-white/[0.04] p-2 text-zinc-200 border border-white/[0.04] text-[11px]">
                • Custom wording of your choice
              </div>
            </div>
          </div>

          {/* Feature 03: 1/3 Feature */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0b1c14] to-[#07120c] p-8 md:col-span-5 lg:col-span-4 shadow-xl transition-all duration-300 hover:border-white/[0.15]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Feature 03
                </span>
                <span className="text-xs text-zinc-400">Efficiency</span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                Works quietly in the background
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Once configured, Adera is there when you need it without adding another step to every call.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/40 p-4 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white">Zero Battery Drain</p>
                <p className="text-[11px] text-zinc-400">Event-driven receiver</p>
              </div>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                Ultra-light
              </span>
            </div>
          </div>

          {/* Feature 04: Large 2/3 Feature */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#0c2217] to-[#07150e] p-8 md:col-span-7 lg:col-span-8 shadow-xl transition-all duration-300 hover:border-emerald-500/40">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Feature 04
                </span>
                <span className="text-xs text-zinc-400">Native Platform</span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Built around your phone
              </h3>
              <p className="mt-3 text-base text-zinc-300 max-w-lg leading-relaxed">
                Adera is designed for Android and the way you already handle calls.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  Multi-SIM Support
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">
                  Responds automatically using the SIM card that received the call.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Auto-Resume on Boot
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">
                  Restores active call monitoring whenever your phone restarts.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
