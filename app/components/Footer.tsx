import Image from "next/image";
import { FaEnvelope, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";

const footerLinks = [
  { label: "Téléphone", href: "tel:+41799252227", Icon: FaPhone },
  { label: "E-mail", href: "mailto:info@bektech.ch", Icon: FaEnvelope },
  { label: "Instagram", href: "https://www.instagram.com/bektech.ch", Icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@bektech7", Icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[color:var(--sand-100)] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Image
            src="/logo.svg"
            alt="Bektech logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[color:var(--ink-700)]">
            Carrelage, revêtement, mosaïque, démolition, préparation et petite
            maçonnerie pour particuliers et professionnels.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-[color:var(--ink-700)]">
            <a
              href="/privacy"
              className="transition hover:text-[color:var(--accent-600)]"
            >
              Politique de confidentialité
            </a>
            <a
              href="/terms"
              className="transition hover:text-[color:var(--accent-600)]"
            >
              Conditions d’utilisation
            </a>
          </div>
        </div>

        <div className="space-y-2 text-sm text-[color:var(--ink-700)]">
          <div>Route du Vélodrome 60</div>
          <div>1228 Plan-les-Ouates</div>
          <div>+41 79 925 22 27</div>
          <div>info@bektech.ch</div>
        </div>

        <div className="flex items-center gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[color:var(--ink-700)] transition hover:border-[color:var(--accent-500)] hover:text-black"
              aria-label={link.label}
            >
              <link.Icon className="text-lg" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-black/10 px-6 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center text-xs text-[color:var(--ink-700)]">
          <span className="text-[color:var(--ink-700)]/70">
            Site réalisé par
          </span>
          <a
            href="https://www.hugemistake.ch"
            className="flex items-center transition hover:opacity-80"
            aria-label="Hugemistake"
          >
            <Image
              src="/hugemistake.svg"
              alt="Hugemistake"
              width={180}
              height={44}
              className="h-10 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
