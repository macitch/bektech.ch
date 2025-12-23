import Image from "next/image";

const partners = [
  { src: "/bnbois.png", alt: "Logo partenaire 1" },
  { src: "/teotherm.png", alt: "Logo partenaire 2" },
];

export default function Collaboration() {
  return (
    <section className="border-t border-black/10 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent-600)]">
              Collaboration
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-3xl">
              Nos partenaires
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.src}
              className="group flex items-center justify-center rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent-500)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={192}
                height={192}
                className="h-40 w-40 object-contain grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-105 sm:h-48 sm:w-48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
