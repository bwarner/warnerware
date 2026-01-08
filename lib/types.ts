/**
 * Metadata exported from blog post MDX files
 */
export interface PostMetadata {
  title: string;
  description: string;
  date: string; // ISO date string (YYYY-MM-DD)
  updated?: string; // Optional last updated date
  tags?: string[];
  published: boolean;
  image?: string; // Optional hero/og image
}

/**
 * Blog post with slug for routing
 */
export interface Post {
  slug: string;
  metadata: PostMetadata;
}

/**
 * Metadata exported from static page MDX files
 */
export interface PageMetadata {
  title: string;
  description: string;
}
