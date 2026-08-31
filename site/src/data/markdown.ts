import { marked } from "marked";
import type { ResearchSection } from "./types";

const HTML_COMMENT = /<!--[\s\S]*?-->/g;
const EVIDENCE_TAG = /\[(verified|claim|inference|disputed|unknown)((?:\s+S\d+)*)\]/g;
const HEADING = /^## (.+)$/gm;
const PENDING = "_Research pending._";

function stripHtmlComments(text: string): string {
  return text.replace(HTML_COMMENT, "");
}

// Evidence tags must be swapped for their badge markup before marked runs, so the raw
// HTML survives marked's inline-token pass untouched (spec §5.5, task-3 brief step 1).
function replaceEvidenceTags(text: string): string {
  return text.replace(EVIDENCE_TAG, (_match, evidenceClass: string, idsRaw: string) => {
    const ids = idsRaw.trim().split(/\s+/).filter(Boolean);
    const idsText = ids.join(" ");
    const label = ids.length > 0 ? `${evidenceClass} · ${idsText}` : evidenceClass;
    const dataAttr = ids.length > 0 ? ` data-sources="${idsText}"` : "";
    return `<span class="ev ev-${evidenceClass}"${dataAttr}>${label}</span>`;
  });
}

function renderSectionBody(raw: string): string {
  const stripped = stripHtmlComments(raw).trim();
  if (stripped === PENDING || stripped === "") {
    return `<p class="text-sm text-muted">Research pending.</p>`;
  }
  const tagged = replaceEvidenceTags(stripped);
  return marked.parse(tagged, { async: false }) as string;
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
  return marked.parse(stripHtmlComments(raw), { async: false }) as string;
}
