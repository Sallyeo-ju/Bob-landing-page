# BOB — Landing Page

A clean, animated landing page for **BOB**, an AI-powered IDX stock analysis app
that answers questions about Indonesian stocks in plain language (technicals,
fundamentals & news).

Built with **React (JSX) + Vite + plain CSS**. Palette taken from the project's
color-reference mock (teal canvas, off-white surfaces, gold accent, green/red
data signals).

## Run it

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

> Node 18+ required.

## Structure

```
index.html                 # HTML entry (fonts, root div)
src/
  main.jsx                 # React entry
  App.jsx                  # page composition
  hooks/useReveal.js       # IntersectionObserver scroll-reveal
  styles/global.css        # design tokens, buttons, keyframes
  components/
    Navbar.jsx / .css       # sticky nav, scroll state, mobile menu
    Logo.jsx
    Hero.jsx / .css         # animated floating stock-card mockups
    StockCard.jsx / .css    # reusable off-white stock card
    Features.jsx / .css     # 6 feature cards
    ChatDemo.jsx / .css     # auto-typing AI chat that loops 3 conversations
    HowItWorks.jsx / .css   # 3-step flow
    Download.jsx / .css     # CTA + store buttons + decorative QR
    Footer.jsx / .css
```

## Animations

- Scroll-reveal on every section via `IntersectionObserver` (`.reveal` + staggered delays)
- Floating hero cards, pulsing background glows, live "online" dot
- Auto-typing chat demo with a thinking indicator and structured answers
- Growing chart bars, hover lifts on cards/buttons
- Respects `prefers-reduced-motion`

## Design tokens (from the reference palette)

| Token | Hex |
|-------|-----|
| bg-base (teal canvas) | `#0B2E2C` |
| bg-elevated | `#0F3B38` |
| bg-sunken | `#082523` |
| surface (off-white) | `#F4F1E9` |
| accent (gold) | `#E9B84A` |
| bullish / bearish | `#22C55E` / `#FF5A4D` |

Font: **Plus Jakarta Sans**.
