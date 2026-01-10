import createMDX from "@next/mdx";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: "Code" },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
});

export default withMDX(nextConfig);
