"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/StaggerContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { layananContent } from "@/lib/content";

const tiers = layananContent.tiers;

export function TierComparison() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <StaggerContainer className="grid gap-6 md:grid-cols-3 md:gap-8">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "glass-card relative flex h-full flex-col p-6 md:p-8",
                  tier.highlighted &&
                    "border-cyan-400/30 shadow-glow-cyan"
                )}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-6 border-none bg-cyan-400 text-zinc-950">
                    {tier.badge}
                  </Badge>
                )}

                <h3 className="text-xl font-bold text-zinc-50">{tier.name}</h3>

                <div className="mt-4">
                  <span className="text-3xl font-bold text-zinc-50">
                    {tier.price}
                  </span>
                  <span className="ml-2 text-sm text-zinc-500">
                    {tier.duration}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    variant={tier.highlighted ? "default" : "secondary"}
                    className="w-full"
                  >
                    <Link href={tier.cta.href}>
                      {tier.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
