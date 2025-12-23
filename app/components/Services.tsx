const services = [
  {
    title: "Carrelage intérieur",
    description:
      "Pose au sol ou mural avec alignements précis et joints réguliers.",
    details:
      "Formats grands ou petits, coupes nettes et finitions durables.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Revêtements muraux",
    description:
      "Solutions durables pour cuisines, salles de bain et zones techniques.",
    details:
      "Préparation soignée et alignements précis pour un rendu uniforme.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mosaïque décorative",
    description:
      "Motifs personnalisés pour donner du rythme et de la texture aux surfaces.",
    details:
      "Pose minutieuse pour douches, crédences ou bandes décoratives.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Démolition ciblée",
    description:
      "Dépose propre et évacuation pour des rénovations rapides.",
    details:
      "Protection des zones sensibles et gestion des déblais.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Préparation supports",
    description:
      "Ragréage, étanchéité et renforts pour une pose parfaite.",
    details:
      "Surfaces prêtes pour recevoir carrelage, pierre ou mosaïque.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Petite maçonnerie",
    description:
      "Reprises locales, seuils, marches et ajustements techniques.",
    details:
      "Corrections rapides pour garantir la stabilité des supports.",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
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
          className="mt-12 grid scroll-mt-24 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
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
