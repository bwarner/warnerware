import type { Config } from "tailwindcss";
import { montserrat } from "./app/fonts";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["--font-pt-serif", "serif"],
        montserrat: ["--font-montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        sidenav: "240px 1fr",
        experience: "10px 1fr 1fr 1fr",
        toolsMid: "10px 1fr 10px 1fr 10px 1fr 10px 1fr",
        tools: "10px 1fr 10px 1fr",
        skills: "32px 1fr",
      },
      listStyleImage: {
        circle: "url('/images/circle.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
