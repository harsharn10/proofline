import { useState } from "react";
import { shortAddress } from "@/lib/dejargon";

// Middle-truncated mono address with a tiny mono copy button — inline, no card.
export function CopyAddress({ address, href }: { address: string; href?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  }

  const short = shortAddress(address);

  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="addr">
          {short}
        </a>
      ) : (
        <span className="addr">{short}</span>
      )}
      <button type="button" className="copybtn" onClick={copy} aria-label={`Copy address ${address}`}>
        {copied ? "copied" : "copy"}
      </button>
    </>
  );
}
