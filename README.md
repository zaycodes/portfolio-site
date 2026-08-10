# zaycodes.com — Portfolio Site

Built with [Astro](https://astro.build). Deployed on Netlify.

## Prerequisites

- Node.js 18 or higher
- npm 7 or higher

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# Site runs at http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/        # All UI components
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── CtaStrip.astro
│   ├── StatsTicker.astro
│   ├── WorkGrid.astro
│   ├── WorkCard.astro
│   ├── Leadership.astro
│   ├── LeadMagnet.astro
│   ├── BigCta.astro
│   ├── Marquee.astro
│   ├── Newsletter.astro
│   └── Footer.astro
├── data/
│   └── work.ts        # All work items — edit this to update portfolio
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro    # Homepage
│   ├── work/
│   │   └── index.astro
│   ├── about.astro
│   ├── speaking.astro
│   ├── resources.astro
│   └── work-with-me.astro
└── styles/
    └── global.css     # Design tokens and global styles
public/
├── favicon.svg
└── images/            # Add your headshot here as zainab-daodu.jpg
```

## What to Update Before Launch

1. **Your headshot** — Add `zainab-daodu.jpg` to `/public/images/`
2. **CV file** — Add `Zainab-Daodu-CV.pdf` to `/public/`
3. **Book a Call URL** — Search for `calendly.com/zaycodes` and replace with your real Calendly URL
4. **Substack URL** — Search for `zaycodes.substack.com` and replace with your real URL
5. **Lead magnet form** — In `LeadMagnet.astro`, replace `FORM_ACTION` with your email service URL (ConvertKit, Mailchimp, etc.)
6. **Speaking events** — Add your events data to `src/data/speaking.ts` and update `speaking.astro`
7. **GitHub URL in footer** — Update the GitHub link in `Footer.astro`

## Deploying to Netlify

### Option A — Netlify UI (easiest)
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### Option B — GitHub Actions (automated)
1. Add your site to Netlify manually first
2. Get your `NETLIFY_AUTH_TOKEN` from Netlify → User settings → Applications
3. Get your `NETLIFY_SITE_ID` from Site settings → General
4. Add both as GitHub repository secrets
5. Every push to `main` will auto-deploy

## Connecting the Docusaurus Subdomain

For `docs.zaycodes.com` (the AI Docs Playbook site):
- Build the Docusaurus project separately
- Deploy to Netlify as a separate site
- Add a custom domain `docs.zaycodes.com` in Netlify
- Add a CNAME record in your domain's DNS pointing `docs` to Netlify

## Design Tokens

All design tokens are in `src/styles/global.css`. Key values:

| Token | Value | Use |
|-------|-------|-----|
| `--color-black` | `#000000` | Hero, nav, dark sections |
| `--color-purple` | `#840CD6` | Primary accent, CTAs |
| `--color-white` | `#FAFAFA` | Light section backgrounds, body text |
| `--color-card` | `#111111` | Work cards, dark cards |
| `--color-grey` | `#6B6B6B` | Secondary text, metadata |
| `--color-mint` | `#C6FFE6` | Product Docs badge |
| `--color-yellow` | `#FFFFA1` | Availability badge, leadership stats |
| `--font-sans` | Syne | Headings, UI |
| `--font-mono` | JetBrains Mono | Code, metrics, metadata |
