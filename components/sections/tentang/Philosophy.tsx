"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GradientText } from "@/components/common/GradientText";
import { tentangContent } from "@/lib/content";

const philosophy = tentangContent.philosophy;

export function Philosophy() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>Filosofi</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <GradientText>{philosophy.headline}</GradientText>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {philosophy.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
