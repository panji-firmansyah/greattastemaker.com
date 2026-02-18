"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GlowEffect } from "@/components/common/GlowEffect";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

const cta = homeContent.sprintCTA;

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <GlowEffect
        variant="mixed"
        className="left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-content px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              {cta.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-zinc-400">{cta.body}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button asChild size="lg">
                <Link href={cta.primaryCTA.href}>
                  {cta.primaryCTA.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-zinc-500">{cta.secondaryText}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
