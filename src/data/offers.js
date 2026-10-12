// ─────────────────────────────────────────────────────────────
// Forfaits et options. PRIX PROVISOIRES en dollars américains (USD) :
// ajustez "price" selon votre réalité. Le site affiche "USD" pour éviter
// toute confusion avec le « dollar haïtien » (5 gourdes).
// ─────────────────────────────────────────────────────────────
export const packages = [
  {
    id: "vitrine",
    name: "Vitrine",
    forWho: "Pour présenter votre commerce",
    price: 100,
    delay: "Environ 1 semaine",
    recommended: false,
    features: [
      "Une page : présentation, photos, horaires, adresse",
      "Bouton WhatsApp bien visible",
      "Affichage soigné sur téléphone",
      "Mise en ligne incluse",
    ],
  },
  {
    id: "boutique",
    name: "Boutique ou menu",
    forWho: "Pour montrer vos produits ou vos plats",
    price: 200,
    delay: "1 à 2 semaines",
    recommended: true,
    features: [
      "Tout le forfait Vitrine",
      "Catalogue ou menu jusqu'à 30 articles",
      "Filtres par catégorie",
      "Une fiche détaillée par article",
      "Message WhatsApp prérempli avec l'article",
    ],
  },
  {
    id: "mesure",
    name: "Sur mesure",
    forWho: "Pour un restaurant ou une boutique plus ambitieuse",
    price: 350,
    delay: "2 semaines",
    recommended: false,
    features: [
      "Tout le forfait Boutique ou menu",
      "Commande ou réservation envoyée sur WhatsApp",
      "Plat du jour, recherche, « ouvert maintenant »",
      "Jusqu'à 60 articles",
      "Un mois de petites modifications inclus",
    ],
  },
];

export const options = [
  { label: "Nom de domaine (.com)", detail: "Environ 15 USD par an, payés directement par vous. Je l'installe." },
  { label: "Modifications après livraison", detail: "10 USD par mois, ou à la demande." },
  { label: "Photos de vos produits", detail: "Sur devis." },
];
