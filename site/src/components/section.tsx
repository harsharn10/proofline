import type { ReactNode } from "react";

// Shared section shell — Eregion sechead: sentence-case title left, faint mono hint right.
export function Section({ title, hint, children }: { title: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <section>
      <div className="sechead">
        <h2 className="t">{title}</h2>
        {hint ? <span className="h">{hint}</span> : null}
      </div>
      {children}
    </section>
  );
}
