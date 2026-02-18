"use client";

import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { howItWorksContent } from "@/lib/content";

const tiers = [
  {
    name: "Foundation",
    price: "Free",
    timeline: "1–2 days",
    whatYouGet: "Strategic 360 Diagnostic + Opportunity Score",
    yourTime: "Short form",
    prerequisite: "—",
  },
  {
    name: "Sprint",
    price: "Rp 15,000,000",
    timeline: "4 days",
    whatYouGet: "30 strategic assets across full funnel",
    yourTime: "60–90 min session",
    prerequisite: "Foundation completed",
  },
  {
    name: "Engine",
    price: "Rp 25,000,000/month",
    timeline: "Ongoing",
    whatYouGet: "60+ assets/month + strategy + dashboard",
    yourTime: "2× 60–90 min/month",
    prerequisite: "Min. 1 Sprint completed",
  },
];

const addOns = [
  { name: "Activation Workshop", price: "Rp 3,000,000/session" },
  { name: "Custom Landing Page", price: "Rp 7,000,000" },
];

export function PricingSummary() {
  const { pricingSummary } = howItWorksContent;

  return (
    <SectionWrapper bg="secondary" padding="content">
      <div className="text-center">
        <ScrollReveal>
          <SectionHeading as="h2" size="h2" subtitle={pricingSummary.sub}>
            {pricingSummary.headline}
          </SectionHeading>
        </ScrollReveal>
      </div>

      {/* Desktop: table */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12 hidden md:block max-w-content-cards mx-auto overflow-x-auto">
          <table className="w-full font-sans text-[var(--text-body-sm)]">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-3 pr-4 text-text-tertiary font-medium" />
                {tiers.map((t) => (
                  <th
                    key={t.name}
                    className="text-left py-3 px-4 font-semibold text-text-primary"
                  >
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Price", key: "price" as const },
                { label: "Timeline", key: "timeline" as const },
                { label: "What you get", key: "whatYouGet" as const },
                { label: "Your time investment", key: "yourTime" as const },
                { label: "Prerequisite", key: "prerequisite" as const },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border-light">
                  <td className="py-3 pr-4 text-text-tertiary font-medium whitespace-nowrap">
                    {row.label}
                  </td>
                  {tiers.map((t) => (
                    <td
                      key={t.name}
                      className="py-3 px-4 text-text-secondary leading-[1.6]"
                    >
                      {t[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      {/* Mobile: stacked cards */}
      <div className="mt-12 space-y-6 md:hidden">
        {tiers.map((tier) => (
          <ScrollReveal key={tier.name}>
            <div className="rounded-lg border border-border-light bg-bg-primary p-5">
              <h3 className="font-sans font-semibold text-lg text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-1 font-sans font-semibold text-[var(--accent)]">
                {tier.price}
              </p>
              <div className="mt-4 space-y-2 text-[var(--text-body-sm)]">
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Timeline</span>
                  <span className="text-text-secondary">{tier.timeline}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-text-tertiary shrink-0">What you get</span>
                  <span className="text-text-secondary text-right">{tier.whatYouGet}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Your time</span>
                  <span className="text-text-secondary">{tier.yourTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Prerequisite</span>
                  <span className="text-text-secondary">{tier.prerequisite}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Add-ons */}
      <ScrollReveal delay={0.3}>
        <div className="mt-10 max-w-content-cards mx-auto">
          <h3 className="font-sans font-semibold text-[var(--text-body)] text-text-primary mb-3 text-center">
            Add-Ons:
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {addOns.map((a) => (
              <span
                key={a.name}
                className="font-sans text-[var(--text-body-sm)] text-text-secondary"
              >
                {a.name} — <span className="font-medium text-text-primary">{a.price}</span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <p className="mt-10 font-sans text-[var(--text-body-sm)] leading-[1.7] text-text-tertiary text-center max-w-content-text mx-auto">
          {pricingSummary.valueAnchor}
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
