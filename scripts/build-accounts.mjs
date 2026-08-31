// Task 5 — build content/accounts.yaml from the Grok desk's account ledger (Task 5 addendum mapping).
//
//   node scripts/build-accounts.mjs
//
// Inputs (read-only): research/inbox/account-desk.yaml (wins), research/inbox/2026-08-31-accounts.yaml
// (rows the desk does not have), content/census.yaml (handle → slug), content/feed/*.yaml (handles that
// appear in feed items must exist in the ledger).
//
// tier:  blacklist  listen == skip-ingest, or flags include impersonator / drainer
//        top        listen == high AND role ∈ {alpha, kol}
//        downweight listen == mute-trend; or follow: false with listen low; or engagement farm/bot;
//                   or engagement mixed with trust ≤ 1   (scrape, never count toward trending)
//        watch      everything else
// role:  copied; the desk's `builder` → project (team accounts, cannot trend), `farm` → kol (all blacklisted)
// note:  the desk's `why`, first sentence (two if the first is very short), voice rules applied via OVERRIDES
import { readFile, writeFile, readdir } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { voiceWarnings } from "./lib/voice.mjs";

const readYaml = async (p) => parse(await readFile(p, "utf8"));
/** The desk files are hand-written; quote `why:` / `note:` values a strict parser rejects (read-only inputs). */
const readLoose = async (p) => parse((await readFile(p, "utf8")).split("\n").map((line) => {
  const m = line.match(/^(\s+(?:why|note):\s)(.*)$/);
  if (!m) return line;
  const v = m[2];
  const badQuote = /^["']/.test(v) && !/^(["']).*\1\s*$/.test(v);
  const badPlain = !/^["']/.test(v) && /:\s|\s#/.test(v);
  return badQuote || badPlain ? m[1] + JSON.stringify(v) : line;
}).join("\n"), { uniqueKeys: false });
const desk = (await readLoose("research/inbox/account-desk.yaml")).accounts;
const intake = await readLoose("research/inbox/2026-08-31-accounts.yaml");
const census = await readYaml("content/census.yaml");
const censusSlugs = new Set(census.map((c) => c.slug));
const slugByHandle = new Map(census.filter((c) => c.handle).map((c) => [c.handle, c.slug]));

// Follower snapshots quoted in research/inbox/2026-08-31-accounts-and-snapshot.md §3 and fills 6 / 15 (X lookups 2026-08-30/31).
const FOLLOWERS = { "@MancerXYZ": 6800, "@uselongshot": 108, "@ArrowFinanceio": 8500, "@fablesfi": 3000, "@ClutchMarkets": 25400, "@UseSqueeze_RH": 4, "@RHDaily__": 7600, "@ArrowFinanceHQ": 555, "@Quotrons404": 5300, "@RobinPAD_MEME": 8000 };
const ROLE = { builder: "project", farm: "kol" };
// Desk `why` lines that trip the voice lint or read as verdicts, rewritten to the same meaning.
const OVERRIDES = {
  "@thinkingcatRH": "$HMM PFP generator; HMM is a Wire-adjacent culture token, not a mechanism.",
  "@AdamEShelton": "High reach, memecoin contract posts; heat only, never trending.",
  "@0xCB27": "Recurring RWA holdings list on X; treat as claims.",
  "@Pongorh": "$PONGO Pons graduation with a dog-meme narrative; no mechanism.",
  "@safehoodonrh": "$SAFEHOOD Pons and Sinjoh graduation token; not the @_safehood protocol.",
  "@sight_hood": "Official account; states the project has no token and a Genesis mint on 2 Sep.",
  "@annisapt_": "Posted a SCOPL 'holder portal' at cryptolot.lol on 30 Aug; the desk flagged it as not official and a phishing risk.",
  "@My_Stomachfat": "Same cryptolot.lol SCOPL portal copy as other flagged accounts.",
  "@fomokidpump_gew": "Same cryptolot.lol SCOPL portal copy as other flagged accounts.",
  "@VoidlexETH_ias": "Same cryptolot.lol SCOPL portal copy as other flagged accounts.",
  "@KarmaWallet_Eco": "Tagged an Ethereum address ($JIMOTHY) as the Pons token; do not use for contract addresses.",
  "@GoodCoinRH": "$GOOD graduation; Gate Alpha and Tangem listings.",
};

function tierOf(r) {
  const flags = r.flags ?? [];
  if (r.listen === "skip-ingest" || flags.includes("impersonator") || flags.includes("drainer")) return "blacklist";
  if (r.listen === "high" && ["alpha", "kol"].includes(r.role)) return "top";
  if (r.listen === "mute-trend") return "downweight";
  if (r.follow === false && r.listen === "low") return "downweight";
  if (["farm", "bot"].includes(r.engagement)) return "downweight";
  if (r.engagement === "mixed" && (r.trust ?? 1) <= 1) return "downweight";
  return "watch";
}
function noteOf(handle, why) {
  if (OVERRIDES[handle]) return OVERRIDES[handle];
  if (!why) return undefined;
  const parts = String(why).trim().split(/(?<=\.)\s+/);
  let note = parts[0];
  if (note.length < 22 && parts[1]) note = `${note} ${parts[1]}`;
  return note;
}
function row(handle, tier, role, note, slug) {
  const out = { handle, tier };
  if (role) out.role = ROLE[role] ?? role;
  const s = slug ?? slugByHandle.get(handle);
  if (s && censusSlugs.has(s)) out.slug = s;
  if (FOLLOWERS[handle] !== undefined) out.followers = FOLLOWERS[handle];
  if (note) out.note = note;
  return out;
}

const rows = new Map();
// 1. The desk (newest) — later duplicates within the file win.
for (const r of desk) rows.set(r.handle, row(r.handle, tierOf(r), r.role, noteOf(r.handle, r.why)));
// 2. Rows only the earlier accounts intake has; weight → tier as-is.
for (const r of intake) if (!rows.has(r.handle)) rows.set(r.handle, row(r.handle, r.weight, r.role, noteOf(r.handle, r.note), r.slug));
// 3. Census handles and feed handles not yet listed → watch (official accounts are role project).
for (const c of census) if (c.handle && !rows.has(c.handle)) rows.set(c.handle, row(c.handle, "watch", "project", `Official account per the desk map; added so the census row has its handle on file.`, c.slug));
for (const f of await readdir("content/feed")) {
  const feed = await readYaml(`content/feed/${f}`);
  for (const it of feed.items ?? []) if (it.account && !rows.has(it.account)) rows.set(it.account, row(it.account, "watch", undefined, "Handle cited by a feed item; not yet classified by the desk."));
}

const list = [...rows.values()].sort((a, b) => a.handle.localeCompare(b.handle, "en", { sensitivity: "base" }));
let hits = 0;
for (const r of list) for (const w of voiceWarnings(r.note ?? "", r.handle)) { console.error(`voice: ${w}`); hits++; }
if (hits) process.exit(1);
const counts = {};
for (const r of list) counts[r.tier] = (counts[r.tier] ?? 0) + 1;
const header = `# CT accounts for the trending signal — built by scripts/build-accounts.mjs from research/inbox/account-desk.yaml
# (wins) + research/inbox/2026-08-31-accounts.yaml + census/feed handles, per the Task 5 addendum mapping.
# tier: top | watch | downweight | blacklist — only top + role alpha/kol counts toward trending (scripts/lib/trending.mjs);
# blacklist rows are kept so impersonations and collisions are not lost. role: project | alpha | kol | data | infra | media.
# Counts: ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", ")} (total ${list.length}). Hand edits welcome; rerun the script only to rebuild from the desk.
`;
await writeFile("content/accounts.yaml", header + stringify(list, { lineWidth: 0 }));
console.log(`accounts: ${list.length} rows — ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", ")}`);
