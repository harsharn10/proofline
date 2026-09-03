---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: discovery-inventory
name: Discovery inventory
packet_tier: seed
as_of: 2026-09-03T06:00:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Discovery inventory
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "LaunchHood bio states First Launchpad built on pools.trade"
        - "Census pools-trade is pools.trade / @TradePools; LaunchHood is launchhood.com / @Launchhood"
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "GOONER is Purgy Pengoon 0x51E7bf39c6Cf1A7F53DdfaA5dB346c69994511F2 quoted against PENGU"
        - "Bankr ROBINHOOD GOON ($GOON) is 0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3, a different contract"

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: claimed
  rationale: "discovery round"

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: other, url: "https://dexscreener.com/robinhood", authenticity: unconfirmed }
  - { kind: other, url: "https://www.geckoterminal.com/robinhood/pools", authenticity: unconfirmed }
  - { kind: other, url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", authenticity: unconfirmed }

deployments: []
metrics: []
reproductions: []

claims:
  - { id: CLM-1, field: candidate, value: "o1-exchange | o1 | @o1_exchange | o1.exchange | dependency", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-8, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: candidate, value: "pair | PAIR | @pairdotfund | pair.fund", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-9, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: candidate, value: "dontblink | dontblink | @dontblink_cto | dontblink.community", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-10, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: candidate, value: "letscash | LetsCash | @letscashfun | letscash.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-11, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: candidate, value: "lunch-fun | lunch.fun | @lunchdotfun | lunch.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-12, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: candidate, value: "peer | Peer | none | peer.family", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: candidate, value: "promo-family | promo.family | @promofamilyapp | promofamily.app", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: candidate, value: "clanker-pad | Clanker pad | @clanker_world | clanker.world | dependency", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-15, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: candidate, value: "coinbarrel | Coinbarrel | @UseCoinbarrel | coinbarrel.com", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: candidate, value: "varo | Varo | @launchonvaro | varo.rialto.xyz", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-17, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: candidate, value: "circus | Circus | @circus_trade | circus.trade", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-18, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: candidate, value: "sentry | Sentry | @sentrylauncher | sentry.trading | dependency", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: candidate, value: "bags | Bags | none | docs.bags.fm", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-20, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: candidate, value: "klik | Klik | @klik_evm | klik.finance", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-21, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: candidate, value: "ape-store | Ape Store | @apedotstore | ape.store", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-22, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: candidate, value: "bow-fun | bow.fun | @bowdotfun | bow.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-23, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: candidate, value: "pew-fun | pew.fun | @pewdotfun | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-24, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: candidate, value: "trench | Trench | @TrenchToday01 | trench.today", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-25, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: candidate, value: "doppler | Doppler | @dopplerprotocol | none | dependency", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-26, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: candidate, value: "likes-fun | likes.fun | @likesdotfun | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: candidate, value: "easya-kickstart | EasyA Kickstart | @EasyA_Kickstart | kickstart.easya.io", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-28], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: candidate, value: "cube-family | cube.family | @CubeFamilyX | cube.family", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-29], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: candidate, value: "hoodl | Hoodl | none | docs.hoodl.app", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "hoodfactory | HOODFACTORY | none | hoodfactory.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-31], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: candidate, value: "hoodpad | HoodPad | none | hoodpad.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-32], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: candidate, value: "the-hood | The Hood | none | thehood.meme", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-33], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: candidate, value: "hoodpump | HoodPump | none | docs.hoodpump.live", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-34], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: candidate, value: "huvat | Huvat | none | huvat.fun", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-35], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: candidate, value: "launchhood | LaunchHood | @Launchhood | launchhood.com", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-36], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: candidate, value: "aeron | Aeron | @Aeron_ai | aeron.sh", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-37], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: candidate, value: "standard-reserve | Standard Reserve | @standard_rsv | standardreserve.xyz", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-38], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: candidate, value: "cashcat | CASHCAT | @cashcat_token | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-39, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: candidate, value: "jinqian | JINQIAN | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-40, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-34, field: candidate, value: "nudes | NUDES | @SendNudesRH | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-41, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-35, field: candidate, value: "boner | BONER | @bonercoinlong | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-42, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-36, field: candidate, value: "spacehood | SPACEHOOD | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-43, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-37, field: candidate, value: "frong | FRONG | @frongcommunity | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-44, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-38, field: candidate, value: "microduck | microduck | @MicroDuckNVDA | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-45, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-39, field: candidate, value: "orbio | ORBIO | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-46, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-40, field: candidate, value: "robloxians | ROBLOXIANS | @RobloxiansPage | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-47, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-41, field: candidate, value: "gooner | GOONER | @gooneronhood | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-48, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-42, field: candidate, value: "hood10 | HOOD10 | @hood10xyz | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-49, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-43, field: candidate, value: "brodie | BRODIE | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-50, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-44, field: candidate, value: "chump | CHUMP | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-45, field: candidate, value: "shrub | SHRUB | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-46, field: candidate, value: "juggernaut | JUGGERNAUT | @Juggernautrh | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2, R-51], reproduction_ids: [], supersedes: null }
  - { id: CLM-47, field: candidate, value: "icoin | ICOIN | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-48, field: candidate, value: "goybeam | GOYBEAM | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-49, field: candidate, value: "peptides | PEPTIDES | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-50, field: candidate, value: "fatcoin | FATCOIN | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-51, field: candidate, value: "moo | MOO | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-52, field: candidate, value: "semi | SEMI | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-53, field: candidate, value: "ubik | UBIK | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-54, field: candidate, value: "kitty | KITTY | none | roarwithkitty.com", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-52, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-55, field: candidate, value: "doge-1 | DOGE-1 | @Doge1CoinRH | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-53, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-56, field: candidate, value: "send-nudes | SENDNUDES | none | none", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-57, field: taxonomy.primary-leaf, value: "pair | launch/hook-programmable", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-58, field: taxonomy.primary-leaf, value: "dontblink | launch/stock-paired-factory", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-59, field: taxonomy.primary-leaf, value: "letscash | launch/hook-programmable", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-60, field: taxonomy.primary-leaf, value: "lunch-fun | launch/stock-paired-factory", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-61, field: taxonomy.primary-leaf, value: "peer | markets/options", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-62, field: taxonomy.primary-leaf, value: "coinbarrel | launch/hook-programmable", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-63, field: taxonomy.primary-leaf, value: "varo | launch/uni-pool-launch", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-64, field: taxonomy.primary-leaf, value: "bags | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-65, field: taxonomy.primary-leaf, value: "klik | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-66, field: taxonomy.primary-leaf, value: "ape-store | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-67, field: taxonomy.primary-leaf, value: "bow-fun | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-68, field: taxonomy.primary-leaf, value: "pew-fun | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-69, field: taxonomy.primary-leaf, value: "trench | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-70, field: taxonomy.primary-leaf, value: "likes-fun | markets/prediction", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-71, field: taxonomy.primary-leaf, value: "easya-kickstart | launch/stock-paired-factory", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-28], reproduction_ids: [], supersedes: null }
  - { id: CLM-72, field: taxonomy.primary-leaf, value: "cube-family | launch/hook-programmable", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-29], reproduction_ids: [], supersedes: null }
  - { id: CLM-73, field: taxonomy.primary-leaf, value: "hoodl | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-74, field: taxonomy.primary-leaf, value: "hoodfactory | agents/agent-launch-layer", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-31], reproduction_ids: [], supersedes: null }
  - { id: CLM-75, field: taxonomy.primary-leaf, value: "hoodpad | launch/other-pad", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-32], reproduction_ids: [], supersedes: null }
  - { id: CLM-76, field: taxonomy.primary-leaf, value: "the-hood | launch/bonding-curve", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-33], reproduction_ids: [], supersedes: null }
  - { id: CLM-77, field: taxonomy.primary-leaf, value: "hoodpump | launch/hook-programmable", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-34], reproduction_ids: [], supersedes: null }
  - { id: CLM-78, field: taxonomy.primary-leaf, value: "huvat | launch/hook-programmable", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-35], reproduction_ids: [], supersedes: null }
  - { id: CLM-79, field: taxonomy.primary-leaf, value: "launchhood | launch/uni-pool-launch", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-36], reproduction_ids: [], supersedes: null }
  - { id: CLM-80, field: taxonomy.primary-leaf, value: "aeron | tooling/machine-payments", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-37], reproduction_ids: [], supersedes: null }
  - { id: CLM-81, field: taxonomy.primary-leaf, value: "standard-reserve | rwa-products/reserve-currency", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-38], reproduction_ids: [], supersedes: null }
  - { id: CLM-82, field: relationship, value: "varo is the Rialto pad; @launchonvaro bio: A launchpad by @rialto_xyz. rialto is a dependency card, not a census slug, so it is not listed under possible_matches.", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: ct
    title: "GeckoTerminal: Robinhood Chain is 29 of top 30 trending tokens"
    summary: "Official GeckoTerminal post on 2026-09-02: Robinhood Chain accounts for 29 of today's top 30 trending tokens."
    occurred_at: 2026-09-02T09:30:13Z
    observed_at: 2026-09-03T06:00:00Z
    affected_fields: [candidate, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-2
    type: company
    title: "Pons posted $5B lifetime volume on Robinhood Chain"
    summary: "Official @ponsdotfamily post: Pons just passed $5B volume traded and we're not slowing down."
    occurred_at: 2026-09-02T15:58:04Z
    observed_at: 2026-09-03T06:00:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: ct
    title: "RH Daily 24h launchpad board: Pons, LONG, o1"
    summary: "RH Daily ranked 24h launchpad volume: Pons $315.9M, LONG $47.5M, o1 $23.7M, then Noxa, TradePools."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-03T06:00:00Z
    affected_fields: [candidate, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]

receipts:
  - { id: R-1, publisher: DexScreener, title: "Robinhood pair board (GO-LIVE.md 2026-09-02 capture)", url: "https://dexscreener.com/robinhood", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-32, CLM-34, CLM-35, CLM-36, CLM-37, CLM-38, CLM-39, CLM-40, CLM-41, CLM-42, CLM-43, CLM-47, CLM-48, CLM-49, CLM-50, CLM-51, CLM-52, CLM-53, CLM-54, CLM-55, CLM-56], excerpt: "GO-LIVE.md 2026-09-02 DexScreener tokens/v1 robinhood: NUDES/SNAP 0xbe98b753…7401 liq $421k; BONER/HIMS 0x98096d17…1e18 $2.34M; SPACEHOOD/SPCX 0xFe7E19Cb…1E18 $982k; FRONG/WETH 0x6245e67a…0c47 $788k; PAIR/SPY 0x6b1d4292…66be $247k; CASHCAT/WETH 0x020bfC65…18b4 $2.85M; SENDNUDES/SNAP 0xaa231cB7…01e18 clone under $25k." }
  - { id: R-2, publisher: GeckoTerminal, title: "Robinhood trending pools (GO-LIVE.md 2026-09-02 capture)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-33, CLM-44, CLM-45, CLM-46, CLM-51, CLM-52], excerpt: "GO-LIVE.md GET /networks/robinhood/trending_pools 2026-09-02: CHUMP/WETH $1.07M/$4.87M; SHRUB/WETH $147k/$6.78M; JINQIAN/FAMI $5.45M/$94.5M; JUGGERNAUT/WETH $474k/$1.88M; MOO/MU $3.26M/$6.20M; later fetch SEMI/MU $1.27M/$2.00M." }
  - { id: R-3, publisher: Dune 0x_emerson, title: "Robinhood memecoin launchpads 30d (HARVEST.md)", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-8, CLM-11, CLM-13, CLM-14, CLM-15, CLM-16, CLM-18], excerpt: "HARVEST.md Emerson 30d: Clanker 391 tokens $19.5M DEX vol factory 0xd3f2cc17…9a94; Bags 1,554 / $1.38M factory 0xe8cc4431…cb37; Circus 572 factory 0xb7fa26c6…cb00; Klik 361 / $0.31M; Ape Store 137 / $0.15M; bow.fun 33 / $0.25M; Trench 123,004 / $59k factory 0x2ecfb98b…fbaa." }
  - { id: R-4, publisher: Dune OKX, title: "Robinhood Chain launchpads lifetime (HARVEST.md)", url: "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-3, CLM-4, CLM-10, CLM-17], excerpt: "HARVEST.md OKX lifetime since 2026-07-01: letscash.fun 9,470 launched $115.0M DEX; varo 8,712 / $109.9M; dontblink.family 1,044 / $34.7M; lunch.fun 1,200 / $31.2M; pew.fun 555 / $11.8M." }
  - { id: R-5, publisher: "@GeckoTerminal", title: "Robinhood Chain 29 of today's top 30 trending tokens", url: "https://x.com/GeckoTerminal/status/2095081854504407187", published_at: 2026-09-02T09:30:13Z, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-1], excerpt: "Robinhood Chain accounts for 29 of today's top 30 trending tokens." }
  - { id: R-6, publisher: "@ponsdotfamily", title: "Pons just passed $5B volume traded", url: "https://x.com/ponsdotfamily/status/2095179461301805078", published_at: 2026-09-02T15:58:04Z, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "Pons just passed $5B volume traded and we're not slowing down. Let's win." }
  - { id: R-7, publisher: "@RHDaily__", title: "24h launchpad volume board", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3, CLM-1, CLM-5, CLM-19], excerpt: "24h launchpad volume claim: @ponsdotfamily $315.9M, @longdotxyz $47.5M, @o1_exchange $23.7M, @Noxa_Fi $21.3M, @TradePools $16.4M, @lunchdotfun $2.8M, @dopplerprotocol $2.2M, @bankrbot $2.0M, @letscashfun $2.0M, @flapdotsh $1.9M." }
  - { id: R-8, publisher: o1, title: "Launchpad production contracts", url: "https://docs.o1.exchange/launchpad/reference/production-contracts", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-1], excerpt: "HARVEST.md Round 8: RH 4663 launchpad-v4-minimal Launch Factory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d for ETH + USDG + 194 stocks. App launch.o1.exchange. Dual-chain with a Base factory at a different address." }
  - { id: R-9, publisher: PAIR, title: "PAIR pad site", url: "https://pair.fund", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-57], excerpt: "HARVEST.md: multipool pad, launch vs a basket of stock tokens, Uni v4 hooks. Handle @pairdotfund. GO-LIVE PAIR/SPY 0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be liq $247k vol $1.46M." }
  - { id: R-10, publisher: dontblink, title: "dontblink community changelog", url: "https://dontblink.community/changelog", published_at: 2026-09-01T00:00:00Z, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-3, CLM-58], excerpt: "HARVEST.md: v2.16 dated 1 Sep 2026. Modes Classic, Pump Curve, Fair Drop, Celebrity Vault. Stock-priced launches across 194 RH tokenized stocks. Handle @dontblink_cto. dontblink.family DNS failed this pass." }
  - { id: R-11, publisher: LetsCash, title: "LetsCash launch", url: "https://www.letscash.fun/launch", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-4, CLM-59], excerpt: "HARVEST.md: custom Uni v4 pad. Supply any whole number 1B-1Qa. Quote USDG or ETH. Handle @letscashfun. Factory UUPS 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661." }
  - { id: R-12, publisher: lunch.fun, title: "lunch.fun site", url: "https://lunch.fun", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-5, CLM-60], excerpt: "HARVEST.md: @lunchdotfun bio Instantly launch memecoins in the Robinhood universe, with one click, for free. 195 stock pairs claimed 31 Aug. Unique $HOOD pair." }
  - { id: R-13, publisher: Peer, title: "peer.family", url: "https://peer.family", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-6, CLM-61], excerpt: "HARVEST.md fetched 2026-09-02: options on FOMO traders' PnL. Vault TVL $1.4M, 30d fees to LPs $19.1k. /discover showed 1 market open on chain across 10 listed traders. $PEER 0x96f0889cbc2d1423fd64fd1307335fe72f1a198e. No official X found." }
  - { id: R-14, publisher: promo.family, title: "promofamily.app", url: "https://promofamily.app/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-7], excerpt: "HARVEST.md: Collective FOMO affiliate rebate. Footer still: Six answers we still need from fomo.family before the first line of code. Pre-prod. Handle @promofamilyapp. promo.family DNS failed this pass." }
  - { id: R-15, publisher: Clanker, title: "Clanker Robinhood stats", url: "https://clanker.world/clankers/chain/robinhood/stats", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-8], excerpt: "HARVEST.md: Clanker pad factory 0xd3f2cc1731b7fd17f28798835c2e02f0a1839a94. Handle @clanker_world. Distinct from $CLANKER token 0xd24688a1d530f648aed86a835aca8ad6a7e61e18. Multi-chain brand; recent X posts are Base deploys." }
  - { id: R-16, publisher: Coinbarrel, title: "Robinhood contract addresses", url: "https://docs.coinbarrel.com/developers/robinhood-contract-addresses", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-9, CLM-62], excerpt: "HARVEST.md: Unified Hook V5 launcherProxy 0x4234e536aa5da8be18d41ef6f86533430e264e70. Legacy V3 0x985dfae571a0c5c90ac997f08687056d2ce1e46f. Handle @UseCoinbarrel. Bio: Create markets on Robinhood." }
  - { id: R-17, publisher: Varo, title: "Varo by Rialto", url: "https://varo.rialto.xyz/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-10, CLM-63, CLM-82], excerpt: "HARVEST.md: Handle @launchonvaro bio A launchpad by @rialto_xyz. Uni v3 instant pool, no bonding, no graduation fee. Fixed 100M supply. Pair WETH, USDG, or a liquid RH stock token. Tokens vanity 0xc1a0." }
  - { id: R-18, publisher: "@circus_trade", title: "Circus X account", url: "https://x.com/circus_trade", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11], excerpt: "HARVEST.md: @circus_trade · circus.trade. Factory 0xb7fa26c6fcb8801cabc538b82a6e80ae1c43cb00. OKX lifetime $46.2M. Product mechanism still thin this pass." }
  - { id: R-19, publisher: Sentry, title: "sentry.trading", url: "https://sentry.trading", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-12], excerpt: "HARVEST.md: @sentrylauncher. No bonding curve; live on Uniswap at deploy; LP locked in the factory. Ink + RH issuance. Llama adapter v3 0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb. Not in census 49." }
  - { id: R-20, publisher: Bags, title: "Bags Robinhood overview", url: "https://docs.bags.fm/robinhood/overview", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-13, CLM-64], excerpt: "HARVEST.md: docs.bags.fm/robinhood · Bags.fm. Factory 0xe8cc4431adf8b5a847c113ef0c6af9043219cb37. Emerson 30d 1,554 tokens $1.38M DEX. OKX lifetime $16.2M. No official handle confirmed this pass." }
  - { id: R-21, publisher: "@klik_evm", title: "Klik X account", url: "https://x.com/klik_evm", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-14, CLM-65], excerpt: "HARVEST.md: @klik_evm · klik.finance. Factory 0x16cf6788b762ee8969744586ed16fc5705140dd7. Emerson 30d $309k. Team said 15 Jul 2026 they bridged off RH; Emerson still shows launches through 1 Sep." }
  - { id: R-22, publisher: Ape Store, title: "ape.store", url: "https://ape.store", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-15, CLM-66], excerpt: "HARVEST.md: @apedotstore · ape.store. Factory 0x6e4910ea5a04376032f6564da9a9e4e88b7a87c1. Emerson 30d 137 tokens $154k. OKX lifetime $30.5M." }
  - { id: R-23, publisher: bow.fun, title: "bow.fun", url: "https://bow.fun", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-16, CLM-67], excerpt: "HARVEST.md: @bowdotfun · bow.fun. Factory 0xc70e510e14710ea535cab7b2414860af63feab79. Emerson 30d 33 tokens $250k. OKX lifetime $62.3M." }
  - { id: R-24, publisher: "@pewdotfun", title: "pew.fun X account", url: "https://x.com/pewdotfun", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-17, CLM-68], excerpt: "HARVEST.md: @pewdotfun. Factory 0xc9182c283a9b739fed26a8e7f55a4d2b09f39d8c. OKX lifetime 555 launched $11.8M." }
  - { id: R-25, publisher: Trench, title: "trench.today", url: "https://trench.today", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-18, CLM-69], excerpt: "HARVEST.md: trench.today · @TrenchToday01. Factory 0x2ecfb98bce4f3616115e4a2a7a2379af388dfbaa. Emerson 30d 123,004 tokens $59k DEX. Distinct from trenchpad.trade and trench.icu." }
  - { id: R-26, publisher: "@dopplerprotocol", title: "Doppler X account", url: "https://x.com/dopplerprotocol", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HARVEST.md / GO-LIVE.md: @dopplerprotocol on RH Daily 24h launchpad board at $2.2M. Uniswap Doppler infra, not a census pad. STATICS Genesis used Doppler Airlock." }
  - { id: R-27, publisher: "@likesdotfun", title: "likes.fun X account", url: "https://x.com/likesdotfun", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, CLM-70], excerpt: "HARVEST.md: @likesdotfun bio rip packs with @fomo and @pumpfun traders, win on their profits. Fantasy league for Pump + FOMO users." }
  - { id: R-28, publisher: EasyA Kickstart, title: "Kickstart Robinhood lane", url: "https://kickstart.easya.io/robinhood", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-21, CLM-71], excerpt: "HARVEST.md: @EasyA_Kickstart posted kickstart.easya.io/robinhood on 1 Sep. Permissionless ideas launchpad, Live coins, not equity. Pair ETH or 24 stocks; creator earns about 1% of volume in the paired asset." }
  - { id: R-29, publisher: "@CubeFamilyX", title: "cube.family X account", url: "https://x.com/CubeFamilyX", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22, CLM-72], excerpt: "HARVEST.md: Uni v4 hook pad. One tx deploys ERC-20 + market. 80% of swap fee to holders or creator. Site cube.family fetch failed this pass. 15 Aug official: $CUBE is not live yet." }
  - { id: R-30, publisher: Hoodl, title: "Hoodl Robinhood Chain docs", url: "https://docs.hoodl.app/robinhood-chain/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-23, CLM-73], excerpt: "HARVEST.md: Launch factory + fee vault + fee-splitter escrow. Factory 0x303D34C3BE5c6C1BB182689dE665cdD464A8d055. FeeVault 0x93186b59bAA55522017c2189e5ac73D26f96B0E0. Deploy block 16672314." }
  - { id: R-31, publisher: HOODFACTORY, title: "hoodfactory.fun", url: "https://www.hoodfactory.fun/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-24, CLM-74], excerpt: "HARVEST.md: AI-agent pad: describe ticker, pair TSLA/AAPL/NVDA/ETH, one-click. Official token 0x0af5769d75f790377e7cce39bca416741d4f3a2b. 80% supply locked Token/WETH Uni v3." }
  - { id: R-32, publisher: HoodPad, title: "HoodPad docs", url: "https://hoodpad.fun/docs", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-25, CLM-75], excerpt: "HARVEST.md: Shared flywheel: every trade on every launch pays creators, team, and buys back HPAD. Separate UI pad.hoodscan.ai claims 90% fees to creator. Name collision — do not merge without CA." }
  - { id: R-33, publisher: The Hood, title: "thehood.meme docs", url: "https://thehood.meme/docs", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-26, CLM-76], excerpt: "HARVEST.md: Bonding curve to SushiSwap V3, LP locked forever in immutable locker. Token addresses end in 400D. TokenFactory 0x7db1Bb5fFd66609f0b57d7374FB032BAce7e5338. BondingCurveMarket 0x376033DA02cb177441a0Ac4C00942A63541047b5." }
  - { id: R-34, publisher: HoodPump, title: "HoodPump docs", url: "https://docs.hoodpump.live/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-27, CLM-77], excerpt: "HARVEST.md: One tx: ERC-20 + Uni v4 pool + one-sided LP + Agent NFT. LP locked 750 days. Agent NFT earns LP fees, splittable 5 ways. Optional DividendDistributor in WETH/USDG." }
  - { id: R-35, publisher: Huvat, title: "huvat.fun", url: "https://huvat.fun/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-28, CLM-78], excerpt: "HARVEST.md: Uni v4 hook marketplace + pad. Up to 5 swap-time blocks. Bonding 10 tranches then v4 pool. Site claim 132 launches, 25 graduated, $3.78M 24h vol. Page body empty this pass — volume unverified." }
  - { id: R-36, publisher: "@Launchhood", title: "LaunchHood X account", url: "https://x.com/Launchhood", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-29, CLM-79], excerpt: "HARVEST.md: @Launchhood. Bio: First Launchpad built on pools.trade. Factory 0x62b33a039d289cbda50ebeb72fe4261449e61bcf. launchhood.com paused this fetch. $LAUNCH bio 0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de." }
  - { id: R-37, publisher: Aeron, title: "aeron.sh", url: "https://aeron.sh", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-30, CLM-80], excerpt: "HARVEST.md: @Aeron_ai. Agent payments, not a pad. CA 0x3ca94121191020e2cd0cea79eab659a096ff8a2c. x402 facilitator x402.aeron.sh. 2 Sep: 103 agents, 1,198 payments, $0.0025 average, EIP-3009 on 4663." }
  - { id: R-38, publisher: Standard Reserve, title: "Standard Reserve protocol app", url: "https://www.standardreserve.xyz/app/protocol/", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-31, CLM-81], excerpt: "HARVEST.md: @standard_rsv. Bio: sovereign onchain central bank. No token or NFT set is live yet. Pre-token. White paper live 23 Aug. 26 Aug: first audit round; 15 contracts working in sync." }
  - { id: R-39, publisher: DexScreener, title: "CASHCAT token", url: "https://dexscreener.com/robinhood/0x020bfC650A365f8BB26819deAAbF3E21291018b4", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-32], excerpt: "GO-LIVE.md: CASHCAT/WETH 0x020bfC650A365f8BB26819deAAbF3E21291018b4 liq $2.85M vol $34.17M. Likely pad Noxa (inactive); token still trades. Handle @cashcat_token." }
  - { id: R-40, publisher: DexScreener, title: "JINQIAN token", url: "https://dexscreener.com/robinhood/0xe81880c1C5054245e036359f5c7be31606E79F56", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-33], excerpt: "GO-LIVE.md: JINQIAN/FAMI 0xe81880c1C5054245e036359f5c7be31606E79F56 liq $5.11M vol $96.2M. Gecko trending vol #1 this fetch. No handle this pass." }
  - { id: R-41, publisher: DexScreener, title: "NUDES token", url: "https://dexscreener.com/robinhood/0xbe98b75361935b18d688409424a869a4C3dC7401", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-34], excerpt: "GO-LIVE.md: NUDES/SNAP 0xbe98b75361935b18d688409424a869a4C3dC7401 liq $421k vol $8.16M. Likely pad o1 (prior harvest: o1 Send Nudes). Handle @SendNudesRH." }
  - { id: R-42, publisher: DexScreener, title: "BONER token", url: "https://dexscreener.com/robinhood/0x98096d17e191B3dA1d5f99a6D7b3584351b11E18", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-35], excerpt: "GO-LIVE.md: BONER/HIMS 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18 liq $2.34M vol $4.11M. DexScreener website app.long.xyz/tokens/0x9809…. Handle @bonercoinlong." }
  - { id: R-43, publisher: DexScreener, title: "SPACEHOOD token", url: "https://dexscreener.com/robinhood/0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-36], excerpt: "GO-LIVE.md: SPACEHOOD/SPCX 0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18 liq $982k vol $3.07M. LONG (app.long.xyz/tokens/0xfe7e…). No handle on DexScreener this pass." }
  - { id: R-44, publisher: DexScreener, title: "FRONG token", url: "https://dexscreener.com/robinhood/0x6245e67affA44a23077f0Ea7f981a8DC743a0c47", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-37], excerpt: "GO-LIVE.md: FRONG/WETH 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 liq $788k vol $5.75M. DexScreener website pools.trade; Gecko dex uniswap-pools-trade. Handle @frongcommunity." }
  - { id: R-45, publisher: DexScreener, title: "microduck token", url: "https://dexscreener.com/robinhood/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-38], excerpt: "GO-LIVE.md: microduck/NVDA 0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725 liq $471k vol $2.29M. Handle @MicroDuckNVDA." }
  - { id: R-46, publisher: DexScreener, title: "ORBIO token", url: "https://dexscreener.com/robinhood/0xaa07a0e9209e16ac99708c3ec70159c6ef3128a3", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-39], excerpt: "HARVEST.md FOMO firehose / GO-LIVE same-stock: ORBIO 0xaa07a0e9209e16ac99708c3ec70159c6ef3128a3. GO-LIVE ORBIO/NVDA $198k/$3.25M. No official handle this pass." }
  - { id: R-47, publisher: DexScreener, title: "ROBLOXIANS token", url: "https://dexscreener.com/robinhood/0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-40], excerpt: "GO-LIVE.md: ROBLOXIANS/RBLX 0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D liq $208k vol $2.06M. Handle @RobloxiansPage." }
  - { id: R-48, publisher: DexScreener, title: "GOONER token", url: "https://dexscreener.com/robinhood/0x51E7bf39c6Cf1A7F53DdfaA5dB346c69994511F2", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-41], excerpt: "GO-LIVE.md / HARVEST.md: GOONER/PENGU 0x51E7bf39c6Cf1A7F53DdfaA5dB346c69994511F2 liq $92.3k vol $361k. Handle @gooneronhood. Distinct from Bankr $GOON 0x4D4aD0e4dfACB73C6cf85F81acbD09a40Fd95bA3." }
  - { id: R-49, publisher: DexScreener, title: "HOOD10 token", url: "https://dexscreener.com/robinhood/0x0D257cA40d40090BE60C2d2Ed5bB3535392838cc", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-42], excerpt: "GO-LIVE.md: HOOD10/ETH 0x0D257cA40d40090BE60C2d2Ed5bB3535392838cc liq $143k vol $349k. Handle @hood10xyz." }
  - { id: R-50, publisher: DexScreener, title: "BRODIE token", url: "https://dexscreener.com/robinhood/0x737054bd706cba68eaF4661411FeDE5F6C2952e5", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-43], excerpt: "GO-LIVE.md: BRODIE/ETH 0x737054bd706cba68eaF4661411FeDE5F6C2952e5 liq $436k vol $132k. HARVEST.md also lists 0xbc268894bad5802ee4c2874ebdb83d29a1835dd4 vs LBank 0x45F82AC5d507e988f7406935da8eEfe495a360e0. Do not merge CAs." }
  - { id: R-51, publisher: "@Juggernautrh", title: "Juggernaut X account", url: "https://x.com/Juggernautrh", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-46], excerpt: "HARVEST.md: @Juggernautrh in 28 Aug runner list. GO-LIVE Gecko JUGGERNAUT/WETH $474k/$1.88M." }
  - { id: R-52, publisher: DexScreener, title: "KITTY token", url: "https://dexscreener.com/robinhood/0x96F10D7A43639B9c7e09aee5304C406670289aB4", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-54], excerpt: "GO-LIVE.md: KITTY/GME 0x96F10D7A43639B9c7e09aee5304C406670289aB4 liq $15.9k vol $1.09M. roarwithkitty.com; DexScreener twitter is a Community URL." }
  - { id: R-53, publisher: DexScreener, title: "DOGE-1 token", url: "https://dexscreener.com/robinhood/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-55], excerpt: "GO-LIVE.md: DOGE-1/SPCX 0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 liq $39.2k vol $493k. Handle @Doge1CoinRH." }

gaps:
  - { priority: P1, question: "What is the official site or handle for JINQIAN?", checked: "GO-LIVE DexScreener/Gecko 2026-09-02 capture: CA 0xe81880c1…7956, no twitter field, no project site", next: "open the token page and search X for a handle that links that CA" }
  - { priority: P1, question: "What is the official site or handle for SPACEHOOD?", checked: "GO-LIVE DexScreener 2026-09-02: none on the token profile; LONG token page is the pad surface, not a project handle", next: "check app.long.xyz token page and X for a SPACEHOOD account" }
  - { priority: P1, question: "What is the official site or handle for ORBIO?", checked: "HARVEST firehose CA 0xaa07a0e9…28a3 and GO-LIVE ORBIO/NVDA row; no handle", next: "search X and the DexScreener profile for a project account" }
  - { priority: P1, question: "What is the official site or handle for CHUMP?", checked: "GO-LIVE Gecko trending_pools CHUMP/WETH; no project site or handle in the capture", next: "open the Gecko pool page and DexScreener twitter field" }
  - { priority: P1, question: "What is the official site or handle for SHRUB?", checked: "GO-LIVE Gecko trending_pools SHRUB/WETH; no project site or handle in the capture", next: "open the Gecko pool page and DexScreener twitter field" }
  - { priority: P1, question: "What is the official site or handle for ICOIN?", checked: "GO-LIVE same-stock AAPL book ICOIN $526k/$5.08M; @0xSammy post 2095289356168712328; no CA or handle in the capture", next: "fetch the DexScreener AAPL search and record the CA and twitter field" }
  - { priority: P1, question: "What is the official site or handle for GOYBEAM?", checked: "GO-LIVE same-stock PLTR book GOYBEAM $341k/$1.16M; no CA or handle in the capture", next: "fetch the DexScreener PLTR search and record the CA and twitter field" }
  - { priority: P1, question: "What is the official site or handle for PEPTIDES?", checked: "GO-LIVE same-stock LLY book PEPTIDES $770k/$4.35M; no CA or handle in the capture", next: "fetch the DexScreener LLY search and record the CA and twitter field" }
  - { priority: P1, question: "What is the official site or handle for FATCOIN?", checked: "GO-LIVE same-stock LLY book FATCOIN $111k/$2.30M; no CA or handle in the capture", next: "fetch the DexScreener LLY search and record the CA and twitter field" }
  - { priority: P1, question: "What is the official site or handle for MOO?", checked: "GO-LIVE Gecko MOO/MU $3.26M/$6.20M; HARVEST listed MOO as a LONG stock-pair with handle unknown", next: "open the Gecko MOO/MU pool and DexScreener twitter field" }
  - { priority: P1, question: "What is the official site or handle for SEMI?", checked: "GO-LIVE Gecko SEMI/MU trending row; no project site or handle in the capture", next: "open the Gecko SEMI/MU pool and DexScreener twitter field" }
  - { priority: P1, question: "What is the official site or handle for UBIK?", checked: "GO-LIVE same-stock GLD book UBIK/GLD $257k/$3.26M; no handle in the capture", next: "fetch the DexScreener GLD search and record the CA and twitter field" }
  - { priority: P1, question: "What is the official site or handle for the SENDNUDES SNAP pair, and what is the full CA?", checked: "GO-LIVE NUDES search: SENDNUDES/SNAP 0xaa231cB7…01e18 liq $21k, distinct from NUDES 0xbe98b753…7401; truncated CA only", next: "re-run DexScreener search NUDES robinhood and copy the full pair and token addresses" }
  - { priority: P1, question: "Which BRODIE contract is the live book, given two further CAs in HARVEST?", checked: "GO-LIVE DexScreener 0x737054bd706cba68eaF4661411FeDE5F6C2952e5; HARVEST also 0xbc268894bad5802ee4c2874ebdb83d29a1835dd4 and LBank 0x45F82AC5d507e988f7406935da8eEfe495a360e0; @BrodieHasFun not on this DexScreener profile", next: "compare holder counts and pair liquidity on 4663; do not merge" }
---

# Discovery inventory — research packet

## What it is

Names on Robinhood Chain that are not yet in the Icarus registry. Window 2026-09-01 through 2026-09-02 (last capture 2026-09-02T23:35Z). Surfaces: DexScreener tokens/v1 and pairs on chain robinhood, GeckoTerminal trending_pools, Dune Emerson 30d and OKX lifetime pad tables, RH Daily launchpad volume board, first-party pad docs and X Latest from named handles, as recorded in the 2026-09-02 GO-LIVE and HARVEST captures. Limits: figures are aggregator prints, not explorer reproductions; Blockscout exists_on_4663 was not flipped; promo.family and some pad pages failed DNS; every census slug and every packed slug under research/inbox/packets/ was excluded.

Themes: rwa, memecoin, launchpad

## Operations log

- Dedupe against content/census.yaml (49 slugs) and research/inbox/packets/ at 2026-09-03T06:00Z. Packed slugs skipped: arrow, artificial-inu, bankr, delta, denar, downto, earn-protocol, fables, hoodfun, hookr, index, long, longbow, mancer, meridian, noxa, pons, pools-trade, quotrons, scopl, sinjoh, snuggle, statics-protocol, stonkbroker, up, vimen, wire.
- Capture files read: GO-LIVE.md and HARVEST.md dated 2026-09-02 in the live inbox path.
- Candidates listed: 56 (31 pads/apps, 25 tokens/graduations).
- Leaf proposals: 25 (o1-exchange, clanker-pad, sentry, doppler tagged dependency with no leaf; promo-family pre-prod and circus mechanism thin, no leaf; tokens left without a leaf).
- Possible matches: 2 (launchhood → pools-trade; gooner → bankr $GOON, ticker-only, different CA).
- Varo/Rialto recorded as relationship CLM-82; rialto is a dependency card, not a census slug, so it is not under possible_matches.
- Names with no official site, docs or handle: 14.
- Events filed: 3 (Gecko 29/30, Pons $5B, RH Daily pad board).
- Addresses not checked on 4663 this pass; deployments and metrics left empty.
- Rate limits: none.
