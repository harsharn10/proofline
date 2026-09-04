// Pure helpers for the publish-triggered Telegram digest (PRD §9.2). No I/O here.
import { createHash } from "node:crypto";

export const DISCLAIMER =
  "Icarus is powered by Project Proofline. This automated research may be incomplete, delayed or inaccurate. It is not an audit, guarantee or investment advice. Read the sources and do your own research.";

// A publication's kicker is what the subscriber reads first, so it stays specific: a risk alert must
// not arrive under the same word as a routine update, and Icarus's own alert is not a project post.
export const EVENT_LABELS = {
  "new-coverage": "NEW PROFILE",
  "research-update": "RESEARCH UPDATE",
  "risk-alert": "RISK ALERT",
  correction: "CORRECTION",
  breaking: "ICARUS ALERT",
  trending: "TRENDING",
  roundup: "ROUNDUP",
};

// The wire's four reader kinds as kickers. FEED_TO_WIRE mirrors the site's mapping in
// site/src/data/content-server.ts; scripts/test.mjs asserts the two produce the same kinds.
export const FEED_TO_WIRE = {
  company: "announcement",
  ct: "talk",
  onchain: "onchain",
  risk: "note",
};
export const WIRE_KICKERS = {
  announcement: "ANNOUNCEMENT",
  talk: "TALK",
  onchain: "ON-CHAIN",
  note: "ICARUS NOTE",
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
    [
      `Control ${derived.score}/100`,
      derived.confidence === null || derived.confidence === undefined ? "" : ` · evidence ${derived.confidence}%`,
      derived.provisional ? " · awaiting second review" : "",
    ].join(""),
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
  // Trending is an attention measure. It goes out with that said plainly, every time.
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
    `<b>${escapeHtml(siteName.toUpperCase())} WIRE · ${escapeHtml(date)}</b>`,
    `${roundup.length} update${roundup.length === 1 ? "" : "s"} selected by Icarus.`,
    `<i>${escapeHtml(disclaimer)}</i>`,
    ...roundup.map((entry) => formatRoundupEntry(entry, projects.get(entry.slug), { siteUrl, profilePath })),
  ].join("\n\n");
  return [...direct, ...chunkMessage(roundupText)];
}

// --- The wire on Telegram ---------------------------------------------------------------
// A second message kind alongside the controller-approved publications above. Publications are
// Icarus writing about a name; wire items are what already happened — a post, a piece of talk, an
// on-chain event, a material note — read exactly as the site reads them: headline, gist, link last.

/** Stable send key for a wire item, namespaced so it can never collide with a changelog key. */
export function wireKey(item) {
  return `wire|${item.id}`;
}

/**
 * The wire for the names above the share bar, newest first. Mirrors wireItems() in
 * site/src/data/content-server.ts: a feed item needs a receipt URL, and only material or risk-rated
 * findings, risks and corrections cross over from the change record — never review bookkeeping.
 */
export function selectWireItems(content, shareBar, { since = null, all = false, state = null } = {}) {
  const sent = new Set(all ? [] : (state?.sent_keys ?? []));
  const above = (slug) => shareBar?.[slug] === true;
  const nameOf = (slug) => content.projects?.get(slug)?.name ?? slug;
  const items = [];
  for (const [slug, file] of content.feed ?? []) {
    if (!above(slug)) continue;
    for (const item of file?.items ?? []) {
      if (!item.sourceUrl || !FEED_TO_WIRE[item.kind]) continue;
      items.push({
        id: `feed-${slug}-${item.id}`,
        kind: FEED_TO_WIRE[item.kind],
        headline: item.title,
        gist: item.body,
        url: item.sourceUrl,
        slug,
        name: nameOf(slug),
        ...(item.kind === "ct" && item.account ? { account: item.account } : {}),
        at: item.date,
      });
    }
  }
  for (const entry of content.changelog ?? []) {
    if (!above(entry.slug)) continue;
    const material = entry.severity === "Material" || entry.severity === "Risk";
    const newsworthy = entry.type === "risk" || entry.type === "finding" || entry.type === "correction";
    if (!material || !newsworthy) continue;
    items.push({
      id: `note-${entry.slug}-${entry.date}-${entry.title}`,
      kind: "note",
      headline: entry.title,
      gist: entry.detail,
      url: `${entry.slug}#commentary`,
      slug: entry.slug,
      name: nameOf(entry.slug),
      at: entry.date,
    });
  }
  return items
    .filter((item) => (!since || item.at >= since) && !sent.has(wireKey(item)))
    .sort((a, b) => b.at.localeCompare(a.at) || a.id.localeCompare(b.id));
}

/** One wire item as a message body: kicker, headline, gist, then the link — always last. */
export function formatWireItem(item, { siteUrl = "", profilePath = "/n/" } = {}) {
  const base = siteUrl.replace(/\/$/, "");
  const external = /^https?:\/\//i.test(item.url);
  const href = external ? item.url : `${base}${profilePath}${item.url}`;
  const link = external || base ? `<a href="${escapeHtml(href)}">${external ? "Open the source" : "Read the note"} →</a>` : null;
  return [
    `<b>${escapeHtml(WIRE_KICKERS[item.kind] ?? item.kind.toUpperCase())} · ${escapeHtml(String(item.name).toUpperCase())}</b>`,
    `<b>${escapeHtml(item.headline)}</b>`,
    escapeHtml(item.gist),
    item.account ? `<i>${escapeHtml(item.account)}</i>` : null,
    link,
  ].filter(Boolean).join("\n\n");
}

export function buildWireMessages(
  items,
  { siteName, date, siteUrl, profilePath, disclaimer = DISCLAIMER },
) {
  if (!items.length) return [];
  const text = [
    `<b>${escapeHtml(siteName.toUpperCase())} WIRE · ${escapeHtml(date)}</b>`,
    `${items.length} item${items.length === 1 ? "" : "s"} from names above the bar.`,
    `<i>${escapeHtml(disclaimer)}</i>`,
    ...items.map((item) => formatWireItem(item, { siteUrl, profilePath })),
  ].join("\n\n");
  return chunkMessage(text);
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
