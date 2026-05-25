import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";
import { RsvpForm } from "@/components/rsvp-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RsvpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <RsvpContent />;
}

function RsvpContent() {
  const t = useTranslations("rsvp");

  return (
    <div className="pt-24">
      <Section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-dark">
            {t("title")}
          </h1>
          <p className="font-sans text-sm text-muted mt-4">
            {t("intro")}
          </p>
        </div>
      </Section>

      <Section className="py-16 px-6 bg-warm-white">
        <div className="max-w-md mx-auto">
          <RsvpForm />
        </div>
      </Section>
    </div>
  );
}
