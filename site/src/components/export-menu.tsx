import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getExportBundle } from "@/data/content-server";
import { dossierToMarkdown, dossiersToCsv, dossiersToMarkdown, triggerDownload } from "@/lib/export-file";
import type { Dossier } from "@/data/types";

// With no `dossier`, the menu exports the whole file — it fetches every full dossier lazily on
// click (this component renders in the sitewide header, outside any route loader) rather than
// any page carrying all of them up front.
const FILE_EXPORT_BASENAME = "proofline-file";

export function ExportMenu({ dossier }: { dossier?: Dossier }) {
  async function allDossiers(): Promise<Dossier[]> {
    const bundle = await getExportBundle();
    return bundle.dossiers;
  }

  async function saveJson() {
    const payload = dossier ?? (await allDossiers());
    triggerDownload(
      dossier ? `${dossier.slug}.json` : `${FILE_EXPORT_BASENAME}.json`,
      JSON.stringify(payload, null, 2),
      "application/json",
    );
  }

  async function saveCsv() {
    const list = dossier ? [dossier] : await allDossiers();
    triggerDownload(
      dossier ? `${dossier.slug}.csv` : `${FILE_EXPORT_BASENAME}.csv`,
      dossiersToCsv(list),
      "text/csv;charset=utf-8",
    );
  }

  async function saveMd() {
    const contents = dossier ? dossierToMarkdown(dossier) : dossiersToMarkdown(await allDossiers());
    triggerDownload(
      dossier ? `${dossier.slug}.md` : `${FILE_EXPORT_BASENAME}.md`,
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
