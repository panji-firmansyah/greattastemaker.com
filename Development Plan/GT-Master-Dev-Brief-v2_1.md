# GreatTastemaker.com — Master Development Brief

> **Version:** 2.0 — Final  
> **Date:** February 19, 2026  
> **Purpose:** Single source of truth for AI-assisted development (Claude Code / Cursor / IDE)  
> **Deployment:** GitHub → Vercel (automatic from `main` branch)  
> **Status:** Ready for development

---

## How to Use This Document

This document is designed to be fed directly into an AI coding assistant (Claude Code, Cursor, Windsurf) for implementation. It contains:

1. **Everything needed to scaffold the project** — tech stack, dependencies, install commands
2. **Every design token** — colors, fonts, spacing, component specs (copy-paste ready)
3. **Every page's content** — locked copy, layout specifications, responsive behavior
4. **Every component** — file paths, props, behavior, animation specs
5. **Mobile-first specifications** — every section has explicit desktop AND mobile treatment

**Implementation order:** Follow the [Implementation Roadmap](#12-implementation-roadmap) in sequence. Each phase builds on the previous.

**Critical rule:** All copy in Section 5 is **locked and final**. Implement exactly as written — do not paraphrase, reword, or "improve" the copy.

---

## Table of Contents

1. [Project Context](#1-project-context)
2. [Tech Stack & Setup](#2-tech-stack--setup)
3. [Design System](#3-design-system)
4. [Site Architecture](#4-site-architecture)
5. [Page Specifications + Copy](#5-page-specifications--copy)
6. [Component Architecture](#6-component-architecture)
7. [Form Handling & CTA Flow](#7-form-handling--cta-flow)
8. [Animation Specifications](#8-animation-specifications)
9. [Mobile-First Specifications](#9-mobile-first-specifications)
10. [SEO & Performance](#10-seo--performance)
11. [File & Folder Structure](#11-file--folder-structure)
12. [Implementation Roadmap](#12-implementation-roadmap)
13. [Future-Proofing](#13-future-proofing)

---

## 1. Project Context

### What We're Building

A complete rebuild of GreatTastemaker.com — from a single-page static HTML site to a multi-page Next.js application with an editorial, warm, premium visual identity.

GreatTastemaker is a B2B go-to-market consulting practice led by Panji Firmansyah. The site must communicate: premium consulting, personal founder story, systematic methodology, and clear conversion path to a free diagnostic.

### Current State

- Single-page static HTML site
- Deployed on Vercel via GitHub
- Dark design with cyan accents (being fully replaced)
- No lead capture system, no multi-page structure

### Target State

- Next.js 14+ (App Router) — 4 pages + shared layout
- **Editorial, warm, precise** visual identity (light base, amber accent, serif headlines)
- Integrated lead capture form (`/start`)
- **Full English** — all copy, navigation, URLs, labels, footer
- i18n-ready architecture for Phase 2 (Bahasa Indonesia)
- SEO-optimized, fast (95+ Lighthouse), accessible
- Mobile-first responsive design

### Critical Design Direction

The existing site uses dark mode + cyan accents (Vercel/Linear aesthetic). **This is being completely replaced** with an editorial/warm design system. The new direction was derived from the brand personality established in the locked copy — a premium consulting practice led by a real person, not a SaaS product.

**Do NOT reference the old design system.** All visual specifications in this document supersede all previous plans.

### What This Is NOT (Phase 1 Scope)

- NOT the GTM Foundation onboarding web app (Phase 2)
- NOT a blog/CMS system (Phase 2)
- NOT a client dashboard or login system
- NOT implementing bilingual routing yet (Phase 2)
- NOT implementing full Foundation diagnostic intake (Phase 2)

---

## 2. Tech Stack & Setup

### Project Initialization

```bash
# Create Next.js project
npx create-next-app@latest greattastemaker-com --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

cd greattastemaker-com

# Install core dependencies
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod

# Install shadcn/ui CLI and initialize
npx shadcn@latest init

# Install required shadcn/ui components
npx shadcn@latest add button card badge separator input textarea select sheet

# Install Tailwind typography plugin
npm install @tailwindcss/typography

# Install email service (choose one)
npm install resend           # Option A: Resend API (recommended)
# OR use Formspree           # Option B: No package needed, just endpoint

# Dev tools
npm install -D prettier eslint-config-prettier
```

### Core Framework

```
Next.js 14+ (App Router)
├── React 18+ (Server Components by default)
├── TypeScript (strict mode)
└── Deployed on Vercel (automatic from GitHub main branch)
```

### Styling & UI

```
Tailwind CSS 3.4+
├── Custom warm theme configuration (see Design System)
├── CSS variables for all design tokens
└── @tailwindcss/typography (for long-form text on /about)

shadcn/ui
├── Button, Card, Badge, Separator
├── Input, Textarea, Select (for intake form)
├── Sheet (mobile menu)
└── All customized to match editorial warm theme
```

### Typography (Fonts)

```
Fraunces (variable serif) — Headlines ONLY
├── Google Fonts, loaded via next/font/google
├── Optical sizing enabled
├── Weight: 600 (semi-bold) for all headlines
└── NEVER used for body text

Inter — Body text + UI
├── Google Fonts, loaded via next/font/google
├── Weights: 400 (regular), 500 (medium), 600 (semi-bold)
└── Primary reading font, nav labels, buttons, form fields

JetBrains Mono — Stats/numbers only (optional)
├── For specific stat callouts (Rp 700M+, 47 people, 4 days)
└── Only where it adds visual distinction — NOT required
```

**Font loading in `app/layout.tsx`:**
```typescript
import { Fraunces, Inter } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['600'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

// Apply to <body>:
// className={`${fraunces.variable} ${inter.variable} font-sans`}
```

### Animation

```
Framer Motion 11+
├── Scroll-triggered reveals (fade-up, once per element)
├── Simple page transitions (fade)
├── Staggered list/card reveals
├── Subtle hover states
└── NO parallax, NO gradient animations, NO floating elements
```

### Additional Libraries

```
lucide-react          — Icons (line style, 1.5px stroke)
next/font             — Font optimization (Fraunces + Inter)
next/image            — Image optimization
react-hook-form       — Form handling (/start intake form)
@hookform/resolvers   — Zod resolver for react-hook-form
zod                   — Form validation schema
resend                — Email delivery (or Formspree as alternative)
```

### Hosting & Deployment

```
Vercel
├── Automatic deployments from GitHub `main` branch
├── Preview deployments for pull requests
├── Vercel Analytics (free tier) — add after launch
└── Environment variables: RESEND_API_KEY, CONTACT_EMAIL
```

### Environment Variables

Create `.env.local` (never commit to git):

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hello@greattastemaker.com
NEXT_PUBLIC_WA_NUMBER=62XXXXXXXXXX
```

---

## 3. Design System

### Design Principle

**GreatTastemaker should look like a premium consulting practice with editorial-quality thinking, led by someone specific.**

Three guiding words: **Editorial. Warm. Precise.**

- **Editorial:** Typography-forward. Words are the hero. Space lets them breathe. Reads like a beautifully typeset essay, not a SaaS dashboard.
- **Warm:** Not cold, not corporate, not tech. A human at the center. Feels like sitting across from someone, not browsing a product page.
- **Precise:** Clean grid, generous spacing, confident restraint. No decoration for decoration's sake.

### Color Palette

Implement these as CSS custom properties in `app/globals.css` AND as Tailwind theme extensions in `tailwind.config.ts`:

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ── Base Backgrounds ── */
    --bg-primary: #FAFAF7;        /* Warm off-white — the reading surface */
    --bg-secondary: #F2F0EB;      /* Slightly warmer — section differentiation */
    --bg-dark: #1A1A18;           /* Warm near-black — heroes, CTAs */
    --bg-dark-secondary: #2A2A27; /* Dark surface — cards on dark backgrounds */

    /* ── Text ── */
    --text-primary: #1A1A18;      /* Near-black on light backgrounds */
    --text-secondary: #6B6B63;    /* Muted text, labels, secondary info */
    --text-tertiary: #9B9B93;     /* Subtle text, placeholders */
    --text-on-dark: #FAFAF7;      /* Light text on dark backgrounds */
    --text-on-dark-secondary: #B0AFA8; /* Muted text on dark backgrounds */

    /* ── Accent ── */
    --accent: #C8A24E;            /* Warm amber/gold — used sparingly */
    --accent-hover: #B8923E;      /* Darker amber for hover states */
    --accent-subtle: rgba(200, 162, 78, 0.1);  /* 10% — subtle accent backgrounds */
    --accent-glow: rgba(200, 162, 78, 0.2);    /* 20% — for soft focus glows */

    /* ── Borders ── */
    --border-light: #E5E3DC;      /* Subtle borders on light backgrounds */
    --border-dark: #3A3A37;       /* Borders on dark backgrounds */

    /* ── Functional ── */
    --success: #4A7C59;           /* Muted green — form success */
    --error: #B85450;             /* Muted red — form errors */

    /* ── Spacing (referenced in Tailwind config) ── */
    --space-xs: 0.5rem;           /* 8px */
    --space-sm: 1rem;             /* 16px */
    --space-md: 1.5rem;           /* 24px */
    --space-lg: 2.5rem;           /* 40px */
    --space-xl: 4rem;             /* 64px */
    --space-2xl: 6rem;            /* 96px */
    --space-3xl: 8rem;            /* 128px */
    --space-hero: 10rem;          /* 160px */

    /* ── Typography Scale ── */
    --text-hero: clamp(2.5rem, 5vw, 4rem);
    --text-h1: clamp(2rem, 4vw, 3rem);
    --text-h2: clamp(1.5rem, 3vw, 2.25rem);
    --text-h3: clamp(1.25rem, 2vw, 1.5rem);
    --text-body-lg: 1.125rem;
    --text-body: 1rem;
    --text-body-sm: 0.875rem;
    --text-caption: 0.75rem;
  }
}
```

**Tailwind config extension (`tailwind.config.ts`):**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          dark: 'var(--bg-dark)',
          'dark-secondary': 'var(--bg-dark-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          'on-dark': 'var(--text-on-dark)',
          'on-dark-secondary': 'var(--text-on-dark-secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          subtle: 'var(--accent-subtle)',
          glow: 'var(--accent-glow)',
        },
        border: {
          light: 'var(--border-light)',
          dark: 'var(--border-dark)',
        },
        success: 'var(--success)',
        error: 'var(--error)',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        'content-full': '1280px',
        'content-cards': '1080px',
        'content-text': '680px',
        'content-form': '560px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
```

### Color Usage Rules

| Element | Color | Notes |
|---|---|---|
| Page backgrounds | `--bg-primary` | Warm off-white. NEVER use `#FFFFFF` or `white`. |
| Section alternation | `--bg-primary` ↔ `--bg-secondary` | Gentle rhythm between sections |
| Hero sections | `--bg-dark` | Dark creates gravity for headlines |
| CTA sections | `--bg-dark` | Every page ends with dark CTA block |
| Body text | `--text-primary` | Warm near-black. NEVER use `#000000`. |
| Accent (amber) | `--accent` | **ONLY:** CTA buttons, section labels, focus states, key highlights. Never decorative, never backgrounds. |
| Headlines on dark | `--text-on-dark` | Warm off-white on warm near-black |

### Dark/Light Section Strategy

Predominantly light with strategic dark moments. Pattern: Dark for entry (hero) and exit (CTA). Light for all reading sections.

| Page | Dark Sections | Light Sections |
|---|---|---|
| Homepage | S1 (Hero), S5 (Founder), S6 (CTA) | S2 (Problem), S3 (Process), S4 (Proof) |
| /how-it-works | Hero, CTA | All process/pricing content |
| /about | Hero, CTA | Story, Insight, Method |
| /start | None | Entire page (form needs trust/openness) |

### Typography System

**Headlines — Fraunces (serif):**
```css
font-family: var(--font-fraunces), serif;
font-weight: 600;
line-height: 1.15;
letter-spacing: -0.02em;
color: var(--text-primary); /* or var(--text-on-dark) on dark bg */
```

**Body — Inter (sans-serif):**
```css
font-family: var(--font-inter), sans-serif;
font-weight: 400;
line-height: 1.7;
color: var(--text-primary);
```

**Section Labels (amber uppercase markers):**
```css
font-family: var(--font-inter), sans-serif;
font-size: 0.75rem;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.1em;
color: var(--accent);
margin-bottom: 1rem;
```

### Spacing System

| Section Type | Desktop Padding (top/bottom) | Mobile Padding |
|---|---|---|
| Hero sections | `10rem` (160px) | `6rem` (96px) — ×0.6 |
| Content sections | `6rem` (96px) | `3.9rem` (~62px) — ×0.65 |
| CTA sections | `4rem` (64px) | `2.8rem` (~45px) — ×0.7 |
| Between elements | `2.5rem` (40px) | `1.875rem` (30px) — ×0.75 |

### Content Width Hierarchy

| Content Type | Max Width | Usage |
|---|---|---|
| Full-width sections | `1280px` | Heroes, CTAs, full-bleed sections |
| Cards / comparisons | `1080px` | Tier cards, asset grids, pricing table |
| Long-form text | `680px` | /about narrative, tier detail text |
| Forms | `560px` | /start intake form |

### Grid System

```css
/* Desktop (≥1024px) */  12-column, max-width 1280px, gutter 24px, centered
/* Tablet (768–1023px) */ 8-column, margin 40px
/* Mobile (<768px) */     4-column, margin 20px
```

### Component Specifications

**Primary CTA Button:**
```css
background: var(--accent);
color: var(--bg-dark);               /* Dark text on amber */
font-family: var(--font-inter), sans-serif;
font-weight: 600;
font-size: 1rem;
padding: 14px 32px;
border-radius: 6px;                  /* NOT pill-shaped */
cursor: pointer;
transition: all 0.2s ease;
/* Hover: */ background: var(--accent-hover); transform: translateY(-1px);
/* Mobile: */ width: 100%; /* Full-width on mobile */
```

**Secondary/Ghost Button:**
```css
background: transparent;
border: 1px solid var(--border-light);
color: var(--text-primary);
border-radius: 6px;
padding: 14px 32px;
transition: all 0.2s ease;
/* Hover: */ background: var(--bg-secondary);
/* On dark bg: */ border-color: var(--border-dark); color: var(--text-on-dark);
```

**Cards (light bg):**
```css
background: var(--bg-primary);
border: 1px solid var(--border-light);
border-radius: 8px;
padding: 2.5rem; /* var(--space-lg) */
/* No drop shadows. Borders only. */
/* Hover (interactive cards only): */ border-color: var(--accent); transition: 0.2s;
```

**Cards (dark bg):**
```css
background: var(--bg-dark-secondary);
border: 1px solid var(--border-dark);
border-radius: 8px;
padding: 2.5rem;
```

**Form Elements:**
```css
background: var(--bg-primary);
border: 1px solid var(--border-light);
border-radius: 6px;
padding: 14px 16px;
font-family: var(--font-inter), sans-serif;
font-size: 1rem;
color: var(--text-primary);
/* Focus: */ border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-subtle);
/* Placeholder: */ color: var(--text-tertiary);
/* Error: */ border-color: var(--error);
```

### Texture

**Paper grain overlay:** Subtle noise texture (200×200px seamless tile) applied to `--bg-primary` and `--bg-secondary` sections at 2-4% opacity with `mix-blend-mode: multiply`. Barely visible — felt more than seen.

**Implementation:** Create a `PaperGrain` component that renders as an absolutely-positioned overlay on section containers.

**Strictly NO:** grid patterns, dot patterns, gradient glows, gradient animations, mesh gradients.

### Icons

Lucide icon set. Line style, 1.5px stroke. Color: `--text-primary` (never colored). Used sparingly — only where icons aid comprehension.

### Photography

- **One photo needed:** Panji for /about Section 2 (Origin Story)
- Warm natural light, confident/approachable expression, smart-casual wardrobe
- Slightly warm color grading matching site palette
- **Placeholder until photo provided:** Styled block with warm neutral background + initials "PF" in Fraunces
- **No stock photography anywhere on the site**

---

## 4. Site Architecture

### Pages (All English URLs)

```
/ (Home)             — Main landing, complete story arc
/how-it-works        — Process detail, tier breakdown, pricing
/about               — Founder story, philosophy, trust-building
/start               — Intake form, conversion endpoint
```

**IMPORTANT:** Previous plan used Bahasa URLs (`/cara-kerja`, `/tentang`, `/mulai`). These are now **all English**. This affects file paths in `app/` directory — see [File & Folder Structure](#11-file--folder-structure).

### Navigation

**Desktop (≥1024px):**
Fixed top navbar. Transparent on hero → solid `--bg-primary` at 90% opacity with `backdrop-blur(12px)` on scroll (after 50px scroll).

```
[GT Logo]     Home   How It Works   About     [Get Started →]
```

- Logo: "GreatTastemaker" wordmark in Inter (medium weight, `--text-primary`). No icon/symbol.
- Nav links: `--text-secondary`, hover: `--text-primary`. Active page: `--text-primary` + subtle 2px underline offset.
- CTA button: Primary amber style ("Get Started →"), always visible in nav. Links to `/start`.
- Transition: `background-color 0.3s, backdrop-filter 0.3s` on scroll.

**Mobile (<1024px):**
Logo left, hamburger icon right. CTA button **also visible** in mobile header (compact size) — do NOT hide CTA in hamburger menu.

```
[GT]   [Get Started →]   [☰]
```

Hamburger opens full-screen overlay (Sheet component, slides from right):

```
Home
How It Works
About

[Get Started →]  (full-width amber button at bottom)
```

**Alternative mobile pattern (recommended):** Sticky bottom bar on mobile with "Get Started →" button. Always visible regardless of scroll position. Height: 64px, padding: 12px 20px.

### Footer

```
[GreatTastemaker]

Navigation              Services                Contact
Home                    GTM Foundation           hello@greattastemaker.com
How It Works            GTM Sprint               WhatsApp →
About                   GTM Engine
Start

© 2026 GreatTastemaker. All rights reserved.
```

Footer background: `--bg-dark`. Text: `--text-on-dark-secondary`. Links hover: `--text-on-dark`.

---

## 5. Page Specifications + Copy

### Important Notes for IDE

1. **All copy below is locked and final.** Implement exactly as written. Do not paraphrase.
2. **All copy is in English.** This is intentional.
3. All CTA buttons labeled "Get your free GTM diagnostic →" link to `/start`.
4. Section labels (small uppercase amber text) are a **consistent pattern** across all pages.
5. Every section specification includes both desktop AND mobile layout.
6. **Social proof components** (testimonials, client logos) are architecturally present but content is marked as `{placeholder}`. Build the components — content will be swapped in.

---

### 5.1 Homepage (`/`)

**Narrative arc:** Hook → Pain → Solution → Proof → Trust → Action

---

#### Section 1 — Hero

**Background:** Dark (`--bg-dark`)

**Desktop layout:** Center-aligned text. Large serif headline. Two buttons side by side. Generous vertical padding (`--space-hero`).

**Mobile layout:** Same center alignment. Headline scales down via clamp. Buttons stack vertically (primary on top, full-width). Padding: `--space-hero × 0.6`.

| Element | Content |
|---|---|
| **Headline** (Fraunces, `--text-hero`) | Your product deserves a better story. |
| **Sub-headline** (Inter, `--text-body-lg`, `--text-on-dark-secondary`) | We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months. |
| **Primary CTA** | Get your free GTM diagnostic → |
| **Secondary CTA** (ghost button on dark) | See how it works ↓ (smooth scroll to Section 3) |

**Animation:** Headline fade-up (0.6s), sub-headline fade-up (0.2s delay), CTAs fade-up (0.4s delay).

---

#### Section 2 — The Real Problem

**Background:** Light (`--bg-primary`)

**Desktop layout:** Section label + headline centered. 3 pain cards in 3-column grid below. Each card: border, padding, title (Inter semi-bold) + 1-2 line copy (Inter regular). Closing line centered below cards in italic.

**Mobile layout:** Cards stack vertically, full-width. Reduced card padding.

| Element | Content |
|---|---|
| **Section label** | The real problem |
| **Headline** | It's not your product. It's how the market hears about it. |

**Card 1 — The best-kept secret:**
> You're the expert in the room. But outside that room, nobody's heard the story.

**Card 2 — The agency trap:**
> You hired an agency. They sent a junior writer who Googled your industry — and it shows.

**Card 3 — Build vs. buy:**
> You can't afford to wait 6 months to build a team. You can't afford another agency that doesn't get it.

**Closing line** (italic, Inter, `--text-secondary`, centered):
> You don't need more content. You need someone who gets what you do — and knows how to make the market care.

**Animation:** Cards stagger-in on scroll (0.1s delay between).

---

#### Section 3 — How We Do It

**Background:** Light (`--bg-secondary`)

**Desktop layout:** Section label + headline centered. 3 steps in vertical timeline format: numbered circles (1, 2, 3) connected by a thin vertical line (`--border-light`). Each step: number circle left, content right. Differentiator callout in italic below timeline. Two CTAs side by side.

**Mobile layout:** Same vertical timeline, simplified. Number circles smaller. Full-width step content. CTAs stack vertically.

| Element | Content |
|---|---|
| **Section label** | The process |
| **Headline** | One conversation. A complete go-to-market. |

**Step 1 — Foundation**
Label: "Start here — it's free."
> We analyze your current go-to-market, show you where the gaps are, and map what's possible. No commitment, no pitch deck — just clarity.

**Step 2 — Sprint**
Label: "Ready to build? That's the Sprint."
> One deep-dive session with you. Four days later: a complete go-to-market suite — positioning, messaging, content, sales assets — all built from your real expertise.

**Step 3 — Engine**
Label: "Want it to keep running? That's the Engine."
> Monthly GTM execution. We keep producing, testing, and sharpening — so your go-to-market gets stronger every cycle, not stale.

**Differentiator punch** (italic callout, larger text, centered):
> No six-month onboarding. No revolving door of junior writers. You work directly with the strategist who builds your entire system.

| CTA | Target |
|---|---|
| Get your free GTM diagnostic → | /start |
| See the full process → (ghost button) | /how-it-works |

---

#### Section 4 — What a Sprint Produces

**Background:** Light (`--bg-primary`)

**IMPORTANT: This section is framed as a capability showcase, NOT a case study.** The content is hypothetical — it demonstrates what the Sprint can produce. Architecture supports future swap to real case study from Daya 5 Group when available.

**Desktop layout:** Scenario text centered at top (max-width `680px`). 6 asset cards in 3×2 grid. Each card styled as a document preview: subtle border, clean typography, slightly elevated hover state. Closing line below.

**Mobile layout:** Asset cards in 2-column grid (2×3). Cards: reduced padding, smaller title text.

| Element | Content |
|---|---|
| **Section label** | What a Sprint produces |
| **Headline** | Here's what your go-to-market could look like. |

**Scenario framing** (Inter, `--text-secondary`):
> Every Sprint is different — but here's a typical output for a B2B consulting firm looking to break past referral-only growth.

**Asset Grid (6 cards):**

| # | Asset Title | Description |
|---|---|---|
| 1 | Positioning document | Why they're different — in language their market actually understands. |
| 2 | Thought leadership article | A long-form piece that positions the founder as the authority, not just a practitioner. |
| 3 | LinkedIn content series | Five posts engineered for the founder's voice — ready to publish. |
| 4 | Sales one-pager | One page that answers "why us" before the prospect even asks. |
| 5 | Case study framework | A structure that turns past wins into future-facing proof. |
| 6 | Messaging playbook | The core narrative — so every touchpoint sounds like it came from the same brain. |

**Card styling:** Each card should feel like a document preview — consider: thin top border in `--accent`, or subtle document icon from Lucide (FileText). Title in Inter semi-bold, description in Inter regular `--text-secondary`.

**Closing line** (italic, centered):
> All from one conversation. All in four days.

**Component architecture note:** Build this as `<ProofSection>` with a `variant` prop: `variant="hypothetical"` (current) and `variant="case-study"` (future). The future variant accepts `clientName`, `situation`, `outcomes`, `quote` props.

---

#### Section 5 — Person

**Background:** Dark (`--bg-dark`)

**Desktop layout:** Asymmetric — founder photo placeholder (40% left) + text (55% right, offset). Photo: warm neutral placeholder block until real photo provided.

**Mobile layout:** Photo placeholder full-width at top (16:9 aspect ratio). Text below, full-width.

| Element | Content |
|---|---|
| **Section label** (amber on dark) | Who's behind this |
| **Headline** (`--text-on-dark`) | Built by a strategist, not a template. |

**Copy** (`--text-on-dark-secondary`):

GreatTastemaker is led by Panji Firmansyah — a marketing strategist who's built businesses from zero, scaled operations to 47 people, and driven Rp 1B+ in client revenue through systems, not guesswork.

Before building go-to-market systems for B2B companies, he spent years in the trenches — hiring teams, running P&Ls, and learning what actually makes a market pay attention. That operator background is why GT's approach starts with extraction, not assumptions.

When you work with GreatTastemaker, there's no handoff to a junior account manager. You work directly with the person who designed the strategy — from the first conversation to the final deployment.

**Link:** More about the approach → (`/about`)

---

#### Section 5.5 — Social Proof (NEW)

**Background:** Dark (`--bg-dark`) — continuation of Section 5, or light (`--bg-secondary`) as separate section.

**Purpose:** Client logos and/or testimonials. Build the component architecture now, populate with real content when available.

**Desktop layout:** 
- **Client logo bar:** "Previously built marketing systems for:" followed by 3-6 client logos in a horizontal row, grayscale, hover: full color. Logos: max-height 40px.
- **Testimonial cards (optional):** 1-3 short quotes with name + company. Simple card layout.

**Mobile layout:** Logo bar wraps to 2 rows if needed. Testimonials stack vertically.

**Component:** `<ClientLogoBar>` and `<TestimonialCard>`. Both accept content arrays. Render nothing if array is empty (graceful degradation — no empty sections).

**Placeholder content:**
```typescript
// lib/content.ts
export const socialProof = {
  logos: [
    // { name: "Client Name", src: "/images/logos/client.svg", alt: "Client Name" }
    // Add logos here when available
  ],
  testimonials: [
    // { quote: "...", name: "Name", company: "Company", role: "Role" }
    // Add testimonials here when available
  ],
  sectionVisible: false, // Toggle to true when content is added
}
```

---

#### Section 6 — CTA

**Background:** Dark (`--bg-dark`)

**Desktop layout:** Full-width centered text. One headline, one sub, one button. Generous padding.

**Mobile layout:** Same, buttons full-width.

| Element | Content |
|---|---|
| **Headline** | Stop being your market's best-kept secret. |
| **Sub** | Get a free GTM diagnostic — and see what your go-to-market should actually look like. |
| **CTA** | Get your free GTM diagnostic → |

---

### 5.2 /how-it-works Page

**Purpose:** Process detail, tier breakdown, pricing transparency.
**Reader state:** "Show me the details" — already interested, wants substance.

**Design principle for this page:** CLARITY WITHOUT OVERWHELM. The goal is transparency — nothing hidden. But structure the information so visitors can choose their depth. Show enough to create confidence, let them dig deeper if they want.

---

#### Section 1 — Hero

**Background:** Dark (`--bg-dark`)

**Desktop & Mobile layout:** Center-aligned, short text. Same hero pattern as homepage but more direct.

| Element | Content |
|---|---|
| **Headline** | Here's exactly how it works. |
| **Sub-headline** | Three tiers. One clear path. You start with a free diagnostic — and only go further if the results speak for themselves. |

---

#### Section 2 — Tier Overview (Comparison Cards)

**Background:** Light (`--bg-primary`)

**This is the most important section on this page.** Most visitors will make their decision from these cards + the pricing summary. Make them scannable, comparative, and clear.

**Desktop layout:** 3 cards side by side. Sprint card visually emphasized (amber top border `3px solid var(--accent)` or subtle elevation). Each card links to its detail section below via anchor smooth-scroll.

**Mobile layout:** **Horizontal scroll (swipe cards)** with snap points. This preserves the comparison feel — users can swipe between Foundation, Sprint, Engine. Alternative: vertical stack if horizontal scroll is too complex for MVP.

**Section intro** (centered, `max-width: 680px`):
> Every engagement starts with Foundation. No exceptions, no shortcuts — because we don't build on assumptions.

**Card 1 — Foundation:**

| Field | Value |
|---|---|
| Label | Start here |
| Name | GTM Foundation |
| Subtitle | Strategic 360 Diagnostic |
| Price | Free |
| Timeline | 1–2 days |
| Value line | See where your go-to-market stands — and what's possible. |
| CTA | Learn more ↓ (anchor to `#foundation`) |

**Card 2 — Sprint (emphasized):**

| Field | Value |
|---|---|
| Label | Most popular |
| Name | GTM Sprint |
| Subtitle | Full GTM Cycle |
| Price | Rp 15,000,000 |
| Timeline | 4 days |
| Value line | One conversation. 30 strategic assets. Complete go-to-market. |
| CTA | Learn more ↓ (anchor to `#sprint`) |

**Card 3 — Engine:**

| Field | Value |
|---|---|
| Label | For ongoing growth |
| Name | GTM Engine |
| Subtitle | Monthly Retainer |
| Price | Rp 25,000,000/month |
| Timeline | Ongoing (min. 3 months) |
| Value line | Your GTM keeps running — and gets sharper every cycle. |
| CTA | Learn more ↓ (anchor to `#engine`) |

---

#### Section 3 — Foundation Detail (`#foundation`)

**Background:** Light (`--bg-secondary`)

**Desktop layout:** Anchor ID `foundation`. `max-width: 680px` for text. Clean heading + process steps + output list.

**Mobile layout:** Same single-column flow, full-width padding.

**Headline:** Foundation: Your starting point.

**Intro:**
> We don't start with a pitch. We start with a diagnostic.
>
> GTM Foundation is a Strategic 360 Diagnostic — a comprehensive analysis of your current go-to-market position. It's the kind of deliverable most firms charge Rp 10–15 million for. We do it for free — because we believe the results speak for themselves.

**What happens:**

**Step 1 — You share your context.**
Fill out a guided onboarding form. Upload whatever you have — a pitch deck, your website, past proposals. The more you share, the sharper the diagnostic.

**Step 2 — We analyze.**
AI-powered market research + human strategic review. We map your competitive landscape, define your ideal customer profile, and identify where your positioning has gaps.

**Step 3 — We present.**
A live pitching session where we walk you through the findings — including your Opportunity Score, a proprietary metric that shows exactly how much untapped GTM potential your business has.

**What you get — The Strategic 360 Diagnostic includes:**
- Market landscape analysis
- Competitive benchmarking
- ICP analysis
- Positioning framework
- Opportunity Score
- Initial brand voice capture

**What it costs:**
> Free. You invest your context. We invest the analysis.

**CTA:** Get your free GTM diagnostic →

---

#### Section 4 — Sprint Detail (`#sprint`)

**Background:** Light (`--bg-primary`)

**This section is content-rich but must remain scannable.** Use the progressive disclosure principle: headline + intro always visible, process as visual timeline, asset summary simplified.

**Desktop layout:** Anchor ID `sprint`. `max-width: 680px` for text content. Day-by-day process as compact visual timeline (not paragraph blocks). Asset summary as high-level overview, not granular credit matrix.

**Headline:** Sprint: Your go-to-market, built in four days.

**Intro:**
> The Sprint is where it gets real. One deep-dive extraction session with you — and four days later, a complete go-to-market suite built from your actual expertise, not templates.
>
> This isn't a content package. It's a strategic GTM cycle — positioning, messaging, thought leadership, and sales enablement, all connected and all built from a single conversation.

**How the Sprint works** (implement as compact visual timeline):

| Day | What Happens |
|---|---|
| Day 0 | **Pre-Sprint prep** — We review your Foundation data and prepare customized extraction questions. |
| Day 1 | **Extraction Session (60–90 min)** — A live, recorded storytelling-based session where we surface insights you haven't articulated yet. You talk to the strategist who builds everything. |
| Days 1–2 | **Processing** — Transcript analysis, Extraction Summary, Brand Voice Database, content briefs for every asset. |
| Days 2–4 | **Production** — AI-powered content production with human taste review on every single asset. |
| Day 4 | **Delivery** — Live presentation of every asset + deployment recommendations. |
| Days 4–7 | **Revision window** — One round of refinement within 3 business days. |

**What you get: 30 strategic assets**

> Every Sprint produces 30 strategic assets across your full buyer journey — from awareness to sales enablement. The exact mix is tailored during your Foundation diagnostic, because a consulting firm needs different formats than an enterprise SaaS platform. What stays constant: every stage of the funnel is covered, every asset has a job.

**Additional Sprint deliverables:**
- Extraction Summary Report
- Brand Voice Database update
- Deployment recommendations — when and where to publish each asset

**Sprint pricing:**
> **Rp 15,000,000** (fixed per Sprint)
>
> That's ~Rp 500,000 per strategic asset. A single article from a traditional agency costs Rp 3,500,000+ and takes 2–4 weeks. We deliver 30 assets in 4 days.

**Optional add-on: Activation Workshop (Rp 3,000,000)**
> A hands-on session where we help your team deploy every asset — so nothing sits in a folder collecting dust.

**Prerequisite:** Foundation must be completed first. No exceptions.

**CTA:** Get your free GTM diagnostic →

---

#### Section 5 — Engine Detail (`#engine`)

**Background:** Light (`--bg-secondary`)

**Headline:** Engine: Your GTM keeps running.

**Intro:**
> The Engine is what happens when you decide the Sprint wasn't a one-time thing.
>
> Every month: two full Sprint cycles, 60+ strategic assets, dedicated extraction sessions, and a monthly strategic review. The longer we work together, the sharper the output — because your Brand Voice Database keeps compounding.

**Monthly output** (implement as clean data cards or simple table):

| What you get | Per month |
|---|---|
| Full GTM cycles | 2 |
| Strategic assets | 60+ |
| Extraction sessions | 2 |
| Strategic review | 1× (60 min) |
| Brand Voice Database updates | Ongoing |
| Leading Indicator Dashboard | Real-time access |

**Engine-exclusive benefits:**
- **Monthly Strategic Review (60 min)** — Not a status call. A working session.
- **Leading Indicator Dashboard** — Real-time visibility into GTM performance.
- **Compounding Brand Voice Database** — Gets sharper every month.
- **Quarterly Strategy Session (90–120 min)** — Extended strategic alignment.
- **Credit Rollover** — Unused credits roll over for up to 1 month.
- **Priority Scheduling** — Engine clients get priority.

**Value comparison:**
> Two standalone Sprints = Rp 30,000,000/month. Engine = Rp 25,000,000/month — plus strategic review, dashboard, quarterly sessions, and compounding brand intelligence. Save 17%+ and get significantly more value.
>
> Compared to in-house: Marketing Manager + Content Writer + Designer + Tools = Rp 38–67M/month. GT Engine: Rp 25M/month, all-in.

**Prerequisite:** At least one Sprint must be completed first.

**CTA:** Get your free GTM diagnostic →

---

#### Section 6 — Add-Ons

**Background:** Light (`--bg-primary`)

**Desktop layout:** 2 compact cards side by side.

**Mobile layout:** Cards stack vertically.

**Section intro:** Optional extras that make the core tiers hit harder.

**Card 1 — Activation Workshop:**
- Price: Rp 3,000,000 per session
- For: Sprint or Engine clients
- What: Hands-on deployment workshop — LinkedIn publishing, WhatsApp sales enablement, content calendar setup, team Q&A.
- Why: Assets that don't get deployed don't generate pipeline.

**Card 2 — Landing Page:**
- Price: Rp 7,000,000
- For: Sprint or Engine clients
- What: Custom-coded landing page. Responsive, analytics setup, one round of revision.
- Why: When your GTM drives traffic somewhere, that somewhere needs to convert.

---

#### Section 7 — Pricing Summary

**Background:** Light (`--bg-secondary`)

**This is the executive decision section.** Keep it scannable.

**Desktop layout:** Clean comparison table. `max-width: 1080px`.

**Mobile layout:** **Switch to stacked cards per tier** — one card per tier showing all details. Tables are nearly unreadable on mobile. Each card shows the tier name, price, and 3-4 key attributes.

**Headline:** Clear pricing. No surprises.
**Sub:** Every engagement starts with Foundation. You see the quality before you invest.

**Comparison (5 rows only — the ones that help DECIDE):**

| | Foundation | Sprint | Engine |
|---|---|---|---|
| Price | Free | Rp 15,000,000 | Rp 25,000,000/month |
| Timeline | 1–2 days | 4 days | Ongoing |
| What you get | Strategic 360 Diagnostic + Opportunity Score | 30 strategic assets across full funnel | 60+ assets/month + strategy + dashboard |
| Your time investment | Short form | 60–90 min session | 2× 60–90 min/month |
| Prerequisite | — | Foundation completed | Min. 1 Sprint completed |

**Add-Ons:**

| Add-On | Price |
|---|---|
| Activation Workshop | Rp 3,000,000/session |
| Custom Landing Page | Rp 7,000,000 |

**Value anchor:**
> All prices in Indonesian Rupiah. Foundation is always free. Sprint and Engine pricing is fixed — no hidden fees, no scope creep charges.

**Testimonial slot** (for future use):
Build a `<TestimonialCard>` placeholder near the pricing. When a B2B client testimonial is available, it gets placed here — testimonials near pricing significantly reduce price objections.

---

#### Section 8 — CTA

**Background:** Dark (`--bg-dark`)

| Element | Content |
|---|---|
| **Headline** | Start with the diagnostic. Decide from there. |
| **Sub** | It's free, it's thorough, and it'll show you exactly where your go-to-market stands. No commitment, no pitch — just clarity. |
| **CTA** | Get your free GTM diagnostic → |

---

### 5.3 /about Page

**Purpose:** Trust-deepening through personal founder story.
**Voice:** First-person "I" — the ONLY page where Panji speaks directly.
**Reader state:** Already interested, deciding if they trust this person.

---

#### Section 1 — Hero

**Background:** Dark (`--bg-dark`)

**Layout (both):** Center-aligned text. No photo here. Let the words breathe. No CTA in hero — this page is a narrative.

| Element | Content |
|---|---|
| **Headline** | I didn't start in marketing. I started in the messy middle of actually running a business. |
| **Sub-text** | That's why GreatTastemaker doesn't work like an agency. It works like a system built by someone who's been on your side of the table. |

---

#### Section 2 — The Origin

**Background:** Light (`--bg-primary`)

**Desktop layout:** Asymmetric — Photo of Panji (40% left, `position: sticky; top: 100px`) + long-form text (55% right, scrolls independently). Photo uses `next/image` with warm color filter.

**Mobile layout:** Photo full-width at top (aspect-ratio: 4/3 crop — **portrait orientation**, not landscape, so text starts sooner). Photo NOT sticky on mobile. Text below, full-width.

**Section label:** The backstory

**Copy (implement as flowing paragraphs — NEVER bullet points):**

I dropped out of BINUS in my fourth semester — with a perfect GPA.

That part surprises people. I wasn't struggling. I was carrying a 4.0, competing in business plan and business case competitions, and doing well by every metric the system measured. I wasn't running away from academia. But then COVID hit, everything moved online, and the gap became impossible to ignore: the university couldn't deliver the same experience remotely. The lectures that used to push me were now just screens.

Meanwhile, outside of class, I was learning faster than I'd ever learned inside it.

So I made the call. Not out of frustration — out of honesty. The best education I was going to get wasn't going to come from finishing the degree. It was going to come from building something real.

That something became Wisdom Garut — an operation I built from zero. No team, no playbook, no safety net. Within four months, we'd grown to 47 people and were doing over Rp 700 million a month in revenue. By month six, the system was stable and performing at peak.

But here's the part that changed how I think about everything since:

Wisdom Garut was my first time seriously selling a product to a real market. And the product went viral. It was received far better than I expected. The thing is — I knew the product was good, but I also knew it wasn't the best. In Jakarta, you could find better versions at higher price points. Objectively, there were tastier options out there.

It didn't matter. It worked — because the marketing met the right customers with the right use case at the right moment.

That was the first time I understood, really understood: **knowing your customer is more important than having the best product.** You can build something incredible — but if you don't understand who it's actually for, and why *they* would care, none of it matters.

That lesson never left me.

From there, I moved into scaling retail brands — taking clients from Rp 100 million to over Rp 1 billion a month through performance marketing. Meta ads, content testing, creative iteration. Hundreds of campaigns. Thousands of data points. The systems thinking that comes from needing every rupiah of ad spend to justify itself.

And the same pattern kept showing up — just in different shapes.

**Photo placeholder:** Until real photo is provided, render a styled block: `--bg-secondary` background, aspect-ratio 3:4 (portrait), centered "PF" monogram in Fraunces at large size, subtle `--border-light` border.

---

#### Section 3 — The Insight

**Background:** Light (`--bg-secondary`)

**Desktop & Mobile layout:** Text section (`max-width: 680px`) with pull-quote treatment.

**Section label:** The insight

**Copy:**

Working with dozens of business owners, I kept seeing the same thing I'd learned at Wisdom Garut — but in reverse.

Back then, my product wasn't the best, but the marketing worked because I understood the customer. Now, I was meeting founders with *incredible* products — but their marketing didn't work, because nobody had taken the time to understand how the customer actually thinks about what they sell.

The best ones — the founders who really knew their product, who could explain their value proposition in a way that made you *want* to buy — they were terrible at turning that into marketing content. Not because they lacked intelligence. Because they lacked time. And because every agency they'd hired sent a twenty-four-year-old copywriter who spent forty-five minutes Googling their industry before writing something generic.

The knowledge was there. The expertise was there. The conviction was there.

But nobody had figured out how to **extract** it properly — and turn it into something the market would actually pay attention to.

That's the gap. Not a content gap. Not a strategy gap. An *extraction* gap.

The most effective marketing doesn't come from marketers who guess. It comes from someone who sits down with the person who built the product — and knows how to pull the real story out.

**Pull quote** (Fraunces serif, larger size `--text-h2`, subtle amber left border `3px solid var(--accent)`, `padding-left: 2rem`):
> "Knowing your customer is more important than having the best product."

---

#### Section 4 — The Method

**Background:** Light (`--bg-primary`)

**Layout:** `max-width: 680px`. Text-led with 3 conviction blocks. Each block: bold first line (Inter semi-bold), flowing paragraphs (Inter regular).

**Section label:** How that became GreatTastemaker

**Copy:**

GreatTastemaker was built on three convictions:

**First — the person who talks to you should be the person who builds the strategy.** Not a salesperson. Not an account manager. Not someone who's going to "brief the team" after the call and hope the nuance survives. When you talk to me, that conversation becomes the raw material for everything we produce. Nothing gets lost in translation because there's no translation layer.

**Second — speed is a strategic advantage, not a shortcut.** I'd spent years watching businesses lose momentum because their marketing couldn't keep up with their ambition. A positioning document that takes six weeks to deliver is a positioning document that's already outdated by the time it arrives. GreatTastemaker delivers a full go-to-market suite in four days — not by cutting corners, but by building systems that make speed possible without sacrificing depth.

Part of that system is AI. I'm not going to pretend otherwise. But here's what matters: AI handles the processing, the structuring, the adaptation across formats. The strategic thinking — the extraction, the positioning, the editorial judgment about what to say and how to say it — that's human. That's me.

I've built 100,000 followers in three months through organic content. I know what makes people stop scrolling. But more importantly, I know the difference between content that gets attention and content that builds a business. GreatTastemaker is built for the second kind.

**Third — if it doesn't work for the business, nothing else matters.** I've run P&Ls. I've managed ad budgets where every rupiah had to earn its place. That operator mindset is embedded in everything GT produces. We don't make "content." We make go-to-market assets — each one designed for a specific stage in your sales funnel, with a specific job to do.

That's why we start every engagement with a diagnostic, not a pitch. I'd rather show you where your go-to-market actually stands — for free — and let the clarity speak for itself.

---

#### Section 5 — CTA

**Background:** Dark (`--bg-dark`)

| Element | Content |
|---|---|
| **Headline** | Now you know the person. See what the system can do for you. |
| **Sub** | The GTM diagnostic is free, takes a few minutes of your time, and gives you a clear picture of where your go-to-market stands. No commitment, no pitch — just clarity from someone who's been in your shoes. |
| **CTA** | Get your free GTM diagnostic → |

---

### 5.4 /start Page

**Purpose:** Conversion endpoint. Every CTA on the site points here.
**Voice:** "We" — warm, reassuring, concise.
**Reader state:** Already sold, just needs to feel good about acting.
**Scope:** MVP simple form. Full Foundation diagnostic intake is Phase 2.

---

#### Section 1 — Hero + Form

**Background:** Light (`--bg-primary`) — forms need trust and openness. No dark hero.

**Desktop layout:** Centered headline + sub-text. Form card below, `max-width: 560px`, centered. Form should be visible without scrolling.

**Mobile layout:** Shorter headline treatment (sub-text can wrap). Form full-width with `20px` side margin. **Form should be the primary visible element** — minimize hero text height on mobile to get form into viewport faster.

| Element | Content |
|---|---|
| **Headline** | Let's start with clarity. |
| **Sub-text** | Tell us about your business and your biggest go-to-market challenge. Takes about 3 minutes. |
| **Sub-text line 2** | No commitment. No pitch on the other end. Just a clear picture of where you are and where the opportunities are. |

---

#### Section 2 — The Form (MVP — 5 fields)

**Layout:** Clean form card. `max-width: 560px`. Generous spacing between fields (`--space-md`). Card with `--border-light` border, `border-radius: 8px`, `padding: 2.5rem`.

**Form header:** About you and your business

**Fields (MVP — simplified for low friction):**

| # | Field | Type | Required | Placeholder/Helper |
|---|---|---|---|---|
| 1 | Your name | text | Yes | — |
| 2 | Company / brand name | text | Yes | — |
| 3 | Email | email | Yes | — |
| 4 | WhatsApp number | tel | Yes | Primary contact channel |
| 5 | What's your biggest go-to-market challenge right now? | textarea | Yes | "2-3 sentences is perfect" (helper text) |

**Submit button:** Submit → (primary amber style, full-width on mobile)

**Form validation:** Use `react-hook-form` + `zod` schema. Validate on blur for each field. Show inline error messages below fields in `--error` color.

```typescript
// lib/schemas.ts
import { z } from 'zod'

export const startFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().min(1, 'Please enter your company name'),
  email: z.string().email('Please enter a valid email'),
  whatsapp: z.string().min(8, 'Please enter a valid WhatsApp number'),
  challenge: z.string().min(10, 'Tell us a bit more about your challenge'),
})

export type StartFormData = z.infer<typeof startFormSchema>
```

---

#### Section 3 — Post-Form Reassurance

**Layout:** Below the form. `max-width: 560px`, centered.

**Copy:**

> **What happens next?**
>
> Once you submit, we review your responses personally — not with an auto-reply. Within 2 business days, you'll hear back with an initial read on your go-to-market situation and a recommendation for next steps.
>
> If there's a fit, we'll suggest the right engagement tier for your situation. If there's not, we'll tell you that too — and point you in a direction that makes more sense.
>
> Either way, you walk away with clarity.

---

#### Thank You State (Post-Submit)

**Layout:** Replaces the form card after successful submission. **No page redirect.** Same container, animated swap (fade out form, fade in thank you).

**Headline:** Got it. We're on it.

**Copy:**
> Thanks for taking the time — it tells us you're serious about getting your go-to-market right, and we take that seriously too.
>
> You'll hear from us within 2 business days with an initial read on your situation. In the meantime, if you want to dig deeper into how we work:
>
> [How GreatTastemaker works →](/how-it-works)
> [The story behind the method →](/about)

---

## 6. Component Architecture

### Component Tree

```
components/
├── layout/
│   ├── Navbar.tsx              — Fixed top nav, scroll-aware bg, mobile CTA visible
│   ├── Footer.tsx              — Dark footer with nav columns
│   ├── MobileMenu.tsx          — Full-screen mobile nav overlay (Sheet)
│   ├── MobileBottomBar.tsx     — Sticky bottom CTA bar (mobile only)
│   └── PageTransition.tsx      — Framer Motion page fade wrapper
│
├── ui/                         — shadcn/ui (customized to warm theme)
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── separator.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── select.tsx
│   └── sheet.tsx
│
├── sections/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProofSection.tsx     — variant: "hypothetical" | "case-study"
│   │   ├── FounderSection.tsx
│   │   ├── SocialProofSection.tsx  — Logos + testimonials (conditional render)
│   │   └── CTASection.tsx
│   ├── how-it-works/
│   │   ├── HowItWorksHero.tsx
│   │   ├── TierOverview.tsx     — 3 comparison cards
│   │   ├── FoundationDetail.tsx
│   │   ├── SprintDetail.tsx
│   │   ├── EngineDetail.tsx
│   │   ├── AddOns.tsx
│   │   ├── PricingSummary.tsx   — Table (desktop) / Cards (mobile)
│   │   └── HowItWorksCTA.tsx
│   ├── about/
│   │   ├── AboutHero.tsx
│   │   ├── OriginStory.tsx      — Sticky photo + scrolling text
│   │   ├── InsightSection.tsx   — Pull quote treatment
│   │   ├── MethodSection.tsx    — 3 conviction blocks
│   │   └── AboutCTA.tsx
│   └── start/
│       ├── StartHero.tsx
│       ├── IntakeForm.tsx       — react-hook-form + zod
│       ├── PostFormReassurance.tsx
│       └── ThankYouState.tsx
│
├── common/
│   ├── SectionLabel.tsx        — Amber uppercase label component
│   ├── SectionHeading.tsx      — Serif headline + optional sub
│   ├── SectionWrapper.tsx      — Consistent section padding + max-width
│   ├── ScrollReveal.tsx        — Framer Motion scroll reveal wrapper
│   ├── StaggerContainer.tsx    — Stagger children animation
│   ├── PullQuote.tsx           — Serif pull-quote with amber left border
│   ├── PaperGrain.tsx          — Subtle noise overlay
│   ├── ClientLogoBar.tsx       — Row of client logos (conditional)
│   └── TestimonialCard.tsx     — Quote + name + company card
│
└── icons/
    └── Logo.tsx                — "GreatTastemaker" wordmark
```

### Key Component Specs

**SectionWrapper** — reusable wrapper for consistent section spacing:
```typescript
interface SectionWrapperProps {
  children: React.ReactNode
  bg: 'primary' | 'secondary' | 'dark'
  padding?: 'hero' | 'content' | 'cta'
  maxWidth?: 'full' | 'cards' | 'text' | 'form'
  id?: string // for anchor links
  className?: string
}
```

**SectionLabel** — the amber uppercase marker:
```typescript
interface SectionLabelProps {
  children: string
  onDark?: boolean // changes color for dark backgrounds
}
```

**ProofSection** — supports future swap:
```typescript
interface ProofSectionProps {
  variant: 'hypothetical' | 'case-study'
  // For case-study variant (future):
  caseStudy?: {
    clientName: string
    situation: string
    outcomes: string
    assets: Array<{ title: string; description: string }>
    quote?: { text: string; author: string; role: string }
  }
}
```

### Data Layer

```
lib/
├── constants.ts    — Nav items, social links, contact info
├── content.ts      — All page content as typed objects (single source)
├── schemas.ts      — Zod validation schemas
├── types.ts        — TypeScript interfaces for all content structures
├── utils.ts        — cn() helper (clsx + tailwind-merge), formatters
└── actions.ts      — Server actions (form submission)
```

**Content approach:** All content lives in typed TypeScript files for Phase 1. This makes it trivial to migrate to a CMS or split into locale files for i18n in Phase 2.

---

## 7. Form Handling & CTA Flow

### Primary CTA: "Get your free GTM diagnostic →"

Every page has at least one path to `/start`. All amber CTA buttons across the entire site link to `/start`.

### CTA Map

| Page | Section | CTA Text | Target |
|---|---|---|---|
| Homepage | S1 (Hero) | Get your free GTM diagnostic → | `/start` |
| Homepage | S1 (Hero) | See how it works ↓ | Smooth scroll to S3 |
| Homepage | S3 (Process) | Get your free GTM diagnostic → | `/start` |
| Homepage | S3 (Process) | See the full process → | `/how-it-works` |
| Homepage | S5 (Person) | More about the approach → | `/about` |
| Homepage | S6 (CTA) | Get your free GTM diagnostic → | `/start` |
| /how-it-works | S3 Foundation | Get your free GTM diagnostic → | `/start` |
| /how-it-works | S4 Sprint | Get your free GTM diagnostic → | `/start` |
| /how-it-works | S5 Engine | Get your free GTM diagnostic → | `/start` |
| /how-it-works | S8 (CTA) | Get your free GTM diagnostic → | `/start` |
| /about | S5 (CTA) | Get your free GTM diagnostic → | `/start` |
| Nav bar | Always visible | Get Started → | `/start` |

### Form Submission

**Recommended approach: Next.js Server Action → Resend email**

```
User submits form on /start
  → Client-side zod validation (react-hook-form)
  → Next.js Server Action (`lib/actions.ts`)
  → Validates again server-side with zod
  → Sends notification email via Resend API to hello@greattastemaker.com
  → Returns { success: true }
  → Client swaps form for ThankYouState (animated transition, no page redirect)
```

**Server Action implementation:**
```typescript
// lib/actions.ts
'use server'

import { Resend } from 'resend'
import { startFormSchema, type StartFormData } from './schemas'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitStartForm(data: StartFormData) {
  // Server-side validation
  const validated = startFormSchema.safeParse(data)
  if (!validated.success) {
    return { success: false, error: 'Invalid form data' }
  }

  try {
    await resend.emails.send({
      from: 'GT Form <noreply@greattastemaker.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New GTM Diagnostic Request: ${validated.data.company}`,
      html: `
        <h2>New GTM Diagnostic Request</h2>
        <p><strong>Name:</strong> ${validated.data.name}</p>
        <p><strong>Company:</strong> ${validated.data.company}</p>
        <p><strong>Email:</strong> ${validated.data.email}</p>
        <p><strong>WhatsApp:</strong> ${validated.data.whatsapp}</p>
        <p><strong>Challenge:</strong> ${validated.data.challenge}</p>
      `,
    })
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send. Please try again.' }
  }
}
```

**Fallback (simpler):** If Resend setup is complex, use Formspree (`formspree.io`) as a no-code form endpoint. Just POST to `https://formspree.io/f/{form_id}`.

### WhatsApp Link

```
https://wa.me/{NEXT_PUBLIC_WA_NUMBER}?text=Hi%20GreatTastemaker!%20I%27d%20like%20to%20learn%20more.
```

Used in footer "WhatsApp →" link.

---

## 8. Animation Specifications

### Principles

- Motion matches the copy: confident, unhurried.
- Feels like a page turning, not a UI bouncing.
- Every animation happens **ONCE** per element (no repeat on scroll).
- Respect `prefers-reduced-motion` — disable all animations for users who request it.

### ScrollReveal Component

```typescript
// Default scroll reveal wrapper
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  },
}

// Trigger: whileInView, viewport: { once: true, amount: 0.3 }
```

### Stagger (cards, list items)

```typescript
const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 }
  },
}
```

### Page Transitions

```typescript
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}
```

### Hover States

```css
/* Buttons */  transform: translateY(-1px); transition: all 0.2s ease;
/* Cards */    border-color: var(--accent); transition: border-color 0.2s ease;
/* Links */    text-decoration-color: transparent → var(--accent); transition: 0.2s;
```

### What NOT to Animate

- No parallax scrolling
- No floating/ambient animation
- No character-by-character text reveal
- No gradient animations
- No cursor effects
- No background animations
- No infinite/looping animations

### Exceptions

- Homepage hero headline: slightly more dramatic entrance (fade-up with subtle scale from 0.98 → 1)
- Section label: subtle slide-in from left (translateX: -10 → 0)

---

## 9. Mobile-First Specifications

### Global Mobile Rules

- **Touch targets:** Minimum `44×44px` (Apple HIG standard) for all interactive elements
- **Body text:** Minimum `16px` on mobile (prevents iOS auto-zoom on input focus)
- **Buttons:** Full-width on mobile unless explicitly side-by-side
- **Section padding:** See spacing system multipliers (×0.6 to ×0.75)
- **Side margins:** `20px` on mobile, `40px` on tablet
- **Nav CTA:** Always visible — never hide "Get Started" behind hamburger menu
- **Sticky bottom bar:** Consider persistent CTA bar on mobile (64px height, `position: fixed; bottom: 0`)
- **Images:** Always use `next/image` with responsive `sizes` prop
- **Scroll behavior:** `scroll-behavior: smooth` for anchor links

### Per-Page Mobile Specs

**Homepage:**

| Section | Desktop | Mobile |
|---|---|---|
| S1 Hero | Centered, buttons side-by-side | Buttons stack vertically, full-width |
| S2 Problem Cards | 3-column grid | Single column stack |
| S3 Process Timeline | Vertical timeline with connecting line | Same pattern, simplified. Smaller circles. |
| S4 Proof Cards | 3×2 grid | 2×3 grid (2 columns preserved) |
| S5 Person | Photo 40% left + text 55% right | Photo full-width top, text below |
| S6 CTA | Centered | Same, button full-width |

**/how-it-works:**

| Section | Desktop | Mobile |
|---|---|---|
| S2 Tier Cards | 3 cards side-by-side | Horizontal swipe (snap scroll) OR vertical stack |
| S3-S5 Tier Details | `max-width: 680px` text | Full-width with 20px margin |
| S7 Pricing Table | Full comparison table | **Stacked cards per tier** (NOT a table) |

**/about:**

| Section | Desktop | Mobile |
|---|---|---|
| S2 Origin | Sticky photo 40% left, scrolling text 55% right | Photo full-width top (4:3 portrait crop), text below. Photo NOT sticky. |
| S3 Pull Quote | Large serif text, amber left border | Same treatment, scaled down |

**/start:**

| Section | Desktop | Mobile |
|---|---|---|
| Hero + Form | Centered, form visible without scroll | Minimal hero text. Form is primary element. Get form into viewport ASAP. |
| Form fields | `max-width: 560px` | Full-width, 20px margin |
| Submit button | Standard width | **Full-width** |

### Breakpoint Reference

```css
/* Mobile:  < 768px  (default — design mobile-first) */
/* Tablet:  768px–1023px */
/* Desktop: ≥ 1024px */

/* Tailwind classes: */
/* sm:  640px */
/* md:  768px */
/* lg:  1024px */
/* xl:  1280px */
```

---

## 10. SEO & Performance

### Meta Tags per Page

| Page | Title | Description |
|---|---|---|
| `/` | GreatTastemaker — Your Product Deserves a Better Story | We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months. |
| `/how-it-works` | How It Works — GreatTastemaker | Three tiers. One clear path. Start with a free diagnostic — see the full process and pricing. |
| `/about` | About — GreatTastemaker | Built by a strategist who's been on your side of the table. The story behind the method. |
| `/start` | Start Your GTM Diagnostic — GreatTastemaker | Get a free, personalized read on your go-to-market situation. Takes 3 minutes. No commitment. |

### Open Graph

Each page needs `og:title`, `og:description`, `og:image`, `og:url`. Create one OG image (`public/og-image.png`, 1200×630px) featuring "GreatTastemaker" wordmark on warm dark background with amber accent.

### Technical SEO

- Semantic HTML: proper heading hierarchy (one `h1` per page, then `h2`, `h3`)
- Structured data (JSON-LD): `Organization` schema + `Service` schema
- `sitemap.xml`: auto-generated via `app/sitemap.ts`
- `robots.txt`: allow all
- `next/image` for all images (automatic WebP, lazy loading)
- `next/font` for fonts (zero layout shift)
- Canonical URLs on all pages

### Performance Targets

```
Lighthouse:
├── Performance:    95+
├── Accessibility:  95+
├── Best Practices: 95+
└── SEO:            100

Core Web Vitals:
├── LCP:  < 2.5s
├── FID:  < 100ms
├── CLS:  < 0.1
└── INP:  < 200ms
```

### Performance Strategies

- **Server Components by default** — minimal client JavaScript
- **Client Components only where needed:** Framer Motion animations, form, mobile menu, scroll-aware navbar
- **Dynamic imports** for heavy components below the fold: `const ProofSection = dynamic(() => import(...))`
- **Image optimization** via `next/image` with explicit `width`, `height`, and `sizes`
- **Font subsetting** via `next/font` (automatic)
- **Minimize third-party scripts** — no analytics scripts in MVP (add Vercel Analytics post-launch)
- **Paper grain texture:** Use CSS-based noise if possible (saves HTTP request) or tiny optimized PNG

---

## 11. File & Folder Structure

```
greattastemaker-com/
├── app/
│   ├── layout.tsx                 — Root layout (fonts, metadata, Navbar, Footer, MobileBottomBar)
│   ├── page.tsx                   — Homepage (/)
│   ├── how-it-works/
│   │   └── page.tsx               — Process + pricing page
│   ├── about/
│   │   └── page.tsx               — Founder story page
│   ├── start/
│   │   └── page.tsx               — Intake form page
│   ├── globals.css                — Tailwind base + all CSS variables (design tokens)
│   ├── not-found.tsx              — Custom 404 page (warm styling)
│   └── sitemap.ts                 — Dynamic sitemap generation
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── MobileBottomBar.tsx
│   │   └── PageTransition.tsx
│   ├── ui/                        — shadcn/ui (customized to warm theme)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── sheet.tsx
│   │   └── separator.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ProofSection.tsx
│   │   │   ├── FounderSection.tsx
│   │   │   ├── SocialProofSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── how-it-works/
│   │   │   ├── HowItWorksHero.tsx
│   │   │   ├── TierOverview.tsx
│   │   │   ├── FoundationDetail.tsx
│   │   │   ├── SprintDetail.tsx
│   │   │   ├── EngineDetail.tsx
│   │   │   ├── AddOns.tsx
│   │   │   ├── PricingSummary.tsx
│   │   │   └── HowItWorksCTA.tsx
│   │   ├── about/
│   │   │   ├── AboutHero.tsx
│   │   │   ├── OriginStory.tsx
│   │   │   ├── InsightSection.tsx
│   │   │   ├── MethodSection.tsx
│   │   │   └── AboutCTA.tsx
│   │   └── start/
│   │       ├── StartHero.tsx
│   │       ├── IntakeForm.tsx
│   │       ├── PostFormReassurance.tsx
│   │       └── ThankYouState.tsx
│   ├── common/
│   │   ├── SectionLabel.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── StaggerContainer.tsx
│   │   ├── PullQuote.tsx
│   │   ├── PaperGrain.tsx
│   │   ├── ClientLogoBar.tsx
│   │   └── TestimonialCard.tsx
│   └── icons/
│       └── Logo.tsx
│
├── lib/
│   ├── constants.ts               — Nav items, social links, contact info
│   ├── content.ts                 — All page content (typed objects, single source of truth)
│   ├── schemas.ts                 — Zod validation schemas
│   ├── types.ts                   — TypeScript interfaces
│   ├── utils.ts                   — cn() helper (clsx + tailwind-merge)
│   └── actions.ts                 — Server actions (form submission via Resend)
│
├── public/
│   ├── textures/
│   │   └── grain.png              — Paper grain texture (200×200 seamless tile)
│   ├── images/
│   │   ├── panji.jpg              — Founder photo (placeholder until provided)
│   │   └── logos/                  — Client logo SVGs (when available)
│   ├── og-image.png               — Open Graph image (1200×630)
│   └── favicon.ico
│
├── tailwind.config.ts             — Full warm editorial theme config
├── next.config.ts                 — Next.js configuration
├── tsconfig.json                  — TypeScript strict mode
├── package.json
├── .env.local                     — Environment variables (never commit)
├── .eslintrc.json
├── .prettierrc
├── .gitignore
└── README.md
```

---

## 12. Implementation Roadmap

### Phase A — Foundation (Day 1–2)

```
□ Initialize Next.js 14 project with TypeScript (see setup commands in Section 2)
□ Configure Tailwind CSS with complete warm editorial theme
□ Install and configure shadcn/ui
□ Install all dependencies (framer-motion, react-hook-form, zod, lucide-react, resend)
□ Set up next/font with Fraunces + Inter
□ Create globals.css with ALL design tokens from Section 3
□ Create tailwind.config.ts with full theme extension
□ Set up file/folder structure (all directories, empty files)
□ Create lib/types.ts with all TypeScript interfaces
□ Create lib/utils.ts with cn() helper
□ Create lib/constants.ts with nav items, links
□ Deploy skeleton to Vercel (connect GitHub repo)
□ Verify fonts load correctly, CSS variables work
```

### Phase B — Core Components (Day 3–4)

```
□ Build Navbar (desktop: scroll-aware transparency, mobile: hamburger + visible CTA)
□ Build Footer (dark bg, 3-column nav)
□ Build MobileMenu (Sheet overlay)
□ Build MobileBottomBar (sticky bottom CTA, mobile only)
□ Build reusable common components:
  □ SectionLabel (amber uppercase)
  □ SectionHeading (serif headline + optional sub)
  □ SectionWrapper (consistent padding + max-width + bg)
  □ ScrollReveal (Framer Motion, once per element)
  □ StaggerContainer (stagger children)
  □ PullQuote (serif + amber left border)
  □ PaperGrain (noise overlay)
  □ ClientLogoBar (conditional render)
  □ TestimonialCard (quote card)
□ Customize shadcn/ui components to warm theme (button colors, input styles, card styles)
□ Create lib/content.ts with ALL page content as typed objects
□ Create lib/schemas.ts with form validation schema
□ Test all components in isolation
```

### Phase C — Homepage (Day 5–7)

```
□ HeroSection (dark bg, serif headline, fade-up animation, two CTAs)
□ ProblemSection (3 pain cards, stagger reveal)
□ ProcessSection (3-step vertical timeline, differentiator callout)
□ ProofSection (scenario + 6 asset cards, 3×2 grid → 2×3 mobile)
□ FounderSection (dark bg, photo placeholder + text, asymmetric layout)
□ SocialProofSection (logo bar + testimonial slots, conditional render)
□ CTASection (dark bg, amber button)
□ Assemble homepage page.tsx with all sections
□ Test complete homepage responsive behavior (mobile → desktop)
□ Test all animations (scroll reveals, staggers, hover states)
□ Performance check (Lighthouse)
```

### Phase D — Inner Pages (Day 8–12)

```
□ /how-it-works:
  □ HowItWorksHero
  □ TierOverview (3 comparison cards, anchor links)
  □ FoundationDetail (process steps, output list)
  □ SprintDetail (visual timeline, asset summary, pricing)
  □ EngineDetail (monthly output, benefits, value comparison)
  □ AddOns (2 cards)
  □ PricingSummary (table desktop → stacked cards mobile, testimonial slot)
  □ HowItWorksCTA
  □ Test anchor smooth-scroll from tier cards to details

□ /about:
  □ AboutHero (dark, no CTA)
  □ OriginStory (sticky photo desktop, flowing text, mobile: photo top)
  □ InsightSection (pull quote treatment)
  □ MethodSection (3 conviction blocks)
  □ AboutCTA

□ /start:
  □ StartHero (light bg, minimal)
  □ IntakeForm (5 fields, react-hook-form + zod, inline validation)
  □ PostFormReassurance
  □ ThankYouState (animated swap, no redirect)
  □ Wire up form submission (Server Action → Resend email)
  □ Test form validation, submission, thank you state

□ Cross-page verification:
  □ All CTA links point to correct targets
  □ Nav active states work on all pages
  □ Smooth scroll works for anchor links
  □ Page transitions work between all routes
```

### Phase E — Polish & Launch (Day 13–15)

```
□ SEO:
  □ Meta tags on all pages (title, description, OG)
  □ Open Graph image
  □ Structured data (JSON-LD: Organization, Service)
  □ sitemap.ts
  □ robots.txt
  □ Canonical URLs

□ Performance:
  □ Lighthouse audit: target 95+ across all categories
  □ Core Web Vitals check
  □ Dynamic imports for below-fold heavy components
  □ Image optimization verification

□ Accessibility:
  □ Keyboard navigation works across entire site
  □ Focus states visible on all interactive elements
  □ Screen reader testing (headings, form labels, alt text)
  □ Color contrast verification (WCAG AA)
  □ prefers-reduced-motion: disable animations

□ Cross-browser & device testing:
  □ Chrome, Safari, Firefox (desktop)
  □ Chrome, Safari (mobile)
  □ iPhone, Android test (responsive behavior)

□ Final touches:
  □ Paper grain texture implementation
  □ Animation timing fine-tuning
  □ 404 page styled consistently
  □ Environment variables set in Vercel
  □ Custom domain / DNS verification

□ Launch:
  □ Push to main branch
  □ Verify Vercel deployment
  □ Smoke test all pages live
  □ Test form submission live
  □ Verify email delivery
```

**Total estimated timeline: ~15 working days**

---

## 13. Future-Proofing

### Phase 2 Features (Not built now, but architecture supports them)

1. **GTM Foundation Onboarding App** — dedicated route `/foundation`, multi-step guided diagnostic, deeper intake form (revenue range, industry, role, etc.), AI-assisted analysis
2. **Bahasa Indonesia** — i18n routing (`/en/...`, `/id/...`). Content already in TypeScript files — split into locale files. English URLs become the `/en/` prefix routes, Bahasa gets `/id/` routes (or vice versa).
3. **Blog / Resources** — `/blog` route, MDX or CMS-powered
4. **Real Case Studies** — Swap `ProofSection` variant from `hypothetical` to `case-study` with Daya 5 Group data
5. **Client Dashboard** — separate app or subdomain
6. **Full Social Proof** — populate `ClientLogoBar` and `TestimonialCard` components with real content

### Architecture Decisions That Enable This

```
✅ App Router (not Pages Router) — better for future i18n, nested layouts
✅ Content in TypeScript files — easy CMS migration path
✅ Component-based architecture — sections independently swappable
✅ shadcn/ui — no vendor lock-in, fully customizable
✅ Tailwind + CSS variables — easy to theme, extend, or add dark mode toggle
✅ Server Actions — ready for more complex form handling
✅ English URLs — clean URL structure for i18n prefix routing later
✅ ProofSection variant prop — swap hypothetical → real case study without rebuild
✅ Social proof conditional rendering — section appears when content exists
```

---

## Appendix: Key Decisions Summary

| Decision | Choice | Rationale |
|---|---|---|
| Language | Full English (copy, nav, URLs, footer) | Premium B2B positioning; English statements carry more authority. Bahasa Indonesia Phase 2. |
| Framework | Next.js 14+ (App Router) | Best DX, Vercel native, future-proof for i18n |
| Styling | Tailwind + shadcn/ui | Fast development, full customization, no vendor lock-in |
| Animation | Framer Motion | Best React animation library, smooth scroll reveals |
| Headline Font | Fraunces (variable serif) | Editorial authority, warmth, differentiation from SaaS |
| Body Font | Inter | Best reading experience at all sizes |
| Theme | Light base + strategic dark | Reading-heavy site, trust, warmth |
| Accent Color | Amber (#C8A24E) | Craftsmanship, warmth, premium. Not corporate blue. Not tech cyan. |
| Form MVP | 5 fields (name, company, email, WhatsApp, challenge) | Low friction. Deeper intake in Phase 2 Foundation product. |
| Form Handling | react-hook-form + zod + Resend | Type-safe validation, reliable email delivery |
| Proof Section | Capability showcase (not fake case study) | Honest framing until real case study available from Daya 5 Group |
| Social Proof | Architecture built, content placeholder | Client logos + testimonials added when available |
| Mobile Strategy | Mobile-first responsive | Indonesian B2B browsing skews heavily mobile |
| Deployment | Vercel via GitHub | Native Next.js support, automatic deploys |
| Response SLA | "Within 2 business days" | Realistic for one-person operation. Builds buffer for weekends. |
| URLs | English (`/how-it-works`, `/about`, `/start`) | Consistent with English copy. Clean path for i18n prefix routing. |

---

*This document is the single source of truth for implementation. All copy is locked. All design specifications are final. All strategic decisions have been evaluated and confirmed. Feed this entire document to your IDE / Claude Code for implementation.*
