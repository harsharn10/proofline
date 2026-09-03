import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/icon";
import { dejargon } from "@/lib/dejargon";
import { formatDate } from "@/lib/utils";

export type FeedStreamItem = {
  id: string;
  kind: "icarus" | "post" | "onchain";
  date: string;
  name: { slug: string; symbol: string | null; name: string };
  who: string;
  title: string;
  body: string;
  sourceUrl: string | null;
};

export function readerCopy(value: string): string {
  return dejargon(value)
    .replace(/\bProofline\b/g, "Icarus")
    .replace(/\bdossier\b/gi, "research")
    .replace(/\bresearch packets?\b/gi, "research")
    .replace(/\bpackets?\b/gi, "research")
    .replace(/\bcensus\b/gi, "registry")
    .replace(/\bcoverage\b/gi, "review")
    .replace(/\bInitial stub opened\b/g, "First profile opened")
    .replace(/\bstub\b/gi, "short profile")
    .replace(/\bprovisional\b/gi, "awaiting second review")
    .replace(/\bderived\b/gi, "calculated")
    .replace(/\bcohort\b/gi, "section")
    .replace(/\bqualifying\b/gi, "listing");
}

export function FeedStream({ items }: { items: FeedStreamItem[] }) {
  return (
    <ol className="m-0 list-none rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] px-3.5 py-1">
      {items.map((item) => (
        <li
          key={item.id}
          className="grid grid-cols-1 gap-1 border-t-[0.5px] border-[var(--line-soft)] py-3 first:border-0 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-3"
        >
          <time className="pt-0.5 text-[11px] text-[var(--t3)]">
            {formatDate(item.date.slice(0, 10))}
          </time>
          <div>
            <span className="mr-1.5 inline-flex items-center gap-1 rounded-full bg-[var(--s1)] px-2 py-0.5 text-[11px] text-[var(--t2)]">
              <Icon name={item.kind === "icarus" ? "feather" : "msg"} />
              {item.who}
            </span>
            <b className="text-[12.5px] font-medium">{readerCopy(item.title)}</b>
            <p className="my-0.5 max-w-[84ch] text-[12.5px] text-[var(--t2)]">
              {readerCopy(item.body)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Link
                to="/n/$slug"
                params={{ slug: item.name.slug }}
                className="rounded-full bg-[var(--s1)] px-2 py-0.5 text-[11px] text-[var(--acc)]"
              >
                {item.name.symbol ?? item.name.name}
              </Link>
              {item.kind === "icarus" ? (
                <Link
                  to="/n/$slug"
                  params={{ slug: item.name.slug }}
                  search={{ tab: "commentary" }}
                  className="rounded-full bg-[var(--s1)] px-2 py-0.5 text-[11px] text-[var(--acc)]"
                >
                  Commentary
                </Link>
              ) : null}
              {item.sourceUrl ? (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--s1)] px-2 py-0.5 text-[11px] text-[var(--acc)]"
                >
                  Source <Icon name="ext" />
                </a>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
