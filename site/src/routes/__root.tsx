import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSiteMeta } from "@/data/content-server";
import appCss from "../styles.css?url";

const APP_NAME = "Proofline";

export const Route = createRootRoute({
  // Site-wide meta for the header (names on file, trending count, …) — loaded once here
  // rather than SiteHeader fetching its own slice client-side, since it renders outside
  // any route's own loader (mounted once in __root.tsx around every page).
  loader: () => getSiteMeta(),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#0e1113" },
      {
        name: "description",
        content: "Evidence-backed research on native Robinhood Chain plays.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
    ],
    // Applies the theme before first paint (no flash of the wrong theme): the saved choice first,
    // then the system preference, inside a try/catch — a private-mode failure falls through to dark.
    scripts: [
      {
        children:
          'try{var t=localStorage.getItem("proofline.theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia&&matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}if(t==="light"){document.documentElement.setAttribute("data-theme","light")}}catch(e){}',
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  ),
});
