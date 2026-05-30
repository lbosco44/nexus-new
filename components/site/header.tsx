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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-[#1d1c19] bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="relative flex items-center" aria-label="Nexus, home">
          <Image
            src="/logo/nexus-white.svg"
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
                  className="group relative text-[0.95rem] font-medium text-cream/80 transition-colors duration-200 hover:text-cream"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-lime transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

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
      </nav>
    </header>
  );
}
