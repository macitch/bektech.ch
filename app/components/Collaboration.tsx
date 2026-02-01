import Image from "next/image";

const partners = [
  { name: "BNBOIS SA", logo: "/bnbois.png", url: "https://www.bnbois.ch" },
  { name: "Teotherm SA", logo: "/teotherm.png",  url: "https://www.moneyhouse.ch/de/company/teotherm-sa-18737821971"},
];

const suppliers = [
  { name: "HGC Commerce SA", logo: "/hgc.svg" },
  { name: "Sabag", logo: "/sabag.png" },
  { name: "Saneo by Bringhen SA", logo: "/saneo.jpg" },
];

export default function Collaboration() {
  return (
    <section className="border-t border-black/10 bg-[color:var(--sand-50)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">

        <div className="mt-12 space-y-10">
          <article className="rounded-[32px] from-[color:var(--sand-50)] via-white to-white p-6 sm:p-10">
            <header className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--accent-600)]">
                Partenaires
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-[color:var(--ink-900)]">
                  Collaborations
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ink-700)]">
                  Les partenaires qui nous accompagnent sur les solutions bois et
                  énergétiques pour vos réalisations les plus exigeantes.
                </p>
              </div>
            </header>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {partners.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-4 rounded-[28px] border border-black/5 bg-[color:var(--sand-50)] px-6 py-8 transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)]"
                >
                  <div className="h-28 w-full">
                    <Image
                      src={company.logo}
                      alt={`Logo ${company.name}`}
                      width={280}
                      height={140}
                      className="h-full w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-700)]">
                    {company.name}
                  </p>
                </a>
              ))}
            </div> 
          </article>

          <article className="rounded-[32px] p-6  sm:p-8">
            <header className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--accent-600)]">
                Fournisseurs
              </p>
              <h3 className="text-2xl font-semibold text-[color:var(--ink-900)]">
                Qualité &amp; disponibilité
              </h3>
              <p className="text-sm leading-6 text-[color:var(--ink-700)]">
                Un réseau de fournisseurs fiables pour assurer les délais,
                l’assurance qualité et les réponses techniques rapides.
              </p>
            </header>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {suppliers.map((company) => (
                <div
                  key={company.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-[color:var(--sand-50)] px-4 py-6 transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)]"
                >
                  <div className="h-16 w-full">
                    <Image
                      src={company.logo}
                      alt={`Logo ${company.name}`}
                      width={200}
                      height={90}
                      className="h-full w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-700)]">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
