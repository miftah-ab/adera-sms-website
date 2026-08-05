export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-ink">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-ink/60">Last updated 2026</p>

      <div className="mt-8 space-y-6 text-ink/80">
        <section>
          <h2 className="text-lg font-semibold text-ink">Using the app</h2>
          <p className="mt-2">
            Adera SMS is provided to help you automatically reply to missed
            calls. You are responsible for the content of the messages you
            set up within the app, and for making sure your use of automatic
            replies follows any rules that apply to you locally.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">No guarantee</h2>
          <p className="mt-2">
            The app depends on your phone, your signal, and your SMS
            balance. We cannot guarantee that every message will send
            successfully in every situation, and the app is provided as is,
            without warranty of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">Changes</h2>
          <p className="mt-2">
            These terms may be updated over time as the app grows. Continuing
            to use the app after an update means you accept the current
            version of these terms.
          </p>
        </section>
      </div>
    </main>
  );
}
