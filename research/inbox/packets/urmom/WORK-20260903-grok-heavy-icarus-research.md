---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: urmom
name: urmom
packet_tier: seed
as_of: 2026-09-03T05:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [urmom]
allowed_paths:
  - research/inbox/packets/urmom/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: urmom
  aliases: ["ur mom"]
  symbols: [urmom]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites []; constructor socials website empty; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists https://x.com/urmomonrh; constructor socials twitter is https://x.com/cakaldevs/status/2094674513669566658; @UrMomOnRH bio has no contract this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Blockscout, constructor socials, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "urmom is the ERC-20 at 0x4874…AF7f created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; listed x.com/urmomonrh is not @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "urmom is a PonsV2LauncherToken cloned by PonsV2LaunchDeployer 0x3711…1A42, not LongLauncher"
        - "Packed SPACEHOOD/BEAVER on the same SPCX rail are 44-byte LongLauncher clones; this CA is 3248 B"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "urmom is 0x4874…AF7f paired to SPCX 0x4a0E…5eEa via Pons v2; different CA, quote, name and handle"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "urmom is a Pons v2 LaunchToken in a Uniswap v4 urmom/SPCX pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x4874…AF7f is a 3248-byte PonsV2LauncherToken with non-empty code on 4663; name ur mom / symbol urmom; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. Helper 0xe47e…B286 then PonsV2LaunchAndBuy at 2026-09-01T06:31:36Z minted against pairToken SPCX 0x4a0E…5eEa; CurveCompleted / PoolGraduated at 2026-09-01T06:38:12Z seeded Uniswap v4 pool 0x826ae375…4eee. SPCX is a rail in GET /rhj/assets. Distinct from packed SPACEHOOD/BEAVER LongLauncher clones and from packed DOGE-1 on the same rail. Flag ca-collision: second URMOM 0x0423…3CBa. No bidirectional official handle this pass. [R-1] [R-3] [R-5] [R-6] [R-7] [R-9] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/UrMomOnRH", authenticity: unconfirmed }

deployments:
  - label: urmom token (PonsV2LauncherToken bytecode)
    role: token
    address:
      value: "0x4874845b0d4aCffd896DdE1E42828A543717AF7f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-18]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-19]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0xCaF55a3E96e6afF542c2882339C713a68Fa79744"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchAndBuy
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-20]
  - label: launch helper (create tx to)
    role: other
    address:
      value: "0xe47e41f449fB934dd09A2015c9D3658fcBd8B286"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-5]
  - label: V2LaunchLocker (graduated position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:26:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6]
  - label: SPCX Stock Token (pair quote / launch pairToken)
    role: token
    address:
      value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-9, R-21]
  - label: "URMOM ticker collision (Pons v2, not this row)"
    role: token
    address:
      value: "0x0423bEd328942Cb8bF79726b986893E1Eb863CBa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14, R-15, R-16]

metrics:
  - { kind: volume_24h, value: 793011.31, currency: USD, as_of: 2026-09-03T05:27:17Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x4874845b0d4aCffd896DdE1E42828A543717AF7f pair 0x826ae375…4eee urmom/SPCX Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 68970.73, currency: USD, as_of: 2026-09-03T05:27:17Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4874845b0d4aCffd896DdE1E42828A543717AF7f pair 0x826ae375…4eee urmom/SPCX liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 574770, currency: USD, as_of: 2026-09-03T05:27:17Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4874845b0d4aCffd896DdE1E42828A543717AF7f pair 0x826ae375…4eee fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1192, currency: null, as_of: 2026-09-03T05:23:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x4874845b0d4aCffd896DdE1E42828A543717AF7f holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:28:25Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com Chrome UA eth_chainId 0x1237 (4663) eth_blockNumber 0x32b52dc (53170908). Token 0x4874…AF7f eth_getCode 3248 B prefix 6080604052600436, not EIP-1167. name ur mom, symbol urmom, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0xCAd4c1Ee627216a2D9e2457Ed5E6422A8fb10209 (eth_getCode 4538 B). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xCaF55a3E96e6afF542c2882339C713a68Fa79744. description() empty. socials() twitter https://x.com/cakaldevs/status/2094674513669566658 telegram/discord/website/farcaster empty. logo https://metadata.j7tracker.io/images/94f22d02832646f3. SPCX name Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token. SPACEHOOD 0xFe7E19…1E18 and BEAVER 0x6e40…1e18 are 44-byte EIP-1167 prefixes. Packed DOGE-1 0x3eC8…4c03 is also 3248 B. Collision 0x0423…3CBa is 3248 B, name ur mom symbol URMOM, launchFactory same 0x7eD5…EC7e, deployer 0x3F18…eb7e (eth_getCode 0x), curve 0xE2d1…9B76, socials twitter https://x.com/buyurmom/status/2094663944786882900, description urmom looks good here / Launched on discord.gg/uxento." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:26:00Z, receipt_ids: [R-1, R-3, R-4, R-6, R-18, R-19, R-20, R-21], result: "Blockscout api/v2 token 0x4874…AF7f name ur mom symbol urmom holders_count 1192 total_supply 1e27 is_contract true is_verified true name PonsV2LauncherToken file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 verified_at 2026-09-01T06:38:19Z creator_address_hash 0x3711…1A42 creation_transaction_hash 0xc6013e6c…3c1c. Create tx 2026-09-01T06:31:36Z block 51507473 from EOA 0x3E6c…1EC9 to 0xe47e…B286 method 0x8edaf62d; TokenLaunched token 0x4874…AF7f curve 0xCaF55a…9744 deployer 0xCAd4…0209 pairToken SPCX 0x4a0E…5eEa launchConfigId 0 graduationThreshold 722e18. Launched recipient 0x3E6c…1EC9 quoteSpent 1718891811620455036 tokensReceived 55644477988362874222079105. CurveCompleted tx 0xaefba476…b5b8 2026-09-01T06:38:12Z block 51511390 quoteOut 72200000000000000130 tokenOut 285714285714285714285714285; LaunchSwept; PoolManager Initialize id 0x826ae375…4eee currency0 urmom currency1 SPCX fee 0 hooks V2MemeHook 0xE5e7…e044; PoolGraduated positionId 1384642 tokenAmount 204081632653061224594784490 pairTokenAmount 72200000000000000130; V2LaunchLocker PositionLocked 1384642 TokenSupplyLocked 81632653061224489690929795. SPCX BeaconProxy holders_count 71383." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:27:17Z, receipt_ids: [R-7, R-10, R-16], result: "DexScreener latest/dex/tokens/0x4874…AF7f: 7 robinhood uniswap pairs; top urmom/SPCX v4 0x826ae375…4eee quote SPCX 0x4a0E…5eEa liquidity.usd 68970.73 volume.h24 793011.31 fdv/marketCap 574770 pairCreatedAt 1788244692000 (2026-09-01T06:38:12Z) info.websites [] info.socials https://x.com/urmomonrh?s=11. Search q=urmom row 0 is that book; row 1 is collision 0x0423…3CBa / SPCX pair 0xa8da5f26…9694 liquidity.usd 13219.1 volume.h24 564439.39 fdv 21070 pairCreatedAt 1788243172000 (2026-09-01T06:12:52Z) info.socials https://x.com/buyurmom. Search also listed PulseChain, Solana, and older robinhood URMOM/SPCX 0xdCbFF958…1E18 and URMOM/TSLA 0xbAbcF9E1…1E18 rows." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:29:00Z, receipt_ids: [R-9], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one SPCX hit tokenSymbol SPCX tokenName Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token contractAddress 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:29:00Z, receipt_ids: [R-14, R-15, R-17], result: "Collision token 0x0423…3CBa Blockscout name ur mom symbol URMOM holders_count 693 is_verified false creator_address_hash null. RPC eth_getCode 3248 B. launchFactory() 0x7eD5…EC7e. Curve 0xE2d1…9B76 CurveCompleted / LaunchSwept tx 0x94cb885f…e003 2026-09-01T06:12:52Z block 51496331 token 0x0423…3CBa quoteOut 72200000000000000142. DexScreener pair 0xa8da5f26…9694 created the same second." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "A helper at 0xe47e…B286 forwards into PonsV2LaunchAndBuy, which deploys a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken SPCX; CurveCompleted / LaunchSwept about six minutes later and PoolGraduated seed the Uniswap v4 urmom/SPCX book 0x826ae375…4eee. V2LaunchLocker PositionLocked tokenId 1384642. Token owner() reverts.", class: verified, observed_at: 2026-09-03T05:28:25Z, receipt_ids: [R-3, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "ur mom", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "urmom", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x4874845b0d4aCffd896DdE1E42828A543717AF7f", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:28:25Z, receipt_ids: [R-4, R-5, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-1, R-3, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists https://x.com/urmomonrh; constructor socials twitter is a @cakaldevs status; @UrMomOnRH bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-5, R-7, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SPCX 0x4a0E…5eEa is Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token and is in GET /rhj/assets (194 assets, 1 SPCX hit, chainId 4663). SPCX is a rail, not this subject. Distinct from packed SPACEHOOD 0xFe7E19…1E18 and BEAVER 0x6e40…1e18 (both 44-byte LongLauncher clones on the same quote) and from packed DOGE-1 0x3eC8…4c03 (same 3248 B Pons v2 path, different CA). Flag ca-collision: Pons v2 0x0423…3CBa name ur mom symbol URMOM.", class: verified, observed_at: 2026-09-03T05:29:00Z, receipt_ids: [R-5, R-9, R-10, R-14, R-16, R-21], reproduction_ids: [REP-1, REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "urmom/SPCX Uniswap v4 24h volume 793011.31 USD and liquidity.usd 68970.73 at 2026-09-03T05:27:17Z (DexScreener pair 0x826ae375…4eee)", class: verified, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair fdv/marketCap 574770 at 2026-09-03T05:27:17Z; 7 robinhood uniswap pairs on latest/dex/tokens", class: verified, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1192, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source says deployer is immutable reference data and confers no privileges. deployer() 0xCAd4…0209 has 4538 B of code and was created in the launch tx by helper 0xe47e…B286. Launch from EOA 0x3E6c…1EC9 has empty code.", class: verified, observed_at: 2026-09-03T05:28:25Z, receipt_ids: [R-3, R-5, R-27], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "launchFactory 0x7eD5…EC7e; curve 0xCaF55a…9744; V2LaunchLocker 0x2674…4952; V2MemeHook 0xE5e7…e044; PoolRegistered creator 0x7011…cf8E (291 B code)", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa (Space Exploration Technologies Corp • Robinhood Token); venue is Uniswap v4 pair 0x826ae375…4eee. SPCX is a rail, not this profile.", class: verified, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-6, R-7, R-9, R-21], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, or hood.fun", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, or X search this pass", class: unknown, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: constructor socials twitter is https://x.com/cakaldevs/status/2094674513669566658; DexScreener lists x.com/urmomonrh; @UrMomOnRH bio has no CA this pass", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-5, R-7, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Assignment lead ~$61,329 liq / ~$765,181 vol was not the live DexScreener SPCX book this pass (68970.73 / 793011.31 at 2026-09-03T05:27:17Z). Gecko skipped (packet GET was 404).", class: verified, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", class: verified, observed_at: 2026-09-03T05:29:00Z, receipt_ids: [R-5, R-9, R-21], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xCaF55a3E96e6afF542c2882339C713a68Fa79744", class: verified, observed_at: 2026-09-03T05:28:25Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; constructor socials website empty", class: claim, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "urmom | ur mom | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: Pons v2 0x0423bEd328942Cb8bF79726b986893E1Eb863CBa (3248 B, launchFactory 0x7eD5…EC7e, Uniswap v4 SPCX pool 0xa8da5f26…9694, DexScreener liq 13219.1 vol.h24 564439.39, constructor twitter https://x.com/buyurmom/status/2094663944786882900). Canonical CA is 0x4874…AF7f. DexScreener search also listed PulseChain/Solana rows and older robinhood URMOM CAs 0xdCbFF958…1E18 / 0xbAbcF9E1…1E18.", class: verified, observed_at: 2026-09-03T05:29:00Z, receipt_ids: [R-10, R-14, R-15, R-16, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link and copypasta-pattern: collision description names discord.gg/uxento; X posts advertised netlify.app/claim URLs with CA 0x0423…3CBa. Those pages were not opened this pass.", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-15, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@UrMomOnRH.role", value: project, class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@UrMomOnRH.slug", value: urmom, class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@UrMomOnRH.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.secondary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: "account.@buyurmom.flags", value: "ca-collision | unconfirmed-official — bio pins 0x0423…3CBa, not 0x4874…AF7f", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-13, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: relationship, value: "wrong-chain name collision: DexScreener search also returned PulseChain pulsex and Solana pumpswap rows named urmom. This packet is robinhood 0x4874…AF7f only.", class: claim, observed_at: 2026-09-03T05:27:17Z, receipt_ids: [R-10], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener urmom/SPCX 24h volume $793k, liquidity $69.0k"
    summary: "Uniswap v4 pair 0x826ae375…4eee liquidity.usd 68970.73 volume.h24 793011.31 fdv 574770."
    occurred_at: 2026-09-03T05:27:17Z
    observed_at: 2026-09-03T05:27:17Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: ct
    title: "@buyurmom posted $urmom with collision CA in bio"
    summary: "Bio pins 0x0423…3CBa. Post asked how to explain $urmom to financial advisors. Flag ca-collision."
    occurred_at: 2026-09-03T05:22:23Z
    observed_at: 2026-09-03T05:30:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: ct
    title: "@UrMomOnRH posted ur mom is so big"
    summary: "@UrMomOnRH (ur mom) posted ur mom is so big she’s going to need all of them. Bio has no CA this pass."
    occurred_at: 2026-09-03T04:15:02Z
    observed_at: 2026-09-03T05:30:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: ct
    title: "Dex Paid Panther posted urmom/SPCX dex-paid alert"
    summary: "Alert named ur mom (urmom)/SPCX CA 0x4874…AF7f on robinhood ponsv2, MC 463K at 00:06:06."
    occurred_at: 2026-09-02T21:06:08Z
    observed_at: 2026-09-03T05:27:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-5
    type: onchain
    title: "CurveCompleted / PoolGraduated into urmom/SPCX"
    summary: "Tx 0xaefba476…b5b8 at 2026-09-01T06:38:12Z; poolId 0x826ae375…4eee; V2LaunchLocker PositionLocked 1384642."
    occurred_at: 2026-09-01T06:38:12Z
    observed_at: 2026-09-03T05:26:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-6
    type: onchain
    title: "Pons v2 helper minted urmom against SPCX"
    summary: "Tx 0xc6013e6c…3c1c from 0x3E6c…1EC9 at 2026-09-01T06:31:36Z; pairToken SPCX; TokenLaunched curve 0xCaF55a…9744."
    occurred_at: 2026-09-01T06:31:36Z
    observed_at: 2026-09-03T05:23:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-7
    type: onchain
    title: "Second URMOM/SPCX book graduated on 0x0423"
    summary: "Tx 0x94cb885f…e003 LaunchSwept 0x0423…3CBa into Uniswap v4 0xa8da5f26…9694 vs SPCX; ticker collision."
    occurred_at: 2026-09-01T06:12:52Z
    observed_at: 2026-09-03T05:29:00Z
    affected_fields: [relationship, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17, R-16]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x4874…AF7f ur mom / urmom", url: "https://robinhoodchain.blockscout.com/address/0x4874845b0d4aCffd896DdE1E42828A543717AF7f", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x4874845b0d4aCffd896DdE1E42828A543717AF7f name PonsV2LauncherToken is_contract true is_verified true proxy_type null. token name ur mom symbol urmom decimals 18 total_supply 1000000000000000000000000000 holders_count 1192 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xc6013e6c1e96ee0fb59576942d0e585a86640aef26814c882b59d9c284773c1c." }
  - { id: R-2, publisher: Blockscout, title: "Token API 0x4874…AF7f", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x4874845b0d4aCffd896DdE1E42828A543717AF7f", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12], excerpt: "address_hash 0x4874845b0d4aCffd896DdE1E42828A543717AF7f name ur mom symbol urmom decimals 18 total_supply 1000000000000000000000000000 holders_count 1192 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "launch tx 0xc6013e6c…3c1c", url: "https://robinhoodchain.blockscout.com/tx/0xc6013e6c1e96ee0fb59576942d0e585a86640aef26814c882b59d9c284773c1c", published_at: 2026-09-01T06:31:36Z, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-22, EVT-6], excerpt: "timestamp 2026-09-01T06:31:36.000000Z status ok block_number 51507473 from 0x3E6c71f64376bDCb463a2637d1B5ccAeda171EC9 (is_contract false) to 0xe47e41f449fB934dd09A2015c9D3658fcBd8B286 method 0x8edaf62d. Mint urmom 1e27 to curve 0xCaF55a3E96e6afF542c2882339C713a68Fa79744. PonsV2LaunchAndBuy Launched token 0x4874…AF7f recipient 0x3E6c…1EC9 quoteSpent 1718891811620455036." }
  - { id: R-4, publisher: Blockscout, title: "TokenLaunched log for urmom", url: "https://robinhoodchain.blockscout.com/tx/0xc6013e6c1e96ee0fb59576942d0e585a86640aef26814c882b59d9c284773c1c", published_at: 2026-09-01T06:31:36Z, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, EVT-6], excerpt: "PonsV2LaunchFactory TokenLaunched token 0x4874845b0d4aCffd896DdE1E42828A543717AF7f curve 0xCaF55a3E96e6afF542c2882339C713a68Fa79744 deployer 0xCAd4c1Ee627216a2D9e2457Ed5E6422A8fb10209 pairToken 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa launchConfigId 0 graduationThreshold 72200000000000000000. Block 51507473." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on urmom", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:28:25Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-13, CLM-14, CLM-16, CLM-17, CLM-19, CLM-21, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32b52dc (53170908). Token code 3248 B prefix 60806040. name ur mom symbol urmom decimals 18 totalSupply 1e27. owner() reverts. deployer() 0xCAd4c1Ee…0209 code 4538 B. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xCaF55a3E96e6afF542c2882339C713a68Fa79744. socials twitter https://x.com/cakaldevs/status/2094674513669566658. SPACEHOOD/BEAVER code 44 B EIP-1167. Collision 0x0423 code 3248 B." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / PoolGraduated tx 0xaefba476…b5b8", url: "https://robinhoodchain.blockscout.com/tx/0xaefba476ffd040eee7df38bee629bd23856bac19b10b7d92f0bdadb4b09ab5b8", published_at: 2026-09-01T06:38:12Z, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-14, CLM-15, CLM-22, EVT-5], excerpt: "timestamp 2026-09-01T06:38:12.000000Z status ok block_number 51511390. CurveCompleted quoteOut 72200000000000000130 tokenOut 285714285714285714285714285. LaunchSwept token 0x4874…AF7f. PoolManager Initialize id 0x826ae3756e19d32a75cad183ce156554864f0087aa55879f33a7b8fb82ff4eee currency0 urmom currency1 SPCX fee 0 hooks 0xE5e70264…e044. PoolGraduated positionId 1384642. V2LaunchLocker PositionLocked 1384642." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens urmom", url: "https://api.dexscreener.com/latest/dex/tokens/0x4874845b0d4aCffd896DdE1E42828A543717AF7f", published_at: null, accessed_at: 2026-09-03T05:27:17Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-10, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, CLM-28, CLM-29, CLM-30, EVT-1], excerpt: "7 robinhood uniswap pairs. Top pairAddress 0x826ae3756e19d32a75cad183ce156554864f0087aa55879f33a7b8fb82ff4eee labels v4 base ur mom / urmom quote Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token / SPCX 0x4a0E65A3…5eEa liquidity.usd 68970.73 volume.h24 793011.31 fdv 574770 marketCap 574770 pairCreatedAt 1788244692000. info.websites [] info.socials https://x.com/urmomonrh?s=11." }
  - { id: R-8, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x4874845b0d4aCffd896DdE1E42828A543717AF7f?tab=contract", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "ContractName PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35+commit.47b9dedd is_verified true is_partially_verified false verified_at 2026-09-01T06:38:19.754535Z. Comment: deployer is carried here as immutable reference data for off-chain attribution only, and confers no privileges over the token." }
  - { id: R-9, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:29:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21, CLM-30], excerpt: "HTTP 200. assets length 194. One SPCX hit tokenSymbol SPCX tokenName Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token contractAddress 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-10, publisher: DexScreener, title: "search q=urmom", url: "https://api.dexscreener.com/latest/dex/search?q=urmom", published_at: null, accessed_at: 2026-09-03T05:27:17Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25, CLM-32], excerpt: "Row 0 robinhood uniswap v4 urmom/SPCX 0x4874…AF7f pair 0x826ae375…4eee. Row 1 robinhood uniswap v4 URMOM/SPCX 0x0423…3CBa pair 0xa8da5f26…9694 liq 13219.1 vol.h24 564439.39. Later rows PulseChain pulsex, Solana pumpswap, robinhood URMOM/SPCX 0xdCbFF958…1E18 and URMOM/TSLA 0xbAbcF9E1…1E18." }
  - { id: R-11, publisher: "@UrMomOnRH", title: "ur mom is so big she’s going to need all of them", url: "https://x.com/UrMomOnRH/status/2095364922246848660", published_at: 2026-09-03T04:15:02Z, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28, CLM-29, EVT-3], excerpt: "Profile: ur mom @UrMomOnRH. Bio: A coin so special even ur mom bought. Ideated by Elon Musk. No contract in the bio this pass. Post: ur mom is so big she’s going to need all of them." }
  - { id: R-12, publisher: "@cakaldevs", title: "constructor twitter status for canonical CA", url: "https://x.com/cakaldevs/status/2094674513669566658", published_at: 2026-09-01T06:31:35Z, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19], excerpt: "the other account doesnt know how to share fees to holders or something so ill just dev with 1% tax spcx pairing all fees to holders. Reply 2094676400058048524 posted 0x4874845b0d4acffd896dde1e42828a543717af7f. Timestamp 06:31:35Z, one second before launch tx 0xc6013e6c…3c1c." }
  - { id: R-13, publisher: "@buyurmom", title: "How will we explain that $urmom made us rich", url: "https://x.com/buyurmom/status/2095381873660764597", published_at: 2026-09-03T05:22:23Z, accessed_at: 2026-09-03T05:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-31, EVT-2], excerpt: "Profile: Ur Mom @buyurmom. Bio: $Urmom On Robinhood, Prophesied By Elon Musk then 0x0423bed328942cb8bf79726b986893e1eb863cba. Post: How will we explain to our financial advisors that $urmom made us rich? @elonmusk" }
  - { id: R-14, publisher: Blockscout, title: "Token 0x0423…3CBa ur mom / URMOM", url: "https://robinhoodchain.blockscout.com/address/0x0423bEd328942Cb8bF79726b986893E1Eb863CBa", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x0423bEd328942Cb8bF79726b986893E1Eb863CBa name ur mom is_contract true is_verified false proxy_type null implementations []. token symbol URMOM decimals 18 total_supply 1000000000000000000000000000 holders_count 693 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "eth_getCode and Pons views on collision URMOM", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:28:25Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, CLM-26], excerpt: "Token 0x0423…3CBa code 3248 B prefix 60806040. name ur mom symbol URMOM totalSupply 1e27. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0x3F1837e2Cf012328BDaAB36D1555db072f4Eeb7e code 0x. curve() 0xE2d1Fa6aDC9b772b0f5806C68937f7601c189B76. socials twitter https://x.com/buyurmom/status/2094663944786882900. description urmom looks good here / Launched on discord.gg/uxento." }
  - { id: R-16, publisher: DexScreener, title: "latest/dex/tokens collision URMOM", url: "https://api.dexscreener.com/latest/dex/tokens/0x0423bEd328942Cb8bF79726b986893E1Eb863CBa", published_at: null, accessed_at: 2026-09-03T05:27:17Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25, CLM-31, EVT-7], excerpt: "Top pairAddress 0xa8da5f26e157d54e49cda22d4d74aa8a00b896e5a2f2f76d348e40ca84a49694 labels v4 base ur mom / URMOM quote SPCX 0x4a0E65A3…5eEa liquidity.usd 13219.1 volume.h24 564439.39 fdv 21070 marketCap 21070 pairCreatedAt 1788243172000. info.websites [] info.socials https://x.com/buyurmom." }
  - { id: R-17, publisher: Blockscout, title: "collision LaunchSwept tx 0x94cb885f…e003", url: "https://robinhoodchain.blockscout.com/tx/0x94cb885f2b78cef47baf225f246f83df7c02fe5286a84359e8df5b1109cae003", published_at: 2026-09-01T06:12:52Z, accessed_at: 2026-09-03T05:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, EVT-7], excerpt: "timestamp 2026-09-01T06:12:52.000000Z status ok block_number 51496331. PonsV2LaunchFactory LaunchSwept token 0x0423bEd328942Cb8bF79726b986893E1Eb863CBa quoteOut 72200000000000000142 tokenOut 285714285714285714285714285. DexScreener pairCreatedAt for 0xa8da5f26…9694 is the same second." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-19, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35 verified_at 2026-08-04T17:40:45Z. ABI includes TokenLaunched, PoolGraduated, getLaunchedToken." }
  - { id: R-20, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-21, publisher: Blockscout, title: "Token 0x4a0E…5eEa SPCX", url: "https://robinhoodchain.blockscout.com/address/0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "hash 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa name BeaconProxy is_contract true is_verified true implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Space Exploration Technologies Corp • Robinhood Token symbol SPCX decimals 18 holders_count 71383. SPCX is the pair rail, not this profile." }
  - { id: R-22, publisher: Blockscout, title: "Address 0xCaF55a…9744 PonsV2BondingCurve", url: "https://robinhoodchain.blockscout.com/address/0xCaF55a3E96e6afF542c2882339C713a68Fa79744", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0xCaF55a3E96e6afF542c2882339C713a68Fa79744 name PonsV2BondingCurve is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xc6013e6c1e96ee0fb59576942d0e585a86640aef26814c882b59d9c284773c1c." }
  - { id: R-23, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true." }
  - { id: R-24, publisher: "@dexpaidpanther", title: "Dex paid ur mom (urmom) / SPCX", url: "https://x.com/dexpaidpanther/status/2095256988674306121", published_at: 2026-09-02T21:06:08Z, accessed_at: 2026-09-03T05:27:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "Dex paid: ur mom (urmom) / SPCX 0x4874845b0d4aCffd896DdE1E42828A543717AF7f MC: 463K Chain: robinhood (ponsv2) Time detected: 00:06:06 Rating: Good" }
  - { id: R-25, publisher: "@XDAQQSR13hwctFZ", title: "netlify claim URL with collision CA", url: "https://x.com/XDAQQSR13hwctFZ/status/2095284305337426004", published_at: 2026-09-02T22:54:41Z, accessed_at: 2026-09-03T05:27:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26], excerpt: "$URMOM has something running for holders. CA: 0x0423bEd328942Cb8bF79726b986893E1Eb863CBa https://crypto-8xe.netlify.app/claim?contract=0x0423bEd328942Cb8bF79726b986893E1Eb863CBa&cfg=evmdrop&pid=7qq3O. Flag copypasta-pattern and third-party-link. Page not opened this pass." }
  - { id: R-26, publisher: "@buyurmom", title: "The only ticker ever mentioned by @elonmusk is $urmom", url: "https://x.com/buyurmom/status/2094663944786882900", published_at: 2026-09-01T05:49:36Z, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-31], excerpt: "Constructor socials twitter for collision token 0x0423…3CBa. Post: The only ticker ever mentioned by @elonmusk is $urmom. $urmom paired with SPCX, fulfill the prophecy. Bio later pins 0x0423bed328942cb8bf79726b986893e1eb863cba." }
  - { id: R-27, publisher: Blockscout, title: "PonsV2LauncherToken source comment on deployer", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0x4874845b0d4aCffd896DdE1E42828A543717AF7f", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol. Source: deployer is carried here as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }

gaps:
  - { priority: P0, question: "Does any surface bidirectionally confirm @UrMomOnRH or a domain for token 0x4874…AF7f?", checked: "DexScreener info.websites [] info.socials urmomonrh; constructor twitter is a @cakaldevs status; @UrMomOnRH bio has no CA, 2026-09-03", next: "re-read DexScreener after a Claim Profile and the X bio if a CA is pinned" }
  - { priority: P0, question: "Does @buyurmom later pin 0x4874…AF7f, or does it stay on 0x0423…3CBa?", checked: "bio 0x0423…3CBa; DexScreener socials for collision is x.com/buyurmom; constructor socials match that status, 2026-09-03", next: "re-read the bio and both DexScreener info.socials" }
  - { priority: P1, question: "Which window printed the assignment lead of ~$61,329 liq / ~$765,181 vol?", checked: "Live DexScreener 68970.73 / 793011.31 at 2026-09-03T05:27:17Z; Gecko skipped because packet GET was 404", next: "keep the DexScreener urmom/SPCX pair slice" }
  - { priority: P1, question: "Does helper 0xe47e…B286 verified source later name the launchAndBuy wrapper?", checked: "is_verified false; create tx method 0x8edaf62d; inner Launched from PonsV2LaunchAndBuy 0xe33E…2948, 2026-09-03", next: "read verified source if the explorer marks it verified" }
  - { priority: P2, question: "Is there an audit whose scope includes PonsV2LauncherToken as used on 4663?", checked: "Blockscout, DexScreener, X search, 2026-09-03", next: "auditor report index for Pons v2 and a matching commit" }
---

# urmom — research packet

## What it is

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 urmom/SPCX pool. Traders buy and sell urmom against the SpaceX • Robinhood Token on that book. SPCX is the quote rail, not this profile. Distinct from packed SPACEHOOD, BEAVER, and DOGE-1 on the same rail.

Themes: memecoin, stock-paired:SPCX, rwa, launchpad

## Why it matters

The urmom/SPCX Uniswap v4 book listed about $793k of 24h volume on DexScreener at collection, with the quote leg the workbook SPCX Stock Token 0x4a0E…5eEa (GET /rhj/assets row). A second robinhood URMOM book exists at 0x0423…3CBa. DexScreener search also lists PulseChain and Solana rows with the same ticker.

## What could go wrong

USD liquidity figures on the urmom/SPCX book count both sides, and the quote side is SPCX, not USDG. Ticker-only pairing is not identity. DexScreener lists @UrMomOnRH while constructor socials twitter is a @cakaldevs status, so the handle stays unconfirmed-official. A second CA uses the same ticker.

## Product and mechanics

Helper 0xe47e…B286 received tx 0xc6013e6c…3c1c from EOA 0x3E6c…1EC9 at 2026-09-01T06:31:36Z and forwarded into PonsV2LaunchAndBuy 0xe33E…2948. TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e, curve 0xCaF55a…9744, pairToken SPCX 0x4a0E…5eEa, and graduationThreshold 722e18. Supply 1e9*1e18 minted to the curve. [verified R-3 R-4 R-5]

CurveCompleted / LaunchSwept tx 0xaefba476…b5b8 at 2026-09-01T06:38:12Z swept quoteOut 72200000000000000130 SPCX and tokenOut 285714285714285714285714285, then initialized Uniswap v4 poolId 0x826ae375…4eee (fee 0, hooks V2MemeHook 0xE5e7…e044). V2LaunchLocker PositionLocked 1384642 and TokenSupplyLocked 81632653061224489690929795. Secondary urmom/USDG and urmom/ETH books exist on DexScreener with far less liquidity than the SPCX book. [verified R-6 R-7]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer confers no privileges. deployer() 0xCAd4…0209 has code and was created in the launch tx. Launch EOA 0x3E6c…1EC9 has empty code. PoolRegistered creator 0x7011…cf8E. [verified R-5 R-6 R-27]

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and this token CA are verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). Helper 0xe47e…B286 is_verified false. No audit report URL was located this pass. [verified R-1 R-18 R-19 R-20] [unknown]

## Team and provenance

No official domain this pass. Constructor socials twitter is https://x.com/cakaldevs/status/2094674513669566658; website/telegram empty. DexScreener lists x.com/urmomonrh. @UrMomOnRH bio has no contract. Flag unconfirmed-official. Collision token constructor twitter and DexScreener socials are @buyurmom, whose bio pins 0x0423…3CBa. [claim R-5 R-7 R-11 R-12 R-13]

## Economics and activity

urmom/SPCX Uniswap v4 24h volume is 793011.31 USD and liquidity.usd is 68970.73 at 2026-09-03T05:27:17Z from DexScreener pair 0x826ae375…4eee. fdv/marketCap is 574770. [claim R-7]

Blockscout holders_count 1192. Pair created 2026-09-01T06:38:12Z. Assignment lead of ~$61,329 / ~$765,181 was not the live slice this pass. Gecko was skipped because the packet GET was 404. Collision 0x0423…3CBa / SPCX DexScreener liquidity.usd 13219.1 volume.h24 564439.39. [claim R-1 R-7 R-16]

## Material risks

- Quote token SPCX 0x4a0E…5eEa is a Robinhood Stock Token rail; this subject is the memecoin, not SPCX. [verified R-9 R-21]
- Pool USD reserve is urmom plus SPCX, not a USDG or WETH backstop. [claim R-7]
- Same-ticker robinhood book at 0x0423…3CBa. Flag ca-collision. [verified R-14 R-16 R-17]
- Handle is unconfirmed-official; constructor twitter and DexScreener socials disagree. [claim R-5 R-7 R-11]
- Collision posts advertised netlify claim URLs. Flag copypasta-pattern and third-party-link. [claim R-25]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/deployer/curve/SPCX/launch/graduation/collision txs, RPC with Chrome UA, DexScreener token and search, /rhj/assets, and the X posts cited above were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-9]
- Numbers: 793011.31 is the DexScreener urmom/SPCX pair 24h volume. Liquidity 68970.73 is that pool, not an all-pools figure. [claim R-7]
- Adversarial: the strongest contrary reading is that this row is SPACEHOOD, BEAVER, DOGE-1, SPCX itself, or collision 0x0423…3CBa. Different CAs, create paths (Pons v2 vs LongLauncher vs BeaconProxy Stock), and bytecode sizes argue against those. [verified R-5 R-9 R-14]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no urmom / URMOM / 0x4874…AF7f. GET packet path on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned HTTP 404, so collection continued.
- Explorer: Blockscout api/v2 search q=urmom (Chrome UA), token/address for 0x4874…AF7f and 0x0423…3CBa, create tx 0xc6013e6c…3c1c, graduation 0xaefba476…b5b8, collision LaunchSwept 0x94cb885f…e003, factory/deployer/launchAndBuy/curve/locker/SPCX. RPC eth_getCode/eth_call with Chrome UA at block 53170908.
- Aggregators: DexScreener latest/dex/tokens for both CAs, token-pairs/v1/robinhood, search q=urmom. Gecko skipped (packet GET 404).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SPCX.
- Social: X keyword Latest urmom / URMOM / CA hex; from:buyurmom; from:UrMomOnRH; constructor statuses 2094674513669566658 and 2094663944786882900.
- Failed: Blockscout search q=0x4874845b returned 0 items (full address required); token transfers?type=mint HTTP 422; collision creator_address_hash null (LaunchSwept used instead); Gecko not fetched.
- Time: collection 2026-09-03T05:22Z–2026-09-03T05:30Z.
