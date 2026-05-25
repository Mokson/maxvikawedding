export const sections = [
  { id: "hero", navKey: "hero" },
  { id: "our-story", navKey: "ourStory" },
  { id: "schedule", navKey: "schedule" },
  { id: "travel", navKey: "travel" },
  { id: "gallery", navKey: "gallery" },
  { id: "faq", navKey: "faq" },
  { id: "rsvp", navKey: "rsvp" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
export type NavKey = (typeof sections)[number]["navKey"];
