import ChecksumDisplay from "./ChecksumDisplay";

const steps = [
  "Tap the download button above to get the file.",
  "Open the downloaded file from your notifications or downloads folder.",
  "If asked, allow installing this one app from this source.",
  "Open Adera SMS and turn on auto reply.",
];

export default function InstallSteps() {
  return (
    <section className="bg-cream px-6 py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="mx-auto max-w-2xl relative z-10">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-extrabold text-ink sm:text-4xl tracking-tight">
          How to install
        </h2>
        <p className="mt-4 text-center text-ink/70 font-medium">
          Adera SMS is not on the Play Store yet. Installing it directly
          takes less than a minute.
        </p>
        <ol className="mt-10 space-y-4">
          {steps.map((step, i) => (
            <li 
              key={step} 
              className="group flex gap-5 rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-gold/20"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-bright text-sm font-bold text-white shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-ink/80 leading-relaxed mt-1">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ChecksumDisplay />
        </div>
      </div>
    </section>
  );
}
