import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import { parseResearchMarkdown, renderWholeMarkdown } from "./markdown";
import type {
  AccountEntry,
  AccountRef,
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
  Research,
  Review,
  SiteConfig,
  SourceEntry,
} from "./types";

// Repo layout (docs/superpowers/specs/2026-08-30-content-system-design.md §4):
//   proofline/content/...   proofline/build/derived.json   proofline/site/  (this app)
// Dev runs with cwd at site/; a root-level CI build may run with cwd at the repo root.
function repoRoot(): string {
  const cwd = process.cwd();
  return cwd.endsWith(`${path.sep}site`) ? path.resolve(cwd, "..") : cwd;
}

function parseYamlFile<T>(filePath: string): T {
  return YAML.parse(fs.readFileSync(filePath, "utf8")) as T;
}

function parseJsonFile<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

// loadContent() builds the whole bundle in one pass for every server function — a missing
// or unparsable per-slug file must never throw, or one bad slug takes down the directory
// and every dossier page. Missing → fallback silently (feed files are legitimately
// optional). Present-but-unparsable → warn server-side naming the file, then fall back the
// same as missing.
function readYamlOrWarn<T>(filePath: string, slug: string, fallback: T): T {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return parseYamlFile<T>(filePath);
  } catch (err) {
    console.warn(
      `[content-server] ${slug}: failed to parse ${filePath} — ${err instanceof Error ? err.message : String(err)}`,
    );
    return fallback;
  }
}

function readResearchOrWarn(filePath: string, slug: string): Research {
  if (!fs.existsSync(filePath)) return { sections: [] };
  try {
    return parseResearchMarkdown(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    console.warn(
      `[content-server] ${slug}: failed to parse ${filePath} — ${err instanceof Error ? err.message : String(err)}`,
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
// The subset of census.yaml the site reads: the official handle per slug (schema/census.schema.json).
type CensusEntry = { slug: string; handle?: string };

type DerivedFile = {
  generated_at: string;
  methodology_version: string;
  projects: Record<string, Record<string, unknown>>;
  trending: string[];
};

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
      factorPercents: { security: null, engineering: null, transparency: null, maturity: null, economic: null },
      trending: false,
      trendingAccounts: [],
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
    factorPercents: (raw.factorPercents as Derived["factorPercents"]) ?? {
      security: null,
      engineering: null,
      transparency: null,
      maturity: null,
      economic: null,
    },
    trending: Boolean(raw.trending),
    trendingAccounts: Array.isArray(raw.trendingAccounts)
      ? raw.trendingAccounts.filter((h): h is string => typeof h === "string")
      : [],
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
  dossiers: Dossier[];
  dependencies: Record<string, DependencyCard>;
  changelog: ChangelogEntry[];
  accounts: AccountEntry[];
  handleBySlug: Record<string, string>;
  generatedAt: string;
};

function loadContent(): ServerContent {
  const root = repoRoot();
  const contentDir = path.join(root, "content");
  const buildDir = path.join(root, "build");

  const site = parseYamlFile<SiteConfig>(path.join(contentDir, "site.yaml"));
  const changelogAll = parseYamlFile<ChangelogEntry[]>(path.join(contentDir, "changelog.yaml"));
  const accounts = parseYamlFile<AccountEntry[]>(path.join(contentDir, "accounts.yaml"));
  const census = parseYamlFile<CensusEntry[]>(path.join(contentDir, "census.yaml"));
  const derivedFile = parseJsonFile<DerivedFile>(path.join(buildDir, "derived.json"));

  const handleBySlug: Record<string, string> = {};
  for (const row of census) if (row.handle) handleBySlug[row.slug] = row.handle;

  const dependencies: Record<string, DependencyCard> = {};
  for (const file of fs.readdirSync(path.join(contentDir, "dependencies")).filter((f) => f.endsWith(".yaml"))) {
    const card = parseYamlFile<DependencyCard>(path.join(contentDir, "dependencies", file));
    dependencies[card.id] = card;
  }

  const projectFiles = fs.readdirSync(path.join(contentDir, "projects")).filter((f) => f.endsWith(".yaml"));
  const dossiers: Dossier[] = projectFiles.map((file) => {
    const slug = file.replace(/\.yaml$/, "");
    const project = parseYamlFile<ProjectFile>(path.join(contentDir, "projects", file));
    const sourcesFile = readYamlOrWarn<SourcesFile>(path.join(contentDir, "sources", `${slug}.yaml`), slug, {
      slug,
      sources: [],
    });
    const research = readResearchOrWarn(path.join(contentDir, "research", `${slug}.md`), slug);
    const feedPath = path.join(contentDir, "feed", `${slug}.yaml`);
    const feedFile = readYamlOrWarn<FeedFile | null>(feedPath, slug, null);
    const feed = feedFile ? [...feedFile.items].sort((a, b) => b.date.localeCompare(a.date)) : [];
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
      derived: pickDerived(derivedFile.projects[slug], slug, project.coverage),
    };
  });

  return {
    site,
    dossiers: directorySortKey(dossiers),
    dependencies,
    changelog: changelogAll,
    accounts,
    handleBySlug,
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

const LATEST_FEED_COUNT = 10;
const LATEST_FEED_BODY_MAX = 240;

function toDirectoryEntry(d: Dossier, handleBySlug: Record<string, string>): DirectoryEntry {
  return {
    slug: d.slug,
    name: d.name,
    symbol: d.symbol,
    category: d.category,
    lifecycle: d.lifecycle,
    coverage: d.coverage,
    summary: d.summary,
    derived: d.derived,
    handle: handleBySlug[d.slug] ?? null,
    feedCount: d.feed.length,
    reviewedAt: d.review.reviewed_at,
  };
}

function latestFeed(dossiers: Dossier[]): LatestFeedItem[] {
  return dossiers
    .flatMap((d) => d.feed.map((item) => ({ name: { slug: d.slug, symbol: d.symbol, name: d.name }, item })))
    .sort((a, b) => b.item.date.localeCompare(a.item.date))
    .slice(0, LATEST_FEED_COUNT)
    .map(({ name, item }) => ({
      name,
      item: {
        ...item,
        body: item.body.length > LATEST_FEED_BODY_MAX ? `${item.body.slice(0, LATEST_FEED_BODY_MAX - 1).trimEnd()}…` : item.body,
      },
    }));
}

function toDependencyRef(card: DependencyCard): DependencyRef {
  return { id: card.id, name: card.name, kind: card.kind, summary: card.summary, deployments: card.deployments };
}

// Handle, tier and role for the accounts a feed cites — never `note`.
function accountRefs(feed: Dossier["feed"], accounts: AccountEntry[]): AccountRef[] {
  const cited = new Set(feed.map((item) => item.account).filter((h): h is string => Boolean(h)));
  return accounts
    .filter((a) => cited.has(a.handle))
    .map((a) => ({ handle: a.handle, tier: a.tier, role: a.role ?? null }));
}

// --- Server functions ---------------------------------------------------------------

// The directory: one slim entry per name plus the newest feed items across every name. No research
// HTML, no source ledgers, no findings, no full feeds (final review I6).
export const getContent = createServerFn({ method: "GET" }).handler(async (): Promise<DirectoryBundle> => {
  const content = getCachedContent();
  return {
    site: content.site,
    entries: content.dossiers.map((d) => toDirectoryEntry(d, content.handleBySlug)),
    latestFeed: latestFeed(content.dossiers),
    generatedAt: content.generatedAt,
    counts: {
      dependencyCards: Object.keys(content.dependencies).length,
      sourcedClaims:
        content.dossiers.reduce((n, d) => n + d.sources.length, 0) +
        Object.values(content.dependencies).reduce((n, c) => n + c.sources.length, 0),
    },
  };
});

// One dossier, the cards it references (label/link only — /d/$id carries the rest), and handle/tier/role
// for the accounts its feed cites. `dossier` is null for an unknown slug so the route can 404.
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
    return {
      dossier,
      site: content.site,
      dependencies,
      accounts: dossier ? accountRefs(dossier.feed, content.accounts) : [],
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
  const root = repoRoot();
  const raw = fs.readFileSync(path.join(root, "content", "methodology.md"), "utf8");
  return {
    html: renderWholeMarkdown(raw),
    methodologyVersion: content.site.methodology_version,
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
    trendingCount: content.dossiers.filter((d) => d.derived.trending).length,
    corrections: content.site.corrections,
    chainId: content.site.chain.id,
  };
});
