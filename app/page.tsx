import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { EngineSection } from "@/components/sections/home/EngineSection";
import { OutputSection } from "@/components/sections/home/OutputSection";
import { CaseStudyPreview } from "@/components/sections/home/CaseStudyPreview";
import { CTASection } from "@/components/sections/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="divider-gradient" />
      <ProblemSection />
      <div className="divider-gradient" />
      <EngineSection />
      <div className="divider-gradient" />
      <OutputSection />
      <div className="divider-gradient" />
      <CaseStudyPreview />
      <div className="divider-gradient" />
      <CTASection />
    </>
  );
}
