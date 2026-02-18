import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 bg-bg-primary">
      <p className="font-serif text-7xl font-semibold text-[var(--accent)] opacity-20">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold font-sans text-text-primary">
        Page not found
      </h1>
      <p className="mt-2 text-text-secondary font-sans">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md border border-border-light px-6 py-3 font-sans font-medium text-text-primary transition-colors hover:bg-bg-secondary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
