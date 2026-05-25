"use client";

import { useTranslations } from "next-intl";
import { Countdown } from "./countdown";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-warm-white overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('/images/photo-unsplash-1.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-6 animate-fade-in [animation-delay:200ms]">
          {t("subtitle")}
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-dark leading-tight animate-fade-in-up [animation-delay:500ms]">
          {t("names")}
        </h1>

        <p className="font-serif text-2xl md:text-3xl font-light text-muted mt-6 tracking-[0.15em] animate-fade-in [animation-delay:1000ms]">
          {t("date")}
        </p>

        <div className="mt-12 animate-fade-in-up [animation-delay:1300ms]">
          <Countdown />
        </div>
      </div>

      <div className="absolute bottom-8 animate-fade-in [animation-delay:1800ms]">
        <div className="w-px h-12 bg-taupe/50 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
