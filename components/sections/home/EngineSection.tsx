"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/StaggerContainer";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

const engine = homeContent.engine;

export function EngineSection() {
  return (
    <section id="engine" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>{engine.label}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionHeading className="mt-4">{engine.headline}</SectionHeading>
        </ScrollReveal>

        {/* Phase cards */}
        <StaggerContainer className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 md:block"
            style={{
              background:
                "linear-gradient(to right, transparent 10%, rgba(34,211,238,0.2) 30%, rgba(34,211,238,0.2) 70%, transparent 90%)",
            }}
          />

          {engine.phases.map((phase) => (
            <StaggerItem key={phase.number}>
              <GlassCard className="relative h-full">
                <span className="section-number">{phase.number}</span>
                <h3 className="mt-3 text-2xl font-bold text-zinc-50">
                  {phase.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  {phase.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2} className="mt-10">
          <Button asChild variant="link">
            <Link href={engine.cta.href}>
              {engine.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
