import { MessageCircle } from "lucide-react";
import { profile } from "../data/profile";
import { generalMessage, whatsappLink } from "../lib/whatsapp";
import Button from "./Button";
import DemoPhone from "./DemoPhone";

export default function Hero() {
  return (
    <section id="accueil" className="bg-lilac">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-12 sm:px-6 md:grid-cols-[1.05fr_1fr] md:py-20">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Votre commerce en ligne en {profile.delivery}.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Je crée des sites rapides et faciles à utiliser sur téléphone : vos clients voient vos produits
            ou votre menu, puis vous écrivent directement sur WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="whatsapp" href={whatsappLink(generalMessage)} external icon={MessageCircle}>
              Écrire sur WhatsApp
            </Button>
            <Button variant="outline" href="#forfaits">
              Voir les forfaits
            </Button>
          </div>
          <p className="mt-6 text-muted">
            {profile.name}, {profile.role.toLowerCase()} à {profile.city.split(",")[0]}.
          </p>
        </div>

        <div id="demos" className="relative">
          <div className="absolute -right-4 -top-6 size-40 rounded-full bg-sun" aria-hidden="true" />
          <div className="rise relative" style={{ animationDelay: "0.1s" }}>
            <DemoPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
