export default function UseCases() {
  const useCases = [
    {
      title:"Running a business",
      description:"Protect client inquiries and urgent requests while managing your day-to-day operations.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title:"Helping a customer",
      description:"Give undivided attention to the person right in front of you without ignoring callers.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title:"Working with your hands",
      description:"On a job site, in a workshop, or cooking when picking up the phone isn't practical.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title:"Driving",
      description:"Keep both hands on the wheel and stay safe while callers receive a quick status update.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title:"In a meeting",
      description:"Prevent interruptions during critical presentations or discussions without feeling guilty.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title:"Simply unavailable",
      description:"Protecting personal time, family dinners, or deep focus work without leaving callers stranded.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="use-cases" className="relative bg-white py-24 lg:py-32 border-t border-slate-200 overflow-hidden transition-colors duration-250">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Real-World Scenarios
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Useful whenever you can&apos;t pick up.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whatever has your attention, Adera can send the first response for you.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white hover:-translate-y-1 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-300 group-hover:bg-emerald-100 transition-colors">
                {uc.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 tracking-tight">
                {uc.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {uc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
