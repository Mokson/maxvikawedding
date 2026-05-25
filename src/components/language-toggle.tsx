"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "en" ? "uk" : "en";
  const label = locale === "en" ? "UK" : "EN";

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-xs font-sans font-medium tracking-[0.15em] text-muted hover:text-dark transition-colors px-2 py-1 border border-taupe/30 rounded"
      aria-label={`Switch to ${otherLocale === "en" ? "English" : "Ukrainian"}`}
    >
      {label}
    </button>
  );
}
