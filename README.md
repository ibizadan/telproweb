# Telpromarketing — Web Studio Site

A cinematic single-page website for Telpromarketing, built with Next.js 14, TailwindCSS, and Framer Motion.

## ⚠️ Important: This is a single-page application

The site is **one page** that scrolls through several sections. The "menu" links are anchor links that scroll to sections — they are NOT separate routes/pages.

**Sections (all on one page):**
1. **Home** (`#home`) — Hero with animated headline
2. **Services** (`#services`) — 4-card grid: WordPress, Next.js, SEO, Managed CRM
3. **Process** — How we work (Discover → Design → Engineer → Operate)
4. **Managed CRM** (`#crm`) — 6 service pillars
5. **About** (`#about`) — Company story
6. **Contact** (`#contact`) — Form + contact details
7. **Footer** — Address, links, giant wordmark

## Tech Stack

- **Next.js 14.2** (App Router, stable)
- **React 18.3** (LTS)
- **TailwindCSS 3.4**
- **Framer Motion 11**
- **Lucide React** icons
- **Node.js 20** (locked via `.nvmrc`)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build (test locally before deploying)

```bash
npm install
npm run build
npm run start
```

If `npm run build` succeeds locally, it will succeed on Zeabur.

## Deploying to GitHub + Zeabur

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/telpromarketing.git
git push -u origin main
```

The included `.gitignore` will keep `node_modules` and `.next` out of your repo.

### Step 2 — Connect to Zeabur

1. Sign in at [zeabur.com](https://zeabur.com)
2. Create a new project
3. Click "Add Service" → "Git"
4. Connect your GitHub account and pick the repo
5. Zeabur auto-detects Next.js — no extra config needed
6. Wait for the build to complete (~2-3 minutes)
7. Click "Networking" → "Generate Domain" to get a `.zeabur.app` URL
8. To use your own domain, add it in the "Domain" panel and update your DNS

## Troubleshooting

### 404 hostname errors

This usually means one of:
- The Zeabur service has not finished building yet — wait 2-3 minutes
- No domain has been generated/assigned — go to Networking → Generate Domain
- DNS for a custom domain has not propagated yet — wait up to 48 hours

### Build fails on Zeabur

- Check that your local `npm run build` succeeds first
- Make sure you committed `package.json` and `package-lock.json`
- Verify the Node version matches `.nvmrc` (20)

### Menu links not scrolling

Each link uses `#sectionId`. The smooth scroll is handled by CSS (`scroll-behavior: smooth`) and `scroll-margin-top: 80px` to clear the fixed nav. Should work in all modern browsers.

### Fonts not loading

The Ethnocentric font loads from jsDelivr CDN. If your network blocks CDNs, the font falls back to system sans-serif but the layout still works.

## Project Structure

```
telpromarketing/
├── app/
│   ├── globals.css       # Design system + custom utilities
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Single page that assembles all sections
├── components/
│   ├── Navbar.tsx        # Fixed glass nav with Services dropdown
│   ├── Hero.tsx          # Cinematic hero
│   ├── TrustBar.tsx      # Logo marquee
│   ├── Services.tsx      # 4-card service grid
│   ├── Process.tsx       # 4-step process
│   ├── CRM.tsx           # CRM pillars
│   ├── About.tsx         # About + CTA banner
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer with giant wordmark
│   └── CursorGlow.tsx    # Ambient cursor light
├── public/
│   └── favicon.svg
├── .gitignore
├── .nvmrc                # Node 20
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── zeabur.json           # Zeabur deployment config
```

## Customization

- **Phone/email/address** — Edit `components/Contact.tsx` and `components/Footer.tsx`
- **Service descriptions** — Edit the `services` array in `components/Services.tsx`
- **Colors** — Edit `tailwind.config.ts` (`brand` color) and `app/globals.css` (`:root` variables)
- **Wire up the form** — The contact form currently just shows a success message. To actually send emails, integrate with [Resend](https://resend.com), [Formspree](https://formspree.io), or your backend. Update the `submit` handler in `components/Contact.tsx`.
