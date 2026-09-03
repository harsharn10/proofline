import { Link, useLoaderData } from "@tanstack/react-router";

export function SiteNotice() {
  const meta = useLoaderData({ from: "__root__" });

  return (
    <aside className="site-notice" aria-label="Important risk disclaimer">
      <div className="wrap">
        <strong>Important.</strong> {meta.disclaimer}{" "}
        <Link to="/disclaimer">Read the full disclaimer.</Link>
      </div>
    </aside>
  );
}
