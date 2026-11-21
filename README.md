# Northline Health

Marketing website for a fictional modern outpatient clinic — **Northline Health**. A calm clinical aesthetic (sage, white, deep navy) with a soft abstract 3D medical motif, services, doctors, a patient journey and an interactive "book a visit" widget.

> Demo project. The clinic, doctors, figures and e-mail addresses are fictional. The site does not provide medical advice.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- three.js via `@react-three/fiber` + `@react-three/drei`
- `framer-motion` for scroll / entrance animations
- `next/font/google`: **Onest** (headings) + **Source Sans 3** (text) — both with Cyrillic support

## Run locally

Requirements: Node.js 20.9+ (Node 22 LTS recommended) and npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export -> ./out
npm run preview    # serve ./out locally (uses npx serve)
npm run typecheck  # tsc --noEmit
```

> Fonts are downloaded from Google Fonts **at build time** by `next/font`, so the first build needs internet access. The fonts are then self-hosted in the output.

## Languages (i18n)

A lightweight dictionary approach — no runtime i18n library is needed, which keeps the export fully static.

| Locale | URL    |
| ------ | ------ |
| `en` (default) | `/`    |
| `uk`   | `/uk/` |

- All copy lives in [`lib/i18n.ts`](lib/i18n.ts) (`en` is the source of truth, `uk` must satisfy the same `Dict` type).
- Each locale has its own root layout (`app/(en)`, `app/uk`) so the `<html lang>` attribute is correct.
- The language switcher is in the header and footer.
- To add a locale: add it to `locales`, add a dictionary, and create `app/<locale>/layout.tsx` + `page.tsx` (copy `app/uk`).

## Static export & GitHub Pages

`next.config.mjs` uses `output: "export"` (plus `trailingSlash` and unoptimised images), so `npm run build` produces a fully static site in `out/`.

For a GitHub Pages **project site** (served from `/<repo>/`), set the base path at build time:

```bash
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH = "/northline-health"; npm run build

# bash
NEXT_PUBLIC_BASE_PATH=/northline-health npm run build
```

Then publish the `out/` folder (e.g. with `actions/upload-pages-artifact` + `actions/deploy-pages`) and add an empty `.nojekyll` file if you deploy the folder manually. For a user/organisation site or a custom domain, leave `NEXT_PUBLIC_BASE_PATH` unset.

## Project structure

```
app/
  (en)/layout.tsx, page.tsx   English root layout + page
  uk/layout.tsx, page.tsx     Ukrainian root layout + page
  globals.css                 Tailwind v4 theme, keyframes, soft gradients
components/
  SceneCanvas.tsx             R3F soft cross, blobs and ripple rings (client only)
  HeroScene.tsx               Lazy-loads the canvas, WebGL / reduced-motion / visibility handling
  Hero.tsx, Sections.tsx      Page sections
  BookingForm.tsx             Interactive visit picker (composes a mailto: request)
  Ecg.tsx                     Animated heartbeat line
  Header.tsx, Footer.tsx, LangSwitch.tsx, Reveal.tsx, Logo.tsx
lib/
  i18n.ts, fonts.ts, metadata.ts
```

## Design notes

- Palette: sage, mist white and deep navy with a touch of warm "dawn" — intentionally gentle, never clinical-cold.
- Animations: breathing halo, pulsing availability dots, looping ECG line, scroll reveals, floating badge, card hover states.
- 3D: a soft rounded cross, drifting organic blobs and slow ripple rings. Client-only (`next/dynamic`, `ssr: false`), pauses off-screen, falls back without WebGL, still frame for reduced motion.
- The booking widget is static-site friendly: it composes a `mailto:` link, nothing is stored or posted.

## Environment

No environment variables are required. See [`.env.example`](.env.example) for the optional `NEXT_PUBLIC_BASE_PATH`.
