// 100 → "100 USD" (espace insécable : le prix ne se coupe jamais)
export const formatUsd = (amount) => `${amount}\u00a0USD`;
