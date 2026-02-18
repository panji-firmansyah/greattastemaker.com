"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GlassCard } from "@/components/common/GlassCard";
import { Badge } from "@/components/ui/badge";
import { studiKasusContent } from "@/lib/content";

const concept = studiKasusContent.conceptShowcase;

export function ConceptShowcase() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <GlassCard hover={false} className="max-w-3xl border-dashed">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500">
              {concept.badge}
            </Badge>

            <h2 className="mt-4 text-2xl font-bold text-zinc-50 sm:text-3xl">
              {concept.title}
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-400">
              {concept.description}
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Output yang dihasilkan
              </h3>
              <ul className="mt-3 space-y-2">
                {concept.outputs.map((output) => (
                  <li
                    key={output}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
