import Link from "next/link";
import { siGithub, siLinkedin, siX } from "simple-icons";
import { Icon } from "./icon";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/byronwarner",
    icon: siLinkedin,
    title: "LinkedIn",
  },
  {
    href: "https://www.github.com/bwarner",
    icon: siGithub,
    title: "GitHub",
  },
  {
    href: "https://x.com/bewarned",
    icon: siX,
    title: "X",
  },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label={link.title}
              >
                <Icon icon={link.icon} title={link.title} size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} Byron Warner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
