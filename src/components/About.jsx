import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="apropos" className="bg-lilac">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[auto_1fr] md:gap-16 md:py-24">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Portrait de ${profile.name}`}
            className="mx-auto aspect-square w-56 rounded-full object-cover sm:w-64"
          />
        ) : (
          <div
            role="img"
            aria-label={`Initiales de ${profile.name}`}
            className="mx-auto flex aspect-square w-56 items-center justify-center rounded-full bg-violet font-display text-7xl font-extrabold text-white sm:w-64"
          >
            {profile.initials}
          </div>
        )}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">Qui je suis.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Je m'appelle {profile.name}, je vis à {profile.city.split(",")[0]}. J'ai {profile.experience.toLowerCase()} et je me consacre aujourd'hui aux sites des commerces d'ici : boutiques, restaurants, petits
            magasins.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Je travaille avec des outils modernes (React, Tailwind CSS) pour que votre site soit rapide et
            agréable sur téléphone. Mon but est simple : que vous receviez plus de messages de clients.
          </p>
        </div>
      </div>
    </section>
  );
}
