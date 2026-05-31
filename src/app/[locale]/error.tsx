"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="mb-4 font-serif text-4xl font-light">Oops</h1>
      <p className="text-muted mb-8 font-sans text-sm">Something went wrong.</p>
      <button
        onClick={reset}
        className="border-dark hover:bg-dark hover:text-cream border px-8 py-3 font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
