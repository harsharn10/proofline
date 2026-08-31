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

export type Deployment = {
  label: string;
  chain: Chain;
  address: string; // 0x…, base58, or the sentinel "not-verified"
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

export type ChangelogType = "score" | "risk" | "stage" | "finding" | "correction" | "coverage";
export type ChangelogSeverity = "Info" | "Review" | "Material" | "Risk";

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
  methodology_version: string;
};

export type RiskLevel = "Low" | "Moderate" | "Elevated" | "High" | "Critical";
export type OverrideLevel = "Critical" | "High" | "Elevated";

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
  factorPercents: {
    security: number | null;
    engineering: number | null;
    transparency: number | null;
    maturity: number | null;
    economic: number | null;
  };
  trending: boolean;
};

export type Dossier = {
  slug: string;
  name: string;
  symbol: string | null;
  category: string;
  lifecycle: Lifecycle;
  coverage: Coverage;
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
  kind: "issuer-asset" | "dex" | "perp-venue" | "oracle" | "stablecoin";
  summary: string;
  controls: DependencyControl[];
  failure_modes: DependencyFailureMode[];
  deployments?: Deployment[];
  sources: SourceEntry[];
};

export type AccountTier = "top" | "watch";
export type AccountEntry = { handle: string; name?: string; tier: AccountTier; note?: string };

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

export type ContentBundle = {
  site: SiteConfig;
  dossiers: Dossier[];
  dependencies: Record<string, DependencyCard>;
  changelog: ChangelogEntry[];
  accounts: AccountEntry[];
};

// --- Labels -----------------------------------------------------------------

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
  company: "Company",
  ct: "What people are saying",
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

export function evidenceTone(evidenceClass: EvidenceClass): Tone {
  switch (evidenceClass) {
    case "verified":
      return "live";
    case "disputed":
      return "warn";
    case "unknown":
      return "muted";
    case "claim":
    case "inference":
    default:
      return "default";
  }
}

// --- Small link builders -------------------------------------------------------

export function xProfileUrl(handle: string): string {
  return `https://x.com/${handle.replace(/^@/, "")}`;
}

export function xSearchUrl(query: string): string {
  return `https://x.com/search?q=${encodeURIComponent(query)}&src=typed_query&f=live`;
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
