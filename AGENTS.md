# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts Next.js App Router routes; keep new pages colocated with segment-specific layouts, metadata, and loading states.
- `src/components` contains shared UI built on shadcn/ui and Tailwind; prefer composing existing atoms before introducing new variants.
- `src/lib` stores utilities (validators, config helpers) and should remain framework-agnostic; add tests when logic grows.
- `public` holds static assets and JSON manifests; optimize images before committing.
- `tests` houses Playwright specs plus visual snapshots (`visual-regression.spec.ts-snapshots/`).
- `scripts` and `mcp-servers` provide automation and MCP integrations; reuse these entry points for compliance and audit tooling.

## Build, Test, and Development Commands
- `npm run dev` / `npm run dev:3001` boots the app locally after freeing the port via `kill-port`.
- `npm run dev:free` clears ports 3000–3010 when a hung process blocks startup.
- `npm run build` and `npm run start` produce and serve the production bundle.
- `npm run lint` runs ESLint (Next core-web-vitals + TypeScript rules).
- `npm run test:e2e` executes Playwright smoke, accessibility, security, and visual suites; add `:headed` or `:ui` to debug.
- `npm run test:update-snapshots` refreshes visual baselines after intentional UI updates.
- `npm run links` crawls the local site for broken internal links.
- `node scripts/crpo-compliance-check.cjs "src/**/*.{ts,tsx,md}"` scans content for testimonial violations (simplified CRPO check).

## Coding Style & Naming Conventions
- Follow the existing ESLint defaults: two-space indentation, double quotes, and no semicolons.
- Name files in kebab-case (`client-stories.tsx`) and export React function components in PascalCase.
- Keep imports ordered by scope (framework → libraries → internal `@/` paths) and rely on the `cn` helper for conditional classes.
- Favor Tailwind utility stacks for styling; extend tokens in `tailwind.config.ts` rather than hard-coding colors.

## Testing Guidelines
- Co-locate new Playwright specs under `tests/` using the `*.spec.ts` or `*.spec.js` pattern; hook into `tests/global-setup.ts` if setup is required.
- Validate accessibility and security headers locally with `npm run test:e2e`; rerun after modifying middleware or metadata.
- Update snapshots with `npm run test:update-snapshots` when UI changes are intentional and document the delta in your PR.
- Record additional manual checks (devices, browsers) in the PR checklist when automated coverage does not apply.

### Updated Test Structure (Jan 2025)
Key test files reflect current navigation and content:
- `tests/header-navigation.spec.js` - Comprehensive header/mega-menu testing (Services dropdown with 16 links, Self-Checks with 5 assessments, Locations)
- `tests/services-page.spec.js` - Services page with "Specialized Support Tracks" section validation
- `tests/homepage.spec.js` - Updated homepage content assertions (trust indicators, emotional states, who we help sections)
- `tests/navigation-buttons.spec.js` - Cross-page navigation flows with current route structure

## Workspace Documentation Protocol
- Maintain a project log (`WORKSPACE_STATUS.md` or successor) for every working session. If no log exists, create one before yielding.
- Each agent must update the log **before handing off**, capturing:
  - Timestamp (UTC), author, and environment (branch, sandbox mode, approvals).
  - Actions completed (code, tests, docs) and any verifications pending.
  - Open risks, blockers, and explicit next steps for the next agent.
- Keep entries concise and actionable—use bullets and reference paths/commands.
- When major milestones occur (feature completion, release prep), add a short summary in `UPDATE_SUMMARY.md` or the relevant changelog.
- For multi-day efforts, ensure the latest log entry links to prior context so another agent can resume without digging through history.

## Context7 Usage Requirement


- All AI-assisted coding, audits, or research must consult the Context7 MCP server first to pull current documentation or best practices.
  - Run `node scripts/mcp-smoke.js context7` to confirm connectivity, then call `resolve-library-id` and `get-library-docs` for the frameworks involved (Next.js, Tailwind, etc.).
  - Reference the library ID and relevant excerpts in reasoning or commit notes; note if Context7 returns incomplete data.
  - If Context7 is unavailable, record the outage in the workspace log and flag any assumptions in your handoff summary.
- Include the Context7 source in PR descriptions or workspace notes when the research informed decisions.


## Cloud Watcher Agent
- Operates as a persistent, read-only service that monitors the repo, CI logs, and workspace documentation. The watcher never commits code; it records state and raises alerts.
- Polls or receives webhooks for git pushes, PR updates, and automated test results. Summaries are written back to the project log so on-demand agents can resume with zero context loss.
- Maintains structured telemetry (last build, failing suites, outstanding approvals) and exposes an API so active agents can GET /status or request a focused handoff brief.
- Tracks compliance tasks (CRPO runs, security checks) and flags gaps when they are overdue. Any outage (CI offline, Context7 unavailable) must be logged for humans to triage.

## Supporting Agent Roles
- **Commander**: orchestrates work distribution for Codex, Claude, Gemini, etc.; converts watcher signals into actionable task queues and ensures each session updates the workspace log.
- **Guardian/Sentry**: automates security scanning (headers, rate limiting, dependency risk). Uses watcher telemetry to escalate if critical tests or policies fail.
- **Librarian/Scribe**: curates documentation (AGENTS.md, WORKSPACE_STATUS.md, changelogs), deduplicates notes, and archives stale context so new agents ramp quickly.
- **Ops/Infra**: manages environment configuration, deployment secrets, and CI pipeline health. Responds to watcher alerts about infrastructure drift.
- **QA/Verifier**: owns deep validation (Playwright, accessibility, snapshot review) and signs off before merges. Coordinates with Commander to schedule reruns after major changes.
- **Mentor/Onboarding**: provides quickstart context to human or AI collaborators, bundling watcher insights, recent diffs, and outstanding risks.

## Cloud Watcher Operating Notes
- Follow multi-agent patterns called out in OpenAI's Swarm README (handoffs, evaluation loops) and LangGraph's agent guides (memory integration, human-in-the-loop, streaming). The watcher should log every handoff and evaluation trigger.
- The watcher must surface evaluation metrics alongside qualitative notes—include last successful build/run IDs, failing scenarios, and recommended follow-ups.
- All agents must cite watcher status snapshots in their workspace log entries to prove coordination happened. If the watcher is unreachable, note the outage and proceed with manual diligence.

## Commit & Pull Request Guidelines
- Use imperative, conventional prefixes (`feat:`, `fix:`, `chore:`) as seen in the history (`feat: enhance pricing page value justification`). Keep subject lines under 72 characters.
- Reference tickets or docs in the body when context is non-obvious; include before/after snippets for content edits.
- Complete `.github/pull_request_template.md`, especially the CRPO compliance gate; attach screenshots for UI changes and note any snapshot updates.
- Ensure `npm run lint`, `npm run build`, relevant Playwright suites, and the CRPO compliance script pass before requesting review.

## Security & Compliance Notes
- Store secrets in `.env.local`; mirror keys from `.env.example` and never commit private values.
- Changes touching headers, redirects, or email flows must re-verify against `tests/security-headers.spec.ts` and the Resend configuration.
- All public-facing copy must respect CRPO advertising rules—run the compliance script and document reviewer sign-off in the PR.

### CRPO Compliance (Simplified - Jan 2025)
The compliance script now focuses solely on testimonial detection:
- **Prohibited**: Any client testimonials, reviews, success stories, or client feedback
- **Script**: `node scripts/crpo-compliance-check.cjs "src/**/*.{ts,tsx,md}"`
- **Policy**: Simplified from full compliance suite - only checks for testimonials per updated requirements
- **Expansion**: Can be re-expanded if policy changes (see TODOs in script for removed checks)
