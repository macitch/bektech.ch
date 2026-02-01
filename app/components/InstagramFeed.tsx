import Script from "next/script";

const beholdWidgetId = "1bUodLVI9xvmGCvJKes3";

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="border-b border-black/10 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent-600)]">
              Instagram
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
              Nos dernières réalisations
            </h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--ink-700)]">
              Un aperçu visuel des chantiers récents, directement depuis notre
              compte Instagram.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-[color:var(--sand-50)] p-4 sm:p-6">
          <div className="behold-widget" data-behold-id={beholdWidgetId} />
        </div>
      </div>

      <Script src="https://widgets.behold.so/embed.js" strategy="afterInteractive" />
    </section>
  );
}
