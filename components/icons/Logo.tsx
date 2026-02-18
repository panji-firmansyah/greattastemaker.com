import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "text-xl font-bold tracking-tight text-zinc-50",
        className
      )}
    >
      G
      <span className="text-cyan-400">T</span>
    </span>
  );
}
