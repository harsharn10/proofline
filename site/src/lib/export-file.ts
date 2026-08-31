import { FEED_LABEL, LINK_KIND_LABEL, type Dossier, type Gap } from "@/data/types";

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function scoreLine(d: Dossier): string {
  if (d.derived.label) return d.derived.label;
  const parts = [`${d.derived.score}/100`];
  if (d.derived.provisional) parts.push("provisional");
  if (d.derived.confidence !== null) parts.push(`${d.derived.confidence}% confidence`);
  if (d.derived.risk) parts.push(`${d.derived.risk} risk`);
  return parts.join(" · ");
}

export function dossiersToCsv(dossiers: Dossier[]): string {
  const header = [
    "symbol",
    "name",
    "category",
    "lifecycle",
    "coverage",
    "score",
    "risk",
    "trending",
    "summary",
    "links",
    "reviewed_at",
  ];
  const rows = dossiers.map((d) =>
    [
      d.symbol ?? "",
      d.name,
      d.category,
      d.lifecycle,
      d.coverage,
      d.derived.score !== null ? String(d.derived.score) : "",
      d.derived.risk ?? "",
      d.derived.trending ? "yes" : "no",
      d.summary,
      d.links.map((l) => `${l.kind}:${l.url}`).join(" | "),
      d.review.reviewed_at,
    ]
      .map(csvEscape)
      .join(","),
  );
  return [header.join(","), ...rows].join("\n");
}

function findingsBlock(title: string, items: { text: string }[] | Gap[]): string {
  const body = items.length > 0 ? items.map((i) => `- ${i.text}`).join("\n") : "_none recorded_";
  return `### ${title}\n\n${body}`;
}

export function dossierToMarkdown(d: Dossier): string {
  const links = d.links.length
    ? d.links.map((l) => `- ${LINK_KIND_LABEL[l.kind]}: ${l.url}`).join("\n")
    : "- none";
  const deployments = d.deployments.length
    ? d.deployments
        .map(
          (dep) =>
            `- ${dep.label} (${dep.chain}): \`${dep.address}\`${dep.verified ? " — verified" : " — not verified"}`,
        )
        .join("\n")
    : "- none recorded";
  const research = d.research.sections
    .map((s) => `### ${s.heading}\n\n${stripHtml(s.html)}`)
    .join("\n\n");
  const feed = d.feed.length
    ? d.feed
        .map(
          (f) =>
            `### ${f.date} · ${FEED_LABEL[f.kind]} · ${f.title}\n\n${f.body}${f.account ? `\n\n_${f.account}_` : ""}`,
        )
        .join("\n\n")
    : "_No feed items yet._";
  const sources = d.sources.length
    ? d.sources.map((s) => `- ${s.id}: ${s.claim} (${s.url}, accessed ${s.accessed_at.slice(0, 10)})`).join("\n")
    : "_None recorded._";

  return [
    `# ${d.symbol ?? d.name} — ${d.name}`,
    "",
    `${d.category} · ${d.lifecycle} · ${d.coverage} · ${scoreLine(d)}`,
    "",
    d.summary,
    "",
    "## Links",
    "",
    links,
    "",
    "## Deployments",
    "",
    deployments,
    "",
    "## Findings",
    "",
    findingsBlock("Positive", d.findings.positive),
    "",
    findingsBlock("Risk", d.findings.risk),
    "",
    findingsBlock("Missing evidence", d.findings.missing),
    "",
    findingsBlock("Unresolved", d.findings.unresolved),
    "",
    "## Research",
    "",
    research,
    "",
    "## Feed",
    "",
    feed,
    "",
    "## Sources",
    "",
    sources,
    "",
  ].join("\n");
}

export function dossiersToMarkdown(dossiers: Dossier[]): string {
  const index = dossiers.map((d) => `- ${d.symbol ?? d.name} — ${d.name} (${d.lifecycle})`).join("\n");
  return [
    "# Proofline",
    "",
    "Robinhood Chain native plays, researched. Not financial advice.",
    "",
    "## Index",
    "",
    index,
    "",
    "---",
    "",
    dossiers.map(dossierToMarkdown).join("\n---\n\n"),
  ].join("\n");
}

export function triggerDownload(filename: string, contents: string, mime: string) {
  const blob = new Blob([contents], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}
