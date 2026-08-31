import { useRef } from "react";
import { getExportBundle } from "@/data/content-server";
import { dossierToMarkdown, dossiersToCsv, dossiersToMarkdown, triggerDownload } from "@/lib/export-file";
import type { Dossier } from "@/data/types";

// One small mono `export ↓` dropdown (brief rule 5) — replaces the three buttons. With no
// `dossier` it exports the whole file, fetched lazily on click (this renders in the
// sitewide topbar, outside any route loader).
const FILE_EXPORT_BASENAME = "proofline-file";

export function ExportMenu({ dossier }: { dossier?: Dossier }) {
  const ref = useRef<HTMLDetailsElement>(null);

  function close() {
    ref.current?.removeAttribute("open");
  }

  async function allDossiers(): Promise<Dossier[]> {
    const bundle = await getExportBundle();
    return bundle.dossiers;
  }

  async function saveJson() {
    close();
    const payload = dossier ?? (await allDossiers());
    triggerDownload(
      dossier ? `${dossier.slug}.json` : `${FILE_EXPORT_BASENAME}.json`,
      JSON.stringify(payload, null, 2),
      "application/json",
    );
  }

  async function saveCsv() {
    close();
    const list = dossier ? [dossier] : await allDossiers();
    triggerDownload(
      dossier ? `${dossier.slug}.csv` : `${FILE_EXPORT_BASENAME}.csv`,
      dossiersToCsv(list),
      "text/csv;charset=utf-8",
    );
  }

  async function saveMd() {
    close();
    const contents = dossier ? dossierToMarkdown(dossier) : dossiersToMarkdown(await allDossiers());
    triggerDownload(
      dossier ? `${dossier.slug}.md` : `${FILE_EXPORT_BASENAME}.md`,
      contents,
      "text/markdown;charset=utf-8",
    );
  }

  return (
    <details className="exportmenu" ref={ref}>
      <summary>export ↓</summary>
      <div className="exportpanel">
        <button type="button" onClick={saveMd}>
          markdown
        </button>
        <button type="button" onClick={saveCsv}>
          csv
        </button>
        <button type="button" onClick={saveJson}>
          json
        </button>
      </div>
    </details>
  );
}
