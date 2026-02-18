"use client";

import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PaperGrain } from "@/components/common/PaperGrain";
import { aboutContent } from "@/lib/content";

export function MethodSection() {
  const { method } = aboutContent;

  return (
    <SectionWrapper bg="primary" padding="content" maxWidth="text" className="relative">
      <PaperGrain />
      <div className="relative z-10">
        <SectionLabel>{method.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary mb-10">
            {method.intro}
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {method.convictions.map((conviction, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div>
                <p className="font-sans font-semibold text-[var(--text-body)] leading-[1.7] text-text-primary">
                  {conviction.lead}
                </p>
                {conviction.body.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="mt-4 font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
