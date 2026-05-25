import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RegistryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <RegistryContent />;
}

function RegistryContent() {
  const t = useTranslations("registry");

  return (
    <div className="pt-24">
      <Section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">
            {t("title")}
          </p>
          <div className="w-full aspect-[21/9] bg-taupe/10 rounded mb-16" />
        </div>
      </Section>

      <Section className="py-24 px-6 bg-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl font-light text-dark leading-relaxed mb-6">
            {t("message")}
          </p>
          <p className="font-sans text-sm text-muted mb-10">
            {t("giftNote")}
          </p>
          <a
            href="https://www.zola.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs font-medium tracking-[0.2em] uppercase border border-dark px-10 py-4 text-dark hover:bg-dark hover:text-cream transition-colors"
          >
            {t("viewRegistry")}
          </a>
        </div>
      </Section>
    </div>
  );
}
