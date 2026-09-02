// Pure helpers for the publish-triggered Telegram digest (PRD §9.2). No I/O here.
import { createHash } from "node:crypto";

export const DISCLAIMER =
  "Icarus is powered by Project Proofline. This automated research may be incomplete, delayed or inaccurate. It is not an audit, guarantee or investment advice. Read the sources and do your own research.";

export const EVENT_LABELS = {
  "new-coverage": "NEW PROFILE",
  "research-update": "RESEARCH UPDATE",
  "risk-alert": "RISK ALERT",
  correction: "CORRECTION",
  breaking: "DEVELOPING",
  trending: "TRENDING",
  roundup: "ROUNDUP",
};

/**
 * The pre-review_key identity, date|slug|type|title. It is still what ops/telegram-state.json sent_keys
 * recorded before 2026-09-01 and what the /review page writes ops/telegram-review.json decisions under, so
 * every lookup below accepts it alongside the stable key.
 */
export function legacyEntryKey(e) {
  return `${e.date}|${e.slug}|${e.type}|${e.title}`;
}

/** Stable key: sha1 of the legacy identity, first 16 hex — written into the changelog by scripts/migrations/add-review-keys.mjs. */
export function reviewKeyFor(e) {
  return createHash("sha1").update(legacyEntryKey(e)).digest("hex").slice(0, 16);
}

export function entryKey(e) {
  return e.review_key ?? legacyEntryKey(e);
}

/** Only an explicit structured publication opts a changelog entry into channel review. */
export function isChannelCandidate(entry) {
  return entry?.channel != null && typeof entry.channel === "object";
}

export function publicationFingerprint(publication) {
  return createHash("sha256").update(JSON.stringify(publication)).digest("hex");
}

export function decisionIsCurrent(entry, decision) {
  return Boolean(
    decision?.copy &&
      decision.source_fingerprint === publicationFingerprint(entry.channel) &&
      decision.copy_fingerprint === publicationFingerprint(decision.copy),
  );
}

/** Channel candidates not yet sent (by key), optionally filtered by date. */
export function selectUnsent(entries, state, { since = null, all = false } = {}) {
  const sent = new Set(state?.sent_keys ?? []);
  const wasSent = (e) => sent.has(entryKey(e)) || sent.has(legacyEntryKey(e));
  return entries.filter(
    (e) => isChannelCandidate(e) && (all || !wasSent(e)) && (!since || e.date >= since),
  );
}

/**
 * Select only controller-approved entries. Approval is keyed to the immutable changelog key;
 * source and copy fingerprints must still match, and approved copy never rewrites research.
 */
export function selectApproved(entries, state, review, { since = null, all = false } = {}) {
  if (review?.channel_enabled !== true) return [];
  const decisions = review?.decisions ?? {};
  const decisionFor = (entry) => decisions[entryKey(entry)] ?? decisions[legacyEntryKey(entry)];
  return selectUnsent(entries, state, { since, all })
    .filter((entry) => {
      const decision = decisionFor(entry);
      return decision?.status === "approved" && decisionIsCurrent(entry, decision);
    })
    .map((entry) => {
      const decision = decisionFor(entry);
      return {
        ...entry,
        review_key: entryKey(entry),
        channel: decision.copy,
      };
    });
}

export function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function icarusView(derived) {
  if (!derived || derived.score === null || derived.score === undefined) {
    return "Not yet reviewed";
  }
  return [
    `Control ${derived.score}/100 · evidence ${derived.confidence}%${derived.provisional ? " · awaiting second review" : ""}`,
    derived.risk ? `${derived.risk} risk` : null,
  ].filter(Boolean).join("\n");
}

/** The site and Telegram consume the same generated share-bar decision. */
export function selectShareBar(entries, shareBar) {
  return entries.filter((entry) => shareBar?.[entry.slug] === true);
}

export function formatPublication(
  entry,
  project,
  derived,
  { siteUrl = "", profilePath = "/n/", disclaimer = DISCLAIMER } = {},
) {
  const publication = entry.channel;
  const name = project?.name ?? entry.slug;
  const label = EVENT_LABELS[publication.event] ?? publication.event.toUpperCase();
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}${profilePath}${entry.slug}` : null;
  const why = publication.why_it_matters?.length
    ? ["<b>Why it matters</b>", ...publication.why_it_matters.map((line) => `• ${escapeHtml(line)}`)].join("\n")
    : null;
  const watch = publication.watch_next
    ? `<b>What we’re watching</b>\n${escapeHtml(publication.watch_next)}`
    : null;
  const trendNote =
    publication.event === "trending" ? "<i>Trending measures attention — not quality or endorsement.</i>" : null;
  const link = url ? `<a href="${escapeHtml(url)}">Read the full ${escapeHtml(name)} research →</a>` : null;
  return [
    `<b>${escapeHtml(label)} · ${escapeHtml(name.toUpperCase())}</b>`,
    `<b>${escapeHtml(publication.headline)}</b>`,
    escapeHtml(publication.summary),
    why,
    `<b>Icarus view</b>\n${escapeHtml(icarusView(derived))}`,
    watch,
    trendNote,
    `<i>${escapeHtml(disclaimer)}</i>`,
    link,
  ]
    .filter(Boolean)
    .join("\n\n");
}

function formatRoundupEntry(entry, project, { siteUrl = "", profilePath = "/n/" } = {}) {
  const publication = entry.channel;
  const name = project?.name ?? entry.slug;
  const label = EVENT_LABELS[publication.event] ?? publication.event.toUpperCase();
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}${profilePath}${entry.slug}` : null;
  const link = url ? `\n<a href="${escapeHtml(url)}">Open research →</a>` : "";
  return `<b>${escapeHtml(name)} · ${escapeHtml(label)}</b>\n${escapeHtml(publication.headline)}\n${escapeHtml(publication.summary)}${link}`;
}

export function buildMessages(
  entries,
  { siteName, date, projects, derivedBySlug, siteUrl, profilePath, disclaimer = DISCLAIMER },
) {
  const direct = entries
    .filter((entry) => entry.channel.delivery !== "roundup")
    .flatMap((entry) =>
      chunkMessage(
        formatPublication(entry, projects.get(entry.slug), derivedBySlug.get(entry.slug), {
          siteUrl,
          profilePath,
          disclaimer,
        }),
      ),
    );
  const roundup = entries.filter((entry) => entry.channel.delivery === "roundup");
  if (!roundup.length) return direct;
  const roundupText = [
    `<b>${escapeHtml(siteName.toUpperCase())} ROUNDUP · ${escapeHtml(date)}</b>`,
    `${roundup.length} research update${roundup.length === 1 ? "" : "s"} selected by Icarus.`,
    `<i>${escapeHtml(disclaimer)}</i>`,
    ...roundup.map((entry) => formatRoundupEntry(entry, projects.get(entry.slug), { siteUrl, profilePath })),
  ].join("\n\n");
  return [...direct, ...chunkMessage(roundupText)];
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
