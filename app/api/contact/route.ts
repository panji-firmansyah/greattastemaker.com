import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    // TODO: Integrate with email service (Resend, Formspree, etc.)
    // For now, log the submission and return success.
    // In production, replace this with actual email sending:
    //
    // Option A: Resend
    // await resend.emails.send({
    //   from: 'noreply@greattastemaker.com',
    //   to: 'hello@greattastemaker.com',
    //   subject: `New lead: ${data.name} from ${data.company}`,
    //   html: buildEmailHtml(data),
    // });
    //
    // Option B: Formspree
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });

    console.log("[Contact Form Submission]", {
      name: data.name,
      company: data.company,
      email: data.email,
      service: data.service,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 }
    );
  }
}
