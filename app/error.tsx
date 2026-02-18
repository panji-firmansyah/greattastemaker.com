"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <p className="font-serif text-7xl font-semibold text-[var(--error)] opacity-20">
        Error
      </p>
      <h1 className="mt-4 text-2xl font-semibold font-sans text-text-primary">
        Something went wrong
      </h1>
      <p className="mt-2 text-text-secondary font-sans text-center max-w-md">
        We encountered an unexpected error. Please try again or go back to the
        homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-md border border-border-light px-6 py-3 font-sans font-medium text-text-primary transition-colors hover:bg-bg-secondary"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 font-sans font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
