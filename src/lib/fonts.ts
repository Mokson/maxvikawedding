import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
  display: "swap",
});

export const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});
