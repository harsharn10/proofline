// Pure helpers for the publish-triggered Telegram digest (PRD §9.2). No I/O here.

export const DISCLAIMER = "Research opinion only — not an audit, guarantee or investment advice.";

export function entryKey(e) {
  return e.review_key ?? `${e.date}|${e.slug}|${e.type}|${e.title}`;
}

/** Changelog entries not yet sent (by key), optionally filtered by date. */
export function selectUnsent(entries, state, { since = null, all = false } = {}) {
  const sent = new Set(state?.sent_keys ?? []);
  return entries.filter((e) => (all || !sent.has(entryKey(e))) && (!since || e.date >= since));
}

/**
 * Select only controller-approved entries. Approval is keyed to the immutable changelog key;
 * optional title/detail overrides change channel copy without rewriting the research record.
 */
export function selectApproved(entries, state, review, { since = null, all = false } = {}) {
  if (review?.channel_enabled !== true) return [];
  const decisions = review?.decisions ?? {};
  return selectUnsent(entries, state, { since, all })
    .filter((entry) => decisions[entryKey(entry)]?.status === "approved")
    .map((entry) => {
      const decision = decisions[entryKey(entry)];
      return {
        ...entry,
        review_key: entryKey(entry),
        title: typeof decision.title === "string" && decision.title.trim() ? decision.title.trim() : entry.title,
        detail: typeof decision.detail === "string" && decision.detail.trim() ? decision.detail.trim() : entry.detail,
      };
    });
}

export function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function formatEntry(e, project, derived, { siteUrl = "", profilePath = "/n/" } = {}) {
  const name = project?.name ?? e.slug;
  const head = `<b>${escapeHtml(name)}</b> · ${escapeHtml(e.severity.toUpperCase())} · ${escapeHtml(e.type)}`;
  const numbers =
    derived && derived.score !== null && derived.score !== undefined
      ? `Score ${derived.score}/100${derived.provisional ? " (provisional)" : ""} · ${derived.risk} risk · ${derived.confidence}% confidence`
      : "Research pending / insufficient evidence";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}${profilePath}${e.slug}` : null;
  return [head, escapeHtml(e.title), escapeHtml(e.detail), numbers, url].filter(Boolean).join("\n");
}

export function buildDigest(entries, { siteName, date, projects, derivedBySlug, siteUrl, profilePath, disclaimer = DISCLAIMER }) {
  const header = `<b>${escapeHtml(siteName.toUpperCase())} / ROBINHOOD CHAIN</b>\nResearch digest · ${date}`;
  const body = entries.map((e) => formatEntry(e, projects.get(e.slug), derivedBySlug.get(e.slug), { siteUrl, profilePath }));
  return [header, ...body, escapeHtml(disclaimer)].join("\n\n");
}

/** Split on blank lines so no message exceeds Telegram's 4096-char limit. */
export function chunkMessage(text, max = 4096) {
  if (text.length <= max) return [text];
  const parts = [];
  let cur = "";
  for (const block of text.split("\n\n")) {
    const candidate = cur ? `${cur}\n\n${block}` : block;
    if (candidate.length > max && cur) { parts.push(cur); cur = block; } else cur = candidate;
  }
  if (cur) parts.push(cur);
  return parts;
}

/** Minimal KEY=VALUE parser for .env.local (quotes stripped, # comments ignored). */
export function readDotEnv(text) {
  const env = {};
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i < 0) continue;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    env[k] = v;
  }
  return env;
}
