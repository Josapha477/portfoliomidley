# Portfolio Midley Joseph (React + Vite + Tailwind)

Site d'une page pour présenter vos services de sites vitrines à des commerçants.
Le téléphone du début de page affiche vos deux démos (Lakou et Vaval), jouables sur place.

## Commandes

```bash
npm install        # Node 18 ou plus récent
npm run dev        # http://localhost:5173
npm run build      # site final dans /dist
npm run preview    # tester le site généré
```

## À remplacer avant de publier

| Quoi | Où |
| --- | --- |
| Adresse des démos (sinon « bientôt en ligne ») | `src/data/demos.js`, champ `url` |
| Votre photo (sinon vos initiales) | mettez `midley.jpg` dans `public/`, puis `photo: "/midley.jpg"` dans `src/data/profile.js` |
| Adresse publique du site (aperçu WhatsApp) | `.env`, ligne `VITE_SITE_URL=` (sans « / » à la fin) |
| Prix, forfaits, options (provisoires, en USD) | `src/data/offers.js` |
| Réponses aux questions, étapes | `src/data/content.js` |
| Numéro WhatsApp, délai | `src/data/profile.js` |

## Mettre en ligne (gratuit)

1. `npm run build`, puis glissez le dossier `dist` sur https://app.netlify.com/drop
2. Copiez l'adresse obtenue dans `.env` (`VITE_SITE_URL`), refaites `npm run build` et déposez de nouveau `dist`.
3. Testez l'aperçu en vous envoyant le lien sur WhatsApp.

## Architecture

```
src/
├── App.jsx, main.jsx, index.css
├── data/       profile.js · demos.js · offers.js · content.js
├── lib/        whatsapp.js (liens et messages) · format.js
└── components/ Header · Hero · DemoPhone · Benefits · Packages
                Method · About · Faq · Contact · Footer · Button
```
