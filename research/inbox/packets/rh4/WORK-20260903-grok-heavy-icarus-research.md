---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: rh4
name: RH4
packet_tier: seed
as_of: 2026-09-03T05:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [rh4]
allowed_paths:
  - research/inbox/packets/rh4/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: rh4.cpu
  aliases: ["RH4", "RH-4", "RHCPU"]
  symbols: [RH4]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://rh4cpu.tech
  official_handle: "@RH4cpu"
  repository: https://github.com/giupy997/chipc
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "RH4 is the ERC-20 at 0xe76a…Bd1B created through that factory; entity_kind token, not protocol"
        - "Handle @RH4cpu and domain rh4cpu.tech are not @ponsdotfamily / ponsfamily.com"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "RH4 is a PonsV2LauncherToken cloned by PonsV2LaunchDeployer 0x3711…1A42, pairToken native ETH 0x000…000, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "RH4 is 0xe76a…Bd1B paired to native ETH via Pons v2; an X post named $AI whales buying $RH4, which is not a shared CA"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "RH4 is a Pons v2 LaunchToken in a Uniswap v4 RH4/ETH pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [nft-treasury/nft-fee-claim]
  mechanism_tags: [bonding-curve, amm, launchpad, nft]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xe76a…Bd1B is a 3248-byte verified PonsV2LauncherToken with non-empty code on 4663; name rh4.cpu / symbol RH4; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. TokenLaunched at 2026-08-31T17:59:33Z against pairToken 0x000…000; CurveCompleted / LaunchSwept then PoolGraduated at 2026-08-31T18:01:47Z seeded Uniswap v4 pool 0x2f71a0c9…ea2f. DexScreener labels the quote Ether / ETH at the zero address (assignment lead named the book RH4/WETH). Distinct from other rh4.cpu / RH4 ticker rows. Site rh4cpu.tech and @RH4cpu bidirectionally embed this CA. [R-1] [R-3] [R-5] [R-6] [R-7] [R-8] [R-9] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://rh4cpu.tech", authenticity: confirmed }
  - { kind: x, url: "https://x.com/RH4cpu", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/rh4cpu", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/giupy997/chipc", authenticity: unconfirmed }
  - { kind: other, url: "https://www.ponsfamily.com/launchpad/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B", authenticity: unconfirmed }

deployments:
  - label: RH4 token (PonsV2LauncherToken bytecode)
    role: token
    address:
      value: "0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-13]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-12]
  - label: Pons v2 bonding curve (create-tx clone)
    role: other
    address:
      value: "0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-5, R-6]
  - label: V2LaunchLocker (graduated position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-20]
  - label: ChipFactory8 (RH Chip ERC-721; site CA)
    role: factory
    address:
      value: "0x265A4D74DbF6C10f40ecf7d870df7677CB6fF65B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-14, R-5]
  - label: ChipFeeVault
    role: vault
    address:
      value: "0xb5C467bA319a1aCe5baCe0ffd45f6582C3AE491D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15, R-22]
  - label: "RH4 ticker collision (Pons v2, not this row)"
    role: token
    address:
      value: "0x9ECEA68a99AEcd079153dD58B751789f4e54E0a9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16]

metrics:
  - { kind: volume_24h, value: 565572.91, currency: USD, as_of: 2026-09-03T05:40:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B pair 0x2f71a0c9…ea2f RH4/ETH Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 81529.86, currency: USD, as_of: 2026-09-03T05:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B pair 0x2f71a0c9…ea2f liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 809875, currency: USD, as_of: 2026-09-03T05:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B pair 0x2f71a0c9…ea2f fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 569, currency: null, as_of: 2026-09-03T05:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com Chrome UA eth_chainId 0x1237 (4663) eth_blockNumber 0x32b72d1 (53179089). Token 0xe76a…Bd1B eth_getCode 3248 B prefix 6080604052600436, not EIP-1167. name rh4.cpu, symbol RH4, decimals 18, totalSupply 1e27. owner() reverts. deployer() 0xAE1Ef0187fb073AA2Ad9d81176EBB23E6c21b8e8 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e (24177 B). curve() 0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b (10229 B, unverified). description Bringing physical chips on-chain , a real processor gate by gate. Powered by Robinhood Chain. socials() five empty strings. ChipFactory8 0x265A…F65B code non-empty; owner() 0xAE1E…b8e8; name RH Chip symbol CHIP. ChipFeeVault 0xb5C4…491D code 1789 B; owner() reverts; factory() 0x265A…F65B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:42:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-8, R-12, R-13, R-14, R-15, R-20], result: "Blockscout api/v2 token 0xe76a…Bd1B name rh4.cpu symbol RH4 holders_count 569 total_supply 1e27 is_contract true is_verified true name PonsV2LauncherToken file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 verified_at 2026-08-31T18:02:31Z creator_address_hash 0x3711…1A42 creation_transaction_hash 0x049d84be…3e5a. Create tx 2026-08-31T17:59:33Z block 51060874 from EOA 0xAE1E…b8e8 to self types include set_code_transaction; TokenLaunched token 0xe76a…Bd1B curve 0x5FCA…e18b deployer 0xAE1E…b8e8 pairToken 0x000…000 launchConfigId 0 graduationThreshold 4.2e18; mint 1e27 to curve. CurveCompleted / LaunchSwept tx 0x198c65d1…2063 2026-08-31T18:01:47Z block 51062181 quoteOut 4200000000000000009 tokenOut 285714285714285714285714285. PoolGraduated tx 0x85b6508f…22f7 same second block 51062186 PoolManager Initialize id 0x2f71a0c9…ea2f currency0 0x000…000 currency1 RH4 fee 0 hooks V2MemeHook 0xE5e7…e044; PositionLocked 1321530; TokenSupplyLocked 81632653061224489670970429. Top holder ChipFactory8 0x265A…F65B ~3.00e26." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xe76a…Bd1B: 5 robinhood uniswap pairs; top RH4/ETH v4 0x2f71a0c9…ea2f quote Ether / ETH 0x000…000 liquidity.usd 81529.86 volume.h24 565572.91 fdv/marketCap 809875 priceUsd 0.0008098 txns.h24 buys 4279 sells 8076 pairCreatedAt 1788199307000 (2026-08-31T18:01:47Z) info.websites https://rh4cpu.tech/ info.socials x.com/RH4cpu and t.me/rh4cpu. Secondary RH4/ETH and RH4/USDG books have liquidity under 85 USD. token-pairs/v1 later the same pass: same top pair liquidity.usd 81948.17 volume.h24 565510.52." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-9, R-10, R-17], result: "rh4cpu.tech HTTP 200 Netlify; title RH-4 — a processor that lives inside a blockchain; twitter:site @RH4cpu; href https://x.com/RH4cpu; embeds CA 0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B and ChipFactory8 0x265a4d74dbf6c10f40ecf7d870df7677cb6ff65b; also github.com/giupy997/chipc and ponsfamily.com/launchpad/<ca>. @RH4cpu display RHCPU, 270 followers, bio embeds 0xe76a12bcd2f0e6d3db9f9012321642198e6cbd1b. github.com/giupy997/chipc HTTP 200, homepage null, updated 2026-09-02T18:32:10Z. t.me/rh4cpu og:title rh4.cpu, 28 subscribers, no CA in the public preview." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-16], result: "Blockscout search q=RH4 first ERC-20 is this 0xe76a…Bd1B. Other rh4.cpu / RH4 ERC-20s on 4663 include PonsV2LauncherToken 0x9ECE…E0a9 holders 22, 0x671d…6C76 holders 7, 0x6c79…c37D holders 6; ChipToken 0x307A…9d36 holders 6 and 0xCc94…F40C holders 5; Rhood4 0xF5a3…8e59 holders 5 via NOXA factory; RH4663 0x6514…5A37 holders 89. DexScreener search listed 0x9ECE…E0a9 / ETH liq 4692.42 vol.h24 5.06 versus this book's 81529.86 / 565572.91." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "EOA 0xAE1E…b8e8 called PonsV2LaunchFactory and minted a 1e9-supply PonsV2LauncherToken onto a bonding curve quoted against pairToken native ETH 0x000…000; CurveCompleted / LaunchSwept about two minutes later and PoolGraduated seeded Uniswap v4 RH4/ETH pool 0x2f71a0c9…ea2f. V2LaunchLocker PositionLocked tokenId 1321530. Token owner() reverts.", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "rh4.cpu", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "RH4", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-3, R-5, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-3, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@RH4cpu", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-7, R-9, R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote is native ETH 0x000…000 on Uniswap v4 (DexScreener name Ether / ETH). Assignment lead called the book RH4/WETH. Distinct from census Pons (the pad) and from other rh4.cpu / RH4 ticker rows. Same EOA 0xAE1E…b8e8 also created ChipFactory8 0x265A…F65B (top RH4 holder) and ChipFeeVault 0xb5C4…491D.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-7, R-8, R-14, R-15, R-16], reproduction_ids: [REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "RH4/ETH Uniswap v4 24h volume 565572.91 USD and liquidity.usd 81529.86 at 2026-09-03T05:40:00Z (DexScreener pair 0x2f71a0c9…ea2f)", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair fdv/marketCap 809875 at 2026-09-03T05:40:00Z; 5 robinhood uniswap pairs on latest/dex/tokens", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 569, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source says deployer is immutable reference data and confers no privileges. deployer() 0xAE1E…b8e8 has empty code. ChipFactory8 owner() is that same EOA. ChipFeeVault owner() reverts.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-2, R-5, R-14, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "launchFactory 0x7eD5…EC7e; curve 0x5FCA…e18b; V2LaunchLocker 0x2674…4952; V2MemeHook 0xE5e7…e044; PoolRegistered creator 0xAE1E…b8e8; ChipFactory8 Ownable owner 0xAE1E…b8e8", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-5, R-8, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is native ETH 0x0000000000000000000000000000000000000000; venue is Uniswap v4 pair 0x2f71a0c969ed55abfb7ff1e26072e2122d5cc9a9f84386021f0530b34038ea2f. ETH is a rail, not this profile.", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, or hood.fun", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, rh4cpu.tech, GitHub chipc, or X search this pass", class: unknown, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Constructor socials() are empty; DexScreener info.socials lists x.com/RH4cpu and t.me/rh4cpu after a token profile. Site and X bio bidirectionally embed CA 0xe76a…Bd1B. Telegram preview has no CA; flag third-party-link on t.me/rh4cpu until a public pin cross-links.", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-5, R-7, R-9, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Assignment lead Prior Gecko RH4/WETH liq ~$68,835 vol ~$510,838 was not fetched (Gecko skipped; packet GET was 404). Live DexScreener ETH book this pass is 81529.86 / 565572.91 at 2026-09-03T05:40:00Z.", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x265A4D74DbF6C10f40ecf7d870df7677CB6fF65B", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-9, R-14, R-5], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://rh4cpu.tech", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: candidate, value: "rh4 | RH4 | @RH4cpu | rh4cpu.tech — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-1, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: other 4663 ERC-20s named rh4.cpu / RH4 include PonsV2 0x9ECE…E0a9 (DexScreener ETH book liq 4692.42 vol 5.06), 0x671d…6C76, 0x6c79…c37D, ChipToken 0x307A…9d36 / 0xCc94…F40C, and Rhood4 0xF5a3…8e59. Canonical CA is 0xe76a…Bd1B.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-16], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link and copypasta-pattern: @bamboorootsNFT posted robinhood-main-dex-pwb.netlify.app/vote/<CA> as a Robinhood Top 100 Leaderboard vote. Domain is netlify.app, not robinhood.com.", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@RH4cpu.role", value: project, class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@RH4cpu.slug", value: rh4, class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: identity.repository, value: "https://github.com/giupy997/chipc", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-9, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.secondary-leaf, value: nft-treasury/nft-fee-claim, class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-14, R-15, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: other, value: "handle-collision: @larry_rh4 posts football, not this CA. X user search for RH4 returned unrelated handles; @RH4cpu is the CA-linked account.", class: claim, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-10, R-19], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener RH4/ETH 24h volume $565.6k, liquidity $81.5k"
    summary: "Uniswap v4 pair 0x2f71a0c9…ea2f volume.h24 565572.91 liquidity.usd 81529.86 fdv 809875. Assignment lead named RH4/WETH; DexScreener quote is ETH 0x000…000."
    occurred_at: 2026-09-03T05:40:00Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: company
    title: "@RH4cpu posted ChipFeeVault 0xb5C4…491D"
    summary: "Post: when a chip market opens, LP can be sealed in ChipFeeVault instead of burned; 1% fees sweepable into the chip mining reserve. Verified ChipFeeVault created 2026-09-02T18:24:48Z by the same EOA."
    occurred_at: 2026-09-03T01:40:00Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [product.mechanism, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15, R-22]
  - id: EVT-3
    type: ct
    title: "Netlify vote URL posted for $RH4"
    summary: "@bamboorootsNFT posted robinhood-main-dex-pwb.netlify.app/vote/0xe76a…Bd1B as a Robinhood Top 100 Leaderboard listing. Flag third-party-link | copypasta-pattern."
    occurred_at: 2026-09-03T05:18:30Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: onchain
    title: "PonsV2LaunchFactory TokenLaunched rh4.cpu / RH4"
    summary: "Tx 0x049d84be…3e5a from 0xAE1E…b8e8 at 2026-08-31T17:59:33Z; pairToken 0x000…000; curve 0x5FCA…e18b; graduationThreshold 4.2 ETH."
    occurred_at: 2026-08-31T17:59:33Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-5
    type: onchain
    title: "CurveCompleted / PoolGraduated into RH4/ETH"
    summary: "Tx 0x198c65d1…2063 LaunchSwept quoteOut 4.2 ETH; tx 0x85b6508f…22f7 initialized Uniswap v4 0x2f71a0c9…ea2f and locked position 1321530."
    occurred_at: 2026-08-31T18:01:47Z
    observed_at: 2026-09-03T05:42:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-8]
  - id: EVT-6
    type: onchain
    title: "Same EOA deployed ChipFactory8 before the token"
    summary: "Tx 0x53dbba83…20e7 2026-08-31T16:43:48Z created ChipFactory8 0x265A…F65B (RH Chip / CHIP). Site embeds that CA next to the token CA. Factory is the top RH4 holder this pass."
    occurred_at: 2026-08-31T16:43:48Z
    observed_at: 2026-09-03T05:42:00Z
    affected_fields: [deployment.address, relationship, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-14]
  - id: EVT-7
    type: ct
    title: "X post embedded CA 0xe76a…Bd1B with $917k mcap claim"
    summary: "@rbifex posted the CA, #RH4 #DePIN #RobinhoodChain, and mcap $917K / 24h vol $553K. Live DexScreener fdv this pass is 809875."
    occurred_at: 2026-09-03T05:18:53Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xe76a…Bd1B rh4.cpu / RH4", url: "https://robinhoodchain.blockscout.com/address/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B name PonsV2LauncherToken is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x049d84be4b19df3c39a86b7904edfce4c4fe8058365484e00c6018e40c483e5a. token name rh4.cpu symbol RH4 decimals 18 total_supply 1000000000000000000000000000 holders_count 569 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B?tab=contract", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35+commit.47b9dedd is_verified true is_partially_verified false verified_at 2026-08-31T18:02:31Z. Comment: deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }
  - { id: R-3, publisher: Blockscout, title: "create tx 0x049d84be…3e5a", url: "https://robinhoodchain.blockscout.com/tx/0x049d84be4b19df3c39a86b7904edfce4c4fe8058365484e00c6018e40c483e5a", published_at: 2026-08-31T17:59:33Z, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-16, CLM-22, EVT-4], excerpt: "timestamp 2026-08-31T17:59:33.000000Z status ok result success block_number 51060874 from 0xAE1Ef0187fb073AA2Ad9d81176EBB23E6c21b8e8 (is_contract false) to same; transaction_types coin_transfer, token_transfer, set_code_transaction; raw_input selector 0xa3af95ea. Internals call PonsV2LaunchFactory 0x7eD5…EC7e value 500000000000000." }
  - { id: R-4, publisher: Blockscout, title: "TokenLaunched log for RH4", url: "https://robinhoodchain.blockscout.com/tx/0x049d84be4b19df3c39a86b7904edfce4c4fe8058365484e00c6018e40c483e5a", published_at: 2026-08-31T17:59:33Z, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, EVT-4], excerpt: "TokenLaunched token 0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B curve 0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b deployer 0xAE1Ef0187fb073AA2Ad9d81176EBB23E6c21b8e8 pairToken 0x0000000000000000000000000000000000000000 launchConfigId 0 graduationThreshold 4200000000000000000. Transfer mint 1e27 to the curve." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on RH4", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-21, CLM-22], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32b72d1 (53179089). Token code 3248 B. name rh4.cpu symbol RH4 decimals 18 totalSupply 1e27. owner() reverts. deployer() 0xAE1Ef0187fb073AA2Ad9d81176EBB23E6c21b8e8. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b. socials() empty. EOA code 0x." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x198c65d1…2063", url: "https://robinhoodchain.blockscout.com/tx/0x198c65d13c09931ecf07958c1394e2678d1fa9768de023c3885e4df1c8372063", published_at: 2026-08-31T18:01:47Z, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-22, EVT-5], excerpt: "timestamp 2026-08-31T18:01:47.000000Z status ok block_number 51062181. CurveCompleted recipient 0x7eD5…EC7e quoteOut 4200000000000000009 tokenOut 285714285714285714285714285. LaunchSwept token 0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B same quoteOut/tokenOut. FeesSwept protocolAmount 13895877157574262 creatorAmount 32423713367673279." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens RH4", url: "https://api.dexscreener.com/latest/dex/tokens/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "5 robinhood uniswap pairs. Top pairAddress 0x2f71a0c969ed55abfb7ff1e26072e2122d5cc9a9f84386021f0530b34038ea2f labels v4 base rh4.cpu / RH4 quote Ether / ETH 0x0000000000000000000000000000000000000000 liquidity.usd 81529.86 volume.h24 565572.91 fdv 809875 marketCap 809875 pairCreatedAt 1788199307000. info.websites https://rh4cpu.tech/ info.socials x.com/RH4cpu t.me/rh4cpu." }
  - { id: R-8, publisher: Blockscout, title: "PoolGraduated tx 0x85b6508f…22f7", url: "https://robinhoodchain.blockscout.com/tx/0x85b6508f3516d8735c32aec64c276f7170b9ce19ce4a824142ccc1b2d7a222f7", published_at: 2026-08-31T18:01:47Z, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, CLM-15, EVT-5], excerpt: "timestamp 2026-08-31T18:01:47.000000Z status ok block 51062186. PoolManager Initialize id 0x2f71a0c969ed55abfb7ff1e26072e2122d5cc9a9f84386021f0530b34038ea2f currency0 0x000…000 currency1 0xe76a…Bd1B fee 0 hooks 0xE5e70264…e044. PoolGraduated positionId 1321530 tokenAmount 204081632653061224614743856 pairTokenAmount 4200000000000000009. V2LaunchLocker PositionLocked 1321530 TokenSupplyLocked 81632653061224489670970429." }
  - { id: R-9, publisher: rh4cpu.tech, title: "RH-4 site", url: "https://rh4cpu.tech/", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21, CLM-23, CLM-24, CLM-27, CLM-28, CLM-29, EVT-6], excerpt: "HTTP 200 Netlify. title RH-4 — a processor that lives inside a blockchain. twitter:site @RH4cpu. href https://x.com/RH4cpu https://github.com/giupy997/chipc https://www.ponsfamily.com/launchpad/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B. CAs 0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B and 0x265a4d74dbf6c10f40ecf7d870df7677cb6ff65b." }
  - { id: R-10, publisher: "@RH4cpu", title: "RHCPU profile", url: "https://x.com/RH4cpu", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28, CLM-31], excerpt: "Display RHCPU handle @RH4cpu. Bio: Bringing physical chips on-chain , a real processor gate by gate. Powered by Robinhood Chain. 0xe76a12bcd2f0e6d3db9f9012321642198e6cbd1b. Followers 270, blue verified." }
  - { id: R-11, publisher: Telegram, title: "t.me/rh4cpu", url: "https://t.me/rh4cpu", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title rh4.cpu. tgme_page_title rh4.cpu. tgme_page_extra 28 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. RPC eth_getCode 20906 B." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x265A…F65B ChipFactory8", url: "https://robinhoodchain.blockscout.com/address/0x265A4D74DbF6C10f40ecf7d870df7677CB6fF65B", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-13, CLM-14, CLM-21, CLM-30, EVT-6], excerpt: "hash 0x265A4D74DbF6C10f40ecf7d870df7677CB6fF65B name ChipFactory8 is_contract true is_verified true file src/ChipFactory8.sol compiler v0.8.28 creator_address_hash 0xAE1Ef0187fb073AA2Ad9d81176EBB23E6c21b8e8 creation_transaction_hash 0x53dbba83757cc72d33745dbf54120f306cc7b9b84ce43e23417f59578f9a20e7 timestamp 2026-08-31T16:43:48Z. token name RH Chip symbol CHIP type ERC-721 holders_count 1. RPC owner() 0xAE1E…b8e8." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xb5C4…491D ChipFeeVault", url: "https://robinhoodchain.blockscout.com/address/0xb5C467bA319a1aCe5baCe0ffd45f6582C3AE491D", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-13, CLM-30, EVT-2], excerpt: "hash 0xb5C467bA319a1aCe5baCe0ffd45f6582C3AE491D name ChipFeeVault is_contract true is_verified true file src/ChipFeeVault.sol compiler v0.8.28 creator_address_hash 0xAE1Ef0187fb073AA2Ad9d81176EBB23E6c21b8e8 creation_transaction_hash 0xd1e4b719c93cd8d73aecc712e473f7bc4a30d486c88a6bc81e96dfe13b365465 timestamp 2026-09-02T18:24:48Z. RPC owner() reverts factory() 0x265A…F65B. Source: no owner; collect forwards fees to the factory." }
  - { id: R-16, publisher: Blockscout, title: "Collision token 0x9ECE…E0a9 rh4.cpu / RH4", url: "https://robinhoodchain.blockscout.com/address/0x9ECEA68a99AEcd079153dD58B751789f4e54E0a9", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x9ECEA68a99AEcd079153dD58B751789f4e54E0a9 name PonsV2LauncherToken is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. token name rh4.cpu symbol RH4 holders_count 22 total_supply 1e27. DexScreener RH4/ETH pair 0x0f6914b2…ad1d liquidity.usd 4692.42 volume.h24 5.06. Search also listed 0x671d…6C76, 0x6c79…c37D, ChipToken rows, Rhood4 0xF5a3…8e59." }
  - { id: R-17, publisher: GitHub, title: "giupy997/chipc", url: "https://github.com/giupy997/chipc", published_at: 2026-08-16T16:09:38Z, accessed_at: 2026-09-03T05:43:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-29], excerpt: "HTTP 200. full_name giupy997/chipc private false created_at 2026-08-16T16:09:38Z updated_at 2026-09-02T18:32:10Z homepage null license null. Linked from rh4cpu.tech; no CA in the API description this pass." }
  - { id: R-18, publisher: "@bamboorootsNFT", title: "Attention $RH4 Family vote URL", url: "https://x.com/bamboorootsNFT/status/2095380895947473270", published_at: 2026-09-03T05:18:30Z, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-3], excerpt: "Attention $RH4 Family! YOUR vote matters! Less than 100 votes are needed to list $RH4 on the Robinhood Top 100 Leaderboard. Listing ID: 3657. https://robinhood-main-dex-pwb.netlify.app/vote/0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B" }
  - { id: R-19, publisher: "@rbifex", title: "RH4 CA post", url: "https://x.com/rbifex/status/2095380991363940404", published_at: 2026-09-03T05:18:53Z, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-31, EVT-7], excerpt: "RH4 Everyone’s talking on-chain compute right now — this one literally stuffed a real CPU onto Robinhood Chain, one block equals one clock tick. Mcap $917K, 24h vol $553K. 0xe76a12bcd2f0e6d3db9f9012321642198e6cbd1b #RH4 #DePIN #RobinhoodChain" }
  - { id: R-20, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Token holders list ranks it second in RH4 with 81632653061224489670972741." }
  - { id: R-21, publisher: Blockscout, title: "Curve address 0x5FCA…e18b", url: "https://robinhoodchain.blockscout.com/address/0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b name null is_contract true is_verified false creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x049d84be4b19df3c39a86b7904edfce4c4fe8058365484e00c6018e40c483e5a. RPC eth_getCode 10229 B." }
  - { id: R-22, publisher: "@RH4cpu", title: "ChipFeeVault post", url: "https://x.com/RH4cpu/status/2095325907431096412", published_at: 2026-09-03T01:40:00Z, accessed_at: 2026-09-03T05:43:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-30, EVT-2], excerpt: "New infrastructure on mainnet: the ChipFeeVault. When a chip's market opens, its LP can now be sealed here instead of burned. Same guarantee no owner, no exit, nobody can ever pull the liquidity but the 1% trading fees don't die. Verified on chain: 0xb5C467bA319a1aCe5baCe0ffd45f6582C3AE491D $RH4" }

gaps:
  - { priority: P0, question: "Does ChipFactory8.motherToken equal 0xe76a…Bd1B, or is the ~3.00e26 RH4 balance a transfer without the setter?", checked: "RPC motherToken() returned 0x0 this pass while Blockscout holders rank ChipFactory8 first; setMotherToken is onlyOwner and once, 2026-09-03", next: "read MotherTokenSet logs on 0x265A…F65B and the first RH4 transfer into the factory" }
  - { priority: P1, question: "Does github.com/giupy997/chipc pin CA 0xe76a…Bd1B or ChipFactory8, and is giupy997 linked from @RH4cpu?", checked: "site hrefs the repo; GitHub API homepage null description null; @RH4cpu bio has CA but no GitHub URL, 2026-09-03", next: "open README and the latest commit for addresses; search @RH4cpu for a GitHub mention" }
  - { priority: P1, question: "Does t.me/rh4cpu pin the CA or rh4cpu.tech?", checked: "public preview og:title rh4.cpu, 28 subscribers, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Which remaining RH4-ticker ERC-20s besides 0x9ECE…E0a9 still have a live book?", checked: "Blockscout search listed several rh4.cpu / ChipToken / Rhood4 rows; DexScreener search showed 0x9ECE…E0a9 / ETH liq 4692 vol 5, 2026-09-03", next: "DexScreener tokens API on each collision CA if a later round needs a collision table" }
  - { priority: P2, question: "Is there an audit report for ChipFactory8 / ChipFeeVault / Pons v2?", checked: "Blockscout source, rh4cpu.tech, GitHub chipc, DexScreener, X search, 2026-09-03", next: "ask in public if a report URL is published" }
---

# RH4 — research packet

## What it is

A one-billion-supply ERC-20 cloned onto a Pons v2 bonding curve and graduated into a Uniswap v4 pool quoted against native ETH. PonsV2LaunchFactory deploys rh4.cpu (RH4) in one launch call and, after the 4.2 ETH threshold, seeds the RH4/ETH book. Traders buy and sell RH4 on Uniswap v4. The same deployer EOA also published ChipFactory8, an ERC-721 the site treats as on-chain chips.

Themes: memecoin, graduation, bonding-curve, nft

## Why it matters

The RH4/ETH Uniswap v4 book printed about $565.6k of 24h volume on DexScreener at collection, with about $81.5k liquidity — above the assignment lead of ~$68.8k / ~$510.8k. rh4cpu.tech and @RH4cpu bidirectionally embed CA 0xe76a…Bd1B. ChipFactory8 is the largest RH4 holder this pass.

## What could go wrong

USD liquidity on the flagship book counts RH4 plus native ETH, not a USDG backstop. Several other 4663 ERC-20s reuse the rh4.cpu / RH4 ticker with far thinner books. Constructor socials are empty; Telegram preview has no CA. ChipFactory8 remains Ownable by the launch EOA.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…EC7e clones PonsV2LauncherToken via PonsV2LaunchDeployer. Create tx 0x049d84be…3e5a from EOA 0xAE1E…b8e8 at 2026-08-31T17:59:33Z minted rh4.cpu / RH4 supply 1e9*1e18 onto curve 0x5FCA…e18b against pairToken 0x000…000, graduationThreshold 4.2e18. launchFactory() on the token returns that factory. [verified R-3 R-4 R-5]

CurveCompleted / LaunchSwept tx 0x198c65d1…2063 at 2026-08-31T18:01:47Z named quoteOut 4.2 ETH. PoolGraduated tx 0x85b6508f…22f7 the same second initialized Uniswap v4 poolId 0x2f71a0c9…ea2f (fee 0, hooks V2MemeHook 0xE5e7…e044) and V2LaunchLocker PositionLocked 1321530 / TokenSupplyLocked ~8.16e25. DexScreener labels the quote Ether / ETH at the zero address. Secondary RH4/USDG books exist with liquidity under $85. [verified R-6 R-7 R-8]

ChipFactory8 0x265A…F65B (RH Chip / CHIP ERC-721) was created by the same EOA about 76 minutes before the token and is the top RH4 holder (~3.00e26). ChipFeeVault 0xb5C4…491D was created 2026-09-02T18:24:48Z; verified source says LP NFTs sent there cannot be withdrawn and collect() forwards 1% fees to the factory. [verified R-14 R-15]

## Control and security

token owner() reverts. deployer() 0xAE1E…b8e8 has no code and is also ChipFactory8 owner(). ChipFeeVault owner() reverts. [verified R-5 R-14 R-15]

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchDeployer, ChipFactory8, and ChipFeeVault are verified on Blockscout. The bonding curve at 0x5FCA…e18b is unverified. No audit report URL was located this pass. [verified R-1 R-2 R-12 R-14] [unknown]

## Team and provenance

rh4cpu.tech (Netlify) titles RH-4, sets twitter:site @RH4cpu, and embeds CA 0xe76a…Bd1B plus ChipFactory8 0x265A…F65B. @RH4cpu bio embeds the same token CA. Constructor socials() are empty; DexScreener lists the site, X, and t.me/rh4cpu. Telegram preview has 28 subscribers and no CA. github.com/giupy997/chipc is linked from the site; GitHub homepage is empty. Flag third-party-link on Telegram until a public pin cross-links. [claim R-5 R-7 R-9 R-10 R-11 R-17]

@larry_rh4 is a football account, not this CA. Flag handle-collision. [claim R-10 R-19]

## Economics and activity

RH4/ETH Uniswap v4 24h volume is 565572.91 USD and liquidity.usd is 81529.86 at 2026-09-03T05:40:00Z from DexScreener latest/dex/tokens. fdv/marketCap is 809875. Pair created 2026-08-31T18:01:47Z. Blockscout holders_count 569. [claim R-1 R-7]

Assignment lead of prior Gecko RH4/WETH ~$68,835 liq / ~$510,838 vol was not re-fetched (Gecko skipped; packet GET 404). Live DexScreener ETH book is 81529.86 / 565572.91. token-pairs/v1 later the same pass printed 81948.17 / 565510.52 on the same pair. [claim R-7]

## Material risks

- Several other 4663 ERC-20s reuse rh4.cpu / RH4; 0x9ECE…E0a9 has a live ETH book at ~$4.7k liq. [verified R-16]
- Flagship USD liquidity is RH4 plus native ETH, not USDG. [claim R-7 R-8]
- ChipFactory8 is Ownable by the launch EOA; motherToken() returned 0x0 while the factory holds ~30% of supply. [verified R-5 R-14]
- Telegram is a third-party-link this pass; a netlify.app vote URL was posted. [claim R-11 R-18]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/deployer/curve/create/graduation/ChipFactory/ChipFeeVault/collision, RPC name/symbol/launchFactory/curve/owner, DexScreener tokens, rh4cpu.tech, @RH4cpu, Telegram preview, GitHub chipc, and the vote/CA posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-9]
- Numbers: 565572.91 is the DexScreener RH4/ETH Uniswap v4 pool 24h volume, not an all-pools figure. Liquidity 81529.86 is that pool. Holders 569 is Blockscout holders_count. [claim R-1 R-7]
- Adversarial: the strongest contrary reading is that this CA is one of several rh4.cpu launches and the chip contracts are unrelated. The site and @RH4cpu bio both embed 0xe76a…Bd1B; ChipFactory8 is the top holder and was created by the same EOA; DexScreener's deepest RH4/ETH book is this pair. [inference R-7 R-9 R-10 R-14]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` is not this worktree HEAD; assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. GET packets/rh4 on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 before write. Census 49 slugs have no rh4 / RH4 / 0xe76a…Bd1B.
- Explorer: Blockscout api/v2 search q=RH4 (Chrome UA), token/address for 0xe76a…Bd1B, create tx 0x049d84be…3e5a, CurveCompleted 0x198c65d1…2063, PoolGraduated 0x85b6508f…22f7, factory/deployer/curve/locker/ChipFactory8/ChipFeeVault, collision 0x9ECE…E0a9, holders. RPC eth_getCode/eth_call with Chrome UA at block 53179089.
- Aggregators: DexScreener latest/dex/tokens and search q=RH4; token-pairs/v1/robinhood/<ca>. Gecko skipped (packet GET 404).
- Social: X keyword RH4 / CA / rh4.cpu mode Latest; user search RH4 and RH4cpu; from:RH4cpu; t.me/rh4cpu preview; rh4cpu.tech; github.com/giupy997/chipc.
- Failed: create tx method null (set_code_transaction, internals used); curve is_verified false (factory TokenLaunched used); constructor socials() empty (DexScreener profile and site used); motherToken() 0x0 despite ChipFactory8 top-holder balance; Telegram preview has no CA.
- Time: collection 2026-09-03T05:39Z–2026-09-03T05:45Z.
