"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

const WEDDING_DATE = new Date(siteConfig.wedding.date).getTime();

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

export function useCountdown() {
  const [time, setTime] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}
