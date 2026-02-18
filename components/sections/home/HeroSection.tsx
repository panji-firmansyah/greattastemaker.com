"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/content";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative bg-bg-dark -mt-16 pt-16">
      <div className="mx-auto max-w-content-full px-5 md:px-10 py-[var(--space-hero)] max-lg:py-[calc(var(--space-hero)*0.6)]">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="font-serif font-semibold text-[var(--text-hero)] leading-[1.15] tracking-[-0.02em] text-[var(--text-on-dark)] max-w-content-text"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-6 font-sans text-[var(--text-body-lg)] leading-[1.7] text-[var(--text-on-dark-secondary)] max-w-content-text"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button asChild size="default" className="w-full sm:w-auto">
              <Link href={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
            </Button>
            <Button
              asChild
              variant="ghost-dark"
              size="default"
              className="w-full sm:w-auto"
            >
              <Link href={hero.secondaryCTA.href}>
                {hero.secondaryCTA.label}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
