import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./styles.css";
import { Header, Footer, ButtonLink } from "./components/shell";
import { PreferencesProvider } from "./components/preferences";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#121316" />
        <link
          rel="icon"
          href="/media/genie-favicon-32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/media/genie-favicon-64.png"
          type="image/png"
          sizes="64x64"
        />
        <link
          rel="apple-touch-icon"
          href="/media/genie-apple-touch.png"
          sizes="180x180"
        />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('genie-reduced-motion');document.documentElement.dataset.reducedMotion=String(s===null?matchMedia('(prefers-reduced-motion: reduce)').matches:s==='true')}catch(e){}})()`,
          }}
        />
      </head>
      <body id="top">
        <PreferencesProvider>
          <Header />
          {children}
          <Footer />
        </PreferencesProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return <Outlet />;
}
export function ErrorBoundary() {
  const error = useRouteError();
  const missing = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main id="main" className="error-page section-pad">
      <p className="eyebrow">
        {missing ? "404 / Off the canvas" : "A small interruption"}
      </p>
      <h1>{missing ? "This one got away." : "Let’s try that again."}</h1>
      <p>
        {missing
          ? "That page isn’t in the studio. There’s plenty more to explore."
          : "The page couldn’t be loaded. Try refreshing, or head back to the work."}
      </p>
      <ButtonLink to="/work">Explore the work</ButtonLink>
    </main>
  );
}
