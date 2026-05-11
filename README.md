# Sumora Health — website

Live at **[sumorahealth.com](https://www.sumorahealth.com/)** (deployed on Vercel, DNS via Hostinger, auto-deploys from `main`).

Six-page Next.js (App Router, TypeScript) build of the Sumora Health marketing site. The page-for-page reference HTML it was built from lives in [`_design/`](./_design).

## Pages

| Route          | Source reference          | Notes                                                       |
| -------------- | ------------------------- | ----------------------------------------------------------- |
| `/`            | `_design/index.html`      | Homepage — hero, tiles, marquee, products, platform, CTA    |
| `/technology`  | `_design/technology.html` | Approach, model stack, evaluation, limitations, references  |
| `/signals`     | `_design/signals.html`    | Developments timeline + five weekly signals + subscribe     |
| `/about`       | `_design/about.html`      | Problems, principles, timeline, leadership, team            |
| `/careers`     | `_design/careers.html`    | Why · open roles (filter + modal) · process                 |
| `/contact`     | `_design/contact.html`    | Sumi chat (Anthropic API via server route) + other ways     |

The shared brand wordmark, right-side drawer menu, and dark site footer carry across every inner page. The homepage uses a custom hero shell and inlines its own combined CTA + footer block, matching the design source exactly.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Sumi chat (contact page)

The contact page's chat UI calls a server route at `app/api/sumi-chat/route.ts`, which proxies the conversation to the Anthropic Messages API. Copy `.env.local.example` to `.env.local` and add your key:

```bash
cp .env.local.example .env.local
# then edit .env.local and set ANTHROPIC_API_KEY=sk-ant-...
```

Without a key, the chat UI loads but every send returns the fallback &ldquo;trouble responding&rdquo; message.

## Project layout

```
app/
  layout.tsx              root layout, fonts, metadata
  globals.css             design tokens + shared topbar/drawer/footer styles
  page.tsx                /  homepage
  home.css                homepage-only styles
  technology/             /technology
  signals/                /signals
  about/                  /about
  careers/                /careers
  contact/                /contact
  api/sumi-chat/route.ts  server proxy to Anthropic Messages API
components/
  SiteHeader.tsx          brand + menu button + mobile drawer (client)
  SiteFooter.tsx          dark footer used on every inner page
  InnerFoot.tsx           slim bottom strip inside each inner-page card
  SumiLauncher.tsx        floating chat bubble (homepage only)
  RevealOnScroll.tsx      IntersectionObserver helper for `.reveal` elements
_design/                  the original static HTML the site is built from
```

## Brand tokens

Defined once at the top of [`app/globals.css`](./app/globals.css):

- **Canvas** `--sage` `#A8B7B0`
- **Paper card** `--paper` `#FAFAF7`
- **Ink** `--ink` `#0E1315`
- **Lime accent** `--lime` `#D9F255`
- **Teal accent** `--teal` `#1EB89A`

Fonts: Inter (display + body), Instrument Serif (italic accents), JetBrains Mono (labels, dates, eyebrows). Loaded from Google Fonts in `app/layout.tsx`.

## Deploy to Vercel (via GitHub)

The repo is set up to deploy on Vercel with zero configuration. Once the project is pushed to GitHub:

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel auto-detects Next.js — leave Framework Preset as **Next.js**, Build Command as `next build`, Output as `.next`. No changes needed.
3. Add an **Environment Variable** before the first deploy:
   - `ANTHROPIC_API_KEY` → your `sk-ant-...` key (used by `/api/sumi-chat`).
   - Apply to **Production**, **Preview**, and **Development**.
4. Click **Deploy**. Subsequent pushes to `main` auto-deploy.

Custom domain: add it under **Project → Settings → Domains** after the first deploy.

## Security

A few things are in place so the site isn't trivially scrapeable, and so casual users can't poke around:

- **Server-side secrets.** The Anthropic API key never reaches the browser. The chat UI calls `/api/sumi-chat`, which holds the key from `process.env`.
- **Security headers** set in `next.config.js` and applied to every route:
  - `X-Frame-Options: DENY` (no embedding in other people's iframes)
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security` (HSTS, browsers force HTTPS)
- **No source maps in production** (`productionBrowserSourceMaps: false`) and the `X-Powered-By` header is stripped.
- **Devtools deterrent** (`components/DevtoolsDeterrent.tsx`) — disables right-click and the common devtools keyboard shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S) and prints a console warning.

A note worth being honest about: **client-side code on the web is fundamentally inspectable.** The browser has to download your JS to run it, and every browser ships with a menu-accessible devtools panel. The deterrent above stops casual snoopers; anyone determined can still read everything that runs in the browser. If something must stay secret, keep it on the server (as we do with the Anthropic key).

## Things still placeholder

Search the codebase / the `_design/` folder for these — they were marked TODO in the original brief and carried over:

- `[Founder Name]`, `[Co-Founder Name]` on `/about` — three leadership slots
- LinkedIn profile URLs (currently inert `.li-placeholder` spans on `/about`)
- Email addresses live as `hello@sumora.health` and `clinicians@sumora.health`
- `Issue 04 · Week of 05 May 2026` on `/signals` — update each issue
- The Signals developments timeline ends January 2026 — extend as the field moves
