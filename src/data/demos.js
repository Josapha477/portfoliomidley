// ─────────────────────────────────────────────────────────────
// Vos démos. Une fois Lakou et Vaval en ligne, collez leur adresse
// dans "url" (ex. "https://lakou-demo.netlify.app").
// Tant que "url" est vide, le téléphone affiche « bientôt en ligne »
// et aucun lien cassé n'est montré.
// ─────────────────────────────────────────────────────────────
export const demos = [
  {
    id: "lakou",
    name: "Lakou",
    type: "Boutique de vêtements et accessoires",
    url: "", // ← À REMPLACER
    summary: "Un catalogue avec filtres, une fiche par article et un bouton WhatsApp qui envoie l'article choisi.",
    features: ["Filtres par catégorie", "Choix de la taille", "Message WhatsApp prérempli"],
    art: "arches",
    colors: { bg: "#2036a8", a: "#ffc83d", b: "#c8243b", c: "#ffffff" },
  },
  {
    id: "vaval",
    name: "Vaval",
    type: "Restaurant",
    url: "", // ← À REMPLACER
    summary: "Un menu avec recherche, une commande et une réservation envoyées sur WhatsApp, et l'état « ouvert maintenant ».",
    features: ["Commande par WhatsApp", "Réservation", "Plat du jour"],
    art: "tiles",
    colors: { bg: "#0b3b2e", a: "#c4165a", b: "#ffb627", c: "#2e9e8f" },
  },
];
