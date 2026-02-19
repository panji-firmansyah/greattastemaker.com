import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { MotionProvider } from "@/components/common/MotionProvider";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "GreatTastemaker — Your Product Deserves a Better Story",
    template: "%s — GreatTastemaker",
  },
  description:
    "We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months.",
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: "GreatTastemaker — Your Product Deserves a Better Story",
    description:
      "We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    // OG image auto-generated via app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "GreatTastemaker — Your Product Deserves a Better Story",
    description:
      "We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months.",
    // Twitter image auto-generated via app/opengraph-image.tsx
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description:
        "We're a GTM engine for B2B companies. You talk, we build your entire go-to-market — in days, not months.",
      email: SITE_CONFIG.email,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/favicon.svg`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      name: "GTM Sprint",
      provider: { "@id": `${SITE_CONFIG.url}/#organization` },
      description:
        "One deep-dive session with you. Four days later: a complete go-to-market suite — positioning, messaging, content, sales assets.",
      areaServed: { "@type": "Country", name: "Indonesia" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-bg-primary font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white focus:font-sans focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <MotionProvider>
            <Navbar />
            <main id="main-content" className="pt-16 pb-16 lg:pb-0">
              {children}
            </main>
            <Footer />
            <MobileBottomBar />
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
