import { Link, useLoaderData } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { TopbarSearch } from "@/components/topbar-search";
import { Icon } from "@/components/ui/icon";
import { CategoryPageMeta } from "@/components/page-meta";

export function SiteHeader() {
  const meta = useLoaderData({ from: "__root__" });

  return (
    <>
    <CategoryPageMeta />
    <header className="topbar">
      <Link to="/" className="logo" aria-label="Icarus home">
        <span className="logo-mark">
          <Icon name="feather" />
        </span>
        ICARUS
      </Link>
      <nav className="crumb-nav">
        <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "on" }}>
          Registry
        </Link>
        <Link to="/feed" activeProps={{ className: "on" }}>
          Feed
        </Link>
        <Link to="/methodology" activeProps={{ className: "on" }}>
          How to read this
        </Link>
      </nav>
      <div className="right">
        <TopbarSearch names={meta.names} />
        {meta.telegram.enabled && meta.telegram.url !== "TODO" ? (
          <a className="telegram-pill" href={meta.telegram.url} target="_blank" rel="noreferrer">
            <Icon name="send" /> Telegram
          </a>
        ) : null}
        <ThemeToggle />
      </div>
    </header>
    </>
  );
}
