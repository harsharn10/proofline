# Site on Chain File — integration plan

Date: 2026-08-30. Branch: `site`. Supersedes the "build the Next.js site from scratch" reading of PRD §14 step 5.

## Decisions (owner, 2026-08-30)
- **Base = the Grok "Chain File" app** (`site/`, TanStack Start + React 19 + Tailwind v4). Build on top; do not rewrite.
- **Data model and scoring get added to it, in that order.** Content system at the repo root stays the source of truth.
- **Voice must change** to the PRD §7.3 standard as dossiers migrate. Chain File prose is intake, not publication.
- **Multiple deployments per token.** Same ticker can exist at several addresses (Robinhood Chain vs Arbitrum One "Classic EU", different issuers). Schema: `deployments: [{ chain, address, issuer, role, verified, sources }]` replaces the single `addresses[]` entry per contract; dependency `stock-tokens` card lists deployments per ticker.

## Sequence
0. **Runs locally** — `cd site && npm install && npm run dev` → http://localhost:8080. ✅ 2026-08-30.
1. **Un-Grok it** — remove `scripts/grok-pwa-*`, `server/middleware/grok-pwa.ts`, `public/__grok/`, the auth/pglite/multiplayer libs, `scripts/browser-*`, `scripts/preview*`, `migrations/`; keep `with-app-env.mjs` only if a `VITE_` flag survives. Rebrand header/OG to Proofline; keep the visual system. Confirm `npm run build` still passes with the Vercel nitro preset.
2. **Data bridge** — `site/src/data/load.server.ts` reads `../content/**` (YAML via `yaml`, research MD) and `../build/derived.json`; maps to the `NameRecord` shape the components render. `names.ts` becomes a generated file (or is deleted once every Chain File field has a home in content). Field mapping to decide: `oneLiner/overview/rwaHook/thesis/mechanics/risks/collisions` → research-record sections + `findings`; `feed[]` → per-slug changelog entries (`type`, `severity`) plus a new `sources`-backed `feed` list if CT items must survive; `heat` → dropped or kept as a non-scored `attention` tag.
3. **Schema: deployments** — `project.schema.json` `addresses[]` → `deployments[]` (fields above); `dependency.schema.json` gains `deployments[]`; migrate the 14 stubs; update `seed-data.mjs`, tests, README.
4. **Census expansion from intake** — `research/inbox/grok-2026-08-30/README.md` harvest plan: ~25 new census names, candidate deployments (`verified: false`), known-fake CAs as `findings.risk`, Dune/RWA.xyz/hoodl2 sources.
5. **Voice pass** — rewrite each migrated dossier to §7.3 as it enters `content/` (verified / claim / inference / unknown; no "ape", "casino", mcap prints as facts).
6. **Scoring surfaces** — when a profile flips to `coverage: full`, the dossier renders score / confidence / risk from `derived.json` per the site contract (never `uncapped*`).
7. **Telegram** — `npm run telegram:dry` ✅ 2026-08-30; real send once `.env.local` has the bot token + chat id; GitHub Action on push to `main` later.
8. **Deploy** — Vercel (preset already in `vite.config.ts`); `SITE_URL` in the digest env.

## Decisions 2026-08-30 (owner)
- **Feed is first-class.** Content gets `content/feed/<slug>.yaml` — items `{ id, date, kind: company|ct|onchain|risk, title, body, source, sourceUrl, account }` — rendered on the dossier and the home page like Chain File does today. Feed items are claims unless a source ledger entry backs them.
- **No heat axis.** Replace with a computed **trending** signal: `content/accounts.yaml` lists tracked top accounts; a name is trending when ≥ N distinct tracked accounts have `ct` feed items on it within a window (defaults N=3, 7 days; both in `site.yaml`). Derived at build, never typed in.
- Still open: site URL / domain.
