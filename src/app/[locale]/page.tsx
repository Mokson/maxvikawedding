import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { MapEmbed } from "@/components/map-embed";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");

  return (
    <>
      <Hero />

      <Section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-dark mb-16">
            {t("details")}
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-full aspect-[4/3] bg-taupe/10 rounded mb-8" />
              <h3 className="font-serif text-2xl font-light text-dark">
                {t("ceremony")}
              </h3>
              <p className="font-serif text-xl text-accent mt-2">
                {t("ceremonyTime")}
              </p>
              <p className="font-sans text-sm text-muted mt-4 leading-relaxed">
                <span className="font-medium text-dark block">
                  {t("ceremonyVenue")}
                </span>
                {t("ceremonyAddress")}
              </p>
              <MapEmbed
                venue={t("ceremonyVenue")}
                address={t("ceremonyAddress")}
              />
            </div>

            <div className="text-center">
              <div className="w-full aspect-[4/3] bg-taupe/10 rounded mb-8" />
              <h3 className="font-serif text-2xl font-light text-dark">
                {t("reception")}
              </h3>
              <p className="font-serif text-xl text-accent mt-2">
                {t("receptionTime")}
              </p>
              <p className="font-sans text-sm text-muted mt-4 leading-relaxed">
                <span className="font-medium text-dark block">
                  {t("receptionVenue")}
                </span>
                {t("receptionAddress")}
              </p>
              <MapEmbed
                venue={t("receptionVenue")}
                address={t("receptionAddress")}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24 px-6 bg-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">
            {t("joinUs")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-dark mb-8">
            {t("hopeMakeIt")}
          </h2>
          <Link
            href="/rsvp"
            className="inline-block font-sans text-xs font-medium tracking-[0.2em] uppercase border border-dark px-10 py-4 text-dark hover:bg-dark hover:text-cream transition-colors"
          >
            {t("rsvpButton")}
          </Link>
        </div>
      </Section>
    </>
  );
}
