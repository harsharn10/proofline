---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: fatcoin
name: FATCOIN
packet_tier: seed
as_of: 2026-09-03T03:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [fatcoin]
allowed_paths:
  - research/inbox/packets/fatcoin/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: FATCOIN
  aliases: []
  symbols: [FATCOIN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is an X Community URL, not a project domain; Gecko token attributes have no website; X og:description has no domain; createLaunch metadata is an IPFS CID that did not return a body this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/FatcoinLLY; X og:title Fatcoin (@FatcoinLLY) bio names $FATCOIN and $LLY with no 0x12D5…8a01 string this pass; profile page links the DexScreener FATCOIN/LLY pair; X user search for FatcoinLLY returned unrelated handles; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token attributes, Blockscout token page, or the @FatcoinLLY profile this pass"
  possible_matches:
    - slug: peptides
      signals: [other]
      contrary_signals:
        - "Census-adjacent PEPTIDES is 0x52F380A513112428723abF8AFED125824E4A1e18 paired to the same LLY rail via LongLauncher 0x22e9…eeED / DopplerERC20V1Factory; site peptidesrh.com / @PeptidesRH"
        - "FATCOIN is 0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 paired to LLY via historical RWAERC20LaunchpadFactory 0xe64A…F297; DexScreener socials x.com/FatcoinLLY"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "FATCOIN is a token created by createLaunch on RWAERC20LaunchpadFactory 0xe64A…F297, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: o1-exchange
      signals: [other]
      contrary_signals:
        - "Census-adjacent o1.exchange is the launchpad; current production factory is 0xcE9C…5B0d"
        - "FATCOIN is entity_kind token; createLaunch ran on historical factory 0xe64A…F297; current factory had 0 Launched logs for this token"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "A second FATCOIN 0xb68CF66b…03Ba4 is named PonsV2LauncherToken on Blockscout, holders_count 11, FATCOIN/LLY pair 0x32fdb2c0…1a15 liq 4972.32"
        - "This packet's token is unverified 4657-byte runtime at 0x12D5ee79…8a01, holders_count 3437, factory() 0xe64A…F297"
        - "No shared factory, CA, or holder count"
    - slug: nudes
      signals: [other]
      contrary_signals:
        - "NUDES 0xbe98…7401 is the same historical factory createLaunch flow quoted against SNAP, not LLY"
        - "FATCOIN quotes LLY 0x8005d266…00ea and is a different CA"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x12D5ee79…8a01 has non-empty 4657-byte code on 4663; factory() returns historical RWAERC20LaunchpadFactory 0xe64A…F297; createLaunch minted FATCOIN into Uniswap v4 pool 0x46ba8216…af85 quoted against LLY 0x8005d266…00ea (GET /rhj/assets row, stock-token rail). Distinct from PEPTIDES/LLY. Token source is_verified false; handle is DexScreener socials plus an X profile whose bio has no CA. [R-1] [R-4] [R-5] [R-7] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/FatcoinLLY", authenticity: unconfirmed }
  - { kind: other, url: "https://x.com/i/communities/1939856297614352899", authenticity: unconfirmed }
  - { kind: other, url: "https://dexscreener.com/robinhood/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85", authenticity: unconfirmed }
  - { kind: other, url: "https://www.geckoterminal.com/robinhood/pools/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85", authenticity: unconfirmed }

deployments:
  - label: FATCOIN token
    role: token
    address:
      value: "0x12D5ee7917cA430073C3A638ee1e6f0648A98a01"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-2, R-5, R-18]
  - label: o1 historical RWAERC20LaunchpadFactory (createLaunch)
    role: factory
    address:
      value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5, R-6]
  - label: Historical LaunchHook (launch mint recipient)
    role: other
    address:
      value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-16]
  - label: Eli Lilly Robinhood Token (pair quote)
    role: token
    address:
      value: "0x8005d266423c7ea827372c9c864491e5786600ea"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-12, R-13]

metrics:
  - { kind: volume_24h, value: 1766901.39, currency: USD, as_of: 2026-09-03T03:45:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 68705.03, currency: USD, as_of: 2026-09-03T03:45:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85 reserve_in_usd (FATCOIN/LLY pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 402213.32, currency: USD, as_of: 2026-09-03T03:45:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1792589.86, currency: USD, as_of: 2026-09-03T03:45:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 pair 0x46ba8216…af85 FATCOIN/LLY Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 76140.78, currency: USD, as_of: 2026-09-03T03:45:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 pair 0x46ba8216…af85 FATCOIN/LLY Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 413306, currency: USD, as_of: 2026-09-03T03:45:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 pair 0x46ba8216…af85 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2915859.50, currency: USD, as_of: 2026-09-03T03:45:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x12d5ee7917ca430073c3a638ee1e6f0648a98a01 volume_usd.h24 (all listed pools, not the LLY book alone)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 3437, currency: null, as_of: 2026-09-03T03:45:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a6b1d (53111581). Token 0x12D5ee79…8a01 eth_getCode 4657 bytes prefix 0x60806040, not EIP-1167. name FATCOIN, symbol FATCOIN, decimals 18, totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. EIP-1967 implementation and admin slots zero." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-13, R-16, R-18], result: "Blockscout api/v2 token 0x12D5ee79…8a01 name FATCOIN symbol FATCOIN holders_count 3437 total_supply 1e27 is_verified false proxy_type null creator_address_hash null creation_transaction_hash null. Factory 0xe64A…F297 name RWAERC20LaunchpadFactory is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26. createLaunch tx 0xdda08489…3b88 2026-09-01T14:34:31Z block 51794698 from EOA 0xf372…b995 to factory method createLaunch. Decoded name/symbol FATCOIN/FATCOIN quote 0x8005d266…00ea. Launched token 0x12D5ee79…8a01 poolId 0x46ba8216…af85 supply 1e27. Mint 1e27 to LaunchHook 0x778b…EaCC; Seeded 999999999999999999999996453 to PoolManager 0x8366…0951. LLY 0x8005d266…00ea name Eli Lilly • Robinhood Token BeaconProxy holders_count 2202." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-8, R-9, R-19], result: "DexScreener latest/dex/tokens/0x12D5ee79…8a01: 27 robinhood uniswap pairs; top FATCOIN/LLY v4 0x46ba8216…af85 quote 0x8005d266…00ea Eli Lilly • Robinhood Token / LLY liquidity.usd 76140.78 volume.h24 1792589.86 fdv/marketCap 413306 pairCreatedAt 1788273271000 (2026-09-01T14:34:31Z) info.websites X Community 1939856297614352899 info.socials x.com/FatcoinLLY. Gecko pool: volume_usd.h24 1766901.39 reserve_in_usd 68705.03 fdv_usd 402213.32 pool_created_at 2026-09-01T14:34:31Z dex uniswap-v4-robinhood. Gecko token volume_usd.h24 2915859.50 (all listed pools, not the LLY book). Secondary FATCOIN/USDG v4 0xa659efd0…90e1 DexScreener liq 18060.49 volume.h24 983262.46; Gecko same id reserve_in_usd 79300.06 volume_usd.h24 960386.19." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol LLY hits 1. Row tokenName Eli Lilly • Robinhood Token contractAddress 0x8005d266423c7ea827372c9c864491e5786600ea chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-6], result: "Factory 0xe64A…F297 code 21680 B. owner() 0x5519a8cc7211f483e19ff8d50a3b0c892701044d (EOA, code 0x). hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. tokenDeployer() 0x6544af3524a8d9135eb5765cece6e514d85d615b. launchCreationEnabled() false. quotes(LLY) registered. Current factory 0xcE9C…5B0d code 24466 B; eth_getLogs Launched topic1=token returned 0 logs. Creator 0xf372…b995 code 0x. LLY code 283 B name Eli Lilly • Robinhood Token. Mint Transfer to_topic LaunchHook." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Historical RWAERC20LaunchpadFactory.createLaunch clones a 1e9-supply ERC-20 into a Uniswap v4 pool quoted against LLY. createLaunch from 0xf372…b995 at 2026-09-01T14:34:31Z minted FATCOIN / FATCOIN; Launched poolId 0x46ba8216…af85 quote 0x8005d266…00ea. Mint 1e27 to LaunchHook 0x778b…EaCC then Seeded 999999999999999999999996453 into PoolManager 0x8366…0951. Current factory 0xcE9C…5B0d had 0 Launched logs; launchCreationEnabled() on 0xe64A…F297 is false.", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "FATCOIN", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "FATCOIN", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x12D5ee7917cA430073C3A638ee1e6f0648A98a01", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle with the CA in the bio; DexScreener info.socials x.com/FatcoinLLY; X profile Fatcoin (@FatcoinLLY) website is the DexScreener pair; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-7, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote LLY 0x8005d266…00ea is the Eli Lilly • Robinhood Token rail in GET /rhj/assets (194 assets, 1 LLY hit, chainId 4663). Distinct from PEPTIDES 0x52F380A5…1e18 / pair 0x6a2423f7…0754, which quotes the same LLY via LongLauncher. Distinct from PonsV2 FATCOIN 0xb68CF66b…03Ba4 / pair 0x32fdb2c0…1a15.", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-12, R-13, R-15], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "FATCOIN/LLY Gecko 24h volume 1766901.39 USD and reserve_in_usd 68705.03 at 2026-09-03T03:45:00Z (Gecko pool slice, not Gecko token all-pools 2915859.50)", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 76140.78 volume.h24 1792589.86 fdv/marketCap 413306 at 2026-09-03T03:45:00Z", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 3437, class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; EIP-1967 slots zero; token is not a proxy. factory owner() 0x5519a8cc…044D has no code; launchCreationEnabled() false.", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "createLaunch from EOA 0xf372491Efb33887402640Adf744579601d76b995; CreatorRegistered token->that address; LaunchHook PoolRegistered creator same; factory owner 0x5519a8…044D; treasury 0x1cAa1962…1C90; tokenDeployer 0x6544af35…615b", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is LLY 0x8005d266423c7ea827372c9c864491e5786600ea; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x46ba8216…af85; Gecko dex uniswap-v4-robinhood", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; factory() and Launched name RWAERC20LaunchpadFactory 0xe64A…F297 as the pad, not LongLauncher, Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout token/factory pages, DexScreener, Gecko, or the @FatcoinLLY profile this pass", class: unknown, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists x.com/FatcoinLLY; X bio has no CA; profile website is the DexScreener pair; third-party-link netlify vote URLs embed the CA; copypasta-pattern listing-vote posts", class: claim, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-7, R-14, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 402213.32; DexScreener fdv/marketCap 413306. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x8005d266423c7ea827372c9c864491e5786600ea", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-6, R-12, R-13], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-4, R-6, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites X Community only; Gecko token has no website field", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "fatcoin | FATCOIN | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: PonsV2LauncherToken FATCOIN 0xb68CF66b498fF6350cf6B58E5707f3C700103Ba4 holders_count 11; DexScreener FATCOIN/LLY pair 0x32fdb2c0…1a15 liq 4972.32 volume.h24 13939.33 pairCreatedAt 2026-09-02T03:48:03Z. Not this token.", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Secondary books on DexScreener this pass include FATCOIN/USDG Uniswap v4 0xa659efd0…90e1 and FATCOIN/ETH books; LLY remains the launch quote", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-27, field: other, value: "Token source is_verified false on Blockscout; creator_address_hash null on the address page even though createLaunch logs identify the factory", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same FATCOIN/LLY Uniswap v4 pool 0x46ba8216…af85: DexScreener liquidity.usd 76140.78 volume.h24 1792589.86 fdv 413306 vs Gecko reserve_in_usd 68705.03 volume_usd.h24 1766901.39 fdv_usd 402213.32. Assignment hint ~$78420 / ~$1817912 was closer to DexScreener than to this Gecko slice."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko FATCOIN/LLY 24h volume $1.77M, liquidity $68.7k"
    summary: "Gecko pool 0x46ba8216…af85 volume_usd.h24 1766901 reserve_in_usd 68705 fdv_usd 402213. DexScreener same pair 1792589 / 76140 / 413306."
    occurred_at: 2026-09-03T03:45:00Z
    observed_at: 2026-09-03T03:45:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: disputed
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "Historical factory createLaunch minted FATCOIN against LLY"
    summary: "Tx 0xdda08489…3b88 from 0xf372…b995 at 2026-09-01T14:34:31Z; Launched poolId 0x46ba8216…af85 quote LLY."
    occurred_at: 2026-09-01T14:34:31Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-3
    type: ct
    title: "@FatcoinLLY profile lists the FATCOIN/LLY DexScreener pair"
    summary: "X og:title Fatcoin (@FatcoinLLY); bio $FATCOIN / $LLY with no CA; page links dexscreener.com/robinhood/0x46ba8216…af85. DexScreener socials list the same handle."
    occurred_at: 2026-09-02T20:58:25Z
    observed_at: 2026-09-03T03:49:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: ct
    title: "Netlify vote posts embedded the FATCOIN CA"
    summary: "Multiple X accounts posted robinhood-main-dex-*.netlify.app and currentleaderboardlist-on.netlify.app vote URLs with 0x12D5ee79…8a01. Flag third-party-link and copypasta-pattern."
    occurred_at: 2026-09-03T03:30:05Z
    observed_at: 2026-09-03T03:49:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: ct
    title: "@travisbickle0x named @FatcoinLLY as the FATCOIN/LLY ticket"
    summary: "@travisbickle0x 2026-09-03T03:27:34Z: FATCOIN is the greatest ticket paired with LLY; Dev is active @FatcoinLLY."
    occurred_at: 2026-09-03T03:27:34Z
    observed_at: 2026-09-03T03:49:00Z
    affected_fields: [identity.handle, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x12D5ee79…8a01 FATCOIN", url: "https://robinhoodchain.blockscout.com/address/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-27], excerpt: "hash 0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 name FATCOIN is_contract true is_verified false proxy_type null implementations []. token symbol FATCOIN decimals 18 total_supply 1000000000000000000000000000 holders_count 3437 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Token API 0x12D5ee79…8a01", url: "https://robinhoodchain.blockscout.com/token/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12], excerpt: "api/v2/tokens: address_hash 0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 name FATCOIN symbol FATCOIN decimals 18 total_supply 1000000000000000000000000000 holders_count 3437 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xe64A…F297 RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory is_contract true is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a verified_at 2026-07-24T21:56:18Z creator_address_hash 0xc103Fce99EA5aDAcDdECE634EA6D036a42e757aE. createLaunch tx 0xdda08489… calls this factory." }
  - { id: R-4, publisher: Blockscout, title: "createLaunch tx 0xdda08489…3b88", url: "https://robinhoodchain.blockscout.com/tx/0xdda08489c79cecfe4ebf9597096462ea33ac30b7c222b3f5beca732106193b88", published_at: 2026-09-01T14:34:31Z, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-09-01T14:34:31.000000Z status ok result success block_number 51794698 from 0xf372491Efb33887402640Adf744579601d76b995 (is_contract false) to RWAERC20LaunchpadFactory 0xe64AC411…F297 method createLaunch. decoded name FATCOIN symbol FATCOIN quote 0x8005d266423c7ea827372c9c864491e5786600ea metadata ipfs://bafkreihk4u72s5tdqrgcrusqxcrwbhjs43qbxnt7bn4mr3td26srn5r2ym." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory() on FATCOIN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17], excerpt: "Mozilla UA. eth_chainId 0x1237 (4663). eth_blockNumber 0x32a6b1d (53111581). Token code 4657 B prefix 0x60806040 not EIP-1167. name FATCOIN symbol FATCOIN decimals 18 totalSupply 1e27. factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297. owner() reverts. EIP-1967 slots zero. Factory code 21680 B. Current factory 0xcE9C…5B0d code 24466 B. LLY code 283 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), hook(), launchCreationEnabled(), Launched logs", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "block 53111581. factory owner() 0x5519a8cc7211f483e19ff8d50a3b0c892701044d code 0x. hook() 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC. tokenDeployer() 0x6544af3524a8d9135eb5765cece6e514d85d615b. launchCreationEnabled() false. eth_getLogs Launched topic1=0x12D5ee79…8a01 on 0xe64A…F297 tx 0xdda08489…3b88; on 0xcE9C…5B0d 0 logs. Mint to LaunchHook. Creator 0xf372…b995 code 0x. LLY name Eli Lilly • Robinhood Token." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens FATCOIN", url: "https://api.dexscreener.com/latest/dex/tokens/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, CLM-26, EVT-1], excerpt: "27 robinhood uniswap pairs. Top pairAddress 0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85 labels v4 base FATCOIN / FATCOIN quote Eli Lilly • Robinhood Token / LLY 0x8005d266…00ea liquidity.usd 76140.78 volume.h24 1792589.86 fdv 413306 marketCap 413306 pairCreatedAt 1788273271000. info.websites https://x.com/i/communities/1939856297614352899 label X Community. info.socials https://x.com/FatcoinLLY." }
  - { id: R-8, publisher: GeckoTerminal, title: "FATCOIN/LLY Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "Mozilla UA. name FATCOIN / LLY pool_created_at 2026-09-01T14:34:31Z fdv_usd 402213.3226 market_cap_usd null volume_usd.h24 1766901.39134603 reserve_in_usd 68705.0333 transactions.h24 buys 2873 sells 2402. dex uniswap-v4-robinhood quote robinhood_0x8005d266423c7ea827372c9c864491e5786600ea." }
  - { id: R-9, publisher: GeckoTerminal, title: "FATCOIN token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x12d5ee7917ca430073c3a638ee1e6f0648a98a01", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "Mozilla UA. name FATCOIN symbol FATCOIN decimals 18 total_supply 1e27 price_usd 0.0004022133226 fdv_usd 402213.322565742 market_cap_usd null volume_usd.h24 2915859.49957533 total_reserve_in_usd 102414.24. coingecko_coin_id null. No website field. Top pool 0x46ba8216…af85." }
  - { id: R-10, publisher: GeckoTerminal, title: "FATCOIN/LLY pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "FATCOIN/LLY on Uniswap V4 (Robinhood). Pool 0x46b…af85 FATCOIN 0x12d…8a01 LLY 0x800…00ea." }
  - { id: R-11, publisher: DexScreener, title: "FATCOIN/LLY pair page", url: "https://dexscreener.com/robinhood/0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "FATCOIN/LLY on Uniswap v4 (Robinhood). Pair 0x46b…af85 base 0x12D5ee79…8a01 quote 0x8005d266…00ea." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol LLY hits 1. tokenName Eli Lilly • Robinhood Token deployments contractAddress 0x8005d266423c7ea827372c9c864491e5786600ea chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: Blockscout, title: "Token 0x8005d266…00ea Eli Lilly Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x8005d266423c7ea827372c9c864491e5786600ea", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x8005d266423c7ea827372c9c864491e5786600ea name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6…5aE2. token name Eli Lilly • Robinhood Token symbol LLY decimals 18 total_supply 1031517000000000000000 holders_count 2202." }
  - { id: R-14, publisher: "@FatcoinLLY", title: "Fatcoin profile", url: "https://x.com/FatcoinLLY", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "HTTP 200. og:title Fatcoin (@FatcoinLLY) on X. og:description Sitting 24h a day making money with $FATCOIN made us fat. Fortunately Eli Lilly sells the cure. Paired with $LLY. Profile page includes dexscreener.com/robinhood/0x46ba8216…af85. No 0x12D5ee79…8a01 string in og:description this pass." }
  - { id: R-15, publisher: DexScreener, title: "latest/dex/tokens Pons FATCOIN 0xb68C…03Ba4", url: "https://api.dexscreener.com/latest/dex/tokens/0xb68CF66b498fF6350cf6B58E5707f3C700103Ba4", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "Blockscout name PonsV2LauncherToken holders_count 11. DexScreener FATCOIN/LLY uniswap v4 pair 0x32fdb2c0a96eaf86d432590635f638e1cd45dbd4744946b23142645aa69a1a15 liquidity.usd 4972.32 volume.h24 13939.33 pairCreatedAt 1788320883000 (2026-09-02T03:48:03Z). Distinct CA from 0x12D5ee79…8a01." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x778b…EaCC LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22], excerpt: "hash 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC name LaunchHook is_contract true is_verified true. createLaunch minted 1e27 FATCOIN to this hook then Seeded the pool. RPC hook() on 0xe64A…F297 returns this address. Code 10342 B." }
  - { id: R-17, publisher: "@pearltideaiNFT", title: "$FATCOIN listing vote netlify URL", url: "https://x.com/pearltideaiNFT/status/2095353612369113157", published_at: 2026-09-03T03:30:05Z, accessed_at: 2026-09-03T03:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-4], excerpt: "Attention $FATCOIN Family! YOUR vote matters! robinhood-main-dex-nqf.netlify.app/vote/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01. Same CA also appeared in currentleaderboardlist-on.netlify.app posts this pass." }
  - { id: R-18, publisher: Blockscout, title: "Launched log for FATCOIN", url: "https://robinhoodchain.blockscout.com/tx/0xdda08489c79cecfe4ebf9597096462ea33ac30b7c222b3f5beca732106193b88", published_at: 2026-09-01T14:34:31Z, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-2], excerpt: "Launched token 0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 poolId 0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85 creator 0xf372491Efb33887402640Adf744579601d76b995 quote 0x8005d266423c7ea827372c9c864491e5786600ea supply 1000000000000000000000000000 tickSpacing 200. PoolManager Initialize currency0 FATCOIN currency1 LLY hooks 0x778b…EaCC fee 0. Block 51794698." }
  - { id: R-19, publisher: GeckoTerminal, title: "FATCOIN token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x12d5ee7917ca430073c3a638ee1e6f0648a98a01/pools", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-26], excerpt: "Mozilla UA. Row 1 FATCOIN / LLY 0x46ba8216…af85 reserve_in_usd 68705.03 volume_usd.h24 1766865.21 fdv_usd 402183.16. Row 2 FATCOIN / USDG 4.012% 0xa659efd0…90e1 reserve 79300.06 volume 960386.19. Assignment hint ~$78420 / ~$1817912 matches the DexScreener LLY book this pass more closely than this Gecko LLY slice. trending_pools duration=24h first eight had no FATCOIN." }
  - { id: R-20, publisher: "@travisbickle0x", title: "FATCOIN greatest ticket paired with LLY", url: "https://x.com/travisbickle0x/status/2095352977066193286", published_at: 2026-09-03T03:27:34Z, accessed_at: 2026-09-03T03:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "I wasn't here for the drama but objectively FATCOIN is the greatest ticket paired with LLY. Dev is active @FatcoinLLY." }
  - { id: R-21, publisher: Blockscout, title: "LaunchHook / factory verified source names", url: "https://robinhoodchain.blockscout.com/address/0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297?tab=contract", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "ContractName RWAERC20LaunchpadFactory. ABI includes createLaunch and Launched(token, poolId, creator, quote, supply, tickSpacing). is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally embeds token 0x12D5ee79…8a01?", checked: "DexScreener info.socials x.com/FatcoinLLY; X bio has $FATCOIN/$LLY and no CA; profile links the DexScreener pair; user search returned unrelated handles, 2026-09-03", next: "re-read the X profile website field and any pinned post that embeds the CA" }
  - { priority: P0, question: "Which aggregator is right for FATCOIN/LLY USD liquidity, and why does Gecko FATCOIN/USDG reserve exceed the LLY book?", checked: "DexScreener LLY 76140.78 / 1792589.86 vs Gecko LLY 68705.03 / 1766901.39; Gecko USDG 4.012% reserve 79300.06 vs Dex 18060.49, 2026-09-03", next: "re-fetch both endpoints in the same minute and compare PoolManager reserves on RPC" }
  - { priority: P1, question: "Does createLaunch metadata ipfs://bafkreihk4u72s5tdqrgcrusqxcrwbhjs43qbxnt7bn4mr3td26srn5r2ym name a domain or handle?", checked: "ipfs.io GET returned empty body this pass", next: "resolve the CID on another gateway and parse JSON for website/twitter" }
  - { priority: P1, question: "Is FATCOIN bytecode verified anywhere, and does it match o1 launch-token bytecode at tokenDeployer 0x6544af35…615b?", checked: "is_verified false; 4657 bytes prefix 0x60806040; not EIP-1167, 2026-09-03", next: "compare bytecode hash to launchTokenBytecodeHash() on 0xe64A…F297" }
  - { priority: P2, question: "Does the PonsV2 FATCOIN 0xb68C…03Ba4 share a team with this o1 launch?", checked: "PonsV2LauncherToken holders_count 11, different factory, 2026-09-03", next: "read that create tx and any comms that cite 0xb68C…" }
  - { priority: P2, question: "Is there an audit whose scope includes historical factory 0xe64A…F297 / LaunchHook 0x778b…EaCC as used on this clone?", checked: "X profile, DexScreener, Blockscout token page this pass", next: "match XORS reports named in the o1-exchange packet to 0xe64A…F297" }
---

# FATCOIN — research packet

## What it is

A one-billion-supply ERC-20 created into a Uniswap v4 pool quoted against LLY. Historical RWAERC20LaunchpadFactory deploys FATCOIN in one createLaunch call and seeds the FATCOIN/LLY book. Traders buy and sell FATCOIN on Uniswap v4. LLY is the Robinhood stock-token rail, not the project. No official domain was located this pass; DexScreener lists x.com/FatcoinLLY without a CA in that profile bio.

Themes: memecoin, stock-paired:LLY, rwa

## Why it matters

The FATCOIN/LLY Uniswap v4 book printed about $1.79M of 24h volume on DexScreener at collection (Gecko printed $1.77M on the same pool id). The quote token is the Eli Lilly Robinhood Token in GET /rhj/assets. PEPTIDES quotes the same LLY rail through LongLauncher and is not this token.

## What could go wrong

USD liquidity figures on the FATCOIN/LLY book count both sides, and DexScreener and Gecko disagree on the same pool. A later Pons FATCOIN or PEPTIDES/LLY book is a different address. Token source is unverified and the Blockscout address page still has a null creator. The X handle is unconfirmed-official.

## Product and mechanics

FATCOIN is an ERC-20 at `0x12D5ee7917cA430073C3A638ee1e6f0648A98a01`. The launch book is Uniswap v4 FATCOIN/LLY (`0x46ba8216…af85`) with quote `0x8005d266423c7ea827372c9c864491e5786600ea`. [verified R-1 R-4 R-7]

The token was created on 2026-09-01T14:34:31Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named FATCOIN / FATCOIN and quoted LLY. `Launched` records pool id `0x46ba8216…af85`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token; `launchCreationEnabled()` on the historical factory is false. [verified R-4 R-5 R-6 R-18]

DexScreener also lists FATCOIN/USDG Uniswap v4 books and FATCOIN/ETH books. LLY remains the launch quote. [verified R-7 R-19]

PEPTIDES `0x52F380A5…1e18` is a LongLauncher Doppler clone against the same LLY rail. A second FATCOIN ticker at `0xb68C…03Ba4` is a PonsV2LauncherToken with holders_count 11 and a much smaller LLY book. They are not this CA. [verified R-7 R-15]

## Control and security

`owner()` on the token reverts. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. Factory `owner()` is EOA `0x5519a8…044D` with no code. [verified R-1 R-3 R-5 R-6 R-16]

The createLaunch sender is EOA `0xf372…b995` with no code. CreatorRegistered points at that address. [verified R-4 R-6]

No audit report URL was located this pass. [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is an X Community URL. DexScreener info.socials lists `x.com/FatcoinLLY`. That profile titles Fatcoin (@FatcoinLLY), bios $FATCOIN and $LLY with no contract, and links the DexScreener pair. Flag unconfirmed-official. [claim R-7 R-14]

Netlify vote URLs that embed the CA are third-party-link and copypasta-pattern. [claim R-17]

## Economics and activity

FATCOIN/LLY Uniswap v4 24h volume is 1766901.39 USD and reserve_in_usd is 68705.03 at 2026-09-03T03:45:00Z from the Gecko pool endpoint. fdv_usd is 402213.32. Gecko token volume_usd.h24 is 2915859.50 across listed pools, not the LLY book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 76140.78, volume.h24 1792589.86, fdv/marketCap 413306. Blockscout holders_count 3437. Pair created 2026-09-01T14:34:31Z. Assignment hint ~$78,420 / ~$1,817,912 was not reproduced exactly; live DexScreener is the LLY book. [claim R-1 R-7]

Gecko token/pools row 2 FATCOIN/USDG 4.012% printed reserve_in_usd 79300.06 against DexScreener liquidity.usd 18060.49 on the same pool id. trending_pools duration=24h first eight did not include FATCOIN this pass. [claim R-19]

## Material risks

- DexScreener and Gecko disagree on FATCOIN/LLY USD liquidity, volume, and FDV. [verified R-7 R-8]
- Pool USD reserve is FATCOIN plus LLY, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass; X is unconfirmed-official. [claim R-7 R-14]
- Token source is_verified false; Blockscout creator fields null. [verified R-1]
- A second FATCOIN ticker exists at 0xb68C…03Ba4 against LLY via Pons. [verified R-15]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/hook/LLY and the createLaunch tx plus logs, RPC name/symbol/factory/owner/hook/launchCreationEnabled, DexScreener, Gecko pool/token/pools, /rhj/assets, @FatcoinLLY profile, the Pons ticker collision, and the netlify vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 1766901.39 is the Gecko FATCOIN/LLY pool 24h volume, not the 2915859.50 token all-pools figure. Reserve 68705.03 is that pool. DexScreener 1792589.86 / 76140.78 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that FATCOIN is PEPTIDES, the Pons FATCOIN, or an official Eli Lilly product. PEPTIDES is a different address and LongLauncher factory. The Pons clone has 11 holders. LLY is the /rhj/assets rail, not the project. [inference R-12 R-13 R-15]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no fatcoin / FATCOIN / 0x12D5ee79…8a01. content/dependencies/stock-tokens.yaml LLY address 0x8005d266…00ea matches the pair quote.
- Explorer: Blockscout api/v2 token, factory, LaunchHook, LLY, createLaunch 0xdda08489…3b88, logs, token-transfers, Pons FATCOIN 0xb68C…03Ba4. RPC eth_getCode/eth_call/eth_getLogs with Mozilla UA at block 53111581.
- Aggregators: DexScreener latest/dex/tokens FATCOIN and 0xb68C…; latest/dex/search FATCOIN; Gecko token, pool, token/pools, networks/robinhood/pools page 1, trending_pools duration=24h (Mozilla UA).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 LLY.
- Social: from:FatcoinLLY; X user search FatcoinLLY / Fatcoin LLY; keyword FATCOIN LLY; x.com/FatcoinLLY HTML preview.
- Failed: Blockscout token creator_address_hash null (factory() and Launched used instead); ipfs.io CID empty body; Gecko trending_pools did not list this pool this pass; X user search did not return @FatcoinLLY.
- Time: collection 2026-09-03T03:45Z–2026-09-03T03:50Z.
