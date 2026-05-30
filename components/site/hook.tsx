"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function Hook() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-cream px-6 py-32">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(2rem,5.5vw,3.75rem)] italic leading-[1.1] tracking-[-0.01em] text-ink-warm"
        >
          Ora immagina che sia il tuo.
        </motion.p>
      </div>
    </section>
  );
}
