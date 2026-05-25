"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "en" ? "uk" : "en";
  const label = locale === "en" ? "Укр" : "EN";

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-muted hover:text-dark border-taupe/30 rounded border px-2 py-1 font-sans text-xs font-medium tracking-[0.15em] transition-colors"
      aria-label={`Switch to ${otherLocale === "en" ? "English" : "Ukrainian"}`}
    >
      {label}
    </button>
  );
}
