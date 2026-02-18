import { cn } from "@/lib/utils";

interface PullQuoteProps {
  children: string;
  className?: string;
}

export function PullQuote({ children, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-[3px] border-[var(--accent)] pl-8 my-12",
        className
      )}
    >
      <p className="font-serif font-semibold text-[var(--text-h2)] leading-[1.3] tracking-[-0.02em] text-text-primary">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}
