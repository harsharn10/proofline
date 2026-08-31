import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { NameRow } from "@/components/name-row";
import { FeedList } from "@/components/feed-list";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getContent } from "@/data/content-server";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  loader: () => getContent(),
  component: Home,
});

function Home() {
  const { site, dossiers } = Route.useLoaderData();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const categories = useMemo(() => Array.from(new Set(dossiers.map((d) => d.category))).sort(), [dossiers]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return dossiers.filter((d) => {
      if (cat !== "all" && d.category !== cat) return false;
      if (!needle) return true;
      return (
        (d.symbol ?? "").toLowerCase().includes(needle) ||
        d.name.toLowerCase().includes(needle) ||
        d.summary.toLowerCase().includes(needle) ||
        d.slug.includes(needle)
      );
    });
  }, [q, cat, dossiers]);

  const fullCount = dossiers.filter((d) => d.coverage === "full").length;
  const trendingCount = dossiers.filter((d) => d.derived.trending).length;

  const latestFeed = useMemo(
    () =>
      dossiers
        .flatMap((d) => d.feed.map((item) => ({ dossier: d, item })))
        .sort((a, b) => b.item.date.localeCompare(a.item.date))
        .slice(0, 10),
    [dossiers],
  );

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">The file</p>
            <h2 className="mt-2 max-w-xl text-2xl font-medium tracking-tight text-fg sm:text-3xl">
              {site.tagline}
            </h2>
            <div className="mt-5 max-w-prose space-y-3 text-sm leading-relaxed text-muted">
              <p>
                {site.name} tracks every native play on {site.chain.name} — deployments, control, security
                posture, and what is still unverified.
              </p>
              <p>
                {site.chain.stack}. Gas in {site.chain.gas}. Mainnet since {formatDate(site.chain.mainnet_date)}.
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
            <Stat label="Names on file" value={String(dossiers.length)} />
            <Stat label="Full profiles" value={String(fullCount)} />
            <Stat label="Trending now" value={String(trendingCount)} />
            <Stat label="Chain ID" value={String(site.chain.id)} />
            <Stat label="Mainnet" value={formatDate(site.chain.mainnet_date)} />
            <Stat label="Facts checked" value={site.chain.checked ? formatDate(site.chain.checked) : "Unverified"} />
          </dl>
        </section>

        <section className="mt-10 grid gap-3 rounded-md border border-border bg-surface px-4 py-4 sm:grid-cols-3 sm:px-5">
          <Note title="Explorer" body={site.chain.explorer} href={site.chain.explorer} />
          <Note title="Docs" body={site.chain.docs} href={site.chain.docs} />
          <Note
            title="Chain facts"
            body={
              site.chain.checked
                ? `Reproduced against docs.robinhood.com on ${formatDate(site.chain.checked)}.`
                : "Not yet reproduced against docs.robinhood.com — treat as unverified."
            }
          />
        </section>

        <section className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Latest in the feed</h2>
            <p className="text-xs text-subtle">Company posts and CT, newest first</p>
          </div>
          <FeedList items={latestFeed} />
        </section>

        <section className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Names</h2>
              <p className="mt-1 text-sm text-muted">Open a dossier for links, research, and that name's feed.</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute top-3.5 left-3 size-4 text-subtle" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search ticker or project"
                className="pl-9"
                aria-label="Search names"
              />
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
              All
            </FilterChip>
            {categories.map((c) => (
              <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
                {c}
              </FilterChip>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-4 py-2 sm:px-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {filtered.length} name{filtered.length === 1 ? "" : "s"}
              </p>
              <Badge tone="muted">Not financial advice</Badge>
            </div>
            {filtered.length === 0 ? (
              <p className="px-4 py-10 text-sm text-muted">Nothing matches. Try another ticker or category.</p>
            ) : (
              filtered.map((d) => <NameRow key={d.slug} dossier={d} />)
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface px-4 py-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{label}</dt>
      <dd className="mt-1 font-mono text-xl tabular-nums text-fg">{value}</dd>
    </div>
  );
}

function Note({ title, body, href }: { title: string; body: string; href?: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{title}</p>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="mt-1 block truncate text-sm text-accent hover:underline">
          {body}
        </a>
      ) : (
        <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "h-10 shrink-0 rounded-sm bg-accent px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-fg"
          : "h-10 shrink-0 rounded-sm border border-border bg-surface px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-fg"
      }
    >
      {children}
    </button>
  );
}
