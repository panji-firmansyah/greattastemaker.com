"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GlassCard } from "@/components/common/GlassCard";
import { Badge } from "@/components/ui/badge";
import { studiKasusContent } from "@/lib/content";

const cs = studiKasusContent.activeCaseStudy;

export function CaseStudyCard() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <GlassCard hover={false} className="max-w-3xl">
            <Badge className="border-none bg-cyan-400/10 text-cyan-400">
              {cs.badge}
            </Badge>

            <h2 className="mt-4 text-2xl font-bold text-zinc-50 sm:text-3xl">
              {cs.title}
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Profil Klien
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {cs.clientProfile}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Tantangan
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {cs.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Proses
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {cs.process}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Hasil
                </h3>
                <ul className="mt-2 space-y-2">
                  {cs.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-zinc-400"
                    >
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/60" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
