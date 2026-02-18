import {
  PainCard,
  ProcessStep,
  AssetCard,
  ServiceTier,
  AddOn,
  SprintDay,
  EngineOutput,
  SocialProof,
} from "./types";

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────

export const homeContent = {
  hero: {
    headline: "Your product deserves a better story.",
    subheadline:
      "We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months.",
    primaryCTA: { label: "Get your free GTM diagnostic →", href: "/start" },
    secondaryCTA: { label: "See how it works ↓", href: "#process" },
  },

  problem: {
    sectionLabel: "The real problem",
    headline:
      "It's not your product. It's how the market hears about it.",
    cards: [
      {
        title: "The best-kept secret",
        description:
          "You're the expert in the room. But outside that room, nobody's heard the story.",
      },
      {
        title: "The agency trap",
        description:
          "You hired an agency. They sent a junior writer who Googled your industry — and it shows.",
      },
      {
        title: "Build vs. buy",
        description:
          "You can't afford to wait 6 months to build a team. You can't afford another agency that doesn't get it.",
      },
    ] as PainCard[],
    closingLine:
      "You don't need more content. You need someone who gets what you do — and knows how to make the market care.",
  },

  process: {
    sectionLabel: "The process",
    headline: "One conversation. A complete go-to-market.",
    steps: [
      {
        name: "Foundation",
        label: "Start here — it's free.",
        description:
          "We analyze your current go-to-market, show you where the gaps are, and map what's possible. No commitment, no pitch deck — just clarity.",
      },
      {
        name: "Sprint",
        label: "Ready to build? That's the Sprint.",
        description:
          "One deep-dive session with you. Four days later: a complete go-to-market suite — positioning, messaging, content, sales assets — all built from your real expertise.",
      },
      {
        name: "Engine",
        label: "Want it to keep running? That's the Engine.",
        description:
          "Monthly GTM execution. We keep producing, testing, and sharpening — so your go-to-market gets stronger every cycle, not stale.",
      },
    ] as ProcessStep[],
    differentiator:
      "No six-month onboarding. No revolving door of junior writers. You work directly with the strategist who builds your entire system.",
    primaryCTA: { label: "Get your free GTM diagnostic →", href: "/start" },
    secondaryCTA: { label: "See the full process →", href: "/how-it-works" },
  },

  proof: {
    sectionLabel: "What a Sprint produces",
    headline: "Here's what your go-to-market could look like.",
    scenarioFraming:
      "Every Sprint is different — but here's a typical output for a B2B consulting firm looking to break past referral-only growth.",
    assets: [
      {
        title: "Positioning document",
        description:
          "Why they're different — in language their market actually understands.",
      },
      {
        title: "Thought leadership article",
        description:
          "A long-form piece that positions the founder as the authority, not just a practitioner.",
      },
      {
        title: "LinkedIn content series",
        description:
          "Five posts engineered for the founder's voice — ready to publish.",
      },
      {
        title: "Sales one-pager",
        description:
          'One page that answers "why us" before the prospect even asks.',
      },
      {
        title: "Case study framework",
        description:
          "A structure that turns past wins into future-facing proof.",
      },
      {
        title: "Messaging playbook",
        description:
          "The core narrative — so every touchpoint sounds like it came from the same brain.",
      },
    ] as AssetCard[],
    closingLine: "All from one conversation. All in four days.",
  },

  founder: {
    sectionLabel: "Who's behind this",
    headline: "Built by a strategist, not a template.",
    paragraphs: [
      "GreatTastemaker is led by Panji Firmansyah — a marketing strategist who's built businesses from zero, scaled operations to 47 people, and driven Rp 1B+ in client revenue through systems, not guesswork.",
      "Before building go-to-market systems for B2B companies, he spent years in the trenches — hiring teams, running P&Ls, and learning what actually makes a market pay attention. That operator background is why GT's approach starts with extraction, not assumptions.",
      "When you work with GreatTastemaker, there's no handoff to a junior account manager. You work directly with the person who designed the strategy — from the first conversation to the final deployment.",
    ],
    link: { label: "More about the approach →", href: "/about" },
  },

  cta: {
    headline: "Stop being your market's best-kept secret.",
    sub: "Get a free GTM diagnostic — and see what your go-to-market should actually look like.",
    cta: { label: "Get your free GTM diagnostic →", href: "/start" },
  },
};

// ─────────────────────────────────────────────
// SOCIAL PROOF (shared)
// ─────────────────────────────────────────────

export const socialProof: SocialProof = {
  logos: [
    // { name: "Client Name", src: "/images/logos/client.svg", alt: "Client Name" }
    // Add logos here when available
  ],
  testimonials: [
    // { quote: "...", name: "Name", company: "Company", role: "Role" }
    // Add testimonials here when available
  ],
  sectionVisible: false,
};

// ─────────────────────────────────────────────
// HOW IT WORKS PAGE
// ─────────────────────────────────────────────

export const howItWorksContent = {
  hero: {
    headline: "Here's exactly how it works.",
    subheadline:
      "Three tiers. One clear path. You start with a free diagnostic — and only go further if the results speak for themselves.",
  },

  tierOverview: {
    intro:
      "Every engagement starts with Foundation. No exceptions, no shortcuts — because we don't build on assumptions.",
    tiers: [
      {
        label: "Start here",
        name: "GTM Foundation",
        subtitle: "Strategic 360 Diagnostic",
        price: "Free",
        timeline: "1–2 days",
        valueLine:
          "See where your go-to-market stands — and what's possible.",
        anchorId: "foundation",
      },
      {
        label: "Most popular",
        name: "GTM Sprint",
        subtitle: "Full GTM Cycle",
        price: "Rp 15,000,000",
        timeline: "4 days",
        valueLine:
          "One conversation. 30 strategic assets. Complete go-to-market.",
        highlighted: true,
        anchorId: "sprint",
      },
      {
        label: "For ongoing growth",
        name: "GTM Engine",
        subtitle: "Monthly Retainer",
        price: "Rp 25,000,000/month",
        timeline: "Ongoing (min. 3 months)",
        valueLine:
          "Your GTM keeps running — and gets sharper every cycle.",
        anchorId: "engine",
      },
    ] as ServiceTier[],
  },

  foundation: {
    headline: "Foundation: Your starting point.",
    intro: [
      "We don't start with a pitch. We start with a diagnostic.",
      "GTM Foundation is a Strategic 360 Diagnostic — a comprehensive analysis of your current go-to-market position. It's the kind of deliverable most firms charge Rp 10–15 million for. We do it for free — because we believe the results speak for themselves.",
    ],
    steps: [
      {
        title: "You share your context.",
        description:
          "Fill out a guided onboarding form. Upload whatever you have — a pitch deck, your website, past proposals. The more you share, the sharper the diagnostic.",
      },
      {
        title: "We analyze.",
        description:
          "AI-powered market research + human strategic review. We map your competitive landscape, define your ideal customer profile, and identify where your positioning has gaps.",
      },
      {
        title: "We present.",
        description:
          "A live pitching session where we walk you through the findings — including your Opportunity Score, a proprietary metric that shows exactly how much untapped GTM potential your business has.",
      },
    ],
    deliverables: [
      "Market landscape analysis",
      "Competitive benchmarking",
      "ICP analysis",
      "Positioning framework",
      "Opportunity Score",
      "Initial brand voice capture",
    ],
    pricing: "Free. You invest your context. We invest the analysis.",
    cta: { label: "Get your free GTM diagnostic →", href: "/start" },
  },

  sprint: {
    headline: "Sprint: Your go-to-market, built in four days.",
    intro: [
      "The Sprint is where it gets real. One deep-dive extraction session with you — and four days later, a complete go-to-market suite built from your actual expertise, not templates.",
      "This isn't a content package. It's a strategic GTM cycle — positioning, messaging, thought leadership, and sales enablement, all connected and all built from a single conversation.",
    ],
    timeline: [
      {
        day: "Day 0",
        description:
          "Pre-Sprint prep — We review your Foundation data and prepare customized extraction questions.",
      },
      {
        day: "Day 1",
        description:
          "Extraction Session (60–90 min) — A live, recorded storytelling-based session where we surface insights you haven't articulated yet. You talk to the strategist who builds everything.",
      },
      {
        day: "Days 1–2",
        description:
          "Processing — Transcript analysis, Extraction Summary, Brand Voice Database, content briefs for every asset.",
      },
      {
        day: "Days 2–4",
        description:
          "Production — AI-powered content production with human taste review on every single asset.",
      },
      {
        day: "Day 4",
        description:
          "Delivery — Live presentation of every asset + deployment recommendations.",
      },
      {
        day: "Days 4–7",
        description:
          "Revision window — One round of refinement within 3 business days.",
      },
    ] as SprintDay[],
    assetsDescription:
      "Every Sprint produces 30 strategic assets across your full buyer journey — from awareness to sales enablement. The exact mix is tailored during your Foundation diagnostic, because a consulting firm needs different formats than an enterprise SaaS platform. What stays constant: every stage of the funnel is covered, every asset has a job.",
    additionalDeliverables: [
      "Extraction Summary Report",
      "Brand Voice Database update",
      "Deployment recommendations — when and where to publish each asset",
    ],
    pricing:
      "Rp 15,000,000 (fixed per Sprint)",
    pricingComparison:
      "That's ~Rp 500,000 per strategic asset. A single article from a traditional agency costs Rp 3,500,000+ and takes 2–4 weeks. We deliver 30 assets in 4 days.",
    addOn: {
      name: "Activation Workshop",
      price: "Rp 3,000,000",
      description:
        "A hands-on session where we help your team deploy every asset — so nothing sits in a folder collecting dust.",
    },
    prerequisite: "Foundation must be completed first. No exceptions.",
    cta: { label: "Get your free GTM diagnostic →", href: "/start" },
  },

  engine: {
    headline: "Engine: Your GTM keeps running.",
    intro: [
      "The Engine is what happens when you decide the Sprint wasn't a one-time thing.",
      "Every month: two full Sprint cycles, 60+ strategic assets, dedicated extraction sessions, and a monthly strategic review. The longer we work together, the sharper the output — because your Brand Voice Database keeps compounding.",
    ],
    monthlyOutput: [
      { label: "Full GTM cycles", value: "2" },
      { label: "Strategic assets", value: "60+" },
      { label: "Extraction sessions", value: "2" },
      { label: "Strategic review", value: "1× (60 min)" },
      { label: "Brand Voice Database updates", value: "Ongoing" },
      { label: "Leading Indicator Dashboard", value: "Real-time access" },
    ] as EngineOutput[],
    benefits: [
      "Monthly Strategic Review (60 min) — Not a status call. A working session.",
      "Leading Indicator Dashboard — Real-time visibility into GTM performance.",
      "Compounding Brand Voice Database — Gets sharper every month.",
      "Quarterly Strategy Session (90–120 min) — Extended strategic alignment.",
      "Credit Rollover — Unused credits roll over for up to 1 month.",
      "Priority Scheduling — Engine clients get priority.",
    ],
    valueComparison: [
      "Two standalone Sprints = Rp 30,000,000/month. Engine = Rp 25,000,000/month — plus strategic review, dashboard, quarterly sessions, and compounding brand intelligence. Save 17%+ and get significantly more value.",
      "Compared to in-house: Marketing Manager + Content Writer + Designer + Tools = Rp 38–67M/month. GT Engine: Rp 25M/month, all-in.",
    ],
    prerequisite: "At least one Sprint must be completed first.",
    cta: { label: "Get your free GTM diagnostic →", href: "/start" },
  },

  addOns: {
    intro: "Optional extras that make the core tiers hit harder.",
    items: [
      {
        name: "Activation Workshop",
        price: "Rp 3,000,000 per session",
        forWhom: "Sprint or Engine clients",
        what: "Hands-on deployment workshop — LinkedIn publishing, WhatsApp sales enablement, content calendar setup, team Q&A.",
        why: "Assets that don't get deployed don't generate pipeline.",
      },
      {
        name: "Landing Page",
        price: "Rp 7,000,000",
        forWhom: "Sprint or Engine clients",
        what: "Custom-coded landing page. Responsive, analytics setup, one round of revision.",
        why: "When your GTM drives traffic somewhere, that somewhere needs to convert.",
      },
    ] as AddOn[],
  },

  pricingSummary: {
    headline: "Clear pricing. No surprises.",
    sub: "Every engagement starts with Foundation. You see the quality before you invest.",
    valueAnchor:
      "All prices in Indonesian Rupiah. Foundation is always free. Sprint and Engine pricing is fixed — no hidden fees, no scope creep charges.",
  },

  cta: {
    headline: "Start with the diagnostic. Decide from there.",
    sub: "It's free, it's thorough, and it'll show you exactly where your go-to-market stands. No commitment, no pitch — just clarity.",
    cta: { label: "Get your free GTM diagnostic →", href: "/start" },
  },
};

// ─────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────

export const aboutContent = {
  hero: {
    headline:
      "I didn't start in marketing. I started in the messy middle of actually running a business.",
    subtext:
      "That's why GreatTastemaker doesn't work like an agency. It works like a system built by someone who's been on your side of the table.",
  },

  origin: {
    sectionLabel: "The backstory",
    paragraphs: [
      "I dropped out of BINUS in my fourth semester — with a perfect GPA.",
      "That part surprises people. I wasn't struggling. I was carrying a 4.0, competing in business plan and business case competitions, and doing well by every metric the system measured. I wasn't running away from academia. But then COVID hit, everything moved online, and the gap became impossible to ignore: the university couldn't deliver the same experience remotely. The lectures that used to push me were now just screens.",
      "Meanwhile, outside of class, I was learning faster than I'd ever learned inside it.",
      "So I made the call. Not out of frustration — out of honesty. The best education I was going to get wasn't going to come from finishing the degree. It was going to come from building something real.",
      "That something became Wisdom Garut — an operation I built from zero. No team, no playbook, no safety net. Within four months, we'd grown to 47 people and were doing over Rp 700 million a month in revenue. By month six, the system was stable and performing at peak.",
      "But here's the part that changed how I think about everything since:",
      "Wisdom Garut was my first time seriously selling a product to a real market. And the product went viral. It was received far better than I expected. The thing is — I knew the product was good, but I also knew it wasn't the best. In Jakarta, you could find better versions at higher price points. Objectively, there were tastier options out there.",
      "It didn't matter. It worked — because the marketing met the right customers with the right use case at the right moment.",
      "That was the first time I understood, really understood: **knowing your customer is more important than having the best product.** You can build something incredible — but if you don't understand who it's actually for, and why *they* would care, none of it matters.",
      "That lesson never left me.",
      "From there, I moved into scaling retail brands — taking clients from Rp 100 million to over Rp 1 billion a month through performance marketing. Meta ads, content testing, creative iteration. Hundreds of campaigns. Thousands of data points. The systems thinking that comes from needing every rupiah of ad spend to justify itself.",
      "And the same pattern kept showing up — just in different shapes.",
    ],
  },

  insight: {
    sectionLabel: "The insight",
    paragraphs: [
      "Working with dozens of business owners, I kept seeing the same thing I'd learned at Wisdom Garut — but in reverse.",
      "Back then, my product wasn't the best, but the marketing worked because I understood the customer. Now, I was meeting founders with *incredible* products — but their marketing didn't work, because nobody had taken the time to understand how the customer actually thinks about what they sell.",
      "The best ones — the founders who really knew their product, who could explain their value proposition in a way that made you *want* to buy — they were terrible at turning that into marketing content. Not because they lacked intelligence. Because they lacked time. And because every agency they'd hired sent a twenty-four-year-old copywriter who spent forty-five minutes Googling their industry before writing something generic.",
      "The knowledge was there. The expertise was there. The conviction was there.",
      "But nobody had figured out how to **extract** it properly — and turn it into something the market would actually pay attention to.",
      "That's the gap. Not a content gap. Not a strategy gap. An *extraction* gap.",
      "The most effective marketing doesn't come from marketers who guess. It comes from someone who sits down with the person who built the product — and knows how to pull the real story out.",
    ],
    pullQuote:
      "Knowing your customer is more important than having the best product.",
  },

  method: {
    sectionLabel: "How that became GreatTastemaker",
    intro: "GreatTastemaker was built on three convictions:",
    convictions: [
      {
        lead: "First — the person who talks to you should be the person who builds the strategy.",
        body: "Not a salesperson. Not an account manager. Not someone who's going to \"brief the team\" after the call and hope the nuance survives. When you talk to me, that conversation becomes the raw material for everything we produce. Nothing gets lost in translation because there's no translation layer.",
      },
      {
        lead: "Second — speed is a strategic advantage, not a shortcut.",
        body: "I'd spent years watching businesses lose momentum because their marketing couldn't keep up with their ambition. A positioning document that takes six weeks to deliver is a positioning document that's already outdated by the time it arrives. GreatTastemaker delivers a full go-to-market suite in four days — not by cutting corners, but by building systems that make speed possible without sacrificing depth.\n\nPart of that system is AI. I'm not going to pretend otherwise. But here's what matters: AI handles the processing, the structuring, the adaptation across formats. The strategic thinking — the extraction, the positioning, the editorial judgment about what to say and how to say it — that's human. That's me.\n\nI've built 100,000 followers in three months through organic content. I know what makes people stop scrolling. But more importantly, I know the difference between content that gets attention and content that builds a business. GreatTastemaker is built for the second kind.",
      },
      {
        lead: "Third — if it doesn't work for the business, nothing else matters.",
        body: "I've run P&Ls. I've managed ad budgets where every rupiah had to earn its place. That operator mindset is embedded in everything GT produces. We don't make \"content.\" We make go-to-market assets — each one designed for a specific stage in your sales funnel, with a specific job to do.\n\nThat's why we start every engagement with a diagnostic, not a pitch. I'd rather show you where your go-to-market actually stands — for free — and let the clarity speak for itself.",
      },
    ],
  },

  cta: {
    headline:
      "Now you know the person. See what the system can do for you.",
    sub: "The GTM diagnostic is free, takes a few minutes of your time, and gives you a clear picture of where your go-to-market stands. No commitment, no pitch — just clarity from someone who's been in your shoes.",
    cta: { label: "Get your free GTM diagnostic →", href: "/start" },
  },
};

// ─────────────────────────────────────────────
// START PAGE
// ─────────────────────────────────────────────

export const startContent = {
  hero: {
    headline: "Let's start with clarity.",
    subtext:
      "Tell us about your business and your biggest go-to-market challenge. Takes about 3 minutes.",
    subtextLine2:
      "No commitment. No pitch on the other end. Just a clear picture of where you are and where the opportunities are.",
  },

  formHeader: "About you and your business",

  reassurance: {
    headline: "What happens next?",
    paragraphs: [
      "Once you submit, we review your responses personally — not with an auto-reply. Within 2 business days, you'll hear back with an initial read on your go-to-market situation and a recommendation for next steps.",
      "If there's a fit, we'll suggest the right engagement tier for your situation. If there's not, we'll tell you that too — and point you in a direction that makes more sense.",
      "Either way, you walk away with clarity.",
    ],
  },

  thankYou: {
    headline: "Got it. We're on it.",
    paragraphs: [
      "Thanks for taking the time — it tells us you're serious about getting your go-to-market right, and we take that seriously too.",
      "You'll hear from us within 2 business days with an initial read on your situation. In the meantime, if you want to dig deeper into how we work:",
    ],
    links: [
      { label: "How GreatTastemaker works →", href: "/how-it-works" },
      { label: "The story behind the method →", href: "/about" },
    ],
  },
};
