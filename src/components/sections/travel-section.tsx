import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";
import { MapEmbed } from "@/components/shared/map-embed";

export function TravelSection() {
  const t = useTranslations("travel");
  const h = useTranslations("hero");

  return (
    <Section id="travel" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-dark mb-16 text-center font-serif text-3xl font-light md:text-4xl">
          {t("title")}
        </h2>

        <div className="space-y-16">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
              {t("gettingThere")}
            </p>
            <p className="text-muted font-sans text-base leading-relaxed">
              {t("gettingThereText")}
            </p>
          </div>

          <div className="mx-auto max-w-xl text-center">
            <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
              {t("whereToStay")}
            </p>
            <p className="text-muted mb-4 font-sans text-base leading-relaxed">
              {t("whereToStayText")}
            </p>
            <p className="text-muted font-sans text-sm italic">{t("whereToStayNote")}</p>
          </div>

          <div className="mx-auto max-w-xl text-center">
            <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
              {t("thingsToDo")}
            </p>
            <p className="text-muted font-sans text-base leading-relaxed">{t("thingsToDoText")}</p>
          </div>

          <div className="mx-auto max-w-xl">
            <MapEmbed venue={h("venue")} address={h("venueAddress")} />
          </div>
        </div>
      </div>
    </Section>
  );
}
