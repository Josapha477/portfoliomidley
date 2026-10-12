import { MessageCircle } from "lucide-react";
import { profile } from "../data/profile";
import { generalMessage, whatsappLink } from "../lib/whatsapp";
import Button from "./Button";

export default function Contact() {
  return (
    <section id="contact" className="on-dark bg-violet text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
        <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Parlons de votre commerce.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Écrivez-moi sur WhatsApp : dites-moi ce que vous vendez, je vous réponds avec une proposition.
        </p>
        <Button variant="sun" href={whatsappLink(generalMessage)} external icon={MessageCircle} className="mt-8">
          Écrire à {profile.firstName}
        </Button>
        <p className="mt-4 text-white/85">
          {profile.whatsappDisplay} · {profile.city}
        </p>
      </div>
    </section>
  );
}
