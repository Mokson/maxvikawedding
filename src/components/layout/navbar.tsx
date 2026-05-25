"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./language-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { sections } from "@/config/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const NAV_SECTIONS = sections.filter((s) => s.id !== "hero" && s.id !== "travel");

export function Navbar() {
  const t = useTranslations("nav");
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream/90 border-taupe/20 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="hidden items-center gap-8 md:flex">
          {NAV_SECTIONS.slice(0, 3).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`font-sans text-xs font-medium tracking-[0.12em] uppercase transition-colors ${
                activeId === section.id ? "text-dark" : "text-muted hover:text-dark"
              }`}
            >
              {t(section.navKey)}
            </a>
          ))}
        </div>

        <a
          href="#hero"
          className="text-dark absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-light tracking-wider"
        >
          M&V
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_SECTIONS.slice(3, 5).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`font-sans text-xs font-medium tracking-[0.12em] uppercase transition-colors ${
                activeId === section.id ? "text-dark" : "text-muted hover:text-dark"
              }`}
            >
              {t(section.navKey)}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#rsvp"
            className="text-dark border-dark hover:bg-dark hover:text-cream border px-5 py-2 font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors"
          >
            {t("rsvp")}
          </a>
        </div>

        <div className="ml-auto md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="relative z-50 p-2" aria-label="Open menu">
                <div className="flex w-6 flex-col gap-1.5">
                  <span className="bg-dark block h-px w-full" />
                  <span className="bg-dark block h-px w-full" />
                  <span className="bg-dark block h-px w-full" />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream border-taupe/20 w-full border-l">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col items-center justify-center gap-8">
                {NAV_SECTIONS.map((section) => (
                  <SheetClose key={section.id} asChild>
                    <a
                      href={`#${section.id}`}
                      className="text-dark font-serif text-2xl font-light tracking-wider"
                      onClick={() => setOpen(false)}
                    >
                      {t(section.navKey)}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-4">
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
