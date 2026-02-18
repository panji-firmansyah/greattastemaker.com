"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassCard } from "@/components/common/GlassCard";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/StaggerContainer";
import { layananContent } from "@/lib/content";

const addOns = layananContent.addOns;

export function AddOnsGrid() {
  return (
    <section id="addons" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>Add-Ons</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <SectionHeading className="mt-4">Layanan tambahan</SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {addOns.map((addon) => (
            <StaggerItem key={addon.name}>
              <GlassCard className="h-full">
                <h4 className="text-lg font-semibold text-zinc-50">
                  {addon.name}
                </h4>
                <p className="mt-1 text-xl font-bold text-cyan-400">
                  {addon.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {addon.scope}
                </p>
                <div className="mt-4 space-y-1 border-t border-zinc-800/50 pt-4">
                  <p className="text-xs text-zinc-500">
                    Timeline: {addon.timeline}
                  </p>
                  {addon.prerequisite && (
                    <p className="text-xs text-zinc-500">
                      Prasyarat: {addon.prerequisite}
                    </p>
                  )}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
