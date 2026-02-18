"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";
import { howItWorksContent } from "@/lib/content";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function SprintDetail() {
  const { sprint } = howItWorksContent;

  return (
    <SectionWrapper bg="primary" padding="content" maxWidth="text" id="sprint">
      <ScrollReveal>
        <SectionHeading as="h2" size="h2">
          {sprint.headline}
        </SectionHeading>
      </ScrollReveal>

      <div className="mt-8 space-y-4">
        {sprint.intro.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
              {p}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-12">
        <ScrollReveal>
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-6">
            How the Sprint works:
          </h3>
        </ScrollReveal>
        <div className="space-y-4">
          {sprint.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="flex gap-4 rounded-lg border border-border-light bg-bg-secondary p-4"
            >
              <span className="font-sans font-semibold text-[var(--text-body-sm)] text-[var(--accent)] whitespace-nowrap min-w-[70px]">
                {item.day}
              </span>
              <p className="font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What you get */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-lg text-text-primary mb-3">
            What you get: 30 strategic assets
          </h3>
          <p className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary">
            {sprint.assetsDescription}
          </p>
        </div>
      </ScrollReveal>

      {/* Additional deliverables */}
      <ScrollReveal delay={0.2}>
        <div className="mt-8">
          <h4 className="font-sans font-semibold text-[var(--text-body)] text-text-primary mb-3">
            Additional Sprint deliverables:
          </h4>
          <ul className="space-y-2">
            {sprint.additionalDeliverables.map((item, i) => (
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
        <div className="mt-12 rounded-lg border border-border-light bg-bg-secondary p-6">
          <p className="font-sans font-semibold text-xl text-text-primary">
            {sprint.pricing}
          </p>
          <p className="mt-3 font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-secondary">
            {sprint.pricingComparison}
          </p>
          <div className="mt-4 pt-4 border-t border-border-light">
            <p className="font-sans font-semibold text-[var(--text-body-sm)] text-text-primary">
              Optional add-on: {sprint.addOn.name} ({sprint.addOn.price})
            </p>
            <p className="mt-1 font-sans text-[var(--text-body-sm)] text-text-secondary">
              {sprint.addOn.description}
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="mt-6 font-sans text-[var(--text-body-sm)] italic text-text-tertiary">
          {sprint.prerequisite}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="mt-8">
          <Button asChild className="w-full sm:w-auto">
            <Link href={sprint.cta.href}>{sprint.cta.label}</Link>
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
