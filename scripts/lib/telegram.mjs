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
/**
 * What may leave the site for the channel. A subscriber opted in to news, not to data reads:
 * only Announcements (the project's own posts) and Talk (what people on X said) travel, in plain
 * language. On-chain reads and Icarus notes stay on the site, where the reader can open the source.
 */
export const TELEGRAM_WIRE_KINDS = new Set(["announcement", "talk"]);
// API field names, raw hex and truncated dumps mark a gist that was written for a machine.
const RAW_GIST_RE = /\b(volume_usd|reserve_in_usd|fdv_usd|liquidity\.usd|volume\.h24|price_usd|totalSupply|eth_call|allTokensLength|launchCreationEnabled)\b|0x[0-9a-fA-F]{6,}|returned .{0,40} at block|\u2026/;
export function readerGrade(item) {
  const text = `${item.headline ?? ""} ${item.gist ?? ""}`;
  return !RAW_GIST_RE.test(text) && String(item.gist ?? "").trim().length >= 20;
}

export function selectWireItems(content, shareBar, { since = null, all = false, state = null, kinds = TELEGRAM_WIRE_KINDS, tags = null, perName = 1, plain = true } = {}) {
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
        ...(item.tag ? { tag: item.tag } : {}),
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
  const perNameCount = new Map();
  return items
    .filter((item) => (!since || item.at >= since) && !sent.has(wireKey(item)))
    .filter((item) => kinds.has(item.kind) && (!tags || tags.has(item.tag)) && (!plain || readerGrade(item)))
    .sort((a, b) => b.at.localeCompare(a.at) || a.id.localeCompare(b.id))
    .filter((item) => {
      // One item per name per run: the channel is a digest, not a firehose.
      const seen = perNameCount.get(item.slug) ?? 0;
      if (seen >= perName) return false;
      perNameCount.set(item.slug, seen + 1);
      return true;
    });
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

const SIGNAL_KICKERS = {
  "new-launch": "NEW LAUNCH",
  breakout: "MOVING",
  "leader-change": "LEADER",
  "control-change": "RISK ALERT",
  distribution: "LISTED",
  "coming-up": "COMING UP",
};

function sourceAnchor(label, url) {
  return url ? `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>` : escapeHtml(label);
}

/** One action-changing signal: kicker, facts, TL;DR, then card and receipt links last. */
export function formatSignalAlert(signal, {
  name = signal.slug,
  tldr = null,
  siteUrl = "",
  profilePath = "/n/",
  disclaimer = DISCLAIMER,
} = {}) {
  const n = signal.numbers ?? {};
  let facts;
  if (signal.kind === "breakout") {
    const pieces = [];
    if (n.volume_24h_usd != null) pieces.push(`${formatUsd(n.volume_24h_usd)} volume 24h${n.volume_change_pct != null ? ` · ${formatPct(n.volume_change_pct)}` : ""}`);
    if (n.liquidity_usd != null) pieces.push(`${formatUsd(n.liquidity_usd)} liquidity`);
    if (n.holder_change_pct != null && n.holder_change_pct >= 20) pieces.push(`holders ${formatPct(n.holder_change_pct)}`);
    if (n.distinct_accounts >= 3) pieces.push(`${n.distinct_accounts} accounts posting today`);
    facts = pieces.join(" · ");
  } else if (signal.kind === "leader-change") {
    facts = `Now #${signal.rank} in ${signal.section} · held for two reads`;
  } else if (signal.kind === "control-change") {
    const grouped = new Map();
    for (const change of signal.changes) {
      const key = `${change.field}|${String(change.before).toLowerCase()}|${String(change.after).toLowerCase()}`;
      const prior = grouped.get(key) ?? { ...change, count: 0 };
      grouped.set(key, { ...prior, count: prior.count + 1 });
    }
    facts = [...grouped.values()].map((change) => {
      const count = change.count > 1 ? ` on ${change.count} contracts` : "";
      if (["owner", "proxy implementation"].includes(change.field)) {
        const transition = change.after == null ? "removed" : change.before == null ? "set" : "changed";
        return `${change.field}: ${transition}${count}`;
      }
      if (change.after == null || change.before == null) return `${change.field}: ${change.after == null ? "removed" : "set"}${count}`;
      return `${change.field}: ${displayValue(change.before)} → ${displayValue(change.after)}${count}`;
    }).join(" · ");
  } else if (signal.kind === "distribution") {
    facts = `${signal.tag}: ${signal.title}`;
  } else if (signal.kind === "coming-up") {
    facts = `${signal.tag} · ${signal.date} · ${signal.title}`;
  } else {
    facts = signal.headline ?? signal.title ?? "New market signal";
  }
  const base = siteUrl.replace(/\/$/, "");
  const card = base ? `<a href="${escapeHtml(`${base}${profilePath}${signal.slug}`)}">Card</a>` : null;
  const source = signal.sourceUrl ? `<a href="${escapeHtml(signal.sourceUrl)}">Source</a>` : null;
  return [
    `<b>${SIGNAL_KICKERS[signal.kind] ?? "ICARUS ALERT"} · ${escapeHtml(String(name).toUpperCase())}</b>`,
    sourceAnchor(facts, signal.sourceUrl),
    tldr ? escapeHtml(tldr) : null,
    `<i>${escapeHtml(disclaimer)}</i>`,
    [card, source].filter(Boolean).join(" · ") || null,
  ].filter(Boolean).join("\n\n");
}

function displayValue(value) {
  if (value === null || value === undefined) return "not checked";
  if (typeof value === "number" && value >= 0 && value <= 1) return `${(value * 100).toFixed(1)}%`;
  return String(value);
}

function formatUsd(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(Number(value));
}

function formatPct(value) {
  const number = Number(value);
  return `${number >= 0 ? "+" : ""}${number.toFixed(1)}%`;
}

/** The 09:00 ET brief. Inputs are normalized first so this stays pure and fixture-friendly. */
export function buildDailyBrief(brief, { disclaimer = DISCLAIMER } = {}) {
  if (brief.dayWord === "quiet") {
    return `<b>ICARUS DAILY · ${escapeHtml(brief.date)} · QUIET</b> — Nothing changed what a reader would do.`;
  }
  const blocks = [`<b>ICARUS DAILY · ${escapeHtml(brief.date)} · BUSY</b>`];
  if (brief.activity) {
    const launchRows = (brief.activity.launchpads ?? [])
      .map((row) => `${escapeHtml(row.name)} ${sourceAnchor(`${Number(row.launches24h).toLocaleString("en-US")} launches`, row.sourceUrl)}`);
    const volume = brief.activity.chainVolumeUsd == null
      ? null
      : sourceAnchor(`${formatUsd(brief.activity.chainVolumeUsd)} chain volume`, brief.activity.chainVolumeSourceUrl);
    blocks.push([...launchRows, volume].filter(Boolean).join(" · "));
  }
  if (brief.top?.length) blocks.push([
    "<b>Top volume</b>",
    ...brief.top.map((row, index) => `${index + 1}. ${escapeHtml(row.name)} · ${sourceAnchor(`${formatUsd(row.volume24hUsd)}${row.changePct == null ? "" : ` · ${formatPct(row.changePct)}`}`, row.sourceUrl)}`),
  ].join("\n"));
  if (brief.newlyCleared?.length) blocks.push([
    "<b>Under the radar · newly above the bar</b>",
    ...brief.newlyCleared.map((row) => `• <b>${sourceAnchor(row.name, row.sourceUrl)}</b> — ${escapeHtml(row.tldr ?? "No TL;DR yet")}${row.why ? `\n  ${escapeHtml(row.why)}` : ""}`),
  ].join("\n"));
  if (brief.movers?.up || brief.movers?.down) blocks.push([
    "<b>Biggest movers</b>",
    brief.movers.up ? `Up: ${escapeHtml(brief.movers.up.name)} ${sourceAnchor(formatPct(brief.movers.up.changePct), brief.movers.up.sourceUrl)}` : null,
    brief.movers.down ? `Down: ${escapeHtml(brief.movers.down.name)} ${sourceAnchor(formatPct(brief.movers.down.changePct), brief.movers.down.sourceUrl)}` : null,
  ].filter(Boolean).join("\n"));
  if (brief.distribution?.length) blocks.push([
    "<b>Listings and distribution</b>",
    ...brief.distribution.slice(0, 3).map((row) => `• ${sourceAnchor(row.title, row.sourceUrl)} · ${escapeHtml(row.name)}`),
  ].join("\n"));
  if (brief.note) blocks.push(`<b>Icarus note</b>\n${sourceAnchor(brief.note.title, brief.note.sourceUrl)} · ${escapeHtml(brief.note.name)}`);
  blocks.push(`<i>${escapeHtml(disclaimer)}</i>`);
  return blocks.join("\n\n");
}

export function buildWeeklyWrap(wrap, { disclaimer = DISCLAIMER } = {}) {
  const blocks = [`<b>ICARUS WEEKLY · ${escapeHtml(wrap.week)}</b>`];
  if (wrap.leaders?.length) blocks.push([
    "<b>Section leaders</b>",
    ...wrap.leaders.map((row) => `• ${escapeHtml(row.section)} — ${escapeHtml(row.name)}${row.value == null ? "" : ` · ${sourceAnchor(row.value, row.sourceUrl)}`}`),
  ].join("\n"));
  if (wrap.newNames?.length) blocks.push(`<b>New this week</b>\n${wrap.newNames.map((row) => escapeHtml(row.name)).join(" · ")}`);
  if (wrap.quietNames?.length) blocks.push(`<b>Went quiet</b>\n${wrap.quietNames.map((row) => escapeHtml(row.name)).join(" · ")}`);
  if (wrap.controlChanges?.length) blocks.push(`<b>Control changes</b>\n${wrap.controlChanges.map((row) => `• ${escapeHtml(row.name)} — ${escapeHtml(row.summary)}`).join("\n")}`);
  if (wrap.distribution?.length) blocks.push([
    "<b>Listings and distribution</b>",
    ...wrap.distribution.map((row) => `• ${sourceAnchor(row.title, row.sourceUrl)} · ${escapeHtml(row.name)}`),
  ].join("\n"));
  blocks.push(`<i>${escapeHtml(disclaimer)}</i>`);
  return blocks.join("\n\n");
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
