export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-ink">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink/60">Last updated 2026</p>

      <div className="mt-8 space-y-6 text-ink/80">
        <p>
          Adera SMS is built to work entirely on your phone. This policy
          explains exactly what that means.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-ink">
            What stays on your device
          </h2>
          <p className="mt-2">
            Your call log, the phone numbers you receive calls from, and the
            content of the messages sent are never uploaded to any server.
            They are stored only in the app on your phone, and they stay
            there unless you delete them yourself.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">
            What we do collect
          </h2>
          <p className="mt-2">
            If you choose to enable anonymous usage statistics in Settings,
            we receive general information such as whether the app was
            opened and whether a reply was sent successfully. This never
            includes phone numbers, message content, or any call data. This
            setting is off unless you turn it on, and you can turn it off
            again at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">Permissions</h2>
          <p className="mt-2">
            Adera SMS requests access to your call log and to send text
            messages, because that access is required for the app to
            function. Neither permission is used for anything beyond
            detecting a missed call and sending the automatic reply you have
            written.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p className="mt-2">
            If you have any question about this policy, reach out through
            the contact details listed on our download page.
          </p>
        </section>
      </div>
    </main>
  );
}
