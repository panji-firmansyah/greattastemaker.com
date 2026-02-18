import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export const SITE_CONFIG = {
  name: "GreatTastemaker",
  tagline: "Your Product Deserves a Better Story",
  description:
    "We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months.",
  url: "https://www.greattastemaker.com",
  email: "hello@greattastemaker.com",
  whatsappNumber: "6282120060400",
} as const;

export const FOOTER_NAV = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Start", href: "/start" },
  ],
  services: [
    { label: "GTM Foundation", href: "/how-it-works#foundation" },
    { label: "GTM Sprint", href: "/how-it-works#sprint" },
    { label: "GTM Engine", href: "/how-it-works#engine" },
  ],
} as const;
