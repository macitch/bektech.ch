"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useI18n } from "../i18n/I18nProvider";

export default function TermsPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[color:var(--sand-50)]">
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-600)]">
          {t.terms.kicker}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
          {t.terms.title}
        </h1>
        <p className="mt-6 text-base leading-7 text-[color:var(--ink-700)]">
          {t.terms.intro}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-6 text-[color:var(--ink-700)]">
          {t.terms.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
                {section.title}
              </h2>
              <p className="mt-2">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-700)]">
          {t.terms.lastUpdated}
        </p>
      </main>
      <Footer />
    </div>
  );
}
