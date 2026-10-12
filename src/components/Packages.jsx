import { Check } from "lucide-react";
import { options, packages } from "../data/offers";
import { formatUsd } from "../lib/format";
import { packageMessage, whatsappLink } from "../lib/whatsapp";
import Button from "./Button";

export default function Packages() {
  return (
    <section id="forfaits" className="bg-lilac">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Trois forfaits, un prix clair.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Prix en dollars américains (USD). Vous connaissez le total avant de commencer.
        </p>

        <ul className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-col-3">
          {packages.map((pkg) => (
            <li
              key={pkg.id}
              className={`flex flex-col rounded-3xl p-7 ${
                pkg.recommended ? "on-dark bg-violet text-white md:-my-4 md:py-11" : "bg-white ring-1 ring-ink/10"
              }`}
            >
              {pkg.recommended && (
                <p className="mb-3 self-start rounded-full bg-sun px-3 py-1 text-sm font-bold text-ink">Recommandé</p>
              )}
              <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
              <p className={`mt-1 ${pkg.recommended ? "text-white/85" : "text-muted"}`}>{pkg.forWho}</p>
              <p className="mt-6 font-display text-5xl font-extrabold">{formatUsd(pkg.price)}</p>
              <p className={`mt-1 text-sm ${pkg.recommended ? "text-white/85" : "text-muted"}`}>
                Livraison : {pkg.delay.toLowerCase()}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check size={20} className={`mt-0.5 shrink-0 ${pkg.recommended ? "text-sun" : "text-violet"}`} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.recommended ? "sun" : "primary"}
                href={whatsappLink(packageMessage(pkg))}
                external
                className="mt-8 w-full"
              >
                Choisir ce forfait
              </Button>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold">En option</h3>
          <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {options.map((o) => (
              <div key={o.label} className="grid gap-1 py-4 sm:grid-cols-[18rem_1fr]">
                <dt className="font-semibold">{o.label}</dt>
                <dd className="text-muted">{o.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
