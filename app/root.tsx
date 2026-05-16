import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import reactPhotoViewStyles from "react-photo-view/dist/react-photo-view.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/png", href: "/fprint.png" },
  { rel: "stylesheet", href: reactPhotoViewStyles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.comhttps://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="Madesh 🤍 Keerthana - 23.06.2026" />
        <meta property="og:description" content="Join us to celebrate the wedding of Madesh & Keerthana on 23 June 2026." />
        <meta property="og:image" content="https://madesh-keerthana.vercel.app/ogimage.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madesh-keerthana.vercel.app/" />
        <meta property="og:site_name" content="Madesh & Keerthana" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Madesh 🤍 Keerthana - 23.06.2026" />
        <meta name="twitter:description" content="Join us to celebrate the wedding of Madesh & Keerthana on 23 June 2026." />
        <meta name="twitter:image" content="https://madesh-keerthana.vercel.app/ogimage.png" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning={true}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
