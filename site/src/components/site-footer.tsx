import { Link, useLoaderData } from "@tanstack/react-router";
import { correctionsLink } from "@/data/types";

// Hairline-top footer: the disclaimer from content/site.yaml, one mono meta line. The corrections
// link renders only when a destination exists — a call to action with nothing to click is noise.
export function SiteFooter() {
  const meta = useLoaderData({ from: "__root__" });
  const correction = correctionsLink(meta.corrections.destination);

  return (
    <footer className="sitefooter">
      <div className="wrap">
        <p className="disc">{meta.disclaimer.trim()}</p>
        <p className="ver">
          <span>proofline · robinhood chain {meta.chainId}</span>
          <Link to="/methodology">how to read a profile</Link>
          {correction.href ? <a href={correction.href}>{correction.label}</a> : null}
        </p>
      </div>
    </footer>
  );
}
