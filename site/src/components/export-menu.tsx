import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContent } from "@/data/content-server";
import { dossierToMarkdown, dossiersToCsv, dossiersToMarkdown, triggerDownload } from "@/lib/export-file";
import type { Dossier } from "@/data/types";

// With no `dossier`, the menu exports the whole file — it fetches the content bundle
// lazily on click (this component renders in the sitewide header, outside any route
// loader) rather than the site preloading all 14 dossiers up front.
export function ExportMenu({ dossier }: { dossier?: Dossier }) {
  async function allDossiers(): Promise<Dossier[]> {
    const content = await getContent();
    return content.dossiers;
  }

  async function saveJson() {
    const payload = dossier ?? (await allDossiers());
    triggerDownload(
      dossier ? `${dossier.slug}.json` : "chain-file.json",
      JSON.stringify(payload, null, 2),
      "application/json",
    );
  }

  async function saveCsv() {
    const list = dossier ? [dossier] : await allDossiers();
    triggerDownload(dossier ? `${dossier.slug}.csv` : "chain-file.csv", dossiersToCsv(list), "text/csv;charset=utf-8");
  }

  async function saveMd() {
    const contents = dossier ? dossierToMarkdown(dossier) : dossiersToMarkdown(await allDossiers());
    triggerDownload(
      dossier ? `${dossier.slug}.md` : "chain-file.md",
      contents,
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
    </div>
  );
}
