import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/shared/section-wrapper";
import { RsvpForm } from "@/components/shared/rsvp-form";

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
      <Section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-dark font-serif text-4xl font-light md:text-5xl">{t("title")}</h1>
          <p className="text-muted mt-4 font-sans text-sm">{t("intro")}</p>
        </div>
      </Section>

      <Section className="bg-warm-white px-6 py-16">
        <div className="mx-auto max-w-md">
          <RsvpForm />
        </div>
      </Section>
    </div>
  );
}
