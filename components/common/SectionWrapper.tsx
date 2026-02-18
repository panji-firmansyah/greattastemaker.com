import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary" | "dark";
  padding?: "hero" | "content" | "cta";
  maxWidth?: "full" | "cards" | "text" | "form";
  id?: string;
  className?: string;
}

const bgMap = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  dark: "bg-bg-dark",
};

const paddingMap = {
  hero: "py-[var(--space-hero)] max-lg:py-[calc(var(--space-hero)*0.6)]",
  content: "py-[var(--space-2xl)] max-lg:py-[calc(var(--space-2xl)*0.65)]",
  cta: "py-[var(--space-xl)] max-lg:py-[calc(var(--space-xl)*0.7)]",
};

const maxWidthMap = {
  full: "max-w-content-full",
  cards: "max-w-content-cards",
  text: "max-w-content-text",
  form: "max-w-content-form",
};

export function SectionWrapper({
  children,
  bg = "primary",
  padding = "content",
  maxWidth = "full",
  id,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bgMap[bg], paddingMap[padding], className)}>
      <div className={cn("mx-auto px-5 md:px-10", maxWidthMap[maxWidth])}>
        {children}
      </div>
    </section>
  );
}
