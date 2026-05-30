"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

type Step = {
  file: string;
  title: string;
  body: string;
  tools?: string[];
};

const STEPS: Step[] = [
  {
    file: "brief.md",
    title: "Capiamo cosa ti serve",
    body: "Un questionario o una call. Niente gergo: ci dici chi sei e chi vuoi raggiungere, noi lo traduciamo in un documento di partenza chiaro.",
  },
  {
    file: "design.md",
    title: "Decidiamo la faccia",
    body: "Palette, font, mood, microinterazioni. È la fase che fa la differenza tra un sito e un template — quella su cui non tagliamo mai.",
  },
  {
    file: "asset",
    title: "Creiamo le immagini",
    body: "Foto, grafiche, video se servono: generati su misura per il tuo settore. Mai stock, mai immagini che hai già visto ovunque.",
    tools: ["fal.ai", "Higgsfield", "Midjourney"],
  },
  {
    file: "build",
    title: "Costruiamo il sito",
    body: "Codice vero, moderno, veloce. Niente template gonfio: solo quello che serve, fatto bene.",
    tools: ["Claude", "GPT", "Gemini"],
  },
  {
    file: "review",
    title: "Controlliamo tutto",
    body: "Test su mobile e desktop, velocità, SEO. Sistemiamo prima che tu lo veda online, non dopo.",
  },
];

function StepRow({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });

  return (
    <li ref={ref} className="relative pl-16 md:pl-24">
      {/* Node on the spine */}
      <span className="absolute left-[1.4rem] top-1 flex md:left-[2.15rem]">
        <motion.span
          initial={{ scale: 0.4, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-lime bg-ink"
        >
          <motion.span
            animate={
              inView ? { scale: [1, 2.4], opacity: [0.5, 0] } : undefined
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 rounded-full bg-lime"
          />
        </motion.span>
      </span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="pb-16 md:pb-24"
      >
        <div className="mb-3 flex items-baseline gap-3">
          <span className="text-[0.8rem] font-medium tabular-nums text-muted">
            0{index + 1}
          </span>
          <span className="rounded-[5px] bg-[#17160f] px-2.5 py-1 font-display text-[0.95rem] font-medium tracking-tight text-lime">
            {step.file}
          </span>
        </div>
        <h3 className="mb-3 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight tracking-[-0.01em] text-cream">
          {step.title}
        </h3>
        <p className="max-w-[52ch] text-[1.02rem] leading-[1.6] text-muted">
          {step.body}
        </p>

        {step.tools && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[0.72rem] uppercase tracking-[0.2em] text-muted/70">
              Nel setup
            </span>
            {step.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-dark px-3 py-1 text-[0.8rem] font-medium text-cream/85"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </li>
  );
}

export function System() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-20% 0px" });

  // The connective spine "draws" itself as the section scrolls through view.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        <div ref={headRef} className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.3em] text-muted"
          >
            Il sistema
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mb-6 max-w-[20ch] font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-cream"
          >
            Cinque passaggi, nessuna scatola nera.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={headInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="max-w-[58ch] text-[1.05rem] leading-[1.6] text-muted"
          >
            Dietro ogni fase: Claude, GPT, Gemini, fal.ai, Higgsfield e altri,
            orchestrati a mano.
          </motion.p>
        </div>

        <ol className="relative">
          {/* Spine: faint track + lime fill that scales with scroll */}
          <span
            aria-hidden
            className="absolute bottom-0 left-[1.4rem] top-1 w-px -translate-x-1/2 bg-border-dark md:left-[2.15rem]"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute bottom-0 left-[1.4rem] top-1 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-lime to-lime/30 md:left-[2.15rem]"
          />
          {STEPS.map((step, i) => (
            <StepRow key={step.file} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
