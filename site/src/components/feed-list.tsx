import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { dejargon, hostLabel } from "@/lib/dejargon";
import { FEED_LABEL, xProfileUrl, type FeedItem, type Tone } from "@/data/types";

function kindTone(kind: FeedItem["kind"]): Tone {
  if (kind === "company") return "live";
  if (kind === "onchain") return "default";
  if (kind === "risk") return "risk";
  return "muted";
}

// `name` is set on the cross-name feed page (it links each item to its dossier) and omitted on a
// dossier's own feed. A feed item is what an account posted, not a verified fact — /methodology
// says so once; there is no per-item badge.
export type FeedListItem = { item: FeedItem; name?: { slug: string; symbol: string | null; name: string } };

export function FeedList({ items }: { items: FeedListItem[] }) {
  if (items.length === 0) return null;

  return (
    <ol className="list-none p-0 m-0">
      {items.map(({ name, item }) => {
        const receiptHref = item.sourceUrl ?? (item.account ? xProfileUrl(item.account) : null);
        return (
          <li key={`${name?.slug ?? "item"}-${item.id}`} className="feedrow">
            <div className="fh">
              <time className="fd">{item.date}</time>
              <Badge tone={kindTone(item.kind)}>{FEED_LABEL[item.kind]}</Badge>
              {name ? (
                <Link to="/n/$slug" params={{ slug: name.slug }} className="ftk">
                  {name.symbol ?? name.name}
                </Link>
              ) : null}
              {receiptHref ? (
                <a className="receipt" href={receiptHref} target="_blank" rel="noreferrer">
                  {item.account ?? hostLabel(receiptHref)}
                </a>
              ) : null}
            </div>
            <h3 className="ft">{dejargon(item.title)}</h3>
            <p className="fb">{dejargon(item.body)}</p>
          </li>
        );
      })}
    </ol>
  );
}
