"use client";

import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PullQuote } from "@/components/common/PullQuote";
import { aboutContent } from "@/lib/content";

export function InsightSection() {
  const { insight } = aboutContent;

  return (
    <SectionWrapper bg="secondary" padding="content" maxWidth="text">
      <SectionLabel>{insight.sectionLabel}</SectionLabel>
      <div className="space-y-6">
        {insight.paragraphs.map((paragraph, i) => (
          <ScrollReveal key={i} delay={0.05 * (i + 1)}>
            <p
              className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary"
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
                  .replace(/\*(.*?)\*/g, "<em>$1</em>"),
              }}
            />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3}>
        <PullQuote>{insight.pullQuote}</PullQuote>
      </ScrollReveal>
    </SectionWrapper>
  );
}
