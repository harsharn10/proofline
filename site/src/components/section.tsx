import type { ReactNode } from "react";

// Shared section shell used by the dossier and dependency pages — same eyebrow-style
// heading treatment everywhere a page breaks its content into named blocks.
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-fg">{children}</div>
    </section>
  );
}
