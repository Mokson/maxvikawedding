import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { StorySection } from "@/components/sections/story-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { TravelSection } from "@/components/sections/travel-section";
import { GallerySection } from "@/components/sections/gallery-section";
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
      <StorySection />
      <ScheduleSection />
      <TravelSection />
      <GallerySection />
      <FaqSection />
      <RsvpSection />
    </>
  );
}
