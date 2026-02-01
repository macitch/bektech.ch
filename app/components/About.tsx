"use client";

import Image from "next/image";
import { useI18n } from "../i18n/I18nProvider";

export default function About() {
  const { t } = useI18n();

  return (
    <section className="relative border-y border-black/10 bg-[color:var(--sand-100)] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-600)]">
            {t.about.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-[color:var(--ink-700)]">
            {t.about.description}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/10 bg-white px-6 py-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="text-3xl font-semibold text-[color:var(--ink-900)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-700)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
          <Image
            src="/image_2.jpg"
            alt={t.about.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
