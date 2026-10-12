import { profile } from "../data/profile";

export function whatsappLink(message) {
  const base = `https://wa.me/${profile.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const generalMessage = `Bonjour ${profile.firstName}, j'ai vu votre portfolio. Je voudrais un site pour mon commerce.`;

export const packageMessage = (pkg) =>
  `Bonjour ${profile.firstName}, je suis intéressé(e) par le forfait « ${pkg.name} » (${pkg.price} USD). Mon commerce : `;
