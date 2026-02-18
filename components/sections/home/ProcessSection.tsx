"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function ProcessSection() {
  const { process } = homeContent;

  return (
    <SectionWrapper bg="secondary" padding="content" id="process">
      <div className="text-center">
        <SectionLabel>{process.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" className="max-w-content-text mx-auto">
            {process.headline}
          </SectionHeading>
        </ScrollReveal>
      </div>

      {/* Vertical timeline */}
      <div className="mt-16 max-w-content-text mx-auto relative">
        {/* Connecting line */}
        <div className="absolute left-5 lg:left-6 top-0 bottom-0 w-px bg-border-light" />

        {process.steps.map((step, i) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="relative flex gap-6 lg:gap-8 mb-12 last:mb-0"
          >
            {/* Number circle */}
            <div className="relative z-10 flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full border border-border-light bg-bg-secondary font-sans font-semibold text-sm text-text-primary">
              {i + 1}
            </div>

            {/* Content */}
            <div className="pt-1">
              <h3 className="font-sans font-semibold text-lg text-text-primary">
                {step.name}
              </h3>
              <p className="mt-1 font-sans text-[var(--text-body-sm)] text-[var(--accent)] font-medium">
                {step.label}
              </p>
              <p className="mt-3 font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Differentiator */}
      <ScrollReveal delay={0.2}>
        <p className="mt-16 text-center font-sans italic text-[var(--text-body-lg)] leading-[1.7] text-text-secondary max-w-content-text mx-auto">
          {process.differentiator}
        </p>
      </ScrollReveal>

      {/* CTAs */}
      <ScrollReveal delay={0.3}>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href={process.primaryCTA.href}>{process.primaryCTA.label}</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full sm:w-auto">
            <Link href={process.secondaryCTA.href}>{process.secondaryCTA.label}</Link>
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
