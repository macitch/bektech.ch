import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[color:var(--sand-50)]">
      <Header />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-600)]">
          Politique de confidentialité
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-6 text-base leading-7 text-[color:var(--ink-700)]">
          Cette politique explique comment Bektech Bekteshi collecte et traite
          vos données lorsque vous utilisez le site www.bektech.ch.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-6 text-[color:var(--ink-700)]">
          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              Données collectées
            </h2>
            <p className="mt-2">
              Lorsque vous utilisez le formulaire de contact, nous collectons
              votre nom, votre adresse e-mail et le contenu de votre message.
              Des données techniques (par exemple l’adresse IP et les journaux
              de connexion) peuvent également être enregistrées pour des raisons
              de sécurité et de fonctionnement.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              Finalités du traitement
            </h2>
            <p className="mt-2">
              Vos informations sont utilisées pour répondre à votre demande,
              préparer un devis, assurer le suivi de votre projet et améliorer
              l’expérience du site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              Cookies
            </h2>
            <p className="mt-2">
              Le site peut utiliser des cookies techniques nécessaires à son
              fonctionnement. Si des cookies de mesure d’audience sont ajoutés,
              votre consentement sera demandé.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              Partage et conservation
            </h2>
            <p className="mt-2">
              Vos données ne sont pas vendues. Elles peuvent être transmises à
              des prestataires techniques indispensables à l’exploitation du
              site (hébergement, envoi d’e-mails). Elles sont conservées
              uniquement le temps nécessaire à la finalité prévue.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[color:var(--ink-900)]">
              Vos droits
            </h2>
            <p className="mt-2">
              Vous pouvez demander l’accès, la rectification ou la suppression
              de vos données en nous contactant à info@bektech.ch.
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
