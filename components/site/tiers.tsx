"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const TIERS = [
  {
    name: "Vetrina essenziale",
    price: "da €—", // placeholder: prezzo da confermare pre-go-live
    meta: "3-5 giorni",
    line: "Il sito che ti serve per esistere online, fatto bene.",
    includes: [
      "Una o poche pagine, su misura",
      "Curato su mobile e desktop",
      "SEO di base + presenza su Google",
      "Pronto in pochi giorni",
    ],
  },
  {
    name: "Sito completo + interazioni",
    price: "da €—",
    meta: "1-2 settimane",
    line: "Il sito che racconta tutto e si fa ricordare.",
    includes: [
      "Più pagine, struttura completa",
      "Animazioni e interazioni su misura",
      "SEO completa + dati strutturati",
      "Copy scritto da noi",
    ],
  },
  {
    name: "Restyling SEO-preserving",
    price: "da €—",
    meta: null,
    line: "Hai già un sito che funziona su Google? Lo rifacciamo senza perdere posizioni.",
    includes: [
      "Nuovo design, stesso ranking",
      "Migrazione controllata",
      "Redirect e SEO preservata",
      "Zero buchi di traffico",
    ],
  },
];

const ADDONS = [
  { name: "Manutenzione mensile", price: "da €—/mese" },
  { name: "Audit one-shot", price: "€—" },
  { name: "Copy + SEO da soli", price: "su preventivo" },
];

function TierBlock({
  tier,
  index,
  active,
}: {
  tier: (typeof TIERS)[number];
  index: number;
  active: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
      className="flex flex-col border-t border-border-dark pt-8"
    >
      <div className="mb-1 flex items-baseline gap-3">
        <span className="text-[0.8rem] tabular-nums text-muted">0{index + 1}</span>
        <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight text-cream">
          {tier.name}
        </h3>
      </div>

      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-display text-[1.15rem] font-medium text-lime">
          {tier.price}
        </span>
        {tier.meta && (
          <span className="text-[0.85rem] text-muted">· {tier.meta}</span>
        )}
      </div>

      <p className="mb-6 text-[0.98rem] leading-relaxed text-muted">
        {tier.line}
      </p>

      <ul className="mt-auto space-y-2.5">
        {tier.includes.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[0.92rem] leading-snug text-cream/80"
          >
            <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-lime" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Tiers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id="iniziamo" className="bg-ink px-6 py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-5 font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-cream"
          >
            Quale Nexus fa per te?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-[1.1rem] leading-relaxed text-muted"
          >
            Tre punti di partenza chiari. Se non rientri in nessuno, ne parliamo.
          </motion.p>
        </div>

        {/* 3 paritari, mai gerarchia "scegli questo" */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <TierBlock key={t.name} tier={t} index={i} active={inView} />
          ))}
        </div>

        {/* Custom enterprise — 4° blocco più sobrio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-border-dark pt-8 md:flex-row md:items-center"
        >
          <div>
            <h3 className="font-display text-[1.3rem] font-semibold tracking-tight text-cream">
              Custom enterprise
            </h3>
            <p className="mt-1 text-[0.98rem] text-muted">
              Progetto fuori standard? Raccontacelo e troviamo la strada.
            </p>
          </div>
          <span className="font-display text-[1.15rem] font-medium text-cream">
            Parliamone.
          </span>
        </motion.div>

        {/* Add-on subordinati */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
          className="mt-16 rounded-xl border border-border-dark/60 p-6 md:p-8"
        >
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-muted">
            Add-on
          </span>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-3">
            {ADDONS.map((a) => (
              <div
                key={a.name}
                className="flex items-baseline justify-between gap-3 border-b border-border-dark/50 pb-2"
              >
                <span className="text-[0.92rem] text-cream/80">{a.name}</span>
                <span className="text-[0.85rem] text-muted">{a.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA solid lime — primo bottone pieno del sito (energia crescente) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 rounded-md bg-lime px-7 py-3.5 font-display text-[1.05rem] font-medium text-on-lime transition-colors duration-200 hover:bg-lime-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:bg-lime-pressed"
          >
            Iniziamo
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
