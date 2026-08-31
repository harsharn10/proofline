import type { ReactNode } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CopyAddress } from "@/components/copy-address";
import { ExportMenu } from "@/components/export-menu";
import { FeedList } from "@/components/feed-list";
import { CATEGORY_LABEL, HEAT_LABEL, STATUS_LABEL, type NameRecord } from "@/data/types";
import { dexUrl, xSearchUrl } from "@/data/names";
import { statusTone } from "@/lib/status-tone";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-fg">{children}</div>
    </section>
  );
}

export function Dossier({ name }: { name: NameRecord }) {
  const xUrl = xSearchUrl(name.xQuery);
  const feedItems = name.feed
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((item) => ({ name, item }));

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {CATEGORY_LABEL[name.category]} · {HEAT_LABEL[name.heat]}
      </p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-mono text-3xl font-medium tracking-tight text-fg">{name.ticker}</h1>
          <p className="mt-1 text-base text-muted">{name.project}</p>
        </div>
        <Badge tone={statusTone(name.status)}>{STATUS_LABEL[name.status]}</Badge>
      </div>
      <p className="mt-5 max-w-prose text-base leading-relaxed text-fg">{name.oneLiner}</p>
      <div className="mt-4">
        <ExportMenu name={name} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {name.links.map((link) => (
          <a
            key={link.href + link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-sm border border-border bg-surface px-3 text-sm text-fg hover:bg-raised"
          >
            {link.label}
            <ExternalLink className="size-3.5 text-subtle" />
          </a>
        ))}
        <a
          href={xUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-1.5 rounded-sm border border-border bg-surface px-3 text-sm text-fg hover:bg-raised"
        >
          Live X search
          <ArrowUpRight className="size-3.5 text-subtle" />
        </a>
        {name.contracts[0]?.address ? (
          <a
            href={dexUrl(name.contracts[0].address)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-sm border border-border bg-surface px-3 text-sm text-fg hover:bg-raised"
          >
            DexScreener
            <ExternalLink className="size-3.5 text-subtle" />
          </a>
        ) : null}
      </div>

      {name.contracts.length > 0 ? (
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {name.contracts.map((c) => (
            <CopyAddress key={c.address} address={c.address} label={c.label} />
          ))}
        </div>
      ) : (
        <p className="mt-6 border border-dashed border-border px-4 py-3 text-sm text-muted">
          No pinned contract yet. Do not buy this ticker off a board until a CA is in the file.
        </p>
      )}

      <Section title="Overview">
        <p className="text-muted">{name.overview}</p>
      </Section>
      <Section title="RWA hook">
        <p className="text-muted">{name.rwaHook}</p>
      </Section>
      <Section title="Thesis">
        <p className="text-muted">{name.thesis}</p>
      </Section>
      <Section title="Mechanics">
        <p className="text-muted">{name.mechanics}</p>
      </Section>
      <Section title="Risks">
        <p className="text-muted">{name.risks}</p>
      </Section>
      {name.collisions ? (
        <Section title="Name collisions">
          <p className="text-risk">{name.collisions}</p>
        </Section>
      ) : null}

      <section className="pt-10">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Feed</h2>
          <p className="font-mono text-[11px] tabular-nums text-subtle">
            {name.feed.length} update{name.feed.length === 1 ? "" : "s"}
          </p>
        </div>
        <FeedList items={feedItems} />
        <p className="mt-3 text-xs text-subtle">
          Company = project posts. What people are saying = CT. On-chain = prints. Risk = collisions and traps.
          Last file pass {name.updated}.
        </p>
      </section>
    </article>
  );
}
