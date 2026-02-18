"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/common/StaggerContainer";
import { Button } from "@/components/ui/button";
import { howItWorksContent } from "@/lib/content";
import { motion } from "framer-motion";

export function EngineDetail() {
  const { engine } = howItWorksContent;

  return (
    <SectionWrapper bg="secondary" padding="content" maxWidth="text" id="engine">
      <ScrollReveal>
        <SectionHeading as="h2" size="h2">
          {engine.headline}
        </SectionHeading>
      </ScrollReveal>

      <div className="mt-8 space-y-4">
        {engine.intro.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
              {p}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* Monthly output table */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-4">
            Monthly output:
          </h3>
          <StaggerContainer className="grid gap-3 sm:grid-cols-2">
            {engine.monthlyOutput.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItemVariants}
                className="flex items-center justify-between rounded-lg border border-border-light bg-bg-primary p-4"
              >
                <span className="font-sans text-[var(--text-body-sm)] text-text-secondary">
                  {item.label}
                </span>
                <span className="font-sans font-semibold text-[var(--text-body-sm)] text-text-primary">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-4">
            Engine-exclusive benefits:
          </h3>
          <ul className="space-y-3">
            {engine.benefits.map((benefit, i) => (
              <li
                key={i}
                className="font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-secondary flex items-start gap-2"
              >
                <span className="text-[var(--accent)] mt-1.5 text-xs">●</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Value comparison */}
      <ScrollReveal delay={0.3}>
        <div className="mt-12 space-y-4">
          <h3 className="font-sans font-semibold text-lg text-text-primary">
            Value comparison:
          </h3>
          {engine.valueComparison.map((p, i) => (
            <p
              key={i}
              className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary"
            >
              {p}
            </p>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="mt-6 font-sans text-[var(--text-body-sm)] italic text-text-tertiary">
          {engine.prerequisite}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="mt-8">
          <Button asChild className="w-full sm:w-auto">
            <Link href={engine.cta.href}>{engine.cta.label}</Link>
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
