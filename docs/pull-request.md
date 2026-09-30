# Build the Living Studio portfolio

The previous site separated design, film and development into similar cards and did not make the portfolio itself a strong example of the work. This change rebuilds the presentation around the approved Living Studio direction.

## Changes

- Graphite, silver, white and blue visual system with original project media, editorial layouts and responsive typography.
- Updated owner-supplied logo, compact emblem, browser icons and portrait on Home and About; source originals preserved and optimized delivery included.
- Transforming hero, GSAP scroll details, native cover transitions, and three interactive Lab experiments.
- Five case studies with sticky section navigation, eight films, a searchable work archive with shareable queries and filters, individual film pages, About and Contact.
- React Router framework mode with TypeScript and 22 prerendered public content routes; legacy URLs, proper 404, sitemap and route metadata.
- Responsive WebP assets and H.264/AAC film delivery. Active original media stays in the repository but is excluded from the production output. Removed 92 unused image files (25.7 MB); asset generation now prunes obsolete derivatives.
- Reduced-motion preferences, native dialogs, keyboard controls and an honest email fallback. Optional server-side delivery is supported through environment configuration.
- Fullscreen gallery images load on demand, support arrow-key navigation and restore focus to the opening thumbnail when closed.

## Validation

Typecheck, lint, eight focused tests, production build and the static route/media/section-anchor audit pass. The homepage entry modules total about 172.5 KB gzip. Local HTTP checks confirm deep routes, 404 behavior, category redirects and video byte ranges. Refinement checks verify section links on all five case studies, deferred image markup in closed galleries, current identity assets and removal of retired assets. The asset manifest contains 50 active originals with verified derivatives. Vercel successfully built the earlier implementation and identity previews.

## Review before release

Browser visual and interaction QA is pending authenticated preview access: the preview redirects the review browser to Vercel sign-in. Current film captions/transcripts, a curated showreel, a direct résumé and verified launch/outcome claims remain editorial follow-ups. Email delivery falls back to an email draft until configured.

Keep this as a draft until preview review is complete. The change has not been merged or deployed to production.
