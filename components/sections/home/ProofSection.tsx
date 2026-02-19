"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { StaggerContainer, staggerItemVariants } from "@/components/common/StaggerContainer";
import { PaperGrain } from "@/components/common/PaperGrain";
import { homeContent } from "@/lib/content";
import type { AssetCard } from "@/lib/types";

interface ProofSectionProps {
  variant?: "hypothetical" | "case-study";
  caseStudy?: {
    clientName: string;
    situation: string;
    outcomes: string;
    assets: AssetCard[];
    quote?: { text: string; author: string; role: string };
  };
}

export function ProofSection({ variant = "hypothetical" }: ProofSectionProps) {
  const { proof } = homeContent;

  if (variant === "case-study") {
    // Future: render real case study
    return null;
  }

  return (
    <SectionWrapper bg="primary" padding="content" className="relative overflow-visible">
      <PaperGrain />
      <div className="relative z-10 text-center">
        <SectionLabel>{proof.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" className="max-w-content-text mx-auto">
            {proof.headline}
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 mb-16 font-sans text-[var(--text-body-lg)] leading-[1.6] text-text-secondary max-w-content-text mx-auto">
            {proof.scenarioFraming}
          </p>
        </ScrollReveal>

        {/* Asset cards */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-content-cards mx-auto text-left">
          {proof.assets.map((asset, i) => (
            <motion.div
              key={asset.title}
              variants={staggerItemVariants}
              className={`
                tangible-card group relative bg-white p-6 rounded-xl border border-[var(--border-light)]
                hover:border-[var(--accent)] transition-all duration-300
                ${i % 3 === 1 ? 'lg:translate-y-4' : ''} 
                ${i % 3 === 2 ? 'lg:translate-y-8' : ''}
              `}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--bg-secondary)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                  <FileText className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-text-primary mb-2 group-hover:text-[var(--accent-text)] transition-colors">
                    {asset.title}
                  </h3>
                  <p className="font-sans text-sm leading-[1.6] text-text-secondary">
                    {asset.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="mt-20 font-serif italic text-2xl text-[var(--text-secondary)]">
            {proof.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
