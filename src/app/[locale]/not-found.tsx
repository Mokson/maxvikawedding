import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("meta");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="mb-4 font-serif text-4xl font-light">404</h1>
      <p className="text-muted font-sans text-sm tracking-[0.2em] uppercase">{t("notFound")}</p>
    </div>
  );
}
