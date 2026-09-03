---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: chud
name: chud
packet_tier: seed
as_of: 2026-09-03T05:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [chud]
allowed_paths:
  - research/inbox/packets/chud/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: chud
  aliases: []
  symbols: [chud]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; constructor socials website empty this pass"
  official_handle: "@RHChud"
  repository: "NULL — no GitHub org or repository URL on DexScreener, constructor socials, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "chud is the ERC-20 at 0x982965…1feB created through that factory; entity_kind token, not protocol"
        - "Official surface is @RHChud with CA in the bio, not @ponsdotfamily"
        - "Packed KARMA 0xb1B800…baC3 is a sibling Pons v2 RDDT graduation, not this CA; wojak/snoo are in-flight other names"
    - slug: long
      signals: [ticker-only]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "Canonical chud is a 3248-byte PonsV2LauncherToken via PonsV2LaunchFactory, Uniswap v4 pair 0x5536f402…476f"
        - "LongLauncher CHUD 0x52E050…1e18 / pair 0x7fa6b9ef…712d is a same-ticker RDDT book recorded as ca-collision, not this row"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "chud is name/symbol chud at 0x982965…1feB paired to RDDT 0x05b37F…F4C via Pons v2"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "chud is a Pons v2 LaunchToken in a Uniswap v4 chud/RDDT pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x982965…1feB has 3248 bytes of code on 4663 (not EIP-1167); name/symbol chud; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. launchAndBuy at 2026-09-01T19:00:53Z minted against pairToken RDDT 0x05b37F…F4C; CurveCompleted / LaunchSwept at 2026-09-01T19:01:00Z; DexScreener chud/RDDT v4 0x5536f402…476f pairCreatedAt 2026-09-01T19:01:00Z. @RHChud bio pins the CA. Distinct from packed KARMA 0xb1B800…baC3, LongLauncher CHUD 0x52E050…1e18 (ca-collision), and in-flight wojak/snoo. RDDT is a rail. [R-1] [R-3] [R-5] [R-6] [R-7] [R-8] [R-9]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/RHChud", authenticity: confirmed }

deployments:
  - label: chud token (PonsV2LauncherToken bytecode)
    role: token
    address:
      value: "0x982965547E3B1f6DA55eE93B515834bD34081feB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-16]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x6197E3d1967fF1d952cD1b82a5616Cbe943F277b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5, R-6]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-17]
  - label: V2LaunchLocker (isLocked true for this token)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-20, R-23]
  - label: RDDT Stock Token (pair quote / launch pairToken; rail, not this subject)
    role: token
    address:
      value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-8, R-12]
  - label: "CHUD ticker collision (LongLauncher CHUD, not this row)"
    role: token
    address:
      value: "0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-13, R-14, R-18]
  - label: LongLauncher (collision create tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-14]
  - label: DopplerERC20V1 implementation (collision token)
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14]

metrics:
  - { kind: volume_24h, value: 490751.38, currency: USD, as_of: 2026-09-03T05:10:00Z, window: 24h, method: "api.dexscreener.com/tokens/v1/robinhood/0x982965547E3B1f6DA55eE93B515834bD34081feB pair 0x5536f402…476f chud/RDDT Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 34748.51, currency: USD, as_of: 2026-09-03T05:10:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood/0x982965547E3B1f6DA55eE93B515834bD34081feB pair 0x5536f402…476f chud/RDDT liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 225745, currency: USD, as_of: 2026-09-03T05:10:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood/0x982965547E3B1f6DA55eE93B515834bD34081feB pair 0x5536f402…476f fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 390, currency: null, as_of: 2026-09-03T05:10:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x982965547E3B1f6DA55eE93B515834bD34081feB holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-20], result: "rpc.mainnet.chain.robinhood.com Chrome UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32b206c (53158920) then 0x32b2af0 (53160688). Token 0x982965…1feB eth_getCode 3248 B prefix 608060405260043610, not EIP-1167. name chud, symbol chud, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x5dfD65079De1a0243807b0d7A632DCE0948F3661 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x6197E3d1967fF1d952cD1b82a5616Cbe943F277b (10229 B). description() nothing ever happens. socials() twitter/telegram/discord/farcaster/website empty. V2LaunchLocker 0x2674…4952 isLocked(token) true. RDDT name Reddit • Robinhood Token. Collision 0x52E050…1e18 code 44 B eip1167 DopplerERC20V1 0x3Be8…C599 name/symbol CHUD owner() Airlock 0xeb7C…0862 launchFactory() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-4, R-6, R-11, R-12, R-13, R-14, R-15, R-16, R-17], result: "Blockscout api/v2 Chrome UA. Token 0x982965…1feB name chud symbol chud holders_count 390 total_supply 1e27 is_contract true is_verified false proxy_type null creator_address_hash null. launchAndBuy tx 0x9fa9c06c…e5c4 2026-09-01T19:00:53Z block 51952445 from EOA 0x5dfD…3661 to PonsV2LaunchAndBuy 0xe33E…2948; params name chud symbol chud description nothing ever happens image ipfs://bafkreigwxdhwf5dkdah7i2z5ieoriysu5hl7nf724ppjlwratdma4u2tp4 socials empty pairToken RDDT 0x05b37F…F4C quoteIn 174591434462216952. TokenLaunched token 0x982965…1feB curve 0x6197…277b graduationThreshold 42347152428810721502. transferCreatorFeeRecipient tx 0x06d8174a…f4a9 2026-09-01T19:00:55Z newRecipient 0x458e…8D20. CurveCompleted / LaunchSwept / PoolGraduated tx 0x92445b82…1070 2026-09-01T19:01:00Z block 51952515 quoteOut 42347152428810721505 tokenOut 285714285714285714288123912 poolId 0x5536f402…476f. RDDT BeaconProxy Reddit • Robinhood Token holders_count 17080. Collision 0x52E050…1e18 CHUD / CHUD holders 194 proxy eip1167 DopplerERC20V1; create tx 0xd4612c39…f21e 2026-08-07T17:11:37Z to LongLauncher method create." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-18, R-19], result: "DexScreener tokens/v1/robinhood/0x982965…1feB HTTP 200: 1 pair, chud/RDDT v4 0x5536f402…476f quote RDDT 0x05b37F…F4C liquidity.usd 34748.51 volume.h24 490751.38 fdv/marketCap 225745 pairCreatedAt 1788289260000 (2026-09-01T19:01:00Z) info.websites [] info.socials x.com/RHChud. latest/dex/tokens: 5 robinhood uniswap pairs; RDDT book is the volume/liq leader; secondary USDG/ETH books under $13 liq. tokens/v1 collision 0x52E050…1e18: CHUD/RDDT v4 0x7fa6b9ef…712d liquidity.usd 65232.22 volume.h24 52164.63 fdv 89046 socials x.com/chudonlong. Search q=chud also listed other CHUD CAs (0x03A6…A331 Pons v2 CHUD/ETH, Chudjak/Chudjack) not this row." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663 status ASSET_STATUS_ACTIVE isin US75734B1008." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken RDDT; CurveCompleted / LaunchSwept / PoolGraduated seven seconds later and DexScreener pairCreatedAt 2026-09-01T19:01:00Z seed the Uniswap v4 chud/RDDT book 0x5536f402…476f. V2LaunchLocker isLocked(token) true. Token owner() reverts.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-7, R-20], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "chud", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "chud", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x982965547E3B1f6DA55eE93B515834bD34081feB", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-4, R-5, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-3, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@RHChud — bio contains CA 0x982965547e3b1f6da55ee93b515834bd34081feb; DexScreener info.socials is https://x.com/RHChud. Constructor socials twitter is empty.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-5, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote RDDT 0x05b37F…F4C is Reddit • Robinhood Token in GET /rhj/assets (194 assets, 1 RDDT hit, chainId 4663). RDDT is a rail, not this subject. Flag ca-collision: LongLauncher CHUD 0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18 / pair 0x7fa6b9ef…712d (DexScreener liq 65232.22 vol.h24 52164.63, socials x.com/chudonlong). Distinct from packed KARMA 0xb1B800…baC3 and in-flight wojak/snoo. Other same-ticker 4663 rows include Pons v2 CHUD/ETH 0x03A6…A331.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-8, R-12, R-13, R-14, R-18], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener chud/RDDT Uniswap v4 24h volume 490751.38 USD and liquidity.usd 34748.51 at 2026-09-03T05:10:00Z (pair 0x5536f402…476f)", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: 390, class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "token owner() reverts; deployer() 0x5dfD65079De1a0243807b0d7A632DCE0948F3661 has no code. transferCreatorFeeRecipient tx 0x06d8174a…f4a9 at 2026-09-01T19:00:55Z from that EOA to PonsV2LaunchFactory newRecipient 0x458e8E24f7cB3857F04FEFd9D67F0261E5648D20.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: control.privileged-role, value: "deployer() / launchAndBuy from 0x5dfD65079De1a0243807b0d7A632DCE0948F3661; launchFactory 0x7eD5…EC7e; curve 0x6197…277b; V2LaunchLocker 0x2674…4952 isLocked true; fee recipient 0x458e…8D20", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3, R-5, R-11, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is RDDT 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C (Reddit • Robinhood Token); venue is Uniswap v4 pair 0x5536f402…476f PoolManager 0x8366…0951. RDDT is a rail, not this profile.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-6, R-7, R-8, R-12], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-15, field: deployment.role, value: "Token creator_address_hash is null on Blockscout; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, or hood.fun", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, constructor socials, or X search this pass", class: unknown, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: communications.status, value: "constructor socials all empty; DexScreener info.socials is x.com/RHChud and info.websites []. copypasta-pattern: netlify claim URLs attached the CA. third-party-link: those claim hosts.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-5, R-7, R-9, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "DexScreener fdv/marketCap 225745. Assignment lead ~$35,645 liq / ~$494,174 vol is the same chud/RDDT book; live tokens/v1 at this as_of is 34748.51 / 490751.38.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-20, field: deployment.address, value: "0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-8, R-12], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x6197E3d1967fF1d952cD1b82a5616Cbe943F277b", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "NULL — DexScreener info.websites []; constructor website empty", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: candidate, value: "chud | chud | @RHChud | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "ca-collision: LongLauncher CHUD 0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18 (44 B EIP-1167 DopplerERC20V1, owner Airlock, Uniswap v4 RDDT pool 0x7fa6b9ef…712d, DexScreener liq 65232.22 vol.h24 52164.63, socials x.com/chudonlong). Canonical CA is 0x982965…1feB because @RHChud bio and DexScreener socials pin it.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-9, R-13, R-14, R-18], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-25, field: "account.@RHChud.role", value: project, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@RHChud.slug", value: chud, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@RHChud.follow", value: true, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener chud/RDDT 24h volume $490.8k, liquidity $34.7k"
    summary: "tokens/v1 pair 0x5536f402…476f volume.h24 490751.38 liquidity.usd 34748.51 fdv 225745."
    occurred_at: 2026-09-03T05:10:00Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: company
    title: "@RHChud posted FMCL with CA in the bio"
    summary: "Bio pins 0x982965547e3b1f6da55ee93b515834bd34081feb. Post 2095364403994468614: FMCL."
    occurred_at: 2026-09-03T04:12:58Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-3
    type: ct
    title: "@KittehQuant posted the chud CA"
    summary: "Post 2095342458104168599: Chud on RH / 0x982965547e3b1f6da55ee93b515834bd34081feb."
    occurred_at: 2026-09-03T02:45:46Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-4
    type: ct
    title: "Netlify claim URL attached the chud CA"
    summary: "Post 2095163443812638969 linked crypto-kms.netlify.app/claim with CA 0x982965…1feB. Flag copypasta-pattern."
    occurred_at: 2026-09-02T14:54:25Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-5
    type: company
    title: "@RHChud posted it was paired with Reddit"
    summary: "Post 2094899396320149608 at 2026-09-01T21:25:12Z: Finally paired with my one true love, Reddit."
    occurred_at: 2026-09-01T21:25:12Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [identity.handle, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-6
    type: onchain
    title: "CurveCompleted / LaunchSwept into chud/RDDT"
    summary: "Tx 0x92445b82…1070 at 2026-09-01T19:01:00Z; quoteOut 4.235e19 RDDT; poolId 0x5536f402…476f."
    occurred_at: 2026-09-01T19:01:00Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-7
    type: onchain
    title: "PonsV2LaunchAndBuy minted chud / chud"
    summary: "Tx 0x9fa9c06c…e5c4 from 0x5dfD…3661 at 2026-09-01T19:00:53Z; pairToken RDDT; curve 0x6197…277b."
    occurred_at: 2026-09-01T19:00:53Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-8
    type: onchain
    title: "LongLauncher created same-ticker CHUD"
    summary: "Tx 0xd4612c39…f21e at 2026-08-07T17:11:37Z minted CHUD 0x52E050…1e18 into Uniswap v4 RDDT pool 0x7fa6b9ef…712d."
    occurred_at: 2026-08-07T17:11:37Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [relationship, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x982965…1feB chud / chud", url: "https://robinhoodchain.blockscout.com/address/0x982965547E3B1f6DA55eE93B515834bD34081feB", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-11, CLM-15, CLM-23], excerpt: "hash 0x982965547E3B1f6DA55eE93B515834bD34081feB name chud is_contract true is_verified false proxy_type null implementations []. token symbol chud decimals 18 total_supply 1000000000000000000000000000 holders_count 390 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Token API 0x982965…1feB", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x982965547E3B1f6DA55eE93B515834bD34081feB", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-11], excerpt: "address_hash 0x982965547E3B1f6DA55eE93B515834bD34081feB name chud symbol chud decimals 18 total_supply 1000000000000000000000000000 holders_count 390 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "launchAndBuy tx 0x9fa9c06c…e5c4", url: "https://robinhoodchain.blockscout.com/tx/0x9fa9c06cb75dda613b95e6dc116d2537b83a315f7a25185dfa6fd0ff8b19e5c4", published_at: 2026-09-01T19:00:53Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-15, EVT-7], excerpt: "timestamp 2026-09-01T19:00:53.000000Z status ok block_number 51952445 from 0x5dfD65079De1a0243807b0d7A632DCE0948F3661 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name chud symbol chud description nothing ever happens pairToken 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C quoteIn 174591434462216952." }
  - { id: R-4, publisher: Blockscout, title: "TokenLaunched log for chud", url: "https://robinhoodchain.blockscout.com/tx/0x9fa9c06cb75dda613b95e6dc116d2537b83a315f7a25185dfa6fd0ff8b19e5c4", published_at: 2026-09-01T19:00:53Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-21, EVT-7], excerpt: "PonsV2LaunchFactory TokenLaunched token 0x982965547E3B1f6DA55eE93B515834bD34081feB curve 0x6197E3d1967fF1d952cD1b82a5616Cbe943F277b deployer 0x5dfD65079De1a0243807b0d7A632DCE0948F3661 pairToken 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C launchConfigId 0 graduationThreshold 42347152428810721502. Block 51952445." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on chud", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-12, CLM-13, CLM-15, CLM-16, CLM-20, CLM-21, CLM-22, CLM-24], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32b206c (53158920). Token code 3248 B prefix 60806040. name chud symbol chud decimals 18 totalSupply 1e27. owner() reverts. deployer() 0x5dfD65079D…3661 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x6197E3d196…277b. description nothing ever happens. socials empty. Collision 0x52E050…1e18 code 44 B EIP-1167." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x92445b82…1070", url: "https://robinhoodchain.blockscout.com/tx/0x92445b82edd40e0b0f80e2b4c59143e9a0c7d7d68d8af598bf79e96e7adb1070", published_at: 2026-09-01T19:01:00Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-14, CLM-21, EVT-6], excerpt: "timestamp 2026-09-01T19:01:00.000000Z status ok block_number 51952515. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 42347152428810721505 tokenOut 285714285714285714288123912. LaunchSwept token 0x982965…1feB. PoolManager Initialize id 0x5536f402…476f currency0 RDDT currency1 chud. PoolGraduated positionId 1441835." }
  - { id: R-7, publisher: DexScreener, title: "tokens/v1 chud 0x982965…1feB", url: "https://api.dexscreener.com/tokens/v1/robinhood/0x982965547E3B1f6DA55eE93B515834bD34081feB", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-10, CLM-14, CLM-16, CLM-18, CLM-19, CLM-22, CLM-23, EVT-1], excerpt: "1 robinhood uniswap pair. pairAddress 0x5536f40294acc2dae177dca05ffd0966f1c7f126772f53528168c1ca60bd476f labels v4 base chud / chud quote Reddit • Robinhood Token / RDDT 0x05b37Fb53A…F4C liquidity.usd 34748.51 volume.h24 490751.38 fdv 225745 marketCap 225745 pairCreatedAt 1788289260000. info.websites [] info.socials x.com/RHChud." }
  - { id: R-8, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-14, CLM-20], excerpt: "HTTP 200. assets length 194. One RDDT hit tokenSymbol RDDT tokenName Reddit • Robinhood Token contractAddress 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C chainId 4663 status ASSET_STATUS_ACTIVE isin US75734B1008." }
  - { id: R-9, publisher: "@RHChud", title: "FMCL", url: "https://x.com/RHChud/status/2095364403994468614", published_at: 2026-09-03T04:12:58Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-18, CLM-23, CLM-24, CLM-25, CLM-26, CLM-27, EVT-2], excerpt: "Profile Chud @RHChud. Bio: Chud on Robinhood. Billions must buy. 0x982965547e3b1f6da55ee93b515834bd34081feb. Post: FMCL." }
  - { id: R-10, publisher: "@RHChud", title: "Finally paired with my one true love, Reddit", url: "https://x.com/RHChud/status/2094899396320149608", published_at: 2026-09-01T21:25:12Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "Finally paired with my one true love, Reddit. Absolute chudema." }
  - { id: R-11, publisher: Blockscout, title: "transferCreatorFeeRecipient tx 0x06d8174a…f4a9", url: "https://robinhoodchain.blockscout.com/tx/0x06d8174a73d4fd4d9bd486bf1bf66e9fc798216ecc70a2c29e3d7070dd5cf4a9", published_at: 2026-09-01T19:00:55Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-13], excerpt: "timestamp 2026-09-01T19:00:55.000000Z status ok block_number 51952471 from 0x5dfD65079De1a0243807b0d7A632DCE0948F3661 to PonsV2LaunchFactory method transferCreatorFeeRecipient token 0x982965547E3B1f6DA55eE93B515834bD34081feB newRecipient 0x458e8E24f7cB3857F04FEFd9D67F0261E5648D20." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x05b37F…F4C RDDT", url: "https://robinhoodchain.blockscout.com/address/0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-14, CLM-20], excerpt: "hash 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Reddit • Robinhood Token symbol RDDT decimals 18 holders_count 17080. RDDT is the pair rail, not this profile." }
  - { id: R-13, publisher: Blockscout, title: "Collision token 0x52E050…1e18 CHUD", url: "https://robinhoodchain.blockscout.com/address/0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-24, EVT-8], excerpt: "hash 0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18 name CHUD is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a tx 0xd4612c39700e1a556a806410b02516a492d7a2c505571c7117f90dcd043df21e. token name CHUD symbol CHUD holders_count 194." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher create tx 0xd4612c39…f21e", url: "https://robinhoodchain.blockscout.com/tx/0xd4612c39700e1a556a806410b02516a492d7a2c505571c7117f90dcd043df21e", published_at: 2026-08-07T17:11:37Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-24, EVT-8], excerpt: "timestamp 2026-08-07T17:11:37.000000Z status ok from 0x7ccfc16CAF34ED98ab9C8e8d8A94F31D8a8f068b to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded name/symbol CHUD pair token RDDT 0x05b37F…F4C. Flag ca-collision." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-17, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-7], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-18, publisher: DexScreener, title: "tokens/v1 collision CHUD 0x52E050…1e18", url: "https://api.dexscreener.com/tokens/v1/robinhood/0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-24, EVT-8], excerpt: "1 robinhood uniswap pair. pairAddress 0x7fa6b9ef62f1f8f250c2f6f36fcbcaccbbecf44d85ed0331e7e038a7ef29712d labels v4 base CHUD / CHUD quote RDDT 0x05b37F…F4C liquidity.usd 65232.22 volume.h24 52164.63 fdv 89046. info.socials x.com/chudonlong." }
  - { id: R-19, publisher: DexScreener, title: "latest/dex/tokens chud", url: "https://api.dexscreener.com/latest/dex/tokens/0x982965547E3B1f6DA55eE93B515834bD34081feB", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "5 robinhood uniswap pairs. Top chud/RDDT v4 0x5536f402…476f liquidity.usd 34748.51 volume.h24 490751.38. Secondary chud/ETH and chud/USDG books under $13 liq." }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "V2LaunchLocker isLocked(token)", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "V2LaunchLocker 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 isLocked(0x982965547E3B1f6DA55eE93B515834bD34081feB) returns 1. Factory code 24177 B. Curve code 10229 B. Deployer EOA code 0x." }
  - { id: R-21, publisher: "@jessicayoung049", title: "Netlify claim URL with chud CA", url: "https://x.com/jessicayoung049/status/2095163443812638969", published_at: 2026-09-02T14:54:25Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-18, EVT-4], excerpt: "Quick one for $CHUD holders Something is active on the portal CA: 0x982965547E3B1f6DA55eE93B515834bD34081feB https://crypto-kms.netlify.app/claim?contract=0x982965547E3B1f6DA55eE93B515834bD34081feB. Flag copypasta-pattern and third-party-link." }
  - { id: R-22, publisher: "@KittehQuant", title: "Chud on RH", url: "https://x.com/KittehQuant/status/2095342458104168599", published_at: 2026-09-03T02:45:46Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Chud on RH 0x982965547e3b1f6da55ee93b515834bd34081feb" }
  - { id: R-23, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }

gaps:
  - { priority: P1, question: "Does verified PonsV2LauncherToken source on a sibling clone apply to this unverified 3248 B CA?", checked: "this token is_verified false; owner() reverts; bytecode length matches packed KARMA and other Pons v2 LaunchTokens; factory/buy/deployer/locker are verified, 2026-09-03", next: "compare deployed bytecode to a verified PonsV2LauncherToken" }
  - { priority: P1, question: "Is 0x458e8E24…8D20 a contract, and does it keep the creator fee path after transferCreatorFeeRecipient?", checked: "decoded newRecipient 0x458e8E24f7cB3857F04FEFd9D67F0261E5648D20 on tx 0x06d8174a…f4a9; not opened as an address page this pass, 2026-09-03", next: "eth_getCode and Blockscout name on 0x458e…8D20" }
  - { priority: P2, question: "Which of the other CHUD CAs (0x03A6…A331 Pons v2 ETH book, Chudjak/Chudjack) later claim @RHChud or this CA?", checked: "DexScreener search listed those CAs with other handles; @RHChud bio pins 0x982965…1feB; collision 0x52E050…1e18 socials @chudonlong, 2026-09-03", next: "re-read DexScreener token profiles if a Claim Profile moves" }
  - { priority: P2, question: "Gecko pool slice for 0x5536f402…476f once the first GET is HTTP 200?", checked: "GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x982965…1feB HTTP 429 this pass; skipped per source order, 2026-09-03", next: "retry Gecko token/pool GET; use only if first GET is 200" }
---

# chud — research packet

## What it is

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 chud/RDDT pool. Traders buy and sell chud against the Reddit • Robinhood Token on that book. RDDT is the quote rail, not this profile. Distinct from packed KARMA 0xb1B800…baC3, LongLauncher CHUD 0x52E050…1e18, and in-flight wojak/snoo.

Themes: memecoin, stock-paired:RDDT, rwa, launchpad

## Why it matters

The chud/RDDT Uniswap v4 book printed about $490.8k of 24h volume on DexScreener at collection, with the quote leg the workbook RDDT Stock Token 0x05b37F…F4C (GET /rhj/assets row). @RHChud pins that CA in the bio. A deeper same-ticker RDDT book at 0x52E050…1e18 is a LongLauncher clone with socials @chudonlong.

## What could go wrong

USD liquidity figures on the chud/RDDT book count both sides, and the quote side is RDDT, not USDG. Ticker-only pairing is not identity: 0x52E050…1e18 is a ca-collision with more displayed liquidity. Constructor socials are empty; netlify claim URLs attached the CA (copypasta-pattern). Gecko was not used this pass (first GET 429).

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x5dfD…3661 at 2026-09-01T19:00:53Z minted chud / chud supply 1e9*1e18 onto PonsV2BondingCurve 0x6197…277b quoted against pairToken RDDT 0x05b37F…F4C with quoteIn 174591434462216952. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 42347152428810721502. description() is nothing ever happens. [verified R-3 R-4 R-5]

CurveCompleted / LaunchSwept / PoolGraduated tx 0x92445b82…1070 at 2026-09-01T19:01:00Z swept quoteOut 42347152428810721505 RDDT and tokenOut 285714285714285714288123912 into Uniswap v4 poolId 0x5536f402…476f (PoolManager Initialize currency0 RDDT currency1 chud). V2LaunchLocker isLocked(token) true. Secondary chud/USDG and chud/ETH books exist on DexScreener with far less liquidity than the RDDT book. [verified R-6 R-7 R-19 R-20]

## Control and security

token owner() reverts. Deployer 0x5dfD…3661 has no code. transferCreatorFeeRecipient at 2026-09-01T19:00:55Z called PonsV2LaunchFactory from that EOA with newRecipient 0x458e…8D20. [verified R-5 R-11]

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. This token CA is_verified false (3248 B, not an EIP-1167 proxy). No audit report URL was located this pass. [verified R-1 R-15 R-16 R-17 R-23] [unknown]

## Team and provenance

@RHChud bio contains CA 0x982965…1feB; DexScreener info.socials is that handle. Constructor socials twitter/telegram/discord/farcaster/website are empty. A netlify claim URL attached the CA; flag copypasta-pattern and third-party-link. [claim R-5 R-7 R-9 R-21]

## Economics and activity

chud/RDDT Uniswap v4 24h volume is 490751.38 USD and liquidity.usd is 34748.51 at 2026-09-03T05:10:00Z from DexScreener tokens/v1. fdv/marketCap is 225745. Blockscout holders_count 390. Pair created 2026-09-01T19:01:00Z. Assignment lead of ~$35.6k liq / ~$494k vol is the same book at an earlier as_of. [claim R-1 R-7]

latest/dex/tokens lists five robinhood uniswap pairs; the RDDT book is the volume and liquidity leader. Collision 0x52E050…1e18 DexScreener liq 65232.22 vol.h24 52164.63. Gecko skipped (first GET 429). [claim R-18 R-19]

## Material risks

- Quote token RDDT 0x05b37F…F4C is a Stock Token rail; pool USD figures count chud plus RDDT. [verified R-8 R-12]
- Same-ticker LongLauncher CHUD 0x52E050…1e18 is a ca-collision with deeper displayed liquidity and socials @chudonlong. [verified R-13 R-14 R-18]
- Token source is unverified on this CA. No audit report URL this pass. [verified R-1] [unknown]
- Netlify claim URLs attached the CA. Flag copypasta-pattern. [claim R-21]

## Verification passes

- Receipts: Blockscout token/factory/buy/deployer/locker/RDDT/collision and launchAndBuy / LaunchSwept txs, RPC name/symbol/launchFactory/curve/isLocked, DexScreener tokens/v1 + latest/dex/tokens, /rhj/assets, and @RHChud were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-9]
- Numbers: 490751.38 is the DexScreener chud/RDDT pool 24h volume. Reserve for TVL is DexScreener 34748.51 on that pair, not an all-pools figure. Collision 65232.22 / 52164.63 is a different CA. Gecko was not mixed in. [claim R-7 R-18 R-19]
- Adversarial: the strongest contrary reading is that 0x52E050…1e18 is the canonical CHUD because it has more DexScreener liquidity. @RHChud bio and DexScreener socials pin 0x982965…1feB; 0x52E050…1e18 socials are @chudonlong and it is a LongLauncher Doppler clone. Packed KARMA and in-flight wojak/snoo are other names. [inference R-7 R-9 R-13 R-18]

## Operations log

- Base: census 49 slugs have no chud / CHUD / 0x982965…1feB. content/dependencies/stock-tokens.yaml RDDT 0x05b37F…F4C. GET packet path on branch returned 404.
- Explorer: Blockscout api/v2 token, factory, buy, deployer, locker, RDDT, collision, launchAndBuy 0x9fa9c06c…e5c4, LaunchSwept 0x92445b82…1070, LongLauncher create 0xd4612c39…f21e, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53158920–53160688.
- Aggregators: DexScreener tokens/v1, latest/dex/tokens, search q=chud. Gecko first GET token HTTP 429; skipped.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 RDDT.
- Social: X Latest from:RHChud; keyword 0x982965547E3B1f6DA55eE93B515834bD34081feB; user search RHChud.
- Failed: Blockscout token creator_address_hash null (launchFactory() used instead); Gecko first GET 429; holders_count 390 vs counters.token_holders_count 392 this pass; fee recipient 0x458e…8D20 address page not opened.
- Time: collection 2026-09-03T05:05Z–2026-09-03T05:12Z.
