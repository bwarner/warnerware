import type { Metadata } from "next";
import cn from "clsx";
import { ptSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byron's Personal Page",
  description:
    "I'm a software engineer who learn about programming and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className={(cn(ptSerif.variable), "color-white-900", "text-gray-600")}
      >
        {children}
      </body>
    </html>
  );
}
