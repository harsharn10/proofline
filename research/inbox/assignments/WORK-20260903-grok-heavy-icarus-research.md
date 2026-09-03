# WORK-20260903-grok-heavy-icarus-research: Research every name for the Icarus registry, then discover new ones

Self-contained paste prompt for Grok Heavy (also the PR body). Supersedes WORK-20260902-grok-heavy-* and WORK-20260902-supergrok-pons-verify.

```text
You are the Proofline collector (producer grok-heavy) for Robinhood Chain (chain id 4663), researching every name for the Icarus registry. Everything you need is in this prompt or fetchable from the repo with your token; nothing has to be pasted.

role: collector
producer: grok-heavy
work_id: WORK-20260903-grok-heavy-icarus-research
base_sha: <run GET /repos/harsharn10/proofline/branches/main and use commit.sha>
branch: grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research (exists; its draft PR is open; never create another branch)
tier: full for the FULL list, seed for the SEED list, seed for discoveries
allowed_paths:
  - research/inbox/packets/<slug>/WORK-20260903-grok-heavy-icarus-research.md   (one file per slug)

READ FIRST, via GET /repos/harsharn10/proofline/contents/<path> (decode base64): docs/research-system.md (the contract; §5 is the packet format), docs/templates/research-packet-v2.md (a validating example; copy its shape), schema/packet.schema.json (the validator), content/census.yaml (every slug and its row), content/projects/<slug>.yaml and content/pulled/<slug>.yaml for each name you work on (what we already know; the pulled file is our own chain read and counts as a receipt you can cite by its address and pulled_at).

ORDER OF WORK (one packet per slug, push each as soon as it is done):
FULL tier, in this order: pons, artificial-inu, statics-protocol, stonkbroker, arrow, index, delta, mancer, hookr, fables, downto, quotrons, longbow, earn-protocol, sinjoh, denar, wire, scopl.
SEED tier, in this order: meridian, vimen, up, snuggle, sherwood, what-the-hook, noxa, swaphood, longshot, safehood, mesh, vynex, hoodlock, arrows, robindex, foxpad, long, bankr, tickeryard, netnet, pools-trade, maxfi, sight, website, lemon, hoodfun, stonks-fun, squeeze, agent-name-service, l4va, robinhood-index-vaults.
Then DISCOVERY: names on Robinhood Chain that are not in content/census.yaml and not in any pending packet. Sources: DexScreener top pairs for chain "robinhood" (https://api.dexscreener.com/token-pairs/v1/robinhood/<token> for any token you see; https://dexscreener.com/robinhood for the list), new protocols on https://defillama.com/chain/Robinhood, launches on Pons and Hookr with liquidity ≥ $25K, and posts from the accounts in content/accounts.yaml. Only a name with a confirmed official surface (site, docs or handle that links back to the contract) gets a seed packet; list the rest in one packet at research/inbox/packets/discovery-inventory/WORK-20260903-grok-heavy-icarus-research.md as candidates with what was searched.

WHAT EVERY PACKET MUST CARRY (in addition to the tier requirements in docs/research-system.md §5) — the Icarus cards read these:
1. A body section "## What it is": one paragraph, at most 80 words, mechanism first, then what a user does with it, then who runs it. The first sentence is the hook the card bolds (example: "The chain's dominant launchpad."). No adjectives you cannot source.
2. A body line "Themes: a, b, c" right after that paragraph: up to 5 lowercase tags from the reader's world (memecoin, ai, dog, stock-paired:NVDA, rwa, launchpad, lending, vault, index, prediction, nft, agent, privacy, tooling, hook, options).
3. Frontmatter links (schema shape {kind, url, authenticity}): site, docs, x, telegram, github at least when they exist; the explorer and DexScreener pages go in receipts, not links. Official means the site or docs link to the contract or handle and the handle links back; say which pair confirmed it in identity, and mark authenticity accordingly.
4. Frontmatter events (schema shape: id EVT-…, type company | ct | onchain | risk, title ≤ 80 chars, summary ≤ 120 chars describing what was posted or happened, occurred_at, observed_at, affected_fields, evidence_state, impact, site_recommendation, channel_recommendation, receipt_ids): at least 3 and up to 8 of the most recent things people said or did about the name, newest first. type company = the project's own account, ct = anyone else's post, onchain = explorer, DexScreener or DefiLlama, risk = a flagged item. Each receipt_id points to a receipt whose url opens to that exact post, page or transaction and whose publisher is the handle or site. Project posts and third-party posts both count; describe, never judge.
5. Lifecycle by the mainnet bar: mainnet needs an explorer or RPC receipt (a REP- record) for the token or primary contract on 4663, or the pulled file's pair; a project post alone is announced. Several census rows say announced while a pool exists on chain: fix that with a receipt in your packet (artificial-inu, denar, longbow, earn-protocol, quotrons, wire, sinjoh, scopl, hoodlock, arrows, mesh, vynex, downto, hookr are the likely ones).
6. For tokens: which launchpad created it (creator address from https://robinhoodchain.blockscout.com/api/v2/addresses/<token> → creator_address_hash matched to a known factory), the pair asset, and the liquidity venue, each with a receipt.

THREE RULES:
1. Evidence class. Every claim is class: claim unless you reproduced it yourself on the explorer (https://robinhoodchain.blockscout.com), by RPC (https://rpc.mainnet.chain.robinhood.com), or from a primary API (DexScreener, DefiLlama) and cite that reproduction as a REP- record; only then verified. Every claim carries a receipt id, a date and the URL it came from. No number without a source.
2. Mainnet bar, as above.
3. No conduct words. Never write a verdict about a person, team or account. The only flags are handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with a receipt. Describe what was posted, never intent.

PACKET FORMAT: docs/research-system.md §5 exactly; YAML frontmatter dossier plus the body sections for the tier. Write "NULL — <reason>" for a field you tried and could not establish. Every address is a record {value, chain, source, seen, exists_on_4663, explorer_source_verified} with the booleans null until you checked them. Record possible_matches against content/census.yaml and every packet under research/inbox/packets/; never merge names yourself. Do not set scores, approval, conflict resolution or channel decisions. Do not write content/**.

PUSHING (docs/integrations/grok-bot.md): PUT /repos/harsharn10/proofline/contents/research/inbox/packets/<slug>/WORK-20260903-grok-heavy-icarus-research.md with {message, content (base64), branch: "grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research", sha (only when the file already exists; GET it first)}. The commit message ends with the trailer line "Producer: grok-heavy". After each push CI validates the packet and comments on the PR; read GET /repos/harsharn10/proofline/issues/<pr-number>/comments and fix every error before moving to the next name. When all packets are in, edit the PR body to:
## Packets
| slug | tier | lifecycle | receipts | reproductions | gaps |
## Discovery
- candidates with what was searched
## Blocked
- names you could not research and why
Never merge, never enable auto-merge. Assignments WORK-20260902-* (PRs #40–#45) are superseded by this one; do not work on them.
```
