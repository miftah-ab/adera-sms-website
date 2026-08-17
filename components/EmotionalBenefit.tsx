export default function EmotionalBenefit() {
  return (
    <section className="relative bg-gradient-to-b from-[#07150e] via-[#050c08] to-[#050b08] py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden text-center">
      {/* Radiant glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-emerald-500/[0.08] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
          Peace of Mind
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          You don&apos;t have to answer every call immediately.
        </h2>

        <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-zinc-300 max-w-2xl mx-auto">
          Sometimes you just can&apos;t. Adera makes sure the caller isn&apos;t left wondering what happened.
        </p>

        <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md">
          <p className="text-sm sm:text-base italic text-emerald-300/90 font-medium">
            &quot;Adera is not trying to replace the phone call. It is protecting the moment between a missed call and your response.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
