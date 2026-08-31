# Ecosystem category tree + data mapping

Date: 2026-08-31
Status: intake draft. Not `content/`. Not a skip-list. Human decides who is in or out of coverage.
Companion: `2026-08-31-ecosystem-map.yaml`

The PRD has a **flat** category enum (Launchpad, Aggregator, CDP, …). That is too coarse for a live map: Arrow is CDP *and* launchpad; Meridian is perps *and* prediction; Bankr is agent execution *and* a stock-paired factory; Pons is a launchpad whose volume looks like a DEX. The tree below is the mapping layer. Census `category` can stay the primary leaf for V1 files; the tree is how we *place* a name before a file exists.

Blacklist from the prior accounts pass is **retracted**. Handle collisions stay on the list as `watch`.

---

## 1. Three axes (do not collapse)

A name is not “a category.” It has:

| Axis | Values | Question |
|---|---|---|
| `coverage_class` | `subject` · `dependency` · `observe` · `graduation` | Does it get a research file? |
| `tree` | `domain / category / subcategory` | What kind of machine is it? |
| `lifecycle` | `mainnet` · `beta` · `announced` · `testnet-only` · `unknown` | Can a user touch it now? |

`coverage_class` is **not** a moral ranking.

- **subject** — native play that can pass the four PRD tests. Research file.
- **dependency** — day-one or multi-chain infra. Cite on subject files. No standalone profile. (PRD §2.2)
- **observe** — seen on Llama / X / docs, not yet qualified. Keep watching.
- **graduation** — a token a pad minted. Do not auto-file (PRD: “Do not add every Pons graduation”). Promote only if it grows its own mechanism.

A name can sit on **two leaves** (Arrow = credit/cdp + launch/gateway). Store `tree_primary` and `tree_secondary[]`. Do not invent a hybrid enum like `CDP + launchpad` as a single category — that is how the PRD seed table drifted.

---

## 2. The tree

```
ecosystem
├── chain-infra                  # usually dependency
│   ├── l2-sequencer             Robinhood Chain
│   ├── bridge                   LayerZero, Symbiosis, canonical
│   ├── oracle                   Chainlink
│   ├── stablecoin               USDG, Spark/USDS, USDe if present
│   ├── rpc-aa                   Alchemy
│   ├── custody                  BitGo, Fireblocks
│   └── analytics                Entropy, Dune, growthepie, Llama
│
├── trading
│   ├── amm-imported             Uniswap V2/V3/V4, Sushi, Pancake, Curve
│   ├── amm-native               up, Fables, GIGA, Ramses, Alandale, Orvex, Ekubo/STONX, SwapHood (h33 flywheel)
│   ├── aggregator               Mancer (router, beta), SCOPL (limit-order-as-CL), Kyber, 1inch
│   ├── hook-mev                 What The Hook (MEV redistribution inside a v4 hook — not Hookr)
│   ├── perps-imported           Lighter, Arcus perps
│   ├── perps-native             Meridian Perps
│   ├── prop-amm                 Rialto
│   └── telegram-exec            GMGN, Maestro          ← observe, not subjects
│
├── credit
│   ├── lending-primitive        Morpho Blue
│   ├── morpho-curator           Steakhouse, Gami
│   ├── isolated-money-market    Denar, Native Credit Pool
│   ├── cdp                      Arrow, USDAX
│   ├── credit-overlay           Longbow (Morpho + Pons)
│   ├── rwa-lending              Sharewoods
│   └── uncollateralized         Accountable
│
├── rwa-products
│   ├── stock-token-issuer       Robinhood Assets (Jersey) — dependency
│   ├── stock-paired-token       Artificial Inu ($AI/NVDA) and peers with a vault/fee story
│   ├── redeemable-basket        Statics, Vimen
│   ├── tax-distributor          The Index
│   ├── index-vault              Robinhood Index Vaults, Hood Index
│   ├── synthetic-asset          TickerYard yBTC
│   └── reserve-currency         NetNet ($NET)
│
├── launch
│   ├── bonding-curve            Pons V1/V2, hood.fun (announced)
│   ├── hook-programmable        Hookr (compose v4 hook blocks; not Pons). HookOS is a separate multi-chain pad (@hookosfun), not this leaf until RH volume.
│   ├── stock-paired-factory     LONG, Bankr (stock-paired deploys)
│   ├── uni-pool-launch          Safehood, pools.trade
│   ├── nft-gated-launch         StonkBrokers / Clutch
│   ├── other-pad                NOXA, token.select, Sentry, Coinbarrel, Flap, LetsCash, Bags, ArrowPad, RH.fun, …
│   └── graduation-token         individual pad outputs — not auto-filed
│
├── agents
│   ├── agent-launch-layer       Virtuals Protocol
│   ├── agent-execution          Bankr
│   ├── agent-identity           Agent Name Service (.agent)
│   └── agent-product            individual Virtuals/Bankr agents — observe unless own mechanism
│
├── nft-treasury
│   ├── token-bound-nft          StonkBrokers ERC-6551
│   ├── nft-fee-claim            Chain Mancers
│   └── nft-marketplace          OpenSea — dependency
│
├── markets
│   ├── prediction               Meridian Predict, Hoodbets, wambo
│   └── options                  Arrows (@arrowsonhood) — not Arrow CDP
│
├── yield
│   ├── savings-vault            Spark, Saffron, TownSquare
│   ├── lp-manager               Snuggle, Delta, MaxFi, EZManager
│   ├── allocator                T3tris, D2, Krystal
│   ├── fee-router               Sinjoh (creator/launch fees → buyback/airdrop/burn)
│   └── gamified-mining          SLVR, StockRip, Orchard, LUNA, MinePea
│
├── privacy
│   └── private-transfer         Sherwood, Privacy Cash
│
└── tooling
    ├── locker                   UNCX (imported), HoodLock (native)
    ├── scanner                  Squeeze (short-interest tape)
    └── names                    Agent Name Service (also under agents)
```

---

## 3. Mapping rules

1. **Llama category ≠ our leaf.** Llama “Launchpad” includes Pons, StonkBrokers, NOXA, and 20 meme pads. We split by *mechanism* (curve vs NFT-gated vs uni-pool vs stock-paired factory).
2. **Llama TVL = 0 does not mean not live.** Pons is the #2 native fee machine and often has no TVL row. Use fees/volume/official posts as live evidence too.
3. **Parent/child.** Meridian Perps + Meridian Predict share `@meridiandotxyz`. One census slug (`meridian`) with two tree leaves. Do not split files until the product is two control planes.
4. **Imported vs native AMM.** Same Llama `Dexs` bucket. Native = built for this chain (1-chain, own token/ve, RH-first messaging). Imported = Uniswap/Sushi/Pancake/Curve. Native can be `subject`; imported is `dependency`.
5. **Telegram bots (GMGN, Maestro)** are the #1 revenue line on Llama. They are execution wrappers, not native plays. `observe` until we decide they have a control-plane story on 4663.
6. **Stock-paired token** is only a subject if there is a vault, factory, fee split, or documented mechanism. A Bankr deploy paired to TSM is a `graduation` unless that token grows its own product.
7. **Live evidence flags** (OR, not AND): `llama-tvl` · `llama-fees` · `llama-volume` · `official-post` · `docs` · `explorer` · `unverified-claim`.
8. **Census `category`** (flat, for V1 files) should equal `tree_primary`’s leaf label, mapped to the existing enum. New leaves that are not in the enum yet (`reserve-currency`, `synthetic-asset`, `agent-identity`) stay as `observe` until the schema enum is extended. Do not silently stuff them into “Other.”

### Flat enum → tree leaf (V1)

| Census `category` (current schema) | Tree leaf |
|---|---|
| Launchpad | `launch/*` (pick subcategory by mechanism) |
| Aggregator | `trading/aggregator` |
| Stock-paired token | `rwa-products/stock-paired-token` |
| Fee-routing protocol | `launch/stock-paired-factory` or `trading/*` — set by mechanism |
| NFT / treasury | `nft-treasury/token-bound-nft` |
| RWA distributor | `rwa-products/tax-distributor` |
| RWA baskets | `rwa-products/redeemable-basket` |
| CDP | `credit/cdp` |
| Agent / execution | `agents/agent-execution` |
| Prediction market | `markets/prediction` |
| Index vault | `rwa-products/index-vault` |
| Lending | `credit/isolated-money-market` |
| Options | `markets/options` |
| Yield | `yield/*` |
| Perpetuals | `trading/perps-native` (native) or `perps-imported` (dependency) |
| Oracle / infra | `chain-infra/*` |
| Stablecoin | `chain-infra/stablecoin` |
| Scanner / tooling | `tooling/scanner` |

Leaves not in the enum yet (need a schema decision): `reserve-currency`, `synthetic-asset`, `agent-identity`, `agent-launch-layer`, `lp-manager`, `privacy`, `telegram-exec`.

---

## 4. What “live” means on this chain right now

Evidence mix, 2026-08-31:

- Llama lists **133 protocols** with a Robinhood Chain TVL key (many at $0).
- Llama **launchpad** page: 23 named pads; **Pons is missing from that TVL table** and from the DEX ranking, but present on its own protocol page ($86m 24h volume, $4.7m 24h fees).
- Llama **revenue** 24h: GMGN $1.11m (wrapper) · Pons $0.97m (native) · chain gas $0.96m · Uniswap $0.32m · up $73k · The Index $24k · Virtuals $23k · StonkBrokers $17k.
- Official posts today: Bankr minting stock-paired tokens continuously; Virtuals claiming >1% of cum DEX; NetNet claiming a $7.5m treasury and largest AAPL/NVDA/SPCX token holdings; up claiming native (3,3) DEX; TickerYard shipping yBTC; Arrow dated mainnet 09:30 ET 2026-08-31.
- Census still has Meridian as `announced` while Llama shows Meridian Perps **$2.5m TVL**. That lifecycle is stale.

Full name placement is in the YAML companion.

---

## 5. Gaps (tree, not skip-list)

- No explorer-verified CAs for Denar, EARN, Fables, Delta in this pass.
- Arrow live/not after 09:30 ET not checked.
- LONG vs Bankr both mint stock-paired tokens — need a rule for who is the factory of record for a given pair.
- 20+ Llama pads with <$50k TVL are named but not mechanism-classified.
- Schema enum must grow before reserve/synthetic/agent-layer names can be `subject` files without stretching an existing bucket.
