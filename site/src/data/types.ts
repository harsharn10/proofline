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
export type PulledPair = {
  dex: string;
  pair_address: string;
  quote_symbol: string | null;
  price_usd: number | null;
  liquidity_usd: number | null;
  volume_h24: number | null;
  volume_h6: number | null;
  txns_h24: { buys: number; sells: number };
  price_change_h24: number | null;
  market_cap: number | null;
  fdv: number | null;
  created_at: string | null;
};
// DexScreener read for the project's token (scripts/lib/pull/dexscreener.mjs).
export type PulledMarket = {
  token_address: string | null;
  pulled_at: string;
  pairs: PulledPair[];
  liquidity_usd: number | null;
  volume_h24: number | null;
  trades_h24: number | null;
  price_usd: number | null;
  price_change_h24: number | null;
  market_cap_usd: number | null;
  fdv_usd: number | null;
  fdv: number | null;
  first_pair_at: string | null;
  // Share of circulating supply (total supply less burned) held by the ten largest live holders.
  // Burn addresses leave both the numerator and the denominator; burned_share reports them instead.
  top10_share: number | null;
  // Same, over the ten largest holders that are also not a pair, a vault or locker, or a pool
  // contract — including the Uniswap v4 PoolManager singleton, which holds v4 liquidity under its
  // own address and so never appears among the pairs.
  top10_share_ex_pools: number | null;
  // Absent on files written before the field existed, so optional as well as nullable.
  burned_share?: number | null;
  top10_as_of: string | null;
  // shared: true (via "shared-factory") means the creator is infrastructure many projects deploy
  // through: render it as "via Doppler (LONG)", never as "launched by LONG".
  launchpad: {
    slug: string;
    via: "factory" | "creator" | "shared-factory";
    address: string;
    shared?: boolean;
  } | null;
  errors: Array<{ step: string; message: string }>;
};
export type PulledStructure = {
  pulled_at: string;
  mint: "owner-can-mint" | "no-mint-function" | "unknown";
  renounced: boolean | null;
  // locked_share 0 means "read, and nothing is locked"; null means the read could not tell, and
  // `reason` says why. Never render a null as zero.
  lp: Array<{
    pair: string | null;
    locked_share: number | null;
    holder_kind: "burn" | "locker" | "burn-and-locker" | "none" | null;
    reason: string | null;
  }>;
  errors: Array<{ step: string; message: string }>;
};
// Blockscout activity read per address (scripts/lib/pull/activity.mjs).
export type PulledActivity = {
  pulled_at: string;
  addresses: Array<{
    address: string;
    label: string | null;
    role: string | null;
    transactions_count: number | null;
    token_transfers_count: number | null;
    last_tx_at: string | null;
    last_method: string | null;
    txns_24h: number | null;
    launches_24h: number | null;
    errors: Array<{ step: string; message: string }>;
  }>;
  last_activity_at: string | null;
  txns_24h: number | null;
  launches_24h: number | null;
};
export type PulledFile = {
  slug: string;
  pulled_at: string;
  chain: "robinhood-chain";
  addresses: PulledAddress[];
  metrics: Array<{ kind: MetricKind; value: number; as_of: string; source_url: string }>;
  market?: PulledMarket | null;
  structure?: PulledStructure | null;
  activity?: PulledActivity | null;
  errors: Array<{ step: string; message: string }>;
};

// Activity status, computed server-side from the pulled reads (never asserted by a person):
// live = on-chain activity or trades inside 7 days; quiet = inside 30 days; dormant = older;
// announced = nothing located on chain; testnet = lifecycle testnet-only.
export type ActivityStatus = "live" | "quiet" | "dormant" | "announced" | "testnet";

// The tracker numbers a card and a profile show. Every figure is a dated read from a named free
// source (DexScreener, Blockscout, DefiLlama); null means not read, never zero.
export type Kpis = {
  status: ActivityStatus;
  lastActivityAt: string | null;
  liquidityUsd: number | null;
  volume24h: number | null;
  trades24h: number | null;
  priceChange24h: number | null;
  marketCap: number | null;
  fdv: number | null;
  holders: number | null;
  holdersDelta7d: number | null;
  launches24h: number | null;
  txnsTotal: number | null;
  firstPairAt: string | null;
  tvl: number | null;
  readAt: string | null;
};
export type KpiKey = Exclude<keyof Kpis, "status" | "lastActivityAt" | "firstPairAt" | "readAt">;

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
  entityKind: "protocol" | "application" | "token" | "infrastructure" | "tool" | "collection" | "unknown";
  identityStatus: "verified" | "provisional" | "conflicted";
  officialConfirmed: boolean;
  hasContractOn4663: boolean;
  shareBarMetric: "liquidity" | "tvl";
  summary: string;
  tldr: string | null;
  officialLinks: Link[];
  announcementAt: string;
  announcementUrl: string | null;
  sourceLinks: { market: string; holders: string | null };
  dependencyIds: string[];
  reviewedAt: string;
  derived: Derived;
  feedCount: number;
  // census tree.primary placement — the home page's section grouping and the card's product label.
  tree: TreeRef | null;
  // Holder count of the project's token contract from content/pulled, when read. Chip figure of last resort.
  holders: number | null;
  kpis: Kpis;
  factoryLaunches24h: number;
};

export type HistoryPoint = {
  at: string;
  market_cap?: number | null;
  holders?: number | null;
  liquidity_usd?: number | null;
  volume_h24?: number | null;
  trades_h24?: number | null;
  txns_total?: number | null;
  launches_24h?: number | null;
  revenue_24h?: number | null;
  tvl?: number | null;
};

export type TrendingEntry = { entry: DirectoryEntry; change24h: number | null };
export type SectionLeader = { entry: DirectoryEntry; announced: boolean };
// A dependency card as the home page lists it: enough to label and link the chip.
export type DependencyListing = { id: string; name: string; kind: DependencyCard["kind"] };

// One row of the home page's "latest in the feed" strip: the item plus just enough of its name to link.
export type LatestFeedItem = {
  name: { slug: string; symbol: string | null; name: string };
  item: FeedItem;
};

export type WireKind = "announcement" | "talk" | "onchain" | "note";
export type WireItem = {
  id: string;
  kind: WireKind;
  headline: string;
  gist: string;
  url: string;
  slug: string;
  name: { slug: string; symbol: string | null; name: string };
  account?: string;
  at: string;
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
  tldr: string | null;
  whyPeopleCare: string[];
  risks: string[];
  links: Link[];
  dependencies: string[]; // ids into the top-level `dependencies` map
  deployments: Deployment[];
  findings: Findings;
  review: Review;
  research: Research;
  feed: FeedItem[];
  wire: WireItem[];
  sources: SourceEntry[];
  changelog: ChangelogEntry[];
  derived: Derived;
  pulled: PulledFile | null;
  kpis: Kpis;
  // Card-only facts normalized by content-server. These stay deliberately narrow so future
  // puller/compiler fields can land without shipping raw files or guessing in the browser.
  card: {
    officialConfirmed: boolean;
    handle: string | null;
    themes: string[];
    history: Array<{
      at: string;
      holders: number | null;
      volume24h: number | null;
      trades24h: number | null;
      launches24h: number | null;
      revenue24h: number | null;
    }>;
    dailySeries: Record<string, Array<{ at: string; value: number }>>;
    top10Share: number | null;
    top10ShareExPools: number | null;
    burnedShare: number | null;
    launchpad: { slug: string; via: "factory" | "creator"; address: string } | null;
    mint: "owner-can-mint" | "no-mint-function" | "unknown" | null;
    liquidityLocks: Array<{
      pair: string | null;
      lockedShare: number | null;
      holderKind: "burn" | "locker" | "burn-and-locker" | "none" | null;
      reason: string | null;
    }>;
  };
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
  title: string;
  tagline: string;
  methodology_version: string;
  maintainer: { id: string; display: string };
  corrections: { destination: string; acknowledge_within_days: number };
  telegram: { enabled: boolean; weekly_heartbeat: boolean; url: string };
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
  // The whole wire, built once on the server. Home, /feed and each category slice it; nothing
  // rebuilds it per render.
  wire: WireItem[];
  histories: Record<string, HistoryPoint[]>;
  changelog: ChangelogEntry[];
  feed: LatestFeedItem[];
  dependencies: DependencyListing[];
  generatedAt: string; // build/derived.json generated_at — when scores were last computed
  now: number; // build time (ms epoch) for relative "2 min ago" wording
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
  now: number;
  related: Array<{
    slug: string;
    name: string;
    symbol: string | null;
    kpis: Kpis;
    score: number | null;
    officialConfirmed: boolean;
    launchpad: string | null;
    sourceLinks: Partial<Record<KpiKey, string>>;
  }>;
};

// --- Visitor-facing taxonomy ------------------------------------------------------------
// Sections and leaf labels come from schema/taxonomy.json via the server (TreeRef, SectionDef).
// Nothing here duplicates that table.

// Which tracker numbers a section ranks and shows, in order (first key ranks). Chosen per section:
// a launchpad is judged by volume and launches, a token by liquidity, credit by TVL.
export const SECTION_KPIS: Record<string, KpiKey[]> = {
  launchpads: ["volume24h", "launches24h", "liquidityUsd", "holders"],
  // Market cap sits second so it reaches the card's four tiles and the Related table's four columns
  // (README §4) while liquidity, the first key, stays the ranking basis for the section.
  tokens: ["liquidityUsd", "marketCap", "volume24h", "holders", "priceChange24h"],
  trading: ["volume24h", "liquidityUsd", "trades24h", "holders"],
  credit: ["tvl", "volume24h", "holders", "liquidityUsd"],
  yield: ["tvl", "volume24h", "holders", "liquidityUsd"],
  "rwa-products": ["tvl", "liquidityUsd", "volume24h", "holders"],
  agents: ["trades24h", "volume24h", "holders", "liquidityUsd"],
  "nft-treasuries": ["holders", "volume24h", "liquidityUsd", "trades24h"],
  markets: ["volume24h", "tvl", "liquidityUsd", "holders"],
  tooling: ["txnsTotal", "holders", "volume24h", "liquidityUsd"],
};
export const DEFAULT_KPIS: KpiKey[] = ["volume24h", "liquidityUsd", "holders", "trades24h"];

export const KPI_LABEL: Record<KpiKey, string> = {
  liquidityUsd: "liquidity",
  volume24h: "vol 24h",
  trades24h: "trades 24h",
  priceChange24h: "24h",
  marketCap: "market cap",
  fdv: "FDV",
  holders: "holders",
  holdersDelta7d: "holders 7d",
  launches24h: "launches 24h",
  txnsTotal: "txns",
  tvl: "TVL",
};
export const KPI_SOURCE: Record<KpiKey, string> = {
  liquidityUsd: "DexScreener, all pools",
  volume24h: "DexScreener, all pools",
  trades24h: "DexScreener, buys plus sells",
  priceChange24h: "DexScreener, deepest pool",
  marketCap: "DexScreener, all pools",
  fdv: "DexScreener, deepest pool",
  holders: "Blockscout holder count",
  holdersDelta7d: "Blockscout holder count, change over 7 days of snapshots",
  launches24h: "Blockscout, launch transactions to the factory in 24h",
  txnsTotal: "Blockscout transaction count",
  tvl: "DefiLlama, Robinhood Chain slice",
};

// README rule 2: a dash means "not read", never zero. DexScreener answers 0 for a token whose
// supply it cannot price, so 0 and non-finite values are unread wherever a market figure renders —
// in the figure itself and in the decision to label it "FDV".
export function readFigure(value: number | null | undefined): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}

// The one-sentence what-it-is a row prints: the name's own TL;DR, or the first sentence of its
// research summary when the packet never wrote one. Empty only when there is no summary either.
export function tldrLine(entry: { tldr: string | null; summary: string }): string {
  if (entry.tldr) return entry.tldr;
  const summary = entry.summary.trim();
  if (!summary) return "";
  const match = /^(.+?[.!?])(?:\s|$)/.exec(summary);
  return (match?.[1] ?? summary).slice(0, 200);
}

// "$52.2M" / "$4.9K" / "$310" — mono everywhere it renders.
export function formatUsd(v: number): string {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e4) return `$${(v / 1e3).toFixed(0)}K`;
  if (v >= 1e3) return `$${(v / 1e3).toFixed(1)}K`;
  return `$${Math.round(v).toLocaleString("en-US")}`;
}
export function formatCount(v: number): string {
  if (v >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e4) return `${(v / 1e3).toFixed(0)}K`;
  return Math.round(v).toLocaleString("en-US");
}
export function formatKpi(key: KpiKey, v: number | null): string {
  if (v === null || Number.isNaN(v)) return "—";
  switch (key) {
    case "liquidityUsd":
    case "volume24h":
    case "marketCap":
    case "fdv":
    case "tvl":
      return formatUsd(v);
    case "priceChange24h":
      return `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;
    case "holdersDelta7d":
      return `${v > 0 ? "+" : ""}${formatCount(v)}`;
    default:
      return formatCount(v);
  }
}
// "2 min ago" / "3 h ago" / "5 d ago" relative to build time.
export function relativeTime(iso: string, now: number): string {
  const ms = now - new Date(iso).getTime();
  if (!Number.isFinite(ms) || ms < 0) return "just now";
  const m = Math.floor(ms / 60000);
  if (m < 60) return `${Math.max(1, m)} min ago`;
  const h = Math.floor(m / 60);
  if (h < 48) return `${h} h ago`;
  const d = Math.floor(h / 24);
  if (d < 60) return `${d} d ago`;
  return `${Math.floor(d / 30)} mo ago`;
}
export const STATUS_LABEL: Record<ActivityStatus, string> = {
  live: "Live",
  quiet: "Quiet",
  dormant: "Dormant",
  announced: "Announced",
  testnet: "Testnet",
};
export function statusTone(status: ActivityStatus): Tone {
  switch (status) {
    case "live":
      return "live";
    case "quiet":
      return "warn";
    case "dormant":
      return "risk";
    default:
      return "muted";
  }
}

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
  return `as of ${asOf} — reported by the source, not verified by Icarus`;
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
  company: "Announcements",
  ct: "Talk",
  onchain: "On-chain",
  risk: "Icarus notes",
};

export const WIRE_LABEL: Record<WireKind, string> = {
  announcement: "Announcements",
  talk: "Talk",
  onchain: "On-chain",
  note: "Icarus notes",
};
// Chip order, and the whitelist /feed validates `?kind=` against.
export const WIRE_KINDS = ["announcement", "talk", "onchain", "note"] as const;
export function isWireKind(value: unknown): value is WireKind {
  return typeof value === "string" && (WIRE_KINDS as readonly string[]).includes(value);
}

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
