# AGENTS.md - warnerware.com

## Project Overview

**warnerware.com** is Byron Warner's personal website, built with Next.js. The site is currently a portfolio/resume-style site and is being transformed into a blog-focused personal site.

**Live URL:** https://warnerware.com

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** FontAwesome, Simple Icons, Lucide React
- **Analytics:** PostHog
- **Deployment:** Vercel (assumed)

## Current State

The site currently features:
- Hero section with bio and social links (LinkedIn, GitHub, X)
- Experience/work history timeline
- Skills showcase
- Tools, Databases, and Services sections

## Transformation Goals

The site is being evolved from a static portfolio to a **blog-like personal site**. Key goals include:

### Content Features
- [ ] Blog post support with MDX or similar
- [ ] Post listings with pagination
- [ ] Categories/tags for posts
- [ ] RSS feed
- [ ] Search functionality

### Technical Improvements
- [ ] Dynamic routing for blog posts (`/blog/[slug]`)
- [ ] Static generation for blog content
- [ ] SEO optimization (meta tags, Open Graph, structured data)
- [ ] Reading time estimates
- [ ] Syntax highlighting for code blocks

### Design Considerations
- [ ] Blog index page
- [ ] Individual post layout
- [ ] Navigation updates (add Blog link)
- [ ] Archive/category pages
- [ ] Author section on posts

## File Structure

```
long_resume.md         # resume
app/
├── page.tsx           # Homepage (portfolio content)
├── layout.tsx         # Root layout
├── globals.css        # Global styles
├── blog/              # Blog section (to be created)
│   ├── page.tsx       # Blog index
│   └── [slug]/
│       └── page.tsx   # Individual post
├── experience.json    # Work history data
└── ...

components/
├── section.tsx        # Reusable section wrapper
├── skills.tsx         # Skills display
├── tools.tsx          # Tools section
├── databases.tsx      # Databases section
├── services.tsx       # Services section
└── icon.tsx           # Icon wrapper

content/               # Blog content (to be created)
└── posts/
    └── *.mdx
```

## Coding Conventions

### General
- Use TypeScript for all new code
- Prefer functional components with hooks
- Use Tailwind CSS for styling (no CSS modules)
- Follow Next.js App Router conventions

### Naming
- Components: PascalCase (`BlogPost.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Routes: kebab-case (`/blog/my-first-post`)

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
| Headings | Montserrat | `--font-montserrat` |
| Body | PT Serif | `--font-pt-serif` |

**To align with brand guidelines**, add Roboto to `app/fonts.ts`:
```ts
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});
```

**Tailwind extend:**
```js
fontFamily: {
  roboto: ["var(--font-roboto)", "sans-serif"],
}
```

### Color Palette

**Brand Color (per PDF):**
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **WarnerWare Blue** | `#277CEA` | rgb(39, 124, 234) | Primary brand color, CTAs, links, accents |

**Recommended Palette:**
| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Brand Blue | `#277CEA` | `warnerware-blue` | Primary actions, links |
| Dark | `#1a1a1a` | `gray-900` | Backgrounds, headings |
| Gray | `#6b7280` | `gray-500` | Body text, secondary |
| Light | `#f5f5f5` | `gray-100` | Section backgrounds |
| White | `#ffffff` | `white` | Cards, content areas |

**Currently used:** `blue-500` (`#3b82f6`) — close but not exact brand color.

**To add brand color to `tailwind.config.ts`:**
```js
theme: {
  extend: {
    colors: {
      warnerware: {
        blue: '#277CEA',
        'blue-light': '#4a94f0',
        'blue-dark': '#1e62bb',
      },
    },
  },
}
```

**CSS Variables (add to `globals.css`):**
```css
:root {
  --warnerware-blue: #277CEA;
}
```

### Component Conventions

- Export named components, not default, from `components/`
- Keep components focused and composable
- Use `clsx` for conditional class names

### Data Patterns

- Store static content data in JSON or MDX files
- Use Next.js data fetching patterns (Server Components)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Notes for AI Agents

- The site owner is Byron Warner, a software engineer in San Francisco
- Maintain the existing professional tone
- Keep the portfolio content intact while adding blog functionality
- PostHog is used for analytics - consider tracking blog-specific events
- Prioritize performance and SEO for blog content

