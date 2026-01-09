import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Download } from "lucide-react";
import { ObfuscatedEmail, ObfuscatedPhone, TrackedLink } from "@/components";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Byron Warner - Engineering leader with deep experience spanning full-stack development, team building, and product delivery.",
};

// Structured data for search engines (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Byron Warner",
  jobTitle: "Director of Engineering",
  url: "https://warnerware.com",
  sameAs: [
    "https://www.linkedin.com/in/byronwarner/",
    "https://github.com/bwarner",
    "https://x.com/bewarned",
  ],
  // Only city-level location, no street address
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Georgia Institute of Technology",
      department: "Computer Science",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of North Carolina at Chapel Hill",
      department: "Mathematical Sciences",
    },
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Ruby on Rails",
    "AWS",
    "PostgreSQL",
    "GraphQL",
    "iOS Development",
    "Team Leadership",
    "Agile Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Available for opportunities",
  },
  description:
    "Engineering leader with deep experience spanning full-stack development, team building, and product delivery.",
};

export default function ResumePage() {
  return (
    <>
      {/* JSON-LD Structured Data - placed in head for Google */}
      <Script
        id="resume-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen px-6 py-12">
        <article className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-8 pb-8 border-b-2 border-blue-600">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold font-montserrat tracking-tight">
                  Byron Warner
                </h1>
                <p className="mt-2 text-gray-600">
                  <strong className="text-gray-900">San Francisco, CA</strong> ·{" "}
                  <ObfuscatedPhone parts={["415", "819", "1957"]} /> ·{" "}
                  <ObfuscatedEmail
                    user="bfwarner"
                    domain="gmail.com"
                    className="text-blue-600 hover:underline"
                  />{" "}
                  ·{" "}
                  <Link
                    href="https://www.linkedin.com/in/byronwarner/"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/byronwarner
                  </Link>
                </p>
              </div>
              <TrackedLink
                href="/byron-warner-resume.pdf"
                target="_blank"
                eventName="resume_downloaded"
                eventProperties={{ source: "resume_page" }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </TrackedLink>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600 border-b border-gray-200 pb-2 mb-4">
              Summary
            </h2>
            <p className="leading-relaxed">
              Engineering leader with deep experience spanning full-stack
              development, team building, and product delivery. Recently rebuilt
              an engineering organization from the ground up, launched multiple
              products from conception to production, and managed distributed
              teams across the Americas. Hands-on technical leader who codes
              daily while driving strategy and mentoring teams.
            </p>
          </section>

          {/* Technical Expertise */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600 border-b border-gray-200 pb-2 mb-4">
              Technical Expertise
            </h2>
            <div className="space-y-2">
              <p>
                <strong className="text-gray-900">
                  Languages & Frameworks:
                </strong>{" "}
                TypeScript, JavaScript, Ruby on Rails, Node.js, NestJS, React,
                Next.js, Angular, Swift, Objective-C, Java
              </p>
              <p>
                <strong className="text-gray-900">
                  Cloud & Infrastructure:
                </strong>{" "}
                AWS (CDK, S3, CloudFront, Lambda), Docker, CI/CD (Jenkins,
                GitHub Actions)
              </p>
              <p>
                <strong className="text-gray-900">Data:</strong> PostgreSQL,
                MongoDB, Couchbase, SQLite, GraphQL, Apollo
              </p>
              <p>
                <strong className="text-gray-900">Practices:</strong>{" "}
                Agile/Scrum, Code Review, TDD, Remote Team Management
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600 border-b border-gray-200 pb-2 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {/* Oncue */}
              <div>
                <h3 className="text-lg font-semibold">
                  Director of Engineering
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">Oncue</strong> · San
                  Francisco, CA · Jul 2020 – Sep 2024
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>
                    Defined and executed engineering vision, strategy, and goals
                    aligned with company objectives
                  </li>
                  <li>
                    <strong>Hands-on technical leadership</strong>: wrote
                    features and reviewed code for critical projects including
                    Web booking lead form, next-gen CRM, Customer Portal, and
                    Reporting dashboard
                  </li>
                  <li>
                    <strong>Architected and developed core services</strong>{" "}
                    using TypeScript, GraphQL, AWS, and Next.js
                  </li>
                  <li>
                    Implemented <strong>Dropbox Sign</strong> integration: built
                    webhook handlers for signature events and created reusable
                    React component wrapping the embedded signing experience
                  </li>
                  <li>
                    Integrated <strong>Twilio</strong> IVR and Messaging APIs;
                    implemented <strong>Stripe</strong> subscription billing for
                    the Customer Portal
                  </li>
                  <li>
                    Rebuilt and led a distributed engineering team across Latin
                    America and the U.S.
                  </li>
                </ul>
              </div>

              {/* Healthline */}
              <div>
                <h3 className="text-lg font-semibold">
                  Principal Software Engineer
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">Healthline Media</strong> ·
                  San Francisco, CA · Nov 2016 – Jul 2020
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>
                    Full-stack development on Healthline&apos;s platform rebuild
                    using Next.js, Node.js, and React on AWS
                  </li>
                  <li>
                    Built ad display framework using Google Publisher Tags (GPT)
                    and Prebid.js header bidding
                  </li>
                  <li>
                    Architected static failover site using AWS S3 and CloudFront
                    as CDN
                  </li>
                  <li>
                    Built GDPR-compliant system to handle data requests,
                    auditing, and user data removal
                  </li>
                  <li>
                    Implemented California Consumer Privacy Act (CCPA) UI and
                    IAB User Signal API
                  </li>
                </ul>
              </div>

              {/* OpenTable */}
              <div>
                <h3 className="text-lg font-semibold">
                  Principal Software Engineer
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">OpenTable</strong> · San
                  Francisco, CA · Apr 2016 – Nov 2016
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>
                    Built features for Guest Center product enabling restaurants
                    to manage table inventory
                  </li>
                  <li>Developed in Angular 1.3, Less, Mono, and MongoDB</li>
                  <li>
                    Rolled out E2E testing system using Nightwatch.js, Selenium
                    Grid, and TeamCity
                  </li>
                  <li>
                    Built restaurant data migration tool in React, Redux, and
                    Node.js
                  </li>
                </ul>
              </div>

              {/* Constant Contact */}
              <div>
                <h3 className="text-lg font-semibold">
                  Principal Software Engineer
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">Constant Contact</strong> ·
                  San Francisco, CA · Apr 2013 – Jan 2016
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>
                    Lead iOS developer for Constant Contact&apos;s email
                    marketing app
                  </li>
                  <li>
                    Created Model-View-Presenter (MVP) architecture to improve
                    UI testability
                  </li>
                  <li>
                    Extended data sync engine with caching, indexing, and
                    full-text search using FMDB and SQLite
                  </li>
                  <li>
                    Built CI/CD pipeline with Jenkins for automated testing and
                    deployment
                  </li>
                  <li>
                    Served as Scrum Master for team of 4 developers and 2 QAs
                  </li>
                </ul>
              </div>

              {/* GAP */}
              <div>
                <h3 className="text-lg font-semibold">Senior UI Developer</h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">GAP Inc</strong> · San
                  Francisco, CA · May 2012 – Apr 2013
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>
                    Key contributor on team implementing faceted navigation for
                    product catalog
                  </li>
                  <li>
                    Built Responsive Design JavaScript framework for adapting
                    pages across mobile, tablet, and desktop
                  </li>
                  <li>
                    Created Angular.js prototype demonstrating grid-based
                    shopping cart design
                  </li>
                </ul>
              </div>

              {/* Contract Work */}
              <div>
                <h3 className="text-lg font-semibold">
                  Contract Engineer (via Vircon)
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">Various Clients</strong> ·
                  San Francisco Bay Area · 2005 – 2012
                </p>
                <div className="ml-4 space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">
                      Walmart{" "}
                      <span className="font-normal text-gray-600">
                        · Aug 2010 – Oct 2011
                      </span>
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      <li>
                        Developed features for Walmart&apos;s mobile website and
                        native iPhone app
                      </li>
                      <li>
                        Built credit card and address entry flows using Apache
                        Wicket
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Wells Fargo{" "}
                      <span className="font-normal text-gray-600">
                        · Jan 2006 – Oct 2009
                      </span>
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      <li>
                        Developed CEO Workstation, a highly interactive
                        web-based cash management app
                      </li>
                      <li>
                        Built features for Online Bill Payment service using
                        XSLT templates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Moody's */}
              <div>
                <h3 className="text-lg font-semibold">
                  Director, Hosted Products Group
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong className="text-gray-900">
                    Moody&apos;s Analytics
                  </strong>{" "}
                  · San Francisco, CA · 2000 – 2004
                </p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>
                    Managed team of 6 developers delivering all web-based
                    products
                  </li>
                  <li>
                    Responsible for project management, architectural design and
                    review, hiring decisions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600 border-b border-gray-200 pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-2">
              <p>
                <strong className="text-gray-900">M.S. Computer Science</strong>{" "}
                · Georgia Institute of Technology
              </p>
              <p>
                <strong className="text-gray-900">
                  B.S. Mathematical Sciences
                </strong>{" "}
                · University of North Carolina, Chapel Hill
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
