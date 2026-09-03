---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: earn-protocol
name: EARN
packet_tier: full
as_of: 2026-09-02T23:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [earn-protocol]
allowed_paths:
  - research/inbox/packets/earn-protocol/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: EARN
  aliases: ["EARN Protocol", "earnonhood"]
  symbols: [EARN]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://earnonhood.com
  official_handle: "@EARNONHOOD"
  repository: "NULL — site, docs, X bio and DexScreener token info do not name a public repository; GitHub search earnonhood and NvdaUsdgV4VaultV6 returned no project repo"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired launchpad at app.long.xyz / @longdotxyz"
        - "EARN is a yield layer at earnonhood.com / @EARNONHOOD with token 0xa3b6aee90017b72c0812dc1e013de70eb2917ba3"
        - "DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862 are shared launch infrastructure, not EARN protocol contracts"
    - slug: statics-protocol
      signals: [shared-deployer]
      contrary_signals:
        - "Census Statics is a redeemable RWA basket at staticsprotocol.com / @StaticsProtocol with token 0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd"
        - "Both tokens are DopplerERC20V1 EIP-1167 clones whose owner() is Airlock 0xeb7C…0862; the tokens and domains differ"
        - "No shared domain, handle, or EARN vault address"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is a stock-paired token at artificialinu.com / @ArtificiallyInu with token 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18"
        - "Airlock owns both tokens; EARN vaults, Omnipools and earnonhood.com are not the $AI product"
        - "No shared domain, handle, or reproduced vault address"
    - slug: vynex
      signals: [other]
      contrary_signals:
        - "Census Vynex is a savings-vault / Morpho NVDA market row at @UseVynex"
        - "EARN's official surface is earnonhood.com / @EARNONHOOD and token 0xa3b6…7ba3"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution / stock-paired factory at @bankrbot"
        - "@EARNONHOOD posted it is building as part of the Bankr ecosystem; that is a relationship, not a shared identity"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: yield/savings-vault
  secondary_leaves: [yield/lp-manager, credit/morpho-curator]
  mechanism_tags: [vault, amm, rwa, stock-paired, fee-routing, lending]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Users deposit stock tokens, USDG or ETH into Uniswap v4 strategy vaults or into permissionless Omnipools of up to eight tokens; swap fees accrue to the shares. Token 0xa3b6…7ba3, NVDA/USDG vault 0x0059F8…fd6e, Morpho USDG vault 0x8046…771d and Omnipool 0x00e7…38A6 exist on chain 4663 this pass. Census lifecycle announced is behind a live Uniswap EARN/SPY book. Vault/stake/Morpho owner() is EOA 0x75741d… with no timelock opened. GME vault, stake and Omnipool source are unverified. [R-2] [R-5] [R-12] [R-20] [R-21]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-16, CLM-18], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-20, CLM-23], note: "" }

links:
  - { kind: site, url: "https://earnonhood.com", authenticity: confirmed }
  - { kind: docs, url: "https://earnonhood.com/docs", authenticity: confirmed }
  - { kind: app, url: "https://earnonhood.com/vault", authenticity: confirmed }
  - { kind: app, url: "https://earnonhood.com/omni/pools", authenticity: confirmed }
  - { kind: app, url: "https://earnonhood.com/steer", authenticity: confirmed }
  - { kind: app, url: "https://earnonhood.com/lend", authenticity: confirmed }
  - { kind: x, url: "https://x.com/EARNONHOOD", authenticity: confirmed }

deployments:
  - label: EARN token (DopplerERC20V1 EIP-1167 clone)
    role: token
    address:
      value: "0xa3b6aee90017b72c0812dc1e013de70eb2917ba3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
      implementation_source_verified: true
    receipt_ids: [R-5, R-6, R-7, R-9, R-21]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9]
  - label: DopplerERC20V1Factory (token creator)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-21]
  - label: Airlock owner Safe (SafeL2 proxy)
    role: multisig
    address:
      value: "0x21E2ce70511e4FE542a97708e89520471DAa7A66"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-21]
  - label: NVDA/USDG Uniswap v4 vault (NvdaUsdgV4VaultV6)
    role: vault
    address:
      value: "0x0059F82A76B1Cb261ad71fA117a36CC0BB3Dfd6e"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-12, R-21]
  - label: NVDA/USDG single-token zap (NvdaUsdgV4ZapV6)
    role: router
    address:
      value: "0xD47D1187044B40DB1375ce60682AAC00a5356EFb"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-13]
  - label: GME/USDG vault (GME-USDG Vault V6)
    role: vault
    address:
      value: "0x2D26567eE8A4A24eaE17E8385380543E810Dd25a"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-14, R-21]
  - label: GME/USDG single-token zap
    role: router
    address:
      value: "0xb255934707e0796A8da4af7342002F8ef24d9f33"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-15]
  - label: EARN staking contract
    role: vault
    address:
      value: "0xeE7abf316E2824FbFB73aa3EA61217Dd600bD051"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-16, R-31]
  - label: EARN Morpho VaultV2 (EARNVAULT / USDG)
    role: vault
    address:
      value: "0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17, R-18, R-21]
  - label: Steer SPCX/USDG Uniswap v4 vault (BeaconProxy)
    role: vault
    address:
      value: "0x57b9b90610a4b9205c57fab92080e9cfbe7229f6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-19, R-33]
  - label: STOCK MEMES Omnipool (MEMESTOCKS)
    role: other
    address:
      value: "0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-20, R-24, R-21]
  - label: Protocol EOA (vault, stake and Morpho owner)
    role: admin
    address:
      value: "0x75741D131AbdD3973d6bA00f09948C15D138059d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-12, R-21]

metrics:
  - { kind: holders, value: 2030, currency: null, as_of: 2026-09-02T23:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xa3b6aee90017b72c0812dc1e013de70eb2917ba3 holders_count", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 2889181, currency: USD, as_of: 2026-09-02T23:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xa3b6aee90017b72c0812dc1e013de70eb2917ba3 lead Uniswap EARN/SPY pair marketCap", class: claim, receipt_ids: [R-4] }
  - { kind: volume_24h, value: 461012.52, currency: USD, as_of: 2026-09-02T23:40:00Z, window: 24h, method: "DexScreener lead Uniswap EARN/SPY pair 0x1fb9a450…3395b volume.h24; Robinhood chain slice for this pair only", class: claim, receipt_ids: [R-4] }
  - { kind: tvl, value: 200000, currency: USD, as_of: 2026-09-02T23:00:00Z, window: point, method: "@EARNONHOOD status 2095285645044568419 posted TVL just crossed $200k; site header prints em dash, not a dashboard figure", class: claim, receipt_ids: [R-22] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-6, R-7, R-8, R-9, R-21], result: "Token 0xa3b6…7ba3: eth_getCode 44 bytes EIP-1167 clone of 0x3Be8B97F…C599; name() EARN symbol() EARN decimals 18 totalSupply 1e29 (100,000,000,000e18); owner() 0xeb7c0347…0862. Blockscout is_contract true is_verified true name EARN proxy_type eip1167 implementation DopplerERC20V1; holders_count 2030; creator DopplerERC20V1Factory 0x1B37…b69a; creation tx 0xd923b6b7…c8e7 2026-07-23T16:16:15Z block 17423811 method handleOps via EntryPoint. Chain head 52961080." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:42:00Z, receipt_ids: [R-12, R-13, R-14, R-15, R-21], result: "NVDA vault 0x0059F8…fd6e eth_getCode 23321 bytes; Blockscout is_verified true name NvdaUsdgV4VaultV6; name() NVDA-USDG Vault Test V6 symbol() NVDA-USDG-T6; owner() 0x75741d13…059d (empty code); token0 USDG 0x5fc5360d…d168 token1 NVDA 0xd0601ce1…9EEC. NVDA zap 0xD47D11…6EFb is_verified true name NvdaUsdgV4ZapV6. GME vault 0x2D2656…d25a eth_getCode 23307 bytes is_verified false name GME-USDG Vault V6 owner() same EOA. GME zap 0xb25593…9f33 is_verified false, created by the same EOA." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:42:00Z, receipt_ids: [R-10, R-11, R-21], result: "Airlock 0xeb7c…0862 is_verified true name Airlock file src/Airlock.sol compiler v0.8.26 partially verified; owner() 0x21E2ce70…7A66. That address is_contract true is_verified true name SafeProxy implementation SafeL2 0x29fcB43b…C762; getThreshold() 3; getOwners() six EOAs; nonce 2. No EIP-1967 implementation slot on Airlock." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-02T23:40:00Z, receipt_ids: [R-4], result: "DexScreener latest/dex/tokens/0xa3b6…7ba3: 8 Uniswap pairs on chainId robinhood. Lead EARN/SPY pairAddress 0x1fb9a450…3395b (32-byte v4 pool id) quote 0x117cc213…4C0C SPY liquidity.usd 324223.38 volume.h24 461012.52 marketCap 2889181 fdv 2889181 pairCreatedAt 1784823375000 (2026-07-23T16:16:15Z). info.websites earnonhood.com and earnonhood.com/docs; socials x.com/EARNONHOOD." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-02T23:45:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "@EARNONHOOD bio CA 0xa3b6aee90017b72c0812dc1e013de70eb2917ba3 and website earnonhood.com/; DexScreener token info websites and twitter match; docs live at earnonhood.com/docs with Blockscout links to the NVDA and GME vaults." }
  - { id: REP-6, method: document-scope, checked_at: 2026-09-02T23:45:00Z, receipt_ids: [R-2, R-31, R-32, R-33, R-34], result: "Docs: protocol LIVE chain id 4663; deposit stock token or USDG, receive vault shares, strategy deploys into an onchain market, fees stay in the share. Fee split 85% vault / 15% strategy. Live contracts NVDA vault 0x0059F8…fd6e zap 0xD47D11…6EFb GME vault 0x2D2656…d25a zap 0xb25593…9f33. Omnipool create: 2–8 tokens, 0.3% swap fee, 90% LPs 10% EARN, no pause/fee-manager/pool-creator role. Stake 0xeE7a…D051. Morpho vault 0x8046…771d. Steer SPCX vault 0x57b9b9…229f6." }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:42:00Z, receipt_ids: [R-17, R-18, R-21], result: "Morpho vault 0x8046…771d eth_getCode 21808 bytes; Blockscout is_verified true name VaultV2; name() EARN symbol() EARNVAULT decimals 18; asset() USDG 0x5fc5360d…d168; totalAssets() 144040224 (144.040224 USDG, 6 decimals); owner() 0x75741d13…059d. Morpho curator page: performance fee 20% to 0x7574…059d, management fee 0%, owner and curator 0x7574…059d, total assets 144.04 USDG." }
  - { id: REP-8, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:42:00Z, receipt_ids: [R-16, R-19, R-20, R-21], result: "Stake 0xeE7a…D051 eth_getCode 6152 bytes; Blockscout is_verified false; owner() 0x75741d13…059d. Steer 0x57b9b9…229f6 eth_getCode 332 bytes BeaconProxy is_verified true name() STEER_UNIV4_VAULT_6 symbol() STEERUV46 holders_count 14. Omnipool 0x00e7…38A6 eth_getCode 17119 bytes is_verified false name() STOCK MEMES symbol() MEMESTOCKS holders_count 2. Lead DexScreener pair id is 32 bytes and is not an eth_getCode address." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Deposit a supported stock token, USDG or ETH and receive vault or Omnipool shares. Strategy vaults place the assets in a Uniswap v4 range; Omnipools are a shared-liquidity AMM of 2–8 tokens at a fixed 0.3% swap fee. Withdrawal burns shares for a proportional slice of the underlying. Stake page: protocol fees buy EARN for stakers.", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-2, R-31, R-34], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://earnonhood.com", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@EARNONHOOD", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xa3b6aee90017b72c0812dc1e013de70eb2917ba3", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-2, R-5, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: "EARN", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-6, R-21], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "Token owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 (Airlock); Airlock owner() is 3-of-6 Safe 0x21E2ce70511e4FE542a97708e89520471DAa7A66", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-10, R-11, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-8, field: control.owner, value: "NVDA vault, GME vault, stake and Morpho vault owner() 0x75741D131AbdD3973d6bA00f09948C15D138059d, an address with empty code; Morpho curator page names the same address as owner, curator, allocator and 20% performance-fee recipient", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-12, R-14, R-16, R-18, R-21], reproduction_ids: [REP-2, REP-7], supersedes: null }
  - { id: CLM-9, field: control.threshold, value: "Airlock-owning Safe getThreshold() 3 of 6 owners", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-11, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: control.timelock, value: "No timelock contract was opened on the vault/stake/Morpho owner path; constructor of NvdaUsdgV4VaultV6 sets 0x75741d… three times", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-11, field: security.audit, value: "No audit report URL was located on the site, docs, X profile or DexScreener token info this pass", class: unknown, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2030, class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 2889181, class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-4], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Token created 2026-07-23 via DopplerERC20V1Factory 0x1B37…b69a as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599; creation tx is EntryPoint.handleOps. Launch path is Doppler/Airlock, not Pons. Lead book is Uniswap v4 EARN/SPY pool id 0x1fb9a450…3395b vs SPY 0x117cc213…4C0C.", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-4, R-7, R-8, R-9], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-4, REP-6], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x0059F82A76B1Cb261ad71fA117a36CC0BB3Dfd6e", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: deployment.address, value: "0x2D26567eE8A4A24eaE17E8385380543E810Dd25a", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-2, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: deployment.address, value: "0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-20, R-24], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-19, field: deployment.address, value: "0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-17, R-18, R-32], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Omnipool create page: 2–8 tokens, fixed 0.3% swap fee, 90% of fees to LPs and 10% to EARN; no pause, fee-manager or pool-creator role is assigned. Article 2026-08-25: protocol 10% is used to buy EARN for stakers.", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-27, R-34], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Docs: when LP fees are collected, 85% remains with the vault and 15% is charged on newly collected fees. Price guard uses TWAP and deviation checks.", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-2], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "Stake page: all protocol revenue and fees are used to buy EARN and distribute it to stakers; 5-day epoch; withdrawals always available; pausing can only stop new stakes. Page printed TOTAL STAKED 0 EARN and no active epoch this pass.", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-31], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-23, field: other, value: "The name EARN collides with Robinhood Earn, the Morpho-based USDG product inside the Robinhood app. This packet is earnonhood.com / @EARNONHOOD / token 0xa3b6…7ba3, which is a separate protocol with its own token.", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: identity.repository, value: "NULL — no public EARN contracts repository linked from the site, docs, X bio or DexScreener this pass", class: unknown, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.primary-leaf, value: yield/savings-vault, class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-2], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: 144.040224, class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-18, R-21], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: "Official account posted TVL just crossed $200k (2026-09-02); earlier post 2026-08-31 said $112k with $52k Omnipools and $60k automated Uniswap v4 vaults", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-22, R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.proxy, value: "EARN token is an EIP-1167 clone of DopplerERC20V1; Steer SPCX vault is an EIP-1967 beacon proxy; NVDA vault, Airlock and Morpho VaultV2 are not EIP-1967 proxies", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-5, R-12, R-17, R-19, R-21], reproduction_ids: [REP-1, REP-2, REP-7, REP-8], supersedes: null }
  - { id: CLM-29, field: taxonomy.secondary-leaf, value: credit/morpho-curator, class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-18, R-32], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-30, field: "account.@earnhood.flag", value: "handle-collision", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: communications.status, value: "Stake page labels 0xeE7a…D051 View verified contract; Blockscout is_verified false this pass", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-16, R-31], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-32, field: communications.status, value: "Blockscout api/v2/addresses/0xeE7abf316E2824FbFB73aa3EA61217Dd600bD051 is_verified false", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-16], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-33, field: other, value: "NVDA vault ERC-20 name is NVDA-USDG Vault Test V6; GME vault name is GME-USDG Vault V6. Docs still list both as live contracts.", class: verified, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-2, R-12, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-34, field: relationship, value: "@EARNONHOOD posted Omnipool zaps are powered by @rialto_xyz and automated Uniswap v4 vaults sit on Steer infrastructure with Merkl rewards", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-25, R-33], reproduction_ids: [], supersedes: null }
  - { id: CLM-35, field: identity.alias, value: "EARN Protocol", class: claim, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-2], reproduction_ids: [REP-6], supersedes: null }

conflicts:
  - id: CON-1
    field: communications.status
    claim_ids: [CLM-31, CLM-32]
    material_effect: "The stake page presents 0xeE7a…D051 as a verified contract; the explorer flag this pass is is_verified false. A compiled profile must not treat the stake source as verified from the page label alone."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Official account posts TVL crossed $200k"
    summary: "@EARNONHOOD posted that TVL just crossed $200k through automated liquidity vaults and Omnipools."
    occurred_at: 2026-09-02T23:00:00Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-2
    type: company
    title: "Three new Omnipools posted live"
    summary: "@EARNONHOOD posted three Omnipools live: AI Index, US Bluechip, and Aero + Defense."
    occurred_at: 2026-09-02T19:52:38Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-3
    type: ct
    title: "@0xDeployer names EARN stock-paired vaults"
    summary: "@0xDeployer posted that EARN's token is paired with SPY and the protocol builds stock-token vaults and Omnipools."
    occurred_at: 2026-09-02T15:07:00Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [relationship, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-28]
  - id: EVT-4
    type: company
    title: "STOCK MEMES Omnipool posted live"
    summary: "@EARNONHOOD posted Omnipool 0x00e7…38A6 for AI, BONER, MOO, SPACEHOOD and OPTIMUS."
    occurred_at: 2026-09-02T14:03:03Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-5
    type: company
    title: "TSLA, QQQ and RDDT vaults posted live"
    summary: "@EARNONHOOD posted new automated Uniswap vaults for TSLA, QQQ and RDDT, paired with tokenized S&P 500."
    occurred_at: 2026-09-01T16:47:00Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-35]
  - id: EVT-6
    type: company
    title: "Account posts vault TVL crossed $112k"
    summary: "@EARNONHOOD posted $112k TVL: $52k Omnipools and $60k automated Uniswap v4 vaults, with zaps live."
    occurred_at: 2026-08-31T15:24:43Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-26]
  - id: EVT-7
    type: company
    title: "Omnipool zaps posted live via Rialto"
    summary: "@EARNONHOOD posted Omnipool zaps live: deposit ETH or USDG, split across up to eight assets via Rialto."
    occurred_at: 2026-08-30T17:13:30Z
    observed_at: 2026-09-02T23:45:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-8
    type: onchain
    title: "EARN token created via Doppler factory"
    summary: "DopplerERC20V1Factory created EIP-1167 EARN 0xa3b6…7ba3 in tx 0xd923b6… via EntryPoint.handleOps."
    occurred_at: 2026-07-23T16:16:15Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [deployment.address, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-7, R-8]

receipts:
  - { id: R-1, publisher: EARN, title: "earnonhood.com", url: "https://earnonhood.com", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-23], excerpt: "Title EARN on Robinhood chain. App surfaces /vault, /omni, /steer, /lend, /stake, /docs. Header TVL prints an em dash. Same host as the docs page that lists live vault contracts." }
  - { id: R-2, publisher: EARN, title: "Docs · EARN on Robinhood Chain", url: "https://earnonhood.com/docs", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16, CLM-17, CLM-21, CLM-25, CLM-33, CLM-35], excerpt: "PROTOCOL STATUS LIVE Robinhood Chain · Chain ID 4663. Users supply capital, EARN deploys liquidity, trading creates yield, value returns to the vault. Fees 85% vault · 15% strategy. Live contracts: NVDA/USDG Vault 0x0059F82A76B1Cb261ad71fA117a36CC0BB3Dfd6e, zap 0xD47D1187044B40DB1375ce60682AAC00a5356EFb, GME/USDG Vault 0x2D26567eE8A4A24eaE17E8385380543E810Dd25a, zap 0xb255934707e0796A8da4af7342002F8ef24d9f33." }
  - { id: R-3, publisher: EARN (@EARNONHOOD), title: "X profile @EARNONHOOD", url: "https://x.com/EARNONHOOD", published_at: "2026-07-23T08:03:00Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-23], excerpt: "EARN @EARNONHOOD. Bio: DeFi for RWAs live on Robinhood 0xa3b6aee90017b72c0812dc1e013de70eb2917ba3. Website earnonhood.com/. Joined July 2026. Followers 2039. Pinned 2026-08-29: deposit into automated liquidity vaults or Omnipools." }
  - { id: R-4, publisher: DexScreener, title: "EARN token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xa3b6aee90017b72c0812dc1e013de70eb2917ba3", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-14, CLM-15], excerpt: "8 Uniswap pairs chainId robinhood. Lead EARN/SPY pairAddress 0x1fb9a45079b017a6661016ba7dea29e1c4864b0874c21f63e137a52e71c3395b liquidity.usd 324223.38 volume.h24 461012.52 marketCap 2889181 pairCreatedAt 1784823375000. Quote SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C. info.websites https://earnonhood.com/ and https://earnonhood.com/docs socials https://x.com/EARNONHOOD." }
  - { id: R-5, publisher: Blockscout, title: "Address 0xa3b6…7ba3", url: "https://robinhoodchain.blockscout.com/address/0xa3b6aee90017b72c0812dc1e013de70eb2917ba3", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-28, EVT-8], excerpt: "hash 0xA3b6AEe90017b72c0812dC1e013De70eB2917ba3 is_contract true is_verified true name EARN proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xd923b6b7099336380f313853f967e5e1bec1a712e81af836c9efb0285643c8e7. Token EARN / EARN holders_count 2030 total_supply 1e29 decimals 18." }
  - { id: R-6, publisher: Blockscout, title: "Token page EARN", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xa3b6aee90017b72c0812dc1e013de70eb2917ba3", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-12], excerpt: "name EARN symbol EARN decimals 18 holders_count 2030 total_supply 100000000000000000000000000000 circulating_market_cap null." }
  - { id: R-7, publisher: Blockscout, title: "Creation tx 0xd923b6…", url: "https://robinhoodchain.blockscout.com/tx/0xd923b6b7099336380f313853f967e5e1bec1a712e81af836c9efb0285643c8e7", published_at: "2026-07-23T16:16:15Z", accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-14, EVT-8], excerpt: "status ok timestamp 2026-07-23T16:16:15.000000Z block 17423811 method handleOps from 0xc8564726Aaa50cF006EA28C5ef2daDD85A26B723 to EntryPoint 0x0000000071727De22E5E9d8BAf0edAc6f37da032. Token creator_address_hash is DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-8, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, EVT-8], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is_contract true is_verified true name DopplerERC20V1Factory creator 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768." }
  - { id: R-9, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-28], excerpt: "is_contract true is_verified true name DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a file_path src/tokens/DopplerERC20V1.sol partially verified creator 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-10, publisher: Blockscout, title: "Airlock 0xeb7c…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "is_contract true is_verified true name Airlock compiler v0.8.26+commit.8a97fa7a file_path src/Airlock.sol partially verified constructor_args 0x…edeaa06e2eb42a5c19ce27c6cffb36fd4fe1eda8. eth_call owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66." }
  - { id: R-11, publisher: Blockscout, title: "Airlock owner Safe 0x21E2…7A66", url: "https://robinhoodchain.blockscout.com/address/0x21E2ce70511e4FE542a97708e89520471DAa7A66", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-9], excerpt: "is_contract true is_verified true name SafeProxy proxy_type master_copy implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762. RPC getThreshold() 3 getOwners() six addresses nonce 2." }
  - { id: R-12, publisher: Blockscout, title: "NVDA/USDG vault 0x0059F8…fd6e", url: "https://robinhoodchain.blockscout.com/address/0x0059F82A76B1Cb261ad71fA117a36CC0BB3Dfd6e", published_at: "2026-07-23T11:23:25Z", accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-16, CLM-33], excerpt: "is_contract true is_verified true name NvdaUsdgV4VaultV6 compiler v0.8.26 file contracts/v4/NvdaUsdgV4VaultV6.sol creator 0x75741D131AbdD3973d6bA00f09948C15D138059d tx 0x07532fe08a179ac0f6e754bed7850e0e9453f0ad176e3c59f25fe9e60336e9d0 2026-07-23T11:23:25Z. Token name NVDA-USDG Vault Test V6 symbol NVDA-USDG-T6 holders_count 8. owner() 0x75741d…059d. token0 USDG token1 NVDA." }
  - { id: R-13, publisher: Blockscout, title: "NVDA zap 0xD47D11…6EFb", url: "https://robinhoodchain.blockscout.com/address/0xD47D1187044B40DB1375ce60682AAC00a5356EFb", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "is_contract true is_verified true name NvdaUsdgV4ZapV6 creator 0x75741D131AbdD3973d6bA00f09948C15D138059d creation_transaction_hash 0x8f1a1db67ff8956ca23a417038a958344ea850e9d84ec92396bf7509d2597a60." }
  - { id: R-14, publisher: Blockscout, title: "GME/USDG vault 0x2D2656…d25a", url: "https://robinhoodchain.blockscout.com/address/0x2D26567eE8A4A24eaE17E8385380543E810Dd25a", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-17, CLM-33], excerpt: "is_contract true is_verified false name GME-USDG Vault V6 creator 0x75741D131AbdD3973d6bA00f09948C15D138059d. Token symbol GME-USDG-V6 holders_count 2. owner() 0x75741d…059d. eth_getCode 23307 bytes." }
  - { id: R-15, publisher: Blockscout, title: "GME zap 0xb25593…9f33", url: "https://robinhoodchain.blockscout.com/address/0xb255934707e0796A8da4af7342002F8ef24d9f33", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "is_contract true is_verified false name null creator 0x75741D131AbdD3973d6bA00f09948C15D138059d creation_transaction_hash 0x95dc1800ca73b1beedeb050fceac0287a2c2f4d79b46752b5b8b8a1a005e1ae8." }
  - { id: R-16, publisher: Blockscout, title: "Stake 0xeE7a…D051", url: "https://robinhoodchain.blockscout.com/address/0xeE7abf316E2824FbFB73aa3EA61217Dd600bD051", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-31, CLM-32], excerpt: "is_contract true is_verified false name null creator 0x75741D131AbdD3973d6bA00f09948C15D138059d. eth_getCode 6152 bytes. owner() 0x75741d131abdd3973d6ba00f09948c15d138059d." }
  - { id: R-17, publisher: Blockscout, title: "Morpho VaultV2 0x8046…771d", url: "https://robinhoodchain.blockscout.com/address/0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19, CLM-28], excerpt: "is_contract true is_verified true name VaultV2 creator 0x0FBad98595b0186dA120E41f77C102beb49f803c. Token name EARN symbol EARNVAULT holders_count 3 decimals 18. owner() 0x75741d…059d asset() USDG 0x5fc5360d0400a0fd4f2af552add042d716f1d168." }
  - { id: R-18, publisher: Morpho, title: "EARN Morpho vault curator page", url: "https://curator.morpho.org/vaults/4663/0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-26, CLM-29], excerpt: "Robinhood Chain vault EARN / USDG 0x8046…771d. Total Assets 144.04 USDG. Performance fee 20% recipient 0x7574…059d. Management fee 0%. Owner Address 0x7574…059d. Curator Address 0x7574…059d. Public Allocator 0x7574…059d." }
  - { id: R-19, publisher: Blockscout, title: "Steer SPCX vault 0x57b9b9…229f6", url: "https://robinhoodchain.blockscout.com/address/0x57b9b90610a4b9205c57fab92080e9cfbe7229f6", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-28], excerpt: "is_contract true is_verified true name BeaconProxy proxy_type eip1967_beacon creator 0x5c7d564fA5CE0e874367121E33c1ff10dB2115dC. Token name STEER_UNIV4_VAULT_6 symbol STEERUV46 holders_count 14." }
  - { id: R-20, publisher: Blockscout, title: "STOCK MEMES Omnipool 0x00e7…38A6", url: "https://robinhoodchain.blockscout.com/address/0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-18, EVT-4], excerpt: "is_contract true is_verified false name STOCK MEMES. Token symbol MEMESTOCKS holders_count 2 total_supply 1031295113486970079346. eth_getCode 17119 bytes. name() STOCK MEMES symbol() MEMESTOCKS." }
  - { id: R-21, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, ERC-20 views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-7, CLM-8, CLM-9, CLM-26, CLM-28], excerpt: "eth_blockNumber 0x3281f38 (52961080). Token clone bytecode 0x3d3d3d3d363d3d37363d73 3be8b97f…c599. owner() token=Airlock, NVDA/GME/stake/Morpho=0x75741d… (code empty), Airlock=Safe 0x21E2… getThreshold 3. Morpho totalAssets 144040224. No EIP-1967 impl slot on token, NVDA vault, Airlock or Morpho." }
  - { id: R-22, publisher: EARN (@EARNONHOOD), title: "TVL just crossed $200k", url: "https://x.com/EARNONHOOD/status/2095285645044568419", published_at: "2026-09-02T23:00:00Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-1], excerpt: "TVL just crossed $200k. EARN is proving tokenized stocks can become productive, yield-generating assets through automated liquidity vaults and Omnipools. The biggest EARN campaign yet is about to go live, we're just getting started." }
  - { id: R-23, publisher: EARN (@EARNONHOOD), title: "3 new EARN Omnipools are live", url: "https://x.com/EARNONHOOD/status/2095238488719278573", published_at: "2026-09-02T19:52:38Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "3 new EARN Omnipools are live. AI Index NVDA · MU · TSM · AMD · ASML · ETH. US Bluechip QQQ · SPY · ETH. Aero + Defense PLTR · SPCX · BA · RCAT · LMT · ETH. Deposit once to get exposure to every asset in the pool while earning fees from onchain arbitrage." }
  - { id: R-24, publisher: EARN (@EARNONHOOD), title: "STOCK MEMES Omnipool live", url: "https://x.com/EARNONHOOD/status/2095150513520005297", published_at: "2026-09-02T14:03:03Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-18, EVT-4], excerpt: "A new Omnipool is live for the 5 largest memes paired with stocks on Robinhood. $AI, $BONER, $MOO, $SPACEHOOD, $OPTIMUS. https://earnonhood.com/omni/pools/0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6" }
  - { id: R-25, publisher: EARN (@EARNONHOOD), title: "Zaps are now live for EARN Omnipools", url: "https://x.com/EARNONHOOD/status/2094111279765959098", published_at: "2026-08-30T17:13:30Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-34, EVT-7], excerpt: "Zaps are now live for EARN Omnipools. You can deposit ETH or USDG into any pool and EARN automatically splits it into the right ratio across up to 8 assets. Powered by @rialto_xyz. One deposit gives you multi-asset liquidity that starts earning yield immediately." }
  - { id: R-26, publisher: EARN (@EARNONHOOD), title: "Vault TVL crossed $112k", url: "https://x.com/EARNONHOOD/status/2094446289811276162", published_at: "2026-08-31T15:24:43Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-6], excerpt: "Just days after opening, EARN vault TVL has crossed $112k. $52k is in Omnipools and $60k in automated Univ4 vaults, with one-click zaps now live across all products." }
  - { id: R-27, publisher: EARN (@EARNONHOOD), title: "Permissionless Omnipools article", url: "https://x.com/EARNONHOOD/article/2092303684428325256", published_at: "2026-08-25T00:00:00Z", accessed_at: 2026-09-02T23:30:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [CLM-20], excerpt: "Anyone will be able to create their own shared-liquidity pool containing up to 8 tokens. Of the fees generated by each pool, 90% compounds back to liquidity providers while the EARN protocol receives 10%. That protocol share is then used to buy $EARN from the open market and distribute it to stakers." }
  - { id: R-28, publisher: deployer (@0xDeployer), title: "EARN named as stock-paired vaults", url: "https://x.com/0xDeployer/status/2095166817409044550", published_at: "2026-09-02T15:07:00Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "one that comes to mind is @EARNONHOOD. their protocol token is paired with SPY and they are building onchain liquidity vaults for stock tokens and omnipools which give you exposure to yield from multiple assets via a single pool." }
  - { id: R-29, publisher: DefiLlama, title: "Protocols list search for EARN on Robinhood", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-02T23:35:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "No protocol row named EARN / earnonhood on Robinhood Chain. Nearby Earn-named rows are other chains (Bitway Earn, Yearn, Ribbon Earn). Robinhood Chain rows include Pons, up, SwapHood, Hood Index, not this product." }
  - { id: R-30, publisher: X, title: "User search EARNONHOOD", url: "https://x.com/search?q=EARNONHOOD&f=user", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-30], excerpt: "EARN @EARNONHOOD, 2039 followers, bio DeFi for RWAs live on Robinhood plus CA 0xa3b6…7ba3. Separate account Earn HooD @earnhood, 24 followers, bio EarnHooD together. Official DexScreener and site name @EARNONHOOD only." }
  - { id: R-31, publisher: EARN, title: "Stake page", url: "https://earnonhood.com/stake", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-22, CLM-31], excerpt: "All protocol revenue and fees are used to buy EARN and distribute it to EARN stakers. TOTAL STAKED 0 EARN. EPOCH ENDS No active epoch. Withdrawals Always available. Pausing can only stop new stakes. SMART CONTRACT 0xeE7a…D051 View verified contract → robinhoodchain.blockscout.com/address/0xeE7abf316E2824FbFB73aa3EA61217Dd600bD051." }
  - { id: R-32, publisher: EARN, title: "Lend page", url: "https://earnonhood.com/lend", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-29], excerpt: "LIVE ON MORPHO. Lend USDG or borrow against NVDA, GME or CASHCAT. EARN MORPHO VAULT 0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d via curator.morpho.org/vaults/4663/0x8046118a5B0D1BCBcbd4d5f2C9AA9eecC5bf771d. Receipt shares EARNVAULT." }
  - { id: R-33, publisher: EARN, title: "Steer automated vaults", url: "https://earnonhood.com/steer", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-34], excerpt: "Automated liquidity vaults. Built on Steer infrastructure. Live GME/USDG, SPY/USDG, NVDA/USDG, SPCX/USDG, HIMS/USDG, RDDT/SPY, SPY/TSLA, SPY/QQQ. SELECTED VAULT CONTRACT 0x57b9b90610a4b9205c57fab92080e9cfbe7229f6. Liquid Arc recenters when price drifts." }
  - { id: R-34, publisher: EARN, title: "Permissionless Omnipool creator", url: "https://earnonhood.com/omni/create", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-20], excerpt: "LIVE LAUNCHER · V3. Select 2–8 tokens, set weights, seed liquidity atomically. No approval from EARN is required. Fixed 0.3% swap fee. 90% of fees to LPs, 10% to EARN. CREATOR AUTHORITY No pause, fee-manager or pool-creator role is assigned." }
  - { id: R-35, publisher: EARN (@EARNONHOOD), title: "TSLA QQQ RDDT vaults live", url: "https://x.com/EARNONHOOD/status/2094829536596648110", published_at: "2026-09-01T16:47:00Z", accessed_at: 2026-09-02T23:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "New automated liquidity vaults are live for $TSLA, $QQQ and $RDDT. Deposit once and the vaults dynamically rebalance @uniswap liquidity to capture volatility and maximise trading fees. Now paired with tokenized S&P500 for correlated liquidity and greater capital efficiency." }

gaps:
  - { priority: P0, question: "Can EOA 0x75741d… rebalance, pause or move NVDA/GME vault inventory without a timelock, and do the unverified GME vault and stake match the docs 85/15 fee and withdrawal path?", checked: "NvdaUsdgV4VaultV6 source verified; owner() EOA empty code; GME vault and stake is_verified false; no timelock address opened, 2026-09-02", next: "read setter access in NvdaUsdgV4VaultV6 and verify GME/stake source" }
  - { priority: P0, question: "Which onchain balances sum to the posted $200k TVL (Omnipools vs Steer vaults vs strategy vaults vs Morpho 144 USDG)?", checked: "Morpho totalAssets 144.040224 USDG; site header TVL em dash; DexScreener EARN/SPY liq $324k is the token book, not vault TVL, 2026-09-02", next: "eth_call share supply and underlying on each listed vault and Omnipool" }
  - { priority: P1, question: "Is there an audit whose scope matches NvdaUsdgV4VaultV6, the zaps, Omnipool AMM and Morpho curator config?", checked: "docs, site, X profile, DexScreener, GitHub search earnonhood / NvdaUsdgV4VaultV6, 2026-09-02", next: "record any report URL as a claim when published" }
  - { priority: P1, question: "Who holds the six Airlock Safe keys, and does that Safe retain token-owner rights (mint, blacklist, upgrade) on DopplerERC20V1?", checked: "getOwners six EOAs, threshold 3; DopplerERC20V1 source not read this pass, 2026-09-02", next: "read DopplerERC20V1 owner-only functions against Airlock" }
  - { priority: P2, question: "Do telegram, discord or a public repository exist?", checked: "X bio, DexScreener socials, site and docs; no telegram or github link this pass", next: "leave NULL unless a primary page names one" }
  - { priority: P2, question: "Are the three 2026-09-02 themed Omnipools (AI Index, US Bluechip, Aero + Defense) published as contract addresses?", checked: "post has no CA; only STOCK MEMES 0x00e7… was linked, 2026-09-02", next: "open /omni/pools once the app returns a pool list without a wallet" }
---

# EARN — research packet

## What it is

A yield layer for tokenized stocks on Robinhood Chain: deposits go into Uniswap v4 strategy vaults or into permissionless Omnipools of up to eight tokens, and swap fees accrue to the position. Users deposit a stock token, USDG or ETH on earnonhood.com, receive vault or pool shares, and withdraw by burning those shares. @EARNONHOOD runs the app. $EARN is a Doppler-cloned ERC-20; the lead book is EARN/SPY.

Themes: vault, rwa, stock-paired:NVDA, lending, memecoin

## Why it matters

EARN is a live stock-token yield surface on chain 4663: strategy vaults, Omnipools, a Morpho USDG vault and Steer LP vaults sit under one app. [claim R-2 R-32 R-33]

The EARN token trades. DexScreener's lead Uniswap EARN/SPY book printed about $324k liquidity and about $461k of 24h volume this pass, which is the token pair, not vault TVL. [claim R-4]

Census lifecycle was announced. The token, NVDA/USDG vault and a live Uniswap book are on 4663, which meets the mainnet bar. [verified R-5 R-12]

## What could go wrong

Strategy vault, stake and Morpho `owner()` values are one EOA with empty code. Docs give that path rebalance, pause and fee-collection rights; GME vault and stake source are unverified, so those limits are unread. [verified R-12 R-16] [claim R-2]

Official TVL ($200k, then $112k) is an account post. Morpho holds 144.04 USDG. The EARN/SPY book is a different number. Mixing those slices overstates what any one contract holds. [claim R-4 R-22] [verified R-18]

The word Earn also names Robinhood's in-app Morpho USDG product, which has no EARN token. Pairing that product with this CA mixes two systems. [claim R-3 R-23]

## Product and mechanics

$EARN is a fixed-supply ERC-20 (100,000,000,000e18) named EARN / EARN. Verified source is an EIP-1167 clone of DopplerERC20V1. Launchpad is DopplerERC20V1Factory / Airlock, not Pons. Creation tx 0xd923b6… is EntryPoint.handleOps at 2026-07-23T16:16:15Z. Pair asset on the lead book is SPY 0x117cc213…4C0C. Venue is Uniswap; DexScreener pairAddress 0x1fb9a450…3395b is a 32-byte v4 pool id, not a 20-byte contract. Extra Uniswap EARN/ETH and EARN/USDG books exist. [verified R-5 R-7 R-8 R-4]

Docs describe strategy vaults: deposit a stock token, USDG or both, receive proportional shares, the strategy places liquidity in an active market, swap fees stay in the share. Fee split 85% vault / 15% strategy on newly collected fees. Single-token zaps swap the missing leg. Withdrawal burns shares for a proportional slice of both assets and does not promise the original mix. NVDA/USDG vault 0x0059F8…fd6e is verified NvdaUsdgV4VaultV6; its ERC-20 name is NVDA-USDG Vault Test V6. GME/USDG vault 0x2D2656…d25a exists with code and is unverified. [verified R-12 R-14] [claim R-2]

Omnipools are a separate AMM: 2–8 tokens in one pool, fixed 0.3% swap fee, 90% of fees to LPs and 10% to EARN, no pause or fee-manager role on the create page. STOCK MEMES / MEMESTOCKS at 0x00e7…38A6 is the one pool CA posted this pass (AI, BONER, MOO, SPACEHOOD, OPTIMUS). Zaps that split ETH or USDG across the basket are posted as Rialto-routed. [verified R-20] [claim R-25 R-34]

A Morpho VaultV2 at 0x8046…771d takes USDG and issues EARNVAULT shares. A Steer BeaconProxy at 0x57b9b9…229f6 is the selected SPCX/USDG automated range. The stake page says protocol fees buy EARN for stakers; it printed 0 EARN staked and no active epoch this pass. [verified R-17 R-19] [claim R-31 R-33]

## Control and security

Token `owner()` is Airlock 0xeb7c…0862. Airlock `owner()` is SafeProxy 0x21E2…7A66, implementation SafeL2, `getThreshold()` 3 of 6 owners. That Safe is shared launch infrastructure (the same Airlock owns the Statics and Artificial Inu tokens) and is not the vault operator. [verified R-10 R-11 R-21]

NVDA vault, GME vault, stake and Morpho vault `owner()` return EOA 0x75741D131AbdD3973d6bA00f09948C15D138059d (empty code). The same EOA created the NVDA vault, both zaps, the GME vault and the stake contract. Morpho curator UI names it owner, curator, allocator and 20% performance-fee recipient. No timelock address was opened on that path. NvdaUsdgV4VaultV6 constructor args set 0x75741d… three times. [verified R-12 R-18 R-21]

The stake page labels 0xeE7a…D051 as a verified contract; Blockscout `is_verified` is false. GME vault and the posted Omnipool are also unverified. Steer is a verified BeaconProxy shell; the implementation was not opened. [verified R-16 R-14 R-20] [claim R-31]

No audit report URL was located on the site, docs, X profile or DexScreener token info. [unknown]

## Team and provenance

@EARNONHOOD bio carries CA 0xa3b6…7ba3 and links earnonhood.com. DexScreener token metadata lists the same site, docs and handle. Docs live on that host and link the NVDA and GME vaults on Blockscout. [verified R-2 R-3 R-4]

No legal entity is named on the site or docs. No public repository was linked. GitHub search earnonhood / NvdaUsdgV4VaultV6 did not return a project repo. [unknown]

handle-collision: Earn HooD @earnhood (24 followers) is a different handle. Site and DexScreener name @EARNONHOOD only. [claim R-30]

Census LONG, Statics and Artificial Inu share the Doppler/Airlock factory that created the token. They do not share earnonhood.com, the vaults, or this CA. Vynex is another savings-vault row; Bankr is a relationship the account posted, not a shared identity. [inference R-7 R-8]

## Economics and activity

DexScreener Uniswap EARN/SPY 0x1fb9a450… at 2026-09-02T23:40:00Z: liquidity.usd 324223.38; volume.h24 461012.52; marketCap 2889181; fdv 2889181. That is the token pair, not protocol TVL. [claim R-4]

Blockscout holders_count 2030. Total supply 100,000,000,000e18. [verified R-6]

@EARNONHOOD posted TVL $200k on 2026-09-02 and $112k on 2026-08-31 ($52k Omnipools, $60k automated Uniswap v4 vaults). The site header prints an em dash. Morpho vault totalAssets is 144.040224 USDG. No DefiLlama protocol row for earnonhood was listed. [claim R-22 R-26 R-29] [verified R-18]

Stake page printed TOTAL STAKED 0 EARN and no active epoch. NVDA vault holders_count 8; GME vault 2; Omnipool 2; Steer vault 14; Morpho EARNVAULT 3. [claim R-31] [verified R-12 R-14 R-17 R-19 R-20]

## Material risks

- Vault, stake and Morpho owner is one EOA; no timelock was opened. [verified R-12 R-21]
- GME vault, stake and Omnipool source are unverified; the stake page still says verified. [verified R-14 R-16] [claim R-31]
- Posted TVL, Morpho 144 USDG and the EARN/SPY book are different slices. [claim R-4 R-22] [verified R-18]
- Name collision with Robinhood Earn (in-app Morpho USDG, no token). [claim R-3]
- No audit report was located. [unknown]
- Permissionless Omnipools can include unaudited ERC-20s; the create page says a listing is not an endorsement. [claim R-34]

## Verification passes

- Receipts: earnonhood.com, /docs, /stake, /lend, /steer, /omni/create, X profile and seven posts, @0xDeployer, DexScreener, Blockscout token/tx/factory/Airlock/Safe/vaults/zaps/stake/Morpho/Steer/Omnipool, Morpho curator, RPC, and Llama protocols list were opened on 2026-09-02 and excerpts copied from the responses. [verified R-2 R-4 R-5 R-12 R-21]
- Numbers: DexScreener liquidity and 24h volume are the Uniswap EARN/SPY book 0x1fb9a450…, not all EARN pairs and not vault TVL. Holders 2030 is all token holders. Morpho 144.040224 USDG is totalAssets on 0x8046…771d. Official $200k remains class claim. [claim R-4 R-6 R-18 R-22]
- Adversarial: the strongest contrary reading is that this is Robinhood Earn, the in-app Morpho USDG product. That product has no EARN token and does not use earnonhood.com; this token, NVDA vault and Omnipool are separate 4663 contracts. A weaker contrary reading is that EARN is only a Doppler memecoin: the token is a Doppler/Airlock clone, but NvdaUsdgV4VaultV6 verified source and Morpho VaultV2 exist with code. [inference R-3 R-5 R-12 R-17]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census row earn-protocol (lifecycle announced), content/projects/earn-protocol.yaml, content/pulled/earn-protocol.yaml (pulled_at 2026-09-02T21:05:36Z, head 52877457, token 0xa3b6… owner Airlock, EARN/SPY pair 0x1fb9a450…), feed/earn-protocol.yaml, sources/earn-protocol.yaml and research/earn-protocol.md read before collection.
- Site: https://earnonhood.com, /docs, /vault, /omni/create, /omni/pools, /omni/pools/0x00e7…38A6, /stake, /lend, /steer, /maker, /stocks. SPA; TVL header em dash. No telegram or github in those pages.
- X: profile @EARNONHOOD; posts 2095285645044568419, 2095238488719278573, 2095150513520005297, 2094829536596648110, 2094446289811276162, 2094111279765959098; article 2092303684428325256; @0xDeployer 2095166817409044550. Lookalike @earnhood recorded.
- Explorer: Blockscout api/v2 with a browser User-Agent. Token, token page, creation tx, Doppler factory and implementation, Airlock, Safe, NVDA vault/zap, GME vault/zap, stake, Morpho VaultV2, Steer BeaconProxy, STOCK MEMES Omnipool.
- RPC: https://rpc.mainnet.chain.robinhood.com eth_getCode, owner(), name(), symbol(), decimals(), totalSupply(), token0/token1, asset(), totalAssets(), getThreshold(), getOwners(), EIP-1967 slots. Chain head at token read 52961080; later 52962331.
- DexScreener latest/dex/tokens/0xa3b6…; api.llama.fi/protocols (no earnonhood row); curator.morpho.org/vaults/4663/0x8046…771d.
- GitHub web search earnonhood / NvdaUsdgV4VaultV6: no project repository.
- Possible matches recorded: long, statics-protocol, artificial-inu, vynex, bankr. Name collision outside census: Robinhood Earn (Morpho USDG in the Robinhood app).
- Allowed path this run: this packet only. No content/ writes. No push.
