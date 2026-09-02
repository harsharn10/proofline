import { EVIDENCE_LABEL, type EvidenceClass } from "@/data/types";

// Evidence class in reader words (defined on /methodology) plus source ids as anchors into the
// ledger on the same page. Used by the dependency card's controls table.
export function EvidenceTag({ evidenceClass, sources }: { evidenceClass: EvidenceClass; sources: string[] }) {
  return (
    <span className="kd">
      {EVIDENCE_LABEL[evidenceClass]}
      {sources.map((id) => (
        <span key={id}>
          {" "}
          <a href={`#${id}`} className="sref">
            {id}
          </a>
        </span>
      ))}
    </span>
  );
}
