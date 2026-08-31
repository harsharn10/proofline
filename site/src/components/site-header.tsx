import { Link, useLoaderData } from "@tanstack/react-router";
import { ExportMenu } from "@/components/export-menu";
import { formatDate } from "@/lib/utils";

// Sticky blurred topbar (Eregion top chrome): wide-tracked mono wordmark, crumb nav with
// a green active underline, faint asof stamp, one export dropdown. Site-wide meta comes
// from the root route's loader — see __root.tsx (`loader: () => getSiteMeta()`).
export function SiteHeader() {
  const meta = useLoaderData({ from: "__root__" });

  return (
    <header className="topbar">
      <Link to="/" className="logo" aria-label="Proofline home">
        PROOF<span>LINE</span>
      </Link>
      <nav className="crumb-nav">
        <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "on" }}>
          Coverage
        </Link>
        <Link to="/methodology" activeProps={{ className: "on" }}>
          Methodology
        </Link>
        <Link to="/changelog" activeProps={{ className: "on" }}>
          Changelog
        </Link>
      </nav>
      <div className="right">
        <span className="asof">
          {meta.namesOnFile} names · upd {formatDate(meta.updated.slice(0, 10))}
        </span>
        <ExportMenu />
      </div>
    </header>
  );
}
