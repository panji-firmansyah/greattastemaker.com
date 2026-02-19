"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

export function CTASection() {
  const { cta } = homeContent;

  return (
    <SectionWrapper bg="dark" padding="cta" className="relative overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-[var(--accent-muted)] to-transparent opacity-20 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif font-bold text-[var(--text-display)] leading-[1] text-[var(--text-on-dark)] mb-6">
            {cta.headline}
          </h2>
          <p className="font-sans text-xl md:text-2xl text-[var(--text-on-dark-secondary)] max-w-2xl mx-auto mb-12">
            {cta.sub}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="h-14 px-10 text-lg btn-magnetic">
              <Link href={cta.cta.href}>{cta.cta.label}</Link>
            </Button>
            <p className="font-sans text-sm text-[var(--text-on-dark-secondary)] opacity-60">
              or email hello@greattastemaker.com
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
