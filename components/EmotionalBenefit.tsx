export default function EmotionalBenefit() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white py-24 lg:py-32 border-t border-slate-200 overflow-hidden text-center transition-colors duration-250">
      {/* Radiant glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-emerald-500/[0.03] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <span className="inline-block rounded-full bg-amber-50 border border-amber-300 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
          Peace of Mind
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          You don&apos;t have to answer every call immediately.
        </h2>

        <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-slate-700 max-w-2xl mx-auto">
          Sometimes you just can&apos;t. Adera makes sure the caller isn&apos;t left wondering what happened.
        </p>

        <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-slate-50/50 p-6 backdrop-blur-md">
          <p className="text-sm sm:text-base italic text-emerald-700 font-medium">
            &quot;Adera is not trying to replace the phone call. It is protecting the moment between a missed call and your response.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
