import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import rawContent from "virtual:proofline-content";
import { parseResearchMarkdown, renderWholeMarkdown } from "./markdown";
import {
  DEFAULT_KPIS,
  SECTION_KPIS,
  dexScreenerSearchUrl,
  explorerTokenUrl,
  headlineMetric,
} from "./types";
// Shared with scripts/score.mjs so site and Telegram eligibility cannot drift.
// @ts-expect-error The repository-level helper is intentionally plain ESM.
import { meetsShareBar as meetsShareBarCore } from "../../../scripts/lib/share-bar.mjs";
import type {
  ChangelogEntry,
  Deployment,
  DependencyCard,
  DependencyRef,
  DirectoryBundle,
  DirectoryEntry,
  Dossier,
  DossierBundle,
  Findings,
  Derived,
  HistoryPoint,
  Kpis,
  LatestIcarusItem,
  LatestFeedItem,
  Link,
  Metric,
  PeerRef,
  PulledFile,
  Rank,
  Research,
  Review,
  SectionDef,
  SectionLeader,
  SiteConfig,
  SourceEntry,
  TreeRef,
  TrendingEntry,
} from "./types";

// schema/taxonomy.json — the one taxonomy. Sections in home order; leaves keyed by "domain/leaf".
type TaxonomyFile = {
  sections: Array<SectionDef & { domains: string[]; leaves?: string[] }>;
  leaves: Record<string, { label: string }>;
};

// `vite.config.ts` predates the optional daily backfills. Keeping this glob here confines the
// compatibility bridge to the card bundle; a missing directory simply produces an empty object.
const rawCardSeries = typeof import.meta.glob === "function"
  ? import.meta.glob("../../../content/pulled/series/*.json", {
      eager: true,
      query: "?raw",
      import: "default",
    }) as Record<string, string>
  : {};

function parseYaml<T>(raw: string): T {
  return YAML.parse(raw) as T;
}

function parseJson<T>(raw: string): T {
  return JSON.parse(raw) as T;
}

// loadContent() builds the whole bundle in one pass for every server function — a missing
// or unparsable per-slug file must never throw, or one bad slug takes down the directory
// and every dossier page. Missing → fallback silently (feed files are legitimately
// optional). Present-but-unparsable → warn server-side naming the file, then fall back the
// same as missing.
function readYamlOrWarn<T>(raw: string | undefined, label: string, slug: string, fallback: T): T {
  if (raw === undefined) return fallback;
  try {
    return parseYaml<T>(raw);
  } catch (err) {
    console.warn(
      `[content-server] ${slug}: failed to parse ${label} — ${err instanceof Error ? err.message : String(err)}`,
    );
    return fallback;
  }
}

function readResearchOrWarn(raw: string | undefined, slug: string): Research {
  if (raw === undefined) return { sections: [] };
  try {
    return parseResearchMarkdown(raw);
  } catch (err) {
    console.warn(
      `[content-server] ${slug}: failed to parse research/${slug}.md — ${err instanceof Error ? err.message : String(err)}`,
    );
    return { sections: [] };
  }
}

// --- project.yaml (the subset the site reads; see schema/project.schema.json) ----------

type ProjectFile = {
  slug: string;
  name: string;
  symbol: string | null;
  category: string;
  lifecycle: Dossier["lifecycle"];
  coverage: Dossier["coverage"];
  summary: string;
  official_links: Link[];
  dependencies: string[];
  deployments: Deployment[];
  review: Review;
  findings: Findings;
  themes?: string[];
};

type SourcesFile = { slug: string; sources: SourceEntry[] };
type FeedFile = { slug: string; items: Dossier["feed"] };
// The subset of census.yaml the site reads: the official handle and the desk's taxonomy
// placement per slug (schema/census.schema.json).
type CensusEntry = {
  slug: string;
  handle?: string;
  role?: "subject" | "observe";
  identity: { entity_kind: DirectoryEntry["entityKind"]; status: DirectoryEntry["identityStatus"] };
  tree?: { primary?: string; secondary?: string[] };
  flags?: Array<string | { type?: string }>;
};

type PulledCardFields = {
  market?: {
    top10_share?: number | null;
    launchpad?: { slug: string; via: "factory" | "creator"; address: string } | null;
  } | null;
  structure?: {
    mint?: "owner-can-mint" | "no-mint-function" | "unknown";
    lp?: Array<{
      pair: string | null;
      locked_share: number | null;
      holder_kind: "burn" | "locker" | "burn-and-locker" | "none" | null;
      reason: string | null;
    }>;
  } | null;
};

type DerivedFile = {
  generated_at: string;
  methodology_version: string;
  projects: Record<string, Record<string, unknown>>;
  trending: string[];
  shareBar?: Record<string, boolean>;
};

// derived.json values pass through these narrow gates so a malformed emitter row degrades to
// "nothing reported" rather than rendering garbage numbers.
function sanitizeMetrics(raw: unknown): Metric[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (m): m is Metric =>
      !!m &&
      typeof m === "object" &&
      typeof (m as Metric).kind === "string" &&
      typeof (m as Metric).value === "number" &&
      typeof (m as Metric).as_of === "string",
  );
}

function sanitizeRank(raw: unknown): Rank | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Rank;
  return typeof r.basis === "string" && typeof r.position === "number" && typeof r.of === "number" && typeof r.cohort === "string"
    ? r
    : null;
}

// Site contract (README "Site contract"): pick exactly the fields the site may render.
// Never widen this to spread the raw derived.json entry — that would let
// uncappedScore/uncappedConfidence/securityRaw leak into the site.
function pickDerived(raw: Record<string, unknown> | undefined, slug: string, coverage: Dossier["coverage"]): Derived {
  if (!raw) {
    return {
      slug,
      coverage,
      score: null,
      provisional: false,
      label: "Research pending / insufficient evidence",
      confidence: null,
      risk: null,
      override: null,
      trending: false,
      trendingAccounts: [],
      metrics: [],
      rank: null,
    };
  }
  return {
    slug,
    coverage,
    score: (raw.score as number | null) ?? null,
    provisional: Boolean(raw.provisional),
    label: (raw.label as string | null) ?? null,
    confidence: (raw.confidence as number | null) ?? null,
    risk: (raw.risk as Derived["risk"]) ?? null,
    override: (raw.override as Derived["override"]) ?? null,
    trending: Boolean(raw.trending),
    trendingAccounts: Array.isArray(raw.trendingAccounts)
      ? raw.trendingAccounts.filter((h): h is string => typeof h === "string")
      : [],
    metrics: sanitizeMetrics(raw.metrics),
    rank: sanitizeRank(raw.rank),
  };
}

function directorySortKey(dossiers: Dossier[]): Dossier[] {
  // Directory sort (task-3 brief): trending first, then coverage:full by score desc,
  // then stubs by review.reviewed_at desc.
  return [...dossiers].sort((a, b) => {
    if (a.derived.trending !== b.derived.trending) return a.derived.trending ? -1 : 1;
    if (a.coverage === "full" && b.coverage === "full") {
      return (b.derived.score ?? -1) - (a.derived.score ?? -1);
    }
    if (a.coverage !== b.coverage) return a.coverage === "full" ? -1 : 1;
    return b.review.reviewed_at.localeCompare(a.review.reviewed_at);
  });
}

// Everything the server knows, held in memory. Server functions below ship slices of it — never the
// whole thing — so page payloads stay small and account notes never reach a browser.
type ServerContent = {
  site: SiteConfig;
  sections: SectionDef[];
  dossiers: Dossier[];
  dependencies: Record<string, DependencyCard>;
  changelog: ChangelogEntry[];
  censusBySlug: Map<string, CensusEntry>;
  treeBySlug: Record<string, TreeRef>;
  histories: Record<string, HistoryPoint[]>;
  generatedAt: string;
  now: number;
};

// Resolve "launch/bonding-curve" against the taxonomy: label from the leaf table, section by leaf
// override first (Tokens), then by domain. Unknown leaf -> null (validate rejects it upstream).
function resolveTree(primary: string | undefined, taxonomy: TaxonomyFile): TreeRef | null {
  if (typeof primary !== "string" || !primary.includes("/")) return null;
  const leafDef = taxonomy.leaves[primary];
  if (!leafDef) return null;
  const [domain, ...leafParts] = primary.split("/");
  const section =
    taxonomy.sections.find((s) => (s.leaves ?? []).includes(primary)) ??
    taxonomy.sections.find((s) => s.domains.includes(domain!)) ??
    null;
  return { domain: domain!, leaf: leafParts.join("/"), label: leafDef.label, sectionId: section?.id ?? null };
}

function loadContent(): ServerContent {
  const site = parseYaml<SiteConfig>(rawContent.site);
  const changelogAll = Object.entries(rawContent.changelog).flatMap(([file, raw]) =>
    readYamlOrWarn<ChangelogEntry[]>(raw, `changelog/${file}`, file.replace(/\.yaml$/, ""), []),
  );
  const census = parseYaml<CensusEntry[]>(rawContent.census);
  const derivedFile = parseJson<DerivedFile>(rawContent.derived);
  const taxonomy = parseJson<TaxonomyFile>(rawContent.taxonomy);
  const buildNow = Date.now();
  const sections: SectionDef[] = taxonomy.sections.map(({ id, label, description }) => ({ id, label, description }));

  // tree.primary ("launch/bonding-curve") -> { domain, leaf, label, sectionId }: the home sections,
  // the dossier eyebrow and the peer set all key off this placement.
  const treeBySlug: Record<string, TreeRef> = {};
  const roleBySlug: Record<string, "subject" | "observe"> = {};
  const censusBySlug = new Map(census.map((row) => [row.slug, row]));
  for (const row of census) {
    censusBySlug.set(row.slug, row);
    const tree = resolveTree(row.tree?.primary, taxonomy);
    if (tree) treeBySlug[row.slug] = tree;
    roleBySlug[row.slug] = row.role === "observe" ? "observe" : "subject";
  }

  const dependencies: Record<string, DependencyCard> = {};
  for (const raw of Object.values(rawContent.dependencies)) {
    const card = parseYaml<DependencyCard>(raw);
    dependencies[card.id] = card;
  }

  const dossiers: Dossier[] = Object.entries(rawContent.projects).map(([file, raw]) => {
    const slug = file.replace(/\.yaml$/, "");
    const project = parseYaml<ProjectFile>(raw);
    const sourcesFile = readYamlOrWarn<SourcesFile>(
      rawContent.sources[`${slug}.yaml`],
      `sources/${slug}.yaml`,
      slug,
      { slug, sources: [] },
    );
    const research = readResearchOrWarn(rawContent.research[`${slug}.md`], slug);
    const feedFile = readYamlOrWarn<FeedFile | null>(
      rawContent.feed[`${slug}.yaml`],
      `feed/${slug}.yaml`,
      slug,
      null,
    );
    const feed = feedFile ? [...feedFile.items].sort((a, b) => b.date.localeCompare(a.date)) : [];
    const pulled = readYamlOrWarn<PulledFile | null>(rawContent.pulled[`${slug}.yaml`], `pulled/${slug}.yaml`, slug, null);
    const history = parseHistory(rawContent.pulledHistory[`${slug}.jsonl`]);
    const seriesPath = Object.keys(rawCardSeries).find((path) => path.endsWith(`/${slug}.json`));
    const dailySeries = parseDailySeries(seriesPath ? rawCardSeries[seriesPath] : undefined);
    const censusRow = censusBySlug.get(slug);
    const pulledCard = pulled as (PulledFile & PulledCardFields) | null;
    const changelog = changelogAll
      .filter((entry) => entry.slug === slug)
      .sort((a, b) => b.date.localeCompare(a.date));

    return {
      slug,
      name: project.name,
      symbol: project.symbol,
      category: project.category,
      lifecycle: project.lifecycle,
      coverage: project.coverage,
      role: roleBySlug[slug] ?? "subject",
      summary: project.summary,
      links: project.official_links,
      dependencies: project.dependencies,
      deployments: project.deployments,
      findings: project.findings,
      review: project.review,
      research,
      feed,
      sources: sourcesFile.sources,
      changelog,
      derived: withPulledMetrics(pickDerived(derivedFile.projects[slug], slug, project.coverage), pulled),
      pulled,
      kpis: kpisFor({ lifecycle: project.lifecycle, deployments: project.deployments }, pulled, history, buildNow),
      card: {
        officialConfirmed: officialSurfaceConfirmed(project.official_links, censusRow),
        handle: censusRow?.handle ?? null,
        themes: Array.isArray(project.themes) ? project.themes.filter((tag) => typeof tag === "string").slice(0, 5) : [],
        history: history.map((point) => ({
          at: point.at,
          holders: point.holders ?? null,
          volume24h: point.volume_h24 ?? null,
          trades24h: point.trades_h24 ?? null,
          launches24h: point.launches_24h ?? null,
          revenue24h: point.revenue_24h ?? null,
        })),
        dailySeries,
        top10Share: pulledCard?.market?.top10_share ?? null,
        launchpad: pulledCard?.market?.launchpad ?? null,
        mint: pulledCard?.structure?.mint ?? null,
        liquidityLocks: (pulledCard?.structure?.lp ?? []).map((row) => ({
          pair: row.pair,
          lockedShare: row.locked_share,
          holderKind: row.holder_kind,
          reason: row.reason,
        })),
      },
    };
  });

  return {
    site,
    sections,
    dossiers: directorySortKey(dossiers),
    dependencies,
    changelog: changelogAll,
    censusBySlug,
    treeBySlug,
    histories: Object.fromEntries(
      Object.keys(rawContent.projects).map((file) => {
        const slug = file.replace(/\.yaml$/, "");
        return [slug, parseHistory(rawContent.pulledHistory[`${slug}.jsonl`])];
      }),
    ),
    generatedAt: derivedFile.generated_at,
    now: buildNow,
  };
}

let cachedContent: ServerContent | null = null;

function getCachedContent(): ServerContent {
  if (process.env.NODE_ENV === "production" && cachedContent) return cachedContent;
  const content = loadContent();
  if (process.env.NODE_ENV === "production") cachedContent = content;
  return content;
}

// --- Slices ------------------------------------------------------------------------

function toDirectoryEntry(
  d: Dossier,
  treeBySlug: Record<string, TreeRef>,
  censusBySlug: Map<string, CensusEntry>,
): DirectoryEntry {
  const tree = treeBySlug[d.slug] ?? null;
  const census = censusBySlug.get(d.slug);
  const officialConfirmed = officialSurfaceConfirmed(d.links, census);
  const hasContractOn4663 =
    d.pulled?.addresses.some((address) => address.is_contract === true) ?? false;
  const factoryLaunches24h =
    d.pulled?.activity?.addresses
      .filter((address) => address.role === "factory")
      .reduce((sum, address) => sum + (address.launches_24h ?? 0), 0) ?? 0;
  return {
    slug: d.slug,
    name: d.name,
    symbol: d.symbol,
    category: d.category,
    lifecycle: d.lifecycle,
    coverage: d.coverage,
    role: d.role,
    entityKind: census?.identity.entity_kind ?? "unknown",
    identityStatus: census?.identity.status ?? "provisional",
    officialConfirmed,
    hasContractOn4663,
    shareBarMetric:
      census?.identity.entity_kind === "token" || tree?.sectionId === "launchpads"
        ? "liquidity"
        : "tvl",
    summary: d.summary,
    officialLinks: d.links,
    dependencyIds: d.dependencies,
    reviewedAt: d.review.reviewed_at,
    derived: d.derived,
    feedCount: d.feed.length,
    tree,
    holders: tokenHolders(d.pulled),
    kpis: d.kpis,
    factoryLaunches24h,
  };
}

// A pulled DefiLlama figure fills in for a metric kind the project file does not carry. Project
// metrics (ledger-cited claims) always win; pulled figures never change a rank, which npm run score
// computes from the project file alone.
function withPulledMetrics(derived: Derived, pulled: PulledFile | null): Derived {
  if (!pulled || pulled.metrics.length === 0) return derived;
  const have = new Set(derived.metrics.map((m) => m.kind));
  const extra: Metric[] = pulled.metrics
    .filter((m) => !have.has(m.kind) && typeof m.value === "number" && m.value > 0)
    .map((m) => ({ kind: m.kind, value: m.value, currency: m.kind === "holders" ? undefined : "USD", as_of: m.as_of.slice(0, 10), class: "claim", sources: [], source_url: m.source_url }));
  return extra.length ? { ...derived, metrics: [...derived.metrics, ...extra] } : derived;
}

const DAY = 86_400_000;

function parseHistory(raw: string | undefined): HistoryPoint[] {
  if (!raw) return [];
  const lines: HistoryPoint[] = [];
  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;
    try {
      const v = JSON.parse(line) as HistoryPoint;
      if (typeof v.at === "string") lines.push(v);
    } catch {
      /* a bad line never breaks the page */
    }
  }
  return lines.sort((a, b) => a.at.localeCompare(b.at));
}

// --- Home and category rules -------------------------------------------------------

export function meetsShareBar(entry: DirectoryEntry): boolean {
  return meetsShareBarCore(entry);
}

export function trendingNow(
  entries: DirectoryEntry[],
  histories: Record<string, HistoryPoint[]>,
): TrendingEntry[] {
  return entries
    .filter(
      (entry) =>
        entry.kpis.status === "live" && meetsShareBar(entry) && entry.kpis.volume24h !== null,
    )
    .sort((a, b) => b.kpis.volume24h! - a.kpis.volume24h! || a.name.localeCompare(b.name))
    .slice(0, 5)
    .map((entry) => {
      const anchor = new Date(
        entry.kpis.readAt ?? histories[entry.slug]?.at(-1)?.at ?? "",
      ).getTime();
      const target = anchor - DAY;
      const prior = (histories[entry.slug] ?? [])
        .filter((point) => {
          const at = new Date(point.at).getTime();
          return Number.isFinite(at) && at < anchor && typeof point.volume_h24 === "number";
        })
        .sort(
          (a, b) =>
            Math.abs(new Date(a.at).getTime() - target) -
            Math.abs(new Date(b.at).getTime() - target),
        )[0];
      const priorValue = prior?.volume_h24;
      const change24h =
        typeof priorValue === "number" && priorValue > 0
          ? ((entry.kpis.volume24h! - priorValue) / priorValue) * 100
          : null;
      return { entry, change24h };
    });
}

export function newLaunches(entries: DirectoryEntry[], now = Date.now()): DirectoryEntry[] {
  return entries
    .filter((entry) => {
      if (!entry.kpis.firstPairAt || !meetsShareBar(entry)) return false;
      const age = now - new Date(entry.kpis.firstPairAt).getTime();
      return age >= 0 && age <= 14 * DAY;
    })
    .sort(
      (a, b) =>
        new Date(b.kpis.firstPairAt!).getTime() - new Date(a.kpis.firstPairAt!).getTime() ||
        a.name.localeCompare(b.name),
    );
}

export function notListedCount(entries: DirectoryEntry[], listed: DirectoryEntry[]): number {
  const factoryLaunches = entries.reduce((sum, entry) => sum + entry.factoryLaunches24h, 0);
  return Math.max(0, factoryLaunches - listed.length);
}

export function announcedNow(entries: DirectoryEntry[]): DirectoryEntry[] {
  return entries
    .filter(
      (entry) =>
        entry.kpis.status === "announced" &&
        entry.officialConfirmed &&
        entry.summary.trim().length > 0,
    )
    .sort((a, b) => b.reviewedAt.localeCompare(a.reviewedAt) || a.name.localeCompare(b.name));
}

export function sectionLeaders(section: SectionDef, entries: DirectoryEntry[]): SectionLeader[] {
  const key = (SECTION_KPIS[section.id] ?? ["volume24h"])[0]!;
  const ranked = entries
    .filter(
      (entry) =>
        entry.tree?.sectionId === section.id && meetsShareBar(entry) && entry.kpis[key] !== null,
    )
    .sort((a, b) => Number(b.kpis[key]) - Number(a.kpis[key]) || a.name.localeCompare(b.name))
    .slice(0, 5)
    .map((entry) => ({ entry, announced: false }));
  if (ranked.length >= 3) return ranked;
  const announced = announcedNow(entries)
    .filter((entry) => entry.tree?.sectionId === section.id)
    .slice(0, 3 - ranked.length)
    .map((entry) => ({ entry, announced: true }));
  return [...ranked, ...announced];
}

export function latestFromIcarus(
  changelog: ChangelogEntry[],
  feed: LatestFeedItem[],
  n = 4,
): LatestIcarusItem[] {
  const updates: LatestIcarusItem[] = changelog.map((entry) => ({
    kind: "icarus",
    date: entry.date,
    slug: entry.slug,
    who: "Icarus",
    title: entry.title,
    body: entry.detail,
    sourceUrl: null,
  }));
  const posts: LatestIcarusItem[] = feed.map(({ name, item }) => ({
    kind: "post",
    date: item.date,
    slug: name.slug,
    who: item.account ?? (item.kind === "onchain" ? "on-chain" : (name.symbol ?? name.name)),
    title: item.title,
    body: item.body,
    sourceUrl: item.sourceUrl ?? null,
  }));
  return [...updates, ...posts]
    .sort(
      (a, b) =>
        b.date.localeCompare(a.date) ||
        a.slug.localeCompare(b.slug) ||
        a.title.localeCompare(b.title),
    )
    .slice(0, Math.max(0, n));
}

function parseDailySeries(raw: string | undefined): Record<string, Array<{ at: string; value: number }>> {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const result: Record<string, Array<{ at: string; value: number }>> = {};
    for (const [key, rows] of Object.entries(parsed)) {
      if (!Array.isArray(rows)) continue;
      const points = rows.flatMap((row) => {
        if (!Array.isArray(row) || row.length < 2 || typeof row[0] !== "string" || typeof row[1] !== "number") return [];
        return [{ at: row[0], value: row[1] }];
      });
      if (points.length > 0) result[key] = points;
    }
    return result;
  } catch {
    return {};
  }
}

function officialSurfaceConfirmed(links: Link[], census: CensusEntry | undefined): boolean {
  const hasOfficialSurface = links.some((link) => link.kind === "site" || link.kind === "docs");
  const flags = (census?.flags ?? []).map((flag) => (typeof flag === "string" ? flag : flag.type ?? ""));
  return hasOfficialSurface && census?.identity.status !== "conflicted" && !flags.includes("unconfirmed-official");
}

// Change over `days`: the latest snapshot against the newest one at least that many days older.
function deltaFrom(history: HistoryPoint[], key: "holders", days: number): number | null {
  if (history.length < 2) return null;
  const latest = history[history.length - 1]!;
  const latestAt = new Date(latest.at).getTime();
  const then = [...history].reverse().find((h) => latestAt - new Date(h.at).getTime() >= days * DAY);
  if (!then) return null;
  const a = latest[key], b = then[key];
  return typeof a === "number" && typeof b === "number" ? a - b : null;
}

// Every tracker number on a card comes from here: DexScreener market read, Blockscout activity read,
// holder counts and their 7-day change from snapshots, DefiLlama TVL. Status is computed from the
// reads, never typed by a person.
function kpisFor(d: { lifecycle: Dossier["lifecycle"]; deployments: Deployment[] }, pulled: PulledFile | null, history: HistoryPoint[], now: number): Kpis {
  const market = pulled?.market ?? null;
  const activity = pulled?.activity ?? null;
  const located = d.deployments.some((x) => x.address !== "not-verified");
  const holders = tokenHolders(pulled);
  const lastActivityAt = activity?.last_activity_at ?? null;
  const tvl = pulled?.metrics.find((m) => m.kind === "tvl")?.value ?? null;
  const trades = market?.trades_h24 ?? null;
  let status: Kpis["status"];
  if (d.lifecycle === "testnet-only") status = "testnet";
  else if (!located && !market?.pairs?.length) status = "announced";
  else {
    const age = lastActivityAt ? now - new Date(lastActivityAt).getTime() : null;
    if ((age !== null && age <= 7 * DAY) || (trades ?? 0) > 0) status = "live";
    else if (age !== null && age <= 30 * DAY) status = "quiet";
    else if (age !== null) status = "dormant";
    else status = located ? "quiet" : "announced";
  }
  return {
    status,
    lastActivityAt,
    liquidityUsd: market?.liquidity_usd ?? null,
    volume24h: market?.volume_h24 ?? null,
    trades24h: trades,
    priceChange24h: market?.price_change_h24 ?? null,
    fdv: market?.fdv ?? null,
    holders,
    holdersDelta7d: deltaFrom(history, "holders", 7),
    launches24h: activity?.launches_24h ?? null,
    txnsTotal: activity ? activity.addresses.reduce((n, a) => n + (a.transactions_count ?? 0), 0) || null : null,
    firstPairAt: market?.first_pair_at ?? null,
    tvl,
    readAt: pulled?.pulled_at ?? null,
  };
}

// The holder count of the project's token contract (role token, else the first address with one).
function tokenHolders(pulled: PulledFile | null): number | null {
  if (!pulled) return null;
  const token = pulled.addresses.find((a) => a.role === "token" && a.holders !== null);
  return token?.holders ?? pulled.addresses.find((a) => a.holders !== null)?.holders ?? null;
}

const PEER_LIMIT = 6;
const PEER_SUMMARY_MAX = 110;

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

// "Competes with" (IA ruling): same tree leaf first (direct), then same domain (adjacent),
// never self; up to 6. Within each bucket, names with reported figures lead, best rank first.
function peersFor(dossier: Dossier, all: Dossier[], treeBySlug: Record<string, TreeRef>): PeerRef[] {
  const tree = treeBySlug[dossier.slug];
  if (!tree) return [];
  const pool = all.filter((d) => d.slug !== dossier.slug && treeBySlug[d.slug]?.domain === tree.domain);
  const order = (a: Dossier, b: Dossier) => {
    const am = headlineMetric(a.derived) ? 0 : 1;
    const bm = headlineMetric(b.derived) ? 0 : 1;
    if (am !== bm) return am - bm;
    const ar = a.derived.rank?.position ?? Number.MAX_SAFE_INTEGER;
    const br = b.derived.rank?.position ?? Number.MAX_SAFE_INTEGER;
    if (ar !== br) return ar - br;
    return a.name.localeCompare(b.name);
  };
  const direct = pool.filter((d) => treeBySlug[d.slug]!.leaf === tree.leaf).sort(order);
  const adjacent = pool.filter((d) => treeBySlug[d.slug]!.leaf !== tree.leaf).sort(order);
  return [...direct, ...adjacent].slice(0, PEER_LIMIT).map((d) => ({
    slug: d.slug,
    name: d.name,
    symbol: d.symbol,
    summary: truncate(d.summary, PEER_SUMMARY_MAX),
    lifecycle: d.lifecycle,
    coverage: d.coverage,
    role: d.role,
    direct: treeBySlug[d.slug]!.leaf === tree.leaf,
    leafLabel: treeBySlug[d.slug]!.label,
    metric: headlineMetric(d.derived),
  }));
}

function toDependencyRef(card: DependencyCard): DependencyRef {
  return { id: card.id, name: card.name, kind: card.kind, summary: card.summary, deployments: card.deployments };
}

function sourceLinksFor(dossier: Dossier, site: SiteConfig): DossierBundle["related"][number]["sourceLinks"] {
  const market = dexScreenerSearchUrl(dossier.symbol ?? dossier.name);
  const address = dossier.pulled?.addresses.find((row) => row.role === "token")?.address ?? dossier.pulled?.addresses[0]?.address;
  const explorer = address ? explorerTokenUrl(site.chain.explorer, address) : undefined;
  const llama = dossier.pulled?.metrics.find((metric) => metric.kind === "tvl")?.source_url;
  return {
    liquidityUsd: market,
    volume24h: market,
    trades24h: market,
    priceChange24h: market,
    fdv: market,
    ...(explorer ? { holders: explorer, holdersDelta7d: explorer, launches24h: explorer, txnsTotal: explorer } : {}),
    ...(llama ? { tvl: llama } : {}),
  };
}

function relatedFor(
  dossier: Dossier,
  all: Dossier[],
  treeBySlug: Record<string, TreeRef>,
  site: SiteConfig,
): DossierBundle["related"] {
  const sectionId = treeBySlug[dossier.slug]?.sectionId;
  if (!sectionId) return [];
  const key = (SECTION_KPIS[sectionId] ?? DEFAULT_KPIS)[0]!;
  return all
    .filter((entry) => treeBySlug[entry.slug]?.sectionId === sectionId)
    .sort((a, b) => {
      const av = a.kpis[key];
      const bv = b.kpis[key];
      if (typeof av === "number" && typeof bv === "number" && av !== bv) return bv - av;
      if ((av === null) !== (bv === null)) return av === null ? 1 : -1;
      return a.name.localeCompare(b.name);
    })
    .map((entry) => ({
      slug: entry.slug,
      name: entry.name,
      symbol: entry.symbol,
      kpis: entry.kpis,
      score: entry.derived.score,
      officialConfirmed: entry.card.officialConfirmed,
      launchpad: entry.card.launchpad?.slug ?? null,
      sourceLinks: sourceLinksFor(entry, site),
    }));
}

// --- Server functions ---------------------------------------------------------------

// The directory: the sections in order, one slim entry per name, and the dependency cards as chips.
// No research HTML, no source ledgers, no findings, no feeds.
export const getContent = createServerFn({ method: "GET" }).handler(async (): Promise<DirectoryBundle> => {
  const content = getCachedContent();
  return {
    site: content.site,
    sections: content.sections,
    entries: content.dossiers.map((d) =>
      toDirectoryEntry(d, content.treeBySlug, content.censusBySlug),
    ),
    histories: content.histories,
    changelog: content.changelog,
    feed: content.dossiers.flatMap((d) =>
      d.feed.map((item) => ({ name: { slug: d.slug, symbol: d.symbol, name: d.name }, item })),
    ),
    dependencies: Object.values(content.dependencies)
      .map((c) => ({ id: c.id, name: c.name, kind: c.kind }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    generatedAt: content.generatedAt,
    now: content.now,
  };
});

// One dossier, the cards it references (label/link only — /d/$id carries the rest), its peers (full
// records only; a stub page has no room for them) and its taxonomy placement. `dossier` is null for
// an unknown slug so the route can 404.
export const getDossier = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Omit<DossierBundle, "dossier"> & { dossier: Dossier | null }> => {
    const content = getCachedContent();
    const dossier = content.dossiers.find((d) => d.slug === slug) ?? null;
    const dependencies: Record<string, DependencyRef> = {};
    for (const id of dossier?.dependencies ?? []) {
      const card = content.dependencies[id];
      if (card) dependencies[id] = toDependencyRef(card);
    }
    const tree = dossier ? (content.treeBySlug[dossier.slug] ?? null) : null;
    return {
      dossier,
      site: content.site,
      dependencies,
      peers: dossier && dossier.coverage === "full" ? peersFor(dossier, content.dossiers, content.treeBySlug) : [],
      tree,
      section: tree?.sectionId ? (content.sections.find((s) => s.id === tree.sectionId) ?? null) : null,
      now: content.now,
      related: dossier ? relatedFor(dossier, content.dossiers, content.treeBySlug, content.site) : [],
    };
  });

// /d/$id loads its own full card here (controls, failure modes, deployments, sources).
export const getDependency = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    const content = getCachedContent();
    return {
      dependency: content.dependencies[id] ?? null,
      site: content.site,
    };
  });

// /changelog: every entry plus just enough of each name to link it.
export const getChangelog = createServerFn({ method: "GET" }).handler(async () => {
  const content = getCachedContent();
  return {
    changelog: content.changelog,
    names: content.dossiers.map((d) => ({ slug: d.slug, symbol: d.symbol, name: d.name })),
  };
});

// /feed — the full cross-name firehose (home keeps only the newest 5): every item with just
// enough of its name to link it. Bodies ship whole; this page is the archive.
export const getFeed = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ items: LatestFeedItem[]; generatedAt: string }> => {
    const content = getCachedContent();
    const items = content.dossiers
      .flatMap((d) => d.feed.map((item) => ({ name: { slug: d.slug, symbol: d.symbol, name: d.name }, item })))
      .sort((a, b) => b.item.date.localeCompare(a.item.date));
    return { items, generatedAt: content.generatedAt };
  },
);

// The whole-file export (header ExportMenu): every full dossier, fetched only when someone clicks
// export — never as part of a page load. Carries no account rows.
export const getExportBundle = createServerFn({ method: "GET" }).handler(async (): Promise<{ dossiers: Dossier[] }> => {
  const content = getCachedContent();
  return { dossiers: content.dossiers };
});

// content/methodology.md is a required top-level file (like site.yaml), so a missing or
// unparsable file throws rather than falling back silently — unlike the per-slug files
// readYamlOrWarn guards, which are legitimately optional.
export const getMethodology = createServerFn({ method: "GET" }).handler(async () => {
  const content = getCachedContent();
  return {
    html: renderWholeMarkdown(rawContent.methodology),
    methodologyVersion: content.site.methodology_version,
    chain: content.site.chain,
    trending: content.site.trending,
  };
});

// Small site-wide slice for the header, which renders outside any route's own loader
// (mounted once in __root.tsx around every page). Backed by getCachedContent(), so this
// costs no extra file I/O beyond the page's own loader call.
export const getSiteMeta = createServerFn({ method: "GET" }).handler(async () => {
  const content = getCachedContent();
  return {
    name: content.site.name,
    tagline: content.site.tagline,
    updated: content.generatedAt,
    namesOnFile: content.dossiers.length,
    corrections: content.site.corrections,
    disclaimer: content.site.disclaimer,
    chainId: content.site.chain.id,
    // Slim rows for the topbar jump-box — search lives in the topbar and goes straight
    // to a dossier, so every page needs the name list (49 tiny rows).
    names: content.dossiers.map((d) => ({ slug: d.slug, symbol: d.symbol, name: d.name })),
  };
});
