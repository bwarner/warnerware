import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WarnerWare",
    short_name: "WarnerWare",
    description:
      "Byron Warner - Software engineer based in San Francisco. Writing about software development, tools, and technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f2937",
    icons: [
      {
        src: "/images/warnerware.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/warnerware.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
