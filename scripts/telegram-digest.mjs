// Telegram publisher: controller-approved publications on pushes, data-derived alerts after pulls,
// a 13:00 UTC daily brief, and a Sunday 14:00 UTC wrap. Dry-run defaults to alerts plus the brief.
// `--backtest <days>` replays the rules over the committed history and prints what would have gone out.
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { promisify } from "node:util";
import { readFile, writeFile, mkdir, mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
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
  confirmControlChanges,
  controlChangeSignal,
  distinctTalkAccounts,
  distributionSignal,
  dropMassNullTransitions,
  formatUsd,
  leaderChangeSignal,
  rankSignals,
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
const backtestDays = Number(opt("--backtest") ?? 0);
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

// Throws rather than exiting: the caller has state to write for the messages that did go out before
// this one failed, and process.exit() would skip that.
async function send(text) {
  if (!token || !chatId) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID — put them in .env.local. Use --dry-run to preview.");
  }
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
  });
  if (!response.ok) {
    throw new Error(`Telegram rejected the message (${response.status}): ${(await response.text()).slice(0, 300)}`);
  }
}

if (testOnly) {
  try {
    await send(`<b>${content.site.name.toUpperCase()}</b> digest bot connected. Research updates will post here when something material is published.`);
  } catch (error) { console.error(error.message); process.exit(1); }
  console.log("Test message sent. No digest state changed.");
  process.exit(0);
}

const now = Date.now();
const today = new Date(now).toISOString().slice(0, 10);
const projectName = (slug) => content.projects.get(slug)?.name ?? slug;
const projectTldr = (slug) => content.projects.get(slug)?.tldr ?? null;
const cardUrl = (slug) => siteUrl ? `${siteUrl}${profilePath}${slug}` : null;

/**
 * The receipt for a market number is the pair page the pulled file already records — the deepest pair,
 * which is where the liquidity and volume figures come from. A DexScreener search for a one-letter
 * symbol ("O" for O.EXCHANGE) is not a source, so it is only the last resort.
 */
function marketUrl(slug, pulled = null) {
  const pair = (pulled?.market?.pairs ?? [])
    .filter((row) => row?.pair_address)
    .sort((a, b) => (Number(b.liquidity_usd) || 0) - (Number(a.liquidity_usd) || 0))[0];
  if (pair) return `https://dexscreener.com/robinhood/${pair.pair_address}`;
  return `https://dexscreener.com/search?q=${encodeURIComponent(content.projects.get(slug)?.symbol ?? projectName(slug))}`;
}

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

// The commit that last touched content/pulled is the same for every name, so it is resolved once
// rather than by two git processes per slug inside the loop.
let priorPullCommit;
async function priorPullBase() {
  if (priorPullCommit === undefined) {
    try {
      const { stdout } = await execFileAsync("git", ["rev-list", "-1", "HEAD", "--", "content/pulled"]);
      priorPullCommit = stdout.trim() || null;
    } catch { priorPullCommit = null; }
  }
  return priorPullCommit;
}

async function priorPulled(slug) {
  const commit = await priorPullBase();
  if (!commit) return null;
  try {
    const { stdout } = await execFileAsync("git", ["show", `${commit}^:content/pulled/${slug}.yaml`], { maxBuffer: 5_000_000 });
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

/** Talk that counts: tier-top or 100K+ follower accounts only, on the day in question. */
function distinctAccounts(slug, date = today) {
  return distinctTalkAccounts(content.feed.get(slug)?.items ?? [], content.accounts, date);
}

/** The snapshot immediately before this pull. Comparing the pulled YAML against the second-to-last
 * history point would span whatever interval separates them, not the six hours the rule assumes. */
function previousSnapshot(points, pulledAt) {
  const at = Date.parse(pulledAt ?? "");
  const earlier = Number.isFinite(at)
    ? points.filter((point) => Date.parse(point.at) < at)
    : points.slice(0, -1);
  return earlier.at(-1) ?? null;
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
        previous: historyMetrics(previousSnapshot(points, row?.pulled_at)),
        distinctAccounts: distinctAccounts(slug),
      });
      if (breakout) signals.push({ ...breakout, sourceUrl: marketUrl(slug, row) });
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

  // Nothing about who controls a contract goes out on a single read. This pull's changes become
  // pending; what fires now are the changes the previous pull recorded and this pull still confirms.
  const freshControl = dropMassNullTransitions([...controlByChange.values()]);
  const confirmation = confirmControlChanges(state.signal_state?.pending_control ?? [], freshControl, pulled, now);
  for (const confirmed of confirmation.confirmed) {
    const address = confirmed.changes.find((change) => change.address)?.address;
    signals.push({
      ...confirmed,
      sourceUrl: address ? `https://robinhoodchain.blockscout.com/address/${address}` : cardUrl(confirmed.slug),
    });
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
  signals.push(...distributionRows(), ...comingUpRows(pulled));

  // Materiality order, not kind order: a confirmed owner change, then the largest breakout by volume.
  signals = rankSignals(signals);
  const ranked = signals;
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
    ranked,
    selected,
    nextSignalState: {
      ...(state.signal_state ?? {}),
      ranks: rankState,
      share_bar_names: currentShare,
      statuses,
      weekly_log: log,
      alert_daily: selectedBudget.next,
      pending_control: confirmation.next,
      sent_keys: [...alreadySent, ...selected.map((item) => item.signalKey)].slice(-2_000),
    },
  };
}

function nearestDayAgo(points, anchor) {
  const target = anchor - 86_400_000;
  return [...points].filter((point) => Date.parse(point.at) < anchor)
    .sort((a, b) => Math.abs(Date.parse(a.at) - target) - Math.abs(Date.parse(b.at) - target))[0] ?? null;
}

const LEAD_KICKERS = {
  "control-change": "TODAY'S BIGGEST",
  breakout: "TODAY'S BIGGEST",
  "leader-change": "TODAY'S BIGGEST",
  distribution: "TODAY'S BIGGEST",
  "coming-up": "TODAY'S BIGGEST",
};

/**
 * The brief opens with the one thing that mattered most that day, taken from the same ranked signal
 * list the alerts come from — so a day on which a name doubled to $15.9M can never be summarised as
 * "nothing changed what a reader would do".
 */
function briefLead(signals = []) {
  const top = rankSignals(signals)[0];
  if (!top) return null;
  const name = projectName(top.slug);
  const n = top.numbers ?? {};
  let text;
  if (top.kind === "breakout") {
    text = [
      n.volume_24h_usd != null ? `${formatUsd(n.volume_24h_usd)} volume 24h` : null,
      n.volume_change_pct != null ? `${n.volume_change_pct >= 0 ? "+" : ""}${n.volume_change_pct.toFixed(1)}%` : null,
      n.liquidity_usd != null ? `${formatUsd(n.liquidity_usd)} liquidity` : null,
    ].filter(Boolean).join(" · ");
  } else if (top.kind === "control-change") {
    text = top.changes.map((change) => change.field).join(", ") + " changed, confirmed over two pulls";
  } else if (top.kind === "leader-change") {
    text = `Now #${top.rank} in ${top.section}`;
  } else if (top.kind === "distribution") {
    text = `${top.tag}: ${top.title}`;
  } else {
    text = `${top.tag} · ${top.date} · ${top.title}`;
  }
  return { kicker: LEAD_KICKERS[top.kind] ?? "TODAY'S BIGGEST", name, text, sourceUrl: top.sourceUrl ?? cardUrl(top.slug) };
}

function buildBriefData(pulled, histories, chain, signals = []) {
  const rows = [...pulled].map(([slug, row]) => ({ slug, ...currentMetrics(row) }));
  const top = rows.filter((row) => derivedFile.shareBar?.[row.slug] === true && row.volume24hUsd != null)
    .sort((a, b) => b.volume24hUsd - a.volume24hUsd).slice(0, 5).map((row) => {
      const points = histories.get(row.slug) ?? [];
      const anchor = Date.parse(points.at(-1)?.at ?? new Date(now).toISOString());
      const prior = nearestDayAgo(points, anchor)?.volume_h24;
      return {
        name: projectName(row.slug), volume24hUsd: row.volume24hUsd,
        changePct: prior > 0 ? ((row.volume24hUsd - prior) / prior) * 100 : null,
        sourceUrl: marketUrl(row.slug, pulled.get(row.slug)),
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
  // Both sides of the busy/quiet comparison must be the same measure. Chain-wide volume against a sum
  // of per-project averages would label every day busy, so the fallback drops to tracked volume too.
  const chainVolume = Number(chain?.activity?.daily_volume_usd?.latest);
  const recordedVolumeAverage = Number(chain?.activity?.daily_volume_usd?.sum_7d) / 7;
  const chainAverageUsable = Number.isFinite(chainVolume) && Number.isFinite(recordedVolumeAverage) && recordedVolumeAverage > 0;
  const volume = Number.isFinite(chainVolume) ? chainVolume : trackedVolume;
  const comparedVolume = chainAverageUsable ? chainVolume : trackedVolume;
  const volumeAverage = chainAverageUsable ? recordedVolumeAverage : average("volume_h24");
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
  const busy = (volumeAverage > 0 && comparedVolume >= 1.25 * volumeAverage) ||
    (launchAverage > 0 && launches >= 1.25 * launchAverage);
  const controlWords = /\b(owner|ownership|safe|threshold|proxy|upgrade|timelock|mint|liquidity|lp|control)\b/i;
  const material = content.changelog.find((row) => row.date === today && row.severity === "Material" &&
    ["risk", "finding"].includes(row.type) && controlWords.test(`${row.title} ${row.detail}`));
  const biggestUp = movers.find((row) => row.priceChange24h > 0);
  const biggestDown = [...movers].reverse().find((row) => row.priceChange24h < 0);
  return {
    date: today,
    dayWord: busy ? "busy" : "quiet",
    lead: briefLead(signals),
    activity: {
      launchpads: launchActivity,
      chainVolumeUsd: volume,
      chainVolumeSourceUrl: chain?.activity?.source_url ?? null,
    },
    top,
    newlyCleared,
    movers: {
      up: biggestUp ? { name: projectName(biggestUp.slug), changePct: biggestUp.priceChange24h, sourceUrl: marketUrl(biggestUp.slug, pulled.get(biggestUp.slug)) } : null,
      down: biggestDown ? { name: projectName(biggestDown.slug), changePct: biggestDown.priceChange24h, sourceUrl: marketUrl(biggestDown.slug, pulled.get(biggestDown.slug)) } : null,
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

// --- Backtest -----------------------------------------------------------------------------------
// A replay of the same pure rules over the committed record: every pull commit that touched
// content/pulled, the history series each pull appended, the feed and the changelog as they stood,
// and the share bar recomputed from that day's content. It writes nothing and sends nothing.

/** Telegram HTML back to something readable in a PR body. Anchors keep their label. */
function plainText(html) {
  return String(html)
    .replace(/<a href="[^"]*">([\s\S]*?)<\/a>/g, "$1")
    .replace(/<\/?[bi]>/g, "")
    .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .split("\n").filter((line) => !line.startsWith("Icarus is powered by Project Proofline")).join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** `tldr` was added to project records after the earliest pull commits; the summary's first sentence
 * is the same text those records carried, so the replay shows the line a subscriber would have read. */
const snapshotTldr = (project) => project?.tldr ?? (String(project?.summary ?? "").split(/(?<=\.)\s/)[0] || null);

async function snapshotAt(sha, root) {
  const dir = join(root, sha);
  await mkdir(dir, { recursive: true });
  const tar = join(root, `${sha}.tar`);
  await execFileAsync("git", ["archive", "--format=tar", "-o", tar, sha, "content"]);
  await execFileAsync("tar", ["-xf", tar, "-C", dir]);
  const snapshotContent = await loadContent(join(dir, "content"));
  const files = (await readdir(join(dir, "content/pulled"))).filter((file) => file.endsWith(".yaml") && file !== "chain.yaml");
  const pulled = new Map();
  for (const file of files) {
    pulled.set(basename(file, ".yaml"), parse(await readFile(join(dir, "content/pulled", file), "utf8")));
  }
  // The share bar is generated, never committed, so it is regenerated from this snapshot's content.
  let derived = derivedFile;
  try {
    await execFileAsync("node", [resolve("scripts/score.mjs"), "content"], { cwd: dir, maxBuffer: 20_000_000 });
    derived = JSON.parse(await readFile(join(dir, "build/derived.json"), "utf8"));
  } catch { /* fall back to today's bar, reported in the header */ }
  return { sha, dir, content: snapshotContent, derived, pulled };
}

function backtestBreakouts(snapshot, pullAt) {
  const out = [];
  for (const [slug, row] of snapshot.pulled) {
    if (snapshot.derived.shareBar?.[slug] !== true) continue;
    const points = snapshot.historyBySlug?.get(slug) ?? [];
    const current = points.find((point) => point.at === pullAt);
    if (!current) continue;
    const previous = points.filter((point) => Date.parse(point.at) < Date.parse(pullAt)).at(-1);
    if (!previous) continue;
    const date = pullAt.slice(0, 10);
    const breakout = breakoutSignal({
      slug,
      current: historyMetrics(current),
      previous: historyMetrics(previous),
      distinctAccounts: distinctTalkAccounts(snapshot.content.feed.get(slug)?.items ?? [], snapshot.content.accounts, date),
    });
    if (breakout) {
      const project = snapshot.content.projects.get(slug);
      out.push({ ...breakout, sourceUrl: marketUrl(slug, row), name: project?.name ?? slug, tldr: snapshotTldr(project) });
    }
  }
  return out;
}

function backtestControl(before, after) {
  const fresh = [];
  for (const [slug, row] of after.pulled) {
    if (after.derived.shareBar?.[slug] !== true && after.content.projects.get(slug)?.coverage !== "full") continue;
    const control = controlChangeSignal(slug, before.pulled.get(slug), row);
    if (control) fresh.push(control);
  }
  return dropMassNullTransitions(fresh);
}

function backtestFeedSignals(snapshot, at) {
  const out = [];
  const censusBySlug = new Map(snapshot.content.census.map((row) => [row.slug, row]));
  for (const [slug, file] of snapshot.content.feed) {
    const project = snapshot.content.projects.get(slug);
    const above = snapshot.derived.shareBar?.[slug] === true;
    const announcedAboveBar = project?.lifecycle === "announced" &&
      officialSurfaceConfirmed(censusBySlug.get(slug)) && Boolean(project?.tldr) && !locatedOnChain(snapshot.pulled.get(slug));
    for (const item of file.items ?? []) {
      const name = project?.name ?? slug;
      if (above) {
        const row = distributionSignal({ slug, item: { ...item, sourceUrl: item.sourceUrl, date: item.date }, project });
        // Only the day it appears — a standing feed item is not news on every later pull.
        if (row && row.date === at.slice(0, 10)) out.push({ ...row, name });
      }
      if (above || announcedAboveBar) {
        const row = comingUpSignal({ slug, item, project, now: Date.parse(at) });
        if (row) out.push({ ...row, sourceUrl: row.sourceUrl, name });
      }
    }
  }
  return out;
}

async function runBacktest(days) {
  const { stdout } = await execFileAsync("git", ["log", "--reverse", "--format=%H %cI", "--", "content/pulled"]);
  const commits = stdout.trim().split("\n").filter(Boolean).map((line) => {
    const [sha, at] = line.trim().split(/\s+/);
    return { sha, at };
  });
  const cutoff = Date.now() - days * 86_400_000;
  const firstInWindow = commits.findIndex((commit) => Date.parse(commit.at) >= cutoff);
  // One commit before the window is kept as the baseline every comparison needs.
  const window = commits.slice(Math.max(0, (firstInWindow < 0 ? commits.length : firstInWindow) - 1));
  const root = await mkdtemp(join(tmpdir(), "icarus-backtest-"));
  const lines = [];
  try {
    const snapshots = [];
    for (const commit of window) {
      const snapshot = await snapshotAt(commit.sha, root);
      snapshot.at = commit.at;
      snapshot.historyBySlug = new Map();
      let historyFiles = [];
      try { historyFiles = (await readdir(join(snapshot.dir, "content/pulled/history"))).filter((file) => file.endsWith(".jsonl")); } catch { /* none yet */ }
      for (const file of historyFiles) {
        const points = (await readFile(join(snapshot.dir, "content/pulled/history", file), "utf8"))
          .split("\n").filter(Boolean).flatMap((line) => { try { return [JSON.parse(line)]; } catch { return []; } })
          .sort((a, b) => String(a.at).localeCompare(String(b.at)));
        snapshot.historyBySlug.set(basename(file, ".jsonl"), points);
      }
      snapshots.push(snapshot);
    }

    // Every event carries the pull instant it belongs to, so the day budgets apply in real order.
    const events = [];
    for (let i = 0; i < snapshots.length; i += 1) {
      const snapshot = snapshots[i];
      const seenPulls = new Set([...snapshot.historyBySlug.values()].flatMap((points) => points.map((point) => point.at)));
      const priorPulls = i === 0
        ? new Set()
        : new Set([...snapshots[i - 1].historyBySlug.values()].flatMap((points) => points.map((point) => point.at)));
      for (const pullAt of [...seenPulls].filter((at) => !priorPulls.has(at)).sort()) {
        for (const signal of backtestBreakouts(snapshot, pullAt)) events.push({ at: pullAt, signal });
      }
      if (i === 0) continue;
      // A control change observed between i-1 and i is sent only when snapshot i+1 still reads it.
      const fresh = backtestControl(snapshots[i - 1], snapshot);
      const confirmer = snapshots[i + 1];
      if (!confirmer) continue;
      const pending = fresh.flatMap((row) => row.changes.map((change) => ({ slug: row.slug, ...change })));
      const { confirmed } = confirmControlChanges(pending, [], confirmer.pulled, Date.parse(confirmer.at));
      for (const row of confirmed) {
        const address = row.changes.find((change) => change.address)?.address;
        events.push({
          at: confirmer.at,
          signal: {
            ...row,
            name: confirmer.content.projects.get(row.slug)?.name ?? row.slug,
            tldr: snapshotTldr(confirmer.content.projects.get(row.slug)),
            sourceUrl: address ? `https://robinhoodchain.blockscout.com/address/${address}` : null,
          },
        });
      }
      for (const signal of backtestFeedSignals(snapshot, snapshot.at)) events.push({ at: snapshot.at, signal });
    }

    events.sort((a, b) => String(a.at).localeCompare(String(b.at)));
    const byDay = new Map();
    for (const event of events) {
      const day = event.at.slice(0, 10);
      byDay.set(day, [...(byDay.get(day) ?? []), event]);
    }
    const allDays = [];
    for (let offset = days - 1; offset >= 0; offset -= 1) {
      allDays.push(new Date(Date.now() - offset * 86_400_000).toISOString().slice(0, 10));
    }
    const firstData = snapshots[0]?.at?.slice(0, 10) ?? null;

    lines.push(`Replay of the committed record: ${window.length} pull commit(s), ${events.length} rule hit(s).`);
    lines.push("The fixed disclaimer line is omitted from each message below.");
    lines.push("");
    let total = 0;
    for (const day of allDays) {
      const dayEvents = byDay.get(day) ?? [];
      if (!dayEvents.length) {
        const reason = firstData && day < firstData ? "no data" : "no rule cleared";
        lines.push(`### ${day} — no message. ${reason}.`);
        lines.push("");
        continue;
      }
      let budget = { date: day, count: 0, names: [], kinds: {} };
      const sent = [];
      // Pull by pull, exactly as the live run applies the budget.
      for (const at of [...new Set(dayEvents.map((event) => event.at))].sort()) {
        const candidates = dayEvents.filter((event) => event.at === at).map((event) => event.signal);
        const result = selectDailyAlerts(candidates, budget, day);
        budget = result.next;
        for (const signal of result.selected) sent.push({ at, signal });
      }
      lines.push(`### ${day} — ${sent.length} message${sent.length === 1 ? "" : "s"} (${dayEvents.length} rule hit${dayEvents.length === 1 ? "" : "s"} before the budget)`);
      lines.push("");
      sent.forEach((row, index) => {
        total += 1;
        lines.push(`**Message ${index + 1} — rule: ${row.signal.kind} — ${row.at}**`);
        lines.push("```");
        lines.push(plainText(formatSignalAlert(row.signal, {
          name: row.signal.name ?? row.signal.slug,
          tldr: row.signal.tldr ?? null,
          siteUrl,
          profilePath,
        })));
        lines.push("```");
        lines.push("");
      });
      const suppressed = dayEvents.length - sent.length;
      if (suppressed > 0) {
        lines.push(`_${suppressed} further rule hit${suppressed === 1 ? "" : "s"} that day did not clear the budget._`);
        lines.push("");
      }
    }
    lines.push(`Total: ${total} message${total === 1 ? "" : "s"} across ${days} day(s).`);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
  console.log(lines.join("\n"));
}

if (backtestDays > 0) {
  await runBacktest(backtestDays);
  process.exit(0);
}

// The owner's kill switch (#89) covers every mode, not only the approval-gated publications:
// alerts, the daily brief and the Sunday wrap all stop when the channel is paused. A dry run still
// previews, so pausing the channel never blinds the operator to what would have gone out.
if (review.channel_enabled !== true && !dryRun) {
  console.log("Icarus channel delivery is paused in ops/telegram-review.json — nothing sent.");
  process.exit(0);
}

// Each message carries the state edit that records it. Nothing is written into `state` before its own
// send succeeds, so a Telegram 429 on the second of three alerts cannot leave the first unrecorded and
// re-sent on the next run.
const messages = [];
const push = (texts, record = null) => {
  const rows = Array.isArray(texts) ? texts : [texts];
  rows.forEach((text, index) => messages.push({ text, record: index === rows.length - 1 ? record : null }));
};
let alertResult = null;

if (modes.includes("publications")) {
  let entries = selectShareBar(selectApproved(content.changelog, state, review, { since, all }), derivedFile.shareBar)
    .sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
  if (limit > 0) entries = entries.slice(0, limit);
  if (markSent) state.sent_keys = [...new Set([...(state.sent_keys ?? []), ...entries.map(entryKey)])];
  else if (entries.length) {
    push(buildMessages(entries, {
      siteName: content.site.name,
      date: entries.at(-1)?.date ?? today,
      projects: content.projects,
      derivedBySlug: new Map(Object.entries(derivedFile.projects ?? {})),
      siteUrl,
      profilePath,
    }), () => { state.sent_keys = [...new Set([...(state.sent_keys ?? []), ...entries.map(entryKey)])]; });
  }
}

if (modes.includes("alerts")) {
  alertResult = await computeAlerts();
  // The signal state that is not per-message — rank holds, pending control changes, the weekly log —
  // is refreshed once whether or not anything sent, so a quiet pull still advances the confirmations.
  const carried = { ...alertResult.nextSignalState, sent_keys: state.signal_state?.sent_keys ?? [], alert_daily: state.signal_state?.alert_daily };
  if (!dryRun) state.signal_state = carried;
  for (const signal of alertResult.selected) {
    push(formatSignalAlert(signal, {
      name: projectName(signal.slug), tldr: projectTldr(signal.slug), siteUrl, profilePath,
    }), () => {
      const prior = state.signal_state ?? {};
      const budget = selectDailyAlerts([signal], prior.alert_daily, today);
      state.signal_state = {
        ...prior,
        alert_daily: budget.next,
        sent_keys: [...new Set([...(prior.sent_keys ?? []), signal.signalKey])].slice(-2_000),
      };
    });
  }
}

if (modes.includes("brief")) {
  const data = alertResult ?? await computeAlerts();
  if (all || state.last_brief_date !== today) {
    push(buildDailyBrief(buildBriefData(data.pulled, data.histories, await loadChain(), data.ranked ?? [])),
      () => { state.last_brief_date = today; });
  }
}

if (modes.includes("weekly")) {
  const week = weekKey();
  if (all || state.last_weekly_week !== week) {
    push(buildWeeklyWrap(buildWrapData()), () => { state.last_weekly_week = week; });
  }
}

if (dryRun) {
  const texts = messages.map((message) => message.text);
  console.log(texts.length ? texts.join("\n\n--- next Telegram message ---\n\n") : "Icarus: no signal message due.");
  console.log(`\n--- dry run: modes ${modes.join(", ")} · ${texts.length} message(s). Nothing sent; state unchanged.`);
  process.exit(0);
}

async function writeState() {
  await mkdir("ops", { recursive: true });
  await writeFile(STATE, JSON.stringify(state, null, 2) + "\n");
}

if (markSent && modes.includes("publications")) {
  await writeState();
  console.log("Marked approved publications as sent without posting.");
  process.exit(0);
}

let delivered = 0;
let failure = null;
try {
  for (const message of messages) {
    await send(message.text);
    delivered += 1;
    message.record?.();
    state.last_sent_at = new Date().toISOString();
  }
} catch (error) {
  failure = error;
} finally {
  // Whatever happened above, what did go out is on disk before this process ends.
  await writeState();
}
console.log(delivered ? `Sent ${delivered} Telegram message(s); state recorded in ${STATE}.` : "No Telegram message due; signal state refreshed.");
if (failure) {
  console.error(failure.message);
  process.exit(1);
}
