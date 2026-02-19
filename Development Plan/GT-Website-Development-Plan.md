# GreatTastemaker.com — Website Development Document
## Next.js Rebuild & Brand Upgrade | Phase 1

**Version:** 1.0  
**Date:** February 2026  
**Status:** Ready for Development  
**Target:** Feed to IDE (Antigravity / Claude Code)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Site Architecture & Routing](#4-site-architecture--routing)
5. [Page-by-Page Specifications](#5-page-by-page-specifications)
6. [Component Architecture](#6-component-architecture)
7. [CTA & Lead Capture Flow](#7-cta--lead-capture-flow)
8. [Animation & Interaction Specs](#8-animation--interaction-specs)
9. [SEO & Performance](#9-seo--performance)
10. [Content Strategy Notes](#10-content-strategy-notes)
11. [Future-Proofing (Phase 2 Prep)](#11-future-proofing-phase-2-prep)
12. [Implementation Roadmap](#12-implementation-roadmap)
13. [File & Folder Structure](#13-file--folder-structure)

---

## 1. Project Overview

### What We're Building
A complete rebuild of GreatTastemaker.com from a static single-page HTML site to a modern, performant, dark-themed Next.js application. The website serves as the public-facing presence for Great Tastemaker — a B2B GTM (Go-To-Market) engine that extracts product knowledge from B2B companies and deploys it as market-ready assets in 4 days.

### Current State
- Single-page static HTML website
- Bilingual (ID/EN) with simple toggle
- Deployed on Vercel via GitHub
- Sections: Hero, Problem, Engine (3 Phases), Output, Case Study, Sprint CTA, About, Footer
- No booking/CTA system, no lead capture, no multi-page structure

### Target State (Phase 1)
- Modern Next.js 14 application with App Router
- Dark & bold design language (Vercel/Linear aesthetic)
- Multi-page structure: Home, Layanan (Services), Studi Kasus (Case Studies), Tentang (About), Kontak (Contact)
- Smooth scroll animations and micro-interactions (Framer Motion)
- Integrated lead capture: short intake form → WhatsApp/Calendly routing
- Bahasa Indonesia as primary language (English prepared for Phase 2)
- SEO-optimized, fast, accessible

### What This Is NOT (Phase 1 Scope Boundaries)
- NOT building the GTM Foundation onboarding web app (Phase 2)
- NOT implementing a blog/CMS system yet (Phase 2)
- NOT building client dashboard or login system
- NOT implementing full i18n/bilingual routing yet
- NOT building the AI-assisted intake form

---

## 2. Tech Stack

### Core Framework
```
Next.js 14 (App Router)
├── React 18+ (Server Components by default)
├── TypeScript (strict mode)
└── Deployed on Vercel
```

### Styling & UI
```
Tailwind CSS 3.4+
├── Custom dark theme configuration
├── CSS variables for design tokens
└── @tailwindcss/typography (for rich text sections)

shadcn/ui
├── Button, Dialog, Sheet, Separator, Badge
├── Form components (for contact/intake form)
├── Card, Tabs (for service tier display)
└── Fully customized to match dark theme
```

### Animation
```
Framer Motion 11+
├── Scroll-triggered animations (viewport entry)
├── Page transitions
├── Staggered list reveals
├── Number counters (stats)
├── Smooth hover states
└── Parallax effects (subtle, hero section)
```

### Additional Libraries
```
lucide-react          — Icons (consistent, tree-shakeable)
next/font             — Font optimization (Inter or Geist)
next/image            — Image optimization
next-seo              — SEO meta management (or built-in Next.js metadata API)
react-hook-form       — Form handling (intake form)
zod                   — Form validation schema
```

### Development Tools
```
ESLint + Prettier     — Code quality
Husky + lint-staged   — Pre-commit hooks (optional)
```

### Hosting & Deployment
```
Vercel
├── Automatic deployments from GitHub main branch
├── Preview deployments for PRs
├── Edge functions (if needed later)
└── Analytics (Vercel Analytics, free tier)
```

---

## 3. Design System

### Philosophy
Dark & bold with a tech-forward, premium agency feel. Think Vercel's marketing site meets Linear's product aesthetic. The design should communicate: "This is an engine, not a service. This is precision, not guesswork."

### Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary: #09090b;        /* Near-black, main background (zinc-950) */
  --bg-secondary: #18181b;      /* Slightly lighter, card backgrounds (zinc-900) */
  --bg-tertiary: #27272a;       /* Elevated surfaces, hover states (zinc-800) */
  
  /* Text */
  --text-primary: #fafafa;      /* Main text (zinc-50) */
  --text-secondary: #a1a1aa;    /* Secondary/muted text (zinc-400) */
  --text-tertiary: #71717a;     /* Tertiary text, labels (zinc-500) */
  
  /* Accent — Brand Color */
  --accent-primary: #22d3ee;    /* Cyan-400: primary accent, CTAs, highlights */
  --accent-secondary: #06b6d4;  /* Cyan-500: hover states */
  --accent-muted: #164e63;      /* Cyan-900: subtle accent backgrounds */
  
  /* Functional */
  --border-default: #27272a;    /* Default borders (zinc-800) */
  --border-subtle: #3f3f46;     /* Subtle borders (zinc-700) */
  
  /* Gradients */
  --gradient-hero: linear-gradient(to bottom, #09090b 0%, #0c1222 50%, #09090b 100%);
  --gradient-accent: linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%); /* cyan to violet */
  --gradient-text: linear-gradient(90deg, #22d3ee 0%, #a78bfa 100%);    /* for gradient text effects */
  
  /* Glow effects */
  --glow-cyan: 0 0 60px rgba(34, 211, 238, 0.15);
  --glow-violet: 0 0 60px rgba(139, 92, 246, 0.1);
}
```

**Rationale for cyan accent:** Cyan on dark backgrounds is high-contrast, modern, and signals "tech" without being generic blue. The cyan-to-violet gradient adds depth. This palette is very Linear/Vercel-coded.

### Typography

```css
/* Primary: Geist Sans (Vercel's typeface, built into next/font) */
font-family: 'Geist', system-ui, -apple-system, sans-serif;

/* Monospace (for stats, code-like elements): Geist Mono */
font-family: 'Geist Mono', ui-monospace, monospace;

/* Scale */
--text-xs:   0.75rem;    /* 12px — labels, captions */
--text-sm:   0.875rem;   /* 14px — body small */
--text-base: 1rem;       /* 16px — body */
--text-lg:   1.125rem;   /* 18px — body large */
--text-xl:   1.25rem;    /* 20px — subheadings */
--text-2xl:  1.5rem;     /* 24px — section subtitles */
--text-3xl:  1.875rem;   /* 30px — section titles */
--text-4xl:  2.25rem;    /* 36px — page titles */
--text-5xl:  3rem;       /* 48px — hero subtitle */
--text-6xl:  3.75rem;    /* 60px — hero headline */
--text-7xl:  4.5rem;     /* 72px — hero headline (desktop) */
```

### Spacing & Layout
```
Max content width:  1280px (7xl)
Section padding:    py-24 md:py-32 (vertical), px-6 md:px-8 (horizontal)
Card padding:       p-6 md:p-8
Gap between cards:  gap-6 md:gap-8
Border radius:      rounded-lg (0.5rem) for cards, rounded-full for pills/badges
```

### Component Styling Patterns

**Cards (dark glassmorphism):**
```css
.card {
  background: rgba(24, 24, 27, 0.6);     /* bg-secondary with transparency */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(63, 63, 70, 0.5); /* border-subtle, semi-transparent */
  border-radius: 0.75rem;
}
.card:hover {
  border-color: rgba(34, 211, 238, 0.3);   /* Cyan glow border on hover */
  box-shadow: var(--glow-cyan);
}
```

**Buttons:**
```
Primary:    bg-cyan-400 text-zinc-950 hover:bg-cyan-300 (dark text on bright button)
Secondary:  bg-transparent border border-zinc-700 text-zinc-100 hover:border-zinc-500
Ghost:      bg-transparent text-zinc-400 hover:text-zinc-100
```

**Dividers/Separators:**
```
Subtle horizontal lines: border-t border-zinc-800
Gradient dividers: h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent
```

**Section numbering (like the current "01, 02, 03"):**
```
Use Geist Mono, text-cyan-400/60 (muted cyan), text-sm, tracking-wider
```

### Iconography
Use `lucide-react` icons consistently. Style: stroke-width 1.5, size 20-24px, color matches text-secondary or accent as appropriate.

### Image Treatment
- Placeholder images use gradient backgrounds matching the theme
- Case study screenshots get subtle rounded corners + border treatment
- Any diagram/illustration should be done as SVG or React component, not raster images

---

## 4. Site Architecture & Routing

### Page Structure

```
/ (Home)                          — Main landing page, high-impact
/layanan                          — Services detail page (Foundation, Sprint, Engine, Add-ons)
/studi-kasus                      — Case studies page
/tentang                          — About page
/kontak                           — Contact page with intake form
```

### Navigation

**Desktop (≥1024px):**
Fixed top navbar, transparent on hero → solid bg-zinc-950/80 backdrop-blur on scroll.

```
[GT Logo]     Beranda  Layanan  Studi Kasus  Tentang     [Mulai Sprint →]
```

- Logo: "GT" monogram or "Great Tastemaker" wordmark (compact)
- Nav links: text-zinc-400 hover:text-zinc-50, active state: text-cyan-400
- CTA button: Primary style (cyan bg, dark text), always visible
- No language toggle for Phase 1 (Bahasa Indonesia only)

**Mobile (<1024px):**
Hamburger menu → Full-screen overlay (Sheet component from shadcn/ui), dark backdrop.

```
[GT Logo]                         [☰ Menu]

— Opens full-screen overlay —
Beranda
Layanan
Studi Kasus
Tentang
Kontak
[Mulai Sprint →]
```

### Footer
```
[GT Logo + Tagline]

Navigasi          Layanan              Kontak
Beranda           GTM Foundation       hello@greattastemaker.com
Layanan           GTM Sprint           WhatsApp
Studi Kasus       GTM Engine           
Tentang           Add-Ons              

© 2026 Great Tastemaker. Hak cipta dilindungi.
```

---

## 5. Page-by-Page Specifications

### 5.1 Home Page (`/`)

The home page is the primary conversion page. It should tell a complete story from problem → solution → proof → action in a single scroll, while each section is also a gateway to deeper pages.

**Section Order:**

#### Section 1: Hero
- **Purpose:** Immediate hook. Communicate what GT does in 5 seconds.
- **Headline:** "Product knowledge Anda, siap di pasar. Dalam 4 hari." (keep current, it's strong)
- **Subheadline:** "Great Tastemaker adalah GTM engine untuk perusahaan B2B. Kami ambil pengetahuan terdalam dari tim produk Anda, olah jadi aset yang menjual, dan deploy — lebih cepat dari tim internal mana pun."
- **CTAs:** 
  - Primary: "Mulai GTM Sprint →" (links to /kontak)
  - Secondary: "Lihat Cara Kerjanya ↓" (smooth scroll to Engine section)
- **Stats bar** (below hero text, horizontal on desktop):
  ```
  4 hari                    50+                     1
  Dari ekstraksi            Aset per siklus         Sesi ekstraksi
  ke deployment                                     dibutuhkan
  ```
- **Visual:** Abstract gradient glow behind text, subtle grid/dot pattern in background. No heavy imagery — let the typography breathe.
- **Badge:** Small pill above headline: "Menerima klien baru" with subtle pulse animation
- **Animation:** 
  - Headline: fade-up + slight blur-to-clear transition (0.6s)
  - Subheadline: fade-up with 0.2s delay
  - CTAs: fade-up with 0.4s delay
  - Stats: stagger-in from bottom with number counting animation

#### Section 2: Problem Statement
- **Purpose:** Agitate the pain. Make the reader feel the gap.
- **Section label:** "Masalahnya" (muted, small)
- **Headline:** "Yang paling paham produk bukan yang membuat kontennya."
- **Body:** 2-3 paragraphs explaining the knowledge extraction gap. Use the existing copy — it's well-written.
- **Visual approach:** Could use a split layout — text on left, abstract visualization on right showing the "gap" between product knowledge and market execution. Or keep it pure text with impactful typography.
- **Animation:** Paragraphs fade in on scroll, staggered.

#### Section 3: The Engine (How It Works)
- **Purpose:** Show the 3-phase process. Make it feel systematic and inevitable.
- **Section label:** "Mesinnya"
- **Headline:** "Tiga fase. Empat hari. Siap jalan."
- **Layout:** Three cards in a row (desktop) or stacked (mobile), each with:
  ```
  [01]              [02]              [03]
  Extract           Process           Deploy
  Description...    Description...    Description...
  ```
- **Card design:** Dark glass cards with numbered labels in cyan mono, phase name as large heading, description as body text.
- **Connection:** Subtle line or arrow connecting the three cards (horizontal on desktop, vertical on mobile) to show progression.
- **Animation:** Cards stagger in from left to right on scroll entry.
- **CTA at end:** "Lihat detail layanan →" linking to /layanan

#### Section 4: Output Showcase
- **Purpose:** Make the volume and breadth of deliverables tangible.
- **Section label:** "Hasil Satu Siklus"
- **Headline:** "Satu sesi ekstraksi. Puluhan aset. Semua channel."
- **Layout:** Grid of output types, each as a compact card/pill:
  ```
  📝 Artikel panjang & konten SEO
  📊 Carousel LinkedIn & posting sosial media
  🎯 Ad creative untuk Meta & LinkedIn
  🌐 Landing page & lead magnet
  🎬 Skrip video & brief talking head
  ✉️ Email sequence & materi sales
  👥 Framework employee-generated content
  📋 Mini workshop & dek presentasi
  ```
- **Card style:** Small dark cards with icon + text, subtle border. On hover, slight lift + border glow.
- **Footer note:** "Semua aset dibangun dari sumber yang sama — pengetahuan langsung dari tim produk Anda."
- **Animation:** Grid items stagger-in on scroll.

#### Section 5: Social Proof / Case Study Preview
- **Purpose:** Build trust. Show real results.
- **Section label:** "Bukti Kerja"
- **Headline:** "Lihat langsung hasilnya."
- **Content:** Feature the one active client case study (B2B consulting group).
  ```
  [Klien Aktif badge]
  Perusahaan Konsultan B2B — Solusi Kompleks, Transaksi Besar
  
  Grup konsultan bisnis dengan empat unit bisnis...
  [description of engagement and results]
  
  "Mulai GTM Sprint →"
  ```
- **Also include:** The concept showcase (SaaS example) as a secondary card with a different visual treatment (slightly more muted, labeled "Concept Showcase").
- **CTA:** "Lihat semua studi kasus →" linking to /studi-kasus
- **Animation:** Fade-up on scroll.

#### Section 6: Sprint CTA (Pre-Footer Conversion Block)
- **Purpose:** Final push. Low-barrier entry point.
- **Headline:** "Siap ke pasar lebih cepat?"
- **Body:** "Mulai dengan GTM Sprint. Lihat sendiri apa yang bisa dihasilkan dalam 4 hari."
- **CTA:** "Mulai GTM Sprint →" (primary, large, links to /kontak)
- **Secondary:** "Atau hubungi langsung di hello@greattastemaker.com"
- **Visual:** Full-width section with gradient background (subtle cyan/violet glow), centered text.

---

### 5.2 Layanan Page (`/layanan`)

**Purpose:** Detailed breakdown of all service tiers + add-ons. This is the page visitors go to when they want to understand exactly what they get.

**Section Order:**

#### Hero
- **Headline:** "Sistem GTM yang terstruktur. Bukan jasa marketing biasa."
- **Subheadline:** Brief explanation of the tier-based approach and progression path.

#### Tier Overview (Visual Comparison)
A three-column comparison layout showing Foundation → Sprint → Engine at a glance.

```
┌─────────────────┬─────────────────┬─────────────────┐
│   FOUNDATION    │     SPRINT      │     ENGINE      │
│     Gratis      │   Rp 15 Juta    │ Rp 25 Juta/bln  │
│   1-2 hari      │    4 hari       │    Ongoing      │
│                 │                 │                 │
│  Market research│ 16 base assets  │ 32 base assets  │
│  ICP analysis   │ 14 bonus credit │ 28 bonus credit │
│  Opp. Score     │ 1 round revisi  │ Strategic review│
│                 │                 │ Dashboard       │
│  [Pelajari ↓]   │ [Mulai Sprint]  │ [Hubungi Kami]  │
└─────────────────┴─────────────────┴─────────────────┘
```

**Design:** Cards side by side. Sprint card should be visually emphasized (slightly elevated, accent border, or "Paling Populer" badge) since that's the primary conversion target.

#### Tier 1: GTM Foundation (Detailed)
- Expand on what's included: market research, competitive benchmarking, ICP analysis, positioning framework, Opportunity Score
- Explain the input: what client needs to provide (MVD)
- Explain the output: comprehensive analysis document
- Note: "Gratis — Anda hanya investasi waktu 15-30 menit untuk mengisi data."
- CTA: For Phase 1, this can be a teaser: "GTM Foundation akan segera tersedia. Daftar untuk notifikasi →" OR link to /kontak for manual inquiry

#### Tier 2: GTM Sprint (Detailed)
- Full breakdown of the 16 base assets per pillar (the table from playbook)
- Explain the 14 bonus credits and what can be redeemed
- Timeline: "Satu sesi ekstraksi. Empat hari. Selesai."
- What's needed from client: 1 extraction session (60-90 min)
- CTA: "Mulai GTM Sprint →" → /kontak

#### Tier 3: GTM Engine (Detailed)
- Explain the retainer model: 2 cycles/month, 32 base + 28 bonus
- Monthly strategic review
- Credit rollover mechanism
- Priority scheduling
- Minimum 3-month commitment
- CTA: "Hubungi untuk diskusi Engine →" → /kontak

#### Add-Ons Section
- Brand Playbook (Rp 5 Juta)
- Landing Page (Rp 5 Juta)
- Activation Workshop (Rp 3 Juta)
- Each as a compact card with scope, timeline, prerequisite, price

#### Pricing Summary Table
Clean table at the bottom summarizing all pricing.

---

### 5.3 Studi Kasus Page (`/studi-kasus`)

**Purpose:** Build credibility. Show, don't tell.

**Layout:**

#### Hero
- **Headline:** "Bukti kerja, bukan janji."
- **Subheadline:** "Lihat bagaimana GTM Engine bekerja untuk perusahaan B2B."

#### Active Client Case Study
Full detailed case study card for the B2B consulting group:
- Client profile (anonymized if needed): industry, company size, challenge
- What was done: extraction process, types of assets produced, timeline
- Results: tangible outcomes, volume, ongoing engagement
- Pull quote if available

#### Concept Showcase
The SaaS example, clearly labeled as a concept showcase:
- "Kalau GTM Sprint dijalankan untuk perusahaan SaaS"
- Walk through the hypothetical outputs
- Use slightly different visual treatment (maybe a dashed border or "Concept" badge) to differentiate from real case studies

#### Call to Action
- "Mau jadi studi kasus berikutnya?"
- CTA to /kontak

**Note for future:** This page structure should be easily extensible. When new case studies come in, they should be addable as new cards/sections without restructuring.

---

### 5.4 Tentang Page (`/tentang`)

**Purpose:** Build trust through the person behind the engine. Personal credibility matters in Indonesia's trust-first B2B culture.

**Sections:**

#### Hero
- **Headline:** "Dibangun oleh marketer yang sudah ada di kedua sisi."
- Brief intro — the "about" copy from the current site works well

#### Founder Story
- Experience across content creation and performance marketing
- The insight that led to GT: "marketing paling efektif bukan dari marketer yang nebak-nebak, tapi dari marketer yang punya akses langsung ke orang yang membangun produknya"
- Stats: 3+ tahun performance marketing, 100K+ followers organik, lintas industri

#### Philosophy / Approach
- "AI Engine with a Great Human Taste"
- AI does the heavy lifting, human confirms the taste
- Speed is the differentiator, not the AI technology itself

#### Tech Stack Showcase (Optional — builds credibility)
Brief mention of the technology powering GT:
- "Dibangun dengan stack teknologi modern: Next.js, AI agents, custom pipelines"
- This signals to tech-savvy B2B buyers that GT is legit

---

### 5.5 Kontak Page (`/kontak`)

**Purpose:** Primary conversion page. Short intake form that routes to WhatsApp or Calendly.

**Layout:**

#### Hero
- **Headline:** "Mari mulai."
- **Subheadline:** "Isi form singkat di bawah, dan kami akan menghubungi Anda untuk langkah selanjutnya."

#### Intake Form
The form should be SHORT — not intimidating. Goal: qualify the lead minimally, then route to human conversation.

**Fields:**
```
Nama Lengkap                    [text input, required]
Perusahaan                      [text input, required]
Email                           [email input, required]
Nomor WhatsApp                  [tel input, required]
Website Perusahaan              [url input, optional]
Apa yang Anda cari?             [select/radio, required]
  ├── GTM Sprint (satu siklus, 4 hari)
  ├── GTM Engine (retainer bulanan)
  ├── GTM Foundation (analisis gratis)
  ├── Konsultasi dulu — belum yakin
  └── Lainnya
Ceritakan sedikit tentang       [textarea, optional, max 500 chars]
produk/layanan Anda             
```

**On Submit:**
1. Form data gets sent to email (hello@greattastemaker.com) — use a serverless function or external service (Formspree, Resend, or custom API route)
2. User sees a success state with two options:
   ```
   ✓ Terima kasih! Data Anda sudah kami terima.
   
   Pilih cara lanjut yang paling nyaman:
   
   [💬 Lanjut via WhatsApp]     [📅 Jadwalkan Meeting]
   ```
   - WhatsApp: Opens wa.me link with pre-filled message including their name and selected service
   - Calendly: Opens embedded Calendly or link to booking page

#### Alternative Contact
Below the form:
```
Lebih suka langsung?
📧 hello@greattastemaker.com
💬 WhatsApp
```

---

## 6. Component Architecture

### Shared/Global Components

```
components/
├── layout/
│   ├── Navbar.tsx              — Fixed top nav, scroll-aware bg
│   ├── Footer.tsx              — Site-wide footer
│   ├── MobileMenu.tsx          — Full-screen mobile nav overlay
│   └── PageTransition.tsx      — Framer Motion page transition wrapper
│
├── ui/                         — shadcn/ui components (customized)
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── separator.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── select.tsx
│   ├── dialog.tsx
│   ├── sheet.tsx               — For mobile menu
│   └── tabs.tsx
│
├── sections/                   — Page-level section components
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── EngineSection.tsx
│   │   ├── OutputSection.tsx
│   │   ├── CaseStudyPreview.tsx
│   │   └── CTASection.tsx
│   ├── layanan/
│   │   ├── ServiceHero.tsx
│   │   ├── TierComparison.tsx
│   │   ├── TierDetail.tsx      — Reusable for each tier
│   │   ├── AddOnsGrid.tsx
│   │   └── PricingSummary.tsx
│   ├── studi-kasus/
│   │   ├── CaseStudyCard.tsx
│   │   └── ConceptShowcase.tsx
│   ├── tentang/
│   │   ├── FounderStory.tsx
│   │   └── Philosophy.tsx
│   └── kontak/
│       ├── IntakeForm.tsx
│       └── SuccessState.tsx
│
├── common/                     — Reusable atoms/molecules
│   ├── SectionLabel.tsx        — "Masalahnya", "Mesinnya" labels
│   ├── SectionHeading.tsx      — Section title + optional subtitle
│   ├── StatCard.tsx            — For the "4 hari / 50+ / 1" stats
│   ├── GlassCard.tsx           — Reusable dark glass card
│   ├── GradientText.tsx        — Text with gradient fill
│   ├── AnimatedCounter.tsx     — Number counting animation
│   ├── ScrollReveal.tsx        — Framer Motion scroll reveal wrapper
│   ├── StaggerContainer.tsx    — Stagger children animation
│   ├── GridBackground.tsx      — Subtle grid/dot pattern background
│   └── GlowEffect.tsx         — Radial gradient glow element
│
└── icons/                      — Custom SVG icons if needed
    └── Logo.tsx                — GT logo component
```

### Data Layer

```
lib/
├── constants.ts                — Site-wide constants, nav items, etc.
├── content.ts                  — All page content as typed objects
│                                 (easy to swap for CMS later)
├── types.ts                    — TypeScript interfaces
└── utils.ts                    — Utility functions (cn helper, etc.)
```

**Content approach:** For Phase 1, all content lives in TypeScript files. This makes it easy to migrate to a CMS (Notion, Sanity, or MDX) in Phase 2 without changing component structure. Each page's content is a typed object that components consume.

```typescript
// lib/content.ts example structure
export const homeContent = {
  hero: {
    badge: "Menerima klien baru",
    headline: "Product knowledge Anda, siap di pasar. Dalam 4 hari.",
    subheadline: "Great Tastemaker adalah GTM engine...",
    primaryCTA: { label: "Mulai GTM Sprint", href: "/kontak" },
    secondaryCTA: { label: "Lihat Cara Kerjanya", href: "#engine" },
    stats: [
      { value: 4, suffix: " hari", label: "Dari ekstraksi ke deployment" },
      { value: 50, suffix: "+", label: "Aset per siklus" },
      { value: 1, suffix: "", label: "Sesi ekstraksi dibutuhkan" },
    ],
  },
  // ... other sections
};
```

---

## 7. CTA & Lead Capture Flow

### Primary CTA: "Mulai GTM Sprint"
This is the main conversion action across the entire site. Every page should have at least one path to this.

### Flow Design

```
                    ┌─────────────────┐
                    │  User clicks     │
                    │  "Mulai Sprint"  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  /kontak page    │
                    │  Short form      │
                    │  (6-7 fields)    │
                    └────────┬────────┘
                             │
                         Submit
                             │
                             ▼
                    ┌─────────────────┐
                    │  Server action   │
                    │  sends email +   │
                    │  stores data     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Success state   │
                    │  with 2 options  │
                    └───────┬─┬───────┘
                            │ │
                   ┌────────┘ └────────┐
                   ▼                   ▼
          ┌────────────────┐  ┌────────────────┐
          │  WhatsApp link  │  │  Calendly link  │
          │  (pre-filled)   │  │  (embed/link)   │
          └────────────────┘  └────────────────┘
```

### Technical Implementation

**Form submission handler (Next.js Server Action or API Route):**

Option A — **Resend** (email API, free tier 100 emails/day):
```
POST /api/contact → Resend API → hello@greattastemaker.com
```

Option B — **Formspree** (simpler, no backend code):
```
POST → Formspree endpoint → email notification
```

Option C — **Custom API route + Notion database** (best for tracking):
```
POST /api/contact → 
  1. Save to Notion database (lead tracking)
  2. Send email notification via Resend
  3. Return success
```

**Recommendation:** Go with Option C if you want to track leads in Notion. Otherwise, Option A is the simplest.

### WhatsApp Pre-filled Message
```
https://wa.me/62XXXXXXXXXX?text=Halo%20Great%20Tastemaker!%20Saya%20{nama}%20dari%20{perusahaan}.%20Saya%20tertarik%20dengan%20{layanan}.%20Bisa%20kita%20diskusi%20lebih%20lanjut?
```

---

## 8. Animation & Interaction Specs

### Global Animation Principles
- **Easing:** `[0.25, 0.1, 0.25, 1]` (smooth ease-out, similar to Linear's feel)
- **Duration:** 0.5-0.8s for section reveals, 0.2-0.3s for hover states
- **Trigger:** Elements animate when they enter viewport (50% visible threshold)
- **Direction:** Most elements animate from bottom-up (translateY: 30px → 0)
- **Stagger:** Children in lists/grids stagger with 0.1s delay between items

### Specific Animations

**1. Hero Section**
```typescript
// Headline: blur + fade + slide up
initial: { opacity: 0, y: 30, filter: "blur(10px)" }
animate: { opacity: 1, y: 0, filter: "blur(0px)" }
transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }

// Stats: number counting
// Use AnimatedCounter component that counts from 0 to target value
// Duration: 1.5s, triggered when in viewport
```

**2. Scroll Reveal (reusable)**
```typescript
// ScrollReveal wrapper component
const scrollVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Usage: wrap any section content
<ScrollReveal>
  <SectionContent />
</ScrollReveal>
```

**3. Staggered Grid (for output items, service cards)**
```typescript
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

**4. Navbar scroll behavior**
```typescript
// Transparent → solid background on scroll
// Use useScroll() from Framer Motion or intersection observer
// Threshold: 100px scroll
// Transition: bg opacity 0 → 0.8 over 0.3s
```

**5. Card hover effects**
```css
/* Pure CSS for performance */
.glass-card {
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.glass-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.1);
  transform: translateY(-2px);
}
```

**6. Page transitions**
```typescript
// Subtle fade between pages
// Wrap app in AnimatePresence + motion.div
initial: { opacity: 0 }
animate: { opacity: 1 }
exit: { opacity: 0 }
transition: { duration: 0.3 }
```

**7. Background effects**
- Subtle gradient glow that follows a slow animation (CSS keyframes, not JS)
- Grid/dot pattern with low opacity (0.03-0.05) for texture
- These should be pure CSS for zero performance impact

---

## 9. SEO & Performance

### Meta & SEO

**Homepage:**
```html
<title>Great Tastemaker — GTM Engine untuk B2B</title>
<meta name="description" content="Great Tastemaker mengekstrak product knowledge dari tim Anda dan mengolahnya menjadi aset GTM siap deploy dalam 4 hari. GTM engine untuk perusahaan B2B Indonesia." />
<meta property="og:title" content="Great Tastemaker — GTM Engine untuk B2B" />
<meta property="og:description" content="Product knowledge Anda, siap di pasar. Dalam 4 hari." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<link rel="canonical" href="https://www.greattastemaker.com/" />
```

**Each page** should have unique title, description, and OG tags defined in the metadata export.

### Technical SEO
- Semantic HTML: proper heading hierarchy (h1 once per page, h2 for sections, etc.)
- Structured data (JSON-LD): Organization schema, Service schema
- Sitemap.xml: auto-generated by Next.js
- Robots.txt: allow all
- next/image for all images (automatic WebP conversion, lazy loading)
- next/font for font loading (no layout shift)

### Performance Targets
```
Lighthouse scores (target):
├── Performance:   95+
├── Accessibility: 95+
├── Best Practices: 95+
└── SEO:           100

Core Web Vitals:
├── LCP:  < 2.5s
├── FID:  < 100ms
├── CLS:  < 0.1
└── INP:  < 200ms
```

### Performance Strategies
- Server Components by default (minimal client JS)
- Client components only where needed (animations, form, mobile menu)
- Dynamic imports for heavy components (Framer Motion animations below the fold)
- Image optimization via next/image
- Font subsetting via next/font
- Minimize third-party scripts
- Vercel Edge Network for global CDN

---

## 10. Content Strategy Notes

### Language
- All content in Bahasa Indonesia for Phase 1
- Tone: Professional tapi tidak kaku. Confident, not salesy. Technical credibility tanpa jargon berlebihan.
- Use "Anda" (formal you) consistently — matches B2B professional tone
- Avoid English jargon where Indonesian equivalent exists, but keep established terms like "GTM", "engine", "sprint" as-is (they're part of the brand vocabulary)

### Content that Needs to Be Written/Updated
1. **Layanan page** — Detailed tier descriptions need to be written based on Playbook v1 content. The CLIENT-FACING sections from the playbook are the source.
2. **About page** — Expand the current "about" section into a full page
3. **Case study** — The current client description is good, might need slight expansion for a dedicated page
4. **Kontak page** — Short copy needed for the form page
5. **Footer** — Standard, minimal copy needed

### Content Source Mapping
| Page Section | Source |
|---|---|
| Hero copy | Current website (keep as-is) |
| Problem statement | Current website (keep as-is) |
| Engine phases | Current website + Playbook Bagian 3-5 |
| Output list | Current website + Playbook Sprint asset matrix |
| Service tiers | Playbook v1 CLIENT-FACING sections |
| Pricing | Playbook v1 Bagian 8 |
| Case study | Current website |
| About | Current website + expand |
| Form | New content needed |

---

## 11. Future-Proofing (Phase 2 Prep)

While Phase 1 focuses on the website rebuild, the architecture should be ready for Phase 2 features without major refactoring.

### Phase 2 Features (Not built now, but design for them)

**1. GTM Foundation Onboarding App**
- Will be a dedicated route: `/foundation` or `/onboarding`
- Will need: multi-step form, progress bar, file upload, AI assist
- Phase 1 prep: Ensure the routing structure can accommodate this. The kontak form is a simpler version of this pattern.

**2. English Language Support**
- Will need proper i18n routing: `/en/...` and `/id/...`
- Phase 1 prep: Keep all content in a centralized content file (lib/content.ts). When i18n is added, this file splits into content.id.ts and content.en.ts. Components don't need to change.
- Consider using `next-intl` library structure from the start (even if only ID is active)

**3. Blog / Resources Section**
- Will be at `/blog` or `/resources`
- Phase 1 prep: The file structure already accommodates this as a new route. Content could come from MDX files or a CMS (Notion API, Sanity, etc.)

**4. Client Dashboard / Login**
- Not part of the marketing site architecture
- Could be a separate app or subdomain (app.greattastemaker.com)

### Architectural Decisions for Future-Proofing
```
✅ Use App Router (not Pages Router) — better for future i18n, layouts
✅ Content in TypeScript files — easy to migrate to CMS
✅ Component-based architecture — sections are independently deployable
✅ shadcn/ui — components are copy-pasted in, no vendor lock-in
✅ Tailwind — design tokens via CSS variables, easy to theme
✅ API routes structure — ready for form handling, future integrations
```

---

## 12. Implementation Roadmap

### Phase 1A — Foundation (Day 1-2)
```
□ Initialize Next.js 14 project with TypeScript
□ Configure Tailwind CSS with custom dark theme
□ Install and configure shadcn/ui
□ Set up Framer Motion
□ Install next/font with Geist
□ Create base layout (RootLayout with Navbar + Footer)
□ Set up file/folder structure
□ Configure ESLint + Prettier
□ Deploy skeleton to Vercel (connect GitHub repo)
```

### Phase 1B — Core Components (Day 3-4)
```
□ Build Navbar (desktop + mobile)
□ Build Footer
□ Build reusable components:
  □ ScrollReveal, StaggerContainer
  □ SectionLabel, SectionHeading
  □ GlassCard
  □ GradientText
  □ AnimatedCounter
  □ GridBackground, GlowEffect
□ Create content.ts with all page content
```

### Phase 1C — Home Page (Day 5-7)
```
□ HeroSection (with animations, stats counter)
□ ProblemSection
□ EngineSection (3 phase cards)
□ OutputSection (asset grid)
□ CaseStudyPreview
□ CTASection (pre-footer)
□ Test responsive behavior
□ Test animations and performance
```

### Phase 1D — Inner Pages (Day 8-11)
```
□ /layanan — Service tiers, comparison, add-ons, pricing
□ /studi-kasus — Case study detail + concept showcase
□ /tentang — Founder story, philosophy
□ /kontak — Intake form + success state + WhatsApp/Calendly routing
□ Wire up form submission (API route + email)
```

### Phase 1E — Polish & Launch (Day 12-14)
```
□ SEO: meta tags, OG images, structured data, sitemap
□ Performance audit (Lighthouse)
□ Accessibility audit
□ Cross-browser testing (Chrome, Safari, Firefox, mobile)
□ Content review and copywriting polish
□ Final animation tuning
□ Deploy to production
□ Verify analytics
□ DNS / domain verification
```

**Total estimated timeline: ~14 working days**

---

## 13. File & Folder Structure

```
greattastemaker.com/
├── app/
│   ├── layout.tsx                 — Root layout (font, metadata, Navbar, Footer)
│   ├── page.tsx                   — Home page
│   ├── layanan/
│   │   └── page.tsx               — Services page
│   ├── studi-kasus/
│   │   └── page.tsx               — Case studies page
│   ├── tentang/
│   │   └── page.tsx               — About page
│   ├── kontak/
│   │   └── page.tsx               — Contact/intake page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts           — Form submission handler
│   ├── globals.css                — Tailwind base + custom CSS variables
│   ├── not-found.tsx              — Custom 404 page
│   └── sitemap.ts                 — Dynamic sitemap generation
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageTransition.tsx
│   ├── ui/                        — shadcn/ui components
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
│   │   │   ├── EngineSection.tsx
│   │   │   ├── OutputSection.tsx
│   │   │   ├── CaseStudyPreview.tsx
│   │   │   └── CTASection.tsx
│   │   ├── layanan/
│   │   │   ├── ServiceHero.tsx
│   │   │   ├── TierComparison.tsx
│   │   │   ├── TierDetail.tsx
│   │   │   ├── AddOnsGrid.tsx
│   │   │   └── PricingSummary.tsx
│   │   ├── studi-kasus/
│   │   │   ├── CaseStudyCard.tsx
│   │   │   └── ConceptShowcase.tsx
│   │   ├── tentang/
│   │   │   ├── FounderStory.tsx
│   │   │   └── Philosophy.tsx
│   │   └── kontak/
│   │       ├── IntakeForm.tsx
│   │       └── SuccessState.tsx
│   ├── common/
│   │   ├── SectionLabel.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── StatCard.tsx
│   │   ├── GlassCard.tsx
│   │   ├── GradientText.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── StaggerContainer.tsx
│   │   ├── GridBackground.tsx
│   │   └── GlowEffect.tsx
│   └── icons/
│       └── Logo.tsx
│
├── lib/
│   ├── constants.ts               — Navigation items, social links, etc.
│   ├── content.ts                 — All page content (typed objects)
│   ├── types.ts                   — TypeScript interfaces
│   └── utils.ts                   — cn() helper, formatters
│
├── public/
│   ├── og-image.png               — Open Graph image
│   ├── favicon.ico
│   └── robots.txt
│
├── tailwind.config.ts             — Tailwind config with custom theme
├── next.config.ts                 — Next.js configuration
├── tsconfig.json                  — TypeScript config
├── package.json
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

## Appendix: Key Decisions Summary

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | Best DX, Vercel deployment, future-proof |
| Styling | Tailwind + shadcn/ui | Fast development, full customization, no vendor lock-in |
| Animation | Framer Motion | Best React animation library, scroll triggers built-in |
| Font | Geist (Sans + Mono) | Modern, built for next/font, matches dark tech aesthetic |
| Language | Bahasa Indonesia only (Phase 1) | Focus, English comes Phase 2 with proper i18n |
| Content | TypeScript files | Simple now, easy CMS migration later |
| Form | react-hook-form + zod | Type-safe, performant form handling |
| Email | Resend or Formspree | Reliable, free tier sufficient for launch |
| Design | Dark theme, cyan accent | Matches Vercel/Linear aesthetic, signals tech credibility |
| Deployment | Vercel | Native Next.js support, already using it |

---

*Document prepared for IDE-assisted development. All specifications are designed to be actionable — feed this document to your AI coding assistant alongside the existing codebase for implementation.*
