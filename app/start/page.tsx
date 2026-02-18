import type { Metadata } from "next";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { StartHero } from "@/components/sections/start/StartHero";
import { IntakeForm } from "@/components/sections/start/IntakeForm";
import { PostFormReassurance } from "@/components/sections/start/PostFormReassurance";

export const metadata: Metadata = {
  title: "Start Your GTM Diagnostic",
  description:
    "Get a free, personalized read on your go-to-market situation. Takes 3 minutes. No commitment.",
};

export default function StartPage() {
  return (
    <SectionWrapper bg="primary" padding="content">
      <StartHero />
      <IntakeForm />
      <PostFormReassurance />
    </SectionWrapper>
  );
}
