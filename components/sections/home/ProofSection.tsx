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
    <SectionWrapper bg="primary" padding="content" className="relative">
      <PaperGrain />
      <div className="relative z-10 text-center">
        <SectionLabel>{proof.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" className="max-w-content-text mx-auto">
            {proof.headline}
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary max-w-content-text mx-auto">
            {proof.scenarioFraming}
          </p>
        </ScrollReveal>

        {/* Asset cards */}
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-content-cards mx-auto">
          {proof.assets.map((asset) => (
            <motion.div
              key={asset.title}
              variants={staggerItemVariants}
              className="group rounded-lg border border-border-light bg-bg-primary p-6 text-left transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex items-start gap-3">
                <FileText
                  className="h-5 w-5 text-text-tertiary shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-sans font-semibold text-[var(--text-body)] text-text-primary">
                    {asset.title}
                  </h3>
                  <p className="mt-2 font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-secondary">
                    {asset.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="mt-12 font-sans italic text-[var(--text-body-lg)] leading-[1.7] text-text-secondary">
            {proof.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
