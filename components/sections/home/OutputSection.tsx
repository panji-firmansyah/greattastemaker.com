"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/StaggerContainer";
import { homeContent } from "@/lib/content";

const output = homeContent.output;

export function OutputSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>{output.label}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionHeading className="mt-4">{output.headline}</SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {output.items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="glass-card flex items-center gap-4 p-5">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  {item.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2} className="mt-8">
          <p className="text-sm text-zinc-500">{output.footnote}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
