import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { explorerTokenUrl } from "@/data/names";

export function CopyAddress({ address, label }: { address: string; label?: string }) {
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

  const short = `${address.slice(0, 6)}…${address.slice(-4)}`;

  return (
    <div className="flex min-w-0 items-center gap-2 rounded-sm border border-border bg-surface px-3 py-2">
      <div className="min-w-0 flex-1">
        {label ? <p className="text-[11px] text-muted">{label}</p> : null}
        <a
          href={explorerTokenUrl(address)}
          target="_blank"
          rel="noreferrer"
          className="block truncate font-mono text-xs text-accent hover:underline"
        >
          {short}
        </a>
      </div>
      <Button variant="ghost" size="icon" className="size-9 shrink-0" onClick={copy} aria-label="Copy address">
        {copied ? <Check className="size-4 text-live" /> : <Copy className="size-4 text-muted" />}
      </Button>
    </div>
  );
}
