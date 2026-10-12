import { navLinks, profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl font-extrabold">{profile.name}</p>
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/70 sm:px-6">
          © {new Date().getFullYear()} {profile.name}. Les démos Lakou et Vaval sont des commerces fictifs.
        </p>
      </div>
    </footer>
  );
}
