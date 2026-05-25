export const sections = [
  { id: "hero", navKey: "hero" },
  { id: "about-us", navKey: "aboutUs" },
  { id: "schedule", navKey: "schedule" },
  { id: "venue", navKey: "venue" },
  { id: "travel", navKey: "travel" },
  { id: "faq", navKey: "faq" },
  { id: "rsvp", navKey: "rsvp" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
export type NavKey = (typeof sections)[number]["navKey"];
