export const siteConfig = {
  couple: {
    partner1: "Max",
    partner2: "Victoria",
  },
  wedding: {
    date: "2026-09-13T13:00:00",
    venue: {
      name: "Vinha Boutique Hotel",
      address: "R. Fonte da Vinha 383, 4430-487 Vila Nova de Gaia, Portugal",
      city: "Vila Nova de Gaia",
      country: "Portugal",
      coordinates: {
        lat: 41.1239,
        lng: -8.6118,
      },
    },
  },
  contact: {
    rsvpEmail: "email@example.com",
    rsvpFromEmail: "RSVP <onboarding@resend.dev>",
  },
  url: "https://maxvika.life",
} as const;
