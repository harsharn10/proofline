export const CATEGORIES = [
  "official-rwa",
  "protocol",
  "hybrid",
  "launchpad",
  "pair",
  "infra",
  "culture",
  "watch",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const STATUSES = [
  "official",
  "live",
  "launching",
  "tokenless",
  "upcoming",
] as const;

export type Status = (typeof STATUSES)[number];

export const HEATS = ["hot", "warm", "core", "watch"] as const;
export type Heat = (typeof HEATS)[number];

export const FEED_KINDS = ["company", "ct", "onchain", "risk"] as const;
export type FeedKind = (typeof FEED_KINDS)[number];

export type Link = {
  label: string;
  href: string;
};

export type Contract = {
  label: string;
  address: string;
};

export type FeedItem = {
  id: string;
  date: string;
  kind: FeedKind;
  title: string;
  body: string;
  source?: string;
  sourceUrl?: string;
};

export type NameRecord = {
  slug: string;
  ticker: string;
  project: string;
  category: Category;
  status: Status;
  heat: Heat;
  oneLiner: string;
  overview: string;
  rwaHook: string;
  thesis: string;
  mechanics: string;
  risks: string;
  collisions?: string;
  contracts: Contract[];
  links: Link[];
  xQuery: string;
  feed: FeedItem[];
  added: string;
  updated: string;
};

export const CATEGORY_LABEL: Record<Category, string> = {
  "official-rwa": "Official RWA",
  protocol: "Protocol",
  hybrid: "Hybrid / NFT",
  launchpad: "Launchpad",
  pair: "Meme × RWA pair",
  infra: "Infra",
  culture: "Culture",
  watch: "Watch",
};

export const STATUS_LABEL: Record<Status, string> = {
  official: "Official",
  live: "Live",
  launching: "Launching",
  tokenless: "No token",
  upcoming: "Not launched",
};

export const HEAT_LABEL: Record<Heat, string> = {
  hot: "Hot on CT",
  warm: "Warm",
  core: "Core file",
  watch: "Watch",
};

export const FEED_LABEL: Record<FeedKind, string> = {
  company: "Company",
  ct: "What people are saying",
  onchain: "On-chain",
  risk: "Risk",
};
