---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: delta
name: Delta
packet_tier: full
as_of: 2026-09-02T23:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [delta]
allowed_paths:
  - research/inbox/packets/delta/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Delta
  aliases: ["Delta Liquidity", "deltaliquidity"]
  symbols: [DELTA]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://deltaliquidity.app
  official_handle: "@deltaliquidity"
  repository: "NULL — site, X bio, DexScreener token info and constructor socials do not name a repository; GitHub search deltaliquidity returned 0"
  possible_matches:
    - slug: maxfi
      signals: [other]
      contrary_signals:
        - "Census MaxFi is a stock-LP manager at maxfi.tech / @MAXFILABS"
        - "Delta is a general Uniswap stake and shaped-position manager at deltaliquidity.app / @deltaliquidity with token 0xe8ffd7e24187F72afB08d75B1bb13088A989a791"
        - "No shared domain, handle, or reproduced address"
    - slug: snuggle
      signals: [other]
      contrary_signals:
        - "Census Snuggle is a separate LP-manager row at @SnuggleFi"
        - "Delta's official surface is deltaliquidity.app / @deltaliquidity and the Pons-launched DELTA token"
        - "No shared domain, handle, or reproduced address"
    - slug: scopl
      signals: [other]
      contrary_signals:
        - "Census SCOPL is a yield-bearing limit-order aggregator at scopl.live / @scopl_live"
        - "Delta deposits into Uniswap positions and streams swap fees; it does not rest limit orders"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "DELTA was created by PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB via launchToken; Pons is the pad, Delta is the LP manager"
        - "Official surfaces differ: ponsfamily.com / @ponsdotfamily versus deltaliquidity.app / @deltaliquidity"
        - "Protocol vault and ladder contracts were created by EOAs, not by the Pons factory"
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "Census StonkBrokers is an ERC-6551 NFT with a STORMM LP/options overlay at stonkbrokers.cash / @ClutchMarkets"
        - "Delta's product is stakes and shaped Uniswap ladders, not a token-bound NFT"
        - "No shared domain, handle, or reproduced address"
    - slug: mancer
      signals: [other]
      contrary_signals:
        - "Census Mancer is a trading aggregator at mancer.xyz / @MancerXYZ"
        - "Delta is an LP manager, not a router"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: yield/lp-manager
  secondary_leaves: []
  mechanism_tags: [vault, amm, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Users deposit into a Uniswap stake or a shaped concentrated-liquidity ladder and collect a share of that pool's swap fees; the protocol takes 1% of claimed fees. Token 0xe8ff…a791, the DELTA/WETH Uniswap v3 pool, and the docs-listed vault/ladder contracts were reproduced on chain 4663. Most protocol source is unverified. Site TVL and DefiLlama TVL measure different custody slices. Gecko trending DELTA/WETH is this token's pool, not the other Robinhood DELTA ticker. [R-2] [R-4] [R-9] [R-10] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-30], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7, CLM-12], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-18, CLM-19, CLM-23], note: "" }

links:
  - { kind: site, url: "https://deltaliquidity.app", authenticity: confirmed }
  - { kind: docs, url: "https://deltaliquidity.app/docs", authenticity: confirmed }
  - { kind: app, url: "https://deltaliquidity.app/pools", authenticity: confirmed }
  - { kind: x, url: "https://x.com/deltaliquidity", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/deltaliquidity", authenticity: confirmed }

deployments:
  - label: DELTA token (PonsLauncherToken)
    role: token
    address:
      value: "0xe8ffd7e24187F72afB08d75B1bb13088A989a791"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6, R-13]
  - label: DELTA/WETH Uniswap v3 pair
    role: other
    address:
      value: "0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9, R-10, R-13]
  - label: PonsLaunchFactory (token creator)
    role: factory
    address:
      value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7]
  - label: VaultFactory (docs; creates stakes)
    role: factory
    address:
      value: "0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-13, R-24]
  - label: VaultFarmFactory (docs)
    role: factory
    address:
      value: "0x2bdA3FeB985d812a5932fe59eD4D8627BA3A10d1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-13]
  - label: DeltaZap (docs)
    role: other
    address:
      value: "0xC0b8eC7589ee49c53305517bFd53BEd708392294"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-13]
  - label: TwapOracle (docs)
    role: other
    address:
      value: "0xA26cB1b06AAE9E58D5DBCCE40f7fC38c0aced62C"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-13]
  - label: DeltaPositionBuilder (docs)
    role: other
    address:
      value: "0x6235cF6bd8419b34942F4EDDB39C880BD96dD700"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-13, R-25]
  - label: DeltaLadderManager v3 (docs current)
    role: vault
    address:
      value: "0x5cA6214227D1195c4b7b4B96847b8966c688295D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-13]
  - label: Llama adapter LADDER_MANAGER
    role: vault
    address:
      value: "0x64680254BF644BBdDe394b95129895c13317FeD4"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-12, R-13]
  - label: Llama adapter LADDER_MANAGER_V2
    role: vault
    address:
      value: "0xC5941433114BB47a9733CB31a0A3A3dBfF45B418"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-12, R-13]
  - label: Llama adapter ROUTER_V3
    role: router
    address:
      value: "0x46dFEa430d1F069C129E26445319562e29f39C47"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-12, R-13]

metrics:
  - { kind: tvl, value: 13804, currency: USD, as_of: 2026-09-02T20:52:47Z, window: point, method: "api.llama.fi/protocol/delta currentChainTvls['Robinhood Chain']; module delta-liquidity/index.js; protocol-custodied slice only", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 4343372.01, currency: USD, as_of: 2026-09-02T22:57:00Z, window: 24h, method: "DexScreener latest/dex/tokens DELTA Uniswap v3 DELTA/WETH pair 0xD64Fbd…5F94 volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 14760957, currency: USD, as_of: 2026-09-02T22:57:00Z, window: point, method: "DexScreener same DELTA/WETH v3 pair marketCap", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 14292, currency: null, as_of: 2026-09-02T22:58:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0xe8ffd7e24187F72afB08d75B1bb13088A989a791 holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: fees_24h, value: 43090, currency: USD, as_of: 2026-09-02T22:57:00Z, window: 24h, method: "deltaliquidity.app/pools dashboard line for DELTA 'Fees 24h $43.09K'; site figure, not summed from logs", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:58:00Z, receipt_ids: [R-4, R-5, R-6, R-13], result: "eth_chainId 0x1237 (4663); eth_getCode on 0xe8ff…a791 non-empty (len 10550); name() Delta; symbol() DELTA; decimals 18; totalSupply 1e27; owner() reverts; deployer() 0x1EAFc3E30f9F6DDFC53DC3EaB028A31BA4B8B0f8; Blockscout is_contract true, is_verified true, name PonsLauncherToken, token Delta/DELTA, holders_count 14292, creator PonsLaunchFactory 0xA5aAb3…351feB, creation tx 0x301f5b…598e87 block 24555353 at 2026-07-31T22:59:31Z" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:58:00Z, receipt_ids: [R-8, R-13], result: "eth_getCode on pair 0xD64Fbd…5F94 non-empty (len 44286); Blockscout is_contract true, is_verified true, name UniswapV3Pool, creator Uniswap v3 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA, creation_transaction_hash same launch tx 0x301f5b…598e87" }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-02T22:57:00Z, receipt_ids: [R-1, R-2, R-3, R-6, R-9], result: "X @deltaliquidity bio names The liquidity layer of Robinhood and CA 0xe8ff…a791 and links deltaliquidity.app; site /pools links https://x.com/deltaliquidity and https://discord.gg/deltaliquidity; DexScreener token info.websites https://deltaliquidity.app/ and socials x.com/deltaliquidity; launchToken constructor socials twitter https://x.com/deltaliquidity website https://deltaliquidity.xyz/ (that host NXDOMAIN this pass)" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:02:00Z, receipt_ids: [R-2, R-13, R-24, R-25], result: "eth_getCode non-empty on docs VaultFactory, VaultFarmFactory, DeltaZap, TwapOracle, DeltaPositionBuilder, DeltaLadderManager v3; owner() on VaultFactory and VaultFarmFactory returns EOA 0xf98C1097BC50692b8f290B8c20A3F3f7dD0E2a1D (empty code); owner() on DeltaLadderManager v3 returns EOA 0xb1c2bbf86e557ecdc1812f75ae3fe973e5ec9e69 (empty code); DeltaPositionBuilder is_verified true, name DeltaPositionBuilder" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T22:57:00Z, receipt_ids: [R-9, R-10], result: "GeckoTerminal trending and pool 0xd64fbda67e1015df43fa5e49f02ca844729e5f94 is DELTA/WETH 1% with base robinhood_0xe8ffd7e24187f72afb08d75b1bb13088a989a791; DexScreener same pair Uniswap v3 quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 1159947.42 volume.h24 4343372.01 marketCap 14760957. Gecko dex label pons-dot-family; explorer name UniswapV3Pool created in the Pons launch tx" }
  - { id: REP-6, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:03:00Z, receipt_ids: [R-21, R-26], result: "A second Robinhood ERC-20 named Delta / DELTA at 0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5: is_verified true, name Delta, creator TWCloneFactory 0x25548Ba29a0071F30E4bDCd98Ea72F79341b07a1, creation tx 0x291bdf…997b 2026-08-21T17:09:01Z method deployProxyByImplementationV2. DexScreener pair 0x0FaBFe…02b5c liq 4520231.44 volume.h24 0.04, no token info websites. Not the Gecko trending book" }
  - { id: REP-7, method: api, checked_at: 2026-09-02T22:57:00Z, receipt_ids: [R-11, R-12, R-27], result: "api.llama.fi/protocol/delta name Delta, slug delta, module delta-liquidity/index.js, url https://deltaliquidity.app/, twitter deltaliquidity, address robinhood:0xe8ff…a791, category Liquidity Manager, chains [Robinhood Chain], currentChainTvls['Robinhood Chain'] 13804.2671, audits 0. Distinct Llama row delta-financial is Ethereum DELTA 0x9EA3b5b4EC044b70375236A281986106457b20EF" }
  - { id: REP-8, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:02:00Z, receipt_ids: [R-12, R-13], result: "Llama LADDER_MANAGER 0x646802…FeD4, LADDER_MANAGER_V2 0xC59414…B418, ROUTER_V3 0x46dFEa…9C47 all have non-empty code; owner() on the two Llama ladder managers and ROUTER_V2/FarmFactoryV2 returns 0xb1c2bb…9e69; owner() on ROUTER_V3 returns 0xf98C10…2a1D" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Two halves: Stakes (deposit into a token's Uniswap pool and collect a streamed share of swap fees in ETH/WETH) and Pools/ladders (mint a shaped concentrated-liquidity position from a single coin). Docs: 1% of claimed fees to the protocol, 0% deposit/withdraw/create-stake, 7-day stream, compounding not live. Site FAQ: deposits sit in the stake contract; only the depositor wallet withdraws.", class: claim, observed_at: 2026-09-02T22:59:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://deltaliquidity.app", class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-1, R-3, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@deltaliquidity", class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-1, R-3, R-6, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe8ffd7e24187F72afB08d75B1bb13088A989a791", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-3, R-4, R-5, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-4, R-8, R-9], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: yield/lp-manager, class: inference, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-4, R-9, R-11], reproduction_ids: [REP-1, REP-5, REP-7], supersedes: null }
  - { id: CLM-8, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: identity.symbol, value: DELTA, class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: identity.name, value: Delta, class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: relationship, value: "DELTA was created 2026-07-31T22:59:31Z by EOA 0x1EAFc3E30f9F6DDFC53DC3EaB028A31BA4B8B0f8 calling PonsLaunchFactory.launchToken (config 0, dexId 0). Launchpad Pons v1. Pair asset WETH. Liquidity venue Uniswap v3 pool created in the same tx.", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "Lead listed book is Uniswap v3 DELTA/WETH 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94 (quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73, 1% fee). Extra Uniswap v4 DELTA/USDG and DELTA/ETH books exist. Venue Uniswap. Gecko labels the v3 pool pons-dot-family because it was created in the Pons launch tx.", class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-8, R-9, R-10], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "VaultFactory 0x68ED…153c, VaultFarmFactory 0x2bdA…10d1 and Llama ROUTER_V3 0x46dF…9C47 owner() 0xf98C1097BC50692b8f290B8c20A3F3f7dD0E2a1D (EOA, empty code); that EOA also created those contracts", class: verified, observed_at: 2026-09-02T23:02:00Z, receipt_ids: [R-13, R-24], reproduction_ids: [REP-4, REP-8], supersedes: null }
  - { id: CLM-14, field: control.owner, value: "Docs DeltaLadderManager v3 0x5cA6…295D and Llama LADDER_MANAGER / LADDER_MANAGER_V2 owner() 0xb1c2bbf86e557ecdc1812f75ae3fe973e5ec9e69 (EOA, empty code)", class: verified, observed_at: 2026-09-02T23:02:00Z, receipt_ids: [R-13], reproduction_ids: [REP-4, REP-8], supersedes: null }
  - { id: CLM-15, field: control.privileged-role, value: "Docs FAQ: the owner key can lower the fee and pause new deposits, but cannot raise the fee or move a staked position. Not reproduced from unverified vault source this pass.", class: claim, observed_at: 2026-09-02T22:59:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: control.proxy, value: "DELTA token proxy_type null; implementations empty; PonsLauncherToken is not Ownable (owner() reverts)", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on the site, docs, X profile or DexScreener; Llama audits 0. @deltaliquidity posted on 2026-08-31 that it is working with a leading security firm to audit the codebase; no firm name or report was attached.", class: unknown, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "DefiLlama Delta Robinhood Chain TVL 13804.2671 USD at 2026-09-02T20:52:47Z. Methodology: assets custodied by Delta contracts; user-custodied positions not counted.", class: claim, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "deltaliquidity.app/pools header TVL $1,440,933; Total Positions 8,275; Total Fees $1,210,576 as of fetch. Stakes page: Total staked 8.9 WETH across 12 stakes.", class: claim, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener Uniswap v3 DELTA/WETH 0xD64Fbd…: liquidity.usd 1159947.42, volume.h24 4343372.01, marketCap 14760957. That is the token book, not protocol-custodied TVL.", class: claim, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "Blockscout holders_count 14292; totalSupply 1_000_000_000e18", class: claim, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "Pons launchToken constructor website field was https://deltaliquidity.xyz/; that host did not resolve this pass. Live official domain is deltaliquidity.app.", class: claim, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: other, value: "A second Robinhood token named Delta / DELTA exists at 0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5 (TWCloneFactory, 2026-08-21). It is not this slug. Gecko trending DELTA/WETH 0xd64fbd… is the Pons-launched 0xe8ff… token.", class: verified, observed_at: 2026-09-02T23:03:00Z, receipt_ids: [R-10, R-21, R-26], reproduction_ids: [REP-5, REP-6], supersedes: null }
  - { id: CLM-24, field: identity.repository, value: "NULL — site, X, DexScreener and constructor socials do not name a repository", class: unknown, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: account.@deltaliquidity.official, value: "Official X: @deltaliquidity bio carries CA 0xe8ff…a791 and links deltaliquidity.app; site /pools and DexScreener token socials name the same handle", class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-1, R-3, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: account.@deltaliquidlty.handle-collision, value: "handle-collision: @deltaliquidlty and @deltaliquidityS reuse the same bio line and CA as @deltaliquidity; follower counts 280 and 71 versus 5598 on the official handle. Site and DexScreener name @deltaliquidity only.", class: claim, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "2026-09-02 @deltaliquidity posted $1,000,000 has been claimed by users providing liquidity on Delta", class: claim, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: communications.status, value: "2026-08-31 @deltaliquidity posted that the website had a DDoS interruption, that smart contracts were unaffected, and that an audit of the codebase is underway", class: claim, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: communications.status, value: "2026-08-30 @deltaliquidity posted Total value locked on Delta has surpassed $1,000,000", class: claim, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "Docs live contracts on chain 4663: VaultFactory 0x68ED…153c, VaultFarmFactory 0x2bdA…10d1, DeltaZap 0xC0b8…2294, TwapOracle 0xA26c…d62C, DeltaPositionBuilder 0x6235…D700, DeltaLadderManager v3 0x5cA6…295D. eth_getCode non-empty on each.", class: verified, observed_at: 2026-09-02T23:02:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-31, field: product.mechanism, value: "Verified DeltaPositionBuilder source mints Uniswap v3 ladder rungs via NonfungiblePositionManager; NFT owner in the LadderMinted event is the caller. Docs say shaped positions are held in a Delta contract only the user can access.", class: verified, observed_at: 2026-09-02T23:03:00Z, receipt_ids: [R-2, R-25], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-32, field: taxonomy.mechanism-tag, value: "vault, amm, fee-routing", class: inference, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: other, value: "GeckoTerminal Robinhood trending this window listed DELTA/WETH pool 0xd64fbd… liq about $1.14M vol about $4.34M. Base token is 0xe8ff…a791, this slug, not 0xfA1A…bD5.", class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-34, field: team.identity, value: "@TheVsCrypto bio reads Product @Deltaliquidity; @deltaliquidity quoted that account on 2026-08-23. No legal entity is named on the site or docs.", class: claim, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-28], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-18, CLM-19]
    material_effect: "Site header TVL is about $1.44M (and the 2026-08-30 post said TVL surpassed $1M). DefiLlama Robinhood Chain TVL is $13,804 because it counts only assets custodied by Delta contracts and excludes user-custodied positions. The DELTA/WETH Uniswap book (~$1.16M) is a third slice."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Account posts $1,000,000 claimed by LPs"
    summary: "@deltaliquidity posted that $1,000,000 has been claimed by users providing liquidity on Delta."
    occurred_at: 2026-09-02T15:43:17Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-2
    type: company
    title: "Account posts $750,000 claimed by LPs"
    summary: "@deltaliquidity posted that $750,000 has been claimed by users providing liquidity on Delta."
    occurred_at: 2026-09-01T15:16:52Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: company
    title: "Account posts website DDoS, contracts unaffected"
    summary: "@deltaliquidity posted a website DDoS interruption, said contracts kept running, and said an audit is underway."
    occurred_at: 2026-08-31T23:27:07Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [communications.status, security.audit]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: company
    title: "Account posts over 5,000 positions opened"
    summary: "@deltaliquidity posted that there are now over 5,000 positions opened on Delta."
    occurred_at: 2026-08-31T05:36:23Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: ct
    title: "Aster lists $DELTA 3x perps"
    summary: "@Aster_DEX posted a $DELTA perp listing at 0xe8ff…a791 with up to 3x leverage, alongside $STONKBROKER 5x."
    occurred_at: 2026-08-30T17:56:00Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [relationship, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-6
    type: company
    title: "Account quotes Aster listing"
    summary: "@deltaliquidity quoted the Aster $DELTA 3x listing post with the text Longing liquidity here."
    occurred_at: 2026-08-30T21:49:02Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-7
    type: company
    title: "Account posts TVL surpassed $1,000,000"
    summary: "@deltaliquidity posted that total value locked on Delta has surpassed $1,000,000."
    occurred_at: 2026-08-30T01:18:00Z
    observed_at: 2026-09-02T22:55:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-8
    type: onchain
    title: "DELTA token launched via Pons v1"
    summary: "PonsLaunchFactory.launchToken created PonsLauncherToken 0xe8ff…a791 and Uniswap v3 DELTA/WETH 0xD64Fbd… in tx 0x301f5b…."
    occurred_at: 2026-07-31T22:59:31Z
    observed_at: 2026-09-02T22:58:00Z
    affected_fields: [deployment.address, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6, R-8]

receipts:
  - { id: R-1, publisher: Delta, title: "Delta pools app", url: "https://deltaliquidity.app/pools", published_at: null, accessed_at: 2026-09-02T22:57:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-8, CLM-19, CLM-25, EVT-4], excerpt: "Title Delta. Description: Liquidity stakes and concentrated liquidity pools on Robinhood Chain. Header: Total Positions 8,275; Total Fees $1,210,576; TVL $1,440,933. Nav links X https://x.com/deltaliquidity and Discord https://discord.gg/deltaliquidity. DELTA Market cap $14.89M Vol 24h $4.31M Fees 24h $43.09K. Stakes page: Total staked 8.9 WETH, Stakes 12." }
  - { id: R-2, publisher: Delta, title: "Delta Docs", url: "https://deltaliquidity.app/docs", published_at: null, accessed_at: 2026-09-02T22:59:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-15, CLM-30, CLM-31, CLM-32], excerpt: "Live on Robinhood Chain, chain id 4663. Stakes collect a share of swap fees. Pools: shaped position from a single coin. 1% of claimed fees, never principal. Deposit/Withdraw/Creating a stake 0. VaultFactory 0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c. FAQ: deposits sit in the stake contract; only your wallet withdraws. Owner key can lower the fee and pause new deposits, cannot raise the fee or move a staked position." }
  - { id: R-3, publisher: Delta (@deltaliquidity), title: "X profile @deltaliquidity", url: "https://x.com/deltaliquidity", published_at: "2026-07-28T00:00:00Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-25], excerpt: "Delta @deltaliquidity. Bio: The liquidity layer of Robinhood. 0xe8ffd7e24187f72afb08d75b1bb13088a989a791. Followers 5598. Joined July 2026. Profile URL deltaliquidity.app." }
  - { id: R-4, publisher: Blockscout, title: "Address 0xe8ff…a791", url: "https://robinhoodchain.blockscout.com/address/0xe8ffd7e24187F72afB08d75B1bb13088A989a791", published_at: null, accessed_at: 2026-09-02T22:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-10, CLM-16, EVT-8], excerpt: "hash 0xe8ffd7e24187F72afB08d75B1bb13088A989a791, is_contract true, is_verified true, name PonsLauncherToken, proxy_type null, creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB, creation_transaction_hash 0x301f5b492bdf3f985f7f0d37d1616b07df53f8325f03407be7805412be598e87. Token Delta / DELTA, holders_count 14292, total_supply 1e27, decimals 18." }
  - { id: R-5, publisher: Blockscout, title: "Token page DELTA", url: "https://robinhoodchain.blockscout.com/token/0xe8ffd7e24187F72afB08d75B1bb13088A989a791", published_at: null, accessed_at: 2026-09-02T22:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-10, CLM-21], excerpt: "address_hash 0xe8ffd7e24187F72afB08d75B1bb13088A989a791, name Delta, symbol DELTA, decimals 18, holders_count 14292, total_supply 1000000000000000000000000000, type ERC-20." }
  - { id: R-6, publisher: Blockscout, title: "Creation tx 0x301f5b…", url: "https://robinhoodchain.blockscout.com/tx/0x301f5b492bdf3f985f7f0d37d1616b07df53f8325f03407be7805412be598e87", published_at: "2026-07-31T22:59:31Z", accessed_at: 2026-09-02T22:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-11, CLM-22, CLM-3, EVT-8], excerpt: "status ok, timestamp 2026-07-31T22:59:31Z, block 24555353, from EOA 0x1EAFc3E30f9F6DDFC53DC3EaB028A31BA4B8B0f8, to PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB, method launchToken. Params: name Delta, symbol DELTA, description Stake, compound & earn from liquidity pools., socials twitter https://x.com/deltaliquidity website https://deltaliquidity.xyz/, launchConfigId 0, dexId 0." }
  - { id: R-7, publisher: Blockscout, title: "PonsLaunchFactory 0xA5aAb3…", url: "https://robinhoodchain.blockscout.com/address/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-02T22:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, EVT-8], excerpt: "hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB, is_contract true, is_verified true, name PonsLaunchFactory, proxy_type null, creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-8, publisher: Blockscout, title: "UniswapV3Pool 0xD64Fbd…", url: "https://robinhoodchain.blockscout.com/address/0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94", published_at: null, accessed_at: 2026-09-02T22:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-12, EVT-8], excerpt: "hash 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94, is_contract true, is_verified true, name UniswapV3Pool, creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA, creation_transaction_hash 0x301f5b492bdf3f985f7f0d37d1616b07df53f8325f03407be7805412be598e87." }
  - { id: R-9, publisher: DexScreener, title: "DELTA token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xe8ffd7e24187f72afb08d75b1bb13088a989a791", published_at: null, accessed_at: 2026-09-02T22:57:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-12, CLM-20, CLM-25], excerpt: "Uniswap v3 pair 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94 DELTA/WETH liquidity.usd 1159947.42 volume.h24 4343372.01 marketCap 14760957. info.websites https://deltaliquidity.app/ socials x.com/deltaliquidity and discord.com/invite/deltaliquidity. Extra Uniswap v4 DELTA/USDG and DELTA/ETH books." }
  - { id: R-10, publisher: GeckoTerminal, title: "Robinhood DELTA/WETH pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xd64fbda67e1015df43fa5e49f02ca844729e5f94", published_at: null, accessed_at: 2026-09-02T22:57:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12, CLM-20, CLM-23, CLM-33], excerpt: "name DELTA / WETH 1%, address 0xd64fbda67e1015df43fa5e49f02ca844729e5f94, reserve_in_usd 1138915.1374, volume_usd.h24 4336125.50, fdv_usd 14807365.15. base_token robinhood_0xe8ffd7e24187f72afb08d75b1bb13088a989a791. quote WETH 0x0bd7d308f8e1639fab988df18a8011f41eacad73. dex pons-dot-family. Trending list this window showed the same pool at about $1.13M liq / $4.33M vol." }
  - { id: R-11, publisher: DefiLlama, title: "Delta protocol", url: "https://api.llama.fi/protocol/delta", published_at: null, accessed_at: 2026-09-02T22:57:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-7, CLM-18], excerpt: "name Delta, symbol DELTA, url https://deltaliquidity.app/, twitter deltaliquidity, address robinhood:0xe8ffd7e24187F72afB08d75B1bb13088A989a791, category Liquidity Manager, chains [Robinhood Chain], module delta-liquidity/index.js, audits 0, currentChainTvls['Robinhood Chain'] 13804.2671, last tvl point date 1788382367 (2026-09-02T20:52:47Z)." }
  - { id: R-12, publisher: DefiLlama, title: "delta-liquidity adapter", url: "https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/delta-liquidity/index.js", published_at: null, accessed_at: 2026-09-02T23:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18], excerpt: "VAULT_FACTORY 0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c; LADDER_MANAGER 0x64680254BF644BBdDe394b95129895c13317FeD4; LADDER_MANAGER_V2 0xC5941433114BB47a9733CB31a0A3A3dBfF45B418; ROUTER_V3 0x46dFEa430d1F069C129E26445319562e29f39C47; DELTA 0xe8ffd7e24187F72afB08d75B1bb13088A989a791. Methodology: TVL counts assets custodied by Delta contracts. User-custodied positions are not counted." }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, ERC-20 views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-13, CLM-14, CLM-16, CLM-30], excerpt: "eth_chainId 0x1237. Token 0xe8ff… name() Delta symbol() DELTA totalSupply 1e27 owner() revert deployer() 0x1eafc3e30f9f6ddfc53dc3eab028a31ba4b8b0f8. owner() VaultFactory/VaultFarmFactory/ROUTER_V3 = 0xf98c1097bc50692b8f290b8c20a3f3f7dd0e2a1d (empty code). owner() DeltaLadderManager v3 and Llama ladder managers = 0xb1c2bbf86e557ecdc1812f75ae3fe973e5ec9e69 (empty code). Non-empty code on all docs and Llama adapter addresses listed in deployments." }
  - { id: R-14, publisher: Delta (@deltaliquidity), title: "$1,000,000 has been claimed", url: "https://x.com/deltaliquidity/status/2095175740534997144", published_at: "2026-09-02T15:43:17Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-1], excerpt: "$1,000,000 has been claimed by users providing liquidity on Delta." }
  - { id: R-15, publisher: Delta (@deltaliquidity), title: "$750,000 has been claimed", url: "https://x.com/deltaliquidity/status/2094806704907337795", published_at: "2026-09-01T15:16:52Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "$750,000 has been claimed by users providing liquidity on Delta." }
  - { id: R-16, publisher: Delta (@deltaliquidity), title: "Website DDoS post", url: "https://x.com/deltaliquidity/status/2094567691969540120", published_at: "2026-08-31T23:27:07Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-28, EVT-3], excerpt: "Today, the Delta website experienced a DDoS attack originating from a malicious third party, which resulted in a brief interruption to website access. Importantly, there was no impact to Delta’s smart contracts or on-chain functionality. As part of our ongoing efforts, we are actively working with a leading security firm to audit Delta’s codebase." }
  - { id: R-17, publisher: Delta (@deltaliquidity), title: "Over 5,000 positions opened", url: "https://x.com/deltaliquidity/status/2094298233594118367", published_at: "2026-08-31T05:36:23Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "There are now over 5,000 positions opened on Delta." }
  - { id: R-18, publisher: Delta (@deltaliquidity), title: "TVL surpassed $1,000,000", url: "https://x.com/deltaliquidity/status/2093870819642572800", published_at: "2026-08-30T01:18:00Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-29, EVT-7], excerpt: "Total value locked on Delta has surpassed $1,000,000." }
  - { id: R-19, publisher: Delta (@deltaliquidity), title: "Quote of Aster $DELTA listing", url: "https://x.com/deltaliquidity/status/2094180618859172173", published_at: "2026-08-30T21:49:02Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Longing liquidity here. Quoted @Aster_DEX: New perp listings: $DELTA (0xe8ffd7e24187F72afB08d75B1bb13088A989a791) with up to 3x leverage." }
  - { id: R-20, publisher: Aster (@Aster_DEX), title: "New perp listings $DELTA 3x", url: "https://x.com/Aster_DEX/status/2094121977175040425", published_at: "2026-08-30T17:56:00Z", accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "New perp listings: $DELTA (0xe8ffd7e24187F72afB08d75B1bb13088A989a791) with up to 3x leverage. $STONKBROKER (0xe934e36A439C94017B64a3FecE66AF12099aBF50) with up to 5x leverage." }
  - { id: R-21, publisher: Blockscout, title: "Other DELTA token 0xfA1A…", url: "https://robinhoodchain.blockscout.com/address/0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5", published_at: null, accessed_at: 2026-09-02T23:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "hash 0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5, is_contract true, is_verified true, name Delta, creator_address_hash 0x25548Ba29a0071F30E4bDCd98Ea72F79341b07a1 (TWCloneFactory), creation_transaction_hash 0x291bdfb8f1bc8f2b56ef9175ff223c9ddb9d73586847b25cd8818fdc434d997b 2026-08-21T17:09:01Z method deployProxyByImplementationV2. Token Delta / DELTA holders_count 15783." }
  - { id: R-22, publisher: X, title: "Handle search deltaliquidity", url: "https://x.com/search?q=deltaliquidity&f=user", published_at: null, accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26], excerpt: "Delta @deltaliquidity, 5598 followers, bio The liquidity layer of Robinhood plus CA 0xe8ff…a791. Delta Community @deltaliquidlty, 280 followers, same bio and CA. Delta Support @deltaliquidityS, 71 followers, same bio and CA." }
  - { id: R-23, publisher: Delta, title: "Discord invite", url: "https://discord.gg/deltaliquidity", published_at: null, accessed_at: 2026-09-02T23:02:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [], excerpt: "Invite slug deltaliquidity linked from deltaliquidity.app/pools. HTTP 200 on discord.com/invite/deltaliquidity." }
  - { id: R-24, publisher: Blockscout, title: "VaultFactory 0x68ED…", url: "https://robinhoodchain.blockscout.com/address/0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c", published_at: null, accessed_at: 2026-09-02T23:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-30], excerpt: "hash 0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c, is_contract true, is_verified false, name null, proxy_type null, creator_address_hash 0xf98C1097BC50692b8f290B8c20A3F3f7dD0E2a1D, creation_transaction_hash 0x467f725044942b8fa394c3f9b3bce99c33064ea23332fcdbd7decdddac9eab81." }
  - { id: R-25, publisher: Blockscout, title: "DeltaPositionBuilder verified source", url: "https://robinhoodchain.blockscout.com/address/0x6235cF6bd8419b34942F4EDDB39C880BD96dD700", published_at: null, accessed_at: 2026-09-02T23:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31, CLM-30], excerpt: "is_verified true, name DeltaPositionBuilder, compiler v0.8.26, proxy none. Source: mintLadder(address pool, Rung[] rungs, ...) emits LadderMinted(address indexed owner, address indexed pool, ...). Uses Uniswap v3 NonfungiblePositionManager. No owner() in ABI." }
  - { id: R-26, publisher: DexScreener, title: "Other DELTA 0xfA1A… pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5", published_at: null, accessed_at: 2026-09-02T23:03:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Uniswap pair 0x0FaBFe4E5B1C2caF0dc0555091f69A123B802b5c base Delta / DELTA 0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5 liquidity.usd 4520231.44 volume.h24 0.04. info null. Distinct from 0xe8ff…a791." }
  - { id: R-27, publisher: DefiLlama, title: "Delta Financial (Ethereum) row", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-02T23:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Separate row: Delta Financial slug delta-financial symbol DELTA address 0x9ea3b5b4ec044b70375236a281986106457b20ef category Options chain Ethereum twitter Delta_Token. Robinhood Delta is slug delta, url deltaliquidity.app, twitter deltaliquidity." }
  - { id: R-28, publisher: TheVs (@TheVsCrypto), title: "Product @Deltaliquidity bio", url: "https://x.com/TheVsCrypto", published_at: null, accessed_at: 2026-09-02T22:55:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-34], excerpt: "TheVs @TheVsCrypto. Bio: Product @Deltaliquidity. Founder @Diligencedao. Quoted by @deltaliquidity on 2026-08-23 in a State of Delta recap." }

gaps:
  - { priority: P0, question: "Which ladder manager is live for new positions: docs DeltaLadderManager v3 0x5cA6…295D, Llama LADDER_MANAGER 0x6468…FeD4, or LADDER_MANAGER_V2 0xC594…B418?", checked: "docs contracts table lists only 0x5cA6…; Llama adapter still enumerates 0x6468… and 0xC594…; eth_getCode non-empty on all three, 2026-09-02", next: "read the app's configured manager address from JS and match open events" }
  - { priority: P0, question: "Do the unverified VaultFactory / DeltaLadderManager sources match the FAQ (owner can pause and lower fee, cannot raise fee or move deposits), and is there a timelock?", checked: "FAQ text on /docs; owner() EOAs with empty code; VaultFactory is_verified false, 2026-09-02", next: "verify source on those contracts or eth_call pause/fee setters" }
  - { priority: P1, question: "Is there an audit report whose scope matches VaultFactory, ladder managers and DeltaPositionBuilder?", checked: "site, docs, X profile, DexScreener, Llama audits=0; 2026-08-31 post says a firm is engaged, no URL, 2026-09-02", next: "record any report URL as a claim when published" }
  - { priority: P1, question: "Can site TVL $1,440,933 be reconstructed as the sum of user-custodied Uniswap positions the app indexes, versus Llama's $13,804 custodied slice?", checked: "Llama methodology excludes user-custodied positions; stakes page shows 8.9 WETH; header TVL is ~100x Llama, 2026-09-02", next: "sum position NFT amounts the app lists, or ask Llama to add a user-custodied metric" }
  - { priority: P2, question: "Does anyone still operate deltaliquidity.xyz, and is the constructor website field updated on chain?", checked: "launchToken website https://deltaliquidity.xyz/ NXDOMAIN; live domain deltaliquidity.app, 2026-09-02", next: "leave as stale constructor metadata unless DNS returns" }
  - { priority: P2, question: "Is 0xfA1A…bD5 connected to this team, or only a ticker collision?", checked: "TWCloneFactory deploy 2026-08-21, no DexScreener websites, different creator from PonsLaunchFactory, 2026-09-02", next: "leave unmerged unless a primary post links the two CAs" }
---

# Delta — research packet

## What it is

A liquidity manager: users deposit a token or LP into a stake or a shaped Uniswap position and collect a share of that pool's swap fees in ETH. Open or join a pool on deltaliquidity.app, claim streamed fees after a 1% protocol cut, and withdraw with no lockup. @deltaliquidity runs the app. DELTA is a Pons v1 launch token, not the vault.

Themes: vault, rwa, memecoin

## Why it matters

Delta is a live LP manager on chain 4663: it sits next to Uniswap v3 and v4 books and takes a 1% cut of claimed swap fees rather than minting rewards. [claim R-2]

The DELTA/WETH Uniswap v3 book was about $1.16M of liquidity with about $4.34M of 24h volume at fetch, matching the GeckoTerminal trending DELTA/WETH print this window. [claim R-9 R-10]

That book is the token pair, not DefiLlama's $13,804 protocol-custodied TVL. [claim R-11]

## What could go wrong

Site TVL (~$1.44M) and Llama TVL (~$13.8k) are different custody slices. Using the token pair or the site header as "protocol TVL" overstates what the contracts hold. [claim R-1 R-11]

Vault and ladder `owner()` values are EOAs with no timelock in the path that was opened. Docs say that key can pause deposits and lower the fee; most of those contracts are unverified. [verified R-13] [claim R-2]

A second Robinhood token also named Delta / DELTA (0xfA1A…bD5) exists. Pairing that ticker with this product mixes two contracts. [verified R-21]

## Product and mechanics

DELTA is a fixed-supply ERC-20 (1,000,000,000e18) named Delta / DELTA. Verified source is PonsLauncherToken, deployed by PonsLaunchFactory.launchToken. Launchpad is Pons v1. Pair asset on the lead book is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. Venue is Uniswap v3 pool 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94, created in the same launch transaction. Gecko labels that pool pons-dot-family; Blockscout names it UniswapV3Pool. Extra Uniswap v4 DELTA/USDG and DELTA/ETH books exist. [verified R-4 R-6 R-8 R-9]

Docs describe two halves. Stakes: deposit into one token's pool and collect a streamed share of that pool's swap fees, paid in ETH, over 7-day windows. Pools: mint a shaped concentrated-liquidity ladder from a single coin. Protocol cut is 1% of claimed fees, 0% on deposit, withdraw and stake creation. Compounding is not live. FAQ: deposits sit in the stake contract; only the depositor wallet withdraws. [claim R-2]

Verified DeltaPositionBuilder source mints Uniswap v3 rungs through NonfungiblePositionManager and emits LadderMinted with the caller as owner. Docs say shaped positions are held in a Delta contract only that user can access, which is why Llama can print a small custodied TVL while the app header prints a much larger one. [verified R-25] [claim R-2 R-12]

## Control and security

The token is not a proxy and is not Ownable: `owner()` reverts; `deployer()` returns EOA 0x1EAFc3E30f9F6DDFC53DC3EaB028A31BA4B8B0f8, the `launchToken` caller. [verified R-4 R-13]

VaultFactory, VaultFarmFactory and Llama ROUTER_V3 `owner()` return EOA 0xf98C1097BC50692b8f290B8c20A3F3f7dD0E2a1D (empty code), which also created those contracts. Docs DeltaLadderManager v3 and the two Llama ladder managers `owner()` return EOA 0xb1c2bbf86e557ecdc1812f75ae3fe973e5ec9e69 (empty code). No timelock was opened on those paths. [verified R-13 R-24]

Docs FAQ: the owner key can lower the fee and pause new deposits, and cannot raise the fee or move a staked position. That text was not checked against unverified vault source. [claim R-2]

No audit report URL was located. Llama `audits` is 0. The 2026-08-31 account post says a firm is engaged; no firm name or report is attached. [unknown]

## Team and provenance

@deltaliquidity bio carries CA 0xe8ff…a791 and links deltaliquidity.app. The pools app links that handle and discord.gg/deltaliquidity. DexScreener token metadata lists the same site and handle. Constructor socials named the same handle and deltaliquidity.xyz, which did not resolve. [verified R-1 R-3 R-9]

@TheVsCrypto bio reads Product @Deltaliquidity and was quoted by the official account. No legal entity is named on the site or docs. GitHub search deltaliquidity returned 0. [claim R-28] [unknown]

handle-collision: @deltaliquidlty and @deltaliquidityS reuse the same bio and CA with far smaller followings. Site and DexScreener name @deltaliquidity only. [claim R-22]

Census MaxFi, Snuggle, SCOPL, StonkBrokers and Mancer share LP or routing wording only. Pons created the token; it does not run the vaults. [inference R-6 R-7]

## Economics and activity

DexScreener Uniswap v3 DELTA/WETH 0xD64Fbd… at 2026-09-02T22:57:00Z: liquidity.usd 1159947.42; volume.h24 4343372.01; marketCap 14760957. GeckoTerminal the same pool: reserve_in_usd 1138915.14; volume_usd.h24 4336125.50. Those are pair slices, not protocol TVL. [claim R-9 R-10]

DefiLlama Delta, Robinhood Chain slice, 2026-09-02T20:52:47Z: TVL $13,804.27. Adapter methodology excludes user-custodied positions. [claim R-11 R-12]

Site header at fetch: TVL $1,440,933; Total Positions 8,275; Total Fees $1,210,576; DELTA fees 24h $43.09K. Stakes page: 8.9 WETH across 12 stakes. @deltaliquidity posted TVL surpassed $1,000,000 (2026-08-30) and $1,000,000 claimed by LPs (2026-09-02). Those totals were not summed from logs this pass. [claim R-1 R-14 R-18]

Blockscout holders_count 14292. [claim R-5]

## Material risks

- Site TVL, Llama TVL and the DELTA/WETH book are three different numbers. [claim R-1 R-9 R-11]

- Vault and ladder owners are EOAs; most protocol source is unverified, so the FAQ pause/fee limits are unproven. [verified R-13] [claim R-2]

- Docs list DeltaLadderManager v3 0x5cA6… while Llama still reads 0x6468… and 0xC594…. [claim R-2 R-12]

- No audit report was located. [unknown]

- A second Robinhood DELTA ticker (0xfA1A…bD5) can be mixed with this product. [verified R-21]

## Verification passes

- Receipts: deltaliquidity.app/pools, /docs, X profile and six posts, Aster listing, Blockscout token/tx/factory/pair/VaultFactory/PositionBuilder and the other DELTA token, DexScreener both CAs, Gecko pool, Llama protocol and adapter, and RPC calls were opened on 2026-09-02 and excerpts copied from the responses. [verified R-1 R-2 R-4 R-9 R-11 R-13]

- Numbers: DexScreener liquidity and 24h volume are Uniswap v3 DELTA/WETH 0xD64Fbd…, not all DELTA pairs. Llama TVL is the Robinhood Chain custodied slice. Site $1,440,933 and X $1,000,000 claimed remain class claim. Holders 14292 is all token holders. [claim R-5 R-9 R-11]

- Adversarial: the strongest contrary reading is that Gecko trending DELTA/WETH is the other Robinhood DELTA (0xfA1A…bD5, ~$4.5M reported liq) or Ethereum Delta Financial (Llama slug delta-financial, 0x9EA3…). Trending pool 0xd64fbd… has base 0xe8ff…a791; 0xfA1A… 24h volume is $0.04; Llama slug delta points at deltaliquidity.app. A weaker contrary reading is that Delta is only a Pons memecoin: the token is a Pons launch, but docs-listed vault and ladder contracts exist with code on 4663. [inference R-10 R-11 R-21 R-27]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census row delta, content/projects/delta.yaml, content/pulled/delta.yaml (pulled_at 2026-09-02T21:05:36Z, head 52877457, pair 0xD64Fbd… liq 1126001 vol 4394501.9), feed/delta.yaml, sources/delta.yaml and research/delta.md read before collection.
- Identity check on Gecko trending DELTA/WETH liq ~$1.11M vol ~$4.30M: pool 0xd64fbda67e1015df43fa5e49f02ca844729e5f94, base 0xe8ffd7e24187f72afb08d75b1bb13088a989a791. Confirmed as this slug. Other Robinhood DELTA 0xfA1A5d457a9f9659b1f7bdE14576c6bE955b6bD5 is a TWCloneFactory token, not the trending book.
- Site: https://deltaliquidity.app → 307 /pools. Docs https://deltaliquidity.app/docs (SPA, contracts table in HTML). deltaliquidity.xyz NXDOMAIN.
- X: profile @deltaliquidity; posts 2095175740534997144, 2094806704907337795, 2094567691969540120, 2094298233594118367, 2094180618859172173, 2093870819642572800; Aster 2094121977175040425. Lookalikes @deltaliquidlty and @deltaliquidityS recorded.
- Explorer: Blockscout api/v2 with a browser User-Agent. Token, token page, creation tx, PonsLaunchFactory, UniswapV3Pool, VaultFactory, DeltaPositionBuilder, other DELTA 0xfA1A…, TWCloneFactory.
- RPC: https://rpc.mainnet.chain.robinhood.com eth_chainId, eth_getCode, name/symbol/decimals/totalSupply/owner/deployer. urllib without User-Agent returned 403; curl with UA succeeded. Chain head at owner read: 52944616.
- DexScreener latest/dex/tokens for 0xe8ff… and 0xfA1A…; GeckoTerminal trending_pools and pool endpoint; api.llama.fi/protocol/delta and /protocols; raw GitHub DefiLlama-Adapters/projects/delta-liquidity/index.js. Llama projects/delta/index.js is the old Ethereum adapter; live slug delta uses module delta-liquidity.
- GitHub search deltaliquidity: 0 repos. Discord invite HTTP 200.
- Possible matches recorded: maxfi, snuggle, scopl, pons, stonkbroker, mancer. Ticker collisions outside census: Ethereum 0x9EA3… (delta-financial), WEMIX DELTAFi, several BSC DELTA tokens.
- Allowed path this run: this packet only. No content/ writes. No push.
