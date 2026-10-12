import { ChevronDown } from "lucide-react";
import { faq } from "../data/content";

// Élément HTML <details> : s'ouvre et se ferme au clavier, sans JavaScript.
export default function Faq() {
  return (
    <section id="questions" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">Vos questions.</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown size={22} aria-hidden="true" className="chevron shrink-0 text-violet transition-transform" />
              </summary>
              <p className="pb-5 text-lg leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
