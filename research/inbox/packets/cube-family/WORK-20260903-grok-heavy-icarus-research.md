---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: cube-family
name: cube.family
packet_tier: seed
as_of: 2026-09-03T05:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [cube-family]
allowed_paths:
  - research/inbox/packets/cube-family/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Cube Family
  aliases: [Cube, "cube.family"]
  symbols: [CUBE]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://cube.family
  official_handle: "@CubeFamilyX"
  repository: "NULL — api.github.com/orgs and /users cubefamily, cube-family, cubefamilyx HTTP 404; verified Factory source has no GitHub URL; cube.family timed out this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "Cube Family is a Uniswap v4 hook pad at cube.family / @CubeFamilyX with Factory 0x47b495aae1f4E7f233CD50c6f49E83098be8d210"
        - "No shared domain, handle, or reproduced address"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace at hookr.fun / @Hookrfun"
        - "Cube Family's CubeHook sits on pools its own Factory creates; it is not a hook marketplace"
        - "No shared domain, handle, or reproduced address"
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census What The Hook is an MEV-redistribution hook at @whatthehookv4"
        - "Cube Family is a token launchpad whose CubeHook collects swap fees into holder or creator shares plus a CubeFeeVault"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired token factory at app.long.xyz / @longdotxyz"
        - "Cube Family can allowlist ERC-20 quotes including Robinhood stock tokens, but the live factory is 0x47b495aa…d210, not LongLauncher"
        - "No shared domain, handle, or reproduced factory"

classification:
  primary_leaf: launch/hook-programmable
  secondary_leaves: []
  mechanism_tags: [launchpad, amm, fee-routing, rwa, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Verified Factory 0x47b495aa…d210 on chain 4663: deployCoin creates an ERC-20 via TokenDeployer CREATE2 and a Uniswap v4 pool with CubeHook. RPC tokenCount() 62, publicDeployEnabled() 1, CREATOR_SHARE_BPS 8000, cubeHook 0x6EB98e97…00cC, feeVault 0x72362D60…542a. Genesis $CUBE 0xBE2fBD69…Ce1000 is a factory output with holder mode and ETH quote. Distinct from census Pons, Hookr, What The Hook, and LONG, and from packed pads Coinbarrel, Klik, Sentry, Varo, LetsCash. Not a census row. cube.family timed out this pass. [R-8] [R-9] [R-10] [R-13] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-14], note: "" }

links:
  - { kind: site, url: "https://cube.family", authenticity: unconfirmed }
  - { kind: app, url: "https://cube.family", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/CubeFamilyX", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/CubeFamilyTG", authenticity: unconfirmed }
  - { kind: other, url: "https://cube.family/analytics", authenticity: unconfirmed }

deployments:
  - label: Factory
    role: factory
    address:
      value: "0x47b495aae1f4E7f233CD50c6f49E83098be8d210"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9, R-10, R-17]
  - label: TokenDeployer
    role: other
    address:
      value: "0x3b1FC108635465bcDdeAD7f19Ba65808f2768B3b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-11]
  - label: CubeHook
    role: other
    address:
      value: "0x6EB98e97D0efaEb784CA4E8Ee55F7bFb5E5800cC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-12, R-14]
  - label: CubeFeeVault
    role: vault
    address:
      value: "0x72362D60d6148A07EF3C27be298394219efd542a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8, R-13]
  - label: ClaimRouter
    role: router
    address:
      value: "0xE9C3DC2dfa5AcB1B1e81fB09942A9985Dab6089D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-21]
  - label: Cube genesis token
    role: token
    address:
      value: "0xBE2fBD6916C5899901eB9319e67C8D1525Ce1000"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-8, R-15, R-16]
  - label: Factory / CubeHook / CubeFeeVault owner()
    role: admin
    address:
      value: "0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-8, R-13, R-20]

metrics:
  - { kind: holders, value: 85, currency: null, as_of: 2026-09-03T05:13:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xBE2fBD6916C5899901eB9319e67C8D1525Ce1000 holders_count", class: claim, receipt_ids: [R-15] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-9, R-10], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 53160839. Factory 0x47b495aa…d210 eth_getCode 16755 bytes prefix 0x6080604052600436; nonce 4; owner() 0xc8d3aa83…0ddb; cubeHook() 0x6eb98e97…00cc; feeVault() 0x72362d60…542a; claimRouter() 0xe9c3dc2d…089d; tokenDeployer() 0x3b1fc108…8b3b; tokenCount() 62; publicDeployEnabled() 1; CREATOR_SHARE_BPS() 8000; pendingOwner() reverts; ERC1967 implementation slot zero. Blockscout api/v2 name Factory is_verified true is_fully_verified true proxy_type null file_path contracts/factory.sol." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-12, R-13, R-14, R-20], result: "CubeHook 0x6EB98e97…00cC eth_getCode 6264 bytes; owner() 0xc8d3aa83…0ddb; factory() 0x47b495aa…d210. CubeFeeVault 0x72362D60…542a eth_getCode 2245 bytes; owner() 0xc8d3aa83…0ddb. Owner 0xC8D3AA83…0ddb eth_getCode 0x; nonce 0x62 (98). Blockscout owner is_contract false. Hook name CubeHook is_verified true is_fully_verified false is_partially_verified true file_path contracts/hookV2.sol. Vault name CubeFeeVault is_verified true." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:13:00Z, receipt_ids: [R-8, R-15, R-16], result: "CUBE 0xBE2fBD69…Ce1000 eth_getCode 5874 bytes; name() Cube; symbol() CUBE; totalSupply() 1e24 (1_000_000e18); owner() reverts; ERC1967 slot zero. Factory tokenHolderMode(CUBE) 1; tokenQuote(CUBE) address(0). Blockscout name Token is_verified true; token Cube / CUBE holders_count 85; creator TokenDeployer 0x3b1FC108…8B3b; creation tx 0xe67b6fa5…4de2 timestamp 2026-08-15T03:00:07Z method deployCoin from 0xC8D3AA83…0ddb to Factory." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1, R-2, R-10, R-19], result: "@CubeFamilyX display name Cube; bio Token launchpad on Robinhood Chain, built on Uniswap v4; website cube.family; user id 2088022921545498624 joined 2026-08-13. Verified Factory / TokenDeployer / CubeHook / CubeFeeVault headers name https://cube.family, x.com/CubeFamilyTG, t.me/CubeFamilyTG. t.me/CubeFamilyTG HTTP 200 og:title Cube. cube.family TCP timeout this pass; X Latest from:CubeFamilyX returned no posts this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One payable deployCoin call CREATE2-deploys an ERC-20 via TokenDeployer and opens a Uniswap v4 pool with CubeHook. Quote is pool currency0: address(0) native ETH or an allowlisted ERC-20. Holder-rewards mode streams CREATOR_SHARE_BPS 8000 (80%) of each swap fee to holders; the remaining 20% is forwarded to CubeFeeVault. Creator-rewards mode sends that 80% to a fee recipient instead. Rules are set at launch.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://cube.family", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@CubeFamilyX", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Cube Family", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x47b495aae1f4E7f233CD50c6f49E83098be8d210", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-9, R-10, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-9, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/hook-programmable, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-10, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-13, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "Factory, TokenDeployer, CubeFeeVault, ClaimRouter, and CUBE token are not ERC1967 proxies: Blockscout proxy_type null and RPC implementation slot zero. CubeHook is not a proxy.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract is named. owner() on Factory, CubeHook, and CubeFeeVault is EOA 0xC8D3AA83…0ddb with no code. pendingOwner() on the Factory reverts (plain Ownable, not Ownable2Step).", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-10, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "tokenCount() 62 at block 53160839. publicDeployEnabled() 1. Latest inbound Factory deployCoin this pass 2026-08-21T11:41:13Z tx 0x468d2c45…7044. Genesis CUBE deployCoin 2026-08-15T03:00:07Z.", class: verified, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-8, R-16, R-18], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-13, field: identity.symbol, value: "CUBE", class: verified, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-4, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Distinct from census Pons (ponsfamily.com / @ponsdotfamily), Hookr (hookr.fun / @Hookrfun), What The Hook (@whatthehookv4), and LONG (@longdotxyz). No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T05:14:00Z, receipt_ids: [R-1, R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: relationship, value: "Distinct from packed pads Coinbarrel (coinbarrel.com / @UseCoinbarrel / V5 launcher 0x4234e536…e70), Klik (klik.finance / @klik_evm / factory 0x16cF6788…0dd7), Sentry (sentry.trading / @sentrylauncher), Varo (varo.rialto.xyz / @launchonvaro), and LetsCash (letscash.fun / @letscashfun). Cube Family Factory 0x47b495aa…d210 is not those launchers.", class: claim, observed_at: 2026-09-03T05:14:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x6EB98e97D0efaEb784CA4E8Ee55F7bFb5E5800cC", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-8, R-12, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: deployment.address, value: "0xBE2fBD6916C5899901eB9319e67C8D1525Ce1000", class: verified, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-4, R-15, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-18, field: "account.@CubeFamilyX.official", value: "Handle website field names cube.family. Verified contract headers name cube.family. cube.family timed out this pass so HTML twitter:site was not read. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-19, field: "account.@CubeFamilyX.slug", value: cube-family, class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@CubeFamilyX.role", value: project, class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "NULL — GitHub org/user cubefamily, cube-family, cubefamilyx 404; Factory github_repository_metadata null; cube.family timed out", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-10, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.alias, value: "Cube", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-1, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "@CubeFamilyX posted 2026-08-15T01:21:43Z that cube.family is live, 23 pairs, one transaction, 80% of every swap fee to holders.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@CubeFamilyX posted 2026-08-15T01:40:05Z that $CUBE is not live yet, there is no contract address and no presale, and any $CUBE trading then was fake. The same handle posted 2026-08-15T03:00:19Z that $CUBE IS LIVE at 0xbe2fbd69…ce1000, ETH pair, holder rewards on.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: security.audit, value: "No audit report URL was located on the verified Factory/CubeHook headers, the @CubeFamilyX posts recovered this pass, or t.me/CubeFamilyTG; cube.family timed out", class: unknown, observed_at: 2026-09-03T05:14:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: control.privileged-role, value: "Verified Factory is Ownable. onlyOwner: setCubeHook, setFeeVault, setQuoteAllowed, setPublicDeployEnabled, transferOwnership, renounceOwnership. CubeHook is Ownable with setFactory. CubeFeeVault is Ownable and only the owner can withdraw ETH or tokens.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-10, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-27, field: other, value: "Verified source headers name x.com/CubeFamilyTG and t.me/CubeFamilyTG. The posting handle recovered this pass is @CubeFamilyX. Telegram @CubeFamilyTG og:title Cube. These are not a census handle collision.", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-10, R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-28, field: other, value: "api.llama.fi/protocol/cube-family and /cubefamily HTTP 400. api.llama.fi/protocol/cube HTTP 200 is a Solana Dexs row twitter cubee_ee, not this pad. Do not use that TVL slice. Gecko skipped: packet GET was 404.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "Verified Factory constructor deploys CubeFeeVault, ClaimRouter, and TokenDeployer in one transaction; CubeHook is passed in (CREATE2-mined). Native ETH quote is always allowed. setCubeHook can replace the hook address after deploy.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-10, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "Blockscout token Cube/CUBE holders_count 85 at 2026-09-03T05:13Z; totalSupply 1_000_000e18. Exchange-rate and market-cap fields on that page were not used (possible aggregator feed; Gecko skipped).", class: claim, observed_at: 2026-09-03T05:13:00Z, receipt_ids: [R-15], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "RPC: Factory has code, tokenCount 62, matching CubeHook and CubeFeeVault"
    summary: "Factory 0x47b495aa…d210 on chain 4663 has 16755-byte verified contracts/factory.sol, tokenCount() 62, publicDeployEnabled 1, cubeHook 0x6EB98e97…00cC, feeVault 0x72362D60…542a, and owner 0xC8D3AA83…0ddb. Latest inbound deployCoin this pass is 2026-08-21T11:41:13Z."
    occurred_at: 2026-08-21T11:41:13Z
    observed_at: 2026-09-03T05:13:00Z
    affected_fields: [deployment.address, control.owner, lifecycle, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9, R-18]
  - id: EVT-2
    type: company
    title: "@CubeFamilyX posts that cube.family is live"
    summary: "On 2026-08-15T01:21:43Z the handle posted that cube.family is live, with 23 pairs, one transaction, and 80% of every swap fee to holders."
    occurred_at: 2026-08-15T01:21:43Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [communications.status, lifecycle, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-3
    type: company
    title: "@CubeFamilyX posts $CUBE not live, then $CUBE IS LIVE with CA"
    summary: "At 2026-08-15T01:40:05Z the handle posted that the platform token had not launched and any $CUBE trading then was fake. At 2026-08-15T03:00:19Z it posted $CUBE IS LIVE at 0xbe2fbd69…ce1000. Factory deployCoin for that token landed at 2026-08-15T03:00:07Z."
    occurred_at: 2026-08-15T03:00:19Z
    observed_at: 2026-09-03T05:13:00Z
    affected_fields: [communications.status, identity.symbol, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3, R-4, R-16]
  - id: EVT-4
    type: onchain
    title: "Factory, CubeFeeVault, TokenDeployer, and ClaimRouter created in one tx"
    summary: "Tx 0x0b1ecc24…02a1 at 2026-08-15T00:46:59Z block 36695115 from EOA 0xC8D3AA83…0ddb created Factory 0x47b495aa…d210. The same hash is the creation transaction for CubeFeeVault, TokenDeployer, and ClaimRouter."
    occurred_at: 2026-08-15T00:46:59Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: company
    title: "@CubeFamilyX posts protocol-revenue vault address"
    summary: "On 2026-08-15T04:03:05Z the handle posted that protocol revenue collects in CubeFeeVault 0x72362D60…542a and pointed at cube.family/analytics."
    occurred_at: 2026-08-15T04:03:05Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [deployment.address, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: "@CubeFamilyX", title: "Cube profile", url: "https://x.com/CubeFamilyX", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-8, CLM-14, CLM-18, CLM-19, CLM-20, CLM-22], excerpt: "Display name Cube. Handle @CubeFamilyX. User id 2088022921545498624. Bio: Token launchpad on Robinhood Chain, built on Uniswap v4. Pair with ETH, memecoins, or real stock tokens. 80% of every swap fee goes to holders. Website cube.family. Joined 2026-08-13. Followers about 180. X Latest from:CubeFamilyX returned no posts this pass." }
  - { id: R-2, publisher: "@CubeFamilyX", title: "cube.family is live", url: "https://x.com/CubeFamilyX/status/2088435937520886268", published_at: 2026-08-15T01:21:43Z, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-1, CLM-23, EVT-2], excerpt: "https://cube.family is live. 23 pairs. One transaction. 80% of every swap fee → holders. No staking, no snapshots, rules locked forever. Go launch something → https://cube.family" }
  - { id: R-3, publisher: "@CubeFamilyX", title: "$CUBE is not live yet", url: "https://x.com/CzArmyBull/status/2088460052445134934", published_at: 2026-08-15T01:40:05Z, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, EVT-3], excerpt: "Quoted @CubeFamilyX at 2026-08-15T01:40:05Z: $CUBE is not live yet. The platform token has not launched. There is no contract address and no presale, so any $CUBE trading right now is fake. The official address will be announced on our X and Telegram, and shown on this site." }
  - { id: R-4, publisher: "@CubeFamilyX", title: "$CUBE IS LIVE", url: "https://x.com/0xFizzz/status/2088463503803736387", published_at: 2026-08-15T03:00:19Z, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-13, CLM-17, CLM-24, EVT-3], excerpt: "Quoted @CubeFamilyX at 2026-08-15T03:00:19Z: $CUBE IS LIVE. CA: 0xbe2fbd6916c5899901eb9319e67c8d1525ce1000. The genesis token of Cube Family is here. ETH pair. Holder rewards ON. Hold $CUBE → earn ETH. 80% of every swap fee, paid straight to holders, in real ETH." }
  - { id: R-5, publisher: "@CubeFamilyX", title: "protocol revenue vault", url: "https://x.com/CubeFamilyX/status/2088476545643880921", published_at: 2026-08-15T04:03:05Z, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "Full transparency isn't a promise, it's an address. All protocol revenue collects in one public contract, on-chain, in every pair asset. Vault: https://robinhoodchain.blockscout.com/address/0x72362D60d6148A07EF3C27be298394219efd542a Analytics: https://cube.family/analytics" }
  - { id: R-6, publisher: "@CubeFamilyX", title: "protocol revenue receipts", url: "https://x.com/CubeFamilyX/status/2088512049013731661", published_at: 2026-08-15T06:24:09Z, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "we said protocol revenue has one job. receipts: 0.275 ETH → 13,667 $CUBE → 0x…dEaD. supply only goes down. Burn TX: 0xc3692e4e19ae69db395f4006da1eeebd2229c33cdcc357907064bc659162386a Buy TX: 0xe0ba78c0562a50ab8d775a965aa00598d6e0e813661d9419886d14b1a85e68d1" }
  - { id: R-7, publisher: "@CubeFamilyX", title: "12 hours since launch", url: "https://x.com/CubeFamilyX/status/2088634018455523382", published_at: 2026-08-15T14:28:49Z, accessed_at: 2026-09-03T05:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "12 hours since launch. → $75K in total volume → 37,721 $CUBE burned — 3.7% of supply, gone → $500 in platform revenue, already funding the next buyback. Every number verifiable on-chain." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode / owner / cubeHook / tokenCount / CREATOR_SHARE_BPS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-9, CLM-10, CLM-11, CLM-12, CLM-16, CLM-26, CLM-29, EVT-1], excerpt: "eth_chainId 0x1237. block 53160839. Factory 0x47b495aa…d210 code 16755 B nonce 4 owner 0xc8d3aa83…0ddb cubeHook 0x6eb98e97…00cc feeVault 0x72362d60…542a claimRouter 0xe9c3dc2d…089d tokenDeployer 0x3b1fc108…8b3b tokenCount 62 publicDeployEnabled 1 CREATOR_SHARE_BPS 8000 pendingOwner revert ERC1967 slot 0x0." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x47b495aae1f4E7f233CD50c6f49E83098be8d210", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x47b495aae1f4E7f233CD50c6f49E83098be8d210", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-10, CLM-14, CLM-15, EVT-1], excerpt: "name Factory is_contract true is_verified true proxy_type null implementations []. creator_address_hash 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb. creation_transaction_hash 0x0b1ecc243604daab788420220dc762d15b058bd4be8eb9011179dac80b8302a1." }
  - { id: R-10, publisher: Blockscout, title: "Smart contract contracts/factory.sol", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0x47b495aae1f4E7f233CD50c6f49E83098be8d210", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-7, CLM-8, CLM-10, CLM-11, CLM-14, CLM-15, CLM-18, CLM-21, CLM-26, CLM-27, CLM-29], excerpt: "name Factory file_path contracts/factory.sol compiler v0.8.28+commit.7893614a is_verified true is_fully_verified true. Header: CUBE FAMILY Token launchpad on Robinhood Chain, built on Uniswap v4 https://cube.family · x.com/CubeFamilyTG · t.me/CubeFamilyTG. CREATOR_SHARE_BPS 8000. constructor(address _cubeHook) 0x6EB98e97…00cC. github_repository_metadata null." }
  - { id: R-11, publisher: Blockscout, title: "Address TokenDeployer 0x3b1FC108…8B3b", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x3b1FC108635465bcDdeAD7f19Ba65808f2768B3b", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-29], excerpt: "name TokenDeployer is_contract true is_verified true proxy_type null. creator_address_hash 0x47b495aae1f4E7f233CD50c6f49E83098be8d210. creation_transaction_hash 0x0b1ecc243604daab788420220dc762d15b058bd4be8eb9011179dac80b8302a1. RPC eth_getCode 9465 bytes nonce 0x3f (63)." }
  - { id: R-12, publisher: Blockscout, title: "Address CubeHook 0x6EB98e97…00cC", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x6EB98e97D0efaEb784CA4E8Ee55F7bFb5E5800cC", published_at: null, accessed_at: 2026-09-03T05:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-16], excerpt: "name CubeHook is_contract true is_verified true proxy_type null. creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C (CREATE2 deployer). smart-contract file_path contracts/hookV2.sol is_fully_verified false is_partially_verified true. Header names cube.family and CubeFamilyTG." }
  - { id: R-13, publisher: Blockscout, title: "Address CubeFeeVault 0x72362D60…542a", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x72362D60d6148A07EF3C27be298394219efd542a", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "name CubeFeeVault is_contract true is_verified true proxy_type null. creator_address_hash 0x47b495aae1f4E7f233CD50c6f49E83098be8d210. creation_transaction_hash 0x0b1ecc24…02a1. RPC eth_getCode 2245 bytes; owner() 0xc8d3aa8358a365e0f6d055d88bef835bd51d0ddb." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "eth_getCode / owner / factory CubeHook", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "CubeHook 0x6EB98e97…00cC eth_getCode 6264 bytes prefix 0x6080604052348015. owner() 0xc8d3aa83…0ddb. factory() 0x47b495aa…d210." }
  - { id: R-15, publisher: Blockscout, title: "Token Cube / CUBE 0xBE2fBD69…Ce1000", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xBE2fBD6916C5899901eB9319e67C8D1525Ce1000", published_at: null, accessed_at: 2026-09-03T05:13:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-17, CLM-22, CLM-30], excerpt: "address_hash 0xBE2fBD6916C5899901eB9319e67C8D1525Ce1000 name Cube symbol CUBE decimals 18 type ERC-20 holders_count 85 total_supply 1000000000000000000000000. Address page name Token is_verified true creator 0x3b1FC108…8B3b creation tx 0xe67b6fa5…4de2." }
  - { id: R-16, publisher: Blockscout, title: "CUBE deployCoin transaction", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xe67b6fa54e309fbde2682217e48c28c2e6a4f471812693c7b801220d7dd54de2", published_at: 2026-08-15T03:00:07Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-17, EVT-3], excerpt: "hash 0xe67b6fa54e309fbde2682217e48c28c2e6a4f471812693c7b801220d7dd54de2 timestamp 2026-08-15T03:00:07Z block 36774818 status ok method deployCoin from 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb to Factory 0x47b495aae1f4E7f233CD50c6f49E83098be8d210." }
  - { id: R-17, publisher: Blockscout, title: "Factory creation transaction", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x0b1ecc243604daab788420220dc762d15b058bd4be8eb9011179dac80b8302a1", published_at: 2026-08-15T00:46:59Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-29, EVT-4], excerpt: "hash 0x0b1ecc243604daab788420220dc762d15b058bd4be8eb9011179dac80b8302a1 timestamp 2026-08-15T00:46:59Z block 36695115 status ok from 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb created_contract Factory 0x47b495aae1f4E7f233CD50c6f49E83098be8d210." }
  - { id: R-18, publisher: Blockscout, title: "Factory inbound transactions", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x47b495aae1f4E7f233CD50c6f49E83098be8d210/transactions?filter=to", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-1], excerpt: "Latest to-factory txs this pass: deployCoin 2026-08-21T11:41:13Z tx 0x468d2c4531f1777b69f23b9d17697cf301659abc8b18efd8f7c0d8d5381b7044 from 0x389AdF88…5339 status ok; seven further deployCoin from the same sender between 11:38:58Z and 11:40:53Z." }
  - { id: R-19, publisher: Telegram, title: "t.me/CubeFamilyTG", url: "https://t.me/CubeFamilyTG", published_at: null, accessed_at: 2026-09-03T05:13:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27], excerpt: "HTTP 200. title Telegram: View @CubeFamilyTG. og:title Cube. og:description You can view and join @CubeFamilyTG right away." }
  - { id: R-20, publisher: Blockscout, title: "Address 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11], excerpt: "hash 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb. is_contract false. is_verified false. name null. creation_transaction_hash null. RPC eth_getCode 0x; nonce 0x62 (98)." }
  - { id: R-21, publisher: Blockscout, title: "Address ClaimRouter 0xE9C3DC2d…089D", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe9c3dc2dfa5acb1b1e81fb09942a9985dab6089d", published_at: null, accessed_at: 2026-09-03T05:13:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-29], excerpt: "name ClaimRouter is_contract true is_verified true proxy_type null. creator_address_hash 0x47b495aae1f4E7f233CD50c6f49E83098be8d210. creation_transaction_hash 0x0b1ecc24…02a1. RPC eth_getCode 1025 bytes." }
  - { id: R-22, publisher: GitHub, title: "orgs/cubefamily", url: "https://api.github.com/orgs/cubefamily", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-21], excerpt: "HTTP 404 for https://api.github.com/orgs/cubefamily, /users/cubefamily, /orgs/cube-family, /users/cube-family, /orgs/cubefamilyx, /users/cubefamilyx this pass." }
  - { id: R-23, publisher: DefiLlama, title: "protocol/cube-family and protocol/cube", url: "https://api.llama.fi/protocol/cube-family", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-28], excerpt: "GET api.llama.fi/protocol/cube-family HTTP 400. GET /protocol/cubefamily HTTP 400. GET /protocol/cube HTTP 200 name Cube category Dexs chains [Solana] twitter cubee_ee. That row is not cube.family / @CubeFamilyX." }

gaps:
  - { priority: P0, question: "Does cube.family currently serve HTML that bidirectional-links @CubeFamilyX, and is the launch console still taking deployCoin quotes including stock tokens?", checked: "curl https://cube.family/ timed out (28) on 2026-09-03T05:03Z and 05:07Z; jina.ai fetch 422 timeout; web.archive.org/cdx timed out; X Latest from:CubeFamilyX returned no posts", next: "retry the site; if it returns, copy title, canonical, twitter:site, and any factory address in the page or JS bundle" }
  - { priority: P0, question: "Why did X Latest from:CubeFamilyX return no posts this pass while indexed copies of 15 Aug posts still exist?", checked: "x_keyword_search from:CubeFamilyX Latest empty; x_user_search did not return @CubeFamilyX (unrelated Cube Family fan accounts only); posts recovered via quote tweets and media URLs, 2026-09-03", next: "open the profile in a later pass; do not treat silence as a lifecycle change while the factory still has code" }
  - { priority: P1, question: "Is there a second Factory as CubeFeeVault comments ('Both factories') imply, and what is its address?", checked: "One Factory 0x47b495aa…d210 on 4663 this pass; constructor deploys vault/router/deployer; CubeHook is separate CREATE2, 2026-09-03", next: "search Blockscout for a second Cube Family Factory; do not invent a twin" }
  - { priority: P1, question: "Is there an audit report whose scope matches Factory 0x47b495aa…d210 and CubeHook 0x6EB98e97…00cC?", checked: "verified source headers, recovered X posts, Telegram og tags; cube.family timed out, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P2, question: "Which GitHub commit, if any, matches contracts/factory.sol on Blockscout?", checked: "api.github.com orgs/users cubefamily, cube-family, cubefamilyx 404; Factory github_repository_metadata null, 2026-09-03", next: "record a source mirror if one appears; do not treat Llama protocol/cube as this pad" }
  - { priority: P2, question: "Are 15 Aug $CUBE volume/burn/revenue figures (75k volume, 37721 burned, 500 platform revenue) still on-chain, and did later deployCoin calls continue after 21 Aug?", checked: "Factory inbound page first 50 to-txs end at 2026-08-21T11:41:13Z this pass; tokenCount 62; CUBE holders 85; buy/burn txs from the 15 Aug post were not re-decoded, 2026-09-03", next: "eth_call tokenByIndex across 0..61 and decode the named burn/buy txs" }
---

# cube.family — research packet

## What it is

Cube Family is a token launchpad on Robinhood Chain. A launch is one `deployCoin` transaction: TokenDeployer CREATE2-deploys an ERC-20 and Factory opens a Uniswap v4 pool with CubeHook. There is no bonding curve and no graduation. Swap fees split 80/20 on-chain (CREATOR_SHARE_BPS 8000) to holders or the creator, with the 20% platform share pushed to CubeFeeVault. The handle is @CubeFamilyX; the named site is cube.family.

Themes: launchpad

## Why it matters

The RH factory is verified and still has `publicDeployEnabled() == 1`, with `tokenCount()` 62. That is a live Uni v4 hook pad on this chain, not a bonding-curve name. Llama has no cube-family row; `protocol/cube` is a different Solana DEX. The pad is not a census row. [verified R-8 R-9] [claim R-23]

## What could go wrong

`owner()` on Factory, CubeHook, and CubeFeeVault is one externally owned account with no code. Verified source lets that address replace the hook, replace the vault, pause public deploy, and withdraw vault balances. There is no timelock. cube.family timed out this pass, so the live UI was not re-read. [verified R-8 R-10 R-20]

## Product and mechanics

Verified Factory: `deployCoin` checks `publicDeployEnabled` or `msg.sender == owner()`, require an allowlisted quote, CREATE2-deploys via TokenDeployer, calls `ICubeHook.setTokenFee`, emits `TokenLaunchConfig`, then `provideLiquidityV4` against Uniswap v4 PoolManager 0x8366a39c…0951 with CubeHook in the PoolKey. Holder mode versus creator mode is a boolean at launch. Native ETH quote cannot be toggled off. [verified R-10] [claim R-2]

## Control and security

`owner()` on Factory, CubeHook, and CubeFeeVault returns 0xC8D3AA8358a365E0f6D055d88BeF835bd51d0ddb. That address has no code and created the Factory. `pendingOwner()` reverts. None of the application contracts are ERC1967 proxies. CubeHook is verified but `is_fully_verified` false. No timelock address was located. [verified R-8 R-9 R-12 R-20]

## Team and provenance

@CubeFamilyX names cube.family in the website field. Verified contract headers name cube.family plus x.com/CubeFamilyTG and t.me/CubeFamilyTG. cube.family timed out, so HTML did not confirm twitter:site. No GitHub org or user. Flag unconfirmed-official. [claim R-1 R-10 R-19 R-22]

## Economics and activity

RPC `tokenCount()` 62 at block 53160839. Latest inbound `deployCoin` this pass is 2026-08-21T11:41:13Z. Genesis CUBE 0xBE2fBD69…Ce1000 is a factory output (holder mode, ETH quote) with Blockscout `holders_count` 85 and supply 1_000_000e18. 15 Aug handle posts claimed 75k volume / 500 platform revenue; those figures were not reproduced as a chain-slice metric this pass. Llama cube-family 400. [verified R-8 R-15 R-18] [claim R-7 R-23]

## Material risks

- Factory, CubeHook, and CubeFeeVault share one EOA owner with hook-replace, vault-replace, and vault-withdraw. [verified R-8 R-10]
- CubeHook source is only partially verified. [verified R-12]
- cube.family did not respond this pass; official UI and analytics were not re-read. [claim R-1]
- X Latest from:CubeFamilyX returned no posts this pass. [claim R-1]
- No audit report URL. [unknown]
- Llama `protocol/cube` is a different Solana DEX. [claim R-23]

## Verification passes

- Receipts: X profile and recovered 15 Aug posts, Telegram og tags, Blockscout api/v2 address/token/tx/source, RPC, GitHub 404, and Llama GETs were opened on 2026-09-03; cube.family timed out. Excerpts copied from those responses. [verified R-8 R-9 R-10]
- Numbers: tokenCount, CREATOR_SHARE_BPS, bytecode lengths, nonces, and owner() are chain 4663 RPC. holders_count 85 is the Blockscout token endpoint, not a Gecko figure. [verified R-8 R-15]
- Adversarial: strongest contrary reading is that 0x47b495aa…d210 is a leftover factory and new launches use a different pad, or that Cube Family is Hook.family / Pons.family. Verified source header names cube.family; RPC cubeHook and feeVault match Blockscout names CubeHook and CubeFeeVault; Factory address is not Coinbarrel 0x4234…e70 or Klik 0x16cF…0dd7. [inference R-9 R-10]

## Operations log

- Census.yaml has no cube-family row. Discovery inventory names cube-family | cube.family | @CubeFamilyX.
- Packet GET research/inbox/packets/cube-family/WORK-20260903-grok-heavy-icarus-research.md on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research HTTP 404, so this is a new seed. Gecko skipped.
- X Latest from:CubeFamilyX returned no posts. Profile and 15 Aug posts recovered from indexed copies and quote tweets (status 2088435937520886268, 2088476545643880921, 2088512049013731661, 2088634018455523382).
- cube.family curl timeout 28; www.cube.family timeout; r.jina.ai 422 timeout; web.archive.org/cdx timeout.
- t.me/CubeFamilyTG HTTP 200 og:title Cube.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner, pendingOwner, cubeHook, feeVault, claimRouter, tokenDeployer, tokenCount, publicDeployEnabled, CREATOR_SHARE_BPS, tokenHolderMode, tokenQuote, ERC1967 slot.
- Blockscout api/v2 for Factory, TokenDeployer, CubeHook, CubeFeeVault, ClaimRouter, CUBE token, owner, creation txs, inbound Factory txs, smart-contracts/factory.sol.
- api.llama.fi/protocol/cube-family 400, /cubefamily 400, /cube 200 Solana Dexs @cubee_ee (unused).
- api.github.com/orgs and /users cubefamily, cube-family, cubefamilyx HTTP 404.
