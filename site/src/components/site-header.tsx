import { Link, useLoaderData } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { TopbarSearch } from "@/components/topbar-search";
import { formatDate } from "@/lib/utils";

// Sticky topbar (eregion top chrome): wide-tracked mono wordmark, crumb nav with a green active
// underline, the jump-to-name search, theme toggle, faint as-of stamp. Site-wide meta comes from
// the root route's loader — see __root.tsx. Export lives on each dossier, not here.
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
        <Link to="/feed" activeProps={{ className: "on" }}>
          Feed
        </Link>
        <Link to="/methodology" activeProps={{ className: "on" }}>
          Methodology
        </Link>
        <Link to="/changelog" activeProps={{ className: "on" }}>
          Changelog
        </Link>
      </nav>
      <div className="right">
        <TopbarSearch names={meta.names} />
        <span className="asof">
          {meta.namesOnFile} names · upd {formatDate(meta.updated.slice(0, 10))}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
