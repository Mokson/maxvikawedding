import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const email = process.env.RSVP_EMAIL || "email@example.com";

  return (
    <footer className="bg-warm-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="text-muted mb-2 font-serif text-lg">{t("questions")}</p>
            <a
              href={`mailto:${email}`}
              className="text-dark hover:text-accent font-sans text-sm font-medium tracking-[0.15em] uppercase underline transition-colors"
            >
              {t("emailUs")}
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href="#schedule"
              className="text-muted hover:text-dark font-sans text-sm tracking-[0.05em] underline transition-colors"
            >
              {t("venue")}
            </a>
            <a
              href="#travel"
              className="text-muted hover:text-dark font-sans text-sm tracking-[0.05em] underline transition-colors"
            >
              {t("travelStay")}
            </a>
            <a
              href="#rsvp"
              className="text-muted hover:text-dark font-sans text-sm tracking-[0.05em] underline transition-colors"
            >
              {t("rsvp")}
            </a>
          </div>

          <div className="text-center md:text-right" />
        </div>

        <div className="border-taupe/20 mt-12 border-t pt-6 text-center">
          <p className="text-muted font-serif text-sm italic">M & V</p>
        </div>
      </div>
    </footer>
  );
}
