# Sumora website — session progress

Snapshot for the next session. What got built, how, and what's left.

## Goal

Convert the static six-page Sumora Health HTML bundle into a Next.js (App Router, TypeScript) project, preserving the UI exactly. Move the originals into a `_design/` folder for reference.

## What we did

### 1. Preserved the originals

Moved all six HTML files into `_design/` (still byte-identical to the original bundle):

```
_design/
  about.html  careers.html  contact.html
  index.html  signals.html  technology.html
```

The site's content, copy, and CSS were copied from these files. When in doubt about styling or markup, this folder is the source of truth.

### 2. Next.js scaffold (App Router, TS)

Files at the repo root:

- `package.json` — Next 14.2.5, React 18.3, TS 5.5. Scripts: `dev`, `build`, `start`, `lint`.
- `tsconfig.json` — strict, `paths: { "@/*": ["./*"] }`, excludes `_design/`.
- `next.config.js` — `reactStrictMode: true`, plus security headers, no production source maps, `poweredByHeader: false` (see _Security_ section below).
- `next-env.d.ts`, `.gitignore`, `.eslintrc.json` (extends `next/core-web-vitals`).
- `public/.gitkeep` (folder placeholder).
- `.env.local.example` — `ANTHROPIC_API_KEY` slot for the Sumi chat.

### 3. Shared layer

- `app/layout.tsx` — root layout, sets metadata + Google Fonts (Inter, Instrument Serif, JetBrains Mono).
- `app/globals.css` — design tokens (`--sage`, `--paper`, `--ink`, `--lime`, `--teal`, etc.), body noise overlay, and the styles shared across every page: `.topbar`, `.menu-btn`, `.drawer*`, `.reveal`, `.site-footer*`, `.foot`, `.page-wrap`, `.card`, `.page-hero`, `.eyebrow`, `.cta-strip`, `.pill-light`, `.pill-ghost`.
- `components/SiteHeader.tsx` — **client** component. Brand + menu button + mobile drawer + nav. Takes `currentPage` and `withBorder` props. Manages drawer open state, applies `body.drawer-open`, closes on Escape / backdrop click / nav-link click.
- `components/SiteFooter.tsx` — dark footer used on every inner page. Takes `active` prop to highlight the right item in lime.
- `components/InnerFoot.tsx` — the slim grey strip inside each inner-page card. Takes `copy` and `exclude` (omits self from the link row).
- `components/SumiLauncher.tsx` — client. Floating "S" bubble on the homepage with timed intro bubble + sessionStorage dismiss.
- `components/RevealOnScroll.tsx` — client. IntersectionObserver that adds `.in` to every `.reveal` element on scroll.

### 4. Pages

Each page imports its own page-specific stylesheet (sibling `.css` file) and composes shared components.

| Route          | File                          | CSS                          | Client? | Notes                                                                                                            |
| -------------- | ----------------------------- | ---------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `/`            | `app/page.tsx`                | `app/home.css`               | no      | Hero card with topbar inside, 4 animated tiles, marquee, manifesto, products, platform, trust, mission, dark CTA+footer (inlined, NOT the shared SiteFooter). Sumi launcher. |
| `/technology`  | `app/technology/page.tsx`     | `app/technology/technology.css` | no   | Anchor pill bar + 8 content blocks (approach, stack, barnard, vrx, sera, evaluation, limits, references) + CTA strip. |
| `/signals`     | `app/signals/page.tsx`        | `app/signals/signals.css`    | **yes** | Filter chips + developments timeline (2024→2026) + 5 signal cards (4-lens commentary each) + subscribe form. |
| `/about`       | `app/about/page.tsx`          | `app/about/about.css`        | no      | Problems grid + response strip + story + principles (6) + timeline + leadership (3 cards with gradient portraits) + team grid (4) + CTA. |
| `/careers`     | `app/careers/page.tsx`        | `app/careers/careers.css`    | **yes** | Why grid + role list with chip filter + role-detail modal (7 roles, full data inline) + process steps + CTA. |
| `/contact`     | `app/contact/page.tsx`        | `app/contact/contact.css`    | **yes** | Sumi chat (left) + "other ways" sidebar (right). Chat history + suggestions + typing indicator. |
| `/api/sumi-chat` | `app/api/sumi-chat/route.ts` | —                          | server  | POST handler that proxies messages to Anthropic with `claude-sonnet-4-6`, server-side `ANTHROPIC_API_KEY`, full Sumi system prompt. |

### 5. Key conversions

- `class=` → `className=`, self-closing tags everywhere, `stroke-width` → `strokeWidth`, etc.
- All `href="x.html"` rewritten to Next.js routes: `index.html` → `/`, `index.html#solutions` → `/#solutions`, etc. Internal links use `next/link`.
- `<script>` blocks replaced: drawer toggle lives in `SiteHeader` (useState + useEffect), reveal-on-scroll in `RevealOnScroll`, chip filters / role modal / chat / subscribe form all become React state in their respective client pages.
- The original `contact.html` called `https://api.anthropic.com/v1/messages` directly from the browser (no key, would have failed, and would have leaked any key if added). **Replaced** with a server route at `/api/sumi-chat` that reads `ANTHROPIC_API_KEY` from env.

### 6. CSS strategy (read before editing styles)

- Tokens + everything shared lives in `app/globals.css`.
- Each page's per-page CSS is imported as a global stylesheet — Next.js bundles them all together. Page-scoped wrappers (`.about-page`, `.signals-page`, `.careers-page`, `.contact-page`) were added on each inner page's outer `.page-wrap` to scope page-specific overrides (notably `.eyebrow::before` variants and `.chip` styles which differ between signals and careers in tiny ways).
- The homepage does **not** use `.page-wrap`/`.card` — it has its own `.hero-wrap`/`.hero` shell in `home.css`.

## What's remaining

### Required to actually run the site

1. **Install deps**: `npm install` (user got `'next' is not recognized` because this hasn't been run).
2. **Set up env for chat**: `cp .env.local.example .env.local`, set `ANTHROPIC_API_KEY=sk-ant-...`. Without it, the Sumi chat will return the fallback "trouble responding" message on every send.
3. **Browser QA pass**. Specific things to spot-check that I haven't verified myself:
   - Drawer opens/closes correctly on every page. The drawer is rendered inside the hero/card containers which have `overflow:hidden`; it uses `position:fixed` and no ancestor has a `transform`, so it should escape — but worth eyeballing.
   - Contact page eyebrow has both a `::before` (small ink dot, inherited from globals) **and** an inner `<span class="live">` (pulsing teal dot). That's the original behaviour — two dots. Verify it looks intentional.
   - The signals page eyebrow override: `.signals-page .eyebrow::before` should be the pulsing teal dot, not the small ink dot.
   - Reveal-on-scroll animations fire as expected on all `.reveal` sections.
   - Chip filters on `/signals` and `/careers` show/hide rows correctly.
   - The careers role modal opens on row click and closes on backdrop / X / Esc-equivalent (currently only backdrop + X; **Escape key is NOT wired up** for the modal — only the drawer has it).

### Editorial placeholders (carried from the original brief — see README)

- `[Founder Name]` / `[Co-Founder Name]` on `/about` — three slots.
- LinkedIn icons on `/about` are inert `.li-placeholder` spans. Swap to `<a href="https://...">` per leader once profiles exist.
- Email addresses: `hello@sumorahealth.com`, `hello@sumora.health`, `clinicians@sumora.health`, `careers@sumora.health`. Confirm which domain is canonical (the originals already mixed `.com` and `.health` — left as-is).
- `Issue 04 · Week of 05 May 2026` on `/signals` — update each new issue.
- Developments timeline on `/signals` ends Jan 2026 — extend as field moves.

### Nice-to-haves not done

- No favicon yet (`public/` is empty; Next App Router would auto-serve `app/icon.png` or `app/favicon.ico` if added).
- No `not-found.tsx` / `error.tsx` / `loading.tsx` boundaries.
- No tests of any kind.
- No deploy config (Vercel, Netlify, etc.). Static export is feasible only if the `/api/sumi-chat` route is replaced or hosted separately; otherwise deploy to a Node host (Vercel works zero-config).
- Escape key handler on the careers role modal.
- The model id `claude-sonnet-4-6` in `app/api/sumi-chat/route.ts` is the current Sonnet 4.6 alias. If the chat 404s on first use, double-check the model id against the latest API docs.

## Architecture decisions worth remembering

- **One combined `<SiteHeader>` for topbar + drawer.** Originally I considered splitting them, but the topbar's button and the drawer share open-state, and the drawer is `position:fixed` so it doesn't matter where it's mounted in the DOM. Easier to reason about as one client component.
- **Per-page client/server split.** Pages with no interactivity (`/`, `/technology`, `/about`) are server components so they SSR clean HTML. Pages with state (`/signals`, `/careers`, `/contact`) are marked `"use client"` at the top.
- **No CSS Modules / Tailwind.** The original is hand-written CSS; reproducing it 1:1 was simpler with plain global stylesheets. If we ever want to refactor, CSS Modules is the natural next step (and the page-scoped wrapper classes are already there).
- **Anthropic API moved server-side.** Non-negotiable — the original would have leaked the key. Server route lives at `app/api/sumi-chat/route.ts` and reads `ANTHROPIC_API_KEY` from env at request time.

## File map (post-conversion)

```
sumora-website/
├── .claude/
│   ├── settings.local.json
│   └── SESSION_PROGRESS.md          ← this file
├── _design/                         ← original HTML, kept for reference
│   ├── about.html  careers.html  contact.html
│   ├── index.html  signals.html  technology.html
├── app/
│   ├── layout.tsx                   root layout, fonts, metadata
│   ├── globals.css                  tokens + shared shell styles
│   ├── page.tsx                     /
│   ├── home.css
│   ├── api/sumi-chat/route.ts       server proxy → Anthropic
│   ├── about/{page.tsx, about.css}
│   ├── careers/{page.tsx, careers.css}
│   ├── contact/{page.tsx, contact.css}
│   ├── signals/{page.tsx, signals.css}
│   └── technology/{page.tsx, technology.css}
├── components/
│   ├── SiteHeader.tsx               topbar + drawer (client)
│   ├── SiteFooter.tsx               dark footer for inner pages
│   ├── InnerFoot.tsx                slim foot strip
│   ├── SumiLauncher.tsx             floating bubble (homepage)
│   └── RevealOnScroll.tsx           IntersectionObserver helper
├── public/.gitkeep
├── .env.local.example
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Picking this up next time

1. `cd D:\Web\sumora-website && npm install`
2. `cp .env.local.example .env.local` and fill in `ANTHROPIC_API_KEY` if testing chat.
3. `npm run dev` → http://localhost:3000.
4. Walk every page in the browser against `_design/<page>.html` opened side-by-side. Note any visual deltas.
5. Address any QA findings, then move on to the editorial placeholders.

---

## Session 2 — edits + security + deploy

### Editorial cleanup

- Removed ` <em>(placeholder)</em>` next to all five commenter names on `/signals`: Dr. Reem A., Jamal K., Lucia M., Dr. Priya V., Noor B. Edited `app/signals/page.tsx` only — the originals in `_design/signals.html` were left as-is on purpose (that folder stays the design source of truth).

### Security hardening

Be honest about the limit: **client-side code on the web is always inspectable** because the browser has to download the JS to run it. What we added is real hardening plus a casual-snooper deterrent.

Real hardening (lives in `next.config.js`):

- `productionBrowserSourceMaps: false` — no `.map` files shipped to the browser. Production bundles stay minified-only.
- `poweredByHeader: false` — strips the `X-Powered-By: Next.js` give-away.
- HTTP security headers applied to every route via `headers()`:
  - `X-Frame-Options: DENY` (no embedding in other people's iframes)
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- Plus the existing arrangement: the Anthropic API key only ever lives in `process.env`, never reaches the browser.

Deterrent (lives in `components/DevtoolsDeterrent.tsx`, mounted at the top of `body` in `app/layout.tsx`):

- Suppresses the default right-click context menu.
- Suppresses `F12`, `Ctrl/Cmd+Shift+I/J/C`, `Ctrl/Cmd+U`, `Ctrl/Cmd+S` keydown.
- Prints a styled "this console is for developers" warning to deter the paste-this-here scam pattern.
- This is deterrent only — anyone who knows the browser menu can still open devtools. Marked clearly as such in the file header comment and in the README's Security section.

### Vercel deploy notes

Added a **Deploy to Vercel (via GitHub)** section to the README. Path is:

1. Push to GitHub (done — see next section).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js. No build/output overrides needed.
4. Set the `ANTHROPIC_API_KEY` env var in Vercel Project Settings (Production + Preview + Development) before first deploy.
5. Deploy. Future pushes to `main` auto-deploy.

### GitHub push

Initialized the repo and pushed to `https://github.com/Huzaifa-Muhammed/sumora-website.git` as the `main` branch:

```bash
git init
git branch -M main
git remote add origin https://github.com/Huzaifa-Muhammed/sumora-website.git
git add .
git commit -m "Initial commit — Sumora Health website (Next.js)"
git push -u origin main
```

`.gitignore` already covered `node_modules/`, `.next/`, `.env*.local`. `.claude/settings.local.json` was added to `.gitignore` before the first commit so per-machine Claude settings stay out of the repo. `.claude/SESSION_PROGRESS.md` (this file) **is** committed.

### Files changed/added this session

- `app/signals/page.tsx` — placeholder labels removed (5×).
- `next.config.js` — security headers, source-map + powered-by tweaks.
- `app/layout.tsx` — mounts `<DevtoolsDeterrent />` at the top of `<body>`.
- `components/DevtoolsDeterrent.tsx` — new.
- `README.md` — added Deploy + Security sections.
- `.gitignore` — added `.claude/settings.local.json` exclusion.

### Deploy went live

Production: **https://www.sumorahealth.com/** (Vercel auto-deploys from `main`).

DNS path: Hostinger keeps the nameservers; two records point to Vercel:

- `A    @     216.198.79.1`
- `CNAME www  9e8e1c4650f86c69.vercel-dns-017.com`

`www` is the canonical / production domain; the apex `sumorahealth.com` 307-redirects to it. SSL provisioned automatically by Vercel via Let's Encrypt. The Vercel project's `ANTHROPIC_API_KEY` env var is set across Production / Preview / Development for the Sumi chat.

### Vercel build hiccup we hit and fixed

First Vercel build failed on `react/jsx-no-comment-textnodes` — ESLint thought our literal `// MENU`, `// Reading from`, `// Cited above` eyebrow labels were misplaced comments. Fixed by wrapping each in JSX expression braces (`{"// MENU"}`). 10 spots across `SiteHeader.tsx`, `app/signals/page.tsx`, `app/technology/page.tsx`. See commit `5675de2`.

Two warnings still in the build log, both non-blocking:

- `@next/next/no-page-custom-font` on `app/layout.tsx` — we load Google Fonts via `<link>` instead of `next/font/google`. Perf nudge, ignored for now.
- `autoprefixer: end value has mixed support, consider using flex-end` in `app/careers/careers.css`. Cosmetic.

### What's still pending

- Browser QA pass on every page (still hasn't been done by either of us).
- Editorial placeholders from the original brief: `[Founder Name]` slots on `/about`, real LinkedIn URLs, confirming canonical email domain, weekly Signals issue updates, extending the developments timeline.
- Escape-key handler on the careers role-detail modal (drawer has Escape; modal doesn't).
- Favicon — `public/` is empty; add `app/icon.png` or `app/favicon.ico`.
- `next@14.2.5` has a published security advisory — bump to latest `14.2.x` patch (or `14.3.x`) when convenient.
- Refactor Google Fonts to `next/font/google` to silence the page-custom-font warning and improve font-loading perf.
- Add Vercel Analytics or similar if traffic insight is wanted.
- The model id `claude-sonnet-4-6` in `app/api/sumi-chat/route.ts` — verify it works on first live test; swap if the API returns 404 model-not-found.

---

## Session 3 — leadership portraits

Dropped in the real photos for two of the three leadership cards on `/about`.

- Source images live in `_design/` alongside the original HTML: `nida_fatima.jpeg`, `syed_mujtaba.jpeg`.
- Copied into `public/` with the names the page already expected:
  - `public/nida-fatima.jpg` ← `_design/nida_fatima.jpeg`
  - `public/syed-mujtaba.jpg` ← `_design/syed_mujtaba.jpeg`
- The `<img>` tags in `app/about/page.tsx` (around line 224, the "The people who steer Sumora" section) already pointed at `/syed-mujtaba.jpg?v=3` and `/nida-fatima.jpg?v=3`, so no code change was needed — just the assets.
- **Rashed Al Ameri's portrait (`/rashed-al-ameri.jpg`) is still missing on purpose** — user asked to skip the Chairman for now. The `<img>` tag is still in place; it'll 404 / show alt text until a photo is added.

Filenames matter: the page references the kebab-case `.jpg` form, but the originals in `_design/` are underscore `.jpeg`. If you ever re-sync from the design folder, rename on copy.

---

## Session 4 — Chairman portrait

Filled in the third leadership card on `/about`.

- Source: `_design/shiek.jpeg` (this is Rashed Al Ameri, the Chairman; the design-folder file was named after his title).
- Copied to `public/rashed-al-ameri.jpg` — the filename the `<img>` tag at `app/about/page.tsx:228` was already pointing at, so no code change was needed.
- All three leadership portraits (Chairman, CEO, COO) now resolve. The "Rashed Al Ameri portrait is missing on purpose" note from Session 3 is now stale — kept here for history but the card is complete.
