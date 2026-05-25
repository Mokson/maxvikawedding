import { useTranslations } from "next-intl";

const FOOTER_LINKS = [
  { id: "about-us", key: "aboutUs" },
  { id: "schedule", key: "schedule" },
  { id: "venue", key: "venue" },
  { id: "travel", key: "travel" },
  { id: "faq", key: "faq" },
  { id: "rsvp", key: "rsvp" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const email = process.env.RSVP_EMAIL || "email@example.com";

  return (
    <footer className="bg-cream px-6 py-16">
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

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-muted hover:text-dark font-sans text-sm tracking-[0.05em] underline transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-taupe/20 mt-12 border-t pt-6 text-center">
          <p className="text-muted font-serif text-sm italic">M & V</p>
        </div>
      </div>
    </footer>
  );
}
