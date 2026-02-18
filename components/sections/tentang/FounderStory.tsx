"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GlassCard } from "@/components/common/GlassCard";
import { StatCard } from "@/components/common/StatCard";
import { tentangContent } from "@/lib/content";

const founder = tentangContent.founder;

export function FounderStory() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <GlassCard hover={false} className="max-w-3xl">
            <blockquote className="border-l-2 border-cyan-400/40 pl-6">
              <p className="text-lg italic leading-relaxed text-zinc-300">
                &ldquo;{founder.insight}&rdquo;
              </p>
            </blockquote>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-10 max-w-2xl leading-relaxed text-zinc-400">
            {founder.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex gap-12">
            {founder.stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
