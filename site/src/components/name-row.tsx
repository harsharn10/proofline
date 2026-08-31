import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { LIFECYCLE_LABEL, lifecycleTone, type DirectoryEntry } from "@/data/types";

// Directory row (Eregion edgerow): green mono ticker · name · one-line summary, with
// category (faint mono) + lifecycle badge on the right. A stub simply shows no score —
// no pending stamps (brief rules 1 and 4).
export function NameRow({ dossier }: { dossier: DirectoryEntry }) {
  return (
    <Link to="/n/$slug" params={{ slug: dossier.slug }} className="edgerow">
      <span className="tick">{dossier.symbol ?? dossier.name}</span>
      <span className="emain">
        <b>{dossier.name}</b> <span className="esum">— {dossier.summary}</span>
      </span>
      <span className="emeta">
        {dossier.derived.trending ? <Badge tone="warn">trending</Badge> : null}
        {dossier.derived.score !== null ? (
          <span className="font-mono text-xs text-fg">{dossier.derived.score}</span>
        ) : null}
        <span className="ecat">{dossier.category}</span>
        <Badge tone={lifecycleTone(dossier.lifecycle)}>{LIFECYCLE_LABEL[dossier.lifecycle]}</Badge>
      </span>
    </Link>
  );
}
