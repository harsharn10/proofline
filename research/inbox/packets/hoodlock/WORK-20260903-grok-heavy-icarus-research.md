---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: hoodlock
name: HoodLock
packet_tier: seed
as_of: 2026-09-03T02:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [hoodlock]
allowed_paths:
  - research/inbox/packets/hoodlock/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: HoodLock
  aliases: ["$LOCK", "Hood Lock"]
  symbols: [LOCK]
  entity_kind: tool
  chain_scope: robinhood-native
  official_domain: https://hoodlock.tech
  official_handle: "@HoodLockRH"
  repository: "NULL — site, docs, X bio and GitHub search q=hoodlock returned no official HoodLock org this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "LOCK creator_address_hash is PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB; Pons is the pad, HoodLock is the locker suite"
        - "Official surfaces differ: ponsfamily.com / @ponsdotfamily versus hoodlock.tech / @HoodLockRH"
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "Census StonkBrokers is an NFT fee-claim product at stonkbrokers.app / @ClutchMarkets"
        - "HoodLock docs: StonkBrokers locks the Uniswap v3 and v4 position NFTs HoodLock cannot hold yet"
        - "No shared domain, handle or reproduced locker address"
    - slug: delta
      signals: [other]
      contrary_signals:
        - "Census Delta is a liquidity manager at @deltaliquidity"
        - "@HoodLockRH posted that Delta locked 10% of supply through HoodLock; Delta is a locker customer, not the locker"
        - "No shared domain, handle or reproduced address"
    - slug: sinjoh
      signals: [other]
      contrary_signals:
        - "Census Sinjoh is a fee-routing protocol at sinjoh.com / @SinjohDeFi"
        - "Sinjoh packet already splits HoodLock as the locker; INJOH LP NFT sits in PonsLaunchLocker 0x736D76…7F35"
        - "No shared domain, handle or reproduced HoodLock locker address"

classification:
  primary_leaf: tooling/locker
  secondary_leaves: [launch/other-pad]
  mechanism_tags: [other, launchpad, nft, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "RobinhoodLocker 0xD0f7…C32F, RobinhoodBurner, RobinhoodVesting and LOCK 0xd5BF…4B94 exist on chain 4663 with verified source; LOCK/WETH Uniswap v3 0x4562…AF2 is live. Census lifecycle announced is stale. Locked-USD figure, launchpad factory and an audit were not reproduced. No DefiLlama protocol row. [R-2] [R-7] [R-9] [R-14] [R-15] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-24], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-20, CLM-21], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-10, CLM-19, CLM-20, CLM-14], note: "" }

links:
  - { kind: site, url: "https://hoodlock.tech", authenticity: confirmed }
  - { kind: app, url: "https://hoodlock.tech/app", authenticity: confirmed }
  - { kind: docs, url: "https://hoodlock.tech/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/HoodLockRH", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/hdXKRP9BN", authenticity: confirmed }

deployments:
  - label: LOCK token (PonsLauncherToken)
    role: token
    address:
      value: "0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-8, R-13, R-14]
  - label: RobinhoodLocker
    role: other
    address:
      value: "0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-9, R-10, R-14]
  - label: RobinhoodBurner
    role: other
    address:
      value: "0x6Bf43Ca706FAa8EA46803299C191484e82280652"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-11, R-14]
  - label: RobinhoodVesting
    role: other
    address:
      value: "0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-12, R-14]
  - label: LOCK/WETH Uniswap v3 pool
    role: other
    address:
      value: "0x4562cA679DcCc38f2dd59d28B2eBFEC99f507AF2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-15]
  - label: PonsLaunchFactory (token creator_address_hash)
    role: factory
    address:
      value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-13]
  - label: Locker/burner/vesting admin EOA (also token deployer)
    role: admin
    address:
      value: "0x79c1230cAb12d53D040f5FE1F5279e1A481CCeA2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-14]
  - label: Locker fee collector
    role: other
    address:
      value: "0x58EE7b355F6e347e9874deD2e877D0C7b9726B4F"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14]

metrics:
  - { kind: holders, value: 1169, currency: null, as_of: 2026-09-03T02:50:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94 holders_count", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 48402.95, currency: USD, as_of: 2026-09-03T02:48:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xd5BF…4B94 Uniswap v3 LOCK/WETH pair 0x4562…AF2 volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-15] }
  - { kind: market_cap, value: 97761, currency: USD, as_of: 2026-09-03T02:48:00Z, window: point, method: "DexScreener same LOCK/WETH v3 pair marketCap", class: claim, receipt_ids: [R-15] }
  - { kind: tvl, value: 33439.04, currency: USD, as_of: 2026-09-03T02:48:00Z, window: point, method: "DexScreener same LOCK/WETH v3 pair liquidity.usd (listed pool, not protocol locked-token TVL; no HoodLock Llama row)", class: claim, receipt_ids: [R-15, R-16] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-14], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x329efcb (53080011). eth_getCode non-empty: LOCK 10550 hex chars, locker 9884, burner 6726, vesting 16184, pool 44286. name() HoodLock; symbol() LOCK; decimals 18; totalSupply 1e27; owner() reverts; deployer() 0x79c1230cAb12d53D040f5FE1F5279e1A481CCeA2 (eth_getCode empty). Locker admin() 0x79c1…CeA2; fee() 5e15 wei (0.005 ETH); feeCollector() 0x58EE…6B4F; totalLocks() 192. Burner admin() same EOA; DEAD() 0x000…dEaD. Vesting admin() same EOA; MAX_FEE() 5e16 wei (0.05 ETH)." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-7, R-8, R-9, R-10, R-11, R-12, R-13], result: "Blockscout API v2: LOCK 0xd5BF…4B94 is_contract true is_verified true name PonsLauncherToken proxy_type null creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB (PonsLaunchFactory, is_verified true) creation_transaction_hash 0xe85df1f0…e197 timestamp 2026-08-01T19:12:01Z block 25280576 method launchToken from 0x79c1…CeA2; token name HoodLock symbol LOCK holders_count 1169 total_supply 1e27. Locker 0xD0f7…C32F name RobinhoodLocker is_verified true created 2026-07-08T19:00:56Z block 4591195 by 0xb252…f0960 tx 0x060f96b1…25f8. Burner 0x6Bf4…0652 name RobinhoodBurner is_verified true. Vesting 0x910e…c72E name RobinhoodVesting is_verified true." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-15], result: "DexScreener latest/dex/tokens/0xd5BF…4B94: 3 robinhood uniswap pairs. Lead book v3 LOCK/WETH 0x4562cA679DcCc38f2dd59d28B2eBFEC99f507AF2 quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 33439.04 volume.h24 48402.95 marketCap 97761 priceUsd 0.00009778 pairCreatedAt 2026-08-01T19:12:01Z. info.websites https://hoodlock.tech/ socials x.com/HoodLockRH and discord.gg/MwCGm9WCXf." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-2, R-6, R-13, R-15, R-25], result: "hoodlock.tech title names Robinhood Chain locker and links Blockscout locker 0xd0f7…c32f plus $LOCK 0xd5BF…4B94 and X / @HoodLockRH. @HoodLockRH bio: Locks, burns and vesting on Robinhood Chain; URL hoodlock.tech; $LOCK → 0xd5BF…4B94; Community discord.gg/hdXKRP9BN. launchToken params twitter https://x.com/HoodLockRH. DexScreener info repeats hoodlock.tech and x.com/HoodLockRH. Discord invite titles HoodLock.tech community, 539 members." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-16], result: "api.llama.fi/protocols (8169 rows) has no name/slug/twitter matching HoodLock, hoodlock or HoodLockRH." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "User approves an ERC-20, pays a flat ETH fee, and RobinhoodLocker.lock records owner/token/amount/unlockTime; withdraw is the lock owner at or after unlockTime; extend only lengthens unlockTime; ownership of the lock can move without moving the tokens", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://hoodlock.tech", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6, R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@HoodLockRH", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6, R-13], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6, R-7, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-7, R-9, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: "LOCK", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-8, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: identity.name, value: "HoodLock", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-8, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: relationship, value: "LOCK creator_address_hash is PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB; creation tx 0xe85df1f0… launchToken at 2026-08-01T19:12:01Z also created UniswapV3Pool 0x4562…AF2; Uni v3 position NFT 547003 was sent to PonsLaunchLocker 0x736D76…7F35", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Primary book Uniswap v3 LOCK/WETH 0x4562cA679DcCc38f2dd59d28B2eBFEC99f507AF2; quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; NFT metadata fee tier 1%", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-13, R-15], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "locker/burner/vesting admin() 0x79c1230cAb12d53D040f5FE1F5279e1A481CCeA2 is an EOA (eth_getCode empty); locker creator 0xb252140D8Db40Ca2dC2D28f17C1B771796Af0960 is a different EOA", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Blockscout holders_count 1169", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener Uniswap v3 LOCK/WETH volume.h24 48402.95", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener Uniswap v3 LOCK/WETH marketCap 97761", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "App /app/launch form: name, ticker, team share 0–10% keep/lock/vest/burn; paired with ETH; trade fee 1.00%; tradable immediately; liquidity locked forever. @HoodLockRH 2026-09-01: the launchpad is live. Launch factory address is not on the contract-reference page.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-20, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on the official site, docs, X bio or GitHub this pass", class: unknown, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: taxonomy.primary-leaf, value: "tooling/locker", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@HoodLockRH.role", value: project, class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@HoodLockRH.slug", value: hoodlock, class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: control.privileged-role, value: "Docs: admin can change fee, fee collector and admin key; locker and burner have no hard fee cap; vesting MAX_FEE 0.05 ETH. RPC: locker fee() 0.005 ETH; vesting MAX_FEE() 0.05 ETH; feeCollector 0x58EE…6B4F", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-2, R-3, R-5, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Site FAQ: Uniswap v3 and v4 positions are NFTs, so HoodLock cannot hold LP yet; lockable today is any ERC-20 including v2-style LP tokens", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: "robinhood-native", class: verified, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-4, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-22, field: control.timelock, value: "No timelock address on the locker, burner, vesting, site or docs this pass", class: unknown, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: control.owner, value: "App copy: The locker still answers to its original deploy wallet. One action from that wallet routes fees through a 50/50 splitter and hands admin to your main wallet, permanently.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: deployment.address, value: "0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-2, R-9, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x6Bf43Ca706FAa8EA46803299C191484e82280652", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-2, R-11, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-2, R-12, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: "locker totalLocks() 192 at block 53080011", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-28, field: product.mechanism, value: "App: half of platform revenue is bought back as $LOCK and dropped to wallets that lock $LOCK for 7 days or more; 180-day claim window. Docs: embed/API partners earn 50% of the ETH fee.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-5, R-19, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: relationship, value: "Docs comparisons: vs StonkBrokers — also on this chain, and it locks the v3 and v4 positions HoodLock cannot", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: other, value: "Flags: none of handle-collision | unconfirmed-official | ca-collision on the bio LOCK address this pass. Intake named a truncated third-party CA 0x76af8d3B… as not the project's; the full 20 bytes were not located this pass.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-6, R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: taxonomy.secondary-leaf, value: "launch/other-pad", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-20, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: economics.metric, value: "DexScreener Uniswap v3 LOCK/WETH liquidity.usd 33439.04 (pool slice, not locked-token TVL)", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-15], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: control.owner
    claim_ids: [CLM-10, CLM-23]
    material_effect: "App handover copy still names the original deploy wallet; locker admin() returns 0x79c1…CeA2, not creator 0xb252…f0960"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Account posted 10% of total supply locked for 180 days"
    summary: "@HoodLockRH posted that 10% of total supply is locked for 180 days."
    occurred_at: 2026-09-02T23:36:04Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-2
    type: company
    title: "Account posted $1.51M current value locked"
    summary: "@HoodLockRH posted $1,510,000 as the current value locked on hoodlock.tech."
    occurred_at: 2026-09-02T21:47:02Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: company
    title: "Account posted $LOCK locker revenue share as live"
    summary: "@HoodLockRH posted revenue share to $LOCK lockers live at hoodlock.tech/app/revenue."
    occurred_at: 2026-09-02T13:30:45Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: company
    title: "Account posted the HoodLock launchpad as live"
    summary: "@HoodLockRH posted the launchpad live at hoodlock.tech/app/launch with a 1% trading fee."
    occurred_at: 2026-09-01T21:59:16Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [product.mechanism, lifecycle, taxonomy.secondary-leaf]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-5
    type: company
    title: "Account posted Zedkr shop partnership and a ZED lock"
    summary: "@HoodLockRH posted $LOCK as a Zedkr partner token and 210,000,000 $ZED (21%) locked through HoodLock."
    occurred_at: 2026-09-01T19:01:50Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [relationship, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: company
    title: "Account posted Delta's 10% lock and a launchpad coming"
    summary: "@HoodLockRH posted that @deltaliquidity locked 10% of supply and a HoodLock launchpad is coming soon."
    occurred_at: 2026-08-31T19:39:34Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [relationship, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-7
    type: onchain
    title: "PonsLaunchFactory created the LOCK token and v3 pool"
    summary: "Tx 0xe85df1f0… launchToken created HoodLock/LOCK and Uniswap v3 LOCK/WETH 0x4562…AF2 on 2026-08-01."
    occurred_at: 2026-08-01T19:12:01Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-13]
  - id: EVT-8
    type: onchain
    title: "RobinhoodLocker deployed on chain 4663"
    summary: "Tx 0x060f96b1… created RobinhoodLocker 0xD0f7…C32F at block 4591195 on 2026-07-08T19:00:56Z."
    occurred_at: 2026-07-08T19:00:56Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-10]

receipts:
  - { id: R-1, publisher: HoodLock, title: "HoodLock — liquidity and token locker", url: "https://hoodlock.tech", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-20, CLM-24], excerpt: "Lock liquidity. Prove it. $LOCK 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94. X / @HoodLockRH. Locks LIVE, Vesting LIVE, Airdrops LIVE. blockscout.com/address/0xd0f7…c32f verified contract. FAQ: Liquidity on Robinhood Chain lives in Uniswap v3 and v4 positions, which are NFTs rather than ERC-20 LP tokens, so HoodLock cannot hold one yet." }
  - { id: R-2, publisher: HoodLock, title: "Contract reference", url: "https://hoodlock.tech/docs/contracts", published_at: 2026-07-29, accessed_at: 2026-09-03T02:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-16, CLM-19, CLM-24, CLM-25, CLM-26], excerpt: "Locker 0xd0f7d8c6e9f6d80c297bebe4f7fd1b9c8125c32f Holds ERC-20 tokens until a date. Burner 0x6bf43ca706faa8ea46803299c191484e82280652. Vesting 0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E. lock/withdraw/extend/transferLockOwnership. Across all three contracts the admin can change only the fee, the fee collector and the admin key. The locker has no hard cap on the fee." }
  - { id: R-3, publisher: HoodLock, title: "Security model", url: "https://hoodlock.tech/docs/security", published_at: 2026-07-29, accessed_at: 2026-09-03T02:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-19], excerpt: "Locker: The lock's owner, and nobody else, at or after the unlock time. Admin can change the fee for new records, the fee collector, and transfer the admin role. Vesting has a hard fee cap of 0.05 ETH. The locker and burner have no such cap. There is no rescue, no sweep, no emergencyWithdraw." }
  - { id: R-4, publisher: HoodLock, title: "Network details", url: "https://hoodlock.tech/docs/network", published_at: 2026-07-29, accessed_at: 2026-09-03T02:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-21], excerpt: "HoodLock runs only on Robinhood Chain. Chain id 4663 (0x1237). RPC https://rpc.mainnet.chain.robinhood.com. Deploy blocks: Locker 4,591,195; Burner 16,820,186; Vesting 20,301,744." }
  - { id: R-5, publisher: HoodLock, title: "Fees", url: "https://hoodlock.tech/docs/fees", published_at: 2026-07-29, accessed_at: 2026-09-03T02:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-28], excerpt: "Create a lock 0.005 ETH once. Burn 0.005 ETH. Vesting 0.005 ETH per schedule. Withdraw and extend free. Vesting has a hard cap of 0.05 ETH. The locker and burner have no such cap. Embed widget or REST API earn 50% of the fee." }
  - { id: R-6, publisher: "@HoodLockRH", title: "HoodLock profile", url: "https://x.com/HoodLockRH", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-17, CLM-18, CLM-30], excerpt: "Display name HoodLock, handle @HoodLockRH. Bio: Locks, burns and vesting on Robinhood Chain. hoodlock.tech. $LOCK → 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94. Community → discord.gg. Joined July 2026." }
  - { id: R-7, publisher: Blockscout, title: "Address 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, EVT-7], excerpt: "hash 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94 is_contract true is_verified true name PonsLauncherToken proxy_type null creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB creation_transaction_hash 0xe85df1f01b4fcedb2e2c29b0f37da4582a073945441f0da4c1d5a3876045e197; token name HoodLock symbol LOCK holders_count 1169 total_supply 1000000000000000000000000000." }
  - { id: R-8, publisher: Blockscout, title: "LOCK token", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-11], excerpt: "address_hash 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94 name HoodLock symbol LOCK decimals 18 holders_count 1169 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-9, publisher: Blockscout, title: "Address 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-24, EVT-8], excerpt: "hash 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F is_contract true is_verified true name RobinhoodLocker proxy_type null creator_address_hash 0xb252140D8Db40Ca2dC2D28f17C1B771796Af0960 creation_transaction_hash 0x060f96b101619990734aa1aa1dac16c73df1915fd4edb99ffa3b1ce7059925f8." }
  - { id: R-10, publisher: Blockscout, title: "Locker creation tx 0x060f96b1…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x060f96b101619990734aa1aa1dac16c73df1915fd4edb99ffa3b1ce7059925f8", published_at: 2026-07-08T19:00:56Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-24, EVT-8], excerpt: "timestamp 2026-07-08T19:00:56.000000Z status ok block_number 4591195 from 0xb252140D8Db40Ca2dC2D28f17C1B771796Af0960 to null (contract creation) created_contract 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F name RobinhoodLocker is_verified true." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x6Bf43Ca706FAa8EA46803299C191484e82280652", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x6Bf43Ca706FAa8EA46803299C191484e82280652", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x6Bf43Ca706FAa8EA46803299C191484e82280652 is_contract true is_verified true name RobinhoodBurner creator_address_hash 0xEbd295ad27DfB3BEEf43F33e5bfd9F546B0CEEA4 creation_transaction_hash 0x5397e60582b7aec4d2f3c98682485aafb064578ac4621a2b9ab7b48c4b58c92e." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E is_contract true is_verified true name RobinhoodVesting creator_address_hash 0xdEDAB6c10f26d8681aF8C6daD6aF42F2b7B1DAf0 creation_transaction_hash 0xd23e271a85da33c1f4b522a14efd7663f372e6cdda790d2977083d887f012641." }
  - { id: R-13, publisher: Blockscout, title: "LOCK creation tx 0xe85df1f0…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xe85df1f01b4fcedb2e2c29b0f37da4582a073945441f0da4c1d5a3876045e197", published_at: 2026-08-01T19:12:01Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-8, CLM-9, EVT-7], excerpt: "timestamp 2026-08-01T19:12:01Z status ok block 25280576 from 0x79c1230cAb12d53D040f5FE1F5279e1A481CCeA2 to PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB method launchToken params name HoodLock symbol LOCK twitter https://x.com/HoodLockRH. UniswapV3Pool 0x4562cA679DcCc38f2dd59d28B2eBFEC99f507AF2; UNI-V3-POS 547003 to PonsLaunchLocker 0x736D76699C26D0d966744cAe304C000d471f7F35." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "eth_getCode and locker/token views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-19, CLM-21, CLM-24, CLM-25, CLM-26, CLM-27], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x329efcb (53080011). LOCK eth_getCode len 10550 name HoodLock symbol LOCK totalSupply 1e27 deployer 0x79c1230cAb12d53D040f5FE1F5279e1A481CCeA2. Locker eth_getCode len 9884 admin 0x79c1…CeA2 fee 0.005 ETH feeCollector 0x58EE7b355F6e347e9874deD2e877D0C7b9726B4F totalLocks 192. Burner DEAD 0x000…dEaD. Vesting MAX_FEE 0.05 ETH." }
  - { id: R-15, publisher: DexScreener, title: "LOCK token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-9, CLM-12, CLM-13, CLM-32], excerpt: "pair 0x4562cA679DcCc38f2dd59d28B2eBFEC99f507AF2 chainId robinhood dexId uniswap labels v3 baseToken LOCK quoteToken WETH; volume.h24 48402.95 liquidity.usd 33439.04 marketCap 97761 priceUsd 0.00009778 pairCreatedAt 1785611521000. websites https://hoodlock.tech/ socials x.com/HoodLockRH discord.gg/MwCGm9WCXf." }
  - { id: R-16, publisher: DefiLlama, title: "protocols list (no HoodLock row)", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "8169 protocol rows. No name, slug or twitter matching HoodLock, hoodlock or HoodLockRH." }
  - { id: R-17, publisher: "@HoodLockRH", title: "10% of total supply locked for 180d", url: "https://x.com/HoodLockRH/status/2095294717588037917", published_at: 2026-09-02T23:36:04Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "10% of total supply locked for 180d ✅🔒" }
  - { id: R-18, publisher: "@HoodLockRH", title: "$1,510,000 current value locked", url: "https://x.com/HoodLockRH/status/2095267279164330100", published_at: 2026-09-02T21:47:02Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "$1,510,000 is the current value locked on https://Hoodlock.tech" }
  - { id: R-19, publisher: "@HoodLockRH", title: "Revenue share to $LOCK lockers is live", url: "https://x.com/HoodLockRH/status/2095142387764940851", published_at: 2026-09-02T13:30:45Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-28, EVT-3], excerpt: "Revenue share to our $LOCK lockers is live at https://hoodlock.tech/app/revenue CA 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94" }
  - { id: R-20, publisher: "@HoodLockRH", title: "The launchpad is live on Robinhood Chain", url: "https://x.com/HoodLockRH/status/2094907969779511505", published_at: 2026-09-01T21:59:16Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-14, CLM-31, EVT-4], excerpt: "The launchpad is live on Robinhood Chain. https://hoodlock.tech/app/launch 1% trading fee, 70% to creator and 30% to Hoodlock. This is why locking $LOCK pays you a share of all trading fees." }
  - { id: R-21, publisher: "@HoodLockRH", title: "Zedkr partnership and ZED lock", url: "https://x.com/HoodLockRH/status/2094863317567205483", published_at: 2026-09-01T19:01:50Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "You can now order anything on Amazon with $LOCK! @ZedkrPay makes $LOCK the first partner token across Zedkr Shop and Zedkr Cash. The team at @ZedkrPay has also locked 210,000,000 $ZED, 21% of supply through HoodLock." }
  - { id: R-22, publisher: "@HoodLockRH", title: "Delta locked 10%; launchpad coming soon", url: "https://x.com/HoodLockRH/status/2094510425287090400", published_at: 2026-08-31T19:39:34Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Did you know @deltaliquidity has locked 10% of their supply with Hoodlock. We are expanding Hoodlock and launching our own token launchpad with 50% revenue share directly back to $LOCK lockers. Coming soon.... CA 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94" }
  - { id: R-23, publisher: HoodLock, title: "App — launch, revenue, admin handover", url: "https://hoodlock.tech/app/launch", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-14, CLM-23, CLM-28, CLM-31], excerpt: "CHAIN 4663 · LIVE. Launch a token: paired with ETH, trade fee 1.00%, tradable immediately, liquidity locked forever, team supply 0–10% keep/lock/vest/burn. $LOCK contract 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94. Locker admin handover: The locker still answers to its original deploy wallet." }
  - { id: R-24, publisher: HoodLock, title: "Documentation home", url: "https://hoodlock.tech/docs", published_at: 2026-07-29, accessed_at: 2026-09-03T02:41:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-20, CLM-29], excerpt: "Token locker, liquidity locker, token vesting, token burning. vs StonkBrokers: Also on this chain, and it locks the v3 and v4 positions we cannot. Mostly complementary. FAQ: Why can't I lock my Uniswap v3 position?" }
  - { id: R-25, publisher: Discord, title: "HoodLock.tech community invite", url: "https://discord.gg/hdXKRP9BN", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "Check out the HoodLock.tech community on Discord - hang out with 539 other members. Invite https://discord.com/invite/hdXKRP9BN. A second invite discord.gg/MwCGm9WCXf on DexScreener resolves to the same community title." }
  - { id: R-27, publisher: Grok research desk, title: "X fill round 6 — HoodLock", url: "https://github.com/harsharn10/proofline/blob/main/research/inbox/2026-08-31-x-fill-6.md", published_at: 2026-08-31, accessed_at: 2026-09-03T02:30:00Z, kind: third-party-data, authority: unknown, authenticity: unconfirmed, supports: [CLM-30], excerpt: "$LOCK CA in official bio 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94 (ignore a third-party CA 0x76af8d3B…). Claimed 3M+ TVL locked. Tree: tooling/locker native (UNCX stays imported dependency). Pad is announced, locker claimed live." }

gaps:
  - { priority: P0, question: "What is the launchpad factory/strategy address on 4663, and does it hold LP as an NFT HoodLock cannot lock?", checked: "docs/contracts lists locker, burner, vesting only; /app/launch UI is live; no factory eth_getCode this pass", next: "decode a launch tx from the app or find the factory in verified source / Blockscout internal txs from the admin EOA" }
  - { priority: P0, question: "What is the USD value of tokens sitting in RobinhoodLocker (the $1.51M / 3M+ posts)?", checked: "totalLocks() 192; DexScreener LOCK/WETH pool liquidity $33,439 is not locker TVL; no Llama row", next: "sum token balances of 0xD0f7…C32F per locksByToken or Locked events, price each ERC-20" }
  - { priority: P0, question: "Does verified RobinhoodLocker source match the docs claim that no admin function can move locked tokens?", checked: "Blockscout is_verified true; docs list withdraw gated on lock owner and unlockTime; this pass did not line-read the verified source", next: "read verified source on Blockscout for withdraw/onlyAdmin and any rescue path" }
  - { priority: P1, question: "What is the full 20-byte third-party LOCK address 0x76af8d3B… named in the 2026-08-31 intake?", checked: "bio CA 0xd5BF…4B94 reproduced; truncated third-party CA not resolved on Blockscout search this pass", next: "recover the full address from the intake thread or a DexScreener/Blockscout token named LOCK" }
  - { priority: P1, question: "Is there an audit of RobinhoodLocker / Burner / Vesting?", checked: "site, docs, X bio, GitHub search q=hoodlock, 2026-09-03", next: "ask the project in public if a report exists and record the URL as a claim" }
  - { priority: P2, question: "Has locker admin been handed from creator 0xb252… to 0x79c1… on-chain, and is the 50/50 fee splitter deployed?", checked: "admin() is 0x79c1…; app still says original deploy wallet; feeCollector 0x58EE…6B4F unreproduced as a splitter", next: "eth_getCode 0x58EE…6B4F and scan admin-transfer logs on the locker" }
---

# HoodLock — research packet

## What it is

Native ERC-20 locker on Robinhood Chain. A user approves a token, pays a flat ETH fee, and verified RobinhoodLocker holds the balance until an unlock time that can only be extended. The same suite burns to the dead address and vests with a cliff. $LOCK is a Pons-launched token at hoodlock.tech / @HoodLockRH. Uniswap v3 and v4 LP NFTs are not lockable here.

Themes: tooling, launchpad, nft
