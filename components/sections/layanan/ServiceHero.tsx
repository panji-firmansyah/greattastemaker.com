"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { layananContent } from "@/lib/content";

const hero = layananContent.hero;

export function ServiceHero() {
  return (
    <section className="relative pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal blur>
          <SectionHeading as="h1" subtitle={hero.subheadline}>
            {hero.headline}
          </SectionHeading>
        </ScrollReveal>
      </div>
    </section>
  );
}
