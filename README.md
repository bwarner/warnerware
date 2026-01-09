# warnerware.com

Personal website and blog for Byron Warner — software engineer based in San Francisco.

[![CI](https://github.com/bwarner/warnerware/actions/workflows/ci.yml/badge.svg)](https://github.com/bwarner/warnerware/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/badge/deployed%20on-Vercel-black)](https://warnerware.com)

## 🚀 Live Site

**[warnerware.com](https://warnerware.com)**

## ✨ Features

- **Portfolio** — Work history, skills, and professional experience
- **Resume** — Downloadable PDF with JSON-LD structured data for SEO
- **Blog** — MDX-powered blog with static generation
- **Analytics** — PostHog integration with click tracking and error monitoring

## 🛠 Tech Stack

| Category  | Technology                                            |
| --------- | ----------------------------------------------------- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router)        |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com/)           |
| Language  | TypeScript                                            |
| Analytics | [PostHog](https://posthog.com/)                       |
| Testing   | [Vitest](https://vitest.dev/) + React Testing Library |
| Linting   | ESLint 9 + Prettier                                   |
| CI/CD     | GitHub Actions → Vercel                               |

## 📦 Getting Started

### Prerequisites

- Node.js 22+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/bwarner/warnerware.git
cd warnerware

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📜 Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start development server |
| `npm run build`     | Build for production     |
| `npm run start`     | Start production server  |
| `npm run lint`      | Run ESLint               |
| `npm run lint:fix`  | Fix ESLint issues        |
| `npm run typecheck` | Run TypeScript compiler  |
| `npm run test`      | Run tests (watch mode)   |
| `npm run test:run`  | Run tests (single run)   |

## 🧪 Testing

```bash
# Run tests in watch mode
npm run test

# Run tests once (CI mode)
npm run test:run
```

## 📁 Project Structure

```
warnerware/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog pages
│   ├── resume/            # Resume page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── tracked-link.tsx   # PostHog-tracked links
│   └── ...
├── content/               # MDX blog posts
├── public/                # Static assets
└── AGENTS.md              # AI agent instructions
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## 🚢 Deployment

The site automatically deploys to Vercel when changes are pushed to `main`.

### CI Pipeline

1. **Lint** — ESLint with zero warnings
2. **Test** — Vitest unit tests
3. **Type Check** — TypeScript validation
4. **Build** — Next.js production build

## 📄 License

Private repository.

## 👤 Author

**Byron Warner**

- Website: [warnerware.com](https://warnerware.com)
- LinkedIn: [byronwarner](https://linkedin.com/in/byronwarner)
- GitHub: [@bwarner](https://github.com/bwarner)
