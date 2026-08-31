// Task 5 — build content/accounts.yaml from the Grok desk's account ledger (Task 5 addendum mapping).
//
//   node scripts/build-accounts.mjs
//
// Inputs (read-only): research/inbox/account-desk.yaml (wins), research/inbox/2026-08-31-accounts.yaml
// (rows the desk does not have), content/census.yaml (handle → slug), content/feed/*.yaml (handles that
// appear in feed items must exist in the ledger).
//
// tier:  skip       listen == skip-ingest, or the desk's conduct flags (its `impersonator` / `drainer` labels,
//                   which we read as handle-collision / third-party-link) — "posts not ingested as evidence"
//        top        listen == high AND role ∈ {alpha, kol}
//        downweight listen == mute-trend; or follow: false with listen low; or engagement farm/bot;
//                   or engagement mixed with trust ≤ 1   (scrape, never count toward trending)
//        watch      everything else
// role:  copied; the desk's `builder` → project (team accounts, cannot trend), `farm` → kol (all skip-tier)
// note:  observable behaviour only — what the account posts and whether it is treated as official. The desk's
//        `why` is used verbatim only when it already reads that way; OVERRIDES carries the rewrites. The build
//        fails on any hype word (voice.mjs) or conduct word (conductWarnings) in a note.
import { readFile, writeFile, readdir } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { voiceWarnings, conductWarnings } from "./lib/voice.mjs";

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
// Desk `why` lines that trip the voice lint, carry conduct words, or read as verdicts — rewritten to the
// observable behaviour behind them (fix round 1 ruling E; review Important 2).
const THIRD_PARTY_LINK = "Posted a link to a third-party 'holder portal' domain (cryptolot.lol) alongside the SCOPL token address on 30 Aug; the domain is not the project's; posts not used as evidence.";
const OVERRIDES = {
  "@thinkingcatRH": "$HMM PFP generator; HMM is a Wire-adjacent culture token, not a mechanism.",
  "@AdamEShelton": "High-reach account that posts memecoin contract addresses; not counted toward trending.",
  "@0xCB27": "Posts a recurring list of RWA-token holdings; treated as claims.",
  "@Pongorh": "$PONGO Pons graduation with a dog-meme narrative; no mechanism.",
  "@safehoodonrh": "$SAFEHOOD Pons and Sinjoh graduation token; not the @_safehood protocol.",
  "@SafehoodCTO_": "Community-takeover account for the $SAFEHOOD token, not the Safehood protocol.",
  "@sight_hood": "Official account; states the project has no token and a Genesis mint on 2 Sep.",
  "@annisapt_": THIRD_PARTY_LINK,
  "@My_Stomachfat": THIRD_PARTY_LINK,
  "@fomokidpump_gew": THIRD_PARTY_LINK,
  "@VoidlexETH_ias": THIRD_PARTY_LINK,
  "@KarmaWallet_Eco": "Tagged an Ethereum address ($JIMOTHY) as the Pons token; do not use for contract addresses.",
  "@GoodCoinRH": "$GOOD graduation; Gate Alpha and Tangem listings.",
  "@DaoKingdom": "Quoted a MaxFi promotional video; the desk mutes it for trending.",
  "@ArrowFinanceHQ": "Second account using the Arrow Finance name (555 followers at snapshot); not treated as official until the team confirms; posts not used as evidence.",
  "@arrowfinances": "Third account using the Arrow Finance name; not treated as official; posts not used as evidence.",
  "@alphai_onchain": "Posted about Delta after the official posts; promotional register; not counted toward trending.",
  "@QUOTRONGenesis": "Mint account not treated as official by the desk; the project's account is @Quotrons404; posts not used as evidence.",
  "@Canopy_Finance": "Handle appeared as a typo in a HoodInsider recap; the project's account is @canopyfinance; posts not used as evidence.",
  "@Ponsbotfamily": "Handle resembles the official @ponsdotfamily; not treated as official; posts not used as evidence.",
  "@RHDaily_": "Seeded as a typo of @RHDaily__; the handle resolves to an unrelated account; posts not used as evidence.",
  "@RobinPAD_MEME": "Display name collides with @Robin_Pad (a different launchpad); posts not used as evidence for either.",
  "@MetalHead_rh": "Handle shares the METALHEAD token's name; not confirmed as the project's account.",
  "@theunipcs": "High-reach posts about the chain that name no mechanism or contract; not counted toward trending.",
  "@yousef_sol": "Posted one comparison of Delta's age and fee take against Meteora; not a recurring source.",
  "@zackfromsubway": "Seeded from the Chain File dossiers; no mechanism call recorded.",
  "@hookosfun": "Multi-chain hook launchpad ($HOOK); zero Robinhood Chain volume on DefiLlama; kept on file so it is not merged with Hookr.",
  "@layerggofficial": "Posts all-time-high recaps with contract addresses across chains, including BSC tickers next to Robinhood Chain ones; use its addresses, not its tickers.",
  "@Noxa_Fi": "Official NOXA Fun account; DefiLlama lists the pad's fees.",
  "@sleuth_ai": "AI tool account active on Base, Robinhood Chain and Solana; its community token address is on Base; not the StonkBrokers Sleuth TGE.",
  "@RVHProtocol": "Ravenhood DAO treasury account; posts about farming on UPDex and SwapHood; observe.",
  "@fox_onrh": "Account of the FOX culture token; the FoxPad launchpad's own handle is unconfirmed.",
};

function tierOf(r) {
  const flags = r.flags ?? [];
  if (r.listen === "skip-ingest" || flags.includes("impersonator") || flags.includes("drainer")) return "skip";
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
  // Census lookup wins over a stale intake slug (the intake said `fox`; the census row is `foxpad`).
  const s = slugByHandle.get(handle) ?? slug;
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
for (const r of list) {
  for (const w of voiceWarnings(r.note ?? "", r.handle)) { console.error(`voice: ${w}`); hits++; }
  for (const w of conductWarnings(r.note ?? "", r.handle)) { console.error(`conduct: ${w}`); hits++; }
}
if (hits) { console.error(`${hits} note(s) need a behaviour-only rewrite — add an OVERRIDES entry`); process.exit(1); }
const counts = {};
for (const r of list) counts[r.tier] = (counts[r.tier] ?? 0) + 1;
const header = `# CT accounts for the trending signal — built by scripts/build-accounts.mjs from research/inbox/account-desk.yaml
# (wins) + research/inbox/2026-08-31-accounts.yaml + census/feed handles, per the Task 5 addendum mapping.
# tier: top | watch | downweight | skip — only top + role alpha/kol counts toward trending (scripts/lib/trending.mjs);
# skip = posts not ingested as evidence (handle collisions, unconfirmed official accounts, third-party links); the row
# is kept so the collision is not lost. Notes describe observable behaviour only. role: project | alpha | kol | data | infra | media.
# Counts: ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", ")} (total ${list.length}). Hand edits welcome; rerun the script only to rebuild from the desk.
`;
await writeFile("content/accounts.yaml", header + stringify(list, { lineWidth: 0 }));
console.log(`accounts: ${list.length} rows — ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", ")}`);
