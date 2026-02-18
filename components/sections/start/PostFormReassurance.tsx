import { startContent } from "@/lib/content";

export function PostFormReassurance() {
  const { reassurance } = startContent;

  return (
    <div className="max-w-content-form mx-auto mt-12">
      <h3 className="font-sans font-semibold text-lg text-text-primary mb-4">
        {reassurance.headline}
      </h3>
      <div className="space-y-4">
        {reassurance.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-sans text-[var(--text-body)] leading-[1.7] text-text-secondary"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
