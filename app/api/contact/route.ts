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
      { error: "Requête invalide." },
      { status: 400 }
    );
  }

  const { name, email, message } = payload;
  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();

  if (!normalizedName || !normalizedEmail || !normalizedMessage) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalizedEmail)) {
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "info@bektech.ch";
  const from =
    process.env.RESEND_FROM ?? "Bektech - Contact du site <info@bektech.ch>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Service e-mail non configuré." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const isDev = process.env.NODE_ENV !== "production";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      reply_to: `${normalizedName} <${normalizedEmail}>`,
      subject: `Nouveau message - ${normalizedName}`,
      text: `Nom: ${normalizedName}\nE-mail: ${normalizedEmail}\n\nMessage:\n${normalizedMessage}`,
      html: `
        <p><strong>Nom:</strong> ${normalizedName}</p>
        <p><strong>E-mail:</strong> ${normalizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${normalizedMessage.replace(/\n/g, "<br />")}</p>
      `,
    });
    if (error) {
      console.error("Email send failed:", error);
      const errorMessage = isDev ? error.message : "Échec de l’envoi de l’e-mail.";
      return NextResponse.json(
        { error: errorMessage },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Échec de l’envoi de l’e-mail." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
