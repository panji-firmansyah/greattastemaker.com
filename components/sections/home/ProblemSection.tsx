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
    <SectionWrapper bg="primary" padding="content" className="relative overflow-visible">
      {/* Texture is Global, but added here for extra depth if needed, or remove if redundant. Keeping for now as per plan to ensure quality. */}
      {/* Actually PaperGrain opacity was boosted. Stacking it might be too much. Let's remove local PaperGrain if global LightLeak provides enough atmosphere, OR keep it if we want specific paper feel on this section. The plan said "Tangible". Real paper has grain. I'll keep it. */}
      <PaperGrain />

      <div className="relative z-10 text-center">
        <SectionLabel>{problem.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" className="max-w-content-text mx-auto mb-20">
            {problem.headline}
          </SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="grid gap-8 md:grid-cols-3 max-w-content-cards mx-auto items-start">
          {problem.cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={staggerItemVariants}
              // Stagger effect: push 2nd and 3rd cards down
              className={`
                tangible-card relative bg-white p-8 lg:p-10 text-left rounded-xl
                border border-[var(--border-light)]
                ${i === 1 ? 'md:mt-16' : i === 2 ? 'md:mt-32' : ''}
              `}
            >
              {/* Decorative pin or tape effect could go here */}
              <h3 className="font-serif font-bold text-2xl text-text-primary mb-4">
                {card.title}
              </h3>
              <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
                {card.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="mt-32 font-sans italic text-2xl md:text-3xl font-light leading-[1.4] text-text-secondary max-w-content-text mx-auto">
            {problem.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
