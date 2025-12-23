"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000&q=80",
    title: "Carrelage et revêtements pour des espaces impeccables",
    subtitle:
      "Pose précise, finitions nettes et accompagnement local du début à la fin.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2000&q=80",
    title: "Mosaïque, revêtements muraux et finitions de précision",
    subtitle:
      "Matériaux durables, lignes propres et détail soigné pour chaque pièce.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=80",
    title: "Préparation, démolition et petite maçonnerie",
    subtitle:
      "Une base solide pour des rénovations durables, propres et rapides.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
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
