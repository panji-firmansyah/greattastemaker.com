import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  subtitle,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Tag className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
        {children}
      </Tag>
      {subtitle && (
        <p className="max-w-2xl text-lg text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
