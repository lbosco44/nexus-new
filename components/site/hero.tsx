"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll progress through the hero section (0 = top, 1 = scrolled one viewport).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The 3D-stand-in logo recedes and fades as you scroll, ceding the stage.
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.18]);
  const logoY = useTransform(scrollYProgress, [0, 0.8], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-ink"
    >
      {/* Atmospheric ground glow — soft, no neon (banlist: niente glow pesante) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 120%, rgba(184,255,61,0.06) 0%, rgba(10,10,10,0) 55%)",
        }}
      />
      {/* Hairline grid texture, extremely subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f5f3ee 1px, transparent 1px), linear-gradient(to bottom, #f5f3ee 1px, transparent 1px)",
          backgroundSize: "min(8vw, 96px) min(8vw, 96px)",
        }}
      />

      {/* Logo ghost — placeholder for the 3D wireframe (step 2). Sits behind and
          off-axis from the headline, monochrome and faint (NOT lime — lime stays a
          point accent, never a large surface). Recedes on scroll. */}
      <motion.div
        aria-hidden
        style={
          reduce
            ? { opacity: 0.05 }
            : { opacity: logoOpacity, scale: logoScale, y: logoY }
        }
        className="pointer-events-none absolute right-[6vw] top-[10vh] flex items-start justify-end"
      >
        <Image
          src="/logo/nexus-white.svg"
          alt=""
          width={520}
          height={553}
          priority
          className="h-[42vmin] w-auto opacity-[0.06]"
        />
      </motion.div>

      {/* Foreground copy */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mb-7 text-[0.78rem] font-medium uppercase tracking-[0.32em] text-muted"
        >
          Studio web design · Italia
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="max-w-[18ch] font-display text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-cream"
        >
          Stai già guardando un nostro lavoro.
        </motion.h1>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
          Scorri
        </span>
        <span className="h-9 w-px overflow-hidden bg-[#2a2926]">
          <motion.span
            className="block h-3 w-px bg-lime"
            animate={reduce ? undefined : { y: [-12, 36] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
