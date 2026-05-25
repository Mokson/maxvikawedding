"use client";

import { useTranslations } from "next-intl";
import { Countdown } from "@/components/shared/countdown";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="bg-warm-white relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[url('/images/photo-unsplash-1.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="text-muted animate-fade-in mb-8 font-serif text-3xl font-normal italic tracking-normal [animation-delay:200ms] md:text-4xl">
          {t("subtitle")}
        </p>

        <h1 className="text-dark animate-fade-in-up font-serif text-5xl leading-tight font-light [animation-delay:500ms] md:text-7xl lg:text-8xl">
          {t("names")}
        </h1>

        <div className="animate-fade-in mt-10 flex items-center gap-6 [animation-delay:1000ms]">
          <div className="bg-taupe h-px w-16" />
          <p className="text-muted font-sans text-lg font-medium tracking-[0.3em] uppercase md:text-xl">
            {t("date")}
          </p>
          <div className="bg-taupe h-px w-16" />
        </div>

        <div className="animate-fade-in-up mt-16 opacity-40 [animation-delay:1300ms]">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
