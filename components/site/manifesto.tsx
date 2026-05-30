"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const PARAGRAPHS = [
  "Nexus è uno studio piccolo. L'AI fa il lavoro pesante, noi decidiamo ogni scelta: cosa dire, come dirlo, che faccia deve avere il tuo sito.",
  "Oggi chiunque genera un sito con un prompt. Il difficile non è farlo: è farne uno che non sembri identico ad altri mille. Lì serve una mano che dirige, non un pulsante che improvvisa.",
  "Per questo lavoriamo a fasi: brief, design, asset, build, review. Vedi ogni passaggio e sai sempre a che punto siamo. Quando ti consegniamo il sito non ci sono sorprese — solo quello che avevamo deciso insieme.",
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section
      id="metodo"
      data-theme="light"
      className="bg-cream px-6 py-28 md:py-40"
    >
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.3em] text-muted-body"
        >
          Il metodo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mb-12 font-serif text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.01em] text-ink md:mb-16"
        >
          Niente magia. Un metodo.
        </motion.h2>

        <div className="space-y-8">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.18,
              }}
              className="max-w-[60ch] text-[1.15rem] leading-[1.65] text-muted-body md:text-[1.3rem]"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
