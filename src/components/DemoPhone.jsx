import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { demos } from "../data/demos";

// Dessin décoratif du « poster » affiché avant le lancement de la démo
function PosterArt({ demo }) {
  const { a, b, c } = demo.colors;
  if (demo.art === "arches") {
    return (
      <div className="flex items-end justify-center gap-2" aria-hidden="true">
        <div className="h-24 w-16 rounded-t-full" style={{ backgroundColor: a }} />
        <div className="h-32 w-16 rounded-t-full" style={{ backgroundColor: b }} />
        <div className="h-20 w-16 rounded-t-full" style={{ backgroundColor: c }} />
      </div>
    );
  }
  const palette = [a, b, c, "#f4f8f2"];
  return (
    <div className="grid grid-cols-4 gap-1.5 px-2" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="aspect-square rounded-sm" style={{ backgroundColor: palette[(i * 3 + Math.floor(i / 4)) % 4] }} />
      ))}
    </div>
  );
}

export default function DemoPhone() {
  const [activeId, setActiveId] = useState(demos[0].id);
  const [launched, setLaunched] = useState({}); // démos déjà lancées : { lakou: true }
  const demo = demos.find((d) => d.id === activeId);
  const isRunning = Boolean(launched[demo.id] && demo.url);

  return (
    <div>
      <div role="group" aria-label="Choisir une démo" className="mb-6 flex justify-center gap-2">
        {demos.map((d) => (
          <button
            key={d.id}
            type="button"
            aria-pressed={d.id === activeId}
            onClick={() => setActiveId(d.id)}
            className={`min-h-11 rounded-full border-2 px-5 font-semibold transition-colors ${
              d.id === activeId ? "border-ink bg-ink text-white" : "border-ink/25 bg-white hover:border-ink"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Cadre de téléphone */}
      <div className="relative mx-auto w-[min(100%,17.5rem)] rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-2xl">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink" aria-hidden="true" />
        <div className="relative aspect-[9/18] overflow-hidden rounded-[1.9rem] bg-white">
          {isRunning ? (
            <iframe
              key={demo.id}
              src={demo.url}
              title={`Démo ${demo.name}, ${demo.type}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              className="h-full w-full border-0"
            />
          ) : (
            <div className="flex h-full flex-col justify-between p-6 pt-10 text-white" style={{ backgroundColor: demo.colors.bg }}>
              <PosterArt demo={demo} />
              <div>
                <p className="font-display text-3xl font-extrabold">{demo.name}</p>
                <p className="mt-1 text-sm text-white/85">{demo.type}</p>
                {demo.url ? (
                  <button
                    type="button"
                    onClick={() => setLaunched((prev) => ({ ...prev, [demo.id]: true }))}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white font-semibold text-ink hover:bg-sun"
                  >
                    <Play size={18} aria-hidden="true" /> Essayer la démo
                  </button>
                ) : (
                  <p className="mt-5 rounded-full bg-white/15 px-4 py-3 text-center text-sm font-semibold">
                    Démo bientôt en ligne
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-sm text-center">
        <p className="text-muted">{demo.summary}</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {demo.features.map((f) => (
            <li key={f} className="rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-ink/15">
              {f}
            </li>
          ))}
        </ul>
        {demo.url && (
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-violet underline underline-offset-4"
          >
            Ouvrir en plein écran <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
          </a>
        )}
      </div>
    </div>
  );
}
