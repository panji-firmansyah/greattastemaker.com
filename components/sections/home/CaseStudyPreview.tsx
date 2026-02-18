"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

const caseStudy = homeContent.caseStudy;

export function CaseStudyPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>{caseStudy.label}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionHeading className="mt-4">
            {caseStudy.headline}
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudy.studies.map((study, i) => (
            <ScrollReveal key={study.title} delay={0.15 + i * 0.1}>
              <GlassCard
                className={`h-full ${
                  !study.isActive ? "border-dashed opacity-80" : ""
                }`}
              >
                <Badge
                  variant="outline"
                  className={
                    study.isActive
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                      : "border-zinc-700 text-zinc-500"
                  }
                >
                  {study.badge}
                </Badge>
                <h3 className="mt-4 text-xl font-semibold text-zinc-50">
                  {study.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-400">
                  {study.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-10">
          <Button asChild variant="link">
            <Link href={caseStudy.cta.href}>
              {caseStudy.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
