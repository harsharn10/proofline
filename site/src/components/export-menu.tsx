import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAMES } from "@/data/names";
import { namesToCsv, namesToMarkdown, nameToMarkdown, triggerDownload } from "@/lib/export-file";
import type { NameRecord } from "@/data/types";

export function ExportMenu({ name }: { name?: NameRecord }) {
  function saveJson() {
    const payload = name ?? NAMES;
    triggerDownload(
      name ? `${name.slug}.json` : "chain-file.json",
      JSON.stringify(payload, null, 2),
      "application/json",
    );
  }

  function saveCsv() {
    triggerDownload(
      name ? `${name.slug}.csv` : "chain-file.csv",
      namesToCsv(name ? [name] : NAMES),
      "text/csv;charset=utf-8",
    );
  }

  function saveMd() {
    triggerDownload(
      name ? `${name.slug}.md` : "chain-file.md",
      name ? nameToMarkdown(name) : namesToMarkdown(NAMES),
      "text/markdown;charset=utf-8",
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" size="sm" onClick={saveMd}>
        <Download className="size-3.5" />
        Markdown
      </Button>
      <Button variant="outline" size="sm" onClick={saveCsv}>
        <Download className="size-3.5" />
        CSV
      </Button>
      <Button variant="outline" size="sm" onClick={saveJson}>
        <Download className="size-3.5" />
        JSON
      </Button>
      {!name ? (
        <>
          <a
            href="/exports/chain-file.xlsx"
            download="chain-file.xlsx"
            className="inline-flex h-9 items-center gap-2 rounded-xs border border-border bg-transparent px-3 text-xs font-medium text-fg hover:bg-raised"
          >
            <Download className="size-3.5" />
            Excel
          </a>
        </>
      ) : null}
    </div>
  );
}
