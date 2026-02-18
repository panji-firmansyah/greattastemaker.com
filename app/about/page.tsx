import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OriginStory } from "@/components/sections/about/OriginStory";
import { InsightSection } from "@/components/sections/about/InsightSection";
import { MethodSection } from "@/components/sections/about/MethodSection";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by a strategist who's been on your side of the table. The story behind the method.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <InsightSection />
      <MethodSection />
      <AboutCTA />
    </>
  );
}
