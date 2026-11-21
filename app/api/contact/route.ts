import { NextRequest, NextResponse } from "next/server";

const SUPPORT_EMAIL = "supportash01@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const honeypot = typeof body.website === "string" ? body.website : "";

    // Quietly accept bot submissions without sending email.
    if (honeypot) return NextResponse.json({ ok: true });

    if (!name || name.length > 80) {
      return NextResponse.json({ error: "Please enter a name under 80 characters." }, { status: 400 });
    }
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json({ error: "Your message must be between 10 and 2,000 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) {
      console.error("Contact form email is not configured: RESEND_API_KEY or CONTACT_FROM_EMAIL is missing.");
      return NextResponse.json({ error: "The contact form is not configured yet. Please email supportash01@gmail.com directly." }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [SUPPORT_EMAIL],
        reply_to: email,
        subject: `Website message from ${name}`,
        text: `New message from Easy Image Resizer Tools contact form\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      const detail = await emailResponse.text();
      console.error("Resend rejected contact email:", emailResponse.status, detail.slice(0, 500));
      return NextResponse.json({ error: "We couldn’t send your message right now. Please try again later or email supportash01@gmail.com." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
