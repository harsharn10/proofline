import { useLoaderData } from "@tanstack/react-router";
import { correctionsLink } from "@/data/types";

export function SiteFooter() {
  const meta = useLoaderData({ from: "__root__" });
  const correction = correctionsLink(meta.corrections.destination);

  return (
    <footer className="sitefooter">
      <div className="wrap">
        <p className="footline">
          Every number links to its source on the profile. Status is computed from on-chain data, never typed.
          Research, not advice.
          {correction.href ? <a href={correction.href}>{correction.label}</a> : null}
        </p>
      </div>
    </footer>
  );
}
