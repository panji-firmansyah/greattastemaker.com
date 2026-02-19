"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";
import { PaperGrain } from "@/components/common/PaperGrain";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative bg-bg-dark -mt-16 pt-16 min-h-[90vh] flex items-center overflow-hidden">
      <PaperGrain />

      {/* Abstract Background Blur (Local, stronger than global light leak) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-content-full px-5 md:px-10 py-[var(--space-hero)] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">

          {/* Left: Big Headline */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="font-serif font-bold text-[var(--text-display)] leading-[0.9] tracking-[-0.04em] text-[var(--text-on-dark)]"
            >
              {hero.headline}
            </motion.h1>
          </div>

          {/* Right: Subhead + CTAs */}
          <div className="lg:col-span-4 lg:pb-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ height: "100%" }} // Animated Line
              className="hidden lg:block w-px bg-[var(--accent)] opacity-30 origin-top h-[120px]"
            />

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="font-sans text-[var(--text-body-lg)] leading-[1.6] text-[var(--text-on-dark-secondary)]"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Button asChild size="default" className="w-full sm:w-auto btn-magnetic">
                <Link href={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
              </Button>
              <Button
                asChild
                variant="ghost-dark"
                size="default"
                className="w-full sm:w-auto btn-magnetic"
              >
                <Link href={hero.secondaryCTA.href}>
                  {hero.secondaryCTA.label}
                </Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
