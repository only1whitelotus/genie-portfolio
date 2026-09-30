# Build the Living Studio portfolio

The previous site separated design, film and development into similar cards and did not make the portfolio itself a strong example of the work. This change rebuilds the presentation around the approved Living Studio direction.

## Changes

- Graphite, silver, white and blue visual system with original project media, editorial layouts and responsive typography.
- Transforming hero, GSAP scroll details, native cover transitions, and three interactive Lab experiments.
- Five case studies, eight films, a filterable work archive, individual film pages, About and Contact.
- React Router framework mode with TypeScript and 22 prerendered public content routes; legacy URLs, proper 404, sitemap and route metadata.
- Responsive WebP assets and H.264/AAC film delivery. Original media stays in the repository but is excluded from the production output.
- Reduced-motion preferences, native dialogs, keyboard controls and an honest email fallback. Optional server-side delivery is supported through environment configuration.

## Validation

Typecheck, lint, five focused tests, production build and static route/media audit pass. The homepage entry modules total about 172.4 KB gzip. Local HTTP checks confirm deep routes, 404 behavior, category redirects and video byte ranges.

## Review before release

Browser visual and interaction QA is pending a preview deployment. Current film captions/transcripts, a curated showreel, a direct résumé and verified launch/outcome claims remain editorial follow-ups. Email delivery falls back to an email draft until configured.

Keep this as a draft until preview review is complete. The change has not been merged or deployed to production.
