"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";
import { useI18n } from "../i18n/I18nProvider";
import { Locale } from "../i18n/translations";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_6px_18px_rgba(0,0,0,0.12)]" : ""
      }`}
    >
      {showBanner && (
        <div className="border-b border-black/10 bg-[color:var(--accent-500)]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-2 text-xs uppercase tracking-[0.18em] text-white">
            <span>{t.header.cookieBanner}</span>
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              className="rounded-full border border-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
              aria-label={t.header.cookieCloseAria}
            >
              {t.header.cookieClose}
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:h-20">
        <a href="#accueil" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Bektech logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        <div className="flex flex-col items-end gap-3 text-right sm:flex-row sm:items-center sm:gap-4">
          <a
            href="tel:+41799252227"
            className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-black sm:inline"
          >
            {t.header.callUs}
          </a>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="language-select">
              {t.header.languageLabel}
            </label>
            <select
              id="language-select"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="h-10 rounded-full border border-black/10 bg-white px-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-900)] transition hover:border-[color:var(--accent-500)]"
            >
              <option value="fr">{t.header.languageOptions.fr}</option>
              <option value="en">{t.header.languageOptions.en}</option>
              <option value="de">{t.header.languageOptions.de}</option>
            </select>
            <a
              href="tel:+41799252227"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)] sm:hidden"
              aria-label={t.header.aria.phone}
            >
              <FaPhone className="text-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/bektech.ch"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)] sm:flex"
              aria-label={t.header.aria.instagram}
            >
              <FaInstagram className="text-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@bektech7"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)] sm:flex"
              aria-label={t.header.aria.tiktok}
            >
              <FaTiktok className="text-lg" aria-hidden="true" />
            </a>
            <a
              href="mailto:info@bektech.ch"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label={t.header.aria.email}
            >
              <FaEnvelope className="text-lg" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
