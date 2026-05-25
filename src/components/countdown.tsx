"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const WEDDING_DATE = new Date("2026-09-13T13:00:00").getTime();

function calculateTimeLeft() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const t = useTranslations("home.countdown");
  const [time, setTime] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: time.days, label: t("days") },
    { value: time.hours, label: t("hours") },
    { value: time.minutes, label: t("minutes") },
    { value: time.seconds, label: t("seconds") },
  ];

  return (
    <div className="flex gap-8 md:gap-12">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <span className="block font-serif text-4xl md:text-5xl font-light text-dark">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-muted mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
