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
## Update - 2025-09-28 08:36 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Confirmed Context7 connectivity (/vercel/next.js, /tailwindlabs/tailwindcss.com, /shadcn-ui/ui docs), reviewed AGENTS.md, README.md, WORKSPACE_STATUS.md, and surveyed core Next.js App Router structure (home layout, API routes, security middleware, shared components), Playwright suites, and scripts.
- Watcher: Acknowledged 2025-09-28 07:45 UTC snapshot; outstanding verifications (Playwright e2e, CRPO script, manual QA) remain.
- Pending Tests: None run this session; follow prior TODOs when implementing changes.
- Next Steps: Align on upcoming feature or hardening tasks before modifying code; plan validation runs once scope defined.

## Update - 2025-09-28 08:52 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Redeployed current codebase to Vercel via 
px vercel deploy --prod --yes (deployment URL: https://therapy-website-30nj75k7z-umairs-projects-f3471364.vercel.app).
- Notes: Deployment protected by Vercel auth; user will need bypass token to preview.
- Next Steps: Await instructions to align documentation and header implementation before modifying code/tests.

## Update - 2025-09-28 09:05 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Triggered repeat production deployment via 
px vercel deploy --prod --yes (deployment URL: https://therapy-website-ofsx1g48f-umairs-projects-f3471364.vercel.app).
- Notes: Deployment protection still active; requires bypass token for preview. Awaiting user verification and further instructions.

## Update - 2025-09-28 19:43 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Added Vercel MCP runner (scripts/run-vercel-mcp.js), npm script (mcp:vercel), documentation updates (mcp-servers/README.md, .env.example) to support inspecting protected deployments via ercel-mcp server.
- Pending: Provide Vercel API token via VERCEL_MCP_API_KEY before running new script.
- Next Steps: Use the Vercel MCP server to fetch deployment contents once credentials supplied.

## Update - 2025-09-28 20:06 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Resumed session after interruption, reran Context7 connectivity (/vercel/next.js, /tailwindlabs/tailwindcss.com) and reviewed existing Vercel MCP integration changes (scripts/run-vercel-mcp.js, npm scripts, README updates).
- Watcher: Last snapshot 2025-09-28 19:43 UTC flagged pending Vercel MCP usage; no new watcher alerts observed.
- Pending Tests: Not run this session; Playwright e2e, CRPO compliance script, manual QA checklist still outstanding per earlier notes.
- Next Steps: Await direction on running verification suite or exercising Vercel MCP server once credentials are supplied.
## Update - 2025-09-28 20:28 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Investigated production drift; confirmed resolvemenstherapy.ca was still mapped to deployment dpl_EhDevGREUpXV7wJWKMQVxJhjSFo1 (build_1759052538885) from 09:41 EDT, compared hashed assets against local build (build-1759090549503), then promoted a fresh production deploy via ercel deploy --prod --yes (dpl_GcH1uFPVokLAq6QEyQ86375McYnN, build_1759091003146). Alias now resolves to https://therapy-website-5vxizdcj0-umairs-projects-f3471364.vercel.app.
- Watcher: No new alerts beyond prior verification backlog; noted alias update to latest deployment.
- Pending Tests: Lint/build already validated during deploy; Playwright/CRPO/manual QA remain outstanding post-content changes.
- Next Steps: Spot-check production content, then resume verification loop once the team confirms pages now reflect the intended copy.
## Update - 2025-09-28 20:43 UTC
- Author: Codex (GPT-5) | Branch: master | Sandbox: danger-full-access | Approvals: never | Network: enabled
- Actions: Sanitized scripts/run-vercel-mcp.js so Vercel credentials are passed via env instead of command-line args (prevents secret leakage over ps and supports VERCEL_MCP_* fallbacks);
- Watcher: No new alerts; deployment status unchanged.
- Pending Tests: None run; no functional impact beyond MCP helper.
- Next Steps: Continue verification backlog when ready (Playwright, CRPO, manual QA).
