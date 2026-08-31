# Harvest record — Grok research intake → content/ (Task 5, 2026-08-31)

What the two research intakes became in `content/`, what was left out and under which rule, and every judgment
call. Nothing harvested is `verified`; every statement is `class: claim` with a ledger entry, every address is
`verified: false`. Methodology `proofline-v1.0`, researcher `harsharn10`.

## 1. Inputs

| Artifact | Path | Used for |
|---|---|---|
| Chain File dossiers (42) | `research/inbox/grok-2026-08-30/chain-file.json` | feed items, addresses, links, risk notes |
| Workbook script (sheets 01–07) | `research/inbox/grok-2026-08-30/build_rh_tokens.py` | sheet 01 → stock-tokens deployments; sheet 02 → protocol addresses, supply and fee claims; sheets 03–06 → hybrids, pads, infra |
| Desk ecosystem map | `research/inbox/2026-08-31-ecosystem-map.yaml` | the census (`subjects:`), dependency cards, observe / graduation lists, handles, DefiLlama figures |
| Desk fills 1–17 | `research/inbox/2026-08-31-x-fill*.md` | dated, attributed X posts → feed items and findings |
| Desk account ledger | `research/inbox/account-desk.yaml` (wins) + `research/inbox/2026-08-31-accounts.yaml` | `content/accounts.yaml` |
| Process notes | `2026-08-31-ops.md`, `2026-08-31-ecosystem-tree.md`, `2026-08-31-accounts-and-snapshot.md` | rulings on collisions, suspect addresses, follower snapshots |

Tooling committed for this pass: `scripts/import-chain-file.mjs` (intake → `drafts/`), `scripts/harvest-data.mjs`
(the sourced prose), `scripts/apply-harvest.mjs` (drafts + harvest → projects / sources / feed / stock-tokens
deployments), `scripts/build-accounts.mjs`, `scripts/build-dependency-cards.mjs`.

Intake quirks handled read-only (the files were not edited): the map repeats the `llama:` key on the `stonkbroker`
row and has unquoted `note:` scalars containing `": "` (line 80); the desk ledger has `why: "szn" reach.` (a quoted
scalar with trailing text) and lists `@MCGlive`, `@rallypadfun`, `@flapdotsh` twice. The importers quote / dedupe.

## 2. Census

**49 rows** = the 14 PRD seed names + **35** desk `subjects:` (the map held 49 subjects at merge; the addendum's
"48" predates round 17, which promoted SwapHood). No `citable: false` rows remain: every desk subject has an
official X handle or repository. Every row carries `handle` (48 of 49 — Robinhood Index Vaults has none) and
`tree` (the desk's placement); `category` stays the PRD enum.

Slug and name decisions:

| Map | Census | Why |
|---|---|---|
| `fox` "FOX" | `foxpad` "FoxPad" | The map's own note says "split before filing"; the brief lists FoxPad as in and FOX-the-mascot as out (PRD §2.2 pure culture meme). The row is the pad; the FOX token address is recorded as the asset the pad's fee split buys. Fix round 1: the FOX board-placement feed item was dropped (it was about the token) and the row's T2/T4 are `value: false` (ruling D). |
| `index` "The Index" | `index` "The Index" | Brief: keep slug, rename. |
| `stonkbroker` "StonkBrokers" | name → "StonkBrokers" | The project's own name (workbook, X). Slug kept. |
| `website` "notawebsite" | kept as-is | Map fidelity; `/n/website` is odd but harmless. |

Category for tree leaves with no enum match (closest PRD value; the tree carries the real placement):

| Tree leaf | Census category | Rows |
|---|---|---|
| `trading/amm-native`, `trading/hook-mev`, `yield/fee-router` | Fee-routing protocol (the tree doc's own `trading/*` mapping) | up, Fables, SwapHood, What The Hook, Sinjoh |
| `credit/isolated-money-market`, `credit/credit-overlay` | Lending | Denar, Longbow |
| `yield/lp-manager`, `yield/savings-vault` | Yield | Delta, MaxFi, Snuggle, EARN, Vynex |
| `agents/agent-launch-layer`, `agents/agent-execution` | Agent / execution | Virtuals, Wire (Bankr already) |
| `agents/agent-identity`, `tooling/*`, `privacy/private-transfer` | Scanner / tooling | Agent Name Service, Mesh, HoodLock, Robindex, Squeeze, Sherwood |
| `rwa-products/reserve-currency` | RWA baskets | NetNet |
| `rwa-products/synthetic-asset` | Oracle / infra | TickerYard |
| `rwa-products/ad-space` | NFT / treasury | notawebsite |
| `launch/*` | Launchpad | Hookr, NOXA, pools.trade, FoxPad, Lemon, hood.fun, Stonks.fun (LONG, Safehood already) |

Lifecycle changes (each has a `type: stage` changelog entry dated 2026-08-31):

- mancer mainnet → **beta** (project's 14 Aug gated-beta and 25 Aug audit posts; no public-open post through 31 Aug)
- arrow mainnet → **announced** (CDP open dated 31 Aug 09:30 ET; desk's last check preceded it; token contracts on Blockscout ≠ CDP live)
- meridian announced → **mainnet** (DefiLlama TVL rows only — recorded as a missing-evidence line)
- statics-protocol mainnet → **beta** (project: DEX not live, credit off, Genesis epoch)
- safehood mainnet → **announced** (desk: official account quiet since 16 Jul, lifecycle unknown → ruling 2)

Ruling 2 (`unknown` → `announced` + "Lifecycle not verified — no deployment evidence reviewed"): safehood, l4va,
agent-name-service.

**Fix round 1, ruling C — lifecycle follows evidence.** `mainnet` requires evidence beyond the project's own posts
(explorer / Blockscout, a DefiLlama chain-slice row, or docs that publish addresses). Every subject the EVAL
(`research/inbox/EVAL-research-branch-2026-08-31.md` §5) marks ◐ or ✗ on test 1 and that stood at `mainnet` moved to
`announced`, with the `findings.missing` line "Mainnet status rests on the project's own posts; not independently
verified" and a `type: stage` changelog entry — **25 slugs**: artificial-inu, longshot, long, bankr, denar, longbow,
netnet, tickeryard, earn-protocol, hookr, quotrons, pools-trade, wire, maxfi, mesh, foxpad, scopl, website, lemon,
robindex, vynex, sinjoh, hoodlock, arrows, stonks-fun. Kept `mainnet` on independent evidence (test 1 ✓): pons,
stonkbroker, index, meridian, vimen, up, fables, noxa, virtuals, delta, snuggle, sherwood, what-the-hook, swaphood
(14). mancer and statics-protocol stay `beta` (the map says beta). Census lifecycle after the round: mainnet 14 ·
beta 2 · announced 32 · testnet-only 1. Four of the changed rows are PRD seed names (artificial-inu, longshot, long,
bankr) whose seed-table `mainnet` rested on PRD Appendix A addresses that have not been reproduced on the explorer.

**Fix round 1, ruling D — honest qualifying flags.** Seven rows keep their census row but carry `value: false` on the
test(s) the EVAL fails outright, with the eval's reason in `note` (visible `validate` warning; `validate:release`
error — intended): robinhood-index-vaults (T1), virtuals (T2), l4va (T1, T4), squeeze (T1, T4), agent-name-service
(T1), foxpad (T2, T4 — the pad's only evidence is one dossier line naming foxpad.app; no handle or address was found,
so the judge call went the eval's way), robindex (T4). Ten qualifying warnings in total.

## 3. Excluded dossiers (22 of 42) and the rule

| Dossier | Rule |
|---|---|
| stock-tokens, nvda, spy, spcx, hood, gme, usar | Robinhood-issued Stock Tokens are never standalone profiles (PRD §2.2) → `dependencies/stock-tokens.yaml` deployments |
| earn (Robinhood Earn / Morpho), morpho, uniswap, chainlink, lighter | Day-one infra (PRD §2.2) → dependency cards |
| cashcat, hmm, brodie | Pure culture memes with no mechanism (PRD §2.2) |
| wifi (DogWifHood) | Culture meme; "utility" is a KOL video, no documented protocol (PRD §2.2) |
| metalhead | Not launched; a Pons meme announcing a USAR drip — graduation until a mechanism exists |
| monkeybiz (MonkeyBizCash) | Not minted; announced clone of the StonkBrokers pattern, no contract or site |
| robinwifhat | Token + promised pad; the same-developer claim is CT — graduation until the pad ships |
| rstocks | Pons-launched HOOD printer; site said "awaiting Pons launch" — graduation |
| atlas | Dossier is an empty placeholder (no address, no link); workbook names atlasprotocolrh.com — observe |
| poolsfun | GeckoTerminal note on Sushi-V3 launches; not shown to be pools.trade — observe (noted on the pools-trade row as unresolved) |

The `longshot` dossier describes long.xyz (LONG), not Longshot; its content was mapped to `long`.

## 4. Desk `observe:` (87 names) — not census rows

Seen on DefiLlama / X / docs, not yet qualified (ecosystem-tree §1). Listed so nothing is lost; promote only when a
mechanism, an official handle and a control-plane story exist (PRD §2.1).

**native_amms** — 7 entries
- GIGA (@giga_dex) — Llama TVL $507,796
- RamsesX (@RamsesExchange) — Llama TVL $1,665,103
- Alandale (@alandalexyz) — Llama TVL $625,877
- Orvex (@OrvexFi) — Llama TVL $292,808
- Ekubo / STONX (@EkuboProtocol) — Llama TVL $1,467,878
- Deepstate (@josephdelong) — Llama TVL $157,805
- What The Hook (@whatthehookv4) — Llama TVL $1,933,892

**credit** — 6 entries
- Native Credit Pool (@native_fi) — Llama TVL $317,210
- Accountable (@AccountableData) — Llama TVL $499,801
- Sharewoods (@SharewoodsFi) — Llama TVL $2
- USDAX Finance (@Usdax_Finance) — Llama TVL $0
- TermMax (@TermMaxFi) — Llama TVL $0
- Gami Labs (@GamiLabs) — Llama TVL $568,145

**other_pads** — 21 entries
- token.select (@selectfdn) — Llama TVL $352,903
- Sentry (@sentrylauncher) — Llama TVL $123,452
- Coinbarrel (@UseCoinbarrel) — Llama TVL $53,958
- Flap sh — revenue 24h $9,747
- LetsCash — revenue 24h $8,672
- Bags — revenue 24h $7,816
- o1.exchange — revenue 24h $6,867
- basedbid (@basedbidx) — Llama TVL $40,648
- Peeps (@peepsdotwtf) — Llama TVL $25,517
- RaiseHood (@RaiseHood) — Llama TVL $18,097
- Based Alpha (@BasedOneX) — Llama TVL $14,645
- MerryForge (@merryforge) — Llama TVL $13,439
- Boardwalk (@useboardwalk) — Llama TVL $6,754
- DexLaunch (@dexlaunchfun) — Llama TVL $8,605
- Unihood (@unihoodotfun) — Llama TVL $3,418
- RobinFun (@robinfunxyz) — Llama TVL $1,938
- RH.fun (@RHdotfun) — Llama TVL $1,679
- ArrowPad.fun (@Arrowpadfun) — Llama TVL $590 — Not Arrow Finance CDP.
- HoodMint (@HoodMintFun) — Llama TVL $582
- Frontier (@frontierhood) — Llama TVL $458
- popi

**yield_games** — 10 entries
- SLVR (@S_L_V_R_FUN) — revenue 24h $27,306
- StockRip (@stockripx) — Llama TVL $171,099
- T3tris Finance (@0xT3tris) — Llama TVL $781,861
- DexFi Aggregator (@DexFinance) — Llama TVL $938,256
- Saffron Vaults (@saffron) — Llama TVL $258,782
- EZManager / EZMoney (@EZManagerCL)
- Astro (@astrofungame) — Llama TVL $85,441
- Fake Wall Street (@fwsfun) — Llama TVL $15,114
- STOCKMON (@stockmonrh) — Llama TVL $21,418
- Orchard

**markets** — 2 entries
- Hoodbets (@hoodbetsxyz) — Llama TVL $1,060
- wambo.fun (@Wambofun) — Llama TVL $0

**privacy** — 1 entries
- Privacy Cash (@theprivacycash) — Llama TVL $3,857

**telegram_exec** — 2 entries
- GMGN — revenue 24h $1,110,000 — Largest revenue line on the chain. Wrapper, not a native play.
- Maestro — revenue 24h $36,938

**builders_named_on_x_not_on_llama** — 38 entries
- GoMintly (@GoMintly) — Agent-managed LP on tokenized equities. Virtuals ecosystem recap.
- Gwood Finance (@GwoodFinance)
- pools.fun (@pools_dot_fun)
- FoxPad — Launchpad vs FOX mascot — keep as observe until handle confirmed.
- MaxFi
- RobinPad / Odyssey (@Robin_Pad) — Was @Odysseydot_fun. openpump instant+curve. Pad + RobinPerps (Hyperliquid 150+ markets wrapper). Not Meridian. Docs factories are cas.candidate. Quiet since 19 Aug.
- RobinPAD_MEME (@RobinPAD_MEME) — Different account (fairest/fastest meme pad). Collision with @Robin_Pad. Do not merge.
- StonksFun (@stonksdotfun) — DN-404 Doppler pad. $REDACTED ZEC pair. Also filed as candidate slug stonks-fun.
- clan.tech (@clantechapp) — SocialFi groups / friendtech-on-RH. LBank listing claimed. Not FOMO venue.
- Openpump (@openpumpio) — MCP trading infra + pad inventory source. Not a subject.
- FOMO venue — fomo.family trading frontend. Distinct from $FOMO token and from clan.tech.
- Orderly (@OrderlyNetwork) — No-code perp DEX builder 130+ markets. Imported.
- Rallypad (@rallypadfun) — Programmable market layer (humans+agents). Bonding curve, livestream trade, 40% swap fees to attention/buybacks. Distinct from Hookr (hook compose) and Pons.
- ObsidianSwap (@ObsidianSwap) — Cross-chain to/from RH.
- Project VEX (@ProjectVEXai) — Agentic launches through pools.trade. Distinct from Wire (Pons) and Bankr.
- Hood City (@hoodcityonhood) — Landmark product. Machine unclear.
- Banana Gun (@bananagun) — Stonklauncher pre-bond + 30% cashback. Exec bot.
- Dolores (@DoloresResearch) — Virtuals agent. Graduation until own venue.
- Good Coin (@GoodCoinRH) — Graduation. Gate Alpha + Tangem.
- Ctrl Fi (@JoinCtrlFi) — Creator pad — keep 80%, locked LP, instant Uni V4, audited. Distinct from Pons/Hookr/pools.trade.
- Obscura (@ObscuraCEX) — AI trade-builder UI.
- WISE Token (@WISE_Token) — USDG telecom nodes claimed 22% APY. Observe.
- Ponscade (@PonscadeRH) — address in intake 0x7086a13aa868b2bf8ed98a86ce1daac62eb6a856 — Arcade game, not a protocol.
- STORMM — StonkBrokers product. Official @ClutchMarkets 29 Aug. Not a separate slug. Not Sleuth.
- Sleuth TGE — aixbt only 27 Aug. Confirm @ClutchMarkets. Do not merge with @sleuth_ai (Base) or with STORMM.
- HookOS (@hookosfun) — address in intake 0x85d4e6F147BFb5729378E451F32cf5287dE75f97 — Multi-chain hook launchpad + app store. $HOOK. Uniswap v4 incubation (Atrium). Llama 0 vol. NOT Hookr (@Hookrfun). Candidate if RH volume appears.
- MosaicETF (@MosaicETF) — address in intake 0x776650808dda2ae08653dc70cdac45a9ce39e025 — Wallet-mirror baskets: paste address, freeze holdings, 0.30% creator fee, redeemable to real tokens, no admin key. RH live; Base/BNB next. Not Index, not Statics.
- Flap (@flapdotsh) — Stock-token pair support on RH. Programmable dividends/buybacks/burns. Llama launchpad already.
- Prism Assets (@prismassets) — 99 new tokenized assets claimed (diamonds, platinum). Observe.
- Funded Protocol (@FundedProtocol) — Onchain prop-firm claim. Observe.
- Canopy (@canopyfinance) — address in intake 0x532c5583671870723ceef573600208af49c87c54 — agen.space NL→v4. $CNPY ratchet buys stocks or buybacks. HoodInsider @Canopy_Finance is the wrong handle. Not Hookr.
- Liquidium (@LiquidiumWTF) — Announced RH expansion. Observe.
- Vantis (@vantis_ai) — x402 facilitator on USDG rails. Observe.
- Moby (@mobyagent) — KOL tracking / trigger buys. Exec. Observe.
- Hood Insider (@HoodInsider_) — Weekly recap media. Numbers are claims. Distinct from @RHDaily__.
- Hoodit — Llama DEX dust.
- HoodFrens — Llama SoFi row.
- YOWL (@YowlonHood) — address in intake 0x062939bB32EaBD47A522FE48872F41E04017a095 — yowl.trade Morpho. Related to stonks.fun. Graduation/app until mechanism is independent.

## 5. Desk `graduation:` (11 examples) — never auto-filed

Rule: A token minted by Pons, LONG, Bankr, StonkBrokers, NOXA, or any other pad is graduation until it has its own protocol/vault/fee machine.
- TAYSOM (pad: bankr, pair TSM) — 0x9965de8400b382164e4dbF6dc0E5035cfFE28ba3
- SBC (pad: bankr, pair MSFT) — 0x1965765e00c4047879289Eec1a3702C2aAF9DbA3
- CQ (pad: bankr, pair QQQ) — 0xFE995FAAE56956aD78833bf8cc26fa014E4D5BA3
- PIGGY (pad: pons) — @ponspiggybank full-reserve claim — still a pad output until mechanism is documented independently.
- Harmonic Agents token (pad: pons) — Agent that claims Pons collector fees. Could graduate to agents/agent-product if control plane is real.
- SAFEHOOD (pad: pons) — 0x663492eab45ed21d6bdd7836efdc1a9cd51ae199 — @safehoodonrh — Sinjoh tek buyback+4x airdrop. Not census Safehood protocol.
- PONGO (pad: pons) — 0xedAee44320107CAa714BaAEc486261A87F27022d — @Pongorh — Dog-meme narrative. ATH ~$5.5m. Bag until own machine.
- HOOD10 — CASHCAT whale buy ~$4.6m MC. Graduation.
- REDACTED (pad: stonks-fun) — ZEC-pair on @stonksdotfun. Graduation.
- HFUN (pad: pons) — 0x01224f6012e02ba6d4602613c638c5b1d428b609 — Not the hood.fun pad.
- FOMO token — 0xecda99a916f0b3863840884047339ddbe4dffb9d — Not FOMO the trading venue (fomo.family) and not clan.tech.

## 6. Addresses

**84 deployments** on 49 projects: 38 with an address (all `verified: false`), 46 `not-verified` placeholders.
**199 deployments** on the stock-tokens card: 194 sheet-01 Stock/ETF rows (S1) + 4 app-side addresses where the
app disagrees (S2) + HOOD (app only; not in sheet 01). USAR agrees in both and carries `[S1, S2]`. WETH and USDG
were sheet-01 "core assets": USDG went to `dependencies/usdg.yaml` (S1), WETH was not carded.

Two sources, different addresses (both recorded, neither canonical — owner decision 2026-08-30):

| Ticker | Workbook sheet 01 | Chain File app |
|---|---|---|
| NVDA | 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC | 0xc3553EC6ac7A44e5B1231c6B7f1d04a4de19C0a0 |
| SPY | 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C | 0x6A046E3495e2937Fa1cC25730575d82873ADb910 |
| SPCX | 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa | 0x32eB791940173CA92d869121dE1D382048A92Db7 |
| GME | 0x1b0E319c6A659F002271B69dB8A7df2F911c153E | 0xD1C418cEa7d1A56c2e68D8e0C326F59A76061379 |

Same address, two sources (recorded once with both ids): PONS token (map, workbook, fill 17), INDEX (dossier,
workbook), BOW (dossier, workbook), DENAR (dossier, map, fill 3), EARN (map, workbook), ARROW / aUSD (map,
workbook, fill 17), ARROWS (workbook, map), STATICS (map, workbook — differ only in hex case), QUOTRON (map,
workbook, fill 1), HOOKR (map, fill 1), HOOD/SwapHood (fills 15, 17, map), FOX (dossier, map).

Addresses kept **out of `deployments`** (in `findings.risk` or the text only):

- 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 — a PONS-ticker token at a different address (workbook "FAKE CA") → pons risk
- 0x07f5b6823751c2e2cd4560f28af75ff887102241 — Ethereum cashtag address, not a contract on 4663 (fill 17) → pons, longbow, scopl risk
- 0x663492eab45ed21d6bdd7836efdc1a9cd51ae199 — $SAFEHOOD Pons graduation (@safehoodonrh) → safehood risk
- 0x01224f6012e02ba6d4602613c638c5b1d428b609 — $HFUN Pons graduation → hoodfun risk
- 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 — Bankr-launched BOW-ticker token → longbow risk
- 0x85d4e6F147BFb5729378E451F32cf5287dE75f97 — HookOS $HOOK (observe, not Hookr) → hookr risk
- 0x76af8d3B… — third-party LOCK address, truncated in the intake → hoodlock risk
- Every observe / graduation address (Ponscade, Canopy, Mosaic, YOWL, PONGO, TAYSOM, SBC, CQ, FOMO, OddyseyAI, Odyssey/NOXA, InstantRobinFactory) stays in this file's lists

**SCOPL token 0xaA40e79E987517f7462bF79315B8A118799B04E3 — filed as a deployment (ruling F, fix round 1).** The
addendum names SCOPL as a desk-flagged address (ops.md §1 "treated SCOPL CAs as real once"). Desk rounds 12 and 16
then reversed that: the address sits in the official account's bio and in a SpyWolf audit for chain 4663. The
reviewer confirmed the withdrawal; the token stays a `verified: false` deployment with a `findings.risk` line stating
that the address was flagged as suspect in one desk round and the flag withdrawn in later rounds, not reproduced on
Blockscout in this review. The cryptolot.lol "holder portal" posts remain a separate risk line and a `kind: risk`
feed item.

ArrowPad factory 0x1Badc838… is a deployment on `arrow` labelled as the launchpad, not the CDP (map `pad_not_cdp`).
Vynex's token address is a deployment labelled as a third-party citation (the project never posted it).

## 7. Feed

45 feed files, 105 items (18 `ct`) after fix round 1 (the FOX board-placement item on `foxpad` was dropped). Every
item is dated, attributed (`account` = the handle) and cites the ledger entry for the fill / dossier it came from;
`sourceUrl` is the account's X profile (no status ids in the intake) or the artifact URL — an intake limitation, not
a shape the contract endorses: `docs/integrations/grok-bot.md` §2.2 requires a post URL (a status link) going
forward, and these 105 items predate that requirement. DefiLlama figures became one
`onchain` item per subject dated 2026-08-31 with `sourceUrl: https://defillama.com/protocol/pons` for Pons (the only
protocol page the map names) and the chain page for the rest — protocol slugs were not guessed. Five items come from
posts the desk captured without their date (arrows-1, netnet-3, tickeryard-1, website-2, sinjoh-2): they are dated
2026-08-31 and each body ends "(captured by the desk on 2026-08-31; original post date not recorded)" — the convention
is now in README's feed section. `pools-trade-2` (Project VEX on pools.trade) is dated 2026-08-30 with the RH Daily
thread it came from. `hoodlock-1` keeps 2026-08-29: fill 6 dates the Mintera 25% post to 29 Aug. Undated /
unattributed dossier items were dropped (Longbow "first CEX access", long.xyz "AI/NVDA defines the meta").

Trending after this pass: **0** — the four counting accounts (`top` + `alpha`) have no `kind: ct` items in the window.
`@andrewtalksdefi`'s 24 Aug utility list gives delta / wire / mesh / website one `ct` item each.

## 8. Accounts (`content/accounts.yaml`, 156 rows)

| tier | count | rule |
|---|---|---|
| top | 4 | desk `listen: high` and role alpha/kol — @0xSammy, @Adam_Tehc, @ahboyash, @andrewtalksdefi |
| watch | 110 | every other `follow: true` row, plus census handles and feed handles the desk had not scored |
| downweight | 31 | `listen: mute-trend`; `follow: false` + `listen: low`; engagement farm/bot; engagement mixed with trust ≤ 1 |
| skip | 11 | `listen: skip-ingest` or the desk's conduct flags (read here as handle-collision / third-party-link) — @RHDaily_, @ArrowFinanceHQ, @arrowfinances, @Ponsbotfamily, @QUOTRONGenesis, @Canopy_Finance, @RobinPAD_MEME, @annisapt_, @My_Stomachfat, @fomokidpump_gew, @VoidlexETH_ias |

Fix round 1, ruling E: the tier is `skip` ("posts not ingested as evidence"), not `blacklist`, everywhere — schema,
trending, validate, tests, README, spec. Every `skip` / `downweight` note describes observable behaviour (what the
account posts, whether it is treated as official, whether a handle collides) and never conduct; `build-accounts.mjs`
fails on hype or conduct words and `validate` now lints `accounts[].note` the same way. 33 notes are rewritten in
`OVERRIDES` (up from 12), including the four the review named (@DaoKingdom, @ArrowFinanceHQ, @alphai_onchain,
@QUOTRONGenesis).

Roles: project 99, kol 23, infra 17, alpha 7, data 5, media 5. The desk's `builder` maps to `project` (team accounts;
cannot trend under the new rule either way) and `farm` to `kol` (all four are skip-tier) — the schema enum is the
addendum's six values. `slug` is set for 48 rows (census handles; `@fox_onrh` → `foxpad` after the census lookup was
made to win over the intake's stale `fox`). `followers` for the 10 handles the snapshot notes quote. Where the desk
and the earlier accounts intake disagree the desk wins (e.g. the trench KOLs went watch → downweight; `@RHDaily_` went
watch → skip as the typo of `@RHDaily__`).

## 9. Dependency cards

16 new skeleton cards from the map's `dependencies:` — morpho, steakhouse, lighter, arcus, spark, layerzero,
symbiosis, alchemy, opensea, sushi, pancakeswap, curve, uncx, kyberswap, rialto, maple-syrupusdg (with the workbook's
syrupUSDG address as a `verified: false` deployment). `uniswap` and `usdg` got a ledger entry each (usdg also its
address). The `stock-tokens` card gained three ledger entries, claim-level controls and the 199 deployments.

`dependency.kind` was extended with `lending, yield, bridge, infra, nft-marketplace, locker, aggregator` so Morpho is
not filed as a "DEX". **Site note:** `site/src/data/types.ts` `DEPENDENCY_KIND_LABEL` only knows the original five
kinds; the new cards render with an empty kind label until that map gains the seven keys (`site/` is out of scope here).

## 10. Other judgment calls

- Virtuals is a subject although multi-chain: the desk qualified the Robinhood Chain instance as a native agent-launch
  layer (brief minimum list includes it); the row files the layer, not its agents.
- Meridian's category stays Prediction market (PRD seed) although the desk's primary leaf is perps-native; the tree
  carries both.
- Longshot's category stays Fee-routing protocol (PRD seed) although the desk's primary leaf is stock-paired factory.
- `reviewed_at` bumped to 2026-08-31 on all 49 projects (they were all touched); `approver: pending` unchanged.
- `scripts/seed-stubs.mjs` now dates new stubs to the run date (`SEED_DATE` overrides); the 35 new "Initial stub
  opened" changelog entries are dated 2026-08-31.
- `validate` now counts feed `sources` as citations for the never-cited warning (a feed item was already required to
  cite an existing id; it just did not count as use).
- Fix round 1: three analyst inferences that had been filed as `claim` are now `class: inference` (wire router-approval
  patch, The Index's volume-dependent payouts) or trimmed to the attributed fact (l4va press release); Blockscout's
  contract-source flag is written out as "contract source code verified on Blockscout (per the desk)" so it cannot be
  read as Proofline verification; the three PRD Appendix A addresses ($AI, Longshot token, LONG factories) cite a PRD
  ledger entry.
- The desk's map lists What The Hook both as a subject and under observe.native_amms (with the Llama TVL); the subject
  row uses the figure.
- Fables: the workbook (30 Aug) said not launched with a PROLOGUE TGE on 5 Oct; the desk map and DefiLlama (31 Aug)
  list it live. Filed mainnet per the map with the conflict as `unresolved`.
- Sherwood: workbook (agent capital layer, $WOOD) vs map (private transfer). Filed per the map with the conflict as a
  `risk` (two products under one name) — category Scanner / tooling.

## 11. Open questions for the owner

Settled in fix round 1: SCOPL stays a deployment with a risk line (ruling F); Meridian stays `mainnet` on the DefiLlama
row (EVAL test 1 ✓); the capture-date convention is documented (ruling A); `blacklist` → `skip` (ruling E).

1. The seven new `dependency.kind` values need a one-line label addition in `site/src/data/types.ts`; the site's
   `AccountTier` type (`"top" | "watch"`) also predates `downweight` / `skip` (it only filters for `top`, so no crash).
2. `website` as a slug (map fidelity) vs `notawebsite`.
3. Four PRD seed names (artificial-inu, longshot, long, bankr) are now `announced` under ruling C; the PRD seed table
   says `mainnet` — reproduce the Appendix A addresses on Blockscout to restore it.
