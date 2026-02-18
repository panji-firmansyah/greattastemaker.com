import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  variant?: "cyan" | "violet" | "mixed";
}

export function GlowEffect({ className, variant = "cyan" }: GlowEffectProps) {
  const gradients = {
    cyan: "bg-cyan-400/10",
    violet: "bg-violet-500/10",
    mixed: "bg-gradient-to-r from-cyan-400/10 to-violet-500/10",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        gradients[variant],
        className
      )}
    />
  );
}
