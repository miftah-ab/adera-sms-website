"use client";

import { useEffect, useState } from "react";

const VERSION_JSON_URL =
  "https://raw.githubusercontent.com/miftah-ab/adera-sms/main/version.json";

export default function ChecksumDisplay() {
  const [checksum, setChecksum] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(VERSION_JSON_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.sha256) setChecksum(data.sha256);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const copyToClipboard = () => {
    if (!checksum) return;
    navigator.clipboard.writeText(checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) return null;

  if (!checksum) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>SHA-256 checksum available after next release</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-600 transition-colors focus:outline-none"
      >
        <svg
          className="w-4 h-4 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span>
          Advanced: Verify SHA-256 Checksum ({expanded ? "Hide" : "Show"})
        </span>
      </button>

      {expanded && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 max-w-xl mx-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Official SHA-256 Hash
            </span>
            <button
              type="button"
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded-full transition-colors"
            >
              {copied ? (
                <>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Hash
                </>
              )}
            </button>
          </div>
          <p className="text-[10px] text-slate-500 mb-2 text-left">
            Use this to verify the downloaded APK matches the official release. Compute with:{" "}
            <code className="font-mono bg-slate-100 px-1 rounded">sha256sum AderaSMS.apk</code>
          </p>
          <code className="block bg-white border border-slate-200 p-2.5 rounded-xl text-[11px] font-mono text-slate-700 break-all text-left select-all">
            {checksum}
          </code>
        </div>
      )}
    </div>
  );
}
