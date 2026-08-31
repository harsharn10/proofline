import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { NameRow } from "@/components/name-row";
import { FeedList } from "@/components/feed-list";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CHAIN } from "@/data/chain";
import { NAMES, allFeed } from "@/data/names";
import { CATEGORIES, CATEGORY_LABEL, type Category } from "@/data/types";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "all">("all");
  const feed = useMemo(() => allFeed().slice(0, 10), []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return NAMES.filter((n) => {
      if (cat !== "all" && n.category !== cat) return false;
      if (!needle) return true;
      return (
        n.ticker.toLowerCase().includes(needle) ||
        n.project.toLowerCase().includes(needle) ||
        n.oneLiner.toLowerCase().includes(needle) ||
        n.slug.includes(needle)
      );
    });
  }, [q, cat]);

  const live = NAMES.filter((n) => n.status === "live" || n.status === "official").length;
  const launching = NAMES.filter((n) => n.status === "launching" || n.status === "upcoming").length;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">The file</p>
            <h2 className="mt-2 max-w-xl text-2xl font-medium tracking-tight text-fg sm:text-3xl">
              Every name on Robinhood Chain, researched. Feed more and they get a dossier.
            </h2>
            <div className="mt-5 max-w-prose space-y-3 text-sm leading-relaxed text-muted">
              {CHAIN.brief.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
            <Stat label="Names on file" value={String(NAMES.length)} />
            <Stat label="Official stock tokens" value={`${CHAIN.counts.officialStockTokens}+`} />
            <Stat label="Live or official" value={String(live)} />
            <Stat label="Launching / upcoming" value={String(launching)} />
            <Stat label="Chain ID" value={String(CHAIN.chainId)} />
            <Stat label="Mainnet" value="1 Jul 2026" />
          </dl>
        </section>

        <section className="mt-10 grid gap-3 rounded-md border border-border bg-surface px-4 py-4 sm:grid-cols-3 sm:px-5">
          <Note
            title="No chain token"
            body={CHAIN.nativeToken}
          />
          <Note title="Stock Tokens" body={CHAIN.stockTokens} />
          <Note
            title="Gas"
            body={`${CHAIN.gas} on ${CHAIN.stack}. Registry at docs.robinhood.com/chain/contracts.`}
          />
        </section>

        <section className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Latest in the feed</h2>
            <p className="text-xs text-subtle">Company posts and CT, newest first</p>
          </div>
          <FeedList items={feed} showName />
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
            {CATEGORIES.map((c) => (
              <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
                {CATEGORY_LABEL[c]}
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
              filtered.map((n) => <NameRow key={n.slug} name={n} />)
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

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
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
