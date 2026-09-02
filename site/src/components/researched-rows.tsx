import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon } from "@/lib/dejargon";
import { LIFECYCLE_LABEL, lifecycleTone, riskTone, type DirectoryEntry } from "@/data/types";

// The product, up front (eregion entities index, stratum 1): every name a full research record
// backs, as a row with its why-line, score and risk. Renders nothing when there is none — a
// section whose only content is an empty state never renders (rule 1).
export function ResearchedRows({ entries }: { entries: DirectoryEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <section id="researched" className="catsec">
      <div className="sechead">
        <h2 className="t">Researched</h2>
        <span className="h">a full research record backs each of these</span>
      </div>
      <div>
        {entries.map((d) => {
          const { derived } = d;
          return (
            <Link key={d.slug} to="/n/$slug" params={{ slug: d.slug }} className="edgerow">
              <span className="erhead">
                <b className="tick">{d.symbol ?? d.name}</b>
                {d.symbol ? <span className="ername">{d.name}</span> : null}
                {d.tree ? <span className="erleaf">{d.tree.label}</span> : null}
                <Badge tone={lifecycleTone(d.lifecycle)}>{LIFECYCLE_LABEL[d.lifecycle]}</Badge>
                {derived.risk ? <Badge tone={riskTone(derived.risk)}>{derived.risk} risk</Badge> : null}
              </span>
              <span className="erscore">
                {derived.score !== null ? (
                  <>
                    <b>{derived.score}</b>/100
                    {derived.confidence !== null ? ` · ${derived.confidence}% confidence` : ""}
                    {derived.provisional ? " · provisional" : ""}
                  </>
                ) : (
                  "score withheld · confidence too low"
                )}
              </span>
              <span className="erwhy">{dejargon(d.summary)}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
