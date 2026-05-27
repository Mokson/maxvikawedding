"use client";

import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Countdown } from "@/components/shared/countdown";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const t = useTranslations("hero");
  const { coordinates } = siteConfig.wedding.venue;
  const venueUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;

  return (
    <section
      id="hero"
      className="relative flex h-[900px] flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-wedding.jpg')] bg-[length:1920px_auto] bg-[center_50%]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="animate-fade-in mb-8 font-serif text-3xl font-normal italic tracking-normal text-white/70 [animation-delay:200ms] md:text-4xl">
          {t("subtitle")}
        </p>

        <h1 className="animate-fade-in-up font-serif text-5xl leading-tight font-light text-white [animation-delay:500ms] md:text-7xl lg:text-8xl">
          {t("names")}
        </h1>

        <div className="animate-fade-in mt-10 flex items-center gap-6 [animation-delay:1000ms]">
          <div className="h-px w-16 bg-white/30" />
          <p className="whitespace-nowrap font-sans text-lg font-medium tracking-[0.3em] uppercase text-white/80 md:text-xl">
            {t("date")}
          </p>
          <div className="h-px w-16 bg-white/30" />
        </div>

        <a
          href={venueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in mt-4 inline-flex items-center gap-1.5 font-sans text-sm tracking-[0.15em] text-white transition-colors hover:text-white/80 [animation-delay:1200ms]"
        >
          <MapPin className="size-3.5" strokeWidth={1.5} />
          {t("location")}
        </a>

        <div className="animate-fade-in-up mt-16 [animation-delay:1300ms]">
          <Countdown />
        </div>

        <a
          href="#rsvp"
          className="animate-fade-in-up mt-12 border border-white/80 bg-white/80 px-10 py-4 font-sans text-xs font-medium tracking-[0.2em] uppercase text-dark transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary [animation-delay:1600ms]"
        >
          {t("rsvpButton")}
        </a>
      </div>
    </section>
  );
}
