"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:h-20">
        <a href="#accueil" className="flex items-center">
          <img src="/logo.svg" alt="Bektech logo" className="h-10 w-auto" />
        </a>

        <div className="flex flex-col items-end gap-3 text-right sm:flex-row sm:items-center sm:gap-4">
          <a
            href="tel:+41799252227"
            className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-black sm:inline"
          >
            Appelez-Nous: (+41) 79 925 22 27
          </a>
          <div className="flex items-center gap-2">
            <a
              href="tel:+41799252227"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label="Telephone"
            >
              <span className="hugeicons-phone text-lg" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)] sm:flex"
              aria-label="Instagram"
            >
              <span className="hugeicons-instagram text-lg" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)] sm:flex"
              aria-label="TikTok"
            >
              <span className="hugeicons-tiktok text-lg" aria-hidden="true" />
            </a>
            <a
              href="mailto:contact@bektech.ch"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label="Email"
            >
              <span className="hugeicons-mail text-lg" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
