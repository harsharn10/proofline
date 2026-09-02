import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon } from "@/lib/dejargon";
import {
  LIFECYCLE_LABEL,
  METRIC_KIND_LABEL,
  formatMetricValue,
  lifecycleTone,
  reportedTitle,
  type PeerRef,
} from "@/data/types";

// "Competes with" cards on a full record: direct (same leaf) peers first, adjacent same-section
// peers after. One card = name, one truncated line, its headline reported figure or lifecycle, and
// the peer's product label. A peer with no research and nothing reported is dashed and dimmed.
export function PeerCards({ peers }: { peers: PeerRef[] }) {
  return (
    <div className="peercards">
      {peers.map((p) => {
        const quiet = p.role === "observe" || (p.coverage !== "full" && !p.metric);
        return (
          <Link key={p.slug} to="/n/$slug" params={{ slug: p.slug }} className={quiet ? "peercard quiet" : "peercard"}>
            <span className="ph">
              <b className="pn">{p.symbol ?? p.name}</b>
              {p.metric ? (
                <span className="pm" title={reportedTitle(p.metric.as_of)}>
                  {formatMetricValue(p.metric)} <small>{METRIC_KIND_LABEL[p.metric.kind]}</small>
                </span>
              ) : (
                <Badge tone={lifecycleTone(p.lifecycle)}>{LIFECYCLE_LABEL[p.lifecycle]}</Badge>
              )}
            </span>
            <span className="ps">{dejargon(p.summary)}</span>
            <span className="pk">{p.leafLabel}</span>
          </Link>
        );
      })}
    </div>
  );
}
