import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function esc(s: string | null): string {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type RsvpEmailData = {
  name: string;
  email: string;
  attending: string;
  adults: string;
  children: string;
  alcohol: string;
  dietary: string;
  message: string;
};

export async function sendRsvpEmail(data: RsvpEmailData) {
  const attendingText = data.attending === "yes" ? "Joyfully Accepts" : "Regretfully Declines";

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.RSVP_EMAIL,
    subject: `Wedding RSVP: ${esc(data.name)} ${attendingText}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 300; text-align: center; color: #2c2c2c;">
          New RSVP
        </h1>
        <hr style="border: none; border-top: 1px solid #e8d5b0; margin: 20px 0;" />
        <table style="width: 100%; font-size: 14px; color: #2c2c2c;">
          <tr><td style="padding: 8px 0; color: #6b6b6b;">Name</td><td style="padding: 8px 0;">${esc(data.name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6b6b;">Email</td><td style="padding: 8px 0;">${esc(data.email)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6b6b;">Response</td><td style="padding: 8px 0; font-weight: 600;">${attendingText}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6b6b;">Adults</td><td style="padding: 8px 0;">${esc(data.adults)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6b6b;">Children (under 12)</td><td style="padding: 8px 0;">${esc(data.children)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6b6b;">Alcohol</td><td style="padding: 8px 0;">${data.alcohol === "yes" ? "Yes" : data.alcohol === "no" ? "No" : "Not specified"}</td></tr>
          ${data.dietary ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Dietary</td><td style="padding: 8px 0;">${esc(data.dietary)}</td></tr>` : ""}
          ${data.message ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Message</td><td style="padding: 8px 0;">${esc(data.message)}</td></tr>` : ""}
        </table>
      </div>
    `,
  });
}
