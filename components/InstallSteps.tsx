import ChecksumDisplay from "./ChecksumDisplay";

const steps = [
  "Tap the download button above to get the file.",
  "Open the downloaded file from your notifications or downloads folder.",
  "If asked, allow installing this one app from this source.",
  "Open Adera SMS and turn on auto reply.",
];

export default function InstallSteps() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-ink sm:text-4xl">
          How to install
        </h2>
        <p className="mt-3 text-center text-ink/70">
          Adera SMS is not on the Play Store yet. Installing it directly
          takes less than a minute.
        </p>
        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-bright text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm text-ink/80">{step}</span>
            </li>
          ))}
        </ol>
        <ChecksumDisplay />
      </div>
    </section>
  );
}
