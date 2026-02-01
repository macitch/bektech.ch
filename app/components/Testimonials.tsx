"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  time?: number;
  profile_photo_url?: string;
};

type UiTestimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export default function Testimonials() {
  const { t } = useI18n();
  const [rawActiveIndex, setRawActiveIndex] = useState(0);
  const [items, setItems] = useState<UiTestimonial[]>(t.testimonials.fallback);
  const [meta, setMeta] = useState<{ rating?: number; count?: number; url?: string }>({});
  const [hasLoadedGoogle, setHasLoadedGoogle] = useState(false);

  useEffect(() => {
    setItems(t.testimonials.fallback);
    setRawActiveIndex(0);
  }, [t]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`/data/google-reviews.json?v=${Date.now()}`, {
          cache: "no-store",
        });

        const data = await res.json().catch(() => null);
        if (cancelled) return;

        if (!res.ok || !data || data?.error) {
          setHasLoadedGoogle(true);
          return;
        }

        const reviews: GoogleReview[] = Array.isArray(data?.reviews) ? data.reviews : [];
        const withText = reviews.filter((r) => (r.text || "").trim().length > 0);

        const mapped: UiTestimonial[] = (withText.length ? withText : reviews)
          .slice(0, 8)
          .map((r) => ({
            name: r.author_name || t.testimonials.anonymousName,
            role: t.testimonials.googleReviewLabel(r.rating ?? 5),
            quote: (r.text || "").trim() || t.testimonials.emptyGoogleQuote,
            image:
              r.profile_photo_url ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
          }));

        if (mapped.length) {
          setItems(mapped);
          setRawActiveIndex(0);
        }

        setMeta({
          rating: data?.rating,
          count: data?.user_ratings_total,
          url: data?.url,
        });
        setHasLoadedGoogle(true);
      } catch {
        if (!cancelled) setHasLoadedGoogle(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [t]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    if (!items.length) return;

    const interval = setInterval(() => {
      setRawActiveIndex((prev) => (prev + 1) % items.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [items.length]);

  const activeIndex = items.length === 0 ? 0 : Math.min(rawActiveIndex, items.length - 1);
  const total = items.length;

  const subtitle = useMemo(() => {
    if (hasLoadedGoogle && meta.rating && meta.count) {
      return t.testimonials.googleSummary(meta.rating, meta.count);
    }
    return t.testimonials.defaultSubtitle;
  }, [hasLoadedGoogle, meta.rating, meta.count, t]);

  return (
    <section
      id="avis"
      className="scroll-mt-24 border-y border-black/10 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent-600)]">
              {t.testimonials.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--ink-700)]">{subtitle}</p>
            {meta.url && (
              <a
                href={meta.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm underline underline-offset-4 text-[color:var(--ink-700)] hover:text-[color:var(--accent-600)]"
              >
                {t.testimonials.viewOnGoogle}
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label={t.testimonials.previous}
              onClick={() => setRawActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))}
              disabled={total <= 1}
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[color:var(--accent-500)] hover:text-[color:var(--accent-500)]"
              aria-label={t.testimonials.next}
              onClick={() => setRawActiveIndex((prev) => (prev + 1) % total)}
              disabled={total <= 1}
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden py-6">
          <div
            className="flex transition-transform duration-700 motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((testimonial) => (
              <article key={`${testimonial.name}-${testimonial.role}`} className="min-w-full px-2">
                <div className="rounded-3xl border border-black/10 bg-white px-8 py-10 sm:px-12">
                  <div className="flex items-center gap-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
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
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {items.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-${index}`}
              type="button"
              aria-label={t.testimonials.dotLabel(index + 1)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex
                  ? "bg-[color:var(--ink-900)]"
                  : "bg-[color:var(--sand-200)] hover:bg-[color:var(--ink-700)]"
              }`}
              onClick={() => setRawActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
