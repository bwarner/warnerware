import type { Metadata } from "next";
import { FileQuestion, Home, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-blue-100 p-4">
            <FileQuestion className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <h1 className="font-montserrat text-6xl md:text-7xl text-blue-600 mb-2">
          404
        </h1>

        <h2 className="font-montserrat text-2xl md:text-3xl text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try searching or head back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Search className="h-5 w-5" />
            Browse Blog
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
