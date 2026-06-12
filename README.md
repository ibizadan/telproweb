# Telpromarketing — Cinematic Web Experience

A premium, cinematic website for Telpromarketing built with Next.js 15, TailwindCSS, and Framer Motion.

## Tech Stack
- **Next.js 15** with App Router
- **TailwindCSS** for utility styling
- **Framer Motion** for cinematic motion design
- **Lucide React** for icons
- Self-hosted **Ethnocentric** + **Inter** + **Instrument Serif** fonts

## Design System
- Dark cinematic palette with deep ink blacks and electric brand blue
- Glassmorphism panels with layered depth
- Aurora gradient ambient lighting
- Custom cursor glow effect
- Sticky scroll sections with parallax
- Floating UI cards and animated reveals
- Marquee logo strip
- Giant wordmark footer

## Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run start
```

## Deploy on Zeabur
1. Push to GitHub
2. Connect repo at zeabur.com
3. Auto-detects Next.js, builds with `output: 'standalone'`

## Structure
```
app/
  globals.css       # Design tokens + utility classes
  layout.tsx        # Root + fonts
  page.tsx          # Assembly
components/
  Navbar.tsx        # Sticky glass nav with dropdown
  Hero.tsx          # Cinematic hero with parallax
  TrustBar.tsx      # Infinite logo marquee
  Services.tsx      # Bento grid with metrics
  Process.tsx       # Sticky 4-step storytelling
  CRM.tsx           # 6-pillar managed services
  About.tsx         # Story + CTA banner
  Contact.tsx       # Glass form + contact info
  Footer.tsx        # Giant outlined wordmark
  CursorGlow.tsx    # Ambient cursor light
```
