# Proofline

Evidence-backed research on native Robinhood Chain plays.

## Stack

TanStack Start + React 19 + Tailwind v4 + Vite 8, with Nitro targets for Render's Node runtime and
Cloudflare Workers. Vercel compatibility is retained but inactive.

## Development

```sh
npm install
npm run dev        # http://localhost:8080
npm run typecheck
npm run build
```

## Structure

- `src/routes/` — file-based routes: `/`, `/n/$slug` (a dossier), `/d/$id` (a dependency card),
  `/methodology`, `/changelog`
- `src/components/` — `site-header`, `site-footer`, `dossier`, `name-row`, `feed-list`, `ui/`
- `src/data/content-server.ts` — server functions that consume the build-time content snapshot and ship
  a per-route slice (never the whole tree, never an account's `note` — see the root README's "Site
  contract"); `vite.config.ts` creates that snapshot from `content/` and `build/derived.json`
- `src/styles.css` — design tokens (IBM Plex fonts, dark palette)
- `scripts/smoke.mjs` — boots the build and hits every route (`npm run smoke`, after `npm run build`)

## Deployment overview

- **Production:** Render, deployed from `main` using the repository-root `render.yaml`.
- **Secondary:** Cloudflare Workers, built on pull requests and `main` pushes.
- **Inactive compatibility:** Vercel. There is no current Vercel deployment or GitHub integration.

The site reads `build/derived.json`, which only exists after the root `npm run score` has run against
`../content/`. The local `predev`, `prebuild`, and `prebuild:cloudflare` hooks generate it automatically,
but root dependencies must already be installed.

## Production deployment (Render)

[`../render.yaml`](../render.yaml) is the production source of truth. It installs root and site
dependencies, derives scores, builds Nitro with the `node-server` preset, starts
`site/.output/server/index.mjs`, and checks `/` for health. The live production URL is
[proofline-892b.onrender.com](https://proofline-892b.onrender.com).

## Secondary deployment (Cloudflare Workers)

The repository-root `wrangler.jsonc` points at the Nitro Worker output and static assets. In Workers
Builds, use repository root `/` with:

```text
Build command: npm run build
Deploy command: npm run cloudflare:deploy
Preview deploy command: npm run cloudflare:preview
```

The root build installs the site's locked dependencies, derives scores, creates the
`cloudflare_module` bundle and embeds the validated content snapshot. Public loaders therefore do not
depend on a filesystem that Workers does not provide. The authenticated review loader reads mutable
review state directly from GitHub; it never bundles the review token.

Run `npm run cloudflare:dry` after building to validate the exact root Wrangler configuration, or
`npm run cloudflare:test` to package and boot the Worker and run the full route/security smoke suite.

## Inactive Vercel compatibility

Vercel is not currently connected to this repository and is not a production target.
`vercel.json` is retained only as compatibility configuration. If Vercel is intentionally restored,
set the project root directory to `site` and enable **Include source files outside of the Root
Directory in the Build Step** so the build can read `../content/`, `../scripts/`, and `../schema/`.

The compatibility file supplies the required monorepo commands:

```json
{
  "installCommand": "cd .. && npm ci && cd site && npm ci",
  "buildCommand": "cd .. && npm run score && cd site && npm run build"
}
```

These commands install both dependency sets and run the validating scorer before the site build. No
build-time environment variables are required.
