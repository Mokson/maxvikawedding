import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/shared/section-wrapper";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TravelStayPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TravelStayContent />;
}

function TravelStayContent() {
  const t = useTranslations("travel");

  return (
    <div className="pt-24">
      <Section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-dark font-serif text-4xl font-light md:text-5xl">{t("title")}</h1>
        </div>
      </Section>

      <Section className="bg-warm-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-dark mb-6 text-center font-serif text-2xl font-light">
            {t("gettingThere")}
          </h2>
          <p className="text-muted mx-auto max-w-xl text-center font-sans text-sm leading-relaxed">
            {t("gettingThereText")}
          </p>
        </div>
      </Section>

      <Section className="bg-cream px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-dark mb-6 text-center font-serif text-2xl font-light">
            {t("whereToStay")}
          </h2>
          <p className="text-muted mx-auto mb-10 max-w-xl text-center font-sans text-sm leading-relaxed">
            {t("whereToStayText")}
          </p>
          <p className="text-muted mx-auto max-w-md text-center font-sans text-sm italic">
            {t("whereToStayNote")}
          </p>
        </div>
      </Section>

      <Section className="bg-warm-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-dark mb-6 text-center font-serif text-2xl font-light">
            {t("thingsToDo")}
          </h2>
          <p className="text-muted mx-auto max-w-xl text-center font-sans text-sm leading-relaxed">
            {t("thingsToDoText")}
          </p>
        </div>
      </Section>
    </div>
  );
}
