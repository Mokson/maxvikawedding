"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./language-toggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/our-story" as const, label: t("ourStory") },
    { href: "/registry" as const, label: t("registry") },
    { href: "/travel-stay" as const, label: t("travelStay") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-muted hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-serif text-2xl font-light tracking-wider text-dark absolute left-1/2 -translate-x-1/2"
        >
          M&V
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <LanguageToggle />
          <Link
            href="/rsvp"
            className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-dark border border-dark px-5 py-2 hover:bg-dark hover:text-cream transition-colors"
          >
            {t("rsvp")}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 relative ml-auto"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-full bg-dark"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-full bg-dark"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-full bg-dark"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-light tracking-wider text-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rsvp"
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl font-light tracking-wider text-dark border-b border-dark pb-1"
            >
              {t("rsvp")}
            </Link>
            <LanguageToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
