"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Claire M.",
    role: "Salle de bain",
    quote:
      "Pose précise et joints impeccables. Le rendu est propre et très soigné.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jules R.",
    role: "Rénovation cuisine",
    quote:
      "Organisation claire, délais respectés et finition uniforme.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sophie B.",
    role: "Sol commercial",
    quote:
      "Une équipe fiable, des conseils utiles et un rendu durable.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="avis"
      className="scroll-mt-24 border-y border-black/10 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent-600)]">
              Avis clients
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--ink-700)]">
              Des retours clairs sur la qualite de la pose, le respect des
              delais et la finition des travaux.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label="Temoignage precedent"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label="Temoignage suivant"
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
              }
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden py-6">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="min-w-full px-2"
              >
                <div className="rounded-3xl border border-black/10 bg-white px-8 py-10 sm:px-12">
                  <div className="flex items-center gap-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-base font-semibold text-[color:var(--ink-900)]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--ink-700)]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start gap-3">
                    <span className="mt-1 h-6 w-1 rounded-full bg-[color:var(--accent-500)]" />
                    <p className="text-base leading-7 text-[color:var(--ink-700)]">
                    "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Afficher l'avis ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex
                  ? "bg-[color:var(--ink-900)]"
                  : "bg-[color:var(--sand-200)] hover:bg-[color:var(--ink-700)]"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
