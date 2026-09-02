# Proofline content data model audit

Repo: `/Users/harsharnsingh/proofline`. Audited 2026-09-01. Read-only pass over `schema/`, `content/`, `scripts/`, `PRD.md`, `docs/taxonomy.md`.

Scale: 49 census rows, 49 project files, 49 source ledgers, 49 research markdown files, 45 feed files, 21 dependency cards, 85 changelog entries, 156 accounts.

---

## 1. Field inventory

### `schema/project.schema.json`

`additionalProperties: false`. Required: `slug`, `name`, `symbol`, `category`, `lifecycle`, `coverage`, `summary`, `official_links`, `dependencies`, `deployments`, `review`, `findings`.

| Field | Req | Meaning |
|---|---|---|
| `slug` | required | Canonical id, `^[a-z0-9-]+$` |
| `name` | required | Display name |
| `symbol` | required | Ticker or explicit `null` |
| `category` | required | Flat 18-value enum from `shared#/$defs/category` |
| `lifecycle` | required | mainnet / beta / announced / inactive / testnet-only |
| `coverage` | required | full / stub. Gates whether `scoring` is required or forbidden |
| `summary` | required | One-paragraph description, min length 1 |
| `official_links[]` | required | `{kind, url}`. kind: site, app, docs, whitepaper, x, github, telegram, discord, other |
| `dependencies[]` | required | Slugs, each must resolve to `content/dependencies/<id>.yaml` |
| `deployments[]` | required | `{label, chain, address, role, verified, sources}` plus optional `issuer`, `ticker`. Address may be the literal `not-verified` only when `verified: false`; when `verified: true` the address must match a real 0x or base58 pattern and `sources` needs at least one entry |
| `metrics[]` | optional | `{kind, value, currency?, as_of, class, sources}`. `class` is `const: "claim"`. Kinds: tvl, volume_24h, fees_24h, revenue_24h, market_cap, holders. `currency` is forbidden on `holders` |
| `review` | required | `{researcher, approver, methodology_version, reviewed_at, published_at}`. `approver` pattern explicitly rejects tbd/none/todo/na/n-a but allows the literal `pending` |
| `scoring` | full only | Required when `coverage: full`, explicitly forbidden when `coverage: stub` |
| `findings` | required | `{positive[], risk[], missing[], unresolved[]}` |

Nested groups inside `scoring`:

| Group | Req | Meaning |
|---|---|---|
| `scoring.security` | required | Seven named tests: `deployment_verifiability`, `privileged_power`, `authorization_topology`, `timelock_exit_window`, `audit_deployment_match`, `continuous_safeguards`, `incident_handling`. Each is `{level: full/partial/zero, evidence[], note}`. A non-zero level requires at least one evidence id |
| `scoring.factors` | required | `engineering`, `transparency`, `maturity`, `economic`. Each is `{level: strong/mixed/weak/insufficient, positive[], negative[], missing[], evidence[]}` |
| `scoring.confidence` | required | Five integers 0-100: `primary_source_coverage`, `onchain_verification`, `independent_corroboration`, `freshness`, `review_completeness` |
| `scoring.risk` | required | `{assessed: Low/Moderate/Elevated/High/Critical, reason}` |
| `scoring.override` | optional | `{level: Critical/High/Elevated, reason, evidence[]}`, at least one evidence id |

Nested groups inside `findings`:

| Group | Req | Meaning |
|---|---|---|
| `findings.positive[]` | required | `{text, class, sources}`. `class` is one of verified/claim/inference/disputed/unknown. Any class other than `unknown` requires at least one source; `unknown` requires zero |
| `findings.risk[]` | required | Same shape as positive |
| `findings.missing[]` | required | `{text}` only. No evidence class, no sources. Stubs must have at least one |
| `findings.unresolved[]` | required | `{text}` only. No evidence class, no sources |

### `schema/census.schema.json`

Top-level is an array. Required per item: `slug`, `name`, `identity`, `category`, `lifecycle`, `coverage`, `official_links`, `discovery_source`, `qualifying`.

| Field | Req | Meaning |
|---|---|---|
| `slug`, `name`, `category`, `lifecycle`, `coverage` | required | Mirrors of the project file. Enforced equal by `MIRRORED_FIELDS` in `scripts/lib/checks.mjs:6` |
| `identity` | required | `{aliases[], symbols[], entity_kind, chain_scope, status, conflict_ids[]?}`. `entity_kind`: protocol/application/token/infrastructure/tool/collection/unknown. `chain_scope`: robinhood-native/multichain/cross-chain/unknown. `status`: verified/provisional/conflicted. `conflict_ids` required only when status is `conflicted` |
| `official_links[]` | required | Same shape as the project file. NOT enforced equal to the project file |
| `discovery_source` | required | Free-text provenance string |
| `qualifying` | required | The PRD section 2.1 four tests: `deployed_on_chain`, `native_play`, `citable`, `research_story`. Each is `{value: bool, note, verified: bool}` |
| `handle` | optional | Single X handle, `^@[A-Za-z0-9_]{1,15}$` |
| `tree` | optional | `{primary, secondary[]?}`. Paths constrained to `^(launch|rwa-products|trading|yield|agents|tooling|credit|nft-treasury|markets|privacy|chain-infra)/[a-z0-9-]+$`. The leaf itself is a free slug, not enumerated against `docs/taxonomy.md` |

### `schema/feed.schema.json`

Required: `slug`, `items`.

| Field | Req | Meaning |
|---|---|---|
| `slug` | required | Must equal the filename and exist in census |
| `items[].id` | required | Unique within the file |
| `items[].date` | required | ISO date |
| `items[].kind` | required | company / ct / onchain / risk |
| `items[].title` | required | Headline |
| `items[].body` | required | Prose, arbitrary length |
| `items[].sources[]` | required | At least one S-id, must exist in `content/sources/<slug>.yaml` |
| `items[].account` | optional | X handle. Required in practice for the trending signal, since `computeTrending` skips items without one |
| `items[].sourceUrl` | optional | Direct link |

### `schema/source-entry.schema.json`

Every one of the eleven fields is required. There are no optional fields.

| Field | Req | Meaning |
|---|---|---|
| `id` | required | `^S[1-9][0-9]*$`, unique within the slug's ledger |
| `url` | required | Original URL |
| `publisher` | required | Who published it |
| `kind` | required | official-site / docs / whitepaper / social / explorer / repository / audit / announcement / third-party-data / news / other |
| `accessed_at` | required | date-time |
| `claim` | required | What this source supports |
| `excerpt` | required | Max 500 chars |
| `hash` | required, nullable | Content hash when a local snapshot is kept |
| `archive_url` | required, nullable | Archive link |
| `researcher` | required | Researcher id |
| `available` | required | Boolean. A dead source stays in the ledger marked false |

---

## 2. Population stats across all 49 projects

| Field | Projects with a value | Total rows | Max on one project |
|---|---|---|---|
| `symbol` non-null | 31 / 49 | 31 | — |
| `official_links` | 49 / 49 | 85 | 6 |
| `dependencies` | 36 / 49 | 60 | 5 |
| `deployments` | 46 / 49 | 96 | 15 |
| deployments with a real address | 26 / 49 | 51 | 15 |
| deployments with `verified: true` | **1 / 49** | 13 | 13 |
| `metrics` | 12 / 49 | 21 | 3 |
| `scoring` | **1 / 49** | — | — |
| `findings.positive` | 49 / 49 | 174 | 9 |
| `findings.risk` | 33 / 49 | 58 | 9 |
| `findings.missing` | 49 / 49 | 243 | 7 |
| `findings.unresolved` | 33 / 49 | 36 | 3 |
| feed items | 45 / 49 | 120 | 12 |
| source ledger entries | 49 / 49 | 308 | 33 |
| research markdown words | 49 / 49 | 6,511 | 2,420 |

### Sub-breakdowns

**Deployments.** 96 rows total, 45 of them carry the literal `not-verified` placeholder. Role split: token 36, factory 21, vault 18, other 17, router 3, multisig 1. Only pons has any `verified: true` rows (13 of its 15).

**Metrics.** 21 rows across 12 projects. Kinds used: tvl 8, revenue_24h 7, volume_24h 3, fees_24h 3. The enum also allows `market_cap` and `holders`; both have zero rows.

**Research markdown.** 46 of 49 files are the untouched 60-word stub template with eleven `_Research pending._` sections. Only three carry real prose: pons 2,420 words, statics-protocol 728, mancer 592.

**Source ledgers.** 308 entries across 144 distinct URLs. Kind split: social 125, third-party-data 118, official-site 28, explorer 19, docs 11, repository 5, whitepaper 1, other 1. Origin split: 159 point at this repo's own `research/inbox`, 58 at x.com, 29 at DefiLlama, 20 at Blockscout or the chain RPC, 42 other external. `hash` is null on all 308. `archive_url` is null on all 308. `available: false` on zero.

**Feed.** 120 items across 45 files. Kinds: company 64, onchain 24, ct 24, risk 8. 90 items carry an `account`. Four slugs have no feed file at all: `agent-name-service`, `foxpad`, `longshot`, `robinhood-index-vaults`.

**Census identity.** `symbols` non-empty on 31. `aliases` non-empty on 0. `conflict_ids` on 0. `status`: provisional 48, verified 1. `entity_kind`: protocol 40, tool 6, token 2, infrastructure 1. `chain_scope`: unknown 48, robinhood-native 1. `handle` present on 48.

**Census qualifying.** `deployed_on_chain` true on 45, `native_play` true on 47, `citable` true on 49, `research_story` true on 45. But `verified: true` on exactly 1 row (pons) for every one of the four tests.

**Lifecycle.** announced 31, mainnet 15, beta 2, testnet-only 1, inactive 0.

**Changelog.** 85 entries, all 49 slugs represented. Type: coverage 50, stage 30, finding 3, score 1, correction 1. Severity: Info 51, Review 32, Material 2, Risk 0. Only 1 entry carries the optional `channel` publication block.

### Schema fields populated on 0 to 2 projects

| Field | Populated |
|---|---|
| `scoring` | 1 (pons) |
| `scoring.override` | 0 |
| `deployments[].verified: true` | 1 project |
| `deployments[].issuer`, `.ticker` | 0 in projects (used only inside dependency cards) |
| metric kind `market_cap` | 0 |
| metric kind `holders` | 0 |
| `identity.aliases` | 0 |
| `identity.conflict_ids` | 0 |
| `identity.status: verified` | 1 |
| `identity.chain_scope: robinhood-native` | 1 |
| `qualifying.*.verified: true` | 1 |
| source `hash` | 0 of 308 |
| source `archive_url` | 0 of 308 |
| source `available: false` | 0 of 308 |
| source kind `audit` | 0 |
| source kind `news` | 0 |
| changelog `channel` | 1 of 85 |
| changelog severity `Risk` | 0 of 85 |
| category `Perpetuals` | 0 |
| category `Stablecoin` | 0 |
| `tree.secondary` | 13 of 49 |
| research md beyond template | 3 of 49 |

---

## 3. Category data

### Flat enum

`shared#/$defs/category` has 18 values: Launchpad, Aggregator, Stock-paired token, Fee-routing protocol, NFT / treasury, RWA distributor, RWA baskets, CDP, Agent / execution, Prediction market, Index vault, Lending, Options, Yield, Perpetuals, Oracle / infra, Stablecoin, Scanner / tooling. Sixteen are in use.

| Category | Count | Category | Count |
|---|---|---|---|
| Launchpad | 10 | Prediction market | 2 |
| Fee-routing protocol | 6 | Stock-paired token | 2 |
| Scanner / tooling | 6 | RWA distributor | 1 |
| Yield | 5 | CDP | 1 |
| Agent / execution | 3 | Index vault | 1 |
| NFT / treasury | 3 | Options | 1 |
| RWA baskets | 3 | Oracle / infra | 1 |
| Aggregator | 2 | Perpetuals | 0 |
| Lending | 2 | Stablecoin | 0 |

### Taxonomy tree

`tree.primary` is populated on all 49 census rows, spanning 32 distinct leaves from `docs/taxonomy.md`. `tree.secondary` is populated on 13. Leaf distribution: `launch/other-pad` 4, `trading/amm-native` 3, `yield/lp-manager` 3, then 2 each for `launch/bonding-curve`, `trading/aggregator`, `rwa-products/stock-paired-token`, `launch/stock-paired-factory`, `nft-treasury/token-bound-nft`, `agents/agent-execution`, `rwa-products/redeemable-basket`, `launch/uni-pool-launch`, `yield/savings-vault`, `tooling/scanner`, and 1 each for the remaining 19.

The leaf path pattern in `census.schema.json` constrains only the domain prefix. The leaf itself is a free slug, so a typo would validate. `docs/taxonomy.md` is normative prose, not a machine gate; it says so at the top.

### Category versus taxonomy leaf conflicts

Ten rows where the leaf's domain contradicts what the flat category claims.

| Slug | Category | Leaf | Reading |
|---|---|---|---|
| longshot | Fee-routing protocol | launch/stock-paired-factory | Filed as fee routing, classified as a launch factory |
| meridian | Prediction market | trading/perps-native | Summary says both perps and prediction; category picked the smaller half |
| up | Fee-routing protocol | trading/amm-native | It is a native AMM |
| fables | Fee-routing protocol | trading/amm-native | It is a ve(3,3) DEX |
| swaphood | Fee-routing protocol | trading/amm-native | It is a PancakeSwap V3 fork |
| what-the-hook | Fee-routing protocol | trading/hook-mev | MEV redistribution hook |
| tickeryard | Oracle / infra | rwa-products/synthetic-asset | Ships yBTC; nothing oracle-shaped |
| sherwood | Scanner / tooling | privacy/private-transfer | Private transfers, not a scanner |
| agent-name-service | Scanner / tooling | agents/agent-identity | Name registry, not a scanner |
| website | NFT / treasury | rwa-products/ad-space | Tokenized ad slots |

Two more pass the domain check but still read wrong to a human: `hoodlock` is a liquidity locker filed under "Scanner / tooling", and `mesh` is a machine-payments gateway filed the same way. "Fee-routing protocol" has become the dumping ground for native AMMs (up, fables, swaphood, what-the-hook are four of its six members).

### All 49 slugs

| Slug | Category | Leaf | Lifecycle | Summary |
|---|---|---|---|---|
| bankr | Agent / execution | agents/agent-execution | announced | Agent execution surface that launches tokens from X and runs its own stock-paired factory |
| virtuals | Agent / execution | agents/agent-launch-layer | mainnet | Multi-chain AI-agent launch layer with a Robinhood Chain instance; DefiLlama lists its revenue here |
| wire | Agent / execution | agents/agent-execution | announced | Command layer launching tokens on Pons and executing trades from X, Telegram or web, with a $WIRE token |
| mancer | Aggregator | trading/aggregator | beta | Native DEX aggregator and non-custodial order layer, gated beta for Chain Mancers and StonkBrokers holders |
| scopl | Aggregator | trading/aggregator | announced | Non-custodial one-tick limit orders on Uniswap V3 and V4; the position NFT stays in the user's wallet |
| arrow | CDP | credit/cdp | mainnet | Native CDP minting aUSD against Stock Tokens, ETFs, WETH and USDG; ArrowPad shares the brand |
| fables | Fee-routing protocol | trading/amm-native | mainnet | ve(3,3) DEX on Uniswap v4 hooks for stock-token pairs with dynamic fees and a $PROLOGUE token |
| longshot | Fee-routing protocol | launch/stock-paired-factory | announced | Launch and fee-routing protocol; fees split into a fixed Hyperliquid perp, holder rewards and protocol |
| sinjoh | Fee-routing protocol | yield/fee-router | announced | Fee router: launch and creator fees bought back into PONS, NVDA airdrops and INJOH burns per the project |
| swaphood | Fee-routing protocol | trading/amm-native | mainnet | Native AMM, a PancakeSwap V3 fork per the explorer, with HOOD emissions and buybacks into h33 backing |
| up | Fee-routing protocol | trading/amm-native | mainnet | Native AMM with a (3,3)-style emissions and buyback design; DefiLlama lists up v2 and v3 |
| what-the-hook | Fee-routing protocol | trading/hook-mev | mainnet | MEV redistribution inside a Uniswap v4 hook that pays traders and LPs, with a WTH token |
| robinhood-index-vaults | Index vault | rwa-products/index-vault | testnet-only | Experimental ERC-4626 index vault for Stock Token baskets; testnet only, mock swap router |
| foxpad | Launchpad | launch/other-pad | announced | Pad attached to the FOX mascot token; fees split 50/50 between operations and a FOX vault |
| hoodfun | Launchpad | launch/bonding-curve | announced | Announced fair-launch pad: one transaction into a curve that locks into Uniswap v3 at goal |
| hookr | Launchpad | launch/hook-programmable | announced | Uniswap v4 hook launchpad and hook marketplace; pool rules are the product |
| lemon | Launchpad | launch/other-pad | announced | Launch and trading pad whose coins get an X account posting on-chain facts |
| long | Launchpad | launch/stock-paired-factory | announced | Stock-paired launchpad, Factory plus Airlock, that made stock-paired tokens possible; $AI launched here |
| noxa | Launchpad | launch/other-pad | mainnet | Pad launching tokens straight into Uniswap v3 pools; the venue behind the chain's first-week memes |
| pons | Launchpad | launch/bonding-curve | mainnet | Two documented generations: v1 into locked Uniswap V3 WETH pools, v2 curve graduating into locked v4 |
| pools-trade | Launchpad | launch/uni-pool-launch | announced | Uniswap Labs launchpad minting tokens straight into Uniswap pools |
| safehood | Launchpad | launch/uni-pool-launch | announced | Uniswap v3 pool launchpad with no bonding curve; the account has been quiet since 2026-07-16 |
| stonks-fun | Launchpad | launch/other-pad | announced | DN-404 launchpad on Doppler whose fees burn $STONKS; an RWA-baskets rebrand is announced |
| denar | Lending | credit/isolated-money-market | announced | Isolated money market for tokenized equities priced by Chainlink; live since 2026-08-30 per the project |
| longbow | Lending | credit/credit-overlay | announced | Credit overlay on Morpho Blue: borrow USDG against Stock Tokens, PONS and other collateral, with $BOW |
| quotrons | NFT / treasury | nft-treasury/token-bound-nft | announced | 4,444 ERC-404 terminals; burning the liquid token hardwires an NFT earning a Stock Token from a 3% fee |
| stonkbroker | NFT / treasury | nft-treasury/token-bound-nft | mainnet | 4,444 ERC-6551 token-bound NFTs holding Stock Tokens, an Anvil AMM and an announced STORMM overlay |
| website | NFT / treasury | rwa-products/ad-space | announced | Tokenized ad slots that pay ETH to slot owners; v2 live since 2026-08-11 per the project |
| arrows | Options | markets/options | announced | Fully collateralized options on tokenized stocks as transferable ERC-1155s with writer vaults |
| tickeryard | Oracle / infra | rwa-products/synthetic-asset | announced | Synthetic-asset product shipping yBTC routed from Arbitrum, incubated in the StonkBrokers stack |
| meridian | Prediction market | trading/perps-native | mainnet | Native perps and a prediction market under one handle; DefiLlama lists both TVL rows |
| sight | Prediction market | markets/prediction | announced | Prediction market announced; the project states no token and a Genesis NFT mint on 2026-09-02 |
| netnet | RWA baskets | rwa-products/reserve-currency | announced | Reserve token whose treasury holds AAPL, NVDA and SPCX per the project; DefiLlama shows zero TVL |
| statics-protocol | RWA baskets | rwa-products/redeemable-basket | beta | Genesis token and Operator NFT reported live on mainnet; the redeemable baskets are not yet enabled |
| vimen | RWA baskets | rwa-products/redeemable-basket | mainnet | Immutable in-kind index baskets with per-basket deposit caps and no claimed admin keys over funds |
| index | RWA distributor | rwa-products/tax-distributor | mainnet | A 3% tax on $INDEX trades buys Stock Tokens and distributes them to holders on a short cadence |
| agent-name-service | Scanner / tooling | agents/agent-identity | announced | Name registry for agents (.agent) on Robinhood Chain with a claimed yearly fee |
| hoodlock | Scanner / tooling | tooling/locker | announced | Native liquidity locker with a $LOCK token; 25% of Mintera.art revenue buys LOCK per the project |
| mesh | Scanner / tooling | tooling/machine-payments | announced | Machine-payments gateway with a MESH token; USDG fee epochs paid to large holders, Pons a merchant |
| robindex | Scanner / tooling | tooling/scanner | announced | Token scanner and Telegram bot (robindex.pro) with a $ROBINDEX token; not Robinhood Index Vaults |
| sherwood | Scanner / tooling | privacy/private-transfer | mainnet | Private-transfer tool with a DefiLlama TVL row; the workbook called it an agent capital layer |
| squeeze | Scanner / tooling | tooling/scanner | announced | Short-interest tape reading Uniswap v3 TWAPs; a planned short desk has no deployed contracts |
| artificial-inu | Stock-paired token | rwa-products/stock-paired-token | announced | Flagship LONG launch: $AI paired to tokenized NVDA, with a vault the project says accumulates NVDA |
| l4va | Stock-paired token | rwa-products/stock-paired-token | announced | Vault factory issuing tokens backed by locked RWAs, stocks, NFTs or memes; TGE announced 2026-08-18 |
| delta | Yield | yield/lp-manager | mainnet | LP manager calling itself the liquidity layer of Robinhood; users provide liquidity and claim fees |
| earn-protocol | Yield | yield/savings-vault | announced | Uniswap v4 strategy vaults on NVDA/USDG and GME/USDG with permissionless omnipools and Rialto zaps |
| maxfi | Yield | yield/lp-manager | announced | Managed LP on Stock Token / USDG pairs with no-swap rebalancing and depeg protection; no token |
| snuggle | Yield | yield/lp-manager | mainnet | Liquidity position manager listed by DefiLlama with TVL and daily revenue; quiet on X |
| vynex | Yield | yield/savings-vault | announced | Liquid vault shares plus a Morpho Blue NVDA/USDG borrow market at 38.5% LTV on a 30-minute TWAP |

---

## 4. Scoring

Ten lines on what `scripts/lib/score.mjs` does.

1. Seven security tests carry raw weights summing to 35: privileged_power 8, deployment_verifiability 5, authorization_topology 5, timelock_exit_window 5, audit_deployment_match 5, continuous_safeguards 4, incident_handling 3.
2. Each test's level maps to a fraction: full 1, partial 0.5, zero 0. The raw sum is scaled to a percentage of 35.
3. Security is mandatory. If any one of the seven tests is missing a valid level, `securityRaw` returns null and the entire score is null.
4. The four qualitative factors map through a coarse rubric: strong 80, mixed 50, weak 20, insufficient unscored.
5. The five percentages combine on PRD weights security 35, engineering 20, transparency 15, maturity 15, economic 15, skipping unscored factors and renormalizing the denominator.
6. Confidence is a weighted sum of five hand-typed integers: primary_source_coverage 30, onchain_verification 25, independent_corroboration 20, freshness 15, review_completeness 10.
7. While `review.approver` is `pending` (or tbd/none/todo/na/n-a), confidence is capped at 69, which forces the provisional display state regardless of the typed numbers.
8. An override caps the displayed score at 29 for Critical or 59 for High; Elevated has no cap. Final risk is the max of `risk.assessed` and the override level on the Low to Critical ordering.
9. Display gates: confidence below 50 suppresses the number entirely and sets `label` to "Research pending / insufficient evidence"; 50 to 69 sets `provisional: true`; 70 and above displays normally.
10. `derive()` on a stub returns the base object immediately: `score: null`, `confidence: null`, `risk: null`, `provisional: false`, `label: "Research pending / insufficient evidence"`.

**What a stub displays.** `site/src/components/dossier.tsx:366` branches on `derived.score === null` and renders the string "no score yet · research pending". No number, no confidence, no risk badge.

**Live output.** `node scripts/score.mjs` produces exactly one scored row: pons at 41, provisional, 64% confidence, Elevated risk. The other 48 are all "Research pending / insufficient evidence". Summary line: 49 projects, 0 trending, 12 with metrics, 8 ranked.

**Is it meaningful?** Not yet as a comparator. With 48 of 49 unscored, the score cannot rank or discriminate; it currently functions as a badge on one record. The machinery itself is sound and the pons record demonstrates it produces a defensible number with an auditable trail. Two secondary derivations do run across the whole set and are worth watching. `computeRanks` ranks inside a category on the highest-priority metric kind that at least two members share, and it ranked 8 projects out of the 12 that have metrics. That means a "category leader" today means "the only one whose DefiLlama row got typed in", which is a misleading signal to surface. `computeTrending` returned 0 for every slug.

---

## 5. Feed

**What an item is.** `{id, date, kind, title, body, sources[]}` required, plus optional `account` and `sourceUrl`. Kinds are `company` (the project's own posts), `ct` (third-party crypto-Twitter commentary), `onchain` (explorer, RPC or DefiLlama observations), `risk` (wrong-chain addresses, ticker collisions, unverified claims).

**How many.** 120 items across 45 files, average 2.7 per project, max 12 (pons). Kind split: company 64, onchain 24, ct 24, risk 8. 90 of 120 carry an account handle. Four census slugs have no feed file.

**Who writes them.** Machine-generated, not hand-authored. Every file's header comment reads "Generated by scripts/apply-harvest.mjs from scripts/harvest-data.mjs". Those now live at `scripts/intake/2026-08-31/apply-harvest.mjs` (148 lines) and `scripts/intake/2026-08-31/harvest-data.mjs` (1,239 lines), a hand-written literal encoding what two Grok research intakes said about each census subject. The generator assigns S-ids per slug and writes ledger entries, `deployments[]`, `findings` and the feed file in one pass. Nothing appends items incrementally today, so every feed date is frozen at or before 2026-08-31.

**How they reach the site.** `scripts/score.mjs` loads feed files through `validateContent`, and the dossier renders them in a Feed tab (`site/src/components/feed-list.tsx`, tab label `Feed · <count>` at `dossier.tsx:389`). Feed items also drive the trending badge via `scripts/lib/trending.mjs`: a project is trending when at least `min_accounts` (3) distinct accounts at `tier: top` with role alpha or kol have posted a `kind: ct` item within `window_days` (7). `content/accounts.yaml` has only 4 top-tier accounts against 110 watch and 31 downweight, and all feed dates are frozen, so **0 projects are currently trending**. The badge is inert.

**How they reach Telegram.** They do not. `scripts/telegram-digest.mjs` reads `content/changelog.yaml`, selects entries carrying a `channel` publication block, and gates delivery on an approval file at `ops/telegram-review.json`. Exactly 1 of 85 changelog entries has a `channel` block. The feed and the Telegram pipeline are two disconnected systems that happen to describe the same projects.

---

## 6. Worth-pulling assessment

### High value today

- **`findings.risk` and `findings.missing`.** These are the real product. 243 missing-evidence lines and 58 risk findings, written to the PRD section 7.3 standard ("an independent audit was not found in this review", not "unaudited"). A reader learns precisely what nobody has checked.
- **`deployments` with a real address plus `verified`.** The single highest-signal field, and the one that is almost entirely empty. Pons proves the format works.
- **`lifecycle`.** Decision-grade because the desk refuses to call a project mainnet on its own tweet. `scripts/seed-data.mjs:17` names 25 slugs held at `announced` for exactly that reason.
- **Feed `risk` items.** Catch wrong-chain addresses and same-ticker collisions, which is exactly what a reader about to transact needs. The pons cashtag item and the arrow name-collision item are both real saves.
- **`summary`.** One paragraph, specific, mechanism-first.

### Noise

- **`discovery_source`.** 43 distinct free-text strings, mostly variants of "Grok desk map 2026-08-31". Provenance for the desk, not for the reader.
- **`qualifying`.** Four notes with `verified: false` on 48 of 49 rows. It records an intention to test, not a test.
- **`identity.aliases` and `identity.conflict_ids`.** Empty on all 49. The collision-detection machinery in `checks.mjs` has nothing to detect.
- **`findings.positive` boilerplate.** The stub generator writes "X publishes an official X account at https://..." as the first positive finding on nearly every project. That is not a finding; it inflates the count from a meaningful 174 to something closer to 90.
- **Source `hash` and `archive_url`.** Null on all 308. The archive design in PRD section 7.2 is declared but not operating, so a disappeared source is simply a dead link.
- **Self-citation.** 159 of 308 ledger entries point back at this repo's own `research/inbox`. More than half the "sources" are the desk citing its own intake notes. The excerpt on those is a generic disclaimer, identical across all of them.

### Missing and obviously high value

No token contract address as a first-class field, only a `deployments` row that is usually a placeholder. No TVL for 37 of 49. No holder count anywhere, despite `holders` being in the metric enum. No launch or first-deploy date and no first block. No contract-verification flag at the project level. No audit status as a queryable field; it exists only buried in prose. No liquidity depth. No top-holder concentration. No 7-day or 30-day on-chain activity. No team or contributor field at all, despite PRD section 5.2 listing Team as a required section. No socials beyond a single X link. No "last checked" separate from `review.reviewed_at`, which reads 2026-08-31 on all 49.

### Recommended project card, 10 fields

| Field | Status |
|---|---|
| Name and symbol | already-have |
| Plain-English product label derived from `tree.primary` | already-have, needs the `docs/taxonomy.md` display mapping wired into the site |
| Lifecycle | already-have |
| One-line summary | already-have |
| Risk level, or "research pending" | already-have |
| Primary contract address plus verified flag | easy-to-add, schema supports it, 45 of 96 rows are placeholders |
| TVL or 24h volume with as-of date | easy-to-add for the 12 with metrics, needs-new-source for the other 37 |
| Holder count | needs-new-source (Blockscout token API, one call per token) |
| Audit status as an enum: none-found / in-progress / published | easy-to-add, the facts already exist in prose |
| Top open risk, one line pulled from `findings.risk` | already-have |

### Recommended project page, 25 fields

Everything on the card, plus:

| Field | Status |
|---|---|
| Official links by kind | already-have |
| Full deployment table with label, role, chain, verification | already-have, sparse |
| Owner or admin address and its type (EOA, Safe, timelock) | needs-new-source; pons proves it is one `owner()` call |
| Multisig threshold and signer count | needs-new-source, one `getThreshold()` / `getOwners()` pair |
| Timelock delay on privileged actions | needs-new-source |
| Upgradeability and proxy status | needs-new-source, one `eth_getStorageAt` per address for the EIP-1967 slots |
| Audit reports with auditor name and covered commit | needs-new-source |
| Bug bounty presence | needs-new-source |
| Launch date and first block | needs-new-source, one explorer call |
| 30-day volume and fees | needs-new-source |
| Liquidity depth of the main pool | needs-new-source |
| Top-10 holder concentration | needs-new-source |
| Dependency list with each one's specific failure mode | already-have, 21 dependency cards exist |
| Quote and collateral assets | partly already-have, inside dependency cards |
| Team named or anonymous, with verification status | needs-new-source |
| Public repository and last commit date | needs-new-source |
| Incident history | already-have as the `incident_handling` security test |
| Missing-evidence checklist | already-have |
| Source ledger with accessed_at | already-have |
| Last-checked date, distinct from reviewed_at | easy-to-add |
| Per-slug changelog | already-have |
| Feed items | already-have |
| Evidence score, confidence, risk with override reason | already-have on 1 project |
| Category rank with its basis metric | already-have, but currently misleading |

The pattern is consistent: almost every field reproducible by one Blockscout or RPC call is missing on 48 of 49 projects, and the pons record proves the desk can produce all of them. That is the cheapest large gain available.

---

## 7. Duplication

### `scripts/seed-data.mjs` versus `content/projects/*.yaml`

`FACTS` holds `symbol`, `summary`, `dependencies` and the missing-evidence checklist for all 49 slugs. `scripts/seed-stubs.mjs` writes them into project files, but line 57 skips any file that already exists, so the two copies drift silently and permanently.

Already drifted: `summary` on mancer, pons, statics-protocol. `findings.missing` on those three plus stonkbroker. Clearest example, pons:

```
scripts/seed-data.mjs:20
  "Native launchpad on Robinhood Chain: tokens launch on a V2 bonding curve and
   graduate to Uniswap v4; quote assets include ETH, USDG and Stock Tokens."

content/projects/pons.yaml:8
  "Native launchpad on Robinhood Chain with two documented generations: v1 launches
   fixed-supply tokens straight into locked Uniswap V3 WETH pools; v2 sells from a
   bonding curve that graduates into a permanently locked Uniswap v4 pool..."
```

Nothing validates them against each other. The other 46 summaries are byte-identical duplicates, so a copy edit in one place leaves the other stale.

### `scripts/intake/2026-08-31/harvest-data.mjs` versus project deployments

All 43 distinct 0x addresses in the harvest literal also appear in `content/projects/*.yaml`. The project files hold 56 distinct addresses; the extra 13 are the pons contracts added during the full-coverage pass. Correcting one address means editing two files, and the generator will not reconcile them.

### Census versus project files

`name`, `category`, `lifecycle` and `coverage` are stored twice and enforced equal by `MIRRORED_FIELDS` at `scripts/lib/checks.mjs:6`.

`official_links` is stored twice and **not** enforced. It has already diverged on two of 49:

- `content/projects/pons.yaml` has 4 links; the census row has 2. The project file adds `docs https://docs.ponsfamily.com` and `docs https://docs.ponsfamily.com/docs/v2`.
- `content/projects/statics-protocol.yaml` has 6 links; the census row has 5. The project file adds `github https://github.com/EqualFiLabs/statics`.

`symbol` is stored twice, as `project.symbol` and `census.identity.symbols[]`, with a one-way check only (`checks.mjs:66`): the project symbol must appear in the census list, but extra or wrong census symbols are unchecked.

### Research markdown versus project YAML

`content/research/pons.md:91` restates `findings.positive`, `findings.risk`, `findings.missing` and `findings.unresolved` as a single prose paragraph carrying its own evidence tag. Lines 93 to 105 restate the 33-entry source ledger as a hand-maintained summary list, then point the reader at `content/sources/pons.yaml` for the authoritative version. Neither is generated; both are hand-written and can contradict the YAML without any validator noticing.

### Source ledgers across slugs

308 entries resolve to 144 distinct URLs, so roughly half the ledger is repetition under different S-ids.

| Times repeated | URL |
|---|---|
| 49 | `research/inbox/2026-08-31-ecosystem-map.yaml` |
| 24 | `https://defillama.com/chain/robinhood-chain` |
| 21 | `research/inbox/grok-2026-08-30/build_rh_tokens.py` |
| 15 | `research/inbox/grok-2026-08-30/chain-file.json` |
| 10 | `research/inbox/2026-08-31-x-fill-6.md` |

Each repeat carries a per-slug `claim` string but the same generic `excerpt`. Correcting one intake artifact's provenance means touching up to 49 files. There is no shared-source table; S-ids are namespaced per slug by design, which is defensible for citation stability but makes global correction expensive.

### Dependency cards versus project deployments

`content/dependencies/usdg.yaml` carries a `deployments` block with the USDG address, and `content/dependencies/stock-tokens.yaml` carries 199 addresses, while projects reference them only by dependency slug. That split is correct and should stay.

Less clean: `content/dependencies/uniswap.yaml` records "about 80% of spot volume" as a failure mode, sourced to the ecosystem map under its own local `S1`. The same figure appears in project-level narrative sourced to the same artifact under a different local S-id. Dependency cards use an independent S-id namespace (`checks.mjs:87` validates dependency source refs only against the card's own list), so the same claim carries two unrelated identifiers.
