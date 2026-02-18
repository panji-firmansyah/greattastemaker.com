"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ClientLogoBar } from "@/components/common/ClientLogoBar";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { socialProof } from "@/lib/content";

export function SocialProofSection() {
  // Graceful degradation: render nothing if no content
  if (!socialProof.sectionVisible) return null;

  const hasLogos = socialProof.logos.length > 0;
  const hasTestimonials = socialProof.testimonials.length > 0;

  if (!hasLogos && !hasTestimonials) return null;

  return (
    <SectionWrapper bg="secondary" padding="content">
      {hasLogos && (
        <ScrollReveal>
          <ClientLogoBar logos={socialProof.logos} />
        </ScrollReveal>
      )}

      {hasTestimonials && (
        <div className={cn(
          "grid gap-6 max-w-content-cards mx-auto",
          { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3" }[Math.min(socialProof.testimonials.length, 3) as 1 | 2 | 3],
          hasLogos && "mt-12"
        )}>
          {socialProof.testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
