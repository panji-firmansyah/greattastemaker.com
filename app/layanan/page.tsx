import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/layanan/ServiceHero";
import { TierComparison } from "@/components/sections/layanan/TierComparison";
import { TierDetail } from "@/components/sections/layanan/TierDetail";
import { AddOnsGrid } from "@/components/sections/layanan/AddOnsGrid";
import { PricingSummary } from "@/components/sections/layanan/PricingSummary";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Sistem GTM yang terstruktur untuk perusahaan B2B. Dari GTM Foundation gratis hingga GTM Engine retainer bulanan.",
};

export default function LayananPage() {
  return (
    <>
      <ServiceHero />
      <TierComparison />
      <div className="divider-gradient" />
      <TierDetail
        id="foundation"
        number="01"
        name="GTM Foundation"
        price="Gratis"
        duration="1-2 hari"
        description="Analisis mendalam terhadap pasar, kompetitor, dan ideal customer profile Anda. Foundation memberikan kejelasan sebelum Anda mulai memproduksi aset — gratis."
        details={[
          "Market research & competitive benchmarking",
          "ICP (Ideal Customer Profile) analysis",
          "Positioning framework",
          "Opportunity Score untuk mengukur kesiapan GTM",
          "Anda hanya investasi waktu 15-30 menit untuk mengisi data",
        ]}
        note="GTM Foundation akan segera tersedia sebagai self-service. Untuk saat ini, hubungi kami untuk memulai."
      />
      <div className="divider-gradient" />
      <TierDetail
        id="sprint"
        number="02"
        name="GTM Sprint"
        price="Rp 15 Juta"
        duration="4 hari"
        description="Satu siklus produksi penuh. Dari satu sesi ekstraksi, kami hasilkan 16 base assets yang mencakup semua pillar konten Anda, plus 14 bonus credit untuk aset tambahan."
        details={[
          "1 sesi ekstraksi mendalam (60-90 menit)",
          "16 base assets: artikel, carousel, ad creative, email, landing page copy, dll.",
          "14 bonus credit untuk aset tambahan sesuai kebutuhan",
          "1 round revisi untuk semua aset",
          "Delivery dalam 4 hari kerja",
        ]}
      />
      <div className="divider-gradient" />
      <TierDetail
        id="engine"
        number="03"
        name="GTM Engine"
        price="Rp 25 Juta/bulan"
        duration="Ongoing (min. 3 bulan)"
        description="Retainer bulanan untuk produksi konten berkelanjutan. Dua siklus per bulan, masing-masing menghasilkan 32 base assets dan 28 bonus credit."
        details={[
          "2 siklus produksi per bulan",
          "32 base assets + 28 bonus credit per bulan",
          "Monthly strategic review",
          "Priority scheduling",
          "Credit rollover ke bulan berikutnya",
          "Minimum komitmen 3 bulan",
        ]}
      />
      <div className="divider-gradient" />
      <AddOnsGrid />
      <div className="divider-gradient" />
      <PricingSummary />
    </>
  );
}
