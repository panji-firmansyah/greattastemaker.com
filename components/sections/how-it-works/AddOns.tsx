"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/common/StaggerContainer";
import { howItWorksContent } from "@/lib/content";

export function AddOns() {
  const { addOns } = howItWorksContent;

  return (
    <SectionWrapper bg="primary" padding="content">
      <ScrollReveal>
        <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary max-w-content-text mx-auto text-center">
          {addOns.intro}
        </p>
      </ScrollReveal>

      <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 max-w-content-cards mx-auto">
        {addOns.items.map((addon) => (
          <motion.div
            key={addon.name}
            variants={staggerItemVariants}
            className="rounded-lg border border-border-light bg-bg-primary p-6 lg:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-sans font-semibold text-lg text-text-primary">
                {addon.name}
              </h3>
              <span className="font-sans font-semibold text-[var(--text-body-sm)] text-[var(--accent)] whitespace-nowrap">
                {addon.price}
              </span>
            </div>
            <p className="mt-1 font-sans text-[var(--text-caption)] text-text-tertiary">
              For: {addon.forWhom}
            </p>
            <p className="mt-3 font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-secondary">
              {addon.what}
            </p>
            <p className="mt-2 font-sans text-[var(--text-body-sm)] italic text-text-tertiary">
              {addon.why}
            </p>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
