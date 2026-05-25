"use server";

import { sendRsvpEmail } from "@/lib/email";

export async function submitRsvp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const attending = formData.get("attending") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;
  const dietary = formData.get("dietary") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !attending) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    await sendRsvpEmail({ name, email, attending, adults, children, dietary, message });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send email" };
  }
}
