import { Link, createFileRoute } from "@tanstack/react-router";
import { FeedStream, type FeedStreamItem } from "@/components/feed-stream";
import { getChangelog, getFeed } from "@/data/content-server";

export const Route = createFileRoute("/feed")({
  validateSearch: (search: Record<string, unknown>): { kind?: Filter; name?: string } => ({
    ...(FILTERS.some((filter) => filter.value === search.kind) && search.kind !== "all"
      ? { kind: search.kind as Filter }
      : {}),
    ...(typeof search.name === "string" && search.name.trim() ? { name: search.name } : {}),
  }),
  loader: async () => {
    const [feed, changes] = await Promise.all([getFeed(), getChangelog()]);
    return { feed: feed.items, changes: changes.changelog, names: changes.names };
  },
  head: () => ({
    meta: [
      { title: "Latest from Icarus" },
      { name: "description", content: "Research updates, project posts and on-chain activity from Icarus." },
    ],
  }),
  component: FeedPage,
});

type Filter = "all" | "icarus" | "posts" | "onchain";
const FILTERS: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All" },
  { value: "icarus", label: "Icarus updates" },
  { value: "posts", label: "Posts" },
  { value: "onchain", label: "On-chain" },
];

// The full cross-name firehose home used to dump (IA brief §Pages 3): every item, newest
// first, filterable by kind. Home keeps only the newest 5 and links here.
function FeedPage() {
  const { feed, changes, names } = Route.useLoaderData();
  const { kind = "all", name } = Route.useSearch();
  const namesBySlug = new Map(names.map((entry) => [entry.slug, entry]));
  const items: FeedStreamItem[] = [
    ...changes.flatMap((entry) => {
      const itemName = namesBySlug.get(entry.slug);
      return itemName
        ? [{
            id: `icarus-${entry.slug}-${entry.date}-${entry.title}`,
            kind: "icarus" as const,
            date: entry.date,
            name: itemName,
            who: "Icarus",
            title: entry.title,
            body: entry.detail,
            sourceUrl: null,
          }]
        : [];
    }),
    ...feed.map(({ name: itemName, item }) => ({
      id: `post-${itemName.slug}-${item.id}`,
      kind: item.kind === "onchain" ? "onchain" as const : "post" as const,
      date: item.date,
      name: itemName,
      who: item.account ?? (item.kind === "onchain" ? "On-chain" : (itemName.symbol ?? itemName.name)),
      title: item.title,
      body: item.body,
      sourceUrl: item.sourceUrl ?? null,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
  const matchesKind = (item: FeedStreamItem, filter: Filter) =>
    filter === "all" ||
    (filter === "icarus" && item.kind === "icarus") ||
    (filter === "posts" && item.kind === "post") ||
    (filter === "onchain" && item.kind === "onchain");
  const filtered = items.filter((item) => matchesKind(item, kind) && (!name || item.name.slug === name));
  const selectedName = name ? namesBySlug.get(name) : null;

  return (
    <main className="wrap narrow pb-10">
      <section className="hero">
        <p className="eyebrow">Feed</p>
        <h1>Latest from Icarus</h1>
        <p className="desc">
          Icarus updates, project posts and on-chain activity across every name on file, newest first.
        </p>
      </section>

      <div className="chips">
        {FILTERS.map((filter) => (
          <Link
            key={filter.value}
            to="/feed"
            search={{ ...(filter.value === "all" ? {} : { kind: filter.value }), ...(name ? { name } : {}) }}
            className={kind === filter.value ? "on" : undefined}
          >
            {filter.label} · {items.filter((item) => matchesKind(item, filter.value)).length}
          </Link>
        ))}
      </div>

      {name ? (
        <div className="mt-2 flex items-center gap-2 text-xs text-[var(--t2)]">
          <span>Showing {selectedName?.name ?? name}</span>
          <Link to="/feed" search={{ ...(kind === "all" ? {} : { kind }) }} className="rounded-full bg-[var(--s1)] px-2 py-0.5 text-[var(--acc)]">
            Remove ×
          </Link>
        </div>
      ) : null}

      <div className="mt-2">
        {filtered.length === 0 ? (
          <p className="honest mt-4">No updates match these filters yet.</p>
        ) : (
          <FeedStream items={filtered} />
        )}
      </div>
    </main>
  );
}
