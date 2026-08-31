import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { FEED_LABEL, type FeedKind } from "@/data/types";
import type { NameRecord } from "@/data/types";

function kindTone(kind: FeedKind): "default" | "live" | "warn" | "risk" | "muted" {
  if (kind === "company") return "live";
  if (kind === "onchain") return "default";
  if (kind === "risk") return "risk";
  return "muted";
}

export function FeedList({
  items,
  showName = false,
}: {
  items: { name: NameRecord; item: NameRecord["feed"][number] }[];
  showName?: boolean;
}) {
  if (items.length === 0) {
    return (
      <p className="border border-dashed border-border px-4 py-8 text-sm text-muted">
        No feed items yet. When the company posts or CT prints a name, it lands here.
      </p>
    );
  }

  return (
    <ol className="divide-y divide-border border border-border bg-surface">
      {items.map(({ name, item }) => (
        <li key={`${name.slug}-${item.id}`} className="px-4 py-4 sm:px-5">
          <div className="flex flex-wrap items-center gap-2">
            <time className="font-mono text-[11px] tabular-nums text-subtle">{item.date}</time>
            <Badge tone={kindTone(item.kind)}>{FEED_LABEL[item.kind]}</Badge>
            {showName ? (
              <Link
                to="/n/$slug"
                params={{ slug: name.slug }}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent hover:underline"
              >
                {name.ticker}
              </Link>
            ) : null}
          </div>
          <h3 className="mt-2 text-sm font-medium text-fg">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
          {item.source ? (
            item.sourceUrl ? (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block font-mono text-[11px] text-subtle hover:text-accent"
              >
                {item.source}
              </a>
            ) : (
              <p className="mt-2 font-mono text-[11px] text-subtle">{item.source}</p>
            )
          ) : null}
        </li>
      ))}
    </ol>
  );
}
