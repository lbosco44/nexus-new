"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Work = {
  name: string;
  context: string;
  tag: "Progetto in corso" | "Studio interno";
  // asymmetric placement (desktop 12-col grid)
  span: string;
  ratio: string;
  offset?: string;
};

const WORKS: Work[] = [
  {
    name: "Sicily Driver",
    context: "Noleggio con conducente, Sicilia.",
    tag: "Progetto in corso",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Iacono Clima",
    context: "Climatizzazione e assistenza, Siracusa.",
    tag: "Progetto in corso",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
    offset: "md:mt-20",
  },
  {
    name: "I2Motors",
    context: "Compravendita ed export auto verso l'estero.",
    tag: "Progetto in corso",
    span: "md:col-span-5",
    ratio: "aspect-[5/4]",
    offset: "md:-mt-8",
  },
  {
    name: "Fotovolts",
    context: "Fotovoltaico per casa e impresa.",
    tag: "Progetto in corso",
    span: "md:col-span-7",
    ratio: "aspect-[16/9]",
  },
  {
    name: "Enoteca di quartiere",
    context: "Come immaginiamo un sito per una piccola enoteca.",
    tag: "Studio interno",
    span: "md:col-span-8 md:col-start-3",
    ratio: "aspect-[16/8]",
    offset: "md:mt-4",
  },
];

function WorkCard({ work, index }: { work: Work; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const isStudy = work.tag === "Studio interno";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 2) * 0.08 }}
      className={`${work.span} ${work.offset ?? ""} group`}
    >
      <a href="#" className="block">
        {/* Placeholder thumbnail — replace with real device mockup before go-live */}
        <div
          className={`relative ${work.ratio} overflow-hidden rounded-xl border border-border-dark bg-ink-warm`}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f5f3ee 1px, transparent 1px), linear-gradient(to bottom, #f5f3ee 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[clamp(1.5rem,3vw,2.4rem)] font-semibold tracking-tight text-cream/12 transition-colors duration-500 group-hover:text-cream/20">
              {work.name}
            </span>
          </div>
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.72rem] font-medium tracking-wide ${
              isStudy
                ? "border border-border-dark text-muted"
                : "bg-lime text-on-lime"
            }`}
          >
            {work.tag}
          </span>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-cream">
            {work.name}
          </h3>
          <span className="h-px flex-1 translate-y-[-2px] bg-border-dark" />
        </div>
        <p className="mt-1 text-[0.98rem] text-muted">{work.context}</p>
      </a>
    </motion.article>
  );
}

export function Works() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-20% 0px" });

  return (
    <section id="lavori" className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div ref={headRef} className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.3em] text-muted"
          >
            Lavori
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
            className="max-w-[20ch] font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-cream"
          >
            Progetti veri, e qualche studio nostro.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12 md:gap-y-4">
          {WORKS.map((w, i) => (
            <WorkCard key={w.name} work={w} index={i} />
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-display text-[1.15rem] font-medium text-cream"
          >
            <span className="relative">
              Tutti i lavori
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-lime transition-transform duration-300" />
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
