import { loadContent } from "./load.mjs";
import { validateAgainst } from "./schemas.mjs";
import { crossCheck, releaseCheck, referencedSourceIds, normalizeUrl } from "./checks.mjs";
import { checkResearch, tagIds } from "./research-md.mjs";
import { derive } from "./score.mjs";
import { voiceWarnings, conductWarnings, vocabularyWarnings } from "./voice.mjs";

/**
 * Runs every check in spec §7 over a content tree.
 * Returns { errors, warnings, content }; `content` is null when the tree could not even be loaded
 * (the single error then names the file that failed to parse).
 */
export async function validateContent(root = "content", { release = false } = {}) {
  const errors = [], warnings = [];
  let content;
  try { content = await loadContent(root); }
  catch (e) { return { errors: [e.message], warnings: [], content: null }; }

  const fail = (file, msgs) => msgs.forEach((m) => errors.push(`${file}: ${m}`));
  fail("site.yaml", validateAgainst("site", content.site));
  fail("census.yaml", validateAgainst("census", content.census));
  fail("changelog.yaml", validateAgainst("changelog", content.changelog));
  for (const [slug, p] of content.projects) fail(`projects/${slug}.yaml`, validateAgainst("project", p));
  for (const [slug, s] of content.sources) fail(`sources/${slug}.yaml`, validateAgainst("sources", s));
  for (const [id, d] of content.dependencies) fail(`dependencies/${id}.yaml`, validateAgainst("dependency", d));
  for (const [slug, f] of content.feed) fail(`feed/${slug}.yaml`, validateAgainst("feed", f));
  fail("accounts.yaml", validateAgainst("accounts", content.accounts));

  const x = crossCheck(content);
  errors.push(...x.errors); warnings.push(...x.warnings);

  if (content.site.corrections?.destination === "TODO") warnings.push("site.yaml: corrections.destination is TODO (blocks --release)");

  // Qualifying tests (spec §5.2): a false value is visible as a warning and blocks --release.
  for (const c of content.census)
    for (const [name, t] of Object.entries(c.qualifying ?? {}))
      if (t?.value === false) (release ? errors : warnings).push(`census: ${c.slug} fails qualifying test ${name}: ${t.note}`);

  for (const [slug, project] of content.projects) {
    const sourceList = content.sources.get(slug)?.sources ?? [];
    const ledgerIds = new Set(sourceList.map((s) => s.id));
    const text = content.research.get(slug);
    const referenced = referencedSourceIds(project);
    if (text !== undefined) {
      fail(`research/${slug}.md`, checkResearch(text, { slug, coverage: project.coverage, ledgerIds }));
      for (const id of tagIds(text)) referenced.add(id);
    }
    // Feed items cite ledger ids too (crossCheck already requires them to exist); count them as citations.
    for (const item of content.feed?.get(slug)?.items ?? []) for (const id of item.sources ?? []) referenced.add(id);
    // A source whose URL is one of the project's official links is cited by the Official Links row itself
    // (pipeline audit 2026-09-01 §7) — it doesn't need a duplicate [S#] tag in a finding or the research doc.
    const officialUrls = new Set((project.official_links ?? []).map((l) => normalizeUrl(l.url)));
    for (const source of sourceList) if (officialUrls.has(normalizeUrl(source.url))) referenced.add(source.id);
    // A DefiLlama protocol page in the ledger is the receipt scripts/pull.mjs reads chain-slice metrics
    // from (content/pulled/<slug>.yaml cites it back by URL) — the puller is its citer.
    for (const source of sourceList) if (/defillama\.com\/protocol\//.test(source.url)) referenced.add(source.id);
    for (const id of ledgerIds) if (!referenced.has(id)) warnings.push(`sources/${slug}: ${id} is never cited by projects/${slug}.yaml, research/${slug}.md or feed/${slug}.yaml`);
  }

  // Trending hygiene (Task 5 addendum ruling 4): a feed item attributed to a `skip` account (posts not
  // ingested as evidence) is a warning — the item stays as a dated record of what was said, but it can
  // never count and should not be leaned on.
  const skipped = new Set((content.accounts ?? []).filter((a) => a.tier === "skip").map((a) => a.handle));
  for (const [slug, f] of content.feed ?? new Map())
    for (const item of f.items ?? [])
      if (item.account && skipped.has(item.account)) warnings.push(`feed/${slug}.yaml: ${item.id} cites skip-tier account ${item.account}`);

  // Voice lint (banned hype phrases). Hits in a project's summary, findings and research record are warnings
  // that --release turns into errors; hits in feed titles/bodies and account notes are errors always — those
  // files sit on the auto-merge path and `npm test` is the only gate there (final review C3).
  const voice = (text, where, { hard = false } = {}) => voiceWarnings(text, where).forEach((w) => (hard || release ? errors : warnings).push(w));
  // Conduct lint (verdicts about named parties): errors always, wherever the site renders the text.
  const conduct = (text, where, opts) => conductWarnings(text, where, opts).forEach((w) => errors.push(w));
  // Internal-vocabulary lint (desk-speak, producer names, role names): reader-facing text must not name the
  // research operation. Errors always on changelog title/detail, research Markdown, and project summaries
  // and findings — the 34 project files that carried "per the desk" prose on 2026-09-01 were rewritten to
  // plain reader language the same day, so nothing here is grandfathered behind --release.
  const vocab = (text, where) => vocabularyWarnings(text, where).forEach((w) => errors.push(w));
  for (const [slug, project] of content.projects) {
    voice(project.summary, `projects/${slug}.yaml: summary`);
    conduct(project.summary, `projects/${slug}.yaml: summary`);
    vocab(project.summary, `projects/${slug}.yaml: summary`);
    for (const kind of ["positive", "risk", "missing", "unresolved"])
      (project.findings?.[kind] ?? []).forEach((f, i) => {
        voice(f.text, `projects/${slug}.yaml: findings.${kind}[${i}]`);
        conduct(f.text, `projects/${slug}.yaml: findings.${kind}[${i}]`);
        vocab(f.text, `projects/${slug}.yaml: findings.${kind}[${i}]`);
      });
  }
  for (const [slug, f] of content.feed)
    for (const item of f.items ?? []) {
      voice(item.title, `feed/${slug}.yaml: ${item.id} title`, { hard: true });
      voice(item.body, `feed/${slug}.yaml: ${item.id} body`, { hard: true });
      conduct(item.title, `feed/${slug}.yaml: ${item.id} title`);
      conduct(item.body, `feed/${slug}.yaml: ${item.id} body`);
    }
  for (const [slug, text] of content.research) {
    voice(text, `research/${slug}.md`);
    vocab(text, `research/${slug}.md`);
  }
  // Changelog title/detail is the most reader-facing text in the repo and becomes Telegram copy verbatim
  // (pipeline audit 2026-09-01 §6): hype words, conduct verdicts and internal vocabulary are errors always.
  (content.changelog ?? []).forEach((e, i) => {
    for (const field of ["title", "detail"]) {
      const where = `changelog.yaml: [${i}] ${e.date} ${e.slug} ${e.type} ${field}`;
      voice(e[field], where, { hard: true });
      conduct(e[field], where);
      vocab(e[field], where);
    }
  });
  // Account notes: hype words and conduct verdicts about named accounts are both out (fix round 1 ruling E);
  // the note scope adds the words that are accusations about an account but ordinary in protocol prose.
  for (const a of content.accounts ?? []) {
    voice(a.note, `accounts.yaml: ${a.handle} note`, { hard: true });
    conduct(a.note, `accounts.yaml: ${a.handle} note`, { note: true });
  }

  if (release) {
    const derivedBySlug = new Map([...content.projects].map(([slug, p]) => [slug, derive(p)]));
    errors.push(...releaseCheck(content, derivedBySlug));
  }

  return { errors, warnings, content };
}
