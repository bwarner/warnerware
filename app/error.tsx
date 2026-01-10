"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    posthog?: {
      captureException: (
        error: Error,
        properties?: Record<string, unknown>,
      ) => void;
    };
  }
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);

    // Log to PostHog if available
    if (typeof window !== "undefined" && window.posthog) {
      window.posthog.captureException(error, {
        digest: error.digest,
      });
    }
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-100 p-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        <h1 className="font-montserrat text-4xl md:text-5xl text-gray-900 mb-4">
          Something Went Wrong
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          We encountered an unexpected error. Please try again, or return to the
          homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-sm text-gray-400">Error ID: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
