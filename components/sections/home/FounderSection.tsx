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
    <SectionWrapper bg="dark" padding="content" className="relative overflow-hidden">
      {/* Abstract dark blob background for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-muted)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid gap-16 lg:grid-cols-12 items-center">
        {/* Photo placeholder / Editorial Graphic */}
        <div className="lg:col-span-5 lg:order-last">
          <ScrollReveal>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              {/* Placeholder for real photo. For now, a stylish typographic composition. */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-tertiary)]">
                <span className="font-serif italic text-9xl text-[var(--text-on-dark)] opacity-10">PF</span>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-sans text-xs tracking-widest uppercase text-[var(--accent)] mb-2">The Founder</p>
                <p className="font-serif text-2xl text-white italic">&quot;Marketing paling efektif datang dari mereka yang membangun produknya.&quot;</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-7">
          <SectionLabel onDark>{founder.sectionLabel}</SectionLabel>
          <ScrollReveal>
            <SectionHeading as="h2" size="h2" onDark className="mb-10">
              {founder.headline}
            </SectionHeading>
          </ScrollReveal>

          <div className="space-y-8">
            {founder.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <p className={`
                    font-sans text-[var(--text-body-lg)] leading-[1.8] text-[var(--text-on-dark-secondary)]
                    ${i === 0 ? "first-letter:float-left first-letter:text-5xl first-letter:pr-3 first-letter:font-serif first-letter:text-[var(--accent)]" : ""}
                `}>
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--accent)]" />
              <Link
                href={founder.link.href}
                className="font-serif italic text-xl text-[var(--text-on-dark)] transition-colors hover:text-[var(--accent)]"
              >
                {founder.link.label} &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
