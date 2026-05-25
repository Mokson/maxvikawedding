"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function StickyRsvpCta() {
  const t = useTranslations("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("hero");
      const rsvp = document.getElementById("rsvp");
      if (!hero || !rsvp) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const rsvpTop = rsvp.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setVisible(heroBottom < 0 && rsvpTop > windowHeight);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#rsvp"
      className="bg-accent-color text-surface fixed right-6 bottom-6 z-40 px-6 py-3 font-sans text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
    >
      {t("rsvpButton")}
    </a>
  );
}
