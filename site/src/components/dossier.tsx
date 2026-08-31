import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DeploymentGrid } from "@/components/deployment-grid";
import { EvidenceTag } from "@/components/evidence-tag";
import { ExportMenu } from "@/components/export-menu";
import { FeedList } from "@/components/feed-list";
import { Section } from "@/components/section";
import {
  LIFECYCLE_LABEL,
  LINK_KIND_LABEL,
  NOT_VERIFIED,
  correctionsLink,
  dexScreenerSearchUrl,
  explorerTokenUrl,
  lifecycleTone,
  riskTone,
  type Dossier as DossierData,
  type DependencyRef,
  type Gap,
  type Finding,
  type SiteConfig,
} from "@/data/types";

function FindingList({ items }: { items: Finding[] }) {
  if (items.length === 0) return <p className="text-sm text-muted">None recorded.</p>;
  return (
    <ul className="space-y-2">
      {items.map((f, i) => (
        <li key={i} className="flex flex-wrap items-start gap-2">
          <EvidenceTag evidenceClass={f.class} sources={f.sources} />
          <span>{f.text}</span>
        </li>
      ))}
    </ul>
  );
}

function GapList({ items }: { items: Gap[] }) {
  if (items.length === 0) return <p className="text-sm text-muted">None recorded.</p>;
  return (
    <ul className="list-disc space-y-1 pl-4 text-muted">
      {items.map((g, i) => (
        <li key={i}>{g.text}</li>
      ))}
    </ul>
  );
}

// The handles come from derived.trendingAccounts (build/derived.json) — the same computation that set
// the flag. The site never rebuilds this list from tiers or feed dates.
function TrendingChip({ handles }: { handles: string[] }) {
  return (
    <div className="flex items-center gap-1.5">
      <Badge tone="warn">Trending</Badge>
      {handles.length > 0 ? (
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-subtle">{handles.join(" · ")}</span>
      ) : null}
    </div>
  );
}

export function Dossier({
  dossier,
  site,
  dependencies,
}: {
  dossier: DossierData;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
}) {
  const { derived } = dossier;
  const blockscoutDeployments = dossier.deployments.filter(
    (d) => d.chain === "robinhood-chain" && d.address !== NOT_VERIFIED,
  );
  const correction = correctionsLink(site.corrections.destination);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {dossier.category} · {LIFECYCLE_LABEL[dossier.lifecycle]}
      </p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-mono text-3xl font-medium tracking-tight text-fg">
            {dossier.symbol ?? dossier.name}
          </h1>
          <p className="mt-1 text-base text-muted">{dossier.name}</p>
        </div>
        <div className="flex items-center gap-2">
          {derived.trending ? <TrendingChip handles={derived.trendingAccounts} /> : null}
          <Badge tone={lifecycleTone(dossier.lifecycle)}>{LIFECYCLE_LABEL[dossier.lifecycle]}</Badge>
        </div>
      </div>

      {/* Site contract: `label` is the only display string and `provisional` the only de-emphasis
          flag. A null score means the number is suppressed — a stub, or a full profile whose
          confidence is below the display threshold — and the label says why. */}
      <div className="mt-4">
        {derived.score === null ? (
          <div className="inline-flex flex-wrap items-center gap-2 rounded-sm border border-dashed border-border px-3 py-2">
            <Badge tone="muted">{dossier.coverage === "stub" ? "Stub" : "Insufficient evidence"}</Badge>
            <p className="text-sm text-muted">{derived.label ?? "Research pending / insufficient evidence"}</p>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2">
            <p className="font-mono text-2xl tabular-nums text-fg">
              {derived.score}
              <span className="text-base text-subtle">/100</span>
            </p>
            {derived.provisional ? <Badge tone="warn">Provisional</Badge> : null}
            {derived.confidence !== null ? (
              <span className="font-mono text-xs text-muted">{derived.confidence}% confidence</span>
            ) : null}
            {derived.risk ? <Badge tone={riskTone(derived.risk)}>{derived.risk} risk</Badge> : null}
            {derived.override ? (
              <span className="font-mono text-[11px] text-subtle">
                Capped by {derived.override.level} override
              </span>
            ) : null}
          </div>
        )}
      </div>

      <p className="mt-5 max-w-prose text-base leading-relaxed text-fg">{dossier.summary}</p>
      <div className="mt-4">
        <ExportMenu dossier={dossier} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {dossier.links.map((link) => (
          <a
            key={link.kind + link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-sm border border-border bg-surface px-3 text-sm text-fg hover:bg-raised"
          >
            {LINK_KIND_LABEL[link.kind]}
            <ExternalLink className="size-3.5 text-subtle" />
          </a>
        ))}
        <a
          href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-1.5 rounded-sm border border-border bg-surface px-3 text-sm text-fg hover:bg-raised"
        >
          DexScreener
          <ArrowUpRight className="size-3.5 text-subtle" />
        </a>
        {blockscoutDeployments.map((d) => (
          <a
            key={d.label}
            href={explorerTokenUrl(site.chain.explorer, d.address)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-sm border border-border bg-surface px-3 text-sm text-fg hover:bg-raised"
          >
            Blockscout: {d.label}
            <ExternalLink className="size-3.5 text-subtle" />
          </a>
        ))}
      </div>

      <Section title="Deployments">
        <DeploymentGrid deployments={dossier.deployments} explorerBase={site.chain.explorer} />
      </Section>

      {dossier.dependencies.length > 0 ? (
        <Section title="Dependencies">
          <div className="flex flex-wrap gap-2">
            {dossier.dependencies.map((id) => (
              <Link
                key={id}
                to="/d/$id"
                params={{ id }}
                title={dependencies[id]?.summary}
                className="inline-flex h-8 items-center rounded-sm border border-border bg-surface px-2.5 text-xs text-muted hover:bg-raised hover:text-fg"
              >
                {dependencies[id]?.name ?? id}
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section title="Positive findings">
        <FindingList items={dossier.findings.positive} />
      </Section>
      <Section title="Risk findings">
        <FindingList items={dossier.findings.risk} />
      </Section>
      <Section title="Missing evidence">
        <GapList items={dossier.findings.missing} />
      </Section>
      <Section title="Unresolved questions">
        <GapList items={dossier.findings.unresolved} />
      </Section>

      <section className="pt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Research record</h2>
        {dossier.research.sections.length > 0 ? (
          <div className="mt-3 space-y-6">
            {dossier.research.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="text-sm font-medium text-fg">{s.heading}</h3>
                {/* research.sections.html is produced by data/markdown.ts from research/<slug>.md —
                    evidence tags are pre-rendered to .ev spans and HTML comments already stripped. */}
                <div
                  className="research-body mt-2 text-sm leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: s.html }}
                />
              </div>
            ))}
          </div>
        ) : (
          // content-server.ts falls back to { sections: [] } when research/<slug>.md is
          // missing or fails to parse, rather than throwing and taking down the page.
          <p className="mt-3 text-sm text-muted">No research record yet.</p>
        )}
      </section>

      <section className="pt-10">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Feed</h2>
          <p className="font-mono text-[11px] tabular-nums text-subtle">
            {dossier.feed.length} update{dossier.feed.length === 1 ? "" : "s"}
          </p>
        </div>
        <FeedList items={dossier.feed.map((item) => ({ item }))} />
        <p className="mt-3 text-xs text-subtle">
          Company = project posts. What people are saying = CT. On-chain = observed activity. Risk = collisions and cautions.
        </p>
      </section>

      <Section title="Sources">
        {dossier.sources.length > 0 ? (
          <ol className="space-y-3">
            {dossier.sources.map((s) => (
              <li key={s.id} className="rounded-sm border border-border bg-surface p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-accent">{s.id}</span>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-sm text-fg hover:underline"
                  >
                    {s.publisher}
                  </a>
                  <span className="font-mono text-[10px] text-subtle">{s.accessed_at.slice(0, 10)}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{s.claim}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-muted">No sources recorded yet.</p>
        )}
      </Section>

      <Section title="Changelog">
        {dossier.changelog.length > 0 ? (
          <ol className="divide-y divide-border border border-border bg-surface">
            {dossier.changelog.map((c, i) => (
              <li key={i} className="px-4 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <time className="font-mono text-[11px] text-subtle">{c.date}</time>
                  <Badge tone="muted">{c.type}</Badge>
                  <span className="font-mono text-[10px] uppercase text-subtle">{c.severity}</span>
                </div>
                <h3 className="mt-1 text-sm font-medium text-fg">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.detail}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-muted">No changelog entries yet.</p>
        )}
      </Section>

      <section className="mt-10 border-t border-border pt-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Corrections</h2>
        <p className="mt-2 text-sm text-muted">
          {correction.href ? (
            <a href={correction.href} className="text-accent hover:underline">
              {correction.label}
            </a>
          ) : (
            correction.label
          )}
        </p>
      </section>
    </article>
  );
}
