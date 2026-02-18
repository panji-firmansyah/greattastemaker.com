"use client";

import { CheckCircle, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { kontakContent } from "@/lib/content";

interface SuccessStateProps {
  name: string;
  company: string;
  service: string;
}

const success = kontakContent.success;

export function SuccessState({ name, company, service }: SuccessStateProps) {
  const waMessage = encodeURIComponent(
    `Halo Great Tastemaker! Saya ${name} dari ${company}. Saya tertarik dengan ${service}. Bisa kita diskusi lebih lanjut?`
  );
  const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waMessage}`;

  return (
    <div className="mx-auto max-w-lg text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10">
        <CheckCircle className="h-8 w-8 text-cyan-400" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-zinc-50">{success.title}</h2>
      <p className="mt-2 text-zinc-400">{success.subtitle}</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            {success.whatsappLabel}
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="h-4 w-4" />
            {success.calendlyLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}
