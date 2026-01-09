# AGENTS.md - warnerware.com

## Project Overview

**warnerware.com** is Byron Warner's personal website, built with Next.js. The site is currently a portfolio/resume-style site and is being transformed into a blog-focused personal site.

**Live URL:** https://warnerware.com

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** FontAwesome, Simple Icons, Lucide React
- **Analytics:** PostHog (with exception & performance tracking)
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint 9 (flat config) + Prettier
- **Git Hooks:** Husky + lint-staged
- **CI/CD:** GitHub Actions → Vercel

## Current State

The site currently features:

- Hero section with bio and social links (LinkedIn, GitHub, X)
- Experience/work history timeline
- Skills showcase
- Tools, Databases, and Services sections
- Resume page with JSON-LD structured data
- Blog section (MDX-based)

## Transformation Goals

The site is being evolved from a static portfolio to a **blog-like personal site**. Key goals include:

### Content Features

- [x] Blog post support with MDX
- [ ] Post listings with pagination
- [ ] Categories/tags for posts
- [ ] RSS feed
- [ ] Search functionality

### Technical Improvements

- [x] Dynamic routing for blog posts (\`/blog/[slug]\`)
- [x] Static generation for blog content
- [x] SEO optimization (meta tags, Open Graph, structured data)
- [ ] Reading time estimates
- [ ] Syntax highlighting for code blocks

### Design Considerations

- [x] Blog index page
- [x] Individual post layout
- [x] Navigation updates (add Blog link)
- [ ] Archive/category pages
- [ ] Author section on posts

## File Structure

\`\`\`
long_resume.md # resume
app/
├── page.tsx # Homepage (portfolio content)
├── layout.tsx # Root layout
├── globals.css # Global styles (Tailwind v4)
├── providers.tsx # PostHog provider
├── fonts.ts # Font configuration
├── blog/ # Blog section
│ ├── page.tsx # Blog index
│ └── [slug]/
│ └── page.tsx # Individual post
├── resume/
│ └── page.tsx # Resume with JSON-LD
├── experience.json # Work history data
└── ...

components/
├── index.ts # Barrel exports
├── header.tsx # Site header
├── footer.tsx # Site footer
├── icon.tsx # Icon wrapper
├── tracked-link.tsx # PostHog-tracked links
├── obfuscated-contact.tsx # Email/phone obfuscation
└── ...

content/ # Blog content
└── posts/
└── \*.mdx
\`\`\`

## Coding Conventions

### General

- Use TypeScript for all new code
- Prefer functional components with hooks
- Use Tailwind CSS for styling (no CSS modules)
- Follow Next.js App Router conventions

### Naming

- Components: PascalCase (\`BlogPost.tsx\`)
- Utilities: camelCase (\`formatDate.ts\`)
- Routes: kebab-case (\`/blog/my-first-post\`)

## Style Guide

> Based on the WarnerWare brand guidelines (PDF Guideline.pdf)

### Brand Identity

**Logo:** 88 WarnerWare  
**Designer:** andrezx (Fiverr)

### Typography

**Brand Standard (per PDF):**
| Usage | Font | Weight |
|-------|------|--------|
| Primary | Roboto | 500 (Medium) |

**Currently Implemented:**
| Usage | Font | Variable |
|-------|------|----------|
| Headings | Montserrat | \`--font-montserrat\` |
| Body | PT Serif | \`--font-pt-serif\` |

### Color Palette

**Brand Color (per PDF):**
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **WarnerWare Blue** | \`#277CEA\` | rgb(39, 124, 234) | Primary brand color, CTAs, links, accents |

**Recommended Palette:**
| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Brand Blue | \`#277CEA\` | \`warnerware-blue\` | Primary actions, links |
| Dark | \`#1a1a1a\` | \`gray-900\` | Backgrounds, headings |
| Gray | \`#6b7280\` | \`gray-500\` | Body text, secondary |
| Light | \`#f5f5f5\` | \`gray-100\` | Section backgrounds |
| White | \`#ffffff\` | \`white\` | Cards, content areas |

### Component Conventions

- Export named components, not default, from \`components/\`
- Keep components focused and composable
- Use \`clsx\` for conditional class names

### Data Patterns

- Store static content data in JSON or MDX files
- Use Next.js data fetching patterns (Server Components)

## Analytics & Tracking

PostHog is configured with:

- **Exception tracking:** Auto-captures JS errors
- **Performance tracking:** Web Vitals metrics
- **Custom events:** Use \`TrackedLink\` component for click tracking

\`\`\`tsx
// Example: Track resume downloads
<TrackedLink
href="/resume.pdf"
eventName="resume_downloaded"
eventProperties={{ source: "resume_page" }}

> Download
> </TrackedLink>
> \`\`\`

## Commands

\`\`\`bash
npm run dev # Start development server
npm run build # Build for production
npm run start # Start production server
npm run lint # Run ESLint
npm run lint:fix # Fix ESLint issues
npm run typecheck # Run TypeScript compiler
npm run test # Run tests (watch mode)
npm run test:run # Run tests (single run)
\`\`\`

## CI Pipeline

GitHub Actions runs on push/PR to \`main\`:

1. **Lint** — ESLint with zero warnings
2. **Test** — Vitest unit tests
3. **Type Check** — TypeScript compiler
4. **Build** — Next.js production build

## Notes for AI Agents

- The site owner is Byron Warner, a software engineer in San Francisco
- Maintain the existing professional tone
- Keep the portfolio content intact while adding blog functionality
- PostHog is used for analytics - consider tracking blog-specific events
- Prioritize performance and SEO for blog content
- Use \`TrackedLink\` for any links that should be tracked
- Add JSON-LD structured data to important pages for SEO
