import { useLoaderData } from "@tanstack/react-router";
import { correctionsLink } from "@/data/types";

// Hairline-top footer: mono tagline, one quiet disclaimer, faint mono meta line.
// Corrections config comes from the root route's loader, same as SiteHeader.
export function SiteFooter() {
  const meta = useLoaderData({ from: "__root__" });
  const correction = correctionsLink(meta.corrections.destination);

  return (
    <footer className="sitefooter">
      <div className="wrap">
        <p className="tag">Research the launch. Ignore the hype.</p>
        <p className="disc">
          Proofline publishes research, not advice. Profiles are not audits, safety ratings, or
          recommendations.
        </p>
        <p className="ver">
          <span>proofline · robinhood chain {meta.chainId}</span>
          {correction.href ? <a href={correction.href}>{correction.label}</a> : <span>{correction.label}</span>}
        </p>
      </div>
    </footer>
  );
}
