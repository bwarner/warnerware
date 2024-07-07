import { PT_Serif, Montserrat } from "next/font/google";
import "./globals.css";

export const ptSerif = PT_Serif({
  weight: "400",
  variable: "--font-pt-serif",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  weight: "400",
  style: "normal",
  variable: "--font-montserrat",
  subsets: ["latin"],
});
