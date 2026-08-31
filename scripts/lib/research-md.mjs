import { parse as parseYaml } from "yaml";

export const REQUIRED_HEADINGS = [
  "Identity", "Deployment", "Control", "Security", "Engineering", "Team",
  "Product and economics", "Communications", "Findings", "Sources", "Review metadata",
];
export const PENDING_LINE = "_Research pending._";
const CLASSES = "verified|claim|inference|disputed|unknown";
// Strict grammar (spec §5.5): lowercase class, then zero or more S-ids separated by whitespace.
const TAG_RE = new RegExp(`^\\[(${CLASSES})((?:\\s+S[1-9][0-9]*)*)\\]$`);
// Anything that was probably meant to be a tag: a bracketed class name in any case, any content up to the next ].
const LOOSE_TAG_RE = new RegExp(`\\[(${CLASSES})\\b[^\\]]*\\]`, "gi");
// A strict tag at the end of a line — the paragraph-final rule for material sections.
const FINAL_TAG_RE = new RegExp(`\\[(${CLASSES})((?:\\s+S[1-9][0-9]*)*)\\]\\s*$`);
// Sections whose paragraphs must be tagged (1-based indices into REQUIRED_HEADINGS: Deployment … Findings).
const MATERIAL_SECTIONS = new Set(REQUIRED_HEADINGS.slice(1, 9));

/**
 * Parses front matter, `##` sections and every evidence-tag candidate.
 * `tags` holds every candidate that satisfies the strict grammar; `malformed` holds the rest.
 * Both carry the section heading and a 1-based line number that is correct even after multi-line HTML comments.
 */
export function parseResearch(text) {
  text = text.replace(/\r\n/g, "\n");
  const errors = [];
  let frontMatter = null, body = text;
  const fm = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (fm) { try { frontMatter = parseYaml(fm[1]); } catch (e) { errors.push(`front matter: ${e.message}`); } body = text.slice(fm[0].length); }
  else errors.push("front matter missing");

  // Replace each HTML comment with the newlines it contained so line numbers stay right.
  const stripped = body.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ""));
  const sections = [];
  let current = null;
  const fmLines = fm ? fm[0].split("\n").length - 1 : 0;
  stripped.split("\n").forEach((line, i) => {
    const h = line.match(/^## (.+?)\s*$/);
    if (h) { current = { heading: h[1], body: "", startLine: fmLines + i + 1 }; sections.push(current); }
    else if (current) current.body += line + "\n";
  });

  const tags = [], malformed = [];
  for (const s of sections) {
    s.body.split("\n").forEach((line, i) => {
      const lineNo = s.startLine + i + 1;
      for (const m of line.matchAll(LOOSE_TAG_RE)) {
        const strict = m[0].match(TAG_RE);
        if (strict) tags.push({ cls: strict[1], ids: strict[2].trim().split(/\s+/).filter(Boolean), section: s.heading, line: lineNo, text: m[0] });
        else malformed.push({ section: s.heading, line: lineNo, text: m[0] });
      }
    });
  }
  return { frontMatter, sections, tags, malformed, errors };
}

/** Every source id cited by a well-formed tag anywhere in the document. */
export function tagIds(text) {
  return new Set(parseResearch(text).tags.flatMap((t) => t.ids));
}

/**
 * Split a section body into paragraphs at blank lines. A list or table with no blank lines between
 * its items is a single paragraph; `###` sub-heading lines are handled by the caller.
 */
function paragraphs(body) {
  return body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

export function checkResearch(text, { slug, coverage, ledgerIds }) {
  const { frontMatter, sections, tags, malformed, errors } = parseResearch(text);
  const out = [...errors];

  if (frontMatter) {
    if (frontMatter.slug !== slug) out.push(`front matter slug "${frontMatter.slug}" ≠ "${slug}"`);
    if (frontMatter.coverage !== coverage) out.push(`front matter coverage "${frontMatter.coverage}" ≠ project coverage "${coverage}"`);
    if (frontMatter.methodology_version !== "proofline-v1.0") out.push(`front matter methodology_version must be proofline-v1.0`);
  }

  const headings = sections.map((s) => s.heading);
  REQUIRED_HEADINGS.forEach((h, i) => { if (headings[i] !== h) out.push(`heading ${i + 1} should be "## ${h}" (found "${headings[i] ?? "nothing"}")`); });
  if (headings.length > REQUIRED_HEADINGS.length) out.push(`unexpected extra headings: ${headings.slice(REQUIRED_HEADINGS.length).join(", ")}`);

  // Rule 3a — every tag, in every section: grammar, class/id shape, ledger membership.
  for (const t of malformed) out.push(`${t.section}: malformed tag ${t.text} (line ${t.line})`);
  for (const t of tags) {
    if (t.cls === "unknown") { if (t.ids.length) out.push(`${t.section}: [unknown] must not carry source ids (line ${t.line})`); continue; }
    if (!t.ids.length) out.push(`${t.section}: [${t.cls}] needs at least one source id (line ${t.line})`);
    for (const id of t.ids) if (!ledgerIds.has(id)) out.push(`${t.section}: ${id} is not in sources/${slug}.yaml (line ${t.line})`);
  }

  // Rule 3b — material sections 2–9: no untagged paragraph; a full profile has no pending section.
  for (const s of sections) {
    if (!MATERIAL_SECTIONS.has(s.heading)) continue;
    for (const raw of paragraphs(s.body)) {
      const lines = raw.split("\n");
      if (/^#{3,}\s/.test(lines[0])) lines.shift();          // a sub-heading is not a statement — drop the heading line only
      if (!lines.length) continue;                            // heading stood alone
      if (lines.join("\n").trim() === PENDING_LINE) {
        if (coverage === "full") out.push(`${s.heading}: full profile still has ${PENDING_LINE}`);
        continue;
      }
      const last = lines[lines.length - 1];
      if (!FINAL_TAG_RE.test(last)) out.push(`${s.heading}: untagged statement — "${lines[0].slice(0, 60)}"`);
    }
  }
  return out;
}
