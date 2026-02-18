import { startContent } from "@/lib/content";

export function StartHero() {
  const { hero } = startContent;

  return (
    <div className="text-center max-w-content-form mx-auto mb-8">
      <h1 className="font-serif font-semibold text-[var(--text-h1)] leading-[1.15] tracking-[-0.02em] text-text-primary">
        {hero.headline}
      </h1>
      <p className="mt-4 font-sans text-[var(--text-body-lg)] leading-[1.7] text-text-secondary">
        {hero.subtext}
      </p>
      <p className="mt-2 font-sans text-[var(--text-body)] leading-[1.7] text-text-tertiary">
        {hero.subtextLine2}
      </p>
    </div>
  );
}
