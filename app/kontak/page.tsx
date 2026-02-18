import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { IntakeForm } from "@/components/sections/kontak/IntakeForm";
import { SITE_CONFIG } from "@/lib/constants";
import { kontakContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Mari mulai. Isi form singkat dan kami akan menghubungi Anda untuk langkah selanjutnya.",
};

export default function KontakPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading as="h1" subtitle={kontakContent.hero.subheadline}>
              {kontakContent.hero.headline}
            </SectionHeading>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <IntakeForm />
        </div>
      </section>

      <div className="divider-gradient" />

      {/* Alternative Contact */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 text-center md:px-8">
          <p className="text-sm font-medium text-zinc-400">
            {kontakContent.alternative.headline}
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <Mail className="h-4 w-4" />
              {SITE_CONFIG.email}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <MessageCircle className="h-4 w-4" />
              {kontakContent.alternative.whatsappLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
