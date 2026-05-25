"use client";

import { useTranslations } from "next-intl";
import { useCountdown } from "@/hooks/use-countdown";

export function Countdown() {
  const t = useTranslations("hero.countdown");
  const time = useCountdown();

  const units = [
    { value: time?.days ?? 0, label: t("days") },
    { value: time?.hours ?? 0, label: t("hours") },
    { value: time?.minutes ?? 0, label: t("minutes") },
    { value: time?.seconds ?? 0, label: t("seconds") },
  ];

  return (
    <div className="flex gap-6 md:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <span
            className={`text-muted block font-serif text-lg font-light transition-opacity md:text-xl ${time ? "opacity-100" : "opacity-0"}`}
          >
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-muted mt-1 block font-sans text-[9px] tracking-[0.2em] uppercase md:text-[10px]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
