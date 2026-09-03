import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteNotice } from "@/components/site-notice";
import { getContent, getSiteMeta } from "@/data/content-server";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  // Site-wide meta for the header (names on file, trending count, …) — loaded once here
  // rather than SiteHeader fetching its own slice client-side, since it renders outside
  // any route's own loader (mounted once in __root.tsx around every page).
  loader: async () => {
    const [meta, directory] = await Promise.all([getSiteMeta(), getContent()]);
    return { ...meta, title: directory.site.title, telegram: directory.site.telegram };
  },
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: loaderData?.title ?? "Icarus: building the Robinhood Registry" },
      { name: "theme-color", content: "#00c805" },
      {
        name: "description",
        content:
          loaderData?.tagline ??
          "Icarus researches and tracks what is new on Robinhood Chain and keeps you current here and on Telegram.",
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
          'try{var t=localStorage.getItem("icarus.theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}',
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
        <SiteNotice />
        <Outlet />
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  ),
});
