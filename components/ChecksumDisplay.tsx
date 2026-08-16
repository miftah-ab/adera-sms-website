"use client";

import { useEffect, useState } from "react";

export default function ChecksumDisplay() {
  const [checksum, setChecksum] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/checksum')
      .then(res => res.json())
      .then(data => {
        if (data.checksum) setChecksum(data.checksum);
      })
      .catch(console.error);
  }, []);

  if (!checksum) return null;

  return (
    <div className="mt-8 rounded-xl bg-white p-6 text-sm text-ink/80 text-center shadow-sm">
      <p className="font-semibold mb-1 text-ink">Verify your download (Optional)</p>
      <p className="mb-3">Advanced users can verify the file hasn't been altered in transit by checking its SHA-256 hash:</p>
      <code className="bg-cream px-3 py-2 rounded text-xs break-all border border-gold/20 text-ink block">{checksum}</code>
    </div>
  );
}
