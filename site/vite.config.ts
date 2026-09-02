import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const VIRTUAL_CONTENT_ID = "virtual:proofline-content";
const RESOLVED_CONTENT_ID = `\0${VIRTUAL_CONTENT_ID}`;
const repositoryRoot = fileURLToPath(new URL("..", import.meta.url));

function prooflineContent(): Plugin {
  return {
    name: "proofline-content",
    resolveId(id) {
      return id === VIRTUAL_CONTENT_ID ? RESOLVED_CONTENT_ID : undefined;
    },
    load(id) {
      if (id !== RESOLVED_CONTENT_ID) return undefined;
      const read = (relative: string) => {
        const file = path.join(repositoryRoot, relative);
        this.addWatchFile(file);
        return fs.readFileSync(file, "utf8");
      };
      const directory = (relative: string, extension: string) => {
        const folder = path.join(repositoryRoot, relative);
        if (!fs.existsSync(folder)) return {};
        return Object.fromEntries(
          fs.readdirSync(folder)
            .filter((file) => file.endsWith(extension))
            .sort()
            .map((file) => [`${file}`, read(path.join(relative, file))]),
        );
      };
      const snapshot = {
        site: read("content/site.yaml"),
        changelog: read("content/changelog.yaml"),
        accounts: read("content/accounts.yaml"),
        census: read("content/census.yaml"),
        methodology: read("content/methodology.md"),
        derived: read("build/derived.json"),
        taxonomy: read("schema/taxonomy.json"),
        dependencies: directory("content/dependencies", ".yaml"),
        projects: directory("content/projects", ".yaml"),
        sources: directory("content/sources", ".yaml"),
        research: directory("content/research", ".md"),
        feed: directory("content/feed", ".yaml"),
        pulled: directory("content/pulled", ".yaml"),
        pulledHistory: directory("content/pulled/history", ".jsonl"),
      };
      return `export default ${JSON.stringify(snapshot)};`;
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  server: { port: 8080, strictPort: true },
  preview: { port: 8081 },
  resolve: { tsconfigPaths: true },
  plugins: [
    prooflineContent(),
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" || isPreview
      ? [nitro({
          preset: process.env.NITRO_PRESET ?? "vercel",
          ...(process.env.NITRO_PRESET === "cloudflare_module"
            ? {
                cloudflare: {
                  deployConfig: false,
                },
              }
            : {}),
        })]
      : []),
    viteReact(),
  ],
}));
