# The Creative Genie — Living Studio

Akinola Akinjide’s portfolio, rebuilt around design, film and code. Direction A uses graphite, silver, cool white and signal blue, with original project media carrying the visual identity.

## Run locally

Use Node 22.22+ (Node 24 recommended).

```sh
npm ci --include=dev
npm run dev
```

```sh
npm run typecheck
npm run lint
npm test
npm run build
node scripts/check-build.mjs
npm run preview
```

The production preview is served at http://localhost:4173. It uses static HTML, real 404 responses and byte-range video playback. Contact delivery is disabled in local preview; the form prepares an email draft instead.

## Architecture

- React 19 + React Router 7 framework mode + Vite + TypeScript.
- All 22 public content routes are rendered to HTML at build time; legacy category pages and a custom 404 are also generated.
- GSAP owns the spatial hero and scoped scroll choreography; Motion owns the layout experiment; CSS handles small feedback and native View Transitions.
- Native scrolling, semantic HTML, responsive layouts, keyboard controls, native modal dialogs, and a saved reduced-motion preference.
- Content lives in `app/data/content.ts`. Shared components live in `app/components`. Route modules live in `app/routes`.
- Active original assets remain in `public` as editing sources. `npm run assets` uses Sharp to build responsive WebP derivatives and a dimensions manifest, then prunes obsolete derivatives recorded in the previous manifest. `node scripts/encode-films.mjs` uses FFmpeg to create H.264/AAC MP4s with fast-start playback. Original media is stripped from the deployment output.
- Work search and discipline filters stay in the URL so a selected collection can be shared. Case studies include section navigation; full-size gallery images load only when their viewer is opened.

## Deployment

The existing Vercel Git integration can deploy this branch. `vercel.json` sets `npm run build`, the `build/client` output, clean URLs, legacy redirects and response headers. The broad old SPA rewrite has been removed so missing paths can return a proper 404.

Production canonical URLs currently use `https://creativegenie.vercel.app`. Update `app/lib/seo.ts` and `scripts/postbuild.mjs` together if the primary domain changes.

## Optional contact delivery

The public email link always works. Without email-service configuration, the short form opens a prepared draft in the visitor’s email app and explicitly asks them to send it there.

To enable server-side delivery, set these environment variables in Vercel:

- `RESEND_API_KEY`: your Resend API key.
- `CONTACT_FROM`: a sender address on a domain verified in Resend.

The endpoint validates fields, rejects cross-origin submissions, has a honeypot and best-effort per-instance throttling, and returns success only after the provider accepts the email. Delivery credentials stay server-side. For high-volume use, replace instance-local throttling with a shared rate-limit store. The recipient is the portfolio’s existing public email address.

## Content and release notes

See `docs/direction-a.md` for the locked direction and `docs/release-review.md` for verification and content follow-ups. No invented launch status, performance metrics, years-of-experience totals, testimonials or client outcomes have been added.

The résumé link intentionally retains the existing resources folder until a direct, current résumé is supplied. Full film accessibility alternatives and a curated showreel need an editorial pass with the original audio/process assets. No paid media, analytics or 3D service is required by this build.
