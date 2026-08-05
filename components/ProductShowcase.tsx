export default function ProductShowcase() {
  return (
    <section className="bg-sage px-6 py-20">
      <div className="mx-auto flex max-w-5xl justify-center">
        <div className="w-full max-w-xs overflow-hidden rounded-[2.5rem] border-8 border-ink bg-white shadow-2xl">
          <div className="bg-green-deep px-5 pb-5 pt-6 text-cream">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Adera<span className="text-gold"> SMS</span>
            </p>
            <p className="mt-1 text-xs text-gold-soft">
              Active, auto reply protection enabled
            </p>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between rounded-2xl bg-green-bright px-4 py-4 text-white">
              <span className="text-sm font-medium">Auto reply is on</span>
              <span className="h-6 w-11 rounded-full bg-gold" />
            </div>
            <div className="rounded-xl bg-sage p-3 text-xs text-ink/80">
              Thank you, I got your call. I will get back to you soon.
            </div>
            <div className="space-y-1 text-xs text-ink/60">
              <div className="flex justify-between border-b border-sage py-1">
                <span>+251 91••• ••42</span>
                <span className="font-semibold text-green-mid">Sent</span>
              </div>
              <div className="flex justify-between py-1">
                <span>+251 92••• ••17</span>
                <span className="font-semibold text-green-mid">Sent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
