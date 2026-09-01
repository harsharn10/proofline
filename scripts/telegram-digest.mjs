// Approval-triggered Telegram publisher (PRD §9.2): sends only changelog publications explicitly
// approved in ops/telegram-review.json and not yet sent. Direct items become event cards; approved
// roundup items are batched. A merge alone never authorizes delivery.
//   node scripts/telegram-digest.mjs --dry-run            preview, send nothing, keep state
//   node scripts/telegram-digest.mjs --since 2026-08-30   only entries on/after a date
//   node scripts/telegram-digest.mjs --all --limit 5      ignore sent-state, cap entries
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { loadContent } from "./lib/load.mjs";
import { derive } from "./lib/score.mjs";
import { selectApproved, buildMessages, readDotEnv, entryKey } from "./lib/telegram.mjs";

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const dryRun = flag("--dry-run"), all = flag("--all"), since = opt("--since"), limit = Number(opt("--limit") ?? 0);
const testOnly = flag("--test"), markSent = flag("--mark-sent");

let env = { ...process.env };
try { env = { ...readDotEnv(await readFile(".env.local", "utf8")), ...env }; } catch { /* no .env.local */ }
const token = env.TELEGRAM_BOT_TOKEN, chatId = env.TELEGRAM_CHAT_ID;
const siteUrl = env.SITE_URL ?? "", profilePath = env.PROFILE_PATH ?? "/n/";

const STATE = "ops/telegram-state.json";
let state = { sent_keys: [] };
try { state = JSON.parse(await readFile(STATE, "utf8")); } catch { /* first run */ }
const REVIEW = "ops/telegram-review.json";
let review = { version: 2, channel_enabled: false, decisions: {} };
try { review = JSON.parse(await readFile(REVIEW, "utf8")); } catch { /* fail closed */ }

const content = await loadContent("content");

async function send(text) {
  if (!token || !chatId) { console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID — put them in .env.local."); process.exit(1); }
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
  });
  if (!res.ok) { console.error(`Telegram rejected the message (${res.status}): ${(await res.text()).slice(0, 300)}`); process.exit(1); }
}

if (testOnly) {
  await send(`<b>${content.site.name.toUpperCase()}</b> digest bot connected. Research updates will post here when something material is published.`);
  console.log("Test message sent. No digest state changed.");
  process.exit(0);
}
let entries = selectApproved(content.changelog, state, review, { since, all })
  .sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
if (limit > 0) entries = entries.slice(0, limit);
if (!entries.length) {
  const reason = review.channel_enabled === true
    ? "No approved, unsent research changes — nothing sent."
    : "Channel delivery is paused in ops/telegram-review.json — nothing sent.";
  console.log(reason);
  process.exit(0);
}
if (markSent) {
  state.sent_keys = [...new Set([...(state.sent_keys ?? []), ...entries.map(entryKey)])];
  await mkdir("ops", { recursive: true });
  await writeFile(STATE, JSON.stringify(state, null, 2) + "\n");
  console.log(`Marked ${entries.length} change(s) as sent without posting. Future digests start after this point.`);
  process.exit(0);
}

const derivedBySlug = new Map([...content.projects].map(([slug, p]) => [slug, derive(p)]));
const messages = buildMessages(entries, {
  siteName: content.site.name, date: entries[entries.length - 1].date,
  projects: content.projects, derivedBySlug, siteUrl, profilePath,
});

if (dryRun) {
  console.log(messages.join("\n\n--- next Telegram message ---\n\n"));
  console.log(`\n--- dry run: ${entries.length} change(s), ${messages.length} message(s). Nothing sent; state unchanged.`);
  process.exit(0);
}
if (!token || !chatId) {
  console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID — put them in .env.local. Use --dry-run to preview.");
  process.exit(1);
}
for (const message of messages) await send(message);
state.sent_keys = [...new Set([...(state.sent_keys ?? []), ...entries.map(entryKey)])];
state.last_sent_at = new Date().toISOString();
await mkdir("ops", { recursive: true });
await writeFile(STATE, JSON.stringify(state, null, 2) + "\n");
console.log(`Sent ${messages.length} message(s) covering ${entries.length} change(s). State recorded in ${STATE}.`);
