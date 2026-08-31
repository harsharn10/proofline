# Proofline

Evidence-backed research on native Robinhood Chain plays.

## Stack

TanStack Start + React 19 + Tailwind v4 + Vite 8, deployed via Nitro (Vercel preset).

## Development

```sh
npm install
npm run dev        # http://localhost:8080
npm run typecheck
npm run build
```

## Structure

- `src/routes/` — file-based routes (`/`, `/n/$slug`)
- `src/components/` — `site-header`, `site-footer`, `dossier`, `name-row`, `feed-list`, `ui/`
- `src/data/` — name and chain data
- `src/styles.css` — design tokens (IBM Plex fonts, dark palette)

## Deployment (Vercel)

This site is one half of the `proofline` monorepo — it reads `build/derived.json`, which only exists
after the **root** `npm run score` has run against `../content/`. `predev` and `prebuild` already call
`npm --prefix .. run score` for local use, but that assumes root `node_modules` is already installed.

Set the Vercel project's **root directory to `site`**. `site/vercel.json` overrides the install and
build commands so both steps happen relative to the repo root first:

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
