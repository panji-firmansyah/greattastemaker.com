import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onDark?: boolean;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  onDark = false,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6",
        onDark
          ? "border-[var(--border-dark)] bg-bg-dark-secondary"
          : "border-border-light bg-bg-primary",
        className
      )}
    >
      <blockquote
        className={cn(
          "font-sans text-[var(--text-body)] leading-[1.7] mb-4",
          onDark ? "text-[var(--text-on-dark-secondary)]" : "text-text-secondary"
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div>
        <p
          className={cn(
            "font-sans font-semibold text-[var(--text-body-sm)]",
            onDark ? "text-[var(--text-on-dark)]" : "text-text-primary"
          )}
        >
          {testimonial.name}
        </p>
        <p
          className={cn(
            "font-sans text-[var(--text-caption)]",
            onDark
              ? "text-[var(--text-on-dark-secondary)]"
              : "text-text-tertiary"
          )}
        >
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
