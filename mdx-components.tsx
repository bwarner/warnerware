import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Typography overrides with Tailwind prose-like styling
    h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className="mt-8 mb-4 text-4xl font-bold tracking-tight font-montserrat"
        {...props}
      />
    ),
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className="mt-8 mb-4 text-3xl font-semibold tracking-tight font-montserrat scroll-mt-20"
        {...props}
      />
    ),
    h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className="mt-6 mb-3 text-2xl font-semibold tracking-tight font-montserrat scroll-mt-20"
        {...props}
      />
    ),
    h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className="mt-6 mb-3 text-xl font-semibold tracking-tight font-montserrat"
        {...props}
      />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
      <p className="my-4 leading-7" {...props} />
    ),
    a: ({
      href,
      children,
      ...props
    }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
          {...props}
        >
          {children}
        </Link>
      );
    },
    ul: (props: HTMLAttributes<HTMLUListElement>) => (
      <ul className="my-4 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    ol: (props: HTMLAttributes<HTMLOListElement>) => (
      <ol className="my-4 ml-6 list-decimal [&>li]:mt-2" {...props} />
    ),
    li: (props: HTMLAttributes<HTMLLIElement>) => (
      <li className="leading-7" {...props} />
    ),
    blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="my-6 border-l-4 border-gray-300 pl-4 italic text-gray-600"
        {...props}
      />
    ),
    code: (props: HTMLAttributes<HTMLElement>) => (
      <code
        className="relative rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm"
        {...props}
      />
    ),
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100"
        {...props}
      />
    ),
    hr: (props: HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-8 border-gray-200" {...props} />
    ),
    table: (props: HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200" {...props} />
      </div>
    ),
    th: (props: HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50"
        {...props}
      />
    ),
    td: (props: HTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-4 py-3 text-sm text-gray-700 border-t" {...props} />
    ),
    img: ({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => {
      // Only render if src is a valid string
      if (typeof src !== "string") return null;
      return (
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={400}
          className="my-6 rounded-lg"
        />
      );
    },
    // Next.js components available in MDX
    Image,
    Link,
    ...components,
  };
}

export default useMDXComponents;
