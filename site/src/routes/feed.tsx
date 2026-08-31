import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FeedList } from "@/components/feed-list";
import { getFeed } from "@/data/content-server";
import { FEED_LABEL, type FeedKind } from "@/data/types";

export const Route = createFileRoute("/feed")({
  loader: () => getFeed(),
  component: FeedPage,
});

const KINDS: FeedKind[] = ["company", "ct", "onchain", "risk"];

// The full cross-name firehose home used to dump (IA brief §Pages 3): every item, newest
// first, filterable by kind. Home keeps only the newest 5 and links here.
function FeedPage() {
  const { items } = Route.useLoaderData();
  const [kind, setKind] = useState<FeedKind | "all">("all");
  const filtered = kind === "all" ? items : items.filter((x) => x.item.kind === kind);

  return (
    <main className="wrap narrow pb-10">
      <section className="hero">
        <p className="eyebrow">Feed</p>
        <h1>Everything posted, name by name.</h1>
        <p className="desc">
          Project posts, commentary, on-chain notes and risk flags across every name on file —
          newest first. Open a name for its own feed.
        </p>
      </section>

      <div className="chips">
        <button type="button" className={kind === "all" ? "on" : undefined} onClick={() => setKind("all")}>
          All · {items.length}
        </button>
        {KINDS.map((k) => {
          const count = items.filter((x) => x.item.kind === k).length;
          if (count === 0) return null;
          return (
            <button key={k} type="button" className={kind === k ? "on" : undefined} onClick={() => setKind(k)}>
              {FEED_LABEL[k]} · {count}
            </button>
          );
        })}
      </div>

      <div className="mt-2">
        {filtered.length === 0 ? (
          <p className="honest mt-4">Nothing under this filter yet.</p>
        ) : (
          <FeedList items={filtered} />
        )}
      </div>
    </main>
  );
}
