"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GlassCard } from "@/components/common/GlassCard";
import { SectionLabel } from "@/components/common/SectionLabel";

interface TierDetailProps {
  id: string;
  number: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  details: string[];
  note?: string;
}

export function TierDetail({
  id,
  number,
  name,
  price,
  duration,
  description,
  details,
  note,
}: TierDetailProps) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionLabel>{number}</SectionLabel>
          <h3 className="mt-3 text-2xl font-bold text-zinc-50 sm:text-3xl">
            {name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-semibold text-cyan-400">{price}</span>
            <span className="text-sm text-zinc-500">{duration}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard hover={false} className="mt-8 max-w-2xl">
            <ul className="space-y-3">
              {details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/60" />
                  {detail}
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>

        {note && (
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-sm text-zinc-500">{note}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
