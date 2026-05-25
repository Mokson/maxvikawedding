import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";
import { ZoomableGallery } from "@/components/shared/zoomable-gallery";

const PORTO_PHOTOS = [
  { src: "/images/porto-bridge-sunset.jpg", alt: "Dom Luis I Bridge at sunset" },
  { src: "/images/porto-riverfront.jpg", alt: "Porto riverfront at sunset" },
  { src: "/images/porto-beach.jpg", alt: "Porto coastline" },
  { src: "/images/porto-aerial.jpg", alt: "Vila Nova de Gaia aerial view" },
  { src: "/images/porto-cityscape.jpg", alt: "Porto historic cityscape" },
  { src: "/images/porto-bridge-night.jpg", alt: "Dom Luis I Bridge at night" },
];

export function TravelSection() {
  const t = useTranslations("travel");

  return (
    <Section id="travel" className="bg-warm-white px-6 py-24">
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
              {t("portoGuide")}
            </p>
            <p className="text-muted mb-8 font-sans text-base leading-relaxed">
              {t("portoGuideText")}
            </p>
          </div>

          <ZoomableGallery
            photos={PORTO_PHOTOS}
            className="grid grid-cols-2 gap-3 md:grid-cols-3"
          />

          <div className="mx-auto max-w-xl text-center">
            <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
              {t("thingsToDo")}
            </p>
            <p className="text-muted font-sans text-base leading-relaxed">{t("thingsToDoText")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
