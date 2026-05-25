import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/shared/section-wrapper";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OurStoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <OurStoryContent />;
}

function OurStoryContent() {
  const t = useTranslations("ourStory");

  return (
    <div className="pt-24">
      <Section className="bg-cream px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-dark font-serif text-4xl font-light md:text-5xl">
            {t("howItBegan")}
          </h1>
        </div>
      </Section>

      <section className="w-full">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/images/photo-couple-2.jpg"
            alt="Max & Victoria"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <Section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-20 max-w-xl">
            <blockquote>
              <p className="text-dark font-serif text-xl leading-relaxed italic md:text-2xl">
                &ldquo;{t("quoteHim")}&rdquo;
              </p>
              <cite className="text-muted mt-4 block font-sans text-xs tracking-[0.2em] uppercase not-italic">
                Max
              </cite>
            </blockquote>
          </div>

          <div className="ml-auto max-w-xl">
            <blockquote className="text-right">
              <p className="text-dark font-serif text-xl leading-relaxed italic md:text-2xl">
                &ldquo;{t("quoteHer")}&rdquo;
              </p>
              <cite className="text-muted mt-4 block font-sans text-xs tracking-[0.2em] uppercase not-italic">
                Victoria
              </cite>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="bg-warm-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="border-taupe/30 mb-8 w-16 border-t" />
              <h2 className="text-dark mb-8 font-serif text-3xl font-light md:text-4xl">
                {t("coupleTitle")}
              </h2>
              <p className="text-muted font-sans text-base leading-relaxed">{t("narrative")}</p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded">
              <Image
                src="/images/photo-couple-1.jpg"
                alt="Max & Victoria"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-dark mb-6 font-serif text-3xl font-light md:text-4xl">
            {t("restIsHistory")}
          </h2>
          <p className="text-muted font-sans text-base leading-relaxed">{t("narrative")}</p>
        </div>
      </Section>

      <section className="bg-warm-white px-4 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { src: "/images/photo-unsplash-1.jpg", alt: "Wedding arch", aspect: "aspect-[3/4]" },
            { src: "/images/gallery-3.jpg", alt: "Wedding bouquet", aspect: "aspect-square" },
            { src: "/images/photo-couple-2.jpg", alt: "Max & Victoria", aspect: "aspect-square" },
            { src: "/images/photo-couple-1.jpg", alt: "Max & Victoria", aspect: "aspect-[3/4]" },
          ].map((img) => (
            <div
              key={img.src + img.aspect}
              className={`${img.aspect} relative overflow-hidden rounded`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
