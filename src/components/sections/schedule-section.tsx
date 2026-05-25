import { useTranslations } from "next-intl";
import { Section } from "@/components/shared/section-wrapper";

const SCHEDULE_KEYS = [
  "arrival",
  "ceremony",
  "cocktails",
  "dinner",
  "cake",
  "dancing",
  "windDown",
] as const;

export function ScheduleSection() {
  const t = useTranslations("schedule");

  return (
    <Section id="schedule" className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-dark mb-16 text-center font-serif text-3xl font-light md:text-4xl">
          {t("title")}
        </h2>

        <div className="relative">
          <div className="bg-taupe/30 absolute top-0 bottom-0 left-[112px] w-px md:left-[136px]" />

          <div className="space-y-8">
            {SCHEDULE_KEYS.map((key) => (
              <div key={key} className="flex items-center gap-5 md:gap-6">
                <span className="text-muted w-[88px] shrink-0 text-right font-mono text-sm tabular-nums md:w-[108px]">
                  {t(`${key}.time`)}
                </span>
                <div className="bg-taupe relative z-10 h-2 w-2 shrink-0 rounded-full" />
                <span className="text-dark font-sans text-sm font-medium">{t(`${key}.label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
