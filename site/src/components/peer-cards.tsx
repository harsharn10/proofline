import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon } from "@/lib/dejargon";
import {
  LIFECYCLE_LABEL,
  METRIC_KIND_LABEL,
  formatMetricValue,
  leafLabel,
  lifecycleTone,
  reportedTitle,
  type PeerRef,
} from "@/data/types";

// "Competes with" cards: direct (same niche) peers land first, adjacent same-section peers
// after. One card = name, one truncated line, its headline reported figure — or lifecycle
// when nothing is reported (IA ruling §taxonomy).
export function PeerCards({ peers }: { peers: PeerRef[] }) {
  return (
    <div className="peercards">
      {peers.map((p) => (
        <Link key={p.slug} to="/n/$slug" params={{ slug: p.slug }} className="peercard">
          <span className="ph">
            <b className="pn">{p.symbol ?? p.name}</b>
            {p.metric ? (
              <span className="pm" title={reportedTitle(p.metric.as_of)}>
                {formatMetricValue(p.metric)} <small>{METRIC_KIND_LABEL[p.metric.kind]}</small>
                <Badge tone="warn">reported</Badge>
              </span>
            ) : (
              <Badge tone={lifecycleTone(p.lifecycle)}>{LIFECYCLE_LABEL[p.lifecycle]}</Badge>
            )}
          </span>
          <span className="ps">{dejargon(p.summary)}</span>
          <span className="pk">{p.direct ? "same niche" : "adjacent"} · {leafLabel(p.leaf)}</span>
        </Link>
      ))}
    </div>
  );
}
