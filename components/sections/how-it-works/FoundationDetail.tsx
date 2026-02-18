"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";
import { howItWorksContent } from "@/lib/content";

export function FoundationDetail() {
  const { foundation } = howItWorksContent;

  return (
    <SectionWrapper bg="secondary" padding="content" maxWidth="text" id="foundation">
      <ScrollReveal>
        <SectionHeading as="h2" size="h2">
          {foundation.headline}
        </SectionHeading>
      </ScrollReveal>

      <div className="mt-8 space-y-4">
        {foundation.intro.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
              {p}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* What happens — steps */}
      <div className="mt-12">
        <ScrollReveal>
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-6">
            What happens:
          </h3>
        </ScrollReveal>
        <div className="space-y-8">
          {foundation.steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div>
                <p className="font-sans font-semibold text-[var(--text-body)] text-text-primary">
                  Step {i + 1} — {step.title}
                </p>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-4">
            What you get — The Strategic 360 Diagnostic includes:
          </h3>
          <ul className="space-y-2">
            {foundation.deliverables.map((item, i) => (
              <li
                key={i}
                className="font-sans text-[var(--text-body)] text-text-secondary flex items-start gap-2"
              >
                <span className="text-[var(--accent)] mt-1.5 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Pricing */}
      <ScrollReveal delay={0.3}>
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-2">
            What it costs:
          </h3>
          <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
            {foundation.pricing}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="mt-10">
          <Button asChild className="w-full sm:w-auto">
            <Link href={foundation.cta.href}>{foundation.cta.label}</Link>
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
