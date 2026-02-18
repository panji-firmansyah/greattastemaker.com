"use client";

import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PaperGrain } from "@/components/common/PaperGrain";
import { aboutContent } from "@/lib/content";

export function OriginStory() {
  const { origin } = aboutContent;

  return (
    <SectionWrapper bg="primary" padding="content" className="relative">
      <PaperGrain />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16 items-start">
        {/* Photo placeholder — sticky on desktop */}
        <ScrollReveal>
          <div className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-lg bg-bg-secondary border border-border-light flex items-center justify-center lg:sticky lg:top-24">
            <span className="font-serif font-semibold text-5xl text-text-tertiary opacity-40">
              PF
            </span>
          </div>
        </ScrollReveal>

        {/* Text */}
        <div>
          <SectionLabel>{origin.sectionLabel}</SectionLabel>
          <div className="space-y-6">
            {origin.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={0.05 * (i + 1)}>
                {paragraph.startsWith("**") ? (
                  <p
                    className="font-sans text-[var(--text-body)] leading-[1.7] text-text-primary font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                    }}
                  />
                ) : (
                  <p
                    className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
                        .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                    }}
                  />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
