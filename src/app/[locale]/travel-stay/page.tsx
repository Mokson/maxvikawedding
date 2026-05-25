import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TravelStayPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TravelStayContent />;
}

function TravelStayContent() {
  const t = useTranslations("travelStay");

  return (
    <div className="pt-24">
      <Section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-dark">
            {t("title")}
          </h1>
        </div>
      </Section>

      <Section className="py-16 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-light text-dark text-center mb-6">
            {t("gettingThere")}
          </h2>
          <p className="font-sans text-sm text-muted text-center leading-relaxed max-w-xl mx-auto">
            {t("gettingThereText")}
          </p>
        </div>
      </Section>

      <Section className="py-16 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-light text-dark text-center mb-6">
            {t("whereToStay")}
          </h2>
          <p className="font-sans text-sm text-muted text-center leading-relaxed max-w-xl mx-auto mb-10">
            {t("whereToStayText")}
          </p>
          <div className="max-w-md mx-auto">
            <a
              href="https://www.vinhaboutiquehotel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-warm-white rounded p-8 text-center border border-taupe hover:border-dark transition-colors group"
            >
              <div className="w-full aspect-[16/9] bg-taupe/20 rounded mb-4" />
              <h3 className="font-serif text-xl text-dark group-hover:text-accent transition-colors">
                {t("hotelName")}
              </h3>
              <p className="font-sans text-xs text-muted mt-2">
                {t("hotelDescription")}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-accent">
                  {t("visitWebsite")}
                </span>
              </div>
            </a>
            <div className="flex justify-center gap-6 mt-6">
              <a
                href="https://maps.app.goo.gl/QTw3Z7rZZo6oqA536"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors"
              >
                {t("viewOnMap")}
              </a>
              <a
                href="https://www.instagram.com/vinha_boutiquehotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-light text-dark text-center mb-6">
            {t("thingsToDo")}
          </h2>
          <p className="font-sans text-sm text-muted text-center leading-relaxed max-w-xl mx-auto">
            {t("thingsToDoText")}
          </p>
        </div>
      </Section>
    </div>
  );
}
