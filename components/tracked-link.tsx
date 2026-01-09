"use client";

import posthog from "posthog-js";
import Link from "next/link";
import { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
  children: ReactNode;
  className?: string;
  target?: string;
}

export function TrackedLink({
  href,
  eventName,
  eventProperties = {},
  children,
  className,
  target,
}: TrackedLinkProps) {
  const handleClick = () => {
    posthog.capture(eventName, {
      destination_url: href,
      ...eventProperties,
    });
  };

  return (
    <Link
      href={href}
      target={target}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
