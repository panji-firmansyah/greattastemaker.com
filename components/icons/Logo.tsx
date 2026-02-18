import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onDark?: boolean;
}

export function Logo({ className, onDark = false }: LogoProps) {
  return (
    <span
      className={cn(
        "font-sans font-medium tracking-tight",
        onDark ? "text-[var(--text-on-dark)]" : "text-text-primary",
        className
      )}
    >
      GreatTastemaker
    </span>
  );
}
