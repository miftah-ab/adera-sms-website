import Link from"next/link";

export default function TrustPrivacy() {
  const permissions = [
    {
      name:"READ_PHONE_STATE",
      purpose:"Detects when a phone call rings and ends unanswered.",
      local: true,
    },
    {
      name:"READ_CALL_LOG",
      purpose:"Identifies the calling number & timestamp to trigger the reply.",
      local: true,
    },
    {
      name:"SEND_SMS",
      purpose:"Delivers your configured auto-reply via your mobile network.",
      local: true,
    },
    {
      name:"RECEIVE_BOOT_COMPLETED",
      purpose:"Automatically resumes protection when your phone restarts.",
      local: true,
    },
    {
      name:"READ_CONTACTS (Optional)",
      purpose:"Shows caller contact names inside your local app activity log.",
      local: true,
    },
  ];

  return (
    <section id="privacy" className="relative bg-white py-24 lg:py-32 border-t border-slate-200 overflow-hidden transition-colors duration-250">
      {/* Glow accent */}
      <div className="absolute top-1/3 right-10 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.03] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Privacy & Trust
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Your phone. Your conversations. Your control.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Adera is engineered on an offline-first, local-processing architecture. Your call data and SMS content never leave your device.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">100% Local Processing</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Missed-call detection and SMS dispatch happen entirely on your phone&apos;s operating system. No call details are ever sent to remote servers.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">No Ads, No Selling Data</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              We do not sell user data, do not profile phone numbers, and do not integrate ad networks. Your activity log stays in your device storage.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Transparent Telemetry</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Standard non-personal crash analytics via Google Firebase are used strictly to fix bugs. Personal calls and text content are strictly excluded.
            </p>
          </div>

        </div>

        {/* Transparent Android Permissions Table */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Android Permissions Explained</h3>
              <p className="text-xs text-slate-500 mt-1">
                Every permission requested by Adera has a specific, verifiable purpose:
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-500 underline underline-offset-4"
              >
                Read Privacy Policy
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/terms"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-500 underline underline-offset-4"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="mt-6 divide-y divide-slate-200">
            {permissions.map((perm) => (
              <div key={perm.name} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <code className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">
                    {perm.name}
                  </code>
                </div>
                <p className="text-xs text-slate-600 flex-1 sm:px-6">
                  {perm.purpose}
                </p>
                <span className="self-start sm:self-auto text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Local Only
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
