import {
  CATEGORY_LABEL,
  FEED_LABEL,
  STATUS_LABEL,
  type NameRecord,
} from "@/data/types";

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

export function namesToCsv(names: NameRecord[]): string {
  const header = [
    "ticker",
    "project",
    "category",
    "status",
    "heat",
    "one_liner",
    "rwa_hook",
    "contracts",
    "links",
    "x_query",
    "updated",
  ];
  const rows = names.map((n) =>
    [
      n.ticker,
      n.project,
      CATEGORY_LABEL[n.category],
      STATUS_LABEL[n.status],
      n.heat,
      n.oneLiner,
      n.rwaHook,
      n.contracts.map((c) => `${c.label}:${c.address}`).join(" | "),
      n.links.map((l) => `${l.label} ${l.href}`).join(" | "),
      n.xQuery,
      n.updated,
    ]
      .map(csvEscape)
      .join(","),
  );
  return [header.join(","), ...rows].join("\n");
}

export function nameToMarkdown(n: NameRecord): string {
  const contracts = n.contracts.length
    ? n.contracts.map((c) => `- ${c.label}: \`${c.address}\``).join("\n")
    : "- none pinned";
  const links = n.links.length
    ? n.links.map((l) => `- [${l.label}](${l.href})`).join("\n")
    : "- none";
  const feed = n.feed.length
    ? n.feed
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(
          (f) =>
            `### ${f.date} · ${FEED_LABEL[f.kind]} · ${f.title}\n\n${f.body}${f.source ? `\n\n_${f.source}_` : ""}`,
        )
        .join("\n\n")
    : "_No feed items yet._";

  return [
    `# ${n.ticker} — ${n.project}`,
    "",
    `${CATEGORY_LABEL[n.category]} · ${STATUS_LABEL[n.status]} · updated ${n.updated}`,
    "",
    n.oneLiner,
    "",
    "## Overview",
    "",
    n.overview,
    "",
    "## RWA hook",
    "",
    n.rwaHook,
    "",
    "## Thesis",
    "",
    n.thesis,
    "",
    "## Mechanics",
    "",
    n.mechanics,
    "",
    "## Risks",
    "",
    n.risks,
    n.collisions ? `\n## Name collisions\n\n${n.collisions}\n` : "",
    "## Contracts",
    "",
    contracts,
    "",
    "## Links",
    "",
    links,
    "",
    "## Feed",
    "",
    feed,
    "",
  ].join("\n");
}

export function namesToMarkdown(names: NameRecord[]): string {
  const index = names
    .map((n) => `- ${n.ticker} — ${n.project} (${STATUS_LABEL[n.status]})`)
    .join("\n");
  return [
    "# Chain File",
    "",
    "Robinhood Chain names, researched. Not financial advice. Stock Tokens are not offered to US persons.",
    "",
    "## Index",
    "",
    index,
    "",
    "---",
    "",
    names.map(nameToMarkdown).join("\n---\n\n"),
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
