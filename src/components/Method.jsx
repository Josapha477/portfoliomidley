import { steps } from "../data/content";
import { profile } from "../data/profile";

// Ici la numérotation est justifiée : ce sont de vraies étapes, dans l'ordre.
export default function Method() {
  return (
    <section id="methode" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Comment ça se passe.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          En {profile.delivery}, de la première discussion à la mise en ligne.
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sun font-display text-xl font-extrabold"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-lg leading-relaxed text-muted">{step.text}</p>
                <p className="mt-2 font-semibold text-violet">{step.ask}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
