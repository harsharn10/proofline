# Proofline

Evidence-backed research on native Robinhood Chain plays.

## Stack

TanStack Start + React 19 + Tailwind v4 + Vite 8, with Nitro targets for Vercel/Node and Cloudflare Workers.

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

## Deployment (Vercel)

This site is one half of the `proofline` monorepo — it reads `build/derived.json`, which only exists
after the **root** `npm run score` has run against `../content/`. `predev` and `prebuild` already call
`npm --prefix .. run score` for local use, but that assumes root `node_modules` is already installed.

Set the Vercel project's **root directory to `site`**, and confirm the project's Build & Development
Settings has **"Include source files outside of the Root Directory in the Build Step"** turned on — this
is a per-project setting, not something the root directory alone guarantees, and without it Vercel never
uploads `../content/`, `../scripts/`, or `../schema/` for `buildCommand`'s `cd ..` to find (it defaults on
for projects created after 2020-08-27; check it explicitly on an older project). `site/vercel.json`
overrides the install and build commands so both steps happen relative to the repo root first:

```json
{
  "installCommand": "cd .. && npm ci && cd site && npm ci",
  "buildCommand": "cd .. && npm run score && cd site && npm run build"
}
```

`installCommand` installs the root's dependencies (`ajv`, `ajv-formats`, `yaml`) as well as the site's
own. `buildCommand` runs the root scorer (refusing to write if `content/` fails validation) before
`vite build`, which then triggers the site's own `prebuild` — redundant with the explicit `npm run
score` above, but harmless, and keeps `npm run build` correct when run locally without the Vercel
override. No environment variables are required for the build itself.

## Deployment (Cloudflare Workers)

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
