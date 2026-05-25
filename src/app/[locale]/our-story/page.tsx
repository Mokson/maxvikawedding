import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";

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
      <Section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">
            {t("title")}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-dark">
            {t("howItBegan")}
          </h1>
        </div>
      </Section>

      <Section className="py-16 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="w-full aspect-[16/9] bg-taupe/10 rounded mb-16" />

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <blockquote className="text-center">
              <p className="font-serif text-lg italic text-muted leading-relaxed">
                &ldquo;{t("quoteHim")}&rdquo;
              </p>
              <cite className="block mt-4 font-sans text-xs tracking-[0.2em] uppercase text-dark not-italic">
                Max
              </cite>
            </blockquote>
            <blockquote className="text-center">
              <p className="font-serif text-lg italic text-muted leading-relaxed">
                &ldquo;{t("quoteHer")}&rdquo;
              </p>
              <cite className="block mt-4 font-sans text-xs tracking-[0.2em] uppercase text-dark not-italic">
                Victoria
              </cite>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="py-24 px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-dark mb-8">
            {t("coupleTitle")}
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed">
            {t("narrative")}
          </p>
        </div>
      </Section>

      <Section className="py-16 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-dark mb-12">
            {t("restIsHistory")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-taupe/10 rounded"
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
