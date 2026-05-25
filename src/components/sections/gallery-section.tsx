import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";

const PHOTOS = [
  { src: "/images/photo-couple-1.jpg", alt: "Max & Victoria" },
  { src: "/images/photo-couple-2.jpg", alt: "Max & Victoria" },
  { src: "/images/gallery-3.jpg", alt: "Wedding" },
  { src: "/images/photo-unsplash-1.jpg", alt: "Porto" },
];

export function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <Section id="gallery" className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-dark mb-16 text-center font-serif text-3xl font-light md:text-4xl">
          {t("title")}
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <p className="text-muted mt-12 text-center font-sans text-sm">{t("guestPhotos")}</p>
      </div>
    </Section>
  );
}
