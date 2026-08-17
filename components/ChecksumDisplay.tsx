"use client";

import { useEffect, useState } from "react";

export default function ChecksumDisplay() {
  const [checksum, setChecksum] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch("/api/checksum")
      .then((res) => res.json())
      .then((data) => {
        if (data.checksum) setChecksum(data.checksum);
      })
      .catch(() => {
        // Fallback SHA-256 for offline or static environments if API not reachable
        setChecksum(null);
      });
  }, []);

  const copyToClipboard = () => {
    if (!checksum) return;
    navigator.clipboard.writeText(checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-emerald-400 transition-colors focus:outline-none"
      >
        <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Advanced: Verify SHA-256 Checksum ({expanded ? "Hide" : "Show"})</span>
      </button>

      {expanded && checksum && (
        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/60 p-4 max-w-xl mx-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-semibold text-zinc-400">Official SHA-256 Hash:</span>
            <button
              type="button"
              onClick={copyToClipboard}
              className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded transition-colors"
            >
              {copied ? "Copied!" : "Copy Hash"}
            </button>
          </div>
          <code className="block bg-[#050b08] p-2.5 rounded-lg text-[11px] font-mono text-zinc-300 break-all border border-white/[0.05] text-left select-all">
            {checksum}
          </code>
        </div>
      )}
    </div>
  );
}
