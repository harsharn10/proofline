// Telegram publisher: controller-approved publications on pushes, data-derived alerts after pulls,
// a 13:00 UTC daily brief, and a Sunday 14:00 UTC wrap. Dry-run defaults to alerts plus the brief.
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { promisify } from "node:util";
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { basename, join } from "node:path";
import { parse } from "yaml";
import { loadContent } from "./lib/load.mjs";
import {
  buildDailyBrief,
  buildMessages,
  buildWeeklyWrap,
  entryKey,
  formatSignalAlert,
  readDotEnv,
  selectApproved,
  selectShareBar,
  selectWireItems,
} from "./lib/telegram.mjs";
import {
  breakoutSignal,
  comingUpSignal,
  controlChangeSignal,
  distributionSignal,
  leaderChangeSignal,
  selectDailyAlerts,
} from "./lib/signals.mjs";
import { locatedOnChain, officialSurfaceConfirmed } from "./lib/share-bar.mjs";

const execFileAsync = promisify(execFile);
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => { const at = args.indexOf(name); return at >= 0 ? args[at + 1] : null; };
const dryRun = flag("--dry-run");
const all = flag("--all");
const since = opt("--since");
const limit = Number(opt("--limit") ?? 0);
const testOnly = flag("--test");
const markSent = flag("--mark-sent");
const explicitModes = ["publications", "alerts", "brief", "weekly"].filter((mode) => flag(`--${mode}`));
const modes = explicitModes.length ? explicitModes : (dryRun ? ["alerts", "brief"] : ["publications"]);

let env = { ...process.env };
try { env = { ...readDotEnv(await readFile(".env.local", "utf8")), ...env }; } catch { /* optional */ }
const token = env.TELEGRAM_BOT_TOKEN;
const chatId = env.TELEGRAM_CHAT_ID;
const siteUrl = (env.SITE_URL ?? "").replace(/\/$/, "");
const profilePath = env.PROFILE_PATH ?? "/n/";
const STATE = "ops/telegram-state.json";
let state = { sent_keys: [] };
try { state = JSON.parse(await readFile(STATE, "utf8")); } catch { /* first run */ }
let review = { version: 2, channel_enabled: false, decisions: {} };
try { review = JSON.parse(await readFile("ops/telegram-review.json", "utf8")); } catch { /* fail closed */ }

const content = await loadContent("content");
let derivedFile;
try { derivedFile = JSON.parse(await readFile("build/derived.json", "utf8")); }
catch {
  console.error("Icarus needs build/derived.json before Telegram can apply the share bar. Run npm run score first.");
  process.exit(1);
}

async function send(text) {
  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID — put them in .env.local. Use --dry-run to preview.");
    process.exit(1);
  }
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
  });
  if (!response.ok) {
    console.error(`Telegram rejected the message (${response.status}): ${(await response.text()).slice(0, 300)}`);
    process.exit(1);
  }
}

if (testOnly) {
  await send(`<b>${content.site.name.toUpperCase()}</b> digest bot connected. Research updates will post here when something material is published.`);
  console.log("Test message sent. No digest state changed.");
  process.exit(0);
}

const now = Date.now();
const today = new Date(now).toISOString().slice(0, 10);
const projectName = (slug) => content.projects.get(slug)?.name ?? slug;
const projectTldr = (slug) => content.projects.get(slug)?.tldr ?? null;
const marketUrl = (slug) => `https://dexscreener.com/search?q=${encodeURIComponent(content.projects.get(slug)?.symbol ?? projectName(slug))}`;
const cardUrl = (slug) => siteUrl ? `${siteUrl}${profilePath}${slug}` : null;

async function loadPulled() {
  const files = (await readdir("content/pulled")).filter((file) => file.endsWith(".yaml") && file !== "chain.yaml");
  const rows = new Map();
  for (const file of files) rows.set(basename(file, ".yaml"), parse(await readFile(join("content/pulled", file), "utf8")));
  return rows;
}

async function loadChain() {
  try { return parse(await readFile("content/pulled/chain.yaml", "utf8")); }
  catch { return null; }
}

async function loadHistories() {
  const rows = new Map();
  let files = [];
  try { files = (await readdir("content/pulled/history")).filter((file) => file.endsWith(".jsonl")); } catch { return rows; }
  for (const file of files) {
    const points = (await readFile(join("content/pulled/history", file), "utf8"))
      .split("\n").filter(Boolean).flatMap((line) => { try { return [JSON.parse(line)]; } catch { return []; } });
    rows.set(basename(file, ".jsonl"), points.sort((a, b) => String(a.at).localeCompare(String(b.at))));
  }
  return rows;
}

async function priorPulled(slug) {
  try {
    const { stdout: commit } = await execFileAsync("git", ["rev-list", "-1", "HEAD", "--", "content/pulled"]);
    const { stdout } = await execFileAsync("git", ["show", `${commit.trim()}^:content/pulled/${slug}.yaml`], { maxBuffer: 5_000_000 });
    return parse(stdout);
  } catch { return null; }
}

function currentMetrics(pulled) {
  const tokenRow = pulled?.addresses?.find((row) => row.role === "token") ?? pulled?.addresses?.[0];
  return {
    volume24hUsd: pulled?.market?.volume_h24 ?? null,
    liquidityUsd: pulled?.market?.liquidity_usd ?? null,
    holders: tokenRow?.holders ?? null,
    priceChange24h: pulled?.market?.price_change_h24 ?? null,
    firstPairAt: pulled?.market?.first_pair_at ?? null,
    launches24h: pulled?.activity?.launches_24h ?? null,
  };
}

const historyMetrics = (point) => ({
  volume24hUsd: point?.volume_h24 ?? null,
  liquidityUsd: point?.liquidity_usd ?? null,
  holders: point?.holders ?? null,
});

function distinctAccounts(slug, date = today) {
  return new Set((content.feed.get(slug)?.items ?? [])
    .filter((item) => item.date === date && item.kind === "ct" && item.account)
    .map((item) => item.account.toLowerCase())).size;
}

const ALL_WIRE_KINDS = new Set(["announcement", "talk", "onchain", "note"]);
const DISTRIBUTION_TAGS = new Set(["listing", "integration", "partnership", "audit"]);

function distributionRows() {
  return selectWireItems(content, derivedFile.shareBar, {
    all: true, kinds: ALL_WIRE_KINDS, tags: DISTRIBUTION_TAGS, perName: 99, plain: false,
  }).flatMap((item) => {
    const project = content.projects.get(item.slug);
    const row = distributionSignal({ slug: item.slug, item: { ...item, sourceUrl: item.url, date: item.at }, project });
    return row ? [{ ...row, name: projectName(item.slug) }] : [];
  });
}

function comingUpRows(pulled) {
  const rows = [];
  const censusBySlug = new Map(content.census.map((row) => [row.slug, row]));
  for (const [slug, file] of content.feed) {
    const project = content.projects.get(slug);
    const census = censusBySlug.get(slug);
    const announcedAboveBar = project?.lifecycle === "announced" &&
      officialSurfaceConfirmed(census) && Boolean(project?.tldr) && !locatedOnChain(pulled.get(slug));
    if (derivedFile.shareBar?.[slug] !== true && !announcedAboveBar) continue;
    for (const item of file.items ?? []) {
      const row = comingUpSignal({ slug, item, project, now });
      if (row) rows.push(row);
    }
  }
  return rows;
}

function statusFor(pulled) {
  const at = Date.parse(pulled?.activity?.last_activity_at ?? "");
  if (!Number.isFinite(at)) return "announced";
  const age = now - at;
  return age <= 7 * 86_400_000 ? "live" : age <= 30 * 86_400_000 ? "quiet" : "dormant";
}

async function computeAlerts() {
  const pulled = await loadPulled();
  const histories = await loadHistories();
  let signals = [];
  const controlByChange = new Map();
  const rankState = { ...(state.signal_state?.ranks ?? {}) };

  for (const [slug, row] of pulled) {
    if (derivedFile.shareBar?.[slug] === true) {
      const points = histories.get(slug) ?? [];
      const breakout = breakoutSignal({
        slug,
        current: currentMetrics(row),
        previous: historyMetrics(points.length > 1 ? points.at(-2) : null),
        distinctAccounts: distinctAccounts(slug),
      });
      if (breakout) signals.push({ ...breakout, sourceUrl: marketUrl(slug) });
    }
    if (derivedFile.shareBar?.[slug] === true || content.projects.get(slug)?.coverage === "full") {
      const control = controlChangeSignal(slug, await priorPulled(slug), row);
      if (control) {
        const address = control.changes.find((change) => change.address)?.address;
        const changedRow = address ? row.addresses?.find((entry) => entry.address?.toLowerCase() === address.toLowerCase()) : null;
        const launchpadSlug = changedRow && changedRow.role !== "token" ? row.market?.launchpad?.slug : null;
        const ownerSlug = content.projects.has(launchpadSlug) ? launchpadSlug : slug;
        const fingerprint = createHash("sha1").update(JSON.stringify(control.changes)).digest("hex").slice(0, 16);
        if (!controlByChange.has(fingerprint) || ownerSlug === launchpadSlug) {
          controlByChange.set(fingerprint, {
            ...control,
            slug: ownerSlug,
            sourceUrl: address ? `https://robinhoodchain.blockscout.com/address/${address}` : cardUrl(ownerSlug),
          });
        }
      }
    }
  }

  for (const [slug, derived] of Object.entries(derivedFile.projects ?? {})) {
    const rank = derived.rank?.position;
    const section = derived.rank?.cohort;
    if (!rank || !section) continue;
    const result = leaderChangeSignal({ slug, section, rank }, rankState[slug]);
    rankState[slug] = result.next;
    if (result.signal && derivedFile.shareBar?.[slug] === true) {
      signals.push({ ...result.signal, sourceUrl: cardUrl(slug) });
    }
  }
  signals.push(...controlByChange.values(), ...distributionRows(), ...comingUpRows(pulled));

  const priority = { "control-change": 0, distribution: 1, "leader-change": 2, breakout: 3, "coming-up": 4 };
  signals.sort((a, b) => (priority[a.kind] ?? 9) - (priority[b.kind] ?? 9) || a.slug.localeCompare(b.slug));
  const signalKey = (item) => `${item.kind}|${item.slug}|${createHash("sha1").update(JSON.stringify(item.kind === "breakout" ? { date: today, reasons: item.reasons } : item)).digest("hex").slice(0, 16)}`;
  const alreadySent = new Set(state.signal_state?.sent_keys ?? []);
  signals = signals.map((item) => ({ ...item, signalKey: signalKey(item) })).filter((item) => !alreadySent.has(item.signalKey));
  const budget = selectDailyAlerts(signals, state.signal_state?.alert_daily, today);
  const selected = limit > 0 ? budget.selected.slice(0, limit) : budget.selected;
  const selectedBudget = selectDailyAlerts(selected, state.signal_state?.alert_daily, today);

  const currentShare = Object.entries(derivedFile.shareBar ?? {}).filter(([, value]) => value).map(([slug]) => slug);
  const priorShareRows = state.signal_state?.share_bar_names;
  const priorShare = new Set(priorShareRows ?? []);
  const newlyCleared = Array.isArray(priorShareRows)
    ? currentShare.filter((slug) => !priorShare.has(slug))
    : currentShare.filter((slug) => {
        const at = Date.parse(pulled.get(slug)?.market?.first_pair_at ?? "");
        return Number.isFinite(at) && now - at >= 0 && now - at <= 86_400_000;
      });
  const statuses = Object.fromEntries([...pulled].map(([slug, row]) => [slug, statusFor(row)]));
  const priorStatuses = state.signal_state?.statuses ?? {};
  const quietNames = Object.entries(statuses)
    .filter(([slug, status]) => ["quiet", "dormant"].includes(status) && priorStatuses[slug] === "live")
    .map(([slug]) => slug);
  const log = [
    ...(state.signal_state?.weekly_log ?? []),
    {
      at: new Date(now).toISOString(),
      newlyCleared,
      quietNames,
      controlChanges: signals.filter((item) => item.kind === "control-change").map((item) => ({ slug: item.slug, summary: item.changes.map((change) => change.field).join(", ") })),
      distribution: signals.filter((item) => item.kind === "distribution").map((item) => ({ slug: item.slug, title: item.title, sourceUrl: item.sourceUrl })),
    },
  ].filter((row) => now - Date.parse(row.at) <= 8 * 86_400_000);

  return {
    pulled,
    histories,
    signals,
    selected,
    nextSignalState: {
      ...(state.signal_state ?? {}),
      ranks: rankState,
      share_bar_names: currentShare,
      statuses,
      weekly_log: log,
      alert_daily: selectedBudget.next,
      sent_keys: [...alreadySent, ...selected.map((item) => item.signalKey)].slice(-2_000),
    },
  };
}

function nearestDayAgo(points, anchor) {
  const target = anchor - 86_400_000;
  return [...points].filter((point) => Date.parse(point.at) < anchor)
    .sort((a, b) => Math.abs(Date.parse(a.at) - target) - Math.abs(Date.parse(b.at) - target))[0] ?? null;
}

function buildBriefData(pulled, histories, chain) {
  const rows = [...pulled].map(([slug, row]) => ({ slug, ...currentMetrics(row) }));
  const top = rows.filter((row) => derivedFile.shareBar?.[row.slug] === true && row.volume24hUsd != null)
    .sort((a, b) => b.volume24hUsd - a.volume24hUsd).slice(0, 5).map((row) => {
      const points = histories.get(row.slug) ?? [];
      const anchor = Date.parse(points.at(-1)?.at ?? new Date(now).toISOString());
      const prior = nearestDayAgo(points, anchor)?.volume_h24;
      return {
        name: projectName(row.slug), volume24hUsd: row.volume24hUsd,
        changePct: prior > 0 ? ((row.volume24hUsd - prior) / prior) * 100 : null,
        sourceUrl: marketUrl(row.slug),
      };
    });
  const logNew = (state.signal_state?.weekly_log ?? [])
    .filter((row) => now - Date.parse(row.at) <= 86_400_000).flatMap((row) => row.newlyCleared ?? []);
  const firstDay = rows.filter((row) => {
    const at = Date.parse(row.firstPairAt ?? "");
    return Number.isFinite(at) && now - at >= 0 && now - at <= 86_400_000;
  }).map((row) => row.slug);
  const newlyCleared = [...new Set([...logNew, ...firstDay])]
    .filter((slug) => derivedFile.shareBar?.[slug] === true)
    .map((slug) => ({
      name: projectName(slug),
      tldr: projectTldr(slug),
      why: content.projects.get(slug)?.why_people_care?.[0]?.replace(/\s*\[[^\]]+\]\s*$/, "") ?? null,
      sourceUrl: cardUrl(slug),
    }));
  const movers = rows.filter((row) => derivedFile.shareBar?.[row.slug] === true && row.priceChange24h != null)
    .sort((a, b) => b.priceChange24h - a.priceChange24h);
  const sevenDaysAgo = now - 7 * 86_400_000;
  const launchpadSlugs = new Set(content.census
    .filter((row) => row.tree?.primary?.startsWith("launch/"))
    .map((row) => row.slug));
  const average = (key, slugs = null) => [...histories].reduce((total, [slug, points]) => {
    if (slugs && !slugs.has(slug)) return total;
    const recent = points.filter((point) => Date.parse(point.at) >= sevenDaysAgo && Number.isFinite(Number(point[key])));
    return total + (recent.length ? recent.reduce((sum, point) => sum + Number(point[key]), 0) / recent.length : 0);
  }, 0);
  const trackedVolume = rows
    .filter((row) => derivedFile.shareBar?.[row.slug] === true)
    .reduce((sum, row) => sum + (row.volume24hUsd ?? 0), 0);
  const chainVolume = Number(chain?.activity?.daily_volume_usd?.latest);
  const volume = Number.isFinite(chainVolume) ? chainVolume : trackedVolume;
  const recordedVolumeAverage = Number(chain?.activity?.daily_volume_usd?.sum_7d) / 7;
  const volumeAverage = Number.isFinite(recordedVolumeAverage) && recordedVolumeAverage > 0
    ? recordedVolumeAverage
    : average("volume_h24");
  const launchActivity = [...pulled]
    .filter(([slug]) => launchpadSlugs.has(slug))
    .flatMap(([slug, row]) => {
      const launches24h = Number(row.activity?.launches_24h);
      if (!Number.isFinite(launches24h)) return [];
      const activeFactory = row.activity?.addresses?.find((entry) => Number(entry.launches_24h) > 0) ??
        row.addresses?.find((entry) => entry.role === "factory");
      return [{
        name: projectName(slug),
        launches24h,
        sourceUrl: activeFactory?.address
          ? `https://robinhoodchain.blockscout.com/address/${activeFactory.address}`
          : cardUrl(slug),
      }];
    });
  const launches = launchActivity.reduce((sum, row) => sum + row.launches24h, 0);
  const launchAverage = average("launches_24h", launchpadSlugs);
  const busy = (volumeAverage > 0 && volume >= 1.25 * volumeAverage) ||
    (launchAverage > 0 && launches >= 1.25 * launchAverage);
  const controlWords = /\b(owner|ownership|safe|threshold|proxy|upgrade|timelock|mint|liquidity|lp|control)\b/i;
  const material = content.changelog.find((row) => row.date === today && row.severity === "Material" &&
    ["risk", "finding"].includes(row.type) && controlWords.test(`${row.title} ${row.detail}`));
  const biggestUp = movers.find((row) => row.priceChange24h > 0);
  const biggestDown = [...movers].reverse().find((row) => row.priceChange24h < 0);
  return {
    date: today,
    dayWord: busy ? "busy" : "quiet",
    activity: {
      launchpads: launchActivity,
      chainVolumeUsd: volume,
      chainVolumeSourceUrl: chain?.activity?.source_url ?? null,
    },
    top,
    newlyCleared,
    movers: {
      up: biggestUp ? { name: projectName(biggestUp.slug), changePct: biggestUp.priceChange24h, sourceUrl: marketUrl(biggestUp.slug) } : null,
      down: biggestDown ? { name: projectName(biggestDown.slug), changePct: biggestDown.priceChange24h, sourceUrl: marketUrl(biggestDown.slug) } : null,
    },
    distribution: distributionRows().filter((row) => row.date >= new Date(now - 86_400_000).toISOString().slice(0, 10)),
    note: material ? { title: material.title, name: projectName(material.slug), sourceUrl: cardUrl(material.slug) } : null,
  };
}

function weekKey(date = new Date(now)) {
  const sunday = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - date.getUTCDay()));
  return sunday.toISOString().slice(0, 10);
}

function buildWrapData() {
  const leaders = Object.entries(derivedFile.projects ?? {}).flatMap(([slug, row]) => row.rank?.position === 1 ? [{
    section: row.rank.cohort, name: projectName(slug), value: `#1 by ${row.rank.basis}`, sourceUrl: cardUrl(slug),
  }] : []);
  const log = (state.signal_state?.weekly_log ?? []).filter((row) => now - Date.parse(row.at) <= 7 * 86_400_000);
  const collect = (key) => [...new Set(log.flatMap((row) => row[key] ?? []))];
  const uniqueObjects = (rows, key) => [...new Map(rows.map((row) => [key(row), row])).values()];
  return {
    week: weekKey(),
    leaders,
    newNames: collect("newlyCleared").map((slug) => ({ name: projectName(slug) })),
    quietNames: collect("quietNames").map((slug) => ({ name: projectName(slug) })),
    controlChanges: uniqueObjects(log.flatMap((row) => row.controlChanges ?? []), (item) => `${item.slug}|${item.summary}`).map((item) => ({ name: projectName(item.slug), summary: item.summary })),
    distribution: uniqueObjects(log.flatMap((row) => row.distribution ?? []), (item) => `${item.slug}|${item.title}`).map((item) => ({ ...item, name: projectName(item.slug) })),
  };
}

// The owner's kill switch (#89) covers every mode, not only the approval-gated publications:
// alerts, the daily brief and the Sunday wrap all stop when the channel is paused. A dry run still
// previews, so pausing the channel never blinds the operator to what would have gone out.
if (review.channel_enabled !== true && !dryRun) {
  console.log("Icarus channel delivery is paused in ops/telegram-review.json — nothing sent.");
  process.exit(0);
}

const messages = [];
const sentKeys = [];
let alertResult = null;

if (modes.includes("publications")) {
  let entries = selectShareBar(selectApproved(content.changelog, state, review, { since, all }), derivedFile.shareBar)
    .sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
  if (limit > 0) entries = entries.slice(0, limit);
  if (markSent) state.sent_keys = [...new Set([...(state.sent_keys ?? []), ...entries.map(entryKey)])];
  else if (entries.length) {
    messages.push(...buildMessages(entries, {
      siteName: content.site.name,
      date: entries.at(-1)?.date ?? today,
      projects: content.projects,
      derivedBySlug: new Map(Object.entries(derivedFile.projects ?? {})),
      siteUrl,
      profilePath,
    }));
    sentKeys.push(...entries.map(entryKey));
  }
}

if (modes.includes("alerts")) {
  alertResult = await computeAlerts();
  messages.push(...alertResult.selected.map((signal) => formatSignalAlert(signal, {
    name: projectName(signal.slug), tldr: projectTldr(signal.slug), siteUrl, profilePath,
  })));
  if (!dryRun) state.signal_state = alertResult.nextSignalState;
}

if (modes.includes("brief")) {
  const data = alertResult ?? { pulled: await loadPulled(), histories: await loadHistories() };
  if (all || state.last_brief_date !== today) {
    messages.push(buildDailyBrief(buildBriefData(data.pulled, data.histories, await loadChain())));
    if (!dryRun) state.last_brief_date = today;
  }
}

if (modes.includes("weekly")) {
  const week = weekKey();
  if (all || state.last_weekly_week !== week) {
    messages.push(buildWeeklyWrap(buildWrapData()));
    if (!dryRun) state.last_weekly_week = week;
  }
}

if (dryRun) {
  console.log(messages.length ? messages.join("\n\n--- next Telegram message ---\n\n") : "Icarus: no signal message due.");
  console.log(`\n--- dry run: modes ${modes.join(", ")} · ${messages.length} message(s). Nothing sent; state unchanged.`);
  process.exit(0);
}

if (markSent && modes.includes("publications")) {
  await mkdir("ops", { recursive: true });
  await writeFile(STATE, JSON.stringify(state, null, 2) + "\n");
  console.log("Marked approved publications as sent without posting.");
  process.exit(0);
}

for (const message of messages) await send(message);
state.sent_keys = [...new Set([...(state.sent_keys ?? []), ...sentKeys])];
if (messages.length) state.last_sent_at = new Date().toISOString();
await mkdir("ops", { recursive: true });
await writeFile(STATE, JSON.stringify(state, null, 2) + "\n");
console.log(messages.length ? `Sent ${messages.length} Telegram message(s); state recorded in ${STATE}.` : "No Telegram message due; signal state refreshed.");
