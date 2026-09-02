import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import rawContent from "virtual:proofline-content";
import { parseResearchMarkdown, renderWholeMarkdown } from "./markdown";
import { headlineMetric } from "./types";
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
  LatestFeedItem,
  Link,
  Metric,
  PeerRef,
  PulledFile,
  Rank,
  Research,
  Review,
  SectionDef,
  SiteConfig,
  SourceEntry,
  TreeRef,
} from "./types";

// schema/taxonomy.json — the one taxonomy. Sections in home order; leaves keyed by "domain/leaf".
type TaxonomyFile = {
  sections: Array<SectionDef & { domains: string[]; leaves?: string[] }>;
  leaves: Record<string, { label: string }>;
};

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
};

type SourcesFile = { slug: string; sources: SourceEntry[] };
type FeedFile = { slug: string; items: Dossier["feed"] };
// The subset of census.yaml the site reads: the official handle and the desk's taxonomy
// placement per slug (schema/census.schema.json).
type CensusEntry = { slug: string; handle?: string; role?: "subject" | "observe"; tree?: { primary?: string; secondary?: string[] } };

type DerivedFile = {
  generated_at: string;
  methodology_version: string;
  projects: Record<string, Record<string, unknown>>;
  trending: string[];
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
  treeBySlug: Record<string, TreeRef>;
  generatedAt: string;
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
  const sections: SectionDef[] = taxonomy.sections.map(({ id, label, description }) => ({ id, label, description }));

  // tree.primary ("launch/bonding-curve") -> { domain, leaf, label, sectionId }: the home sections,
  // the dossier eyebrow and the peer set all key off this placement.
  const treeBySlug: Record<string, TreeRef> = {};
  const roleBySlug: Record<string, "subject" | "observe"> = {};
  for (const row of census) {
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
    };
  });

  return {
    site,
    sections,
    dossiers: directorySortKey(dossiers),
    dependencies,
    changelog: changelogAll,
    treeBySlug,
    generatedAt: derivedFile.generated_at,
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

// Home shows only the newest 5 — the full firehose lives on /feed (IA brief: declutter home).
const LATEST_FEED_COUNT = 5;
const LATEST_FEED_BODY_MAX = 240;

function toDirectoryEntry(d: Dossier, treeBySlug: Record<string, TreeRef>): DirectoryEntry {
  return {
    slug: d.slug,
    name: d.name,
    symbol: d.symbol,
    category: d.category,
    lifecycle: d.lifecycle,
    coverage: d.coverage,
    role: d.role,
    summary: d.summary,
    derived: d.derived,
    feedCount: d.feed.length,
    tree: treeBySlug[d.slug] ?? null,
    holders: tokenHolders(d.pulled),
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

// --- Server functions ---------------------------------------------------------------

// The directory: the sections in order, one slim entry per name, and the dependency cards as chips.
// No research HTML, no source ledgers, no findings, no feeds.
export const getContent = createServerFn({ method: "GET" }).handler(async (): Promise<DirectoryBundle> => {
  const content = getCachedContent();
  return {
    site: content.site,
    sections: content.sections,
    entries: content.dossiers.map((d) => toDirectoryEntry(d, content.treeBySlug)),
    dependencies: Object.values(content.dependencies)
      .map((c) => ({ id: c.id, name: c.name, kind: c.kind }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    generatedAt: content.generatedAt,
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
