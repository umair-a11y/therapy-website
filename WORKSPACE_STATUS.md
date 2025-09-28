# Workspace Status – Jan 2025

## Current Snapshot
- Codebase builds cleanly (`npm run build` completed 2025-01-16 22:45 UTC).
- ESLint passes after removing the duplicate `mcp-servers/lighthouse-seo-server.ts` shim.
- Navigation and services content updates from Claude are merged locally; new Playwright specs are staged but tests still need to be executed end-to-end.

## Recent Work
- Header/services navigation expanded; services page now includes “Specialized Support Tracks.”
- CRPO compliance tooling simplified to “no testimonials” rule (`scripts/crpo-compliance-check.cjs`).
- Playwright suites refreshed (homepage, navigation, services, security). Minor fixes applied to header consistency and accessibility tests to match updated UI.
- Cloud watcher + agent-role governance documented in `AGENTS.md` (covers watcher, commander, guardian, librarian, ops, QA, onboarding).
- Updated about-page hero image with Pexels source (photo-14583017, Lorenzo Castellino).
- Removed homepage `section id="services"` (“Who We Help” card grid) per design request.
- Removed couples/group therapy pages and links (deleted `/couples-therapy`, `/group-therapy`, `/relationship-therapy`; pruned homepage footer links).

## Verification Still Required
1. `npm run test:e2e` to validate the updated Playwright coverage and regenerate snapshots if diffs appear.
2. `node scripts/crpo-compliance-check.cjs "src/**/*.{ts,tsx,md}"` to reconfirm content after edits.
3. Manual QA checklist: desktop/mobile header, consultation form submission, services page cards, link crawler (`npm run links`) when time permits.

## In Flight / Delegated
- **Claude**: Hardening security headers + rate limiting (nonce CSP alignment, Upstash middleware integration, additional tests). Pending response.
- **Executive follow-up**: Review Claude’s upcoming diffs, rerun lint/build/tests, and merge once clear.

## Open Risks & TODOs
- Security middleware still uses `'unsafe-inline'`; awaiting nonce pipeline from Claude’s assignment.
- Playwright snapshots from earlier runs may be stale; confirm before committing.
- Upstash credentials required for persistent rate limiting—add to `.env.local` and deployment secrets after Claude’s changes land.
- Past exposure of Unsplash/Resend keys noted; ensure rotation is tracked with operations.

_Last updated: 2025-01-16 23:55 UTC_

## Update – 2025-09-28 07:45 UTC
- Prepared repo for commit after recent homepage/service updates (hero photo swap, services cleanup, doc refresh).
- Validated that `AGENTS.md` and workspace logging guidance match current multi-agent process.
- Pending verification: Playwright end-to-end suite, CRPO compliance script, manual QA checklist, Context7 refresh before next feature work.

### Next Actions
- Run `npm run test:e2e` and regenerate snapshots if UI diffs remain.
- Execute `node scripts/crpo-compliance-check.cjs "src/**/*.{ts,tsx,md}"` once compliance script stabilized.
- Capture production smoke (links crawl, consultation form) post-deployment.
