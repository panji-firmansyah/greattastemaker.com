"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/common/StaggerContainer";
import { PaperGrain } from "@/components/common/PaperGrain";
import { howItWorksContent } from "@/lib/content";

export function TierOverview() {
  const { tierOverview } = howItWorksContent;

  return (
    <SectionWrapper bg="primary" padding="content" className="relative">
      <PaperGrain />
      <div className="relative z-10">
        <ScrollReveal>
          <p className="text-center font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary max-w-content-text mx-auto">
            {tierOverview.intro}
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3 max-w-content-cards mx-auto">
          {tierOverview.tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItemVariants}
              className={`rounded-lg border bg-bg-primary p-6 lg:p-8 transition-colors ${
                tier.highlighted
                  ? "border-t-[3px] border-t-[var(--accent)] border-x-border-light border-b-border-light"
                  : "border-border-light"
              }`}
            >
              <p className="font-sans text-[var(--text-caption)] font-medium uppercase tracking-[0.1em] text-[var(--accent)]">
                {tier.label}
              </p>
              <h3 className="mt-3 font-serif font-semibold text-[var(--text-h3)] leading-[1.15] tracking-[-0.02em] text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-1 font-sans text-[var(--text-body-sm)] text-text-tertiary">
                {tier.subtitle}
              </p>
              <p className="mt-4 font-sans font-semibold text-xl text-text-primary">
                {tier.price}
              </p>
              <p className="mt-1 font-sans text-[var(--text-body-sm)] text-text-tertiary">
                {tier.timeline}
              </p>
              <p className="mt-4 font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-secondary">
                {tier.valueLine}
              </p>
              <Link
                href={`#${tier.anchorId}`}
                className="mt-6 inline-block font-sans font-medium text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                Learn more ↓
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
