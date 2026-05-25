import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";

export function StorySection() {
  const t = useTranslations("ourStory");

  return (
    <Section id="our-story" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-accent mb-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase">
              {t("howItBegan")}
            </p>
            <h2 className="text-dark mb-8 font-serif text-3xl font-light md:text-4xl">
              {t("coupleTitle")}
            </h2>
            <p className="text-muted font-sans text-base leading-relaxed">{t("narrative")}</p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/photo-couple-1.jpg"
              alt="Max & Victoria"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
