import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-deep px-6 py-8 text-center text-sm text-gold-soft border-t border-white/5 relative z-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/aderasms-logo.png" alt="Adera SMS Logo" width={24} height={24} className="opacity-80" />
          <span className="font-medium">Adera SMS, version 1.0.1</span>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-gold">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-gold">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
