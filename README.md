# Max & Victoria Wedding

Bilingual (English/Ukrainian) wedding website for Max & Victoria's wedding on September 13, 2026 at Vinha Boutique Hotel, Vila Nova de Gaia, Portugal.

Single-page scroll architecture with 7 sections: Hero, Our Story, Schedule, Travel & Porto, Gallery, FAQ, RSVP.

## Prerequisites

- Node.js 20+
- pnpm

## Setup

```bash
pnpm install
cp .env.example .env.local
```

Fill in `.env.local`:

```
RESEND_API_KEY=your_resend_api_key
RSVP_EMAIL=your@email.com
RSVP_FROM_EMAIL=RSVP <rsvp@yourdomain.com>
```

## Development

```bash
pnpm dev       # start dev server at http://localhost:3000
pnpm build     # production build
pnpm lint      # eslint
```

## Theme Configurator

In development, a floating panel (bottom-left) lets you switch between:

- **Presets**: Natural (botanical, sage accents) or Editorial (minimal, warm gold)
- **Palettes**: Sage Green, Rose Gold, Champagne & Peach, Dusty Terracotta

The configurator is hidden in production. See `docs/design-system.md` for the full design spec.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- next-intl (English + Ukrainian)
- Framer Motion
- Resend (RSVP emails)

## Deployment

Deployed on Vercel. Push to main triggers automatic deployment.
