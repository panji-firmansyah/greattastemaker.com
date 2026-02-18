import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "h1" | "h2" | "h3";
  onDark?: boolean;
  className?: string;
}

const sizeMap = {
  hero: "text-[var(--text-hero)]",
  h1: "text-[var(--text-h1)]",
  h2: "text-[var(--text-h2)]",
  h3: "text-[var(--text-h3)]",
};

export function SectionHeading({
  children,
  subtitle,
  as: Tag = "h2",
  size = "h2",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Tag
        className={cn(
          "font-serif font-semibold leading-[1.15] tracking-[-0.02em]",
          sizeMap[size],
          onDark ? "text-[var(--text-on-dark)]" : "text-text-primary"
        )}
      >
        {children}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "font-sans text-[var(--text-body-lg)] leading-[1.7]",
            onDark
              ? "text-[var(--text-on-dark-secondary)]"
              : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
