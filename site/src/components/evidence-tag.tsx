import type { EvidenceClass } from "@/data/types";

// Shared with the structured findings/controls tables on the dossier and dependency
// pages. Renders identically to the `.ev` spans data/markdown.ts emits for research
// prose, so evidence reads the same everywhere it appears (see styles.css).
export function EvidenceTag({ evidenceClass, sources }: { evidenceClass: EvidenceClass; sources?: string[] }) {
  const ids = sources && sources.length > 0 ? sources.join(" ") : undefined;
  return (
    <span className={`ev ev-${evidenceClass}`} data-sources={ids}>
      {ids ? `${evidenceClass} · ${ids}` : evidenceClass}
    </span>
  );
}
