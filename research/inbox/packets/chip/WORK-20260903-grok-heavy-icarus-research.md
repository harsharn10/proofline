---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: chip
name: CHIP
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [chip]
allowed_paths:
  - research/inbox/packets/chip/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CHIP
  aliases: ["Cyber Hardware-Integrated Pup"]
  symbols: [CHIP]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://CHIPxAMD.com
  official_handle: "NULL — launch socials twitter https://x.com/chip_amd; DexScreener info.socials and CHIPxAMD.com footer https://x.com/CHIPxAMD; Gecko twitter_handle chip_amd; @CHIPxAMD bio names $CHIP / AMD/CHIP without the CA; X user search for chip_amd returned no @chip_amd this pass; flag unconfirmed-official | handle-collision"
  repository: "NULL — no GitHub org or repository URL on CHIPxAMD.com, DexScreener, Gecko token info, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "CHIP is the ERC-20 at 0xE38B…C6E59 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; CHIPxAMD.com / @CHIPxAMD do not operate the Pons pad"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CHIP is PonsV2LauncherToken 0xE38B…C6E59 paired to AMD 0x86923f…3fdC via PonsV2LaunchAndBuy, not LongLauncher"
        - "Shared quote rail AMD only; no shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CHIP is ticker CHIP at 0xE38B…C6E59 paired to AMD; @CHIPxAMD bio calls it $AI’s little brother without a shared CA"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xE38B…C6E59 is a verified PonsV2LauncherToken with non-empty code on 4663; creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchAndBuy at 2026-09-01T02:40:50Z minted Cyber Hardware-Integrated Pup / CHIP against AMD 0x86923f…3fdC and CurveCompleted at 2026-09-01T02:42:47Z into Uniswap v4 pool 0x05153549…. AMD is the quote rail. Distinct from in-flight MD/AMD and from MEOW/GB on the same rail. [R-1] [R-4] [R-5] [R-6] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://CHIPxAMD.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/CHIPxAMD", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/CHIPxAMD", authenticity: unconfirmed }

deployments:
  - label: CHIP token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer (token creator)
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-15]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x05690b3F905F2250ac21F95bC36Ee942Df8db0E0"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:09:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-16]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-15]
  - label: AMD • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 775160.8, currency: USD, as_of: 2026-09-03T04:06:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 pair 0x05153549… CHIP/AMD volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 42606.14, currency: USD, as_of: 2026-09-03T04:07:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x051535496d045a87f9abe2380aba1bb3d5eaa744953478ea1fc1c1d84ed58b10 reserve_in_usd (CHIP/AMD pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 228458, currency: USD, as_of: 2026-09-03T04:06:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 pair 0x05153549… CHIP/AMD fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 776, currency: null, as_of: 2026-09-03T04:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a9b82 (53123970). Token 0xE38B…C6E59 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Cyber Hardware-Integrated Pup, symbol CHIP, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0xa26474d01bB8b9e783575605b90250cB8e5D665A (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x05690b3F905F2250ac21F95bC36Ee942Df8db0E0. socials() twitter https://x.com/chip_amd website https://ChipAMD.com telegram/discord/farcaster empty." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:09:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16], result: "Blockscout api/v2 token 0xE38B…C6E59 name Cyber Hardware-Integrated Pup symbol CHIP holders_count 776 total_supply 1e27 contract name PonsV2LauncherToken is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0x97c64296…a678. launchAndBuy tx 2026-09-01T02:40:50Z block 51370230 from EOA 0xa26474…665A to PonsV2LaunchAndBuy 0xe33E…2948 pairToken AMD 0x86923f…3fdC. TokenLaunched curve 0x05690b…b0E0 graduationThreshold 16.6655e18. CurveCompleted tx 0x84266156…39fd 2026-09-01T02:42:47Z block 51371378 LaunchSwept same token quoteOut 16.6655e18." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xE38B…C6E59: 8 robinhood uniswap pairs; top CHIP/AMD v4 0x05153549… quote 0x86923f…3fdC AMD • Robinhood Token / AMD liquidity.usd 38174.55 volume.h24 775160.8 fdv/marketCap 228458 pairCreatedAt 1788230567000 (2026-09-01T02:42:47Z) info.websites https://CHIPxAMD.com info.socials x.com/CHIPxAMD t.me/CHIPxAMD. Secondary CHIP/WETH and CHIP/USDG books far thinner. Distinct DexScreener AMD books: MD/AMD 0x3abb…1e18, MEOW/AMD 0x7235…1e18, GB/AMD 0xD786…517E, CHIPS/AMD 0xbcd0…4d97." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-8, R-9], result: "Gecko pool 0x05153549… name AMD / CHIP pool_created_at 2026-09-01T02:42:47Z volume_usd.h24 660058.85 reserve_in_usd 42606.14 fdv_usd 1746392.16 (pool base is AMD 0x86923f…3fdC, quote is CHIP 0xE38B…C6E59; dex pons-v2-dex). Gecko token name Cyber Hardware-Integrated Pup fdv_usd 242360.89 market_cap_usd null volume_usd.h24 675571.38 (all pools). Token info websites [https://ChipAMD.com] twitter_handle chip_amd launchpad_details completed true completed_at 2026-09-01T02:42:47Z migrated_destination_pool_address 0x05153549…." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol AMD hit 1: tokenName AMD • Robinhood Token deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:09:00Z, receipt_ids: [R-5, R-13, R-14, R-18], result: "token.socials() twitter https://x.com/chip_amd website https://ChipAMD.com. ChipAMD.com HTTP 404 Vercel DEPLOYMENT_NOT_FOUND. CHIPxAMD.com title Cybernetic CHIP; HTML embeds CA 0xE38B…C6E59, AMD 0x86923f…3fdC, pair 0x05153549…, footer https://x.com/CHIPxAMD. @CHIPxAMD bio Community takeover / $CHIP paired to AMD without the CA. t.me/CHIPxAMD og:title Chip Community | $CHIP x $AMD, 173 members, no CA in the preview. t.me/chip_amd is a contact page, not a group." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken AMD; CurveCompleted / LaunchSwept ~2 minutes later seeds Uniswap v4 CHIP/AMD via pool 0x05153549… (Gecko dex pons-v2-dex). Verified token source: entire supply mints to the curve; deployer is immutable reference data with no token privileges.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-2, R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Cyber Hardware-Integrated Pup", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CHIP", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-2, R-4, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; launch socials https://x.com/chip_amd; DexScreener and CHIPxAMD.com name @CHIPxAMD; Gecko twitter_handle chip_amd; @CHIPxAMD bio has no CA; flag unconfirmed-official | handle-collision", class: claim, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-7, R-9, R-13, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from in-flight MD (A Machine Duck 0x3abb…1e18 MD/AMD 0x197d…9655), MEOW 0x7235…1e18 MEOW/AMD 0xc057…9132, GB Gigabyte 0xD786…517E GB/AMD 0x9264…7635, and CHIPS Chips Party Pack 0xbcd0…4d97. Shared rail is AMD 0x86923f…3fdC only. AMD is a rail, not this token.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-12, R-19], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko AMD/CHIP pool 24h volume 660058.85 USD and reserve_in_usd 42606.14 at 2026-09-03T04:07:00Z (Gecko pool slice; pool fdv_usd 1746392.16 is the AMD-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 38174.55 volume.h24 775160.8 fdv/marketCap 228458 at 2026-09-03T04:06:00Z", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 776, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Deployer 0xa26474…665A has no code.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0xa26474d01bB8b9e783575605b90250cB8e5D665A; launchFactory 0x7eD5…EC7e; curve 0x05690b…b0E0", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is AMD 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC (GET /rhj/assets active Robinhood Token); venue is Uniswap v4 pool 0x05153549…, Gecko dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-8, R-12, R-16], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, PairLaunchpadV5, or stonks.fun", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on CHIPxAMD.com, DexScreener, Gecko, Blockscout, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://CHIPxAMD.com", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 242360.89; DexScreener fdv/marketCap 228458. Gecko pool fdv_usd 1746392.16 is the inverted AMD/CHIP book. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-12, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x05690b3F905F2250ac21F95bC36Ee942Df8db0E0", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "unconfirmed-official | handle-collision: token.socials name @chip_amd / ChipAMD.com (404 this pass); DexScreener and live site name @CHIPxAMD / CHIPxAMD.com; CHIPxAMD.com embeds this CA; @CHIPxAMD bio does not; t.me/CHIPxAMD is a third-party-link with no CA in the preview", class: claim, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-7, R-13, R-14, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "chip | CHIP | NULL | https://CHIPxAMD.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "CHIPxAMD.com claims a 2% swap fee converted into tokenized AMD and streamed to holders via distributor 0x897B3704…904A (Blockscout BeaconProxy). That fee path was not reproduced on the CHIP/AMD pool this pass.", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@CHIPxAMD.role", value: project, class: claim, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@CHIPxAMD.slug", value: chip, class: claim, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@CHIPxAMD.note", value: "unconfirmed-official | handle-collision for CA 0xE38B…C6E59; CHIPxAMD.com footer; bio names $CHIP / AMD/CHIP without the CA; launch socials were @chip_amd", class: claim, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener CHIP/AMD 24h volume $775k, Gecko liq $42.6k"
    summary: "DexScreener pair 0x05153549… volume.h24 775160.8 liquidity.usd 38174.55 fdv 228458. Gecko same pool reserve_in_usd 42606.14 volume_usd.h24 660058.85."
    occurred_at: 2026-09-03T04:06:00Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@KadyBit posted the CHIP CA and AMD pair"
    summary: "@KadyBit posted $CHIP x @AMD, CA 0xE38B…C6E59, and meme-plus-AMD on RH."
    occurred_at: 2026-09-03T01:14:23Z
    observed_at: 2026-09-03T04:09:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: ct
    title: "@CHIPxAMD posted a 1B supply ladder"
    summary: "@CHIPxAMD: 1 MIL, 10 MIL, 100 MIL, 500 MIL => 1B $CHIP. Bio names $CHIP paired to AMD without the CA."
    occurred_at: 2026-09-02T12:31:45Z
    observed_at: 2026-09-03T04:09:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: onchain
    title: "Pons curve completed; LaunchSwept CHIP vs AMD"
    summary: "Tx 0x84266156…39fd at 2026-09-01T02:42:47Z; quoteOut 16.6655e18 AMD into pool 0x05153549…."
    occurred_at: 2026-09-01T02:42:47Z
    observed_at: 2026-09-03T04:09:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "PonsV2LaunchAndBuy minted Cyber Hardware-Integrated Pup / CHIP"
    summary: "Tx 0x97c64296…a678 from 0xa26474…665A at 2026-09-01T02:40:50Z; TokenLaunched pool quote AMD; socials twitter x.com/chip_amd website ChipAMD.com."
    occurred_at: 2026-09-01T02:40:50Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism, identity.handle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xE38B…C6E59 Cyber Hardware-Integrated Pup / CHIP", url: "https://robinhoodchain.blockscout.com/address/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 name PonsV2LauncherToken is_contract true is_verified true proxy_type null. token name Cyber Hardware-Integrated Pup symbol CHIP decimals 18 total_supply 1000000000000000000000000000 holders_count 776 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x97c64296a6d2d444bbbf221d243f119d57944ee7d2db725f1bb89473ffc4a678." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59?tab=contract", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-01T02:44:48Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory; entire supply mints to the bonding curve; deployer is immutable reference data and confers no privileges." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x97c64296…a678", url: "https://robinhoodchain.blockscout.com/tx/0x97c64296a6d2d444bbbf221d243f119d57944ee7d2db725f1bb89473ffc4a678", published_at: 2026-09-01T02:40:50Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-09-01T02:40:50.000000Z status ok block_number 51370230 from 0xa26474d01bB8b9e783575605b90250cB8e5D665A (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Cyber Hardware-Integrated Pup symbol CHIP twitter https://x.com/chip_amd website https://ChipAMD.com pairToken 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on CHIP", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a9b82 (53123970). Token code 3248 B prefix 60806040. name Cyber Hardware-Integrated Pup symbol CHIP decimals 18 totalSupply 1e27. owner() factory() revert. deployer() 0xa26474d01bB8b9e783575605b90250cB8e5D665A code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x05690b3F905F2250ac21F95bC36Ee942Df8db0E0. socials() twitter https://x.com/chip_amd website https://ChipAMD.com." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for CHIP", url: "https://robinhoodchain.blockscout.com/tx/0x97c64296a6d2d444bbbf221d243f119d57944ee7d2db725f1bb89473ffc4a678", published_at: 2026-09-01T02:40:50Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22, EVT-5], excerpt: "PonsV2LaunchFactory TokenLaunched token 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 curve 0x05690b3F905F2250ac21F95bC36Ee942Df8db0E0 deployer 0xa26474d01bB8b9e783575605b90250cB8e5D665A pairToken 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC launchConfigId 0 graduationThreshold 16665504590959022517. Block 51370230." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens CHIP", url: "https://api.dexscreener.com/latest/dex/tokens/0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-24, EVT-1], excerpt: "8 robinhood uniswap pairs. Top pairAddress 0x051535496d045a87f9abe2380aba1bb3d5eaa744953478ea1fc1c1d84ed58b10 labels v4 base Cyber Hardware-Integrated Pup / CHIP quote AMD • Robinhood Token / AMD 0x86923f96…3fdC liquidity.usd 38174.55 volume.h24 775160.8 fdv 228458 marketCap 228458 pairCreatedAt 1788230567000. info.websites https://CHIPxAMD.com info.socials x.com/CHIPxAMD t.me/CHIPxAMD." }
  - { id: R-8, publisher: GeckoTerminal, title: "AMD/CHIP Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x051535496d045a87f9abe2380aba1bb3d5eaa744953478ea1fc1c1d84ed58b10", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name AMD / CHIP pool_created_at 2026-09-01T02:42:47Z fdv_usd 1746392.16 market_cap_usd 1746394.38 volume_usd.h24 660058.847265346 reserve_in_usd 42606.1429. dex pons-v2-dex quote robinhood_0xe38b1c963afc21f06b9e82a2de36a84fbb9c6e59." }
  - { id: R-9, publisher: GeckoTerminal, title: "Cyber Hardware-Integrated Pup token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xe38b1c963afc21f06b9e82a2de36a84fbb9c6e59", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-20], excerpt: "name Cyber Hardware-Integrated Pup symbol CHIP decimals 18 total_supply 1e27 price_usd 0.0002423608886 fdv_usd 242360.888603156 market_cap_usd null volume_usd.h24 675571.380182505 total_reserve_in_usd 26574.21. info websites [https://ChipAMD.com] twitter_handle chip_amd. launchpad_details completed true completed_at 2026-09-01T02:42:47Z migrated_destination_pool_address 0x05153549…." }
  - { id: R-10, publisher: GeckoTerminal, title: "CHIP token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xe38b1c963afc21f06b9e82a2de36a84fbb9c6e59/pools", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "Row 1 AMD / CHIP 0x05153549… reserve_in_usd 42575.54 volume_usd.h24 660058.85 pool_created_at 2026-09-01T02:42:47Z. Row 2 CHIP / USDG reserve 3113.00 volume 12534.30. Row 3 CHIP / WETH reserve 816.87 volume 4393.19." }
  - { id: R-11, publisher: DexScreener, title: "CHIP/AMD pair page", url: "https://dexscreener.com/robinhood/0x051535496d045a87f9abe2380aba1bb3d5eaa744953478ea1fc1c1d84ed58b10", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "CHIP/AMD Cyber Hardware-Integrated Pup on Uniswap v4 (Robinhood). Pair 0x05153549… CHIP 0xE38B…C6E59 AMD 0x86923f…3fdC." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol AMD hit 1: tokenName AMD • Robinhood Token status ASSET_STATUS_ACTIVE deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663 networkName Robinhood Chain." }
  - { id: R-13, publisher: CHIPxAMD.com, title: "Cybernetic CHIP site", url: "https://CHIPxAMD.com", published_at: 2026-09-01T23:26:18Z, accessed_at: 2026-09-03T04:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-25, CLM-26, CLM-27, CLM-28], excerpt: "title Cybernetic CHIP — The onchain $AMD community. HTML embeds $CHIP CA 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59, $AMD CA 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC, pair 0x05153549…, distributor 0x897B3704…904A, footer https://x.com/CHIPxAMD. Meta: 2% of every swap comes back to holders as tokenized $AMD." }
  - { id: R-14, publisher: Telegram, title: "t.me/CHIPxAMD", url: "https://t.me/CHIPxAMD", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-23], excerpt: "HTTP 200. og:title Chip Community | $CHIP x $AMD. og:description HOLD $CHIP get $AMD REWARDS https://CHIPxAMD.com. tgme_page_extra 173 members, 39 online. No contract address in the preview HTML this pass." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-5], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x84266156…39fd", url: "https://robinhoodchain.blockscout.com/tx/0x84266156f09c547bbd644dd2caea25af797f50438f2abcf8675cad8f69a039fd", published_at: 2026-09-01T02:42:47Z, accessed_at: 2026-09-03T04:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-22, EVT-4], excerpt: "timestamp 2026-09-01T02:42:47.000000Z status ok block_number 51371378 from 0xE9E21C24eB95DdD6056b7236c3361f4dA913Ec75 to 0x65050A9b7E5075A2bA5cED7b1b64EE66262c40Dc. PonsV2BondingCurve CurveCompleted recipient 0x7eD5…EC7e quoteOut 16665504590959022572 tokenOut 285714285714285714291837161. LaunchSwept token 0xE38B…C6E59 same quoteOut/tokenOut." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x86923f…3fdC AMD • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name AMD • Robinhood Token symbol AMD decimals 18 holders_count 36215." }
  - { id: R-18, publisher: "@CHIPxAMD", title: "1 MIL … 1B $CHIP", url: "https://x.com/CHIPxAMD/status/2095127538607571431", published_at: 2026-09-02T12:31:45Z, accessed_at: 2026-09-03T04:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-23, CLM-26, CLM-27, CLM-28, EVT-3], excerpt: "Bio: Community takeover. The ticker is $CHIP ($AI’s little brother) $CHIP is paired to AMD - AMD/CHIP. Post: 1 MIL, 10 MIL, 100 MIL, 500 MIL => 1B $CHIP. No contract in the bio this pass." }
  - { id: R-19, publisher: DexScreener, title: "search CHIP AMD robinhood neighboring AMD books", url: "https://api.dexscreener.com/latest/dex/search?q=MD%20AMD", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood MD/AMD 0x3abb8d686dF6e538bb0887917d14f04f705f1e18 pair 0x197db3e3…9655 name A Machine Duck. MEOW/AMD 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 pair 0xc057cb73…9132. GB/AMD 0xD78650f3A96e55e0710282c4f459AC556ef3517E pair 0x9264f0d7…7635 name Gigabyte. CHIPS/AMD 0xbcd09284…4d97 name Chips Party Pack. CHIP/AMD 0xE38B…C6E59 pair 0x05153549…." }
  - { id: R-20, publisher: "@KadyBit", title: "$CHIP said fuck traditional marketing", url: "https://x.com/KadyBit/status/2095319459745747271", published_at: 2026-09-03T01:14:23Z, accessed_at: 2026-09-03T04:09:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "$CHIP said fuck traditional marketing $chip x @AMD meme coin + $AMD on RH = free distribution to CT. 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59" }
  - { id: R-21, publisher: Telegram, title: "t.me/chip_amd contact page", url: "https://t.me/chip_amd", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "HTTP 200. og:title Telegram: Contact @chip_amd. No tgme_page_extra member count. Not a public group preview this pass." }

gaps:
  - { priority: P0, question: "Which handle, if either, bidirectionally links to token 0xE38B…C6E59?", checked: "launch socials @chip_amd / ChipAMD.com (404); DexScreener and CHIPxAMD.com name @CHIPxAMD; @CHIPxAMD bio has no CA, 2026-09-03", next: "re-read @CHIPxAMD bio after a CA pin; confirm whether @chip_amd exists" }
  - { priority: P1, question: "Does CHIPxAMD.com’s 2% AMD stream actually run through distributor 0x897B…904A on the CHIP/AMD book?", checked: "Site HTML names the distributor and 2% fee; no pool-level fee reproduction this pass, 2026-09-03", next: "read Pons v2 distributor API / on-chain fee events for this token" }
  - { priority: P1, question: "Does t.me/CHIPxAMD pin the CA 0xE38B…C6E59?", checked: "public preview og:title Chip Community | $CHIP x $AMD, 173 members, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Is ChipAMD.com a parked launch-metadata domain or a later redirect to CHIPxAMD.com?", checked: "token.socials and Gecko websites list ChipAMD.com; HTTP 404 Vercel DEPLOYMENT_NOT_FOUND, 2026-09-03", next: "re-fetch ChipAMD.com after a deploy" }
---

# CHIP — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against AMD. PonsV2LaunchAndBuy deploys Cyber Hardware-Integrated Pup (CHIP) in one launchAndBuy call, seeds a bonding curve, then sweeps into the CHIP/AMD book. Traders buy and sell CHIP on Uniswap v4. AMD is the quote rail, not this token. CHIPxAMD.com embeds this CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:AMD, rwa, pons-graduation

## Why it matters

The CHIP/AMD Uniswap v4 book printed about $775k of 24h volume on DexScreener and about $42.6k of Gecko pool reserve at collection, against an active Robinhood AMD Stock Token. Several other AMD-paired names (MD, MEOW, GB, CHIPS) share that rail and are different tokens.

## What could go wrong

USD liquidity figures on the CHIP/AMD book count both sides, and the quote side is AMD, not USDG. Gecko pool fdv treats AMD as the base and is not the CHIP token fdv. Launch metadata points at @chip_amd / ChipAMD.com; the live site and DexScreener point at @CHIPxAMD / CHIPxAMD.com. Handle stays unconfirmed-official.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xa26474…665A at 2026-09-01T02:40:50Z minted Cyber Hardware-Integrated Pup / CHIP supply 1e9*1e18 onto PonsV2BondingCurve 0x05690b…b0E0 quoted against pairToken AMD 0x86923f…3fdC. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 16.6655e18. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept in tx 0x84266156…39fd at 2026-09-01T02:42:47Z moved 16.6655e18 AMD and ~2.857e8 CHIP into Uniswap v4 pool 0x05153549…. Gecko labels the book dex pons-v2-dex. Secondary CHIP/USDG and CHIP/WETH books exist with far less reserve than the AMD book. [verified R-8 R-10 R-16]

Verified token source says the entire supply mints to the curve, the deployer is immutable reference data, and there is no token owner. factory() on the token reverts; launchFactory() returns 0x7eD5…EC7e. [verified R-2 R-5]

CHIPxAMD.com claims a 2% swap fee converted into tokenized AMD streamed to holders via distributor 0x897B…904A. That path was not reproduced on the pool this pass. [claim R-13]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data with no privileges. Deployer 0xa26474…665A has no code. launchFactory and curve are set at construction. [verified R-2 R-5]

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35 for the token). AMD is a verified BeaconProxy. No audit report URL was located this pass. [verified R-2 R-3 R-15 R-17] [unknown]

## Team and provenance

Launch socials stored on the token are https://x.com/chip_amd and https://ChipAMD.com. ChipAMD.com returned Vercel DEPLOYMENT_NOT_FOUND. CHIPxAMD.com embeds CA 0xE38B…C6E59 and links https://x.com/CHIPxAMD. @CHIPxAMD bio names $CHIP / AMD/CHIP without the CA. t.me/CHIPxAMD titles Chip Community | $CHIP x $AMD with 173 members and no contract in the public preview. Flag unconfirmed-official and handle-collision. [claim R-5 R-13 R-14 R-18]

## Economics and activity

CHIP/AMD Uniswap v4 DexScreener 24h volume is 775160.8 USD and liquidity.usd is 38174.55 at 2026-09-03T04:06:00Z. fdv/marketCap 228458. Pair created 2026-09-01T02:42:47Z. [claim R-7]

Gecko same pool: volume_usd.h24 660058.85 and reserve_in_usd 42606.14 at 2026-09-03T04:07:00Z. Gecko pool fdv_usd 1746392.16 is the AMD-as-base book. Gecko token fdv_usd 242360.89 and volume_usd.h24 675571.38 across all pools, not the AMD book. [claim R-8 R-9]

Blockscout holders_count 776. [claim R-1]

## Material risks

- Quote token AMD 0x86923f…3fdC is an active Robinhood Token in GET /rhj/assets; CHIP is not that token. [verified R-12 R-17]
- Pool USD reserve is CHIP plus AMD, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko pool fdv inverts the book (AMD base). [claim R-8 R-9]
- No bidirectional official handle this pass; @chip_amd vs @CHIPxAMD is a handle-collision. [claim R-7 R-13 R-18]
- Site 2% AMD stream was not reproduced on-chain this pass. [claim R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/curve/AMD and both launch and graduation txs, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener, Gecko pool/token/pools, /rhj/assets, CHIPxAMD.com, Telegram previews, and the @CHIPxAMD / @KadyBit posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 775160.8 is the DexScreener CHIP/AMD pair 24h volume, not the 675571.38 Gecko token all-pools figure. Reserve 42606.14 is the Gecko pool. DexScreener liquidity.usd 38174.55 is the same pair, different aggregator. Gecko pool fdv 1746392.16 is AMD-as-base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that CHIP is the AMD Stock Token, or that it is MD / MEOW / GB / CHIPS on the same rail, or that @CHIPxAMD is already official. /rhj/assets AMD is 0x86923f…3fdC, those four AMD books have different CAs, and @CHIPxAMD bio does not embed 0xE38B…C6E59. [inference R-12 R-19 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no chip / CHIP / 0xE38B…C6E59. content/dependencies/stock-tokens.yaml AMD address matches 0x86923f…3fdC.
- Explorer: Blockscout api/v2 token, deployer, factory, curve, launchAndBuy, AMD, launchAndBuy 0x97c64296…a678, CurveCompleted 0x84266156…39fd, TokenLaunched and LaunchSwept logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53123970.
- Aggregators: DexScreener latest/dex/tokens and search MD AMD; Gecko token, token/info, pool, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 AMD hit at 0x86923f…3fdC.
- Social: X user search CHIPxAMD / chip_amd; from:CHIPxAMD Latest; keyword CHIP AMD 0xE38B; t.me/CHIPxAMD and t.me/chip_amd previews.
- Site: CHIPxAMD.com HTML CA extract; ChipAMD.com 404.
- Failed: ChipAMD.com Vercel DEPLOYMENT_NOT_FOUND; X user search chip_amd returned no @chip_amd; token owner()/factory() revert (launchFactory() used instead).
- Time: collection 2026-09-03T04:06Z–2026-09-03T04:12Z.
