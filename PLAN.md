# Warnerware Blog Transformation Plan

This document outlines the plan to transform warnerware.com from a static portfolio site into a blog-focused personal site with MDX content support.

## Overview

**Current State:** Static portfolio/resume site with hero, experience timeline, skills, tools, and services sections.

**Target State:** Blog-focused personal site with:

- MDX-powered blog posts
- Personal pages (About, Contact, etc.)
- Preserved portfolio content
- Clean navigation between sections

## Architecture Decisions

Based on analysis of the 515-puntacaelo reference implementation:

| Decision         | Choice                                  | Rationale                              |
| ---------------- | --------------------------------------- | -------------------------------------- |
| MDX Library      | `@next/mdx` with frontmatter            | Built-in Next.js support, minimal deps |
| Content Location | `/content/posts/` and `/content/pages/` | Clear separation of content types      |
| Routing          | File-based dynamic routes               | Simple, no external CMS needed         |
| i18n             | Not required                            | Single-language site (English)         |
| Styling          | Tailwind + custom prose styles          | Consistent with existing setup         |

---

## Phase 1: Foundation Setup

### 1.1 Install MDX Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install -D @types/mdx
```

### 1.2 Configure Next.js for MDX

Update `next.config.mjs`:

```javascript
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
```

### 1.3 Create MDX Components File

Create `mdx-components.tsx` at project root with:

- Typography overrides (h1, h2, h3, p, blockquote, code, pre)
- Custom blog components (Callout, CodeBlock, Image wrapper)
- Link handling for internal/external

### 1.4 Create Content Directory Structure

```
content/
├── posts/           # Blog posts
│   └── *.mdx
└── pages/           # Static pages (about, contact, etc.)
    └── *.mdx
```

---

## Phase 2: Blog Infrastructure

### 2.1 Define Content Types

**Blog Post Frontmatter Schema:**

```typescript
// lib/types.ts
export interface PostMetadata {
  title: string;
  description: string;
  date: string; // ISO date string
  updated?: string; // Optional last updated date
  tags?: string[]; // Categories/tags
  published: boolean; // Draft control
  image?: string; // Optional hero image
}
```

**Page Frontmatter Schema:**

```typescript
export interface PageMetadata {
  title: string;
  description: string;
}
```

### 2.2 Create Content Utilities

Create `lib/content.ts` with functions:

- `getAllPosts()` - List all published posts with metadata
- `getPostBySlug(slug)` - Get single post content + metadata
- `getAllTags()` - Extract unique tags from all posts
- `getPostsByTag(tag)` - Filter posts by tag

### 2.3 Create Blog Routes

```
app/
├── blog/
│   ├── page.tsx              # Blog index (list all posts)
│   └── [slug]/
│       └── page.tsx          # Individual post page
```

### 2.4 Blog Index Page Features

- List posts sorted by date (newest first)
- Show title, date, description, tags
- Reading time estimate
- Pagination (if needed later)

### 2.5 Individual Post Page Features

- Full MDX content rendering
- Post metadata header (title, date, tags)
- Reading time
- Previous/Next post navigation
- Social share links (optional)

---

## Phase 3: Personal Pages

### 3.1 Create Static Page Route

```
app/
└── [slug]/
    └── page.tsx              # Dynamic route for pages
```

### 3.2 Initial Pages to Create

| Page    | Slug       | Purpose                      |
| ------- | ---------- | ---------------------------- |
| About   | `/about`   | Extended bio, personal story |
| Contact | `/contact` | Contact form or links        |
| Uses    | `/uses`    | Tools/setup I use (optional) |

### 3.3 Page Content Structure

Each page in `content/pages/`:

```mdx
export const metadata = {
  title: "About",
  description: "Learn more about Byron Warner",
};

# About Me

Content here...
```

---

## Phase 4: Navigation & Layout Updates

### 4.1 Create Site Header Component

New `components/header.tsx`:

- Logo/site name
- Navigation links: Home, Blog, About, Contact
- Mobile responsive hamburger menu

### 4.2 Create Site Footer Component

New `components/footer.tsx`:

- Social links (existing: GitHub, LinkedIn, X)
- Copyright
- Optional: RSS feed link

### 4.3 Update Root Layout

Modify `app/layout.tsx`:

- Add Header component
- Add Footer component
- Wrap content in consistent container

### 4.4 Homepage Adjustments

Keep existing portfolio content but:

- Add "Latest Posts" section showing 3 recent posts
- Update hero to reflect blog focus (optional)

---

## Phase 5: SEO & Metadata

### 5.1 Dynamic Metadata Generation

For each route, implement `generateMetadata()`:

- Title templates: `{Page Title} | WarnerWare`
- Meta descriptions from frontmatter
- Open Graph tags for social sharing
- Twitter card metadata

### 5.2 Structured Data

Add JSON-LD for:

- Blog posts (Article schema)
- Person schema on homepage
- WebSite schema

### 5.3 RSS Feed

Create `app/feed.xml/route.ts`:

- Generate RSS 2.0 feed
- Include all published posts
- Auto-update on build

### 5.4 Sitemap

Create `app/sitemap.ts`:

- Dynamic sitemap generation
- Include all posts and pages
- Proper lastmod dates

---

## Phase 6: Styling & Polish

### 6.1 Typography for Prose

Add to `globals.css`:

- Prose styles for blog content
- Code block syntax highlighting theme
- Blockquote styling
- List styling

### 6.2 Brand Color Integration

Add warnerware-blue (#277CEA) to Tailwind theme:

```css
@theme {
  --color-warnerware-blue: #277cea;
}
```

### 6.3 Dark Mode (Optional)

- Add dark mode toggle
- Update color variables for dark theme
- Persist preference in localStorage

---

## Phase 7: Analytics & Tracking

### 7.1 Blog-Specific PostHog Events

Track:

- `blog_post_viewed` - with slug, tags
- `blog_tag_clicked` - filter by tag
- `blog_share_clicked` - social share
- `page_viewed` - for static pages

---

## File Structure (Final)

```
warnerware/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage (portfolio + latest posts)
│   ├── globals.css             # Global styles + prose
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/
│   │       └── page.tsx        # Individual post
│   ├── [slug]/
│   │   └── page.tsx            # Static pages (about, contact)
│   ├── feed.xml/
│   │   └── route.ts            # RSS feed
│   └── sitemap.ts              # Dynamic sitemap
├── components/
│   ├── header.tsx              # Site navigation
│   ├── footer.tsx              # Site footer
│   ├── post-card.tsx           # Blog post preview card
│   ├── post-header.tsx         # Post title/meta display
│   ├── tag.tsx                 # Tag badge component
│   └── ... (existing components)
├── content/
│   ├── posts/
│   │   ├── hello-world.mdx     # First blog post
│   │   └── ...
│   └── pages/
│       ├── about.mdx
│       └── contact.mdx
├── lib/
│   ├── content.ts              # Content utilities
│   └── types.ts                # TypeScript interfaces
├── mdx-components.tsx          # MDX component overrides
└── public/
    └── images/
        └── posts/              # Blog post images
```

---

## Implementation Order

| Phase                        | Priority | Estimated Scope                |
| ---------------------------- | -------- | ------------------------------ |
| Phase 1: Foundation          | High     | MDX setup, config              |
| Phase 2: Blog Infrastructure | High     | Routes, utilities, list/detail |
| Phase 4: Navigation          | High     | Header, footer, layout         |
| Phase 3: Personal Pages      | Medium   | About, contact pages           |
| Phase 5: SEO                 | Medium   | Metadata, RSS, sitemap         |
| Phase 6: Styling             | Medium   | Typography, polish             |
| Phase 7: Analytics           | Low      | Event tracking                 |

---

## Sample Blog Post Structure

```mdx
// content/posts/hello-world.mdx

export const metadata = {
  title: "Hello, World!",
  description: "Welcome to my new blog. Here's what to expect.",
  date: "2025-01-07",
  tags: ["meta", "personal"],
  published: true,
  image: "/images/posts/hello-world.jpg",
};

# Hello, World!

Welcome to my corner of the internet...

## What I'll Write About

- Software engineering insights
- Tools and workflows
- Personal projects

## Let's Connect

Feel free to reach out on [Twitter](https://x.com/byronwarner) or [LinkedIn](https://linkedin.com/in/byronwarner).
```

---

## Success Criteria

- [ ] Blog posts render correctly from MDX files
- [ ] Blog index shows all published posts
- [ ] Navigation works across all pages
- [ ] SEO metadata generates correctly
- [ ] RSS feed validates
- [ ] Sitemap includes all content
- [ ] PostHog tracks blog events
- [ ] Site builds without errors
- [ ] Mobile responsive design maintained

---

## Notes

- The 515-puntacaelo reference uses a simpler approach than Contentlayer - just Next.js built-in MDX support with exported metadata objects
- No need for gray-matter or other frontmatter parsing libraries
- Security: Validate slugs before dynamic imports (regex: `^[a-zA-Z0-9_-]+$`)
- Keep existing portfolio content intact on homepage
