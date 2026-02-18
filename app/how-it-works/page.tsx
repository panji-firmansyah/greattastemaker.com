import type { Metadata } from "next";
import { HowItWorksHero } from "@/components/sections/how-it-works/HowItWorksHero";
import { TierOverview } from "@/components/sections/how-it-works/TierOverview";
import { FoundationDetail } from "@/components/sections/how-it-works/FoundationDetail";
import { SprintDetail } from "@/components/sections/how-it-works/SprintDetail";
import { EngineDetail } from "@/components/sections/how-it-works/EngineDetail";
import { AddOns } from "@/components/sections/how-it-works/AddOns";
import { PricingSummary } from "@/components/sections/how-it-works/PricingSummary";
import { HowItWorksCTA } from "@/components/sections/how-it-works/HowItWorksCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Three tiers. One clear path. Start with a free diagnostic — see the full process and pricing.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <TierOverview />
      <FoundationDetail />
      <SprintDetail />
      <EngineDetail />
      <AddOns />
      <PricingSummary />
      <HowItWorksCTA />
    </>
  );
}
