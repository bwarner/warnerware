import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Byron Warner - software engineer, entrepreneur, and technology enthusiast based in San Francisco.",
};

export default async function AboutPage() {
  const { default: Content } = await import("@/content/pages/about.mdx");

  return (
    <main className="min-h-screen px-6 py-12">
      <article className="mx-auto max-w-3xl prose prose-lg">
        <Content />
      </article>
    </main>
  );
}
