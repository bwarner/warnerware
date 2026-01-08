import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | WarnerWare",
  description: "Thoughts on software engineering, tools, and technology.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-montserrat mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600">
            Thoughts on software engineering, tools, and technology.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border-b border-gray-100 pb-8 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <time className="text-sm text-gray-500">
                    {formatDate(post.metadata.date)}
                  </time>
                  <h2 className="mt-2 text-2xl font-semibold font-montserrat group-hover:text-blue-600 transition-colors">
                    {post.metadata.title}
                  </h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {post.metadata.description}
                  </p>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
