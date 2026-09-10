import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import YAML from "yaml";
import { parseResearchMarkdown } from "./src/data/markdown";

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
        const raw = fs.readFileSync(file, "utf8");
        // Parse and sanitize once at build time, not on the first request to each isolate.
        if (relative.endsWith(".yaml")) return JSON.stringify(YAML.parse(raw));
        if (relative.startsWith("content/research/") && relative.endsWith(".md")) return JSON.stringify(parseResearchMarkdown(raw));
        if (relative.endsWith(".jsonl")) return raw.trim().split("\n").slice(-360).join("\n");
        return raw;
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
        changelog: directory("content/changelog", ".yaml"),
        accounts: "[]", // account notes never belong in a public serving bundle
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
        pulledSeries: directory("content/pulled/series", ".json"),
      };
      return `export default ${JSON.stringify(snapshot)};`;
    },
    generateBundle() {
      const registry = fs.readFileSync(path.join(repositoryRoot, "build/registry.json"), "utf8");
      this.emitFile({ type: "asset", fileName: "data/registry.json", source: registry });
      const health = fs.readFileSync(path.join(repositoryRoot, "build/measurement-health.json"), "utf8");
      this.emitFile({ type: "asset", fileName: "data/health.json", source: health });
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
