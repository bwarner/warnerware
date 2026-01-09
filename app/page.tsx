import Link from "next/link";
import { siGithub, siLinkedin, siX } from "simple-icons";
import { Icon, ObfuscatedEmail } from "@/components";
import { getAllPosts, formatDate } from "@/lib/content";
import { ArrowRight, Mail } from "lucide-react";

const skills = [
  { name: "TypeScript", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Swift", category: "Mobile" },
];

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main>
      {/* Hero Section - Full viewport with gradient */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">
              Engineering Leader & Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-montserrat tracking-tight text-gray-900 mb-6">
              Byron Warner
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              I build products, lead engineering teams, and craft elegant
              solutions to complex problems. Based in San Francisco with 20+
              years of experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                View Resume
                <ArrowRight className="w-4 h-4" />
              </Link>
              <ObfuscatedEmail
                user="bfwarner"
                domain="gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </ObfuscatedEmail>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/byronwarner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Icon icon={siLinkedin} title="LinkedIn" size={28} />
              </a>
              <a
                href="https://www.github.com/bwarner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Icon icon={siGithub} title="GitHub" size={28} />
              </a>
              <a
                href="https://x.com/bewarned"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="X"
              >
                <Icon icon={siX} title="X" size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Bar */}
      <section className="bg-gray-900 text-white py-6 overflow-hidden">
        <div className="flex animate-scroll gap-12 whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="text-sm font-medium tracking-wide opacity-70"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* About Section - Two column */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-3">
                About
              </h2>
              <p className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 leading-tight">
                Building software that matters for over two decades.
              </p>
            </div>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                From startups to Fortune 500 companies, I&apos;ve helped teams
                build products that scale. Most recently as Director of
                Engineering at Oncue, I rebuilt the engineering org from the
                ground up and launched multiple products.
              </p>
              <p>
                I believe great software comes from great teams. My focus is on
                building cultures of innovation, mentorship, and continuous
                improvement.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
              >
                More about me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-3">
                Experience
              </h2>
              <p className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900">
                Where I&apos;ve Worked
              </p>
            </div>
            <Link
              href="/resume"
              className="hidden md:inline-flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
            >
              Full resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-0">
            {[
              {
                company: "Oncue",
                role: "Director of Engineering",
                period: "2020 – 2024",
                description:
                  "Led engineering vision and rebuilt the team. Architected core platform with TypeScript, GraphQL, and AWS.",
              },
              {
                company: "Healthline Media",
                role: "Principal Software Engineer",
                period: "2016 – 2020",
                description:
                  "Full-stack development on Next.js platform rebuild. Built ad systems and privacy compliance tools.",
              },
              {
                company: "OpenTable",
                role: "Principal Software Engineer",
                period: "2016",
                description:
                  "Built restaurant management features and E2E testing infrastructure.",
              },
              {
                company: "Constant Contact",
                role: "Principal Software Engineer",
                period: "2013 – 2016",
                description:
                  "Lead iOS developer. Built sync engine and CI/CD pipelines. Served as Scrum Master.",
              },
            ].map((job, i) => (
              <div
                key={job.company}
                className={`grid md:grid-cols-[200px_1fr] gap-4 py-8 ${
                  i !== 0 ? "border-t border-gray-200" : ""
                }`}
              >
                <div>
                  <p className="text-sm text-gray-500">{job.period}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {job.role}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {job.company}
                  </p>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/resume"
            className="md:hidden inline-flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors mt-8"
          >
            View full resume
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-3">
                Blog
              </h2>
              <p className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900">
                Recent Writing
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors"
            >
              All posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl mb-5 group-hover:from-blue-200 group-hover:to-slate-200 transition-colors" />
                    <time className="text-sm text-gray-500">
                      {formatDate(post.metadata.date)}
                    </time>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.metadata.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {post.metadata.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl">
              <p className="text-gray-500 text-lg">
                Blog posts coming soon. Check back later!
              </p>
            </div>
          )}

          <Link
            href="/blog"
            className="md:hidden inline-flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors mt-8"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
            Let&apos;s build something great together.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            I&apos;m always interested in hearing about new opportunities,
            interesting projects, or just connecting with fellow engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ObfuscatedEmail
              user="bfwarner"
              domain="gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </ObfuscatedEmail>
          </div>
        </div>
      </section>
    </main>
  );
}
