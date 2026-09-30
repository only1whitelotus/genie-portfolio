# Living Studio — release review

## Implemented

- Complete Direction A design system and page hierarchy, responsive hero and three discipline states.
- Five case studies with source artwork, fullscreen image viewers and two interface walkthroughs.
- Eight individually addressable film entries, verified original credits, optimized native playback and external Instagram destinations.
- URL-backed archive filters, three working Lab experiments, About and Contact pages.
- GSAP choreography, a scoped scroll sequence, Motion layout transitions and named cover View Transitions with ordinary navigation fallback.
- Original project paths retained; legacy categories redirect and legacy video fragments map to individual film routes.
- Build-time HTML, per-route metadata, social images, sitemap, robots, real static 404 and media derivatives.

## Verified before preview

- TypeScript, ESLint and focused content/contact tests pass.
- Production build generates 26 HTML pages, including 22 canonical public routes.
- Build audit checks internal destinations, image references, page titles/canonicals and the initial compressed JavaScript budget. The homepage entry modules total approximately 172.4 KB gzip.
- Four original films encoded to H.264/AAC MP4; originals retained in git and removed from delivery output.

- Local production HTTP checks: main/deep routes return 200, an unknown route returns 404, legacy category navigation reaches its destination, video range requests return 206, and the unconfigured contact capability correctly reports disabled.
- Browser visual, touch, keyboard and real-device performance checks are pending. The cloud browser cannot access the local preview, and repository write access currently blocks a Vercel preview.

## Publishing blocker

The connected GitHub integration rejected branch creation with HTTP 403: “Resource not accessible by integration.” Command-line Git had no publishing credential. No remote branch, PR or deployment was created. Local changes are committed on `feature/living-studio`; the live site is unchanged.

## Still to verify on the deployed preview

- Desktop and narrow-screen composition, menu focus/Escape, route transitions, all experiment controls, image dialogs and video playback.
- Production 404 status, direct route loads and legacy redirects on Vercel.

## Editorial / account dependencies

- A direct current résumé file. The existing folder remains labelled “Résumé & resources.”
- Email provider configuration if server-side submission is wanted. Email-draft fallback is fully available.
- A deliberate showreel, accurately reviewed captions/transcripts and any authentic before/after or process material. Existing finished films are available individually; no process material or captions have been fabricated.
- Current FBL launch/product rules and outcome metrics before adding those claims. The supplied portfolio screenshots are retained as project evidence and do not claim to represent the latest live version.

These items do not block reviewing the redesign. They remain explicit content/deployment follow-ups rather than simulated features.
