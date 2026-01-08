import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getPostMetadata,
  getAllPostSlugs,
  formatDate,
  isValidSlug,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    return { title: "Not Found" };
  }

  const metadata = await getPostMetadata(slug);

  if (!metadata) {
    return { title: "Not Found" };
  }

  return {
    title: `${metadata.title} | WarnerWare`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      publishedTime: metadata.date,
      modifiedTime: metadata.updated,
      images: metadata.image ? [metadata.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const metadata = await getPostMetadata(slug);

  if (!metadata) {
    notFound();
  }

  // Dynamically import the MDX content
  let Content: React.ComponentType;
  try {
    const mdxModule = await import(`@/content/posts/${slug}.mdx`);
    Content = mdxModule.default;
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Post header */}
        <header className="mb-8 pb-8 border-b border-gray-100">
          <time className="text-sm text-gray-500">
            {formatDate(metadata.date)}
            {metadata.updated && (
              <span className="ml-2">
                (Updated: {formatDate(metadata.updated)})
              </span>
            )}
          </time>
          <h1 className="mt-4 text-4xl font-bold tracking-tight font-montserrat">
            {metadata.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600">{metadata.description}</p>
          {metadata.tags && metadata.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post content */}
        <div className="prose prose-lg max-w-none">
          <Content />
        </div>
      </article>
    </main>
  );
}
