import Link from "next/link";

export default function TrustPrivacy() {
  return (
    <section className="bg-sage px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-green-deep sm:text-4xl">
          Your calls stay yours
        </h2>
        <p className="mt-4 text-lg text-ink/70">
          Adera SMS works entirely on your device. Nothing about your calls
          or messages is uploaded, stored on a server, or shared with anyone.
          Ever.
        </p>
        <Link
          href="/privacy"
          className="mt-6 inline-block text-sm font-semibold text-green-mid underline underline-offset-4"
        >
          Read the full Privacy Policy
        </Link>
      </div>
    </section>
  );
}
