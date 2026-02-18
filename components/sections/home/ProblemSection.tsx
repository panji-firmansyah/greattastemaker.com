"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/common/StaggerContainer";
import { PaperGrain } from "@/components/common/PaperGrain";
import { homeContent } from "@/lib/content";

export function ProblemSection() {
  const { problem } = homeContent;

  return (
    <SectionWrapper bg="primary" padding="content" className="relative">
      <PaperGrain />
      <div className="relative z-10 text-center">
        <SectionLabel>{problem.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" className="max-w-content-text mx-auto">
            {problem.headline}
          </SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3 max-w-content-cards mx-auto">
          {problem.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItemVariants}
              className="rounded-lg border border-border-light bg-bg-primary p-6 lg:p-8 text-left"
            >
              <h3 className="font-sans font-semibold text-lg text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
                {card.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="mt-12 font-sans italic text-[var(--text-body-lg)] leading-[1.7] text-text-secondary max-w-content-text mx-auto">
            {problem.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
