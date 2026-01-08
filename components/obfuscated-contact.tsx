"use client";

import { useCallback } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Obfuscated email link that constructs the mailto: href client-side
 * to prevent bot scraping. Uses onClick to open mailto: which bots
 * that don't execute JavaScript won't trigger.
 */
export function ObfuscatedEmail({
  user,
  domain,
  className,
  children,
}: ObfuscatedEmailProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      // Assemble email only when clicked to avoid static scraping
      const email = `${user}@${domain}`;
      window.location.href = `mailto:${email}`;
    },
    [user, domain],
  );

  return (
    <a href="#contact" className={className} onClick={handleClick}>
      {children || "Contact"}
    </a>
  );
}

interface ObfuscatedPhoneProps {
  parts: string[];
  className?: string;
}

/**
 * Obfuscated phone display that constructs the number client-side.
 * Phone is split into parts and assembled via JavaScript.
 * Uses data attributes that are combined client-side.
 */
export function ObfuscatedPhone({ parts, className }: ObfuscatedPhoneProps) {
  // Render parts separately - bots won't know to combine them
  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={i} data-p={part}>
          {part}
          {i < parts.length - 1 && "-"}
        </span>
      ))}
    </span>
  );
}
