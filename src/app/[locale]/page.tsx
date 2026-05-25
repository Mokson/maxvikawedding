import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { MapEmbed } from "@/components/map-embed";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");

  return (
    <>
      <Hero />

      <Section className="py-24 px-6 bg-cream" id="venue">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/5] rounded overflow-hidden relative">
              <Image
                src="/images/photo-couple-1.jpg"
                alt="Max & Victoria"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-dark mb-10">
                {t("details")}
              </h2>
              <p className="font-serif text-xl text-accent mb-4">
                {t("venueTime")}
              </p>
              <h3 className="font-serif text-2xl font-light text-dark">
                {t("venue")}
              </h3>
              <p className="font-sans text-sm text-muted mt-4 leading-relaxed whitespace-pre-line">
                {t("venueAddress")}
              </p>
              <MapEmbed
                venue={t("venue")}
                address={t("venueAddress")}
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="relative py-32 px-6 overflow-hidden isolate">
        <div className="absolute inset-0 bg-[url('/images/photo-unsplash-1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/80 mb-4">
            {t("joinUs")}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-cream mb-10">
            {t("hopeMakeIt")}
          </h2>
          <Link
            href="/rsvp"
            className="inline-block font-sans text-xs font-medium tracking-[0.2em] uppercase bg-cream/95 px-12 py-5 text-dark hover:bg-cream transition-colors"
          >
            {t("rsvpButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
