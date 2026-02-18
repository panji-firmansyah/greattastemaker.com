import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlowEffect } from "@/components/common/GlowEffect";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/sections/studi-kasus/CaseStudyCard";
import { ConceptShowcase } from "@/components/sections/studi-kasus/ConceptShowcase";
import { studiKasusContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studi Kasus",
  description:
    "Bukti kerja, bukan janji. Lihat bagaimana GTM Engine bekerja untuk perusahaan B2B.",
};

export default function StudiKasusPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <SectionHeading
            as="h1"
            subtitle={studiKasusContent.hero.subheadline}
          >
            {studiKasusContent.hero.headline}
          </SectionHeading>
        </div>
      </section>

      <CaseStudyCard />
      <div className="divider-gradient" />
      <ConceptShowcase />
      <div className="divider-gradient" />

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <GlowEffect
          variant="mixed"
          className="left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative mx-auto max-w-content px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
            {studiKasusContent.cta.headline}
          </h2>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={studiKasusContent.cta.primaryCTA.href}>
                {studiKasusContent.cta.primaryCTA.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
