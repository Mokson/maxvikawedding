import type { Metadata } from "next";
import { cormorant, montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-[oklch(97.5%_0.007_80)] text-[oklch(25%_0.015_55)] antialiased">
        <h1 className="mb-4 font-serif text-4xl font-light">404</h1>
        <p className="font-sans text-sm tracking-[0.2em] text-[oklch(52%_0.02_55)] uppercase">
          Page not found
        </p>
      </body>
    </html>
  );
}
