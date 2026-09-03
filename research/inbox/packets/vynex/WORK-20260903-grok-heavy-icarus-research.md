---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: vynex
name: Vynex
packet_tier: seed
as_of: 2026-09-03T03:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [vynex]
allowed_paths:
  - research/inbox/packets/vynex/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Vynex
  aliases: [UseVynex, YieldShares]
  symbols: [VYNEX]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.usevynex.org
  official_handle: "@UseVynex"
  repository: "NULL — config.js links.contracts is https://github.com with no org or repo path; site, docs, X bio and GitHub search vynex/usevynex/YieldShares did not name a project repository this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "VYNEX is a PonsV2LauncherToken created by PonsV2LaunchAndBuy.launchAndBuy; the vault factory and YieldShares contracts are not Pons contracts"
        - "No shared domain or handle"
    - slug: earn-protocol
      signals: [other]
      contrary_signals:
        - "Census EARN is earnonhood.com / @EARNONHOOD with token 0xa3b6aee90017b72c0812dc1e013de70eb2917ba3"
        - "Vynex is usevynex.org / @UseVynex with token 0x8cF33E3026604Bd85677e7Bc6E04d256571b6653"
        - "Both list NVDA vaults and Morpho USDG routing; domains, handles and reproduced addresses differ"
    - slug: denar
      signals: [other]
      contrary_signals:
        - "Census Denar is an isolated money market at denar.markets / @DenarMarkets"
        - "Vynex is a YieldShares vault layer plus one Morpho NVDA market listed on usevynex.org"
        - "No shared domain, handle or reproduced address"
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census Longbow is a Morpho credit overlay at longbow.cash / @longbowlend"
        - "Vynex is usevynex.org / @UseVynex; Longbow's collateral set is not the Vynex factory vault list"
        - "No shared domain, handle or reproduced address"
    - slug: robinhood-index-vaults
      signals: [other]
      contrary_signals:
        - "Census Robinhood Index Vaults is a testnet-only rIDX repository, not usevynex.org"
        - "Vynex YieldShares are per-asset ERC-20 vaults on chain 4663, not an rIDX basket"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: yield/savings-vault
  secondary_leaves: [credit/isolated-money-market]
  mechanism_tags: [vault, lending, rwa, stock-paired, oracle, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Token 0x8cF33E30… is a verified PonsV2LauncherToken on 4663 with a live Uniswap v4 VYNEX/ETH book. VaultFactory 0x6d48643d…, routed ys-USDG 0x01680B41… and ys-NVDA 0xf8670be5… have non-empty code. Census announced is below that bar. Factory and vault source are unverified; a Morpho market id in config.js did not decode on Morpho 0x9D53d5E3… this pass. [R-3] [R-7] [R-10] [R-11] [R-14] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8, CLM-19], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-18], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-12], note: "" }

links:
  - { kind: site, url: "https://www.usevynex.org", authenticity: confirmed }
  - { kind: docs, url: "https://www.usevynex.org/docs", authenticity: confirmed }
  - { kind: app, url: "https://www.usevynex.org/app", authenticity: confirmed }
  - { kind: x, url: "https://x.com/UseVynex", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/usevynex", authenticity: unconfirmed }

deployments:
  - label: VYNEX token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x8cF33E3026604Bd85677e7Bc6E04d256571b6653"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-7, R-8, R-9, R-10, R-17]
  - label: VaultFactory (current registry)
    role: factory
    address:
      value: "0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-11, R-12, R-32]
  - label: VaultFactory implementation
    role: implementation
    address:
      value: "0xF9e012791490e555Dc6Fe101D556dd5D618A79CE"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-11, R-27]
  - label: VaultFactory revision 1 (legacyFactory)
    role: factory
    address:
      value: "0xee57E1B9B87Ca4318E046FAE2C45923f61d8D199"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-28]
  - label: Routed ys-USDG (forwards into steakUSDG)
    role: vault
    address:
      value: "0x01680B41D61253a61c4C55e897a05D10F280cD2A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-4, R-13, R-14]
  - label: YieldShares NVDA
    role: vault
    address:
      value: "0xf8670be5530f383ac7d8cf1b60d1814f0aa827ac"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-15]
  - label: NVDA/USDG Morpho oracle (from config.js)
    role: other
    address:
      value: "0xcf29960266420A42f12061699ec2daBd7eEa8D6e"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-16]
  - label: StockZap (USDG in)
    role: router
    address:
      value: "0xDCAAA4973180094751D74Ac1B0D8A48EA1e0FacE"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-29]
  - label: Factory / vault owner EOA
    role: admin
    address:
      value: "0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-11, R-12, R-14, R-15]

metrics:
  - { kind: holders, value: 2506, currency: null, as_of: 2026-09-03T03:00:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x8cF33E3026604Bd85677e7Bc6E04d256571b6653 holders_count", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 122221, currency: USD, as_of: 2026-09-03T02:54:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x8cf33e3026604bd85677e7bc6e04d256571b6653 lead Uniswap v4 VYNEX/ETH pair marketCap; Robinhood chain slice for this token", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 111955.79, currency: USD, as_of: 2026-09-03T02:54:00Z, window: 24h, method: "DexScreener lead Uniswap v4 VYNEX/ETH pair 0xcb309018…efec6 volume.h24; this pair only", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 15006.96, currency: USD, as_of: 2026-09-03T03:05:00Z, window: point, method: "eth_call totalAssets() on routed ys-USDG 0x01680B41…CD2A returned 15006957963 (USDG 6 decimals); this vault only, not factory stock vaults", class: claim, receipt_ids: [R-14] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-10], result: "eth_blockNumber 0x329f830 (53082160). Token 0x8cF33E30… eth_getCode 3248 bytes. name() vynex symbol() VYNEX decimals 18 totalSupply 1e27. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x11d05472C3DB31498C41D6B4142533fD5616e062. deployer() 0x65482e0D28fe6F8611d167b193A02C7C586Ebf4E. socials() https://x.com/UseVynex. description() matches the X bio. owner() reverts. logo() ipfs://bafybeicveiriauwybts3b5a2thbcdtb6ftf5t2tm5i7yvhbavstllqtgne." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-7, R-8, R-9, R-31], result: "Blockscout api/v2: token is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (PonsV2LaunchDeployer) creation_transaction_hash 0xcdd768541aebb37d94a5cd15218a672a6fd0b4852ab31010e2cd3f910b70c6d7. Token name vynex symbol VYNEX decimals 18 holders_count 2506 total_supply 1e27. Creation tx 2026-08-27T13:40:19Z block 47485447 from 0x65482e0D…bf4E to PonsV2LaunchAndBuy 0xe33E9E47…2948 method launchAndBuy; params name vynex symbol VYNEX twitter https://x.com/UseVynex website https://www.usevynex.org/ pairToken 0x000…000 (ETH). Source file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:05:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-16, R-27, R-28, R-29], result: "VaultFactory 0x6d48643d… eth_getCode 2711 bytes; Blockscout is_verified false proxy_type basic_implementation implementation 0xF9e01279…79CE (unverified); owner() 0x9c08276E…b208 (eth_getCode empty). Factory created 2026-09-01T14:13:26Z block 51782168 by that EOA. legacyFactory 0xee57E1B9…D199 11067 bytes unverified. Routed vault 0x01680B41…CD2A 7720 bytes; name() YieldShares USDG symbol() ys-USDG asset() USDG 0x5fc5360D…d168 owner() 0x9c08276E… totalAssets() 15006957963. ys-NVDA 0xf8670be5… 7190 bytes; name() YieldShares NVDA symbol() ys-NVDA asset() NVDA 0xd0601CE1…9EEC owner() 0x9c08276E… totalAssets() 232180048244019653 harvester() 0x0. Oracle 0xcf299602… 3513 bytes unverified. Zap 0xDCAAA497… 5076 bytes." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-3, R-5, R-6, R-9, R-17], result: "usevynex.org config.js brand Vynex ticker VYNEX token 0x8cf33e30… chainId 4663 links.twitter https://x.com/UseVynex site https://www.usevynex.org. LaunchAndBuy socials store the same handle and website. DexScreener token info websites https://www.usevynex.org/ and twitter https://x.com/UseVynex. @UseVynex bio matches token description(); 27 Aug post named the same CA." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6], result: "DexScreener latest/dex/tokens/0x8cf33e30…: 10 Uniswap pairs chainId robinhood labels v4. Lead VYNEX/ETH pairAddress 0xcb309018…efec6 liquidity.usd 32027.03 volume.h24 111955.79 marketCap 122221 fdv 122221 priceUsd 0.0001244 pairCreatedAt 1787840174000 (2026-08-27T14:16:14Z)." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-4], result: "GET https://www.usevynex.org/api/vaults: count 46 partial 0 ts 1788404066287. Nine vaults with non-zero totalAssets; routed ys-USDG 0x01680B41… feeBps 200 earning true target steakUSDG 0xBeEff033…; factory vaults feeBps 1000. Retired ys-USDG 0x1085f66E… also listed." }
  - { id: REP-7, method: document-scope, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-3], result: "Docs: deposit one asset, mint an ERC-20 share, redeem any block; pricePerShare = (totalAssets+1)/(totalSupply+1); factory cut 10% of harvests capped at 20%; routed USDG cut 2% of gain; no pause on withdraw/redeem; no third-party audit; private routing not shipped. Docs Contracts table still prints VaultFactory as not deployed. config.js names factory 0x6d48643d…, legacyFactory 0xee57E1B9…, extra routed vault, Morpho 0x9D53d5E3…, market id 0xbe3a5355… lltv 385000000000000000, oracle 0xcf299602…." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Deposit one listed asset into a YieldShares vault and receive a transferable ERC-20. Factory vaults harvest pool-fee income into totalAssets; a routed ys-USDG vault forwards USDG into steakUSDG. Redeem burns shares for the underlying at the on-chain price with no lockup.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.usevynex.org", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-3, R-6, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@UseVynex", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-3, R-5, R-6, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x8cF33E3026604Bd85677e7Bc6E04d256571b6653", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-7, R-10, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-7, R-10, R-11, R-14], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: relationship, value: "VYNEX is a Pons v2 launch token (PonsV2LauncherToken). launchFactory() is 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; creation is PonsV2LaunchAndBuy.launchAndBuy at 2026-08-27T13:40:19Z against ETH (pairToken 0x0). Lead liquidity venue is Uniswap v4 VYNEX/ETH.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-9, R-10], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: VYNEX, class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-8, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-3, R-11, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "VaultFactory owner() and ys-NVDA/ys-USDG owner() return EOA 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208. Token owner() reverts.", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-10, R-12, R-14, R-15], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: security.audit, value: "Docs state the contracts have not been through a third-party audit; no audit report was located on the site, docs, X bio or GitHub this pass", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "config.js lists Morpho Blue 0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010 market id 0xbe3a53552a5600381ca1d858cc425a2601becbd77c43c753698890a22adbbb0d, collateral NVDA 0xd0601CE1…, loan USDG 0x5fc5360D…, oracle 0xcf299602…, irm 0x2BD3d596…, lltv 385000000000000000 (38.5%). eth_call idToMarketParams/market on that Morpho address reverted this pass.", class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-3, R-16, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: control.privileged-role, value: "Docs: owner can set the harvester and the fee within MAX_FEE_BPS; skim cannot take shareholder backing; no pause on withdraw/redeem. Factory/vault source is unverified, so those modifiers were not read from bytecode.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: taxonomy.primary-leaf, value: yield/savings-vault, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: taxonomy.secondary-leaf, value: credit/isolated-money-market, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-7, R-10], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: "account.@UseVynex.role", value: project, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@UseVynex.slug", value: vynex, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "Native play is Robinhood Chain (chainId 4663) YieldShares plus a listed Morpho NVDA/USDG market. config.js rpc is rpc.mainnet.chain.robinhood.com.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-19, field: deployment.address, value: "0x01680B41D61253a61c4C55e897a05D10F280cD2A", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-20, field: activity.status, value: "api/vaults returned 46 vaults at 2026-09-03T02:54:26Z; nine had non-zero totalAssets. @UseVynex posted 45 vaults live on 2 Sep 2026.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "DexScreener lead Uniswap v4 VYNEX/ETH: liquidity.usd 32027.03 volume.h24 111955.79 marketCap 122221 as of 2026-09-03T02:54:00Z", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: economics.metric, value: "Routed ys-USDG totalAssets() 15006957963 (15006.957963 USDG, 6 decimals) at block 53082160", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: "account.@UseVynexSup.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-5, R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: identity.repository, value: "config.js links.contracts is https://github.com with no repository path", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "Docs Contracts table still prints VaultFactory as not deployed", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-26, field: relationship, value: "Routed ys-USDG config extra.source is steakUSDG 0xBeEff033F34C046626B8D0A041844C5d1A5409dd (Steakhouse USDG on Morpho Blue), not a Vynex-owned Morpho instance", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "@UseVynex posted product figures on 2 Sep 2026; last located post in this pass is 2095233569954156728 at 2026-09-02T19:33:05Z", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-18, R-19], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: deployment.address
    claim_ids: [CLM-8, CLM-25]
    material_effect: "Docs still label VaultFactory as not deployed while config.js and chain 4663 show 0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@UseVynex: 18 addresses deposited, 13 still hold"
    summary: "On 2 Sep 2026 @UseVynex posted that 18 addresses other than its own had deposited and 13 still held."
    occurred_at: 2026-09-02T19:33:05Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-2
    type: company
    title: "@UseVynex posts five-day vault counts and fees"
    summary: "On 2 Sep 2026 @UseVynex posted 45 vaults live, $15,517 deposited, $0.000021 fees ever, 18M VYNEX burned."
    occurred_at: 2026-09-02T15:48:23Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: company
    title: "@UseVynex lists 29 new tokenized-stock vaults"
    summary: "On 1 Sep 2026 @UseVynex listed 29 new vaults including SPCX, RDDT, GME, MSTR, NFLX and SGOV."
    occurred_at: 2026-09-01T14:23:21Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: onchain
    title: "VaultFactory 0x6d48… created on chain 4663"
    summary: "VaultFactory 0x6d48643d… was created at block 51782168 on 1 Sep 2026 by EOA 0x9c08276E…."
    occurred_at: 2026-09-01T14:13:26Z
    observed_at: 2026-09-03T03:05:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-32]
  - id: EVT-5
    type: company
    title: "@UseVynex: YieldShares are the main story"
    summary: "On 31 Aug 2026 @UseVynex posted that lending is not the main story and YieldShares are."
    occurred_at: 2026-08-31T20:07:46Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: company
    title: "@UseVynex corrects first-NVDA-market claim"
    summary: "On 31 Aug 2026 @UseVynex posted that an NVDA lending market was already live before theirs."
    occurred_at: 2026-08-31T19:27:46Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-7
    type: company
    title: "@UseVynex posts NVDA/USDG Morpho borrow market"
    summary: "On 30 Aug 2026 @UseVynex posted an NVDA/USDG Morpho Blue market at 38.5% LTV with a 30-minute TWAP."
    occurred_at: 2026-08-30T17:14:32Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-8
    type: onchain
    title: "VYNEX token created via Pons v2 launchAndBuy"
    summary: "On 27 Aug 2026 PonsV2LaunchAndBuy.launchAndBuy created VYNEX 0x8cf33e30… pairing against ETH."
    occurred_at: 2026-08-27T13:40:19Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [deployment.address, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-9]

receipts:
  - { id: R-1, publisher: Vynex, title: "Vynex homepage", url: "https://www.usevynex.org/", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-10, CLM-13], excerpt: "Vynex — Liquid yield and private markets. Built on Robinhood Chain. ERC-4626 vault accounting. Tradeable share token. No lockup. Deposit into a vault, receive an ERC-20 that represents your slice of the pool. Redeem any block. The contracts have not been through a third-party audit." }
  - { id: R-2, publisher: Vynex, title: "Docs — Vynex", url: "https://www.usevynex.org/docs", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-10, CLM-12, CLM-13, CLM-25], excerpt: "Status. 16 vaults are live on Robinhood Chain mainnet: 15 deployed by the factory, plus a routed USDG vault that forwards deposits into Morpho Blue. The contracts pass a full test suite but have not been through a third-party audit. Contracts table: VaultFactory address not deployed. Can withdrawals be paused or blocked? No." }
  - { id: R-3, publisher: Vynex, title: "config.js single source of truth", url: "https://www.usevynex.org/config.js", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-8, CLM-11, CLM-16, CLM-17, CLM-18, CLM-19, CLM-24, CLM-26], excerpt: "brand Vynex ticker VYNEX token 0x8cf33e3026604bd85677e7bc6e04d256571b6653 chainId 4663. vaults.factory 0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b legacyFactory 0xee57E1B9B87Ca4318E046FAE2C45923f61d8D199 extra 0x01680B41D61253a61c4C55e897a05D10F280cD2A. borrow.morpho 0x9D53d5E3… market id 0xbe3a5355… lltv 385000000000000000 oracle 0xcf299602…. links.twitter https://x.com/UseVynex discord https://discord.gg/usevynex contracts https://github.com site https://www.usevynex.org" }
  - { id: R-4, publisher: Vynex, title: "api/vaults", url: "https://www.usevynex.org/api/vaults", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-20, CLM-26, EVT-2], excerpt: "count 46 partial 0 ts 1788404066287. Routed vault address 0x01680B41D61253a61c4C55e897a05D10F280cD2A symbol ys-USDG totalAssets 15006954420 feeBps 200 earning true target 0xbeeff033f34c046626b8d0a041844c5d1a5409dd. ys-NVDA 0xf8670be5530f383ac7d8cf1b60d1814f0aa827ac totalAssets 232180048244019653 feeBps 1000." }
  - { id: R-5, publisher: "@UseVynex", title: "Vynex X profile", url: "https://x.com/UseVynex", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-16, CLM-17, CLM-23, CLM-27], excerpt: "Display name Vynex, handle @UseVynex. Bio: Liquid yield on Robinhood Chain. Deposit into a vault, hold a tradeable ERC-20, earn the pool fee. Redeem any block, no lockup. Followers 1479. Joined 2026-08-26. Website t.co in bio." }
  - { id: R-6, publisher: DexScreener, title: "VYNEX token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x8cf33e3026604bd85677e7bc6e04d256571b6653", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-6, CLM-21, EVT-8], excerpt: "10 Uniswap v4 pairs chainId robinhood. Lead VYNEX/ETH pairAddress 0xcb30901873dfce397b8373413ce5e42f2246cca005a93f0bd9336c14269efec6 liquidity.usd 32027.03 volume.h24 111955.79 marketCap 122221. info.websites https://www.usevynex.org/ socials twitter https://x.com/UseVynex discord https://discord.gg/usevynex. pairCreatedAt 1787840174000." }
  - { id: R-7, publisher: Blockscout, title: "Address 0x8cF33E3026604Bd85677e7Bc6E04d256571b6653", url: "https://robinhoodchain.blockscout.com/address/0x8cf33e3026604bd85677e7bc6e04d256571b6653", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-15, EVT-8], excerpt: "API v2: hash 0x8cF33E3026604Bd85677e7Bc6E04d256571b6653 name PonsV2LauncherToken is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xcdd768541aebb37d94a5cd15218a672a6fd0b4852ab31010e2cd3f910b70c6d7. token name vynex symbol VYNEX holders_count 2506." }
  - { id: R-8, publisher: Blockscout, title: "Token 0x8cF33E30…", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x8cF33E3026604Bd85677e7Bc6E04d256571b6653", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "address_hash 0x8cF33E3026604Bd85677e7Bc6E04d256571b6653 name vynex symbol VYNEX decimals 18 holders_count 2506 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-9, publisher: Blockscout, title: "Creation tx 0xcdd76854…", url: "https://robinhoodchain.blockscout.com/tx/0xcdd768541aebb37d94a5cd15218a672a6fd0b4852ab31010e2cd3f910b70c6d7", published_at: 2026-08-27T13:40:19Z, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-6, EVT-8], excerpt: "timestamp 2026-08-27T13:40:19.000000Z status ok block_number 47485447 from 0x65482e0D28fe6F8611d167b193A02C7C586Ebf4E to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params vynex / VYNEX / https://x.com/UseVynex / https://www.usevynex.org/ / pairToken 0x000…000." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode and eth_call on VYNEX token", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-9, CLM-15], excerpt: "eth_blockNumber 0x329f830 (53082160). eth_getCode 0x8cF33E30… 3248 bytes. name() vynex symbol() VYNEX totalSupply 1e27 launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e curve() 0x11d05472C3DB31498C41D6B4142533fD5616e062 deployer() 0x65482e0D…bf4E socials() https://x.com/UseVynex owner() revert." }
  - { id: R-11, publisher: Blockscout, title: "VaultFactory 0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b", url: "https://robinhoodchain.blockscout.com/address/0x6d48643d2438ebb75bb80cc6683360c1b9fc4c7b", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-9, EVT-4], excerpt: "API v2: hash 0x6d48643d2438EbB75BB80cc6683360C1B9fC4C7b is_contract true is_verified false proxy_type basic_implementation implementations 0xF9e012791490e555Dc6Fe101D556dd5D618A79CE creator 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 creation_transaction_hash 0x4dbdb2dc75c020e7316fe29438025ee3f203e0c0231ee78af3d6fb215cdb91b0." }
  - { id: R-12, publisher: Robinhood Chain RPC, title: "VaultFactory owner() and eth_getCode", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-9], excerpt: "eth_getCode factory 2711 bytes. owner() 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208. eth_getCode on that owner empty. EIP-1967 implementation slot 0x360894a1… empty; Blockscout still lists implementation 0xF9e01279… as basic_implementation." }
  - { id: R-13, publisher: Blockscout, title: "Routed ys-USDG 0x01680B41…", url: "https://robinhoodchain.blockscout.com/address/0x01680b41d61253a61c4c55e897a05d10f280cd2a", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19, EVT-4], excerpt: "API v2: hash 0x01680B41D61253a61c4C55e897a05D10F280cD2A name YieldShares USDG is_contract true is_verified false creator 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 creation_transaction_hash 0x1d3036df526d7d4a44068196f23d0bfdcc81c811b1cf24684671f964a925588c." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "eth_call on routed ys-USDG", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-19, CLM-22], excerpt: "eth_getCode 7720 bytes. name() YieldShares USDG symbol() ys-USDG asset() 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 owner() 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 totalAssets() 15006957963." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "eth_call on ys-NVDA", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "0xf8670be5530f383ac7d8cf1b60d1814f0aa827ac eth_getCode 7190 bytes. name() YieldShares NVDA symbol() ys-NVDA asset() 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC owner() 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 totalAssets() 232180048244019653 harvester() 0x000…000." }
  - { id: R-16, publisher: Blockscout, title: "Oracle 0xcf29960266420A42f12061699ec2daBd7eEa8D6e", url: "https://robinhoodchain.blockscout.com/address/0xcf29960266420a42f12061699ec2dabd7eea8d6e", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "API v2: hash 0xcf29960266420A42f12061699ec2daBd7eEa8D6e is_contract true is_verified false proxy_type null creator 0x9f847fc08c7cE80aD3942a991E54Ec1D832FdDd5 creation_transaction_hash 0x9476dd4309eb13abd37c04780d0e4c7cb1b77b02672a7d91d6427b53c1faf7a3. RPC eth_getCode 3513 bytes." }
  - { id: R-17, publisher: "@UseVynex", title: "CA updated on site", url: "https://x.com/UseVynex/status/2092976774590111867", published_at: 2026-08-27T14:05:23Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4], excerpt: "CA updated on site. 0x8cf33e3026604bd85677e7bc6e04d256571b6653" }
  - { id: R-18, publisher: "@UseVynex", title: "Vynex, five days in, by the numbers", url: "https://x.com/UseVynex/status/2095177023182254237", published_at: 2026-09-02T15:48:23Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-20, CLM-27, EVT-2], excerpt: "Vynex, five days in, by the numbers. All of it checkable. 45 vaults live, up from 15. 226 tests passing, 75 against the live chain. $15,517 deposited. 14 outside addresses holding shares. $0.000021 taken in fees, ever. 18,000,000 VYNEX burned ten seconds after launch. 0 pause functions, 0 blocklists, 0 ways to stop your withdrawal." }
  - { id: R-19, publisher: "@UseVynex", title: "18 addresses have deposited", url: "https://x.com/UseVynex/status/2095233569954156728", published_at: 2026-09-02T19:33:05Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-1], excerpt: "18 addresses other than mine have deposited, 13 still hold and is using the product." }
  - { id: R-20, publisher: "@UseVynex", title: "29 new vaults are now live", url: "https://x.com/UseVynex/status/2094793237940601131", published_at: 2026-09-01T14:23:21Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "29 new vaults are now live on Vynex. SPCX · RDDT · USO · HIMS · GME · COST · MU · RBLX · MSTR · MRNA · LLY · DJT · TSM · QUBT · SNDK · TTWO · CRCL · ASML · DELL · NU · NFLX · SGOV · RIVN · SOUN · INTC · AMC · JNJ · USAR · NET. More assets, same simple flow: deposit, receive your vault position, redeem onchain when you want." }
  - { id: R-21, publisher: "@UseVynex", title: "We just deposited $15,000 into Vynex", url: "https://x.com/UseVynex/status/2094502833965945186", published_at: 2026-08-31T19:09:24Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-22], excerpt: "We just deposited $15,000 into Vynex. We're building this protocol, using it, and putting our own capital through the same contracts as everyone else. $15k deposited. Onchain. https://www.usevynex.org/" }
  - { id: R-22, publisher: "@UseVynex", title: "Lending isn't the main story. YieldShares are.", url: "https://x.com/UseVynex/status/2094517524566364398", published_at: 2026-08-31T20:07:46Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-12, EVT-5], excerpt: "We've heard the feedback. Lending isn't the main story of Vynex. YieldShares are. Deposit the stock, hold the ys-token, keep the exposure and earn through the vault. We're also building a public vault transparency page so anyone can verify where the assets are." }
  - { id: R-23, publisher: "@UseVynex", title: "Correction: not the first NVDA lending market", url: "https://x.com/UseVynex/status/2094507457896948002", published_at: 2026-08-31T19:27:46Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Quick correction from us: We previously said Vynex launched the first NVDA lending market on Robinhood Chain. That was incorrect — there was already an NVDA lending market live before ours. What is live on Vynex remains the same: deposit tokenised NVDA, borrow USDG against it, and keep your position." }
  - { id: R-24, publisher: "@UseVynex", title: "Borrow dollars against NVDA", url: "https://x.com/UseVynex/status/2094111540899148276", published_at: 2026-08-30T17:14:32Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, CLM-14, EVT-7], excerpt: "New on Vynex: you can now borrow dollars against your NVDA without selling it. You can borrow up to 38.5% of its value. The lending position runs through Morpho Blue and sits under your own address, not ours. We also built the oracle for the market. It uses a 30-minute average from the NVDA pool rather than relying on the current spot price." }
  - { id: R-25, publisher: Vynex, title: "YieldShares app", url: "https://www.usevynex.org/app", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "YieldShares. Deposit a pool asset, hold a tradeable ERC-20, redeem at the on-chain price. Every figure below is read from Robinhood Chain. Holding USDG? That is the chain's dollar. It has its own vault, ys-USDG. Static HTML shows Reading the chain… until the wallet/RPC list loads." }
  - { id: R-26, publisher: "@UseVynex", title: "USDG vault share price overnight", url: "https://x.com/UseVynex/status/2094295707293241346", published_at: 2026-08-31T05:26:21Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "Yesterday we launched the lending market for NVDA on this chain. At the same time, the USDG vault just kept earning overnight. Its share price moved from 1.000203 to 1.000367 while everyone was asleep." }
  - { id: R-27, publisher: Blockscout, title: "Factory implementation 0xF9e01279…", url: "https://robinhoodchain.blockscout.com/address/0xf9e012791490e555dc6fe101d556dd5d618a79ce", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "API v2: hash 0xF9e012791490e555Dc6Fe101D556dd5D618A79CE is_contract true is_verified false creator_address_hash 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 proxy_type null." }
  - { id: R-28, publisher: Blockscout, title: "legacyFactory 0xee57E1B9…", url: "https://robinhoodchain.blockscout.com/address/0xee57e1b9b87ca4318e046fae2c45923f61d8d199", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "API v2: hash 0xee57E1B9B87Ca4318E046FAE2C45923f61d8D199 is_contract true is_verified false creator 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 creation_transaction_hash 0xd7471845c2d60993822cf7e7ae215a1c214e20112ae13185488ef90aca79ff2a. RPC eth_getCode 11067 bytes." }
  - { id: R-29, publisher: Robinhood Chain RPC, title: "eth_getCode StockZap", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "eth_getCode 0xDCAAA4973180094751D74Ac1B0D8A48EA1e0FacE 5076 bytes at block 53082160. Address named as zap.address in config.js." }
  - { id: R-30, publisher: "@UseVynexSup", title: "Vynex Support profile", url: "https://x.com/UseVynexSup", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Display name Vynex Support, handle @UseVynexSup. Bio: Liquid yield on Robinhood Chain. Deposit into a vault, hold a tradeable ERC-20, earn the pool fee. Redeem any block, no lockup. Same bio stem as @UseVynex. Followers 73." }
  - { id: R-31, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0x8cf33e3026604bd85677e7bc6e04d256571b6653", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6], excerpt: "name PonsV2LauncherToken compiler_version v0.8.35+commit.47b9dedd language solidity file_path contracts/src/v2/PonsV2LauncherToken.sol is_verified true. ABI functions include launchFactory, curve, deployer, socials, description, getTokenInfo; no owner." }
  - { id: R-32, publisher: Blockscout, title: "VaultFactory creation tx 0x4dbdb2dc…", url: "https://robinhoodchain.blockscout.com/tx/0x4dbdb2dc75c020e7316fe29438025ee3f203e0c0231ee78af3d6fb215cdb91b0", published_at: 2026-09-01T14:13:26Z, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, EVT-4], excerpt: "timestamp 2026-09-01T14:13:26.000000Z status ok block_number 51782168 from 0x9c08276E5FA641DCEBC05d650a1b0Ced671EB208 to null (contract creation)." }

gaps:
  - { priority: P0, question: "Does Morpho 0x9D53d5E3… actually hold market id 0xbe3a5355… with the config.js oracle and 38.5% LLTV?", checked: "config.js names the id, oracle, irm and tokens; eth_call idToMarketParams(bytes32) and market(bytes32) on 0x9D53d5E3… reverted; Morpho GraphQL rejected the query shape this pass", next: "decode Morpho Blue ABI on 4663 and call the live idToMarketParams selector, or open the Morpho market page for chain 4663" }
  - { priority: P0, question: "Who owns oracle 0xcf299602… and can the 30-minute TWAP be moved?", checked: "Blockscout is_contract true is_verified false; creator 0x9f847fc0… is not the vault-factory owner 0x9c08276E…; no owner() call this pass", next: "verify source or eth_call owner()/pools on the oracle" }
  - { priority: P0, question: "What can VaultFactory owner() 0x9c08276E… change on unverified factory and vault bytecode?", checked: "owner() reproduced; docs list setFee within cap and harvester; source unverified; ys-NVDA harvester() returned 0x0", next: "read setFee/harvester/skim modifiers once source is verified or decompiled" }
  - { priority: P1, question: "Is there a public repository beyond config.js links.contracts https://github.com?", checked: "config.js, docs forge snippets, X bio, GitHub search vynex/usevynex/YieldShares, 2026-09-03", next: "ask the project in public for the org and pin the commit that matches factory 0x6d48643d…" }
  - { priority: P1, question: "Why do the docs still print VaultFactory as not deployed after config.js and the explorer show 0x6d48643d…?", checked: "docs Contracts table vs config.js vs Blockscout, 2026-09-03", next: "reload docs after a site deploy and record whether the table catches up" }
  - { priority: P2, question: "Is there a third-party audit of the factory or YieldShares bytecode?", checked: "docs, homepage, X bio, GitHub search, 2026-09-03; docs state there is none", next: "record any later report with matching addresses" }
---

# Vynex — research packet

## What it is

Vynex turns a Robinhood Chain deposit into a transferable ERC-20 YieldShare that redeems the underlying at any block. A user deposits a stock token or USDG and can sell, transfer, or burn the share. Factory vaults harvest pool fees into the share price; a routed USDG vault forwards deposits into steakUSDG on Morpho Blue. One EOA owns the factory. $VYNEX launched through Pons v2.

Themes: vault, lending, stock-paired:NVDA, rwa, hook
