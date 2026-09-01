import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { ResearchSection } from "./types";

const HTML_COMMENT = /<!--[\s\S]*?-->/g;
const EVIDENCE_TAG = /\[(verified|claim|inference|disputed|unknown)((?:\s+S\d+)*)\]/g;
const HEADING = /^## (.+)$/gm;
const PENDING = "_Research pending._";

function stripHtmlComments(text: string): string {
  return text.replace(HTML_COMMENT, "");
}

const SAFE_MARKDOWN_TAGS = [
  "h1", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "blockquote",
  "ul", "ol", "li", "strong", "em", "del", "code", "pre", "a",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td",
];

function extractEvidenceTags(text: string): { markdown: string; badges: string[]; placeholder: string } {
  const badges: string[] = [];
  const placeholder = `PROOFLINE_EVIDENCE_${crypto.randomUUID().replaceAll("-", "")}_`;
  const markdown = text.replace(EVIDENCE_TAG, (_match, evidenceClass: string, idsRaw: string) => {
    const ids = idsRaw.trim().split(/\s+/).filter(Boolean);
    const idsText = ids.join(" ");
    const label = ids.length > 0 ? `${evidenceClass} · ${idsText}` : evidenceClass;
    const dataAttr = ids.length > 0 ? ` data-sources="${idsText}"` : "";
    const index = badges.push(`<span class="ev ev-${evidenceClass}"${dataAttr}>${label}</span>`) - 1;
    return `${placeholder}${index}_END`;
  });
  return { markdown, badges, placeholder };
}

function renderSafeMarkdown(raw: string, { evidence = false } = {}): string {
  const extracted = evidence
    ? extractEvidenceTags(raw)
    : { markdown: raw, badges: [], placeholder: "PROOFLINE_NO_EVIDENCE_" };
  const rendered = marked.parse(extracted.markdown, { async: false }) as string;
  const safe = sanitizeHtml(rendered, {
    allowedTags: SAFE_MARKDOWN_TAGS,
    allowedAttributes: {
      a: ["href", "title", "rel"],
      code: ["class"],
      th: ["align"],
      td: ["align"],
    },
    allowedClasses: { code: [/^language-[a-z0-9_-]+$/i] },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
    enforceHtmlBoundary: true,
    transformTags: {
      a: (_tagName, attribs) => ({
        tagName: "a",
        attribs: { ...attribs, rel: "nofollow noopener noreferrer" },
      }),
    },
  });
  return safe.replace(
    new RegExp(`${extracted.placeholder}(\\d+)_END`, "g"),
    (_match, index: string) => extracted.badges[Number(index)] ?? "",
  );
}

function renderSectionBody(raw: string): string {
  const stripped = stripHtmlComments(raw).trim();
  if (stripped === PENDING || stripped === "") {
    return `<p class="text-sm text-muted">Research pending.</p>`;
  }
  return renderSafeMarkdown(stripped, { evidence: true });
}

/**
 * Parse a research/<slug>.md file into { heading, html } sections. Front matter and
 * anything before the first `## ` heading (the H1 title, the "how to use this file"
 * comment) is discarded — the site already knows the project's name from projects/<slug>.yaml.
 */
export function parseResearchMarkdown(raw: string): { sections: ResearchSection[] } {
  const withoutFrontMatter = raw.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const matches = [...withoutFrontMatter.matchAll(HEADING)];
  const sections: ResearchSection[] = matches.map((match, i) => {
    const heading = match[1]!.trim();
    const start = match.index! + match[0].length;
    const end = i + 1 < matches.length ? matches[i + 1]!.index! : withoutFrontMatter.length;
    const body = withoutFrontMatter.slice(start, end);
    return { heading, html: renderSectionBody(body) };
  });
  return { sections };
}

/**
 * Render content/methodology.md (or any other whole-document markdown file) to HTML in
 * one pass — unlike parseResearchMarkdown this does not split on `## ` headings, since the
 * methodology page renders the full document top to bottom.
 */
export function renderWholeMarkdown(raw: string): string {
  return renderSafeMarkdown(stripHtmlComments(raw));
}
