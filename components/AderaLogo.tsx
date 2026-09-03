import Image from"next/image";

export default function AderaLogo({
  className ="w-8 h-8",
  showText = false,
  variant ="mark",
}: {
  className?: string;
  showText?: boolean;
  variant?:"mark" |"badge";
}) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          variant ==="badge"
            ?"p-1.5 rounded-xl bg-white border border-slate-200 shadow-[0_4px_12px_rgba(16,185,129,0.08)] backdrop-blur-sm"
            :""
        }`}
      >
        <Image
          src="/aderasms-logo-transparent.png"
          alt="Adera SMS Logo"
          width={44}
          height={44}
          className={`${className} object-contain drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)]`}
          priority
        />
      </div>

      {showText && (
        <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
          Adera <span className="text-emerald-400">SMS</span>
        </span>
      )}
    </div>
  );
}
