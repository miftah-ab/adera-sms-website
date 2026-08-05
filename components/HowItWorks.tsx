const steps = [
  {
    title: "Turn it on",
    body: "Open the app and switch auto reply on. That is the entire setup.",
  },
  {
    title: "Miss a call",
    body: "Life happens. Adera SMS notices the moment a call goes unanswered.",
  },
  {
    title: "They get a reply",
    body: "A message goes out right away, written the way you want it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-ink sm:text-4xl">
          Three steps, once
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-green-deep/10 bg-white p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-sm font-bold text-green-mid">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
