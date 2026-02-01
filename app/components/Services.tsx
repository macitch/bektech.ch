import Image from "next/image";

const services = [
  {
    title: "Carrelage & mosaïque",
    description:
      "Étanchéité, pose au sol ou mural, motifs sur-mesure et finitions précises.",
    details:
      "Formats variés, coupes nettes et joints réguliers pour un rendu durable.",
    image:
      "/carelagee.png",
  },
  {
    title: "Revêtements de sols",
    description:
      "Solutions durables pour cuisines, et zones techniques.",
    details:
      "Préparation soignée et alignements précis pour un rendu uniforme.",
    image:
      "/image_1.jpg",
  },
  {
    title: "Démolition & dépose",
    description:
      "Dépose propre et évacuation pour des rénovations rapides.",
    details:
      "Protection des zones sensibles et gestion des déblais.",
    image: "/demolition.jpeg",
  },
  {
    title: "Préparation & petite maçonnerie",
    description:
      "Ragréage, étanchéité et reprises locales pour une pose parfaite.",
    details:
      "Surfaces stables, seuils et ajustements techniques maîtrisés.",
    image: "/IMG_7430.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-600)]">
              Nos services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
              Des solutions sur-mesure pour chaque projet
            </h2>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-black px-6 py-2 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
          >
            Discuter du projet
          </a>
        </div>

        <div
          id="projets"
          className="mt-12 grid scroll-mt-24 gap-8 md:grid-cols-2"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-white/80">
                  {service.description}
                </p>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-white/90 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                  {service.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
