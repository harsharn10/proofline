---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: wire
name: Wire
packet_tier: full
as_of: 2026-09-02T23:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [wire]
allowed_paths:
  - research/inbox/packets/wire/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Wire
  aliases: ["wire bot", "WireBot", "WIRE"]
  symbols: [WIRE]
  entity_kind: application
  chain_scope: robinhood-native
  official_domain: https://wirebot.trade
  official_handle: "@wirebotRH"
  repository: "NULL — no GitHub org or repository URL on wirebot.trade, /docs, the X bio, DexScreener, or github.com/wirebotRH (404) this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer, other]
      contrary_signals:
        - "WIRE creator_address_hash is the census Pons v1 legacy factory 0x0c37a24F5D23A486FA692d1500881d698B1F77a4; live site-feed launches call PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
        - "Pons is ponsfamily.com / @ponsdotfamily; Wire is wirebot.trade / @wirebotRH"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is @bankrbot with its own stock-paired factory; Wire is @wirebotRH and routes launches through Pons"
        - "Token 0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878 is not a Bankr deployment in the census"
    - slug: lemon
      signals: [other]
      contrary_signals:
        - "Census Lemon is @lemondotfun, a pad with per-coin X accounts; Wire is one command handle wrapping existing venues"

classification:
  primary_leaf: agents/agent-execution
  secondary_leaves: [trading/exec-frontend, launch/bonding-curve, markets/prediction]
  mechanism_tags: [agent, execution, launchpad, rwa, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Token 0x8ECE…6878 is a verified PonsLauncherToken on chain 4663 with a live Uniswap v3 WIRE/WETH pool; site-feed launches call PonsV2LaunchFactory.launchToken. Census lifecycle announced is stale. Fee-treasury address, MPC wallet code and perps live-vs-preview remain unreproduced. No DefiLlama protocol row. [R-4] [R-6] [R-8] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-9], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-16], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-15, CLM-20], note: "" }

links:
  - { kind: site, url: "https://wirebot.trade", authenticity: confirmed }
  - { kind: docs, url: "https://wirebot.trade/docs", authenticity: confirmed }
  - { kind: app, url: "https://app.wirebot.trade", authenticity: confirmed }
  - { kind: x, url: "https://x.com/wirebotRH", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/rh_wirebot", authenticity: unconfirmed }

deployments:
  - label: WIRE token (PonsLauncherToken)
    role: token
    address:
      value: "0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5, R-6]
  - label: WIRE/WETH Uniswap v3 pool (token liquidityPool())
    role: other
    address:
      value: "0xD55246642DD114bc21dB98C6f2261161a6158388"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-8, R-9]
  - label: Pons v1 legacy factory (token launchFactory() / creator_address_hash)
    role: factory
    address:
      value: "0x0c37a24F5D23A486FA692d1500881d698B1F77a4"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-7, R-10]
  - label: Token deployer EOA
    role: admin
    address:
      value: "0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-6, R-7, R-17]
  - label: Prediction-market contract named in the 2026-07-20 post
    role: other
    address:
      value: "0x695d6Bd8E647060fbB069E602eB64ac058c206c5"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-18, R-19]

metrics:
  - { kind: holders, value: 3928, currency: null, as_of: 2026-09-02T23:30:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878 holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 401332.48, currency: USD, as_of: 2026-09-02T23:30:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x8ECE…6878 Uniswap v3 WIRE/WETH pair 0xD552…8388 volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 158574.12, currency: USD, as_of: 2026-09-02T23:30:00Z, window: point, method: "DexScreener same WIRE/WETH v3 pair liquidity.usd (listed pool, not protocol TVL; no Wire Llama row)", class: claim, receipt_ids: [R-8, R-20] }
  - { kind: market_cap, value: 1334343, currency: USD, as_of: 2026-09-02T23:30:00Z, window: point, method: "DexScreener same WIRE/WETH v3 pair marketCap", class: claim, receipt_ids: [R-8] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:30:00Z, receipt_ids: [R-4, R-5, R-6], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3281d91 (52960657). eth_getCode on 0x8ECE…6878 non-empty (10550 hex chars). name() wire bot; symbol() wire; decimals 18; totalSupply 1e27; owner() reverts; deployer() 0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920; launchFactory() 0x0c37a24F5D23A486FA692d1500881d698B1F77a4; liquidityPool() 0xD55246642DD114bc21dB98C6f2261161a6158388; pairToken() WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; dexFactory() 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA; poolFee 10000; positionManager 0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3; socials twitter https://x.com/wirebotRH website https://wirebot.trade; description Trade tokenized stocks by mentioning @wirebotRH on Robinhood Chain. Deployer eth_getCode empty." }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T23:30:00Z, receipt_ids: [R-4, R-5, R-7, R-9, R-10], result: "Blockscout api/v2/addresses/0x8ECE…6878 is_contract true is_verified true name PonsLauncherToken proxy_type null creator_address_hash 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 creation_transaction_hash 0x274e45dc79f3b3074cc262d95d81034afdd85ac717c432e685094d7b0df0c1ff. api/v2/tokens name wire bot symbol WIRE holders_count 3928 total_supply 1e27. Creation tx 2026-07-17T19:04:11Z block 12356072 from 0xFe4B46C8… to factory 0x0c37a24F… status ok. Pool 0xD552…8388 UniswapV3Pool is_verified true same creation tx. Factory is_verified false." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T23:30:00Z, receipt_ids: [R-8], result: "DexScreener latest/dex/tokens/0x8ECE…6878: 9 robinhood uniswap pairs. Lead book v3 WIRE/WETH 0xD55246642DD114bc21dB98C6f2261161a6158388 quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 158574.12 volume.h24 401332.48 marketCap 1334343 priceUsd 0.001337 pairCreatedAt 2026-07-17T19:04:11Z. Next v4 WIRE/USDG 0x7d557f70…1279 liquidity.usd 18924.72 volume.h24 13767. info.websites wirebot.trade and wirebot.trade/docs; socials x.com/wirebotRH and t.me/rh_wirebot." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-2, R-3, R-6], result: "wirebot.trade title WIRE — The command layer for finance; copy names @wirebotRH. /docs same host. @wirebotRH bio wire ca 0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878 and URL wirebot.trade. Token socials() returns https://x.com/wirebotRH and https://wirebot.trade. DexScreener info repeats those URLs." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1, R-16], result: "Site live feed 5h LAUNCH $BLUEVEST tx 0xefd20ab85a68069f9ee0acd7ca4504bf22cb7fe21eb36cb5a41b55c5e0474b74: Blockscout method launchToken to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e status ok 2026-09-02T06:18:11Z. $TAIWAN launch 0x883474b8… same factory launchToken 2026-09-02T05:11:01Z. $NET buy 0xb72e6a6c… UniversalRouter.execute." }
  - { id: REP-6, method: api, checked_at: 2026-09-02T23:30:00Z, receipt_ids: [R-20], result: "api.llama.fi/protocols (8169 rows) has no name/slug/twitter matching Wire, wirebot or wirebotRH." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Mention @wirebotRH in plain language from X, Telegram or the web wallet; a language model parses intent and deterministic code in a handle-tied wallet signs buys, sells, sends, Pons launches and prediction markets on Robinhood Chain", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://wirebot.trade", class: verified, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@wirebotRH", class: verified, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-4, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: "WIRE", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: identity.name, value: "wire bot", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: relationship, value: "creator_address_hash and launchFactory() are Pons v1 legacy factory 0x0c37a24F5D23A486FA692d1500881d698B1F77a4; creation tx 0x274e45dc… at 2026-07-17T19:04:11Z also created UniswapV3Pool 0xD552…8388", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-4, R-7, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Primary book Uniswap v3 WIRE/WETH 0xD55246642DD114bc21dB98C6f2261161a6158388; quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; token poolFee() 10000", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-6, R-8], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "owner() reverts; deployer() 0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920 is an EOA (eth_getCode empty)", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-6, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Blockscout holders_count 3928", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener Uniswap v3 WIRE/WETH volume.h24 401332.48", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener Uniswap v3 WIRE/WETH marketCap 1334343", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener Uniswap v3 WIRE/WETH liquidity.usd 158574.12", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "1% protocol fee (0.9% if referred) on buy, sell, swap, send, burn, drop and fee claims; fees go to a treasury that buys $WIRE and sends it to a dead address", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Token launches from the command layer call PonsV2LaunchFactory.launchToken at 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; docs say the pairing asset must be one Pons has approved", class: verified, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2, R-16], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on the official site, docs, X bio or GitHub this pass", class: unknown, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: team.identity, value: "Intake and a 2026-08-18 quoted post name @gornx0x as builder; no reciprocal legal name on the site or docs this pass", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Docs: perps page — the order form and the commands unlock at launch; FAQ: coming soon, preview markets and charts today, trading unlocks at launch", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "@wirebotRH bio: Spot, perps, prediction markets — from X, Telegram or web", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.primary-leaf, value: "agents/agent-execution", class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: activity.status, value: "Command-layer replies on 2026-09-02 filled a COIN→WIRE swap and NetNet COINflips; site feed shows Pons launches and UniversalRouter buys the same day", class: verified, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-13, R-14, R-16], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-23, field: control.timelock, value: "No timelock address on the token, site, docs or explorer labels this pass", class: unknown, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "2026-07-20 post: prediction markets live as a USDG parimutuel beta; contract 0x695d6Bd8E647060fbB069E602eB64ac058c206c5. Blockscout: is_contract true is_verified false", class: claim, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [R-18, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Site: index baskets MAG7, AI6 minted through the Vimen protocol, settled in USDG", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Site counter this pass: 893 trades, $137K volume, 148 launches, 2.5M WIRE burned (0.25% of supply), 51 buyback runs — bot-volume counters, not the DexScreener pair slice", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "Site: MPC-backed wallet, exportable private key; the bot never holds keys. Docs: public Twitter bot enforces per-transaction and daily spending limits; web-wallet trades are not capped", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: communications.status, value: "2026-08-30 reply: Bug: post-graduation buys were missing a router approval step, now patched; 810,346 USEDTESLA landed", class: claim, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "Same-leaf Bankr @bankrbot is a different handle and factory; Lemon @lemondotfun is a different pad. Flags: none of handle-collision | unconfirmed-official | ca-collision on the WIRE token this pass. Telegram t.me/rh_wirebot is unconfirmed-official (bot start page titled WireBot)", class: claim, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [R-3, R-15, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.chain-scope, value: "robinhood-native", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-19, CLM-20]
    material_effect: "The bio lists perps as a live command surface; docs still say perps unlock at launch and trading is coming soon"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "WIRE/WETH Uniswap v3 pool shows $401k 24h volume"
    summary: "DexScreener pair 0xD552…8388: liquidity $158,574.12, volume.h24 $401,332.48, marketCap $1,334,343."
    occurred_at: 2026-09-02T23:30:00Z
    observed_at: 2026-09-02T23:30:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: company
    title: "Account posted a NetNet COINflip loss of $30 COIN"
    summary: "@wirebotRH replied that a $30 COIN flip landed the other side, powered by NetNetCap's COINflip."
    occurred_at: 2026-09-02T23:05:39Z
    observed_at: 2026-09-02T23:36:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-3
    type: company
    title: "Account posted a $20 COIN to WIRE swap fill"
    summary: "@wirebotRH replied Swapped $20 COIN to 15,047.7679 WIRE and linked the web wallet."
    occurred_at: 2026-09-02T22:50:08Z
    observed_at: 2026-09-02T23:36:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: onchain
    title: "Site-feed BLUEVEST launch called Pons v2 factory"
    summary: "Tx 0xefd20ab8… launchToken on PonsV2LaunchFactory 0x7eD598Bc… at 2026-09-02T06:18:11Z, status ok."
    occurred_at: 2026-09-02T06:18:11Z
    observed_at: 2026-09-02T23:35:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: company
    title: "Account posted a post-graduation buy router-approval patch"
    summary: "@wirebotRH replied a USEDTESLA buy filled after a missing router approval on post-graduation buys was patched."
    occurred_at: 2026-08-30T17:31:21Z
    observed_at: 2026-09-02T23:36:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-6
    type: ct
    title: "@andrewtalksdefi listed $WIRE as Robinhood Chain utility"
    summary: "24 Aug post named $WIRE / @wirebotRH the command layer for spot, perps and prediction from X, Telegram or web."
    occurred_at: 2026-08-24T12:42:05Z
    observed_at: 2026-09-02T23:36:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-7
    type: company
    title: "Account posted Wire v2 airdrops, bounties and packs"
    summary: "@wirebotRH posted Wire v2 is live with airdrops, bounties and packs; 1% commission still buys and burns $WIRE."
    occurred_at: 2026-08-18T12:46:52Z
    observed_at: 2026-09-02T23:36:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-8
    type: onchain
    title: "WIRE token created through Pons v1 legacy factory"
    summary: "Tx 0x274e45dc… from 0xFe4B46C8… to factory 0x0c37a24F… created the token and UniswapV3Pool at 2026-07-17T19:04:11Z."
    occurred_at: 2026-07-17T19:04:11Z
    observed_at: 2026-09-02T23:30:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-9]

receipts:
  - { id: R-1, publisher: Wire, title: "wirebot.trade home", url: "https://wirebot.trade/", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-15, CLM-21, CLM-25, CLM-26, CLM-27, EVT-4], excerpt: "WIRE — The command layer for finance. Spot, perps and prediction markets on Robinhood Chain from X, Telegram or the web. WIRE is a non-custodial trading bot that lives on X. Mention @wirebotRH in plain language and it executes real on-chain trades. A 1% protocol fee (0.9% if referred) on every trade, send and drop flows into the treasury; a recurring job buys $WIRE and sends the tokens to a dead address. Counters: 893 trades, $137K volume, 148 launches, 2.5M WIRE burned." }
  - { id: R-2, publisher: Wire, title: "WIRE documentation", url: "https://wirebot.trade/docs", published_at: null, accessed_at: 2026-09-02T23:32:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-16, CLM-19, CLM-21, CLM-25, CLM-27], excerpt: "WIRE turns X into a trading terminal. Mention @wirebotRH in plain language and it executes real on-chain transactions on Robinhood Chain from a wallet that only you control. A 1% protocol fee on trading actions (0.9% if referred) funds a continuous $WIRE buyback-and-burn. Launch a token from a tweet; the pairing asset must be one pons has approved. Index baskets minted/redeemed via the Vimen protocol. Perps: order form and commands unlock at launch; FAQ says coming soon." }
  - { id: R-3, publisher: wire bot (@wirebotRH), title: "X profile @wirebotRH", url: "https://x.com/wirebotRH", published_at: "2026-07-17T15:30:33Z", accessed_at: 2026-09-02T23:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-20, CLM-29], excerpt: "wire bot @wirebotRH. Bio: The command layer for finance on @RobinhoodApp. Spot, perps, prediction markets — from @X, @Telegram or web. wire ca: 0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878. URLs: http://wirebot.trade. Followers 3965. Joined 2026-07-17." }
  - { id: R-4, publisher: Blockscout, title: "Address 0x8ECE…6878", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-30], excerpt: "hash 0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878 is_contract true is_verified true name PonsLauncherToken proxy_type null creator_address_hash 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 creation_transaction_hash 0x274e45dc79f3b3074cc262d95d81034afdd85ac717c432e685094d7b0df0c1ff file_path contracts/src/PonsLauncherToken.sol compiler v0.8.30." }
  - { id: R-5, publisher: Blockscout, title: "Token 0x8ECE…6878", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-11], excerpt: "name wire bot symbol WIRE decimals 18 holders_count 3928 total_supply 1000000000000000000000000000 type ERC-20 exchange_rate 0.00136986 circulating_market_cap 1369743.8005894418 volume_24h 377434.7018987159." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and PonsLauncherToken views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-30], excerpt: "eth_chainId 0x1237. Token eth_getCode len 10550. name wire bot symbol wire totalSupply 1e27 owner() revert deployer 0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920 launchFactory 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 liquidityPool 0xD55246642DD114bc21dB98C6f2261161a6158388 pairToken 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 poolFee 10000 socials x.com/wirebotRH wirebot.trade. Pool eth_getCode len 44286." }
  - { id: R-7, publisher: Blockscout, title: "WIRE creation tx", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x274e45dc79f3b3074cc262d95d81034afdd85ac717c432e685094d7b0df0c1ff", published_at: "2026-07-17T19:04:11.000000Z", accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, EVT-8], excerpt: "hash 0x274e45dc79f3b3074cc262d95d81034afdd85ac717c432e685094d7b0df0c1ff timestamp 2026-07-17T19:04:11.000000Z block_number 12356072 from 0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920 to 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 method 0x686399cb status ok result success." }
  - { id: R-8, publisher: DexScreener, title: "latest/dex/tokens WIRE", url: "https://api.dexscreener.com/latest/dex/tokens/0x8ECEA3d0E648DB646d824AA51EedeB16aC3d6878", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: third-party-data, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-12, CLM-13, CLM-14, EVT-1], excerpt: "9 pairs chainId robinhood. Uniswap v3 WIRE/WETH pairAddress 0xD55246642DD114bc21dB98C6f2261161a6158388 liquidity.usd 158574.12 volume.h24 401332.48 marketCap 1334343 priceUsd 0.001337. Uniswap v4 WIRE/USDG 0x7d557f700f471c08b64224a4d285fc94f9b7035c5276b0f2c22ca6e80bce1279 liquidity.usd 18924.72. websites https://wirebot.trade and https://wirebot.trade/docs; socials https://x.com/wirebotRH https://t.me/rh_wirebot." }
  - { id: R-9, publisher: Blockscout, title: "UniswapV3Pool 0xD552…8388", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xD55246642DD114bc21dB98C6f2261161a6158388", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-9, EVT-8], excerpt: "hash 0xD55246642DD114bc21dB98C6f2261161a6158388 is_contract true is_verified true name UniswapV3Pool creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0x274e45dc79f3b3074cc262d95d81034afdd85ac717c432e685094d7b0df0c1ff." }
  - { id: R-10, publisher: Blockscout, title: "Pons v1 legacy factory 0x0c37…77a4", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x0c37a24F5D23A486FA692d1500881d698B1F77a4", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x0c37a24F5D23A486FA692d1500881d698B1F77a4 is_contract true is_verified false name null creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-11, publisher: wire bot (@wirebotRH), title: "Post-graduation router approval patched", url: "https://x.com/wirebotRH/status/2094115772524060948", published_at: "2026-08-30T17:31:21Z", accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-28, EVT-5], excerpt: "Fixed — that buy is through now. 810,346 $USEDTESLA landed in your wallet. (Bug: post-graduation buys were missing a router approval step, now patched.)" }
  - { id: R-12, publisher: wire bot (@wirebotRH), title: "Wire v2 is live", url: "https://x.com/wirebotRH/status/2089695526237122660", published_at: "2026-08-18T12:46:52Z", accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-18, EVT-7], excerpt: "Wire v2 is live. Three products carry it. Airdrops that choose who they pay. Bounties. Packs. Same economics as always: 1% commission (0.9% referred) on trades, sends, drops, bounties and packs buys $WIRE on the open market and burns it. Start: tag @wirebotRH in a tweet, or open wirebot.trade. Quoted @gornx0x." }
  - { id: R-13, publisher: wire bot (@wirebotRH), title: "Swapped $20 COIN to WIRE", url: "https://x.com/wirebotRH/status/2095283162163085657", published_at: "2026-09-02T22:50:08Z", accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-22, EVT-3], excerpt: "Swapped $20 COIN → 15,047.7679 WIRE. Your wallet: https://app.wirebot.trade/wallet" }
  - { id: R-14, publisher: wire bot (@wirebotRH), title: "NetNet COINflip result", url: "https://x.com/wirebotRH/status/2095287066162594156", published_at: "2026-09-02T23:05:39Z", accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-22, EVT-2], excerpt: "Landed the other side — lost $30.00 in COIN. Run it again? Powered by @NetNetCap's COINflip. Your wallet: https://app.wirebot.trade/wallet" }
  - { id: R-15, publisher: Telegram, title: "t.me/rh_wirebot", url: "https://t.me/rh_wirebot", published_at: null, accessed_at: 2026-09-02T23:32:00Z, kind: social, authority: unknown, authenticity: unconfirmed, supports: [CLM-29], excerpt: "Page title Telegram: Launch @rh_wirebot. og:title WireBot. og:description You can contact @rh_wirebot right away." }
  - { id: R-16, publisher: Blockscout, title: "BLUEVEST launchToken on Pons v2", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xefd20ab85a68069f9ee0acd7ca4504bf22cb7fe21eb36cb5a41b55c5e0474b74", published_at: "2026-09-02T06:18:11.000000Z", accessed_at: 2026-09-02T23:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-22, EVT-4], excerpt: "hash 0xefd20ab85a68069f9ee0acd7ca4504bf22cb7fe21eb36cb5a41b55c5e0474b74 timestamp 2026-09-02T06:18:11.000000Z block 52354639 from 0x84970E4E0E2a146f8F92CA8FF5cE4484fF7A0384 to 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory method launchToken status ok result success." }
  - { id: R-17, publisher: Blockscout, title: "Deployer EOA 0xFe4B46C8…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "hash 0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920 is_contract false is_verified false name null. RPC eth_getCode empty." }
  - { id: R-18, publisher: wire bot (@wirebotRH), title: "Prediction markets are live", url: "https://x.com/wirebotRH/status/2079180624242590157", published_at: "2026-07-20T12:24:24Z", accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "Prediction markets are live on WIRE — Robinhood Chain mainnet, real $USDG. This is a beta. Collateral is $USDG. Payout model (v1): parimutuel. Fees 2% to the protocol, 1% to the market creator. Token launches: flat $3 in ETH on top of PONS. Contract → 0x695d6Bd8E647060fbB069E602eB64ac058c206c5. Beta." }
  - { id: R-19, publisher: Blockscout, title: "Prediction contract 0x695d6Bd8…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x695d6Bd8E647060fbB069E602eB64ac058c206c5", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24], excerpt: "hash 0x695d6Bd8E647060fbB069E602eB64ac058c206c5 is_contract true is_verified false name null creator_address_hash 0x96099BC1fD66CadE0cA7Bfaa5510B9d68963D910 creation_transaction_hash 0xbed88b3ecce24797e2a439a983dff283b4a3f16f3dc288c53f97ce00cdfd83ad." }
  - { id: R-20, publisher: DefiLlama, title: "protocols list (no Wire row)", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "8169 protocol rows. No name, slug or twitter matching Wire, wirebot or wirebotRH." }
  - { id: R-21, publisher: andrewwwww (@andrewtalksdefi), title: "Robinhood Chain utility list", url: "https://x.com/andrewtalksdefi/status/2091868649539747998", published_at: "2026-08-24T12:42:05Z", accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-29, EVT-6], excerpt: "The Robinhood Chain ecosystem is heating up. $WIRE | @wirebotRH The command layer for Robinhood App, enabling spot, perps, and prediction market trades directly from X, Telegram, or the web. Also named $DELTA, $HEDGE, $WEBSITE, $MESH." }

gaps:
  - { priority: P0, question: "Which 4663 address holds the 1% protocol fee and runs the buyback-and-burn, and does a dead-address balance match the site's 2.5M WIRE burned?", checked: "site/docs name a treasury and a dead address without publishing the hex; token has no feeRecipient view; Llama has no Wire row, 2026-09-02", next: "trace a command-layer fill to the fee split and eth_call the burn sink" }
  - { priority: P0, question: "How are handle-tied wallets derived (MPC/Privy or otherwise), and which key signs a tweet-originated transaction?", checked: "site says MPC-backed exportable key and the bot never holds keys; docs say the LLM only parses intent; no Privy org, SDK URL or factory address on those pages", next: "read app.wirebot.trade wallet creation requests and match from-addresses on the live-feed txs" }
  - { priority: P1, question: "Is prediction contract 0x695d6Bd8… still the live market, and what is its verified source?", checked: "2026-07-20 post names it; Blockscout is_contract true is_verified false this pass; docs still describe prediction markets", next: "eth_getCode, read methods, and match a recent create-market command to that address" }
  - { priority: P1, question: "Is there an audit of the bot, the wallet, or the prediction contract?", checked: "wirebot.trade, /docs, X bio, github.com/wirebotRH 404, 2026-09-02", next: "open any report URL the project posts and match commit/address scope" }
  - { priority: P2, question: "Are perps live on 4663 or still a preview, and which venue (Clutch or other) would they wrap?", checked: "bio lists perps; docs FAQ says coming soon / unlocks at launch; no perps contract in this pass", next: "open the perps page authenticated and look for a live order tx" }
  - { priority: P2, question: "Where is the Uniswap v3 position NFT for the WIRE/WETH pool held (Pons locker vs deployer)?", checked: "token positionManager() 0x73991a25… is NonfungiblePositionManager; Pons v1 lockers in the census are different addresses", next: "query positions owned by the v1 legacy locker 0x31ca5E10… and the deployer" }
---

# Wire — research packet

## What it is

A command layer that turns an X, Telegram or web mention into an on-chain trade on Robinhood Chain. Users tag @wirebotRH to buy, sell, send, launch on Pons or open a prediction market from a handle-tied wallet. $WIRE is the app token. @wirebotRH runs wirebot.trade.

Themes: agent, launchpad, prediction, rwa, index

## Why it matters

Wire is a live execution surface on chain 4663: tweet-originated fills go through Uniswap's UniversalRouter and tweet-originated launches call Pons v2. Census still says announced; a verified PonsLauncherToken and a Uniswap v3 WIRE/WETH book meet the mainnet bar. It is not Bankr (own factory) and not Lemon (per-coin pad accounts).

## What could go wrong

The bot parses tweets and signs from a handle-tied wallet; a parser miss or a missing router approval (posted 30 Aug as patched) can fill the wrong venue or fail a buy. The 1% protocol-fee treasury was not located on chain this pass. The bio lists perps as live while docs still say they unlock at launch.

## Product and mechanics

Mention `@wirebotRH` in plain language (or use the web wallet at app.wirebot.trade). Docs say a language model turns the text into JSON and deterministic code inside a handle-tied wallet signs the transaction, with per-transaction and daily limits on the public Twitter bot. Stocks and ETFs settle in USDG on Uniswap v4; community tokens and ETH route through WETH pools; index baskets MAG7 and AI6 are minted through Vimen. [claim R-1 R-2]

`$WIRE` is a Pons v1 `PonsLauncherToken` named wire bot / WIRE, 18 decimals, totalSupply 1e27. `launchFactory()` and `creator_address_hash` are the Pons v1 legacy factory `0x0c37a24F5D23A486FA692d1500881d698B1F77a4`. The same creation transaction (2026-07-17T19:04:11Z, block 12356072) deployed Uniswap v3 pool `0xD55246642DD114bc21dB98C6f2261161a6158388` against WETH `0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73` with `poolFee()` 10000. [verified R-4 R-6 R-7 R-9]

Token launches from the command layer are not a separate factory. Site-feed `$BLUEVEST` tx `0xefd20ab8…` and `$TAIWAN` tx `0x883474b8…` on 2026-09-02 both called `launchToken` on PonsV2LaunchFactory `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e`. Docs: the pairing asset must be one Pons has approved. A 2026-07-20 post still named a flat $3 in ETH on top of Pons; that fee was not re-read from a current docs paragraph this pass. [verified R-16] [claim R-2 R-18]

A 1% protocol fee (0.9% if referred) is taken on buy, sell, swap, send, burn, drop and fee claims and is documented as funding a buyback that sends `$WIRE` to a dead address. Prediction markets were posted live on 2026-07-20 as a USDG parimutuel beta at `0x695d6Bd8E647060fbB069E602eB64ac058c206c5` (unverified source). Perps remain an open conflict between the bio and the docs. [claim R-1 R-2 R-3 R-18]

## Control and security

`owner()` on the token reverts. `deployer()` returns EOA `0xFe4B46C8Dbdf982a4F68C5268de440D1DB790920` (no code). The v1 factory that created the token is not source-verified on the explorer. No timelock address appeared on the site, docs or explorer labels. The Uniswap v3 position NFT holder was not queried this pass. [verified R-6 R-10 R-17] [unknown]

Site and docs describe an MPC-backed, exportable key and say the bot never holds keys; the public Twitter path is spending-limited and the web wallet is not. Those custody claims were not matched to a factory or SDK address. No audit report URL was located. [claim R-1 R-2] [unknown]

## Team and provenance

Public identity is wirebot.trade and `@wirebotRH`. Token `socials()` returns `https://x.com/wirebotRH` and `https://wirebot.trade`; the X bio repeats the CA and the site URL. DexScreener info lists the same site, docs, X and `t.me/rh_wirebot`. The Telegram page is a bot-start titled WireBot; flag: unconfirmed-official. [verified R-1 R-3 R-6] [claim R-15]

No legal name or repository was linked from those surfaces; github.com/wirebotRH returned 404. A 2026-08-18 v2 post quotes `@gornx0x`. Bankr and Lemon are different census rows, not this handle or CA. [claim R-12 R-15] [unknown]

## Economics and activity

DexScreener Uniswap v3 WIRE/WETH (not an all-pairs total): liquidity 158574.12 USD, 24h volume 401332.48 USD, marketCap 1334343 USD, price 0.001337 USD at this pass. Nine robinhood pairs; next book is Uniswap v4 WIRE/USDG at 18924.72 USD liquidity. Blockscout token: 3928 holders, circulating_market_cap 1369743.80 USD. [verified R-5 R-8]

Site counters the same day: 893 trades, $137K volume, 148 launches, 2.5M WIRE burned (0.25% of supply), 51 buyback runs. Those are the app's own feed totals, not the DexScreener pair slice and not a DefiLlama row (no Wire protocol). [claim R-1 R-20]

`@wirebotRH` replies on 2026-09-02 filled a $20 COIN→WIRE swap and NetNet COINflips. A 30 Aug reply said post-graduation buys had been missing a router approval and were patched. [claim R-11 R-13 R-14]

## Material risks

- Fee-treasury and burn-sink addresses are undocumented; the 2.5M burned figure is a site counter. [claim R-1] [unknown]

- Handle-tied wallet derivation (MPC vs bot-held key) is a site/docs claim, not a reproduced factory. [claim R-1 R-2]

- A 30 Aug reply said post-graduation buys missed a router approval for some period. [claim R-11]

- Bio lists perps as live; docs still say they unlock at launch. [disputed R-2 R-3]

- Prediction contract `0x695d6Bd8…` is unverified. Pons v1 factory source is unverified. No audit report was located. [claim R-10 R-19] [unknown]

- Telegram `t.me/rh_wirebot` is a bot-start page, not a bidirectional official group. Flag: unconfirmed-official. [claim R-15]

## Verification passes

- Receipts: wirebot.trade, /docs, app.wirebot.trade, X profile and named status URLs, t.me/rh_wirebot, Blockscout address/token/tx APIs, DexScreener latest/dex/tokens, DefiLlama protocols, github.com/wirebotRH (404), and RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified R-1 R-4 R-6 R-8]

- Numbers: 401332.48 USD is DexScreener Uniswap v3 WIRE/WETH volume.h24, not all WIRE pairs and not the site's $137K bot-volume counter; 3928 is Blockscout holders_count; 158574.12 USD is that v3 pair's liquidity.usd, not protocol TVL. [claim R-1 R-5 R-8]

- Adversarial: the strongest contrary reading is that Wire is Bankr or Lemon, or that census `announced` still holds because the command layer is off-chain. Distinct handle, CA and Pons factory path, plus a live Uniswap v3 book and same-day `launchToken` txs on Pons v2, argue against a merge and meet the mainnet bar. [inference R-3 R-8 R-16]

## Operations log

- Read content/census.yaml wire/bankr/lemon/pons/vimen/netnet rows, content/projects/wire.yaml, content/pulled/wire.yaml, content/feed/wire.yaml, content/sources/wire.yaml, content/changelog/wire.yaml, research/inbox/2026-08-31-x-fill-2.md, x-fill-9.md, docs/templates/research-packet-v2.md, schema/packet.schema.json.
- Opened https://wirebot.trade/, /docs, https://app.wirebot.trade/ (redirects /dashboard), https://x.com/wirebotRH and named status URLs, https://t.me/rh_wirebot, github.com/wirebotRH (404).
- GET Blockscout /api/v2/addresses for the token, pool, v1 factory, deployer, prediction contract, UniswapV3Factory, NonfungiblePositionManager; /api/v2/tokens for WIRE; /api/v2/transactions for creation, BLUEVEST launch, TAIWAN launch, NET buy.
- GET api.dexscreener.com/latest/dex/tokens/0x8ECE…6878 and latest/dex/pairs/robinhood/0xD552…8388; GET api.llama.fi/protocols (no Wire row).
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId 0x1237, eth_blockNumber 52960657, eth_getCode, eth_call name/symbol/decimals/totalSupply/owner/deployer/launchFactory/liquidityPool/pairToken/dexFactory/poolFee/positionManager/socials/description/maxTxLimit/maxWalletLimit. Blockscout API 403 without a browser User-Agent.
- Time on this slug: one collector pass.
