"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "/bektech-image.png",
    title: "Des surfaces nettes, durables et parfaitement alignées.",
    subtitle:
      "De la préparation au dernier joint, chaque détail est maîtrisé.",
  },
  {
    image:
      "/image_2.jpg",
    title: "La précision au cœur de chaque surface",
    subtitle:
      "Carrelage, revêtements et finitions exécutés avec rigueur et cohérence.",
  },
  {
    image:
      "/image_3.jpg",
    title: "Préparation, démolition et petite maçonnerie",
    subtitle:
      "Une base solide pour des rénovations durables, propres.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className={`object-cover transition-opacity duration-[1200ms] ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } motion-reduce:transition-none`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl text-white">
            <p className="text-sm text-white/80">
              Bektech - Carrelage, revêtement, mosaïque, démolition,
              préparation et petite maçonnerie
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slides[activeIndex].title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              {slides[activeIndex].subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[color:var(--accent-500)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_30px_rgba(0,0,0,0.25)] transition hover:bg-[color:var(--accent-600)]"
              >
                Demander un devis
              </a>
              <a
                href="#projets"
                className="rounded-full border border-white/60 px-7 py-3 text-xs uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white/10"
              >
                Voir nos projets
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Aller au slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
