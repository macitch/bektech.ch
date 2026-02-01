"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = event.currentTarget;

    const formData = new FormData(form);
    
    if (!formData.has("company")) formData.set("company", "");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          data && typeof data.error === "string" && data.error.trim()
            ? data.error
            : "Échec de l’envoi. Veuillez réessayer.";
        throw new Error(message);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : null);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-600)]">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
            Parlons de votre prochain chantier
          </h2>
          <p className="mt-6 text-base leading-7 text-[color:var(--ink-700)]">
            Devis gratuit, conseils sur les matériaux et planning adapté à vos
            contraintes. Nous répondons sous 24 heures.
          </p>
          <div className="mt-10 space-y-4 text-sm text-[color:var(--ink-700)]">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent-500)]" />
              Route du Vélodrome 60 1228 Plan-les-Ouates
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent-500)]" />
              +41 79 925 22 27
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent-500)]" />
              info@bektech.ch
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_16px_32px_rgba(0,0,0,0.12)] sm:p-10"
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
        >
          {/* Honeypot: hidden field (bots often fill it) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-6">
            <label className="text-xs uppercase tracking-[0.22em] text-[color:var(--ink-700)]">
              Nom complet
              <input
                type="text"
                name="name"
                required
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--ink-900)] shadow-[0_10px_20px_rgba(0,0,0,0.08)] outline-none transition focus:border-[color:var(--accent-500)]"
                placeholder="Votre nom"
              />
            </label>

            <label className="text-xs uppercase tracking-[0.22em] text-[color:var(--ink-700)]">
              E-mail
              <input
                type="email"
                name="email"
                required
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--ink-900)] shadow-[0_10px_20px_rgba(0,0,0,0.08)] outline-none transition focus:border-[color:var(--accent-500)]"
                placeholder="vous@email.ch"
              />
            </label>

            <label className="text-xs uppercase tracking-[0.22em] text-[color:var(--ink-700)]">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--ink-900)] shadow-[0_10px_20px_rgba(0,0,0,0.08)] outline-none transition focus:border-[color:var(--accent-500)]"
                placeholder="Décrivez votre projet..."
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-[color:var(--ink-900)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[color:var(--ink-700)] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Envoi..." : "Envoyer la demande"}
            </button>

            <div aria-live="polite" aria-atomic="true" className="min-h-[24px]">
              {status === "success" && (
                <p className="text-sm text-[color:var(--accent-600)]">
                  Merci. Votre message a bien été envoyé.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600" role="alert">
                  {errorMessage
                    ? `Une erreur est survenue : ${errorMessage}`
                    : "Une erreur est survenue. Veuillez réessayer."}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}