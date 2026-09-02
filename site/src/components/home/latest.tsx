import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/ui/icon";
import type { LatestIcarusItem } from "@/data/types";
import { dejargon } from "@/lib/dejargon";
import { formatDate } from "@/lib/utils";

export function Latest({ items, telegramUrl }: { items: LatestIcarusItem[]; telegramUrl: string }) {
  return (
    <div className="rounded-xl border-[0.5px] border-[var(--line)] bg-[var(--s2)] px-3.5 py-1">
      <ol className="m-0 list-none p-0">
        {items.map((item, index) => (
          <li
            key={`${item.kind}-${item.slug}-${item.date}-${index}`}
            className="grid grid-cols-1 gap-1 border-t-[0.5px] border-[var(--line-soft)] py-2.5 first:border-0 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-3"
          >
            <time className="pt-0.5 text-[11px] text-[var(--t3)]">
              {formatDate(item.date.slice(0, 10))}
            </time>
            <div>
              <span className="mr-1.5 inline-flex items-center gap-1 rounded-full bg-[var(--s1)] px-2 py-0.5 text-[11px] text-[var(--t2)]">
                <Icon name={item.kind === "icarus" ? "feather" : "msg"} />
                {item.who}
              </span>
              <b className="text-[12.5px] font-medium">{dejargon(item.title)}</b>
              <p className="my-0.5 max-w-[84ch] text-[12.5px] text-[var(--t2)]">
                {dejargon(item.body)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link
                  to="/n/$slug"
                  params={{ slug: item.slug }}
                  className="rounded-full bg-[var(--s1)] px-2 py-0.5 text-[11px] text-[var(--acc)]"
                >
                  Name page
                </Link>
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
      {items.length === 0 ? (
        <p className="py-2 text-xs italic text-[var(--t3)]">No updates yet.</p>
      ) : null}
      <div className="flex flex-wrap gap-3 border-t-[0.5px] border-[var(--line-soft)] py-2 text-[11.5px] text-[var(--acc)]">
        <Link to="/feed">Full feed →</Link>
        {telegramUrl !== "TODO" ? (
          <a href={telegramUrl} target="_blank" rel="noreferrer">
            Get it on Telegram →
          </a>
        ) : null}
      </div>
    </div>
  );
}
