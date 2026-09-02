// Types mirror the content-system schemas in ../../../schema/*.json — see
// docs/superpowers/specs/2026-08-30-content-system-design.md §5. The site never invents a
// shape the schema doesn't already describe, and it never types uncappedScore /
// uncappedConfidence (site contract, README "Site contract").

export type LinkKind =
  | "site"
  | "app"
  | "docs"
  | "whitepaper"
  | "x"
  | "github"
  | "telegram"
  | "discord"
  | "other";

export type Link = { kind: LinkKind; url: string };

export type Chain =
  | "robinhood-chain"
  | "arbitrum-one"
  | "ethereum"
  | "base"
  | "solana"
  | "hyperliquid"
  | "other";

export type DeploymentRole =
  | "token"
  | "factory"
  | "router"
  | "vault"
  | "proxy"
  | "implementation"
  | "admin"
  | "multisig"
  | "timelock"
  | "other";

// The address sentinel for a deployment whose address has not been located yet (schema/shared.schema.json).
export const NOT_VERIFIED = "not-verified";

export type Deployment = {
  label: string;
  chain: Chain;
  address: string; // 0x…, base58, or the sentinel NOT_VERIFIED
  issuer?: string;
  ticker?: string;
  role: DeploymentRole;
  verified: boolean;
  sources: string[];
};

export type EvidenceClass = "verified" | "claim" | "inference" | "disputed" | "unknown";

export type Finding = { text: string; class: EvidenceClass; sources?: string[] };
export type Gap = { text: string };

export type Findings = {
  positive: Finding[];
  risk: Finding[];
  missing: Gap[];
  unresolved: Gap[];
};

export type Lifecycle = "mainnet" | "beta" | "announced" | "inactive" | "testnet-only";
export type Coverage = "full" | "stub";
// census.yaml `role`: a subject is researched and may be scored; an observe row is the watchlist —
// listed for completeness, never ranked or scored (it fails a qualifying test).
export type CensusRole = "subject" | "observe";

export type Review = {
  researcher: string;
  approver: string; // an id, or the literal string "pending"
  methodology_version: string;
  reviewed_at: string;
  published_at: string | null;
};

export type ResearchSection = { heading: string; html: string };
export type Research = { sections: ResearchSection[] };

export type FeedKind = "company" | "ct" | "onchain" | "risk";

export type FeedItem = {
  id: string;
  date: string;
  kind: FeedKind;
  title: string;
  body: string;
  account?: string; // "@handle"
  sourceUrl?: string;
  sources?: string[];
};

export type SourceEntry = {
  id: string;
  url: string;
  publisher: string;
  kind:
    | "official-site"
    | "docs"
    | "whitepaper"
    | "social"
    | "explorer"
    | "repository"
    | "audit"
    | "announcement"
    | "third-party-data"
    | "news"
    | "other";
  accessed_at: string;
  claim: string;
  excerpt: string;
  hash: string | null;
  archive_url: string | null;
  researcher: string;
  available: boolean;
};

// Machine-read chain facts from content/pulled/<slug>.yaml (scripts/pull.mjs; schema/pulled.schema.json).
// Dated, never hand-edited. The site renders them as-is and never recomputes ownership from them.
export type PulledAddress = {
  address: string;
  label: string | null;
  role: DeploymentRole | null;
  is_contract: boolean | null;
  source_verified: boolean | null;
  contract_name: string | null;
  proxy: { type: "eip1967" | "none" | "unknown"; implementation: string | null; admin: string | null };
  owner: string | null;
  owner_type: "eoa" | "contract" | "safe" | "unknown" | "none";
  safe: { threshold: number | null; signers: string[] | null } | null;
  created_block: number | null;
  created_at: string | null;
  holders: number | null;
  errors: Array<{ step: string; message: string }>;
};
export type PulledFile = {
  slug: string;
  pulled_at: string;
  chain: "robinhood-chain";
  addresses: PulledAddress[];
  metrics: Array<{ kind: MetricKind; value: number; as_of: string; source_url: string }>;
  errors: Array<{ step: string; message: string }>;
};

export type ChangelogType = "score" | "risk" | "stage" | "finding" | "correction" | "coverage";
export type ChangelogSeverity = "Info" | "Review" | "Material" | "Risk";
export type ChannelEvent =
  | "new-coverage"
  | "research-update"
  | "risk-alert"
  | "correction"
  | "breaking"
  | "trending"
  | "roundup";
export type ChannelDelivery = "immediate" | "same-day" | "roundup";

export type ChannelPublication = {
  event: ChannelEvent;
  delivery: ChannelDelivery;
  headline: string;
  summary: string;
  why_it_matters?: string[];
  watch_next?: string;
};

// `unknown` fails createServerFn's serializable-return check, so prior/new are typed as a
// concrete JSON value rather than Record<string, unknown> (changelog.schema.json just says
// "object", free-form — e.g. { score: 64, risk: Elevated }).
export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

export type ChangelogEntry = {
  date: string;
  slug: string;
  type: ChangelogType;
  severity: ChangelogSeverity;
  title: string;
  detail: string;
  prior: Record<string, JsonValue> | null;
  new: Record<string, JsonValue> | null;
  reviewer: string;
  channel?: ChannelPublication;
  methodology_version: string;
};

export type RiskLevel = "Low" | "Moderate" | "Elevated" | "High" | "Critical";
export type OverrideLevel = "Critical" | "High" | "Elevated";

// --- Metrics & ranks (Task A: `metrics[]` on project files, `rank` in derived.json) ---

export type MetricKind = "tvl" | "volume_24h" | "fees_24h" | "revenue_24h" | "market_cap" | "holders";

// A reported figure from projects/<slug>.yaml `metrics[]` — always claim-class, always sourced.
export type Metric = {
  kind: MetricKind;
  value: number;
  currency?: "USD"; // absent for `holders`
  as_of: string;
  class: "claim";
  sources: string[];
  // Set when the figure came from content/pulled (scripts/pull.mjs) rather than the project file: the
  // receipt is the URL the puller read, not a ledger id.
  source_url?: string;
};

// Cohort rank from derived.json: position within the reader-facing section of the project's tree
// leaf, computed on one basis kind (scripts/lib/score.mjs computeRanks). `cohort` is the plural
// section label ("launchpads"). Never renders without its basis in words.
export type Rank = { basis: MetricKind; position: number; of: number; cohort: string };

// Exactly the fields the site contract permits from build/derived.json. Never add
// uncappedScore / uncappedConfidence / securityRaw here — see README "Site contract".
export type Derived = {
  slug: string;
  coverage: Coverage;
  score: number | null;
  provisional: boolean;
  label: string | null;
  confidence: number | null;
  risk: RiskLevel | null;
  override: { level: OverrideLevel; reason: string } | null;
  trending: boolean;
  // The counting accounts behind `trending` (scripts/lib/trending.mjs), computed by `npm run score` —
  // the site renders this list and never recomputes it from tiers or feed dates.
  trendingAccounts: string[];
  // Reported figures + category rank (Task A) — both in the site contract. Every metric renders
  // with a `reported` chip and its as-of; a rank never renders without its basis spelled out.
  metrics: Metric[];
  rank: Rank | null;
};

// Taxonomy placement from census.yaml `tree.primary` ("launch/bonding-curve"), resolved server-side
// against schema/taxonomy.json: the leaf's plain-English label and the reader-facing section it
// files under. The site never keeps its own label table.
export type TreeRef = { domain: string; leaf: string; label: string; sectionId: string | null };

// One reader-facing section (schema/taxonomy.json `sections`). Order is the home-page order; ids
// are the home anchors (`/#launchpads`).
export type SectionDef = { id: string; label: string; description: string };

// What the directory (`/`) and the changelog need per name — no findings, research, sources or feed
// bodies (final review I6: the full bundle was 561 KB at 49 names and grows with every record).
export type DirectoryEntry = {
  slug: string;
  name: string;
  symbol: string | null;
  category: string;
  lifecycle: Lifecycle;
  coverage: Coverage;
  role: CensusRole;
  summary: string;
  derived: Derived;
  feedCount: number;
  // census tree.primary placement — the home page's section grouping and the card's product label.
  tree: TreeRef | null;
  // Holder count of the project's token contract from content/pulled, when read. Chip figure of last resort.
  holders: number | null;
};

// A dependency card as the home page lists it: enough to label and link the chip.
export type DependencyListing = { id: string; name: string; kind: DependencyCard["kind"] };

// One row of the home page's "latest in the feed" strip: the item plus just enough of its name to link.
export type LatestFeedItem = {
  name: { slug: string; symbol: string | null; name: string };
  item: FeedItem;
};

export type Dossier = {
  slug: string;
  name: string;
  symbol: string | null;
  category: string;
  lifecycle: Lifecycle;
  coverage: Coverage;
  role: CensusRole;
  summary: string;
  links: Link[];
  dependencies: string[]; // ids into the top-level `dependencies` map
  deployments: Deployment[];
  findings: Findings;
  review: Review;
  research: Research;
  feed: FeedItem[];
  sources: SourceEntry[];
  changelog: ChangelogEntry[];
  derived: Derived;
  pulled: PulledFile | null;
};

export type DependencyControl = {
  power: string;
  holder: string;
  note: string;
  class: EvidenceClass;
  sources: string[];
};

export type DependencyFailureMode = { text: string; class: EvidenceClass; sources: string[] };

export type DependencyCard = {
  id: string;
  name: string;
  // Mirrors schema/dependency.schema.json's `kind` enum exactly — DEPENDENCY_KIND_LABEL below is a
  // Record over this union, so adding a kind to the schema without adding it here fails typecheck.
  kind:
    | "issuer-asset"
    | "dex"
    | "perp-venue"
    | "oracle"
    | "stablecoin"
    | "lending"
    | "yield"
    | "bridge"
    | "infra"
    | "nft-marketplace"
    | "locker"
    | "aggregator";
  summary: string;
  controls: DependencyControl[];
  failure_modes: DependencyFailureMode[];
  deployments?: Deployment[];
  sources: SourceEntry[];
};

// The slice of a dependency card a dossier page carries for the cards it references — enough to
// label and link the chip. Controls, failure modes and sources live on /d/$id (getDependency).
export type DependencyRef = Pick<DependencyCard, "id" | "name" | "kind" | "summary" | "deployments">;

// Mirrors schema/accounts.schema.json's `tier` and `role` enums exactly. Only `top` (with role alpha/kol)
// counts toward trending (scripts/lib/trending.mjs); the site never derives trending sources from tiers —
// it renders Derived.trendingAccounts. `watch`, `downweight` and `skip` must never be treated as sources.
export type AccountTier = "top" | "watch" | "downweight" | "skip";
export type AccountRole = "project" | "alpha" | "kol" | "data" | "infra" | "media";
// The full accounts.yaml row, read server-side only. `note` is a maintainer's working note about an
// account and never leaves the server (final review I6): pages get AccountRef.
export type AccountEntry = {
  handle: string;
  name?: string;
  tier: AccountTier;
  role?: AccountRole;
  slug?: string;
  followers?: number;
  note?: string;
};
export type AccountRef = { handle: string; tier: AccountTier; role: AccountRole | null };

export type SiteConfig = {
  name: string;
  tagline: string;
  methodology_version: string;
  maintainer: { id: string; display: string };
  corrections: { destination: string; acknowledge_within_days: number };
  telegram: { enabled: boolean; weekly_heartbeat: boolean };
  chain: {
    name: string;
    id: number;
    stack: string;
    gas: string;
    mainnet_date: string;
    explorer: string;
    docs: string;
    checked: string | null;
  };
  trending: { min_accounts: number; window_days: number };
  disclaimer: string;
};

// What getContent() ships to the directory: the sections in order, one slim entry per name, and
// the dependency cards as chips. No feed, no ledger counts.
export type DirectoryBundle = {
  site: SiteConfig;
  sections: SectionDef[];
  entries: DirectoryEntry[];
  dependencies: DependencyListing[];
  generatedAt: string; // build/derived.json generated_at — when scores were last computed
};

// A "competes with" card on a dossier's Overview tab: same tree leaf first (direct), then same
// domain (adjacent). Summary arrives pre-truncated; metric is the peer's headline figure.
export type PeerRef = {
  slug: string;
  name: string;
  symbol: string | null;
  summary: string;
  lifecycle: Lifecycle;
  coverage: Coverage;
  role: CensusRole;
  direct: boolean;
  leafLabel: string;
  metric: Metric | null;
};

// What getDossier(slug) ships: the dossier, the cards it references, its peers (full records only)
// and its taxonomy placement with the section it files under.
export type DossierBundle = {
  dossier: Dossier;
  site: SiteConfig;
  dependencies: Record<string, DependencyRef>;
  peers: PeerRef[];
  tree: TreeRef | null;
  section: SectionDef | null;
};

// --- Visitor-facing taxonomy ------------------------------------------------------------
// Sections and leaf labels come from schema/taxonomy.json via the server (TreeRef, SectionDef).
// Nothing here duplicates that table.

export const METRIC_KIND_LABEL: Record<MetricKind, string> = {
  tvl: "TVL",
  volume_24h: "24h volume",
  fees_24h: "24h fees",
  revenue_24h: "24h revenue",
  market_cap: "market cap",
  holders: "holders",
};

// Basis wording for rank lines — always "reported", never bare (hard rule: ranks name their basis).
export const RANK_BASIS_LABEL: Record<MetricKind, string> = {
  tvl: "reported TVL",
  volume_24h: "reported 24h volume",
  fees_24h: "reported 24h fees",
  revenue_24h: "reported 24h revenue",
  market_cap: "reported market cap",
  holders: "reported holders",
};

// "#1 of 2 launchpads by reported 24h fees" — the only way a rank ever renders. The cohort noun
// arrives with the rank from derived.json; the site never recomputes it.
export function rankLine(rank: Rank): string {
  return `#${rank.position} of ${rank.of} ${rank.cohort} by ${RANK_BASIS_LABEL[rank.basis]}`;
}

// "$86.5M" / "$4.7M" / "56,062" (holders take no $). Mono display everywhere it renders.
export function formatMetricValue(metric: Pick<Metric, "kind" | "value">): string {
  if (metric.kind === "holders") return metric.value.toLocaleString("en-US");
  const v = metric.value;
  if (v >= 1e12) return `$${(v / 1e12).toFixed(1)}T`;
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `$${(v / 1e3).toFixed(0)}K`;
  return `$${v.toLocaleString("en-US")}`;
}

// The one figure a row or card leads with: the rank basis when ranked, else the first
// reported kind in display priority. Null when nothing is reported.
const HEADLINE_PRIORITY: MetricKind[] = ["tvl", "volume_24h", "fees_24h", "revenue_24h", "market_cap", "holders"];

export function headlineMetric(derived: Pick<Derived, "metrics" | "rank">): Metric | null {
  if (derived.rank) {
    const basis = derived.metrics.find((m) => m.kind === derived.rank!.basis);
    if (basis) return basis;
  }
  for (const kind of HEADLINE_PRIORITY) {
    const m = derived.metrics.find((x) => x.kind === kind);
    if (m) return m;
  }
  return null;
}

// Title-attr caveat for a reported figure (hard rule: every reported number carries its
// as-of); the visible `reported` chip sits next to the value.
export function reportedTitle(asOf: string): string {
  return `as of ${asOf} — reported by the source, not verified by Proofline`;
}

// --- Labels -----------------------------------------------------------------

// Coverage states in reader words (docs/taxonomy.md §2 display mapping). A watchlist row shows
// "Watchlist" in place of its coverage word.
export const COVERAGE_LABEL: Record<Coverage, string> = {
  full: "Full research",
  stub: "Initial research",
};
export function coverageWord(coverage: Coverage, role: CensusRole): string {
  return role === "observe" ? "Watchlist" : COVERAGE_LABEL[coverage];
}

// Evidence classes in reader words; defined on /methodology.
export const EVIDENCE_LABEL: Record<EvidenceClass, string> = {
  verified: "verified on-chain",
  claim: "project claim",
  inference: "inference",
  disputed: "disputed",
  unknown: "unknown",
};

export const LIFECYCLE_LABEL: Record<Lifecycle, string> = {
  mainnet: "Mainnet",
  beta: "Beta",
  announced: "Announced",
  inactive: "Inactive",
  "testnet-only": "Testnet only",
};

export const CHAIN_LABEL: Record<Chain, string> = {
  "robinhood-chain": "Robinhood Chain",
  "arbitrum-one": "Arbitrum One",
  ethereum: "Ethereum",
  base: "Base",
  solana: "Solana",
  hyperliquid: "Hyperliquid",
  other: "Other chain",
};

export const DEPENDENCY_KIND_LABEL: Record<DependencyCard["kind"], string> = {
  "issuer-asset": "Issuer asset",
  dex: "DEX",
  "perp-venue": "Perp venue",
  oracle: "Oracle",
  stablecoin: "Stablecoin",
  lending: "Lending",
  yield: "Yield",
  bridge: "Bridge",
  infra: "Infra",
  "nft-marketplace": "NFT marketplace",
  locker: "Locker",
  aggregator: "Aggregator",
};

export const LINK_KIND_LABEL: Record<LinkKind, string> = {
  site: "Site",
  app: "App",
  docs: "Docs",
  whitepaper: "Whitepaper",
  x: "X",
  github: "GitHub",
  telegram: "Telegram",
  discord: "Discord",
  other: "Link",
};

export const FEED_LABEL: Record<FeedKind, string> = {
  company: "Project",
  ct: "Commentary",
  onchain: "On-chain",
  risk: "Risk",
};

// --- Tone helpers -------------------------------------------------------------

export type Tone = "default" | "live" | "warn" | "risk" | "muted";

export function lifecycleTone(lifecycle: Lifecycle): Tone {
  switch (lifecycle) {
    case "mainnet":
      return "live";
    case "beta":
    case "announced":
      return "warn";
    case "inactive":
    case "testnet-only":
      return "muted";
    default:
      return "default";
  }
}

export function riskTone(risk: RiskLevel | null): Tone {
  switch (risk) {
    case "Elevated":
      return "warn";
    case "High":
    case "Critical":
      return "risk";
    case "Low":
    case "Moderate":
    default:
      return "default";
  }
}

// --- Small link builders -------------------------------------------------------

export function xProfileUrl(handle: string): string {
  return `https://x.com/${handle.replace(/^@/, "")}`;
}

export function dexScreenerSearchUrl(query: string): string {
  return `https://dexscreener.com/search?q=${encodeURIComponent(query)}`;
}

export function explorerTokenUrl(explorerBase: string, address: string): string {
  return `${explorerBase.replace(/\/$/, "")}/token/${address}`;
}

export function correctionsLink(destination: string): { label: string; href: string | null } {
  if (destination === "TODO") return { label: "Corrections contact: pending", href: null };
  if (destination.includes("@")) return { label: "Submit a correction", href: `mailto:${destination}` };
  if (destination.startsWith("http")) return { label: "Submit a correction", href: destination };
  return { label: destination, href: null };
}
