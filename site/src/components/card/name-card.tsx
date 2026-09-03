import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { DeploymentGrid } from "@/components/deployment-grid";
import { PageMeta } from "@/components/page-meta";
import {
  Badge,
  DataTable,
  GrowthChart,
  Icon,
  LinkPill,
  MetricTile,
  SegmentedControl,
  StatusPill,
  Tag,
  type GrowthSeries,
} from "@/components/ui";
import { dejargon, hostLabel, shortAddress } from "@/lib/dejargon";
import {
  DEFAULT_KPIS,
  KPI_LABEL,
  KPI_SOURCE,
  LINK_KIND_LABEL,
  SECTION_KPIS,
  dexScreenerSearchUrl,
  explorerTokenUrl,
  formatCount,
  formatKpi,
  formatUsd,
  relativeTime,
  type DependencyRef,
  type Dossier,
  type DossierBundle,
  type EvidenceClass,
  type KpiKey,
  type SectionDef,
  type SiteConfig,
  type TreeRef,
} from "@/data/types";
import type { DossierTab } from "@/components/dossier";
import type { ChartWindow } from "@/components/ui/chart-window";
import "./cards.css";

type NameCardProps = {
  dossier: Dossier;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
  tree: TreeRef | null;
  section: SectionDef | null;
  tab: DossierTab;
  now: number;
  related: DossierBundle["related"];
};

const WINDOW_OPTIONS: Array<{ value: ChartWindow; label: string }> = [
  { value: "7d", label: "Daily" },
  { value: "30d", label: "Weekly" },
  { value: "90d", label: "Monthly" },
];

const LINK_ORDER = ["site", "docs", "x", "telegram", "github"] as const;

function initials(name: string): string {
  const words = name.trim().split(/\s+/);
  return (words.length > 1 ? words.slice(0, 2).map((word) => word[0]).join("") : name.slice(0, 2)).toUpperCase();
}

function titleCase(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function dateLabel(value: string): string {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

function primaryAddress(dossier: Dossier): string | null {
  return (
    dossier.pulled?.addresses.find((row) => row.role === "token")?.address ??
    dossier.pulled?.addresses.find((row) => row.is_contract)?.address ??
    dossier.deployments.find((row) => row.address !== "not-verified")?.address ??
    null
  );
}

function mainContract(dossier: Dossier, token: boolean) {
  if (token) return dossier.pulled?.addresses.find((row) => row.role === "token") ?? dossier.pulled?.addresses[0] ?? null;
  return (
    dossier.pulled?.addresses.find((row) => row.role === "factory") ??
    dossier.pulled?.addresses.find((row) => row.role === "router") ??
    dossier.pulled?.addresses.find((row) => row.is_contract) ??
    null
  );
}

function explorerHref(dossier: Dossier, site: SiteConfig): string | null {
  const address = primaryAddress(dossier);
  return address ? explorerTokenUrl(site.chain.explorer, address) : null;
}

function kpiHref(dossier: Dossier, key: KpiKey, site: SiteConfig): string | null {
  if (["liquidityUsd", "volume24h", "trades24h", "priceChange24h", "fdv"].includes(key)) {
    return dexScreenerSearchUrl(dossier.symbol ?? dossier.name);
  }
  if (key === "tvl") {
    return dossier.pulled?.metrics.find((metric) => metric.kind === "tvl")?.source_url ?? null;
  }
  return explorerHref(dossier, site);
}

function addressValue(address: string | null, site: SiteConfig): ReactNode {
  if (!address) return <Missing />;
  return (
    <a className="card-mono" href={explorerTokenUrl(site.chain.explorer, address)} target="_blank" rel="noreferrer" title={address}>
      {shortAddress(address)}
    </a>
  );
}

function Missing({ children = "not checked" }: { children?: ReactNode }) {
  return <i className="card-missing">{children}</i>;
}

function readerText(text: string): string {
  return dejargon(text)
    .replace(/\bProofline\b/g, "Icarus")
    .replace(/\bdossier\b/gi, "research")
    .replace(/\bresearch packets?\b/gi, "research")
    .replace(/\bpackets?\b/gi, "research")
    .replace(/\bcensus\b/gi, "registry")
    .replace(/\bcoverage\b/gi, "review")
    .replace(/\bInitial stub opened\b/g, "First profile opened")
    .replace(/\bstub\b/gi, "short profile")
    .replace(/\bprovisional\b/gi, "awaiting second review")
    .replace(/\bconfidence\b/gi, "evidence")
    .replace(/\bcohort\b/gi, "section")
    .replace(/\bqualifying\b/gi, "listing");
}

function FactRow({ label, children, tone }: { label: string; children: ReactNode; tone?: "good" | "warn" | "bad" }) {
  return (
    <div className="card-fact-row">
      <span>{label}</span>
      <span className={tone ? `card-${tone}` : undefined}>{children}</span>
    </div>
  );
}

function firstSentence(summary: string): { first: string; rest: string } {
  const clean = readerText(summary);
  const match = clean.match(/^(.+?[.!?])(?:\s+|$)(.*)$/s);
  if (!match) return { first: clean, rest: "" };
  return { first: match[1]!, rest: match[2] ?? "" };
}

function auditState(dossier: Dossier): { value: string; href: string | null } | null {
  const audit = dossier.sources.find((source) => source.kind === "audit");
  if (audit) return { value: audit.publisher || "Audit report", href: audit.url };
  const all = [...dossier.findings.positive, ...dossier.findings.risk, ...dossier.findings.missing];
  if (all.some((finding) => /(?:no|not found|none).{0,40}audit|audit.{0,40}(?:not found|none)/i.test(finding.text))) {
    return { value: "None matched", href: null };
  }
  return null;
}

function ownerState(dossier: Dossier, site: SiteConfig): { label: string; href: string | null } | null {
  const owned = dossier.pulled?.addresses.find((row) => row.owner_type !== "none" && row.owner_type !== "unknown");
  if (!owned) return null;
  if (owned.owner_type === "safe") {
    const threshold = owned.safe?.threshold;
    const count = owned.safe?.signers?.length;
    return {
      label: threshold !== null && threshold !== undefined && count ? `${threshold}-of-${count} Safe` : "Safe",
      href: owned.owner ? explorerTokenUrl(site.chain.explorer, owned.owner) : null,
    };
  }
  return {
    label: owned.owner_type === "eoa" ? "One key" : owned.owner_type === "contract" ? "Contract" : titleCase(owned.owner_type),
    href: owned.owner ? explorerTokenUrl(site.chain.explorer, owned.owner) : null,
  };
}

function linkLabel(kind: (typeof LINK_ORDER)[number], url: string, count: number): string {
  if (kind === "site") return hostLabel(url);
  if (kind === "x") {
    const handle = url.replace(/\/$/, "").split("/").pop();
    return handle ? `@${handle.replace(/^@/, "")}` : "X";
  }
  if (kind === "docs" && count > 1) {
    const part = url.replace(/\/$/, "").split("/").pop();
    return part && part !== hostLabel(url) ? `Docs · ${part}` : "Docs";
  }
  return LINK_KIND_LABEL[kind];
}

function OfficialLinks({ dossier, site }: { dossier: Dossier; site: SiteConfig }) {
  const links = dossier.links
    .filter((link): link is Dossier["links"][number] & { kind: (typeof LINK_ORDER)[number] } => LINK_ORDER.includes(link.kind as never))
    .sort((a, b) => LINK_ORDER.indexOf(a.kind) - LINK_ORDER.indexOf(b.kind));
  const docsCount = links.filter((link) => link.kind === "docs").length;
  const address = primaryAddress(dossier);
  return (
    <div className="card-links">
      {links.map((link) => (
        <LinkPill
          key={`${link.kind}-${link.url}`}
          label={linkLabel(link.kind, link.url, link.kind === "docs" ? docsCount : 1)}
          href={link.url}
          external
        />
      ))}
      {dossier.pulled?.market?.pairs?.[0] ? (
        <LinkPill label="DexScreener" href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)} external />
      ) : null}
      {address ? <LinkPill label="Explorer" href={explorerTokenUrl(site.chain.explorer, address)} external /> : null}
    </div>
  );
}

function HeaderTags({
  dossier,
  dependencies,
  tree,
  site,
  token,
}: Pick<NameCardProps, "dossier" | "dependencies" | "tree" | "site"> & { token: boolean }) {
  const tags: ReactNode[] = [];
  const address = primaryAddress(dossier);
  const source = address ? explorerTokenUrl(site.chain.explorer, address) : undefined;
  const audit = auditState(dossier);
  const owner = ownerState(dossier, site);
  const market = dossier.pulled?.market;
  if (token) {
    if (dossier.card.launchpad) {
      tags.push(
        <Tag
          key="launchpad"
          icon="rocket"
          label="Launchpad"
          value={titleCase(dossier.card.launchpad.slug)}
          href={`/n/${dossier.card.launchpad.slug}`}
        />,
      );
    }
    if (tree?.label) tags.push(<Tag key="category" icon="cat" value={tree.label} />);
    const pairAsset = market?.pairs?.[0]?.quote_symbol;
    if (pairAsset) tags.push(<Tag key="pair" icon="tag" value={pairAsset} href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)} />);
    for (const theme of dossier.card.themes) tags.push(<Tag key={`theme-${theme}`} icon="tag" value={titleCase(theme)} />);
    if (market?.first_pair_at) tags.push(<Tag key="date" icon="cal" value={dateLabel(market.first_pair_at)} href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)} />);
    if (market?.pairs?.[0]?.dex) tags.push(<Tag key="venue" icon="drop" label="Liquidity" value={titleCase(market.pairs[0].dex)} href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)} />);
  } else {
    if (tree?.label) tags.push(<Tag key="category" icon="cat" value={tree.label} />);
    for (const theme of dossier.card.themes.slice(0, 1)) tags.push(<Tag key={`mechanism-${theme}`} icon="tag" value={titleCase(theme)} />);
    const created = dossier.pulled?.addresses.map((row) => row.created_at).filter((value): value is string => Boolean(value)).sort()[0];
    if (created) tags.push(<Tag key="mainnet" icon="cal" label="Mainnet" value={dateLabel(created)} href={source} />);
    const rails = dossier.dependencies.map((id) => dependencies[id]?.name).filter((value): value is string => Boolean(value));
    if (rails.length > 0) tags.push(<Tag key="rails" icon="drop" label={dossier.category.toLowerCase().includes("launch") ? "Graduates into" : "Runs on"} value={rails.join(" / ")} />);
    if (owner) tags.push(<Tag key="owner" icon="key" label="Owner" value={owner.label} href={owner.href ?? undefined} />);
    if (audit) tags.push(<Tag key="audit" icon="shield" label="Audit" value={audit.value} href={audit.href ?? undefined} />);
  }
  return <div className="card-tags">{tags}</div>;
}

function CardHeader({ dossier, site, dependencies, tree, section, now, token, window, onWindow }: NameCardProps & {
  token: boolean;
  window: ChartWindow;
  onWindow: (window: ChartWindow) => void;
}) {
  const hasSecondReview = dossier.review.approver !== "pending";
  const statusSource = explorerHref(dossier, site);
  const statusPill = (
    <StatusPill
      status={dossier.kpis.status}
      relativeTime={dossier.kpis.lastActivityAt ? relativeTime(dossier.kpis.lastActivityAt, now) : null}
    />
  );
  return (
    <header className="name-card-header">
      <div className="card-avatar" aria-hidden="true">{initials(dossier.name)}</div>
      <div className="card-identity">
        <div className="card-title-line">
          <h1>{dossier.name}</h1>
          {dossier.symbol ? <span className="card-symbol">{dossier.symbol}</span> : null}
          <Badge tone={dossier.card.officialConfirmed ? "ok" : "warn"}>
            {dossier.card.officialConfirmed ? <Icon name="check" /> : null}
            {dossier.card.officialConfirmed ? "Official · links confirmed" : "Unclaimed"}
          </Badge>
          {statusSource ? <a href={statusSource} target="_blank" rel="noreferrer">{statusPill}</a> : statusPill}
          {!token && dossier.derived.score !== null ? (
            <Link from="/n/$slug" search={{}} resetScroll={false}>
              <Badge tone="ctl">
                <Icon name="shield" />
                Control {dossier.derived.score}/100
                {dossier.derived.confidence !== null ? ` · evidence ${dossier.derived.confidence}%` : ""}
                {!hasSecondReview ? " · awaiting second review" : ""}
              </Badge>
            </Link>
          ) : null}
        </div>
        <HeaderTags dossier={dossier} site={site} dependencies={dependencies} tree={tree} token={token} />
      </div>
      <SegmentedControl label="Chart window" options={WINDOW_OPTIONS} value={window} onChange={onWindow} />
      {section ? <span className="sr-only">Filed under {section.label}</span> : null}
    </header>
  );
}

function SummaryPanel({ dossier, site }: Pick<NameCardProps, "dossier" | "site">) {
  const { first, rest } = firstSentence(dossier.summary);
  return (
    <section className="card-summary">
      <p><strong>{first}</strong>{rest ? ` ${rest}` : ""}</p>
      <OfficialLinks dossier={dossier} site={site} />
    </section>
  );
}

function ProjectStructure({ dossier, site }: Pick<NameCardProps, "dossier" | "site">) {
  const owner = ownerState(dossier, site);
  const pulled = dossier.pulled?.addresses ?? [];
  const proxyCount = pulled.filter((row) => row.proxy.type === "eip1967").length;
  const proxyUnknown = pulled.some((row) => row.proxy.type === "unknown");
  const timelock = dossier.findings.positive.concat(dossier.findings.risk).find((finding) => /no timelock/i.test(finding.text));
  const mutableFees = dossier.findings.positive.concat(dossier.findings.risk).find((finding) => /(?:change|mutable).{0,30}fee|fee.{0,30}(?:change|mutable)/i.test(finding.text));
  const token = pulled.find((row) => row.role === "token");
  return (
    <>
      <FactRow label="Ownership">{owner ? <a href={owner.href ?? undefined}>{owner.label}</a> : <Missing />}</FactRow>
      <FactRow label="Timelock" tone={timelock ? "bad" : undefined}>{timelock ? "None located" : <Missing />}</FactRow>
      <FactRow label="Upgradeable" tone={proxyCount > 0 ? "warn" : undefined}>
        {proxyCount > 0 ? <a href="?tab=contracts">{proxyCount} {proxyCount === 1 ? "proxy" : "proxies"}</a> : pulled.length > 0 && !proxyUnknown ? "No proxies" : <Missing />}
      </FactRow>
      <FactRow label="Fees" tone={mutableFees ? "warn" : undefined}>{mutableFees ? "Owner can change" : <Missing />}</FactRow>
      <FactRow label="Token owner" tone={token?.owner_type === "eoa" ? "warn" : undefined}>
        {token ? (token.owner_type === "none" ? "None" : ownerState({ ...dossier, pulled: { ...dossier.pulled!, addresses: [token] } }, site)?.label ?? <Missing />) : <Missing />}
      </FactRow>
    </>
  );
}

function TokenStructure({ dossier, site }: Pick<NameCardProps, "dossier" | "site">) {
  const owner = ownerState(dossier, site);
  const locks = dossier.card.liquidityLocks;
  const checkedLock = locks.find((row) => row.lockedShare !== null || row.holderKind !== null);
  const liquidity = checkedLock
    ? `${checkedLock.lockedShare !== null ? `${(checkedLock.lockedShare * 100).toFixed(1)}% ` : ""}${checkedLock.holderKind ? checkedLock.holderKind.replaceAll("-", " + ") : "checked"}`
    : null;
  const mint = dossier.card.mint === "owner-can-mint" ? "Owner can mint" : dossier.card.mint === "no-mint-function" ? "No mint function" : null;
  const explorer = explorerHref(dossier, site);
  return (
    <>
      <FactRow label="Ownership" tone={owner?.label === "One key" ? "warn" : undefined}>{owner ? <a href={owner.href ?? undefined}>{owner.label}</a> : <Missing />}</FactRow>
      <FactRow label="Liquidity">{liquidity ? <a href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)}>{liquidity}</a> : <Missing />}</FactRow>
      <FactRow label="Mint" tone={dossier.card.mint === "owner-can-mint" ? "warn" : undefined}>{mint ? <a href={explorer ?? undefined}>{mint}</a> : <Missing />}</FactRow>
      <FactRow label="Top-10 hold">{dossier.card.top10Share !== null ? <a href={explorer ?? undefined}>{(dossier.card.top10Share * 100).toFixed(1)}%</a> : <Missing />}</FactRow>
    </>
  );
}

function OfficialAndStructure({ dossier, site, token }: Pick<NameCardProps, "dossier" | "site"> & { token: boolean }) {
  const tokenRow = dossier.pulled?.addresses.find((row) => row.role === "token") ?? null;
  const main = mainContract(dossier, token);
  const read = dossier.pulled?.addresses.filter((row) => row.is_contract === true).length ?? 0;
  const audit = auditState(dossier);
  return (
    <section>
      <h2 className="card-label">Official</h2>
      <div className="card-fact-group">
        <FactRow label="Token">{addressValue(tokenRow?.address ?? null, site)}</FactRow>
        <FactRow label="Main contract">{addressValue(main?.address ?? null, site)}</FactRow>
        <FactRow label="Contracts read">{read > 0 ? <a href="?tab=contracts">{read} read</a> : <Missing />}</FactRow>
        <FactRow label="Audit">{audit ? (audit.href ? <a href={audit.href}>{audit.value}</a> : audit.value) : <Missing />}</FactRow>
      </div>
      <h2 className="card-label card-label-spaced">Structure</h2>
      <div className="card-fact-group">{token ? <TokenStructure dossier={dossier} site={site} /> : <ProjectStructure dossier={dossier} site={site} />}</div>
    </section>
  );
}

function historyPoints(dossier: Dossier, key: keyof Dossier["card"]["history"][number]) {
  return dossier.card.history.flatMap((point) => {
    const value = point[key];
    return typeof value === "number" ? [{ at: point.at, value }] : [];
  });
}

function chartSeries(dossier: Dossier, token: boolean): GrowthSeries[] {
  const holders = historyPoints(dossier, "holders");
  const volume = historyPoints(dossier, "volume24h");
  const trades = historyPoints(dossier, "trades24h");
  const launches = historyPoints(dossier, "launches24h");
  const revenue = dossier.card.dailySeries.revenue_daily ?? historyPoints(dossier, "revenue24h");
  const rows: GrowthSeries[] = token
    ? [
        { key: "holders", label: "Holders", type: "line", points: holders, format: formatCount },
        { key: "volume", label: "Volume", type: "bar", points: volume, format: formatUsd },
        { key: "trades", label: "Trades", type: "bar", points: trades, format: formatCount },
      ]
    : [
        { key: "launches", label: "Launches", type: "bar", points: launches, format: formatCount },
        { key: "revenue", label: "Revenue", type: "bar", points: revenue, format: formatUsd },
        { key: "holders", label: "Holders", type: "line", points: holders, format: formatCount },
      ];
  return rows.filter((row) => row.points.length > 0);
}

function MetricsAndChart({ dossier, site, section, token, window }: Pick<NameCardProps, "dossier" | "site" | "section"> & { token: boolean; window: ChartWindow }) {
  const keys = SECTION_KPIS[section?.id ?? ""] ?? DEFAULT_KPIS;
  const series = useMemo(() => chartSeries(dossier, token), [dossier, token]);
  const [active, setActive] = useState(series[0]?.key ?? "");
  const explorer = explorerHref(dossier, site);
  const llama = dossier.pulled?.metrics.find((metric) => metric.source_url.includes("defillama"))?.source_url ?? dossier.sources.find((source) => source.url.includes("defillama"))?.url;
  return (
    <section className="card-metrics">
      <div className="card-metric-grid">
        {keys.slice(0, 4).map((key) => {
          const value = dossier.kpis[key];
          const href = value !== null ? kpiHref(dossier, key, site) ?? undefined : undefined;
          return (
            <MetricTile
              key={key}
              label={KPI_LABEL[key]}
              value={formatKpi(key, value)}
              sub={value === null ? "not read" : `${key.includes("24h") ? "24h · " : ""}${KPI_SOURCE[key]}`}
              href={href}
            />
          );
        })}
      </div>
      {series.length > 0 ? <GrowthChart series={series} window={window} active={active} onChange={setActive} /> : <p className="card-empty">No snapshots yet.</p>}
      <div className="card-source-line">
        {dossier.card.top10Share !== null && explorer ? <a href={explorer}>Top 10 hold {(dossier.card.top10Share * 100).toFixed(1)}%</a> : null}
        <a href={dexScreenerSearchUrl(dossier.symbol ?? dossier.name)} target="_blank" rel="noreferrer"><Icon name="ext" /> DexScreener</a>
        {llama ? <a href={llama} target="_blank" rel="noreferrer"><Icon name="ext" /> DefiLlama</a> : null}
        {explorer ? <a href={explorer} target="_blank" rel="noreferrer"><Icon name="ext" /> Explorer</a> : null}
      </div>
    </section>
  );
}

function PeopleColumn({ dossier }: Pick<NameCardProps, "dossier">) {
  const items = [
    ...dossier.feed.map((item) => ({
      key: `feed-${item.id}`,
      date: item.date,
      text: item.title,
      who: item.account ?? (item.kind === "onchain" ? "on-chain" : "project"),
      href: item.sourceUrl ?? `/n/${dossier.slug}?tab=sources`,
      link: item.kind === "company" || item.kind === "ct" ? "post" : "read",
    })),
    ...dossier.changelog.map((item, index) => ({
      key: `change-${index}-${item.date}`,
      date: item.date,
      text: readerText(item.title),
      who: "Icarus",
      href: `/n/${dossier.slug}?tab=commentary`,
      link: "read",
    })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);
  return (
    <section>
      <div className="card-column-title">
        <h2><Icon name="msg" /> What people are saying</h2>
        <Link to="/feed" search={{ name: dossier.slug } as never}>All →</Link>
      </div>
      {items.length > 0 ? (
        <div className="card-people">
          {items.map((item) => (
            <article key={item.key}>
              <p>{item.text}</p>
              <small>{item.who} · {dateLabel(item.date)} · <a href={item.href}>{item.link}</a></small>
            </article>
          ))}
        </div>
      ) : <p className="card-empty">Nothing published yet.</p>}
    </section>
  );
}

function RelatedTable({ dossier, section, related }: Pick<NameCardProps, "dossier" | "section" | "related">) {
  if (!section || related.length === 0) return null;
  const keys = SECTION_KPIS[section.id] ?? DEFAULT_KPIS;
  const token = section.id === "tokens";
  return (
    <section className="card-block">
      <div className="card-block-head">
        <h2>Related · {section.label.toLowerCase()} on Robinhood Chain</h2>
        <span>{related.length} names · sorted by {KPI_LABEL[keys[0]!]} · <Link to="/" hash={section.id}>all →</Link></span>
      </div>
      <DataTable className="card-related-table">
        <table>
          <thead><tr><th>Name</th>{keys.slice(0, 4).map((key) => <th key={key}>{KPI_LABEL[key]}</th>)}<th>{token ? "Launchpad" : "Control"}</th></tr></thead>
          <tbody>
            {related.map((entry) => (
              <tr key={entry.slug} className={entry.slug === dossier.slug ? "is-current" : undefined}>
                <td><Link to="/n/$slug" params={{ slug: entry.slug }}><span className={`card-dot ${entry.officialConfirmed ? "official" : "unclaimed"}`} />{entry.name}</Link></td>
                {keys.slice(0, 4).map((key) => (
                  <td key={key}>{entry.kpis[key] !== null && entry.sourceLinks[key] ? <a href={entry.sourceLinks[key]} target="_blank" rel="noreferrer">{formatKpi(key, entry.kpis[key])}</a> : "—"}</td>
                ))}
                <td>{token ? (entry.launchpad ? <Link to="/n/$slug" params={{ slug: entry.launchpad }}>{titleCase(entry.launchpad)}</Link> : "—") : entry.score !== null ? <Link to="/n/$slug" params={{ slug: entry.slug }} search={{}}>{entry.score}/100</Link> : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
      <div className="card-legend"><span><i className="card-dot official" />Official</span><span><i className="card-dot unclaimed" />Unclaimed</span></div>
    </section>
  );
}

function evidenceLabel(kind: EvidenceClass, risk: boolean): string {
  if (risk) return kind === "verified" ? "Risk · checked on chain" : "Risk · from the evidence";
  if (kind === "verified") return "Checked on chain";
  if (kind === "claim") return "From the project";
  if (kind === "inference") return "From the evidence";
  if (kind === "disputed") return "Disputed";
  return "Open";
}

function SourceRefs({ ids }: { ids?: string[] }) {
  if (!ids?.length) return null;
  return <>{ids.map((id) => <sup key={id}><Link from="/n/$slug" search={{ tab: "sources" }} hash={`source-${id}`} resetScroll={false}>{id.replace(/^S/, "")}</Link></sup>)}</>;
}

function Commentary({ dossier }: Pick<NameCardProps, "dossier">) {
  const findings = [
    ...dossier.findings.risk.map((finding) => ({ finding, risk: true })),
    ...dossier.findings.positive.map((finding) => ({ finding, risk: false })),
  ];
  return (
    <div className="card-commentary">
      {findings.map(({ finding, risk }, index) => (
        <article key={`${risk ? "risk" : "positive"}-${index}`}>
          <h3 className={risk ? "is-risk" : undefined}>{evidenceLabel(finding.class, risk)}</h3>
          <p>{readerText(finding.text)} <SourceRefs ids={finding.sources} /></p>
        </article>
      ))}
      {dossier.findings.unresolved.map((gap, index) => <article key={`unresolved-${index}`}><h3>Disputed</h3><p>{readerText(gap.text)}</p></article>)}
      {dossier.findings.missing.map((gap, index) => <article key={`missing-${index}`}><h3>Open</h3><p>{readerText(gap.text)}</p></article>)}
      {findings.length + dossier.findings.unresolved.length + dossier.findings.missing.length === 0 ? <p className="card-empty">No commentary yet.</p> : null}
    </div>
  );
}

function Sources({ dossier }: Pick<NameCardProps, "dossier">) {
  if (dossier.sources.length === 0) return <p className="card-empty">No sources on file yet.</p>;
  return (
    <ol className="card-sources">
      {dossier.sources.map((source) => (
        <li key={source.id} id={`source-${source.id}`}>
          <span>{source.id}</span>
          <div>
            <div><strong>{source.publisher}</strong><time>{source.accessed_at.slice(0, 10)}</time><a href={source.url} target="_blank" rel="noreferrer">{hostLabel(source.url)} <Icon name="ext" /></a></div>
            <p>{readerText(source.claim)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CardTabs({ dossier, site, tab }: Pick<NameCardProps, "dossier" | "site" | "tab">) {
  const tabs: Array<{ id: DossierTab; label: string }> = [
    { id: "commentary", label: "Commentary" },
    { id: "contracts", label: dossier.deployments.length ? `Contracts · ${dossier.deployments.length}` : "Contracts" },
    { id: "sources", label: dossier.sources.length ? `Sources · ${dossier.sources.length}` : "Sources" },
  ];
  return (
    <section className="card-block card-tab-block">
      <nav className="card-tabs" aria-label="Name details">
        {tabs.map((item) => <Link key={item.id} from="/n/$slug" search={item.id === "commentary" ? {} : { tab: item.id }} resetScroll={false} className={tab === item.id ? "on" : undefined}>{item.label}</Link>)}
      </nav>
      <div className="card-tab-panel">
        {tab === "commentary" ? <Commentary dossier={dossier} /> : null}
        {tab === "contracts" ? (dossier.deployments.length > 0 ? <DeploymentGrid deployments={dossier.deployments} explorerBase={site.chain.explorer} /> : <p className="card-empty">No contracts located yet.</p>) : null}
        {tab === "sources" ? <Sources dossier={dossier} /> : null}
      </div>
    </section>
  );
}

export function NameCard(props: NameCardProps) {
  const [window, setWindow] = useState<ChartWindow>("7d");
  const token = props.section?.id === "tokens";
  return (
    <article className="card-page">
      <PageMeta title={`${props.dossier.name} · Icarus`} description={props.dossier.summary} />
      <div className="card-back-row">
        <Link to="/" hash={props.section?.id}>← {props.section?.label ?? "All names"}</Link>
      </div>
      <div className="name-card">
        <CardHeader {...props} token={token} window={window} onWindow={setWindow} />
        <SummaryPanel dossier={props.dossier} site={props.site} />
        <div className="card-columns">
          <OfficialAndStructure dossier={props.dossier} site={props.site} token={token} />
          <MetricsAndChart dossier={props.dossier} site={props.site} section={props.section} token={token} window={window} />
          <PeopleColumn dossier={props.dossier} />
        </div>
        <RelatedTable dossier={props.dossier} section={props.section} related={props.related} />
        <CardTabs dossier={props.dossier} site={props.site} tab={props.tab} />
      </div>
    </article>
  );
}
