import type { ReactNode } from "react";
import type { Tone } from "@/data/types";

export type BadgeTone = Tone | "ok" | "ctl";

export type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
};

const toneClass: Record<BadgeTone, string> = {
  default: "badge",
  live: "badge badge-live",
  muted: "badge badge-na",
  risk: "badge badge-risk",
  ok: "ui-badge ui-badge-ok",
  warn: "ui-badge ui-badge-warn",
  ctl: "ui-badge ui-badge-ctl",
};

export function Badge({ tone = "default", className, children }: BadgeProps) {
  return <span className={`${toneClass[tone]}${className ? ` ${className}` : ""}`}>{children}</span>;
}
