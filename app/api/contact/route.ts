import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid payload." },
      { status: 400 }
    );
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "info@bektech.ch";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Bektech Website <info@bektech.ch>",
      to,
      reply_to: email,
      subject: `Nouveau message - ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
