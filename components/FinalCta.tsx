export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36 text-center text-slate-900 border-t border-slate-200 transition-colors duration-250">
      {/* Radiant glow backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-emerald-500/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Miss the call. <br />
          <span className="text-emerald-600">
            Keep the connection.
          </span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-slate-700 font-normal max-w-xl mx-auto leading-relaxed">
          Adera gives callers a response while you&apos;re unavailable.
        </p>

        <div className="mt-10 flex flex-col items-center">
          <a
            href="/downloads/AderaSMS.apk"
            download="AderaSMS.apk"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-10 py-5 text-lg font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Adera SMS</span>
          </a>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Free Android Application • 100% Offline Processing
          </p>
        </div>
      </div>
    </section>
  );
}
