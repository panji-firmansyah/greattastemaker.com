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
    <SectionWrapper bg="dark" padding="cta">
      <div className="text-center">
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" onDark subtitle={cta.sub}>
            {cta.headline}
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Button asChild className="w-full sm:w-auto">
              <Link href={cta.cta.href}>{cta.cta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
