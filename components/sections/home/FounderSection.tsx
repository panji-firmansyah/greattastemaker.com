"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { homeContent } from "@/lib/content";

export function FounderSection() {
  const { founder } = homeContent;

  return (
    <SectionWrapper bg="dark" padding="content">
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16 items-start">
        {/* Photo placeholder */}
        <ScrollReveal>
          <div className="aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-lg bg-bg-dark-secondary border border-[var(--border-dark)] flex items-center justify-center lg:sticky lg:top-24">
            <span className="font-serif font-semibold text-5xl text-[var(--text-on-dark-secondary)] opacity-40">
              PF
            </span>
          </div>
        </ScrollReveal>

        {/* Text */}
        <div>
          <SectionLabel onDark>{founder.sectionLabel}</SectionLabel>
          <ScrollReveal>
            <SectionHeading as="h2" size="h2" onDark>
              {founder.headline}
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-8 space-y-6">
            {founder.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <p className="font-sans text-[var(--text-body)] leading-[1.7] text-[var(--text-on-dark-secondary)]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <Link
              href={founder.link.href}
              className="mt-8 inline-block font-sans font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              {founder.link.label}
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
