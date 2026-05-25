import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";
import { MapEmbed } from "@/components/shared/map-embed";
import { siteConfig } from "@/config/site";

export function VenueSection() {
  const t = useTranslations("venue");
  const h = useTranslations("hero");
  const { venue } = siteConfig.wedding;

  return (
    <Section id="venue" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-dark mb-2 font-serif text-3xl font-light md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-muted mb-4 font-sans text-sm leading-relaxed">
            {h("venueAddress")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl space-y-8">
          <p className="text-muted text-center font-sans text-base leading-relaxed">
            {t("description")}
          </p>
          <p className="text-muted text-center font-sans text-base leading-relaxed">
            {t("chefHighlight")}
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href={venue.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-dark font-sans text-xs tracking-[0.1em] underline underline-offset-4 transition-colors"
            >
              @vinha_boutiquehotel
            </a>
            <a
              href={venue.instagramPost}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-dark font-sans text-xs tracking-[0.1em] underline underline-offset-4 transition-colors"
            >
              {t("viewOnInstagram")}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <MapEmbed venue={h("venue")} address={h("venueAddress")} />
        </div>
      </div>
    </Section>
  );
}
