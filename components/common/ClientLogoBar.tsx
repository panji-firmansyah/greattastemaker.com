"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ClientLogo } from "@/lib/types";

interface ClientLogoBarProps {
  logos: ClientLogo[];
  className?: string;
}

export function ClientLogoBar({ logos, className }: ClientLogoBarProps) {
  if (logos.length === 0) return null;

  return (
    <div className={cn("space-y-6", className)}>
      <p className="text-center font-sans text-[var(--text-body-sm)] text-text-secondary">
        Previously built marketing systems for:
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            className="h-10 w-auto object-contain grayscale transition-all hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
