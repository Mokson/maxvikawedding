import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";
import { RsvpForm } from "@/components/shared/rsvp-form";

export function RsvpSection() {
  const t = useTranslations("rsvp");

  return (
    <Section id="rsvp" className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-dark mb-4 font-serif text-3xl font-light md:text-4xl">{t("title")}</h2>
        <p className="text-muted mb-12 font-sans text-sm">{t("intro")}</p>
        <div className="text-left">
          <RsvpForm />
        </div>
      </div>
    </Section>
  );
}
