import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";
import { ZoomableGallery } from "@/components/shared/zoomable-gallery";

const PHOTOS = [
  { src: "/images/IMG_1552.JPG" },
  { src: "/images/IMG_3673.JPG", position: "center top" },
  { src: "/images/IMG_4014.JPG" },
  { src: "/images/IMG_2966.JPG" },
  { src: "/images/IMG_1546.JPG" },
  { src: "/images/IMG_3674.JPG", position: "center top" },
  { src: "/images/IMG_7104.JPG" },
  { src: "/images/IMG_2668.JPG" },
  { src: "/images/IMG_4027.JPG" },
  { src: "/images/IMG_8311.JPG" },
  { src: "/images/IMG_8392.JPG" },
  { src: "/images/IMG_7241.JPG" },
];

export function AboutUsSection() {
  const t = useTranslations("aboutUs");

  return (
    <Section id="about-us" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="text-dark mb-8 font-serif text-3xl font-light md:text-4xl">
          {t("title")}
        </h2>
        <p className="text-muted mb-16 max-w-2xl font-sans text-base leading-relaxed">
          {t("paragraph")}
        </p>

        <ZoomableGallery
          photos={PHOTOS}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
          itemClassName="aspect-square"
        />
      </div>
    </Section>
  );
}
