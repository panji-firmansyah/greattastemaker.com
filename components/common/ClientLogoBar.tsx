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
    <div className={cn("space-y-8", className)}>
      <p className="text-center font-sans text-xs tracking-[0.2em] uppercase text-[var(--accent)] opacity-70">
        Trusted by market leaders
      </p>

      {/* Simple, elegant grid/flex for logos. For a 'Cinematic' feel, we could do a marquee, 
          but for now, a clean, balanced row with opacity transition is classic and premium. */}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
        {logos.map((logo) => (
          <div key={logo.name} className="group relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={50}
              className="h-8 md:h-10 w-auto object-contain opacity-30 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
