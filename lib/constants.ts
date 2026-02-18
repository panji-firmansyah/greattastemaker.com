import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Studi Kasus", href: "/studi-kasus" },
  { label: "Tentang", href: "/tentang" },
];

export const SITE_CONFIG = {
  name: "Great Tastemaker",
  tagline: "GTM Engine untuk B2B",
  description:
    "Great Tastemaker mengekstrak product knowledge dari tim Anda dan mengolahnya menjadi aset GTM siap deploy dalam 4 hari.",
  url: "https://www.greattastemaker.com",
  email: "hello@greattastemaker.com",
  whatsappNumber: "6282120060400",
} as const;

export const FOOTER_NAV = {
  navigasi: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Studi Kasus", href: "/studi-kasus" },
    { label: "Tentang", href: "/tentang" },
  ],
  layanan: [
    { label: "GTM Foundation", href: "/layanan#foundation" },
    { label: "GTM Sprint", href: "/layanan#sprint" },
    { label: "GTM Engine", href: "/layanan#engine" },
    { label: "Add-Ons", href: "/layanan#addons" },
  ],
} as const;

export const SERVICE_OPTIONS = [
  "GTM Sprint (satu siklus, 4 hari)",
  "GTM Engine (retainer bulanan)",
  "GTM Foundation (analisis gratis)",
  "Konsultasi dulu — belum yakin",
  "Lainnya",
] as const;
