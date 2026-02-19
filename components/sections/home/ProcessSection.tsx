"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function ProcessSection() {
  const { process } = homeContent;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper bg="secondary" padding="content" id="process" className="overflow-hidden">
      <div className="text-center">
        <SectionLabel>{process.sectionLabel}</SectionLabel>
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" className="max-w-content-text mx-auto">
            {process.headline}
          </SectionHeading>
        </ScrollReveal>
      </div>

      {/* Vertical timeline */}
      <div ref={containerRef} className="mt-24 max-w-content-text mx-auto relative pl-4 md:pl-0">

        {/* Animated Line Container - perfectly centered on circles */}
        <div className="absolute left-[34px] md:left-[23px] top-0 bottom-12 w-1 md:w-0.5 bg-[var(--border-light)] z-0">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent-glow)]"
          />
        </div>

        {process.steps.map((step, i) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0.2, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }} // Re-triggers for effect
            transition={{ duration: 0.8, ease }}
            className="relative flex gap-8 md:gap-12 mb-20 last:mb-0 group"
          >
            {/* Number circle */}
            <div className={`
                relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full 
                bg-[var(--bg-secondary)] border-2 border-[var(--border-light)]
                font-serif font-bold text-lg text-text-tertiary
                transition-all duration-500
                group-hover:border-[var(--accent)] group-hover:text-[var(--accent-text)] group-hover:scale-110
                group-[.active]:border-[var(--accent)] group-[.active]:text-[var(--accent-text)]
            `}>
              <span className="relative z-10">{i + 1}</span>

              {/* Active Glow Backdrop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1.5 }}
                className="absolute inset-0 bg-[var(--accent)] opacity-20 blur-xl rounded-full -z-10"
              />
            </div>

            {/* Content */}
            <div className="pt-1">
              <h3 className="font-serif font-bold text-3xl text-text-primary mb-2">
                {step.name}
              </h3>
              <p className="font-sans text-sm tracking-widest uppercase font-medium text-[var(--accent-text)] mb-4">
                {step.label}
              </p>
              <p className="font-sans text-[var(--text-body-lg)] leading-[1.7] text-text-secondary">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Differentiator */}
      <ScrollReveal delay={0.2}>
        <div className="mt-24 text-center">
          <p className="font-serif italic text-2xl md:text-3xl font-light text-text-secondary max-w-content-text mx-auto mb-12">
            {process.differentiator}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="w-full sm:w-auto btn-magnetic">
              <Link href={process.primaryCTA.href}>{process.primaryCTA.label}</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full sm:w-auto btn-magnetic">
              <Link href={process.secondaryCTA.href}>{process.secondaryCTA.label}</Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
