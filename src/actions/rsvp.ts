"use server";

import { sendRsvpEmail } from "@/lib/email";

function maskName(s: string): string {
  return s.charAt(0) + "***" + (s.includes(" ") ? " " + s.split(" ").pop()!.charAt(0) + "***" : "");
}

function maskEmail(s: string): string {
  const [local, domain] = s.split("@");
  return local.charAt(0) + "***@" + domain;
}

export async function submitRsvp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const attending = formData.get("attending") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;
  const alcohol = formData.get("alcohol") as string;
  const dietary = formData.get("dietary") as string;
  const message = formData.get("message") as string;

  const log = {
    name: name ? maskName(name) : "(empty)",
    email: email ? maskEmail(email) : "(empty)",
    attending: attending || "(empty)",
    adults,
    children,
    alcohol: alcohol || "(empty)",
    dietary: dietary ? "provided" : "none",
    message: message ? "provided" : "none",
  };

  if (!name || !email || !attending) {
    console.warn("[RSVP] validation failed:", log);
    return { success: false, error: "Missing required fields" };
  }

  try {
    await sendRsvpEmail({ name, email, attending, adults, children, alcohol, dietary, message });
    console.info("[RSVP] sent:", log);
    return { success: true };
  } catch (err) {
    console.error("[RSVP] send failed:", log, err instanceof Error ? err.message : err);
    return { success: false, error: "Failed to send email" };
  }
}
