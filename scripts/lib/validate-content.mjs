import { loadContent } from "./load.mjs";
import { validateAgainst } from "./schemas.mjs";
import { crossCheck, releaseCheck, referencedSourceIds } from "./checks.mjs";
import { checkResearch, tagIds } from "./research-md.mjs";
import { derive } from "./score.mjs";
import { voiceWarnings } from "./voice.mjs";

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
    const ledgerIds = new Set((content.sources.get(slug)?.sources ?? []).map((s) => s.id));
    const text = content.research.get(slug);
    const referenced = referencedSourceIds(project);
    if (text !== undefined) {
      fail(`research/${slug}.md`, checkResearch(text, { slug, coverage: project.coverage, ledgerIds }));
      for (const id of tagIds(text)) referenced.add(id);
    }
    for (const id of ledgerIds) if (!referenced.has(id)) warnings.push(`sources/${slug}: ${id} is never cited by projects/${slug}.yaml or research/${slug}.md`);
  }

  // Voice lint: banned-phrase warnings over summary, findings text, feed bodies/titles and research
  // markdown. --release turns them into errors.
  const voice = (text, where) => voiceWarnings(text, where).forEach((w) => (release ? errors : warnings).push(w));
  for (const [slug, project] of content.projects) {
    voice(project.summary, `projects/${slug}.yaml: summary`);
    for (const kind of ["positive", "risk", "missing", "unresolved"])
      (project.findings?.[kind] ?? []).forEach((f, i) => voice(f.text, `projects/${slug}.yaml: findings.${kind}[${i}]`));
  }
  for (const [slug, f] of content.feed)
    for (const item of f.items ?? []) {
      voice(item.title, `feed/${slug}.yaml: ${item.id} title`);
      voice(item.body, `feed/${slug}.yaml: ${item.id} body`);
    }
  for (const [slug, text] of content.research) voice(text, `research/${slug}.md`);

  if (release) {
    const derivedBySlug = new Map([...content.projects].map(([slug, p]) => [slug, derive(p)]));
    errors.push(...releaseCheck(content, derivedBySlug));
  }

  return { errors, warnings, content };
}
