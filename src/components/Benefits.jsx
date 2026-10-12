import { MapPin, MessageCircle, Store, Zap } from "lucide-react";
import { benefits } from "../data/content";

const icons = { store: Store, message: MessageCircle, pin: MapPin, zap: Zap };

export default function Benefits() {
  return (
    <section id="avantages" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Ce que vos clients pourront faire.
        </h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {benefits.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="flex gap-5">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-lilac text-violet">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
