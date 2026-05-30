import Image from "next/image";

const COLUMNS = [
  {
    title: "Studio",
    links: [
      { label: "Il metodo", href: "#metodo" },
      { label: "Lavori", href: "#lavori" },
    ],
  },
  {
    title: "Servizi",
    links: [
      { label: "Vetrina essenziale", href: "#iniziamo" },
      { label: "Sito completo", href: "#iniziamo" },
      { label: "Restyling SEO", href: "#iniziamo" },
      { label: "Manutenzione", href: "#iniziamo" },
      { label: "Audit", href: "#iniziamo" },
    ],
  },
  {
    title: "Contatti",
    links: [
      { label: "email@nexus.example", href: "mailto:email@nexus.example" }, // placeholder
      { label: "+39 — — —", href: "tel:+39" }, // placeholder
      { label: "Italia e clienti italiani all'estero", href: null },
    ],
  },
  {
    title: "Legale",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Cookie", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-dark bg-ink px-6 pb-12 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo/nexus-lime.svg"
              alt="Nexus"
              width={44}
              height={47}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-[22ch] text-[0.95rem] leading-relaxed text-muted">
              Siti su misura, AI-driven con metodo.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted">
                {col.title}
              </h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-[0.92rem] text-cream/75 transition-colors duration-200 hover:text-cream"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-[0.92rem] text-muted">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border-dark pt-8 md:flex-row md:items-center">
          <p className="text-[0.85rem] text-muted">© 2026 Nexus</p>
          <div className="flex items-center gap-2 text-[0.8rem] font-medium tracking-wide">
            <span className="text-cream">IT</span>
            <span className="text-muted/50" aria-hidden>
              /
            </span>
            <a
              href="#"
              className="text-muted transition-colors duration-200 hover:text-cream"
              aria-label="Switch to English"
            >
              EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
