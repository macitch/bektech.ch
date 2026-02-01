import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--sand-50)]">
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-600)]">
          Conditions d’utilisation
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
          Conditions générales d’utilisation
        </h1>
        <p className="mt-6 text-base leading-7 text-[color:var(--ink-700)]">
          En accédant au site www.bektech.ch, vous acceptez les présentes
          conditions générales d’utilisation.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-6 text-[color:var(--ink-700)]">
          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              1. Objet du site
            </h2>
            <p className="mt-2">
              Le site www.bektech.ch a pour objectif de présenter les services
              et activités de Bektech Bekteshi. Les informations affichées sont
              fournies à titre indicatif.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              2. Absence d’offre contractuelle
            </h2>
            <p className="mt-2">
              Les contenus du site ne constituent pas une offre contractuelle.
              Un engagement n’intervient qu’après acceptation d’un devis, d’un
              contrat écrit ou d’un accord confirmé par Bektech Bekteshi.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              3. Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L’ensemble des éléments présents sur ce site (textes, images,
              logos, mise en page, contenus) est protégé par le droit d’auteur
              et/ou d’autres droits de propriété intellectuelle. Toute
              reproduction, représentation, modification ou diffusion, totale ou
              partielle, sans autorisation préalable, est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              4. Responsabilité
            </h2>
            <p className="mt-2">
              Nous nous efforçons de fournir des informations exactes et à jour,
              mais nous ne garantissons ni l’exhaustivité, ni l’absence d’erreurs
              ou d’omissions. Bektech Bekteshi ne peut être tenu responsable des
              dommages directs ou indirects liés à l’accès ou à l’utilisation du
              site, y compris en cas d’interruption, de bug ou d’indisponibilité
              temporaire.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              5. Liens externes
            </h2>
            <p className="mt-2">
              Le site peut contenir des liens vers des sites tiers. Bektech
              Bekteshi n’exerce aucun contrôle sur ces sites et décline toute
              responsabilité concernant leur contenu, leurs politiques ou leurs
              pratiques.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              6. Droit applicable et for juridique
            </h2>
            <p className="mt-2">
              Les présentes conditions sont régies par le droit suisse. Le for
              juridique est situé en Suisse, sous réserve des dispositions
              légales impératives applicables.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              7. Contact
            </h2>
            <p className="mt-2">
              Pour toute question concernant ces conditions, vous pouvez nous
              contacter à : info@bektech.ch.
            </p>
          </section>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-700)]">
          Dernière mise à jour : 22 janvier 2026
        </p>
      </main>
      <Footer />
    </div>
  );
}
