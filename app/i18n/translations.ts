export type Locale = "fr" | "en" | "de";

export const locales: Locale[] = ["fr", "en", "de"];
export const defaultLocale: Locale = "fr";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

type Service = {
  title: string;
  description: string;
  details: string;
  image: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type Translations = {
  header: {
    cookieBanner: string;
    cookieClose: string;
    cookieCloseAria: string;
    callUs: string;
    aria: {
      phone: string;
      instagram: string;
      tiktok: string;
      email: string;
    };
    languageLabel: string;
    languageOptions: {
      fr: string;
      en: string;
      de: string;
    };
  };
  hero: {
    tagline: string;
    slides: Slide[];
    ctaQuote: string;
    ctaProjects: string;
    slideAriaLabel: (index: number) => string;
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
    imageAlt: string;
  };
  services: {
    kicker: string;
    title: string;
    cta: string;
    items: Service[];
  };
  collaboration: {
    partnersKicker: string;
    partnersTitle: string;
    partnersDescription: string;
    suppliersKicker: string;
    suppliersTitle: string;
    suppliersDescription: string;
  };
  instagram: {
    kicker: string;
    title: string;
    description: string;
    unavailable: string;
  };
  testimonials: {
    kicker: string;
    title: string;
    defaultSubtitle: string;
    emptyGoogleQuote: string;
    anonymousName: string;
    googleSummary: (rating: number, count: number) => string;
    googleReviewLabel: (rating: number) => string;
    viewOnGoogle: string;
    previous: string;
    next: string;
    dotLabel: (index: number) => string;
    fallback: Testimonial[];
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    form: {
      fullName: string;
      email: string;
      message: string;
      placeholderName: string;
      placeholderEmail: string;
      placeholderMessage: string;
      submit: string;
      sending: string;
      success: string;
      errorWithMessage: (message: string) => string;
      errorGeneric: string;
      defaultSendError: string;
    };
  };
  footer: {
    description: string;
    privacy: string;
    terms: string;
    addressLines: string[];
    credit: string;
    aria: {
      phone: string;
      email: string;
      instagram: string;
      tiktok: string;
    };
  };
  privacy: {
    kicker: string;
    title: string;
    intro: string;
    sections: {
      title: string;
      body: string;
    }[];
    lastUpdated: string;
  };
  terms: {
    kicker: string;
    title: string;
    intro: string;
    sections: {
      title: string;
      body: string;
    }[];
    lastUpdated: string;
  };
};

export const translations: Record<Locale, Translations> = {
  fr: {
    header: {
      cookieBanner: "Ce site utilise des cookies pour améliorer l'expérience utilisateur.",
      cookieClose: "Fermer",
      cookieCloseAria: "Fermer la bannière de cookies",
      callUs: "Appelez-nous : (+41) 79 925 22 27",
      aria: {
        phone: "Téléphone",
        instagram: "Instagram",
        tiktok: "TikTok",
        email: "E-mail",
      },
      languageLabel: "Choisir la langue",
      languageOptions: {
        fr: "FR",
        en: "EN",
        de: "DE",
      },
    },
    hero: {
      tagline:
        "Bektech - Carrelage, revêtement, mosaïque, démolition, préparation et petite maçonnerie",
      slides: [
        {
          image: "/bektech-image.png",
          title: "Des surfaces nettes, durables et parfaitement alignées.",
          subtitle: "De la préparation au dernier joint, chaque détail est maîtrisé.",
        },
        {
          image: "/image_2.jpg",
          title: "La précision au cœur de chaque surface",
          subtitle: "Carrelage, revêtements et finitions exécutés avec rigueur et cohérence.",
        },
        {
          image: "/image_3.jpg",
          title: "Préparation, démolition et petite maçonnerie",
          subtitle: "Une base solide pour des rénovations durables, propres.",
        },
      ],
      ctaQuote: "Demander un devis",
      ctaProjects: "Voir nos projets",
      slideAriaLabel: (index) => `Aller au slide ${index}`,
    },
    about: {
      kicker: "Notre engagement",
      title: "Des solutions nettes et durables pour vos surfaces",
      description:
        "Du calepinage au jointoiement, nous coordonnons chaque étape pour garantir une pose régulière et des détails impeccables. Nous intervenons aussi sur la préparation, la démolition et la petite maçonnerie.",
      stats: [
        { value: "16+", label: "Ans d'expérience" },
        { value: "100%", label: "Finitions contrôlées" },
      ],
      imageAlt: "Pose de carrelage en cours",
    },
    services: {
      kicker: "Nos services",
      title: "Des solutions sur-mesure pour chaque projet",
      cta: "Discuter du projet",
      items: [
        {
          title: "Carrelage & mosaïque",
          description:
            "Étanchéité, pose au sol ou mural, motifs sur-mesure et finitions précises.",
          details: "Formats variés, coupes nettes et joints réguliers pour un rendu durable.",
          image: "/carelagee.png",
        },
        {
          title: "Revêtements de sols",
          description: "Solutions durables pour cuisines, et zones techniques.",
          details: "Préparation soignée et alignements précis pour un rendu uniforme.",
          image: "/image_1.jpg",
        },
        {
          title: "Démolition & dépose",
          description: "Dépose propre et évacuation pour des rénovations rapides.",
          details: "Protection des zones sensibles et gestion des déblais.",
          image: "/demolition.jpeg",
        },
        {
          title: "Préparation & petite maçonnerie",
          description: "Ragréage, étanchéité et reprises locales pour une pose parfaite.",
          details: "Surfaces stables, seuils et ajustements techniques maîtrisés.",
          image: "/IMG_7430.jpg",
        },
      ],
    },
    collaboration: {
      partnersKicker: "Partenaires",
      partnersTitle: "Collaborations",
      partnersDescription:
        "Les partenaires qui nous accompagnent sur les solutions bois et énergétiques pour vos réalisations les plus exigeantes.",
      suppliersKicker: "Fournisseurs",
      suppliersTitle: "Qualité & disponibilité",
      suppliersDescription:
        "Un réseau de fournisseurs fiables pour assurer les délais, l’assurance qualité et les réponses techniques rapides.",
    },
    instagram: {
      kicker: "Instagram",
      title: "Nos dernières réalisations",
      description:
        "Un aperçu visuel des chantiers récents, directement depuis notre compte Instagram.",
      unavailable: "Flux Instagram indisponible pour le moment.",
    },
    testimonials: {
      kicker: "Avis clients",
      title: "Ce que disent nos clients",
      defaultSubtitle:
        "Des retours clairs sur la qualité de la pose, le respect des délais et la finition des travaux.",
      emptyGoogleQuote: "Très bon service.",
      anonymousName: "Client",
      googleSummary: (rating, count) => `⭐ ${rating}/5 — ${count} avis sur Google.`,
      googleReviewLabel: (rating) => `Avis Google · ${rating}★`,
      viewOnGoogle: "Voir sur Google",
      previous: "Témoignage précédent",
      next: "Témoignage suivant",
      dotLabel: (index) => `Afficher l'avis ${index}`,
      fallback: [
        {
          name: "Claire M.",
          role: "Salle de bain",
          quote: "Pose précise et joints impeccables. Le rendu est propre et très soigné.",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Jules R.",
          role: "Rénovation cuisine",
          quote: "Organisation claire, délais respectés et finition uniforme.",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Sophie B.",
          role: "Sol commercial",
          quote: "Une équipe fiable, des conseils utiles et un rendu durable.",
          image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Parlons de votre prochain chantier",
      description:
        "Devis gratuit, conseils sur les matériaux et planning adapté à vos contraintes. Nous répondons sous 24 heures.",
      address: "Route du Vélodrome 60 1228 Plan-les-Ouates",
      phone: "+41 79 925 22 27",
      email: "info@bektech.ch",
      form: {
        fullName: "Nom complet",
        email: "E-mail",
        message: "Message",
        placeholderName: "Votre nom",
        placeholderEmail: "vous@email.ch",
        placeholderMessage: "Décrivez votre projet...",
        submit: "Envoyer la demande",
        sending: "Envoi...",
        success: "Merci. Votre message a bien été envoyé.",
        errorWithMessage: (message) => `Une erreur est survenue : ${message}`,
        errorGeneric: "Une erreur est survenue. Veuillez réessayer.",
        defaultSendError: "Échec de l’envoi. Veuillez réessayer.",
      },
    },
    footer: {
      description:
        "Carrelage, revêtement, mosaïque, démolition, préparation et petite maçonnerie pour particuliers et professionnels.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      addressLines: ["Route du Vélodrome 60", "1228 Plan-les-Ouates", "+41 79 925 22 27", "info@bektech.ch"],
      credit: "Site réalisé par",
      aria: {
        phone: "Téléphone",
        email: "E-mail",
        instagram: "Instagram",
        tiktok: "TikTok",
      },
    },
    privacy: {
      kicker: "Politique de confidentialité",
      title: "Politique de confidentialité",
      intro:
        "Cette politique explique comment Bektech Bekteshi collecte et traite vos données lorsque vous utilisez le site www.bektech.ch.",
      sections: [
        {
          title: "Données collectées",
          body:
            "Lorsque vous utilisez le formulaire de contact, nous collectons votre nom, votre adresse e-mail et le contenu de votre message. Des données techniques (par exemple l’adresse IP et les journaux de connexion) peuvent également être enregistrées pour des raisons de sécurité et de fonctionnement.",
        },
        {
          title: "Finalités du traitement",
          body:
            "Vos informations sont utilisées pour répondre à votre demande, préparer un devis, assurer le suivi de votre projet et améliorer l’expérience du site.",
        },
        {
          title: "Cookies",
          body:
            "Le site peut utiliser des cookies techniques nécessaires à son fonctionnement. Si des cookies de mesure d’audience sont ajoutés, votre consentement sera demandé.",
        },
        {
          title: "Partage et conservation",
          body:
            "Vos données ne sont pas vendues. Elles peuvent être transmises à des prestataires techniques indispensables à l’exploitation du site (hébergement, envoi d’e-mails). Elles sont conservées uniquement le temps nécessaire à la finalité prévue.",
        },
        {
          title: "Vos droits",
          body:
            "Vous pouvez demander l’accès, la rectification ou la suppression de vos données en nous contactant à info@bektech.ch.",
        },
      ],
      lastUpdated: "Dernière mise à jour : 22 janvier 2026",
    },
    terms: {
      kicker: "Conditions d’utilisation",
      title: "Conditions générales d’utilisation",
      intro:
        "En accédant au site www.bektech.ch, vous acceptez les présentes conditions générales d’utilisation.",
      sections: [
        {
          title: "1. Objet du site",
          body:
            "Le site www.bektech.ch a pour objectif de présenter les services et activités de Bektech Bekteshi. Les informations affichées sont fournies à titre indicatif.",
        },
        {
          title: "2. Absence d’offre contractuelle",
          body:
            "Les contenus du site ne constituent pas une offre contractuelle. Un engagement n’intervient qu’après acceptation d’un devis, d’un contrat écrit ou d’un accord confirmé par Bektech Bekteshi.",
        },
        {
          title: "3. Propriété intellectuelle",
          body:
            "L’ensemble des éléments présents sur ce site (textes, images, logos, mise en page, contenus) est protégé par le droit d’auteur et/ou d’autres droits de propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable, est interdite.",
        },
        {
          title: "4. Responsabilité",
          body:
            "Nous nous efforçons de fournir des informations exactes et à jour, mais nous ne garantissons ni l’exhaustivité, ni l’absence d’erreurs ou d’omissions. Bektech Bekteshi ne peut être tenu responsable des dommages directs ou indirects liés à l’accès ou à l’utilisation du site, y compris en cas d’interruption, de bug ou d’indisponibilité temporaire.",
        },
        {
          title: "5. Liens externes",
          body:
            "Le site peut contenir des liens vers des sites tiers. Bektech Bekteshi n’exerce aucun contrôle sur ces sites et décline toute responsabilité concernant leur contenu, leurs politiques ou leurs pratiques.",
        },
        {
          title: "6. Droit applicable et for juridique",
          body:
            "Les présentes conditions sont régies par le droit suisse. Le for juridique est situé en Suisse, sous réserve des dispositions légales impératives applicables.",
        },
        {
          title: "7. Contact",
          body:
            "Pour toute question concernant ces conditions, vous pouvez nous contacter à : info@bektech.ch.",
        },
      ],
      lastUpdated: "Dernière mise à jour : 22 janvier 2026",
    },
  },
  en: {
    header: {
      cookieBanner: "This site uses cookies to improve the user experience.",
      cookieClose: "Close",
      cookieCloseAria: "Close the cookie banner",
      callUs: "Call us: (+41) 79 925 22 27",
      aria: {
        phone: "Phone",
        instagram: "Instagram",
        tiktok: "TikTok",
        email: "Email",
      },
      languageLabel: "Select language",
      languageOptions: {
        fr: "FR",
        en: "EN",
        de: "DE",
      },
    },
    hero: {
      tagline:
        "Bektech - Tiling, flooring, mosaics, demolition, preparation and light masonry",
      slides: [
        {
          image: "/bektech-image.png",
          title: "Clean, durable surfaces with perfect alignment.",
          subtitle: "From preparation to the final joint, every detail is controlled.",
        },
        {
          image: "/image_2.jpg",
          title: "Precision at the heart of every surface",
          subtitle: "Tiling, coverings and finishes executed with rigor and consistency.",
        },
        {
          image: "/image_3.jpg",
          title: "Preparation, demolition and light masonry",
          subtitle: "A solid base for durable, clean renovations.",
        },
      ],
      ctaQuote: "Request a quote",
      ctaProjects: "View our projects",
      slideAriaLabel: (index) => `Go to slide ${index}`,
    },
    about: {
      kicker: "Our commitment",
      title: "Clean and durable solutions for your surfaces",
      description:
        "From layout planning to grouting, we coordinate every step to ensure a consistent installation and impeccable details. We also handle preparation, demolition and light masonry.",
      stats: [
        { value: "16+", label: "Years of experience" },
        { value: "100%", label: "Quality-checked finishes" },
      ],
      imageAlt: "Tile installation in progress",
    },
    services: {
      kicker: "Our services",
      title: "Tailored solutions for every project",
      cta: "Discuss the project",
      items: [
        {
          title: "Tiling & mosaics",
          description:
            "Waterproofing, floor or wall installation, custom patterns and precise finishes.",
          details: "Varied formats, clean cuts and even joints for a lasting result.",
          image: "/carelagee.png",
        },
        {
          title: "Floor coverings",
          description: "Durable solutions for kitchens and technical areas.",
          details: "Careful preparation and precise alignment for a uniform finish.",
          image: "/image_1.jpg",
        },
        {
          title: "Demolition & removal",
          description: "Clean removal and disposal for fast renovations.",
          details: "Protection of sensitive areas and debris management.",
          image: "/demolition.jpeg",
        },
        {
          title: "Preparation & light masonry",
          description: "Leveling, waterproofing and local repairs for a perfect installation.",
          details: "Stable surfaces, thresholds and technical adjustments mastered.",
          image: "/IMG_7430.jpg",
        },
      ],
    },
    collaboration: {
      partnersKicker: "Partners",
      partnersTitle: "Collaborations",
      partnersDescription:
        "Partners supporting us with wood and energy solutions for your most demanding projects.",
      suppliersKicker: "Suppliers",
      suppliersTitle: "Quality & availability",
      suppliersDescription:
        "A reliable supplier network to secure timelines, quality assurance and fast technical responses.",
    },
    instagram: {
      kicker: "Instagram",
      title: "Our latest work",
      description:
        "A visual snapshot of recent sites, directly from our Instagram account.",
      unavailable: "Instagram feed is unavailable right now.",
    },
    testimonials: {
      kicker: "Client reviews",
      title: "What our clients say",
      defaultSubtitle:
        "Clear feedback on installation quality, deadline adherence and finishing work.",
      emptyGoogleQuote: "Great service.",
      anonymousName: "Customer",
      googleSummary: (rating, count) => `⭐ ${rating}/5 — ${count} reviews on Google.`,
      googleReviewLabel: (rating) => `Google review · ${rating}★`,
      viewOnGoogle: "View on Google",
      previous: "Previous testimonial",
      next: "Next testimonial",
      dotLabel: (index) => `Show review ${index}`,
      fallback: [
        {
          name: "Claire M.",
          role: "Bathroom",
          quote: "Precise installation and flawless joints. The finish is clean and very neat.",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Jules R.",
          role: "Kitchen renovation",
          quote: "Clear organization, respected timelines and consistent finish.",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Sophie B.",
          role: "Commercial flooring",
          quote: "A reliable team, helpful advice and a durable result.",
          image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let’s talk about your next project",
      description:
        "Free estimates, material guidance and a schedule adapted to your constraints. We reply within 24 hours.",
      address: "Route du Vélodrome 60 1228 Plan-les-Ouates",
      phone: "+41 79 925 22 27",
      email: "info@bektech.ch",
      form: {
        fullName: "Full name",
        email: "Email",
        message: "Message",
        placeholderName: "Your name",
        placeholderEmail: "you@email.ch",
        placeholderMessage: "Describe your project...",
        submit: "Send request",
        sending: "Sending...",
        success: "Thank you. Your message has been sent.",
        errorWithMessage: (message) => `An error occurred: ${message}`,
        errorGeneric: "An error occurred. Please try again.",
        defaultSendError: "Sending failed. Please try again.",
      },
    },
    footer: {
      description:
        "Tiling, flooring, mosaics, demolition, preparation and light masonry for private and professional clients.",
      privacy: "Privacy policy",
      terms: "Terms of use",
      addressLines: ["Route du Vélodrome 60", "1228 Plan-les-Ouates", "+41 79 925 22 27", "info@bektech.ch"],
      credit: "Site built by",
      aria: {
        phone: "Phone",
        email: "Email",
        instagram: "Instagram",
        tiktok: "TikTok",
      },
    },
    privacy: {
      kicker: "Privacy policy",
      title: "Privacy policy",
      intro:
        "This policy explains how Bektech Bekteshi collects and processes your data when you use the www.bektech.ch website.",
      sections: [
        {
          title: "Data collected",
          body:
            "When you use the contact form, we collect your name, email address and the content of your message. Technical data (for example IP address and access logs) may also be recorded for security and operational reasons.",
        },
        {
          title: "Purpose of processing",
          body:
            "Your information is used to respond to your request, prepare a quote, follow up on your project and improve the website experience.",
        },
        {
          title: "Cookies",
          body:
            "The site may use technical cookies necessary for its operation. If audience measurement cookies are added, your consent will be requested.",
        },
        {
          title: "Sharing and retention",
          body:
            "Your data is not sold. It may be shared with essential technical providers for operating the site (hosting, email delivery). It is kept only for the time required for the intended purpose.",
        },
        {
          title: "Your rights",
          body:
            "You can request access, correction or deletion of your data by contacting us at info@bektech.ch.",
        },
      ],
      lastUpdated: "Last updated: January 22, 2026",
    },
    terms: {
      kicker: "Terms of use",
      title: "Terms and conditions",
      intro:
        "By accessing www.bektech.ch, you accept these terms and conditions.",
      sections: [
        {
          title: "1. Purpose of the website",
          body:
            "The www.bektech.ch website aims to present the services and activities of Bektech Bekteshi. Information provided is for indicative purposes only.",
        },
        {
          title: "2. No contractual offer",
          body:
            "The content of the site does not constitute a contractual offer. A commitment only occurs after acceptance of a quote, a written contract or a confirmed agreement by Bektech Bekteshi.",
        },
        {
          title: "3. Intellectual property",
          body:
            "All elements on this site (texts, images, logos, layout, content) are protected by copyright and/or other intellectual property rights. Any reproduction, representation, modification or distribution, in whole or in part, without prior authorization is prohibited.",
        },
        {
          title: "4. Liability",
          body:
            "We strive to provide accurate and up-to-date information, but we do not guarantee completeness or the absence of errors or omissions. Bektech Bekteshi cannot be held liable for direct or indirect damages related to access or use of the site, including in case of interruption, bugs or temporary unavailability.",
        },
        {
          title: "5. External links",
          body:
            "The site may contain links to third-party websites. Bektech Bekteshi has no control over these sites and declines any responsibility for their content, policies or practices.",
        },
        {
          title: "6. Applicable law and jurisdiction",
          body:
            "These terms are governed by Swiss law. Jurisdiction is in Switzerland, subject to mandatory legal provisions.",
        },
        {
          title: "7. Contact",
          body:
            "For any questions regarding these terms, you can contact us at: info@bektech.ch.",
        },
      ],
      lastUpdated: "Last updated: January 22, 2026",
    },
  },
  de: {
    header: {
      cookieBanner: "Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.",
      cookieClose: "Schließen",
      cookieCloseAria: "Cookie-Banner schließen",
      callUs: "Rufen Sie uns an: (+41) 79 925 22 27",
      aria: {
        phone: "Telefon",
        instagram: "Instagram",
        tiktok: "TikTok",
        email: "E-Mail",
      },
      languageLabel: "Sprache wählen",
      languageOptions: {
        fr: "FR",
        en: "EN",
        de: "DE",
      },
    },
    hero: {
      tagline:
        "Bektech - Fliesen, Bodenbeläge, Mosaik, Abbruch, Vorbereitung und leichte Maurerarbeiten",
      slides: [
        {
          image: "/bektech-image.png",
          title: "Saubere, langlebige Oberflächen mit perfekter Ausrichtung.",
          subtitle: "Von der Vorbereitung bis zur letzten Fuge ist jedes Detail kontrolliert.",
        },
        {
          image: "/image_2.jpg",
          title: "Präzision im Mittelpunkt jeder Oberfläche",
          subtitle: "Fliesen, Beläge und Oberflächen mit Konsequenz und Sorgfalt ausgeführt.",
        },
        {
          image: "/image_3.jpg",
          title: "Vorbereitung, Abbruch und leichte Maurerarbeiten",
          subtitle: "Eine solide Basis für langlebige, saubere Renovationen.",
        },
      ],
      ctaQuote: "Angebot anfordern",
      ctaProjects: "Projekte ansehen",
      slideAriaLabel: (index) => `Zu Folie ${index} wechseln`,
    },
    about: {
      kicker: "Unser Versprechen",
      title: "Saubere und langlebige Lösungen für Ihre Oberflächen",
      description:
        "Von der Verlegung bis zur Verfugung koordinieren wir jeden Schritt, um eine gleichmäßige Ausführung und makellose Details zu garantieren. Wir übernehmen auch Vorbereitung, Abbruch und leichte Maurerarbeiten.",
      stats: [
        { value: "16+", label: "Jahre Erfahrung" },
        { value: "100%", label: "Geprüfte Endarbeiten" },
      ],
      imageAlt: "Fliesenverlegung im Gange",
    },
    services: {
      kicker: "Unsere Leistungen",
      title: "Maßgeschneiderte Lösungen für jedes Projekt",
      cta: "Projekt besprechen",
      items: [
        {
          title: "Fliesen & Mosaik",
          description:
            "Abdichtung, Boden- oder Wandverlegung, individuelle Muster und präzise Abschlüsse.",
          details: "Vielfältige Formate, saubere Schnitte und gleichmäßige Fugen für ein langlebiges Ergebnis.",
          image: "/carelagee.png",
        },
        {
          title: "Bodenbeläge",
          description: "Langlebige Lösungen für Küchen und technische Bereiche.",
          details: "Sorgfältige Vorbereitung und präzise Ausrichtung für ein einheitliches Ergebnis.",
          image: "/image_1.jpg",
        },
        {
          title: "Abbruch & Demontage",
          description: "Saubere Demontage und Entsorgung für schnelle Renovationen.",
          details: "Schutz sensibler Bereiche und fachgerechte Entsorgung.",
          image: "/demolition.jpeg",
        },
        {
          title: "Vorbereitung & leichte Maurerarbeiten",
          description: "Nivellierung, Abdichtung und lokale Reparaturen für perfekte Verlegung.",
          details: "Stabile Flächen, Schwellen und technische Anpassungen im Griff.",
          image: "/IMG_7430.jpg",
        },
      ],
    },
    collaboration: {
      partnersKicker: "Partner",
      partnersTitle: "Kooperationen",
      partnersDescription:
        "Partner, die uns bei Holz- und Energielösungen für Ihre anspruchsvollsten Projekte unterstützen.",
      suppliersKicker: "Lieferanten",
      suppliersTitle: "Qualität & Verfügbarkeit",
      suppliersDescription:
        "Ein verlässliches Lieferantennetzwerk für Termine, Qualitätssicherung und schnelle technische Antworten.",
    },
    instagram: {
      kicker: "Instagram",
      title: "Unsere neuesten Projekte",
      description:
        "Ein visueller Einblick in aktuelle Baustellen direkt von unserem Instagram-Konto.",
      unavailable: "Instagram-Feed ist derzeit nicht verfügbar.",
    },
    testimonials: {
      kicker: "Kundenbewertungen",
      title: "Was unsere Kunden sagen",
      defaultSubtitle:
        "Klares Feedback zur Verlegequalität, Termintreue und Ausführung der Arbeiten.",
      emptyGoogleQuote: "Sehr guter Service.",
      anonymousName: "Kunde",
      googleSummary: (rating, count) => `⭐ ${rating}/5 — ${count} Bewertungen auf Google.`,
      googleReviewLabel: (rating) => `Google-Bewertung · ${rating}★`,
      viewOnGoogle: "Auf Google ansehen",
      previous: "Vorherige Bewertung",
      next: "Nächste Bewertung",
      dotLabel: (index) => `Bewertung ${index} anzeigen`,
      fallback: [
        {
          name: "Claire M.",
          role: "Badzimmer",
          quote: "Präzise Verlegung und makellose Fugen. Das Ergebnis ist sauber und sehr gepflegt.",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Jules R.",
          role: "Küchenrenovation",
          quote: "Klare Organisation, eingehaltene Termine und gleichmäßige Ausführung.",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Sophie B.",
          role: "Gewerblicher Boden",
          quote: "Ein zuverlässiges Team, hilfreiche Beratung und ein langlebiges Ergebnis.",
          image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    contact: {
      kicker: "Kontakt",
      title: "Sprechen wir über Ihr nächstes Projekt",
      description:
        "Kostenlose Offerte, Materialberatung und ein Zeitplan, der zu Ihren Vorgaben passt. Wir antworten innerhalb von 24 Stunden.",
      address: "Route du Vélodrome 60 1228 Plan-les-Ouates",
      phone: "+41 79 925 22 27",
      email: "info@bektech.ch",
      form: {
        fullName: "Vollständiger Name",
        email: "E-Mail",
        message: "Nachricht",
        placeholderName: "Ihr Name",
        placeholderEmail: "sie@email.ch",
        placeholderMessage: "Beschreiben Sie Ihr Projekt...",
        submit: "Anfrage senden",
        sending: "Wird gesendet...",
        success: "Danke. Ihre Nachricht wurde gesendet.",
        errorWithMessage: (message) => `Ein Fehler ist aufgetreten: ${message}`,
        errorGeneric: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        defaultSendError: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
      },
    },
    footer: {
      description:
        "Fliesen, Bodenbeläge, Mosaik, Abbruch, Vorbereitung und leichte Maurerarbeiten für Privat- und Geschäftskunden.",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      addressLines: ["Route du Vélodrome 60", "1228 Plan-les-Ouates", "+41 79 925 22 27", "info@bektech.ch"],
      credit: "Website erstellt von",
      aria: {
        phone: "Telefon",
        email: "E-Mail",
        instagram: "Instagram",
        tiktok: "TikTok",
      },
    },
    privacy: {
      kicker: "Datenschutzerklärung",
      title: "Datenschutzerklärung",
      intro:
        "Diese Richtlinie erklärt, wie Bektech Bekteshi Ihre Daten erhebt und verarbeitet, wenn Sie die Website www.bektech.ch nutzen.",
      sections: [
        {
          title: "Erhobene Daten",
          body:
            "Wenn Sie das Kontaktformular nutzen, erheben wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht. Technische Daten (z. B. IP-Adresse und Zugriffsprotokolle) können ebenfalls aus Sicherheits- und Betriebsgründen erfasst werden.",
        },
        {
          title: "Zwecke der Verarbeitung",
          body:
            "Ihre Informationen werden verwendet, um Ihre Anfrage zu beantworten, eine Offerte zu erstellen, Ihr Projekt zu begleiten und die Website-Erfahrung zu verbessern.",
        },
        {
          title: "Cookies",
          body:
            "Die Website kann technische Cookies verwenden, die für den Betrieb erforderlich sind. Wenn Cookies zur Reichweitenmessung hinzugefügt werden, wird Ihre Zustimmung eingeholt.",
        },
        {
          title: "Weitergabe und Aufbewahrung",
          body:
            "Ihre Daten werden nicht verkauft. Sie können an technische Dienstleister weitergegeben werden, die für den Betrieb der Website erforderlich sind (Hosting, E-Mail-Versand). Sie werden nur so lange aufbewahrt, wie es für den vorgesehenen Zweck notwendig ist.",
        },
        {
          title: "Ihre Rechte",
          body:
            "Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen, indem Sie uns unter info@bektech.ch kontaktieren.",
        },
      ],
      lastUpdated: "Letzte Aktualisierung: 22. Januar 2026",
    },
    terms: {
      kicker: "Nutzungsbedingungen",
      title: "Allgemeine Nutzungsbedingungen",
      intro: "Durch den Zugriff auf www.bektech.ch akzeptieren Sie diese Bedingungen.",
      sections: [
        {
          title: "1. Zweck der Website",
          body:
            "Die Website www.bektech.ch dient der Darstellung der Dienstleistungen und Aktivitäten von Bektech Bekteshi. Die angezeigten Informationen dienen ausschließlich der Information.",
        },
        {
          title: "2. Kein Vertragsangebot",
          body:
            "Die Inhalte der Website stellen kein Vertragsangebot dar. Ein Vertrag kommt erst nach Annahme einer Offerte, eines schriftlichen Vertrags oder einer von Bektech Bekteshi bestätigten Vereinbarung zustande.",
        },
        {
          title: "3. Geistiges Eigentum",
          body:
            "Alle Elemente dieser Website (Texte, Bilder, Logos, Layout, Inhalte) sind durch Urheberrechte und/oder andere Schutzrechte geschützt. Jede Vervielfältigung, Darstellung, Änderung oder Verbreitung, ganz oder teilweise, ohne vorherige Genehmigung ist untersagt.",
        },
        {
          title: "4. Haftung",
          body:
            "Wir bemühen uns um genaue und aktuelle Informationen, übernehmen jedoch keine Gewähr für Vollständigkeit oder Fehlerfreiheit. Bektech Bekteshi haftet nicht für direkte oder indirekte Schäden im Zusammenhang mit Zugriff oder Nutzung der Website, einschließlich bei Unterbrechungen, Fehlern oder temporärer Nichtverfügbarkeit.",
        },
        {
          title: "5. Externe Links",
          body:
            "Die Website kann Links zu Drittanbietern enthalten. Bektech Bekteshi hat keine Kontrolle über diese Seiten und übernimmt keine Verantwortung für deren Inhalte, Richtlinien oder Praktiken.",
        },
        {
          title: "6. Anwendbares Recht und Gerichtsstand",
          body:
            "Diese Bedingungen unterliegen dem Schweizer Recht. Gerichtsstand ist die Schweiz, vorbehaltlich zwingender gesetzlicher Bestimmungen.",
        },
        {
          title: "7. Kontakt",
          body:
            "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter: info@bektech.ch.",
        },
      ],
      lastUpdated: "Letzte Aktualisierung: 22. Januar 2026",
    },
  },
};
