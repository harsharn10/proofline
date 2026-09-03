import { Link, useLoaderData } from "@tanstack/react-router";
import { correctionsLink } from "@/data/types";

export function SiteFooter() {
  const meta = useLoaderData({ from: "__root__" });
  const correction = correctionsLink(meta.corrections.destination);

  return (
    <footer className="sitefooter">
      <div className="wrap">
        <p className="footline">
          Icarus is independent automated research, not advice or an endorsement. Verify everything.
          {correction.href ? <a href={correction.href}>{correction.label}</a> : null}
        </p>
        <nav className="footerlinks" aria-label="Legal and methodology">
          <Link to="/methodology">How to read this</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
