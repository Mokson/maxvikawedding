"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_KEYS = ["dressCode", "kids", "plusOnes", "language", "weather"] as const;

export function FaqSection() {
  const t = useTranslations("faq");

  return (
    <Section id="faq" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-dark mb-16 text-center font-serif text-3xl font-light md:text-4xl">
          {t("title")}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_KEYS.map((key) => (
            <AccordionItem key={key} value={key} className="border-taupe/30">
              <AccordionTrigger className="text-dark py-5 text-left font-sans text-sm font-medium">
                {t(`${key}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted pb-5 font-sans text-sm leading-relaxed">
                {t(`${key}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
