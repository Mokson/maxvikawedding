import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-warm-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif text-lg text-muted mb-2">{t("questions")}</p>
        <a
          href="mailto:email@example.com"
          className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-dark hover:text-accent transition-colors"
        >
          {t("emailUs")}
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <Link
            href="/"
            className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors"
          >
            {t("venue")}
          </Link>
          <Link
            href="/travel-stay"
            className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors"
          >
            {t("travelStay")}
          </Link>
          <Link
            href="/registry"
            className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors"
          >
            {t("registry")}
          </Link>
          <Link
            href="/rsvp"
            className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors"
          >
            {t("rsvp")}
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-taupe/20">
          <p className="font-serif text-sm text-muted italic">M & V</p>
        </div>
      </div>
    </footer>
  );
}
