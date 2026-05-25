import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutUsSection } from "@/components/sections/about-us-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { VenueSection } from "@/components/sections/venue-section";
import { TravelSection } from "@/components/sections/travel-section";
import { FaqSection } from "@/components/sections/faq-section";
import { RsvpSection } from "@/components/sections/rsvp-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ScheduleSection />
      <VenueSection />
      <TravelSection />
      <FaqSection />
      <RsvpSection />
    </>
  );
}
