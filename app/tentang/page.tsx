import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FounderStory } from "@/components/sections/tentang/FounderStory";
import { Philosophy } from "@/components/sections/tentang/Philosophy";
import { tentangContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Dibangun oleh marketer yang sudah ada di kedua sisi. Great Tastemaker lahir dari pengalaman langsung di intersection antara product knowledge dan market execution.",
};

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <SectionHeading as="h1" subtitle={tentangContent.hero.subheadline}>
            {tentangContent.hero.headline}
          </SectionHeading>
        </div>
      </section>

      <FounderStory />
      <div className="divider-gradient" />
      <Philosophy />
    </>
  );
}
