"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { homeContent } from "@/lib/content";

const problem = homeContent.problem;

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>{problem.label}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionHeading className="mt-4">{problem.headline}</SectionHeading>
        </ScrollReveal>

        <div className="mt-10 max-w-2xl space-y-6">
          {problem.paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.1}>
              <p className="text-lg leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
