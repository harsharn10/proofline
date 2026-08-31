import type { ReactNode } from "react";
import type { Tone } from "@/data/types";

// Eregion-grammar badge: tiny bordered mono, lowercase. Tones map to the semantic
// colors — live=green (mainnet/official), warn=amber (claimed/reported/trending),
// risk=red, muted=faint.
const TONE_CLASS: Record<Tone, string> = {
  default: "badge",
  live: "badge badge-live",
  warn: "badge badge-warn",
  risk: "badge badge-risk",
  muted: "badge badge-na",
};

export function Badge({
  className,
  tone = "default",
  children,
}: {
  className?: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return <span className={className ? `${TONE_CLASS[tone]} ${className}` : TONE_CLASS[tone]}>{children}</span>;
}
