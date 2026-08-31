import { Link, useLoaderData } from "@tanstack/react-router";
import { ExportMenu } from "@/components/export-menu";

const NAV_LINK_CLASS = "font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-fg";
const NAV_LINK_ACTIVE_CLASS = "text-fg";

// Site-wide meta (names on file, …) comes from the root route's own loader — see
// __root.tsx (`loader: () => getSiteMeta()`) — rather than this component fetching the
// content bundle itself after mount. SiteHeader is mounted once in __root.tsx around
// every page, so it reads the root route's loader data directly.
export function SiteHeader() {
  const meta = useLoaderData({ from: "__root__" });

  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="group min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">Robinhood Chain</p>
          <h1 className="mt-1 font-sans text-lg font-semibold tracking-tight text-fg group-hover:text-accent">
            {meta.name}
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className={NAV_LINK_CLASS} activeOptions={{ exact: true }} activeProps={{ className: NAV_LINK_ACTIVE_CLASS }}>
            Coverage
          </Link>
          <Link to="/methodology" className={NAV_LINK_CLASS} activeProps={{ className: NAV_LINK_ACTIVE_CLASS }}>
            Methodology
          </Link>
          <Link to="/changelog" className={NAV_LINK_CLASS} activeProps={{ className: NAV_LINK_ACTIVE_CLASS }}>
            Changelog
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">Names on file</p>
            <p className="font-mono text-sm tabular-nums text-accent">{meta.namesOnFile}</p>
          </div>
          <ExportMenu />
        </div>
      </div>
    </header>
  );
}
