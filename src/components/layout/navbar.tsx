"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./language-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { sections } from "@/config/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const MENU_SECTIONS = sections.filter((s) => s.id !== "hero");

export function Navbar() {
  const t = useTranslations("nav");
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream/90 border-taupe/20 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
          <SheetContent side="left" className="bg-cream border-taupe/20 w-full border-r">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {MENU_SECTIONS.map((section) => (
                <SheetClose key={section.id} asChild>
                  <a
                    href={`#${section.id}`}
                    className={`font-serif text-2xl font-light tracking-wider ${
                      activeId === section.id ? "text-dark" : "text-muted hover:text-dark"
                    }`}
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

        <a
          href="#hero"
          className="text-dark absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-light tracking-wider"
        >
          M&V
        </a>

        <LanguageToggle />
      </nav>
    </header>
  );
}
