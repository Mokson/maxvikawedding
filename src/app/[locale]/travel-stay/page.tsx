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
          <p className="font-sans text-sm text-muted text-center italic max-w-md mx-auto">
            {t("whereToStayNote")}
          </p>
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
