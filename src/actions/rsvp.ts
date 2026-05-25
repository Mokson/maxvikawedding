"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string | null): string {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitRsvp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const attending = formData.get("attending") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !attending) {
    return { success: false, error: "Missing required fields" };
  }

  const attendingText = attending === "yes" ? "Joyfully Accepts" : "Regretfully Declines";

  try {
    await resend.emails.send({
      from: process.env.RSVP_FROM_EMAIL || "RSVP <onboarding@resend.dev>",
      to: process.env.RSVP_EMAIL || "email@example.com",
      subject: `Wedding RSVP: ${esc(name)} ${attendingText}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; font-weight: 300; text-align: center; color: #2c2c2c;">
            New RSVP
          </h1>
          <hr style="border: none; border-top: 1px solid #e8d5b0; margin: 20px 0;" />
          <table style="width: 100%; font-size: 14px; color: #2c2c2c;">
            <tr><td style="padding: 8px 0; color: #6b6b6b;">Name</td><td style="padding: 8px 0;">${esc(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6b6b;">Email</td><td style="padding: 8px 0;">${esc(email)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6b6b;">Response</td><td style="padding: 8px 0; font-weight: 600;">${attendingText}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6b6b;">Adults</td><td style="padding: 8px 0;">${esc(adults)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6b6b;">Children (under 12)</td><td style="padding: 8px 0;">${esc(children)}</td></tr>
            ${message ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Message</td><td style="padding: 8px 0;">${esc(message)}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send email" };
  }
}
