import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { FounderSection } from "@/components/sections/home/FounderSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { CTASection } from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <ProofSection />
      <FounderSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
}
