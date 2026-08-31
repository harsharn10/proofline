import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "default",
  children,
}: {
  className?: string;
  tone?: "default" | "live" | "warn" | "risk" | "muted";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-xs px-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em]",
        tone === "default" && "bg-raised text-accent",
        tone === "live" && "bg-raised text-live",
        tone === "warn" && "bg-raised text-warn",
        tone === "risk" && "bg-raised text-risk",
        tone === "muted" && "bg-raised text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
