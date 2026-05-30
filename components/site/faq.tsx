"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "In quanto tempo è pronto?",
    a: "Dipende dal tier: dalla vetrina essenziale in 3-5 giorni al sito completo in 1-2 settimane. Il conto parte da quando hai compilato il questionario, non da quando ci chiami.",
  },
  {
    q: "Cosa include esattamente un tier?",
    a: "Ogni tier ha cosa include e cosa no, scritto in chiaro nella pagina Iniziamo. Niente costi nascosti che spuntano a lavoro finito.",
  },
  {
    q: "Fate siti anche in inglese?",
    a: "Sì. L'inglese è un'opzione: utile se hai clienti all'estero o lavori fuori dall'Italia.",
  },
  {
    q: "Il dominio chi lo gestisce?",
    a: "Come preferisci. Se ne hai già uno lo usiamo, se non ce l'hai te lo prendiamo noi. Resta sempre intestato a te.",
  },
  {
    q: "E dopo la consegna, chi aggiorna il sito?",
    a: "Puoi gestirlo tu o lasciarlo a noi con la manutenzione mensile. Nessun vincolo: il sito è tuo dal primo giorno.",
  },
];

function Item({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-light">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-6 py-7 text-left"
        >
          <span className="font-display text-[clamp(1.25rem,2.5vw,1.7rem)] font-medium leading-tight tracking-tight text-ink">
            {faq.q}
          </span>
          <span
            className={`relative mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden
          >
            <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-ink" />
            <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-ink" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[60ch] pb-7 text-[1.05rem] leading-relaxed text-muted-body">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section data-theme="light" className="bg-cream px-6 py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-[0.78rem] font-medium uppercase tracking-[0.3em] text-muted-body md:mb-16"
        >
          Dubbi veloci
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="border-t border-border-light"
        >
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
