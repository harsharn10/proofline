import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import { parseResearchMarkdown, renderWholeMarkdown } from "./markdown";
import type {
  AccountEntry,
  ChangelogEntry,
  ContentBundle,
  Deployment,
  DependencyCard,
  Dossier,
  Findings,
  Derived,
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

// loadContent() builds the whole bundle in one pass for both getContent() and
// getDossier() — a missing or unparsable per-slug file must never throw, or one bad
// slug takes down the directory and every dossier page. Missing → fallback silently
// (feed files are legitimately optional). Present-but-unparsable → warn server-side
// naming the file, then fall back the same as missing.
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

function loadContent(): ContentBundle {
  const root = repoRoot();
  const contentDir = path.join(root, "content");
  const buildDir = path.join(root, "build");

  const site = parseYamlFile<SiteConfig>(path.join(contentDir, "site.yaml"));
  const changelogAll = parseYamlFile<ChangelogEntry[]>(path.join(contentDir, "changelog.yaml"));
  const accounts = parseYamlFile<AccountEntry[]>(path.join(contentDir, "accounts.yaml"));
  const derivedFile = parseJsonFile<DerivedFile>(path.join(buildDir, "derived.json"));

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
    generatedAt: derivedFile.generated_at,
  };
}

let cachedContent: ContentBundle | null = null;

function getCachedContent(): ContentBundle {
  if (process.env.NODE_ENV === "production" && cachedContent) return cachedContent;
  const content = loadContent();
  if (process.env.NODE_ENV === "production") cachedContent = content;
  return content;
}

export const getContent = createServerFn({ method: "GET" }).handler(async () => {
  return getCachedContent();
});

export const getDossier = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const content = getCachedContent();
    const dossier = content.dossiers.find((d) => d.slug === slug) ?? null;
    return {
      dossier,
      site: content.site,
      dependencies: content.dependencies,
      accounts: content.accounts,
    };
  });

export const getDependency = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    const content = getCachedContent();
    return {
      dependency: content.dependencies[id] ?? null,
      site: content.site,
    };
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
