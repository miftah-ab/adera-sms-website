export default function HowItWorks() {
  const steps = [
    {
      number:"01",
      title:"Miss the call",
      body:"You can't answer. That's okay.",
      detail:"Driving, in a meeting, or occupied with family, your phone rings and goes unanswered without creating stress.",
      badge:"Real Life",
      color:"from-amber-500/10 to-transparent",
      borderColor:"border-amber-200",
    },
    {
      number:"02",
      title:"Adera detects it",
      body:"Adera recognizes the missed call and handles the next step.",
      detail:"Operating 100% locally in the background, Adera reads the missed call event and matches your active response preference.",
      badge:"Local Engine",
      color:"from-emerald-500/10 to-transparent",
      borderColor:"border-emerald-200",
    },
    {
      number:"03",
      title:"Your message is sent",
      body:"The caller receives your chosen response.",
      detail:"Your customized text delivers immediately via your mobile network, reassuring the caller that their call wasn't forgotten.",
      badge:"Immediate Reassurance",
      color:"from-emerald-400/10 to-transparent",
      borderColor:"border-emerald-200",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-white py-24 lg:py-32 border-t border-slate-200 overflow-hidden transition-colors duration-250">
      {/* Subtle radial light */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[600px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Simple. Automatic. Done.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No complicated setup. No cloud accounts. Set it once and let Adera protect your calls in the background.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group relative flex flex-col justify-between rounded-3xl border ${step.borderColor} bg-gradient-to-b ${step.color} bg-slate-50/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md `}
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-emerald-600 group-hover:text-emerald-500 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {step.badge}
                  </span>
                </div>

                {/* Step Title & Core Copy */}
                <h3 className="mt-6 text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-base font-semibold text-emerald-700">
                  {step.body}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.detail}
                </p>
              </div>

              {/* Visual Micro-Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Zero manual interaction required</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
