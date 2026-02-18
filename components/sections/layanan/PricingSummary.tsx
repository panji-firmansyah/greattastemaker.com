"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

const pricingData = [
  { name: "GTM Foundation", price: "Gratis", duration: "1-2 hari" },
  { name: "GTM Sprint", price: "Rp 15 Juta", duration: "4 hari" },
  { name: "GTM Engine", price: "Rp 25 Juta/bln", duration: "Ongoing (min. 3 bulan)" },
  { name: "Brand Playbook", price: "Rp 5 Juta", duration: "5-7 hari" },
  { name: "Landing Page", price: "Rp 5 Juta", duration: "5-7 hari" },
  { name: "Activation Workshop", price: "Rp 3 Juta", duration: "1 hari" },
];

export function PricingSummary() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8">
        <ScrollReveal>
          <SectionHeading>Ringkasan harga</SectionHeading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-lg border border-zinc-800">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-300">
                    Layanan
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-300">
                    Harga
                  </th>
                  <th className="hidden px-6 py-4 text-sm font-semibold text-zinc-300 sm:table-cell">
                    Timeline
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, i) => (
                  <tr
                    key={item.name}
                    className={
                      i !== pricingData.length - 1
                        ? "border-b border-zinc-800/50"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-zinc-200">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-cyan-400">
                      {item.price}
                    </td>
                    <td className="hidden px-6 py-4 text-sm text-zinc-500 sm:table-cell">
                      {item.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/kontak">
              Mulai sekarang
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
