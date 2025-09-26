Resolve Men's Therapy — Next.js App (App Router)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Setup (Resend)

This project uses Resend to send consultation notifications and toolkits.

Env vars (set in Vercel → Settings → Environment Variables):

- `RESEND_API_KEY` — your Resend API key
- `EMAIL_FROM` — sender, e.g. `Resolve Men's Therapy <onboarding@resend.dev>`
- `EMAIL_TO` — practice inbox (defaults to `info@resolvemenstherapy.com`)
- `NEXT_PUBLIC_SITE_URL` — canonical base URL (e.g. `https://resolvemenstherapy.com`)

Test (after deploy):

```bash
curl -s -X POST "https://<your-domain>/api/consultation" \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"you@example.com","consent":true,"privacyPolicy":true}'
```

Toolkits (on explicit consent): `/api/toolkit` is called by the results opt‑in component to send a toolkit email.

## SEO & Search Console

- Submit `https://<your-domain>/sitemap.xml` in Google Search Console.
- Confirm coverage and CWV for key routes (Home, Services, About).
- Each route uses `buildMetadata()` for title/description/canonicals; service pages and articles include JSON‑LD (ProfessionalService/BlogPosting/Breadcrumbs).

## Security Headers

Security headers are enforced in production via `next.config.ts`:

- `Content-Security-Policy` (Report‑Only in non‑prod)
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

Use DevTools or `curl -I` to verify headers on deployed pages.

## Testing

Playwright E2E + visual regression + axe accessibility tests:

```bash
npm run test:e2e
npm run test:e2e:headed     # debug
npm run test:e2e:ui         # interactive
npm run test:update-snapshots
```

Dynamic UI (e.g., self‑assessment prompt) is masked in visuals for stability. Security header checks are included.

## Link Checking

With the dev server running on port 3000, you can crawl internal links to catch broken routes:

```bash
npm run dev  # in one terminal
npm run links  # in another terminal; crawls http://localhost:3000
```

The link checker skips external URLs and recurses through internal pages.
