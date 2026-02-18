"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/common/StatCard";
import { GridBackground } from "@/components/common/GridBackground";
import { GlowEffect } from "@/components/common/GlowEffect";
import { homeContent } from "@/lib/content";

const ease = [0.25, 0.1, 0.25, 1] as const;
const hero = homeContent.hero;

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <GridBackground />
      <GlowEffect
        variant="cyan"
        className="-top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2"
      />
      <GlowEffect
        variant="violet"
        className="-bottom-20 right-0 h-[300px] w-[500px]"
      />

      <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl lg:text-7xl"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg">
              <Link href={hero.primaryCTA.href}>
                {hero.primaryCTA.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={hero.secondaryCTA.href}>
                {hero.secondaryCTA.label}
                <ChevronDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-zinc-800/50 pt-10"
        >
          {hero.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
