"use server";

import { Resend } from "resend";
import { startFormSchema, type StartFormValues } from "./schemas";

export async function submitStartForm(data: StartFormValues) {
  const validated = startFormSchema.safeParse(data);
  if (!validated.success) {
    return { success: false as const, error: "Invalid form data" };
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
    return { success: false as const, error: "Server configuration error. Please try again later." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "GT Form <noreply@greattastemaker.com>",
      to: process.env.CONTACT_EMAIL,
      subject: `New GTM Diagnostic Request: ${validated.data.company}`,
      html: `
        <h2>New GTM Diagnostic Request</h2>
        <p><strong>Name:</strong> ${validated.data.name}</p>
        <p><strong>Company:</strong> ${validated.data.company}</p>
        <p><strong>Email:</strong> ${validated.data.email}</p>
        <p><strong>WhatsApp:</strong> ${validated.data.whatsapp}</p>
        <p><strong>Challenge:</strong> ${validated.data.challenge}</p>
      `,
    });
    return { success: true as const };
  } catch {
    return { success: false as const, error: "Failed to send. Please try again." };
  }
}
