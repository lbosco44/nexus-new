"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV = [
  { label: "Il metodo", href: "#metodo" },
  { label: "Lavori", href: "#lavori" },
  { label: "Iniziamo", href: "#iniziamo" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    let ticking = false;

    const sample = () => {
      ticking = false;
      setScrolled(window.scrollY > 24);

      // Find which section sits just below the header bar; invert on light bg.
      // Probe below the header height (h-20 = 80px) so we don't hit the fixed
      // header itself, which would mask the section underneath.
      const probeY = 92;
      const el = document.elementFromPoint(window.innerWidth / 2, probeY);
      const section = el?.closest<HTMLElement>("[data-theme]");
      setOnLight(section?.dataset.theme === "light");
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sample);
      }
    };

    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Color tokens flip with the underlying section. Full class strings only
  // (Tailwind can't see runtime-interpolated names like `hover:${fg}`).
  const fg = onLight ? "text-ink" : "text-cream";
  const navLink = onLight
    ? "text-ink/70 hover:text-ink"
    : "text-cream/80 hover:text-cream";
  const enLink = onLight
    ? "text-muted-body hover:text-ink"
    : "text-muted hover:text-cream";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? onLight
            ? "border-b border-border-light bg-cream/80 backdrop-blur-md"
            : "border-b border-[#1d1c19] bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="relative flex items-center" aria-label="Nexus, home">
          <Image
            src={onLight ? "/logo/nexus-black.svg" : "/logo/nexus-white.svg"}
            alt="Nexus"
            width={34}
            height={36}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <div className="flex items-center gap-7 md:gap-9">
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative text-[0.95rem] font-medium transition-colors duration-200 ${navLink}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-lime transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-[0.8rem] font-medium tracking-wide">
            <span className={fg}>IT</span>
            <span className={onLight ? "text-ink/30" : "text-muted/50"} aria-hidden>
              /
            </span>
            <a
              href="#"
              className={`${enLink} transition-colors duration-200`}
              aria-label="Switch to English"
            >
              EN
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
