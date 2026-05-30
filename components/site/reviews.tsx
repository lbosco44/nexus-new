"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

// DUMMY placeholder reviews — NON pubblicare. Sostituire con recensioni reali
// prima del go-live (vedi COPY.md sez. 8). Nessuna recensione reale al lancio.
const REVIEWS = [
  {
    quote:
      "Recensione segnaposto uno: testo finto per riempire il blocco e vedere come respira la sezione su una citazione lunga. Da sostituire prima del go-live.",
    name: "Nome Cognome",
    role: "Ruolo (segnaposto)",
  },
  {
    quote:
      "Recensione segnaposto due, più corta, per testare il layout su lunghezze diverse.",
    name: "Nome Cognome",
    role: "Ruolo (segnaposto)",
  },
];

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [i, setI] = useState(0);

  useEffect(() => {
    if (REVIEWS.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 6500);
    return () => clearInterval(id);
  }, []);

  const r = REVIEWS[i];

  return (
    <section data-theme="light" className="bg-cream px-6 py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-[0.78rem] font-medium uppercase tracking-[0.3em] text-muted-body md:mb-16"
        >
          Cosa dicono
        </motion.p>

        <div className="min-h-[14rem] md:min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <blockquote className="font-serif text-[clamp(1.6rem,3.8vw,2.6rem)] italic leading-[1.25] tracking-[-0.01em] text-ink">
                «{r.quote}»
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-[0.95rem]">
                <span className="font-medium text-ink">{r.name}</span>
                <span className="h-3 w-px bg-ink/25" aria-hidden />
                <span className="text-muted-body">{r.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Progress dots — passive indicator, not arrow controls */}
        {REVIEWS.length > 1 && (
          <div className="mt-10 flex gap-2" aria-hidden>
            {REVIEWS.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === i ? "w-8 bg-ink" : "w-1.5 bg-ink/25"
                }`}
              />
            ))}
          </div>
        )}

        <p className="mt-12 max-w-[44ch] text-[0.85rem] leading-relaxed text-muted-body/70">
          Recensioni di esempio per la fase di costruzione. Al lancio mostriamo
          solo testimonianze reali, raccontate per esteso.
        </p>
      </div>
    </section>
  );
}
