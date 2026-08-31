import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { NameRow } from "@/components/name-row";
import { FeedList } from "@/components/feed-list";
import { getContent } from "@/data/content-server";
import { type DirectoryEntry } from "@/data/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  loader: () => getContent(),
  component: Home,
});

function Home() {
  // `entries` is the directory slice (no findings, research, sources or feeds) and `latestFeed`
  // the 10 newest items across every name — both cut server-side in content-server.ts.
  const { site, entries: dossiers, latestFeed, counts, generatedAt } = Route.useLoaderData();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const categories = useMemo(() => Array.from(new Set(dossiers.map((d) => d.category))).sort(), [dossiers]);

  // Directory order (brief rule 4): names with feed activity first (busiest feeds on top),
  // then the rest alphabetically. No score exists on a stub, so no score sort.
  const sorted = useMemo(() => {
    const quiet = (d: DirectoryEntry) => (d.feedCount > 0 || d.derived.trending ? 0 : 1);
    return [...dossiers].sort((a, b) => {
      if (quiet(a) !== quiet(b)) return quiet(a) - quiet(b);
      if (quiet(a) === 0 && a.feedCount !== b.feedCount) return b.feedCount - a.feedCount;
      return a.name.localeCompare(b.name);
    });
  }, [dossiers]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return sorted.filter((d) => {
      if (cat !== "all" && d.category !== cat) return false;
      if (!needle) return true;
      return (
        (d.symbol ?? "").toLowerCase().includes(needle) ||
        d.name.toLowerCase().includes(needle) ||
        d.summary.toLowerCase().includes(needle) ||
        d.slug.includes(needle) ||
        (d.handle ?? "").toLowerCase().includes(needle)
      );
    });
  }, [q, cat, sorted]);

  const liveFeedCount = dossiers.filter((d) => d.feedCount > 0).length;

  return (
    <main className="wrap pb-4">
      <section className="hero">
        <p className="eyebrow">
          Robinhood Chain · {site.chain.id}
        </p>
        <h1>{site.tagline}</h1>
        <p className="desc">
          {site.name} tracks every native play on {site.chain.name} — deployments, control, security
          posture, and what is still unverified. {site.chain.stack}. Gas in {site.chain.gas}. Mainnet
          since {formatDate(site.chain.mainnet_date)}.
        </p>
      </section>

      {/* What exists, nothing else — no zero-stats above the fold (brief rule 2). */}
      <div className="statrow">
        <div className="s">
          <b>{dossiers.length}</b>
          <span>names on file</span>
        </div>
        <div className="s">
          <b>{counts.dependencyCards}</b>
          <span>dependency cards</span>
        </div>
        <div className="s">
          <b>{counts.sourcedClaims}</b>
          <span>sourced claims</span>
        </div>
        <div className="s">
          <b>{liveFeedCount}</b>
          <span>live feeds</span>
        </div>
        <div className="s">
          <b>{formatDate(generatedAt.slice(0, 10))}</b>
          <span>updated</span>
        </div>
      </div>

      <div className="receiptrow">
        <a className="receipt" href={site.chain.explorer} target="_blank" rel="noreferrer">
          explorer
        </a>
        <a className="receipt" href={site.chain.docs} target="_blank" rel="noreferrer">
          chain docs
        </a>
        <span className="honest">
          {site.chain.checked
            ? `Chain facts reproduced against docs.robinhood.com on ${formatDate(site.chain.checked)}.`
            : "Chain facts not yet reproduced against docs.robinhood.com — treat as reported."}
        </span>
      </div>

      <section>
        <div className="sechead">
          <h2 className="t">Latest</h2>
          <span className="h">project posts &amp; commentary · newest first</span>
        </div>
        <FeedList items={latestFeed} />
      </section>

      <section>
        <div className="sechead">
          <h2 className="t">Names</h2>
          <span className="h">
            {filtered.length} of {dossiers.length} · open a name for links, findings, and its feed
          </span>
        </div>
        <input
          className="searchbox"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search ticker or project"
          aria-label="Search names"
        />
        <div className="chips">
          <button type="button" className={cat === "all" ? "on" : undefined} onClick={() => setCat("all")}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} type="button" className={cat === c ? "on" : undefined} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-3">
          {filtered.length === 0 ? (
            <p className="honest mt-4">Nothing matches. Try another ticker or category.</p>
          ) : (
            filtered.map((d) => <NameRow key={d.slug} dossier={d} />)
          )}
        </div>
      </section>
    </main>
  );
}
