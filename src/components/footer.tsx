import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-warm-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-muted mb-2">
              {t("questions")}
            </p>
            <a
              href="mailto:email@example.com"
              className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-dark hover:text-accent transition-colors underline"
            >
              {t("emailUs")}
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="/#venue"
              className="text-sm font-sans tracking-[0.05em] text-muted hover:text-dark transition-colors underline"
            >
              {t("venue")}
            </Link>
            <Link
              href="/travel-stay"
              className="text-sm font-sans tracking-[0.05em] text-muted hover:text-dark transition-colors underline"
            >
              {t("travelStay")}
            </Link>
            <Link
              href="/rsvp"
              className="text-sm font-sans tracking-[0.05em] text-muted hover:text-dark transition-colors underline"
            >
              {t("rsvp")}
            </Link>
          </div>

          <div className="text-center md:text-right" />
        </div>

        <div className="mt-12 pt-6 border-t border-taupe/20 text-center">
          <p className="font-serif text-sm text-muted italic">M & V</p>
        </div>
      </div>
    </footer>
  );
}
