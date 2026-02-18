import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Great Tastemaker — GTM Engine untuk B2B",
    template: "%s | Great Tastemaker",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: "Great Tastemaker — GTM Engine untuk B2B",
    description: "Product knowledge Anda, siap di pasar. Dalam 4 hari.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Great Tastemaker — GTM Engine untuk B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Tastemaker — GTM Engine untuk B2B",
    description: "Product knowledge Anda, siap di pasar. Dalam 4 hari.",
    images: ["/og-image.png"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
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
      inLanguage: "id-ID",
    },
    {
      "@type": "Service",
      name: "GTM Sprint",
      provider: { "@id": `${SITE_CONFIG.url}/#organization` },
      description:
        "Satu siklus produksi GTM penuh dalam 4 hari. Dari sesi ekstraksi ke 50+ aset siap deploy.",
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
      lang="id"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
