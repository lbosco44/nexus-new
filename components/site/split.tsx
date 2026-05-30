"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const TOOLS = ["Claude", "GPT", "Gemini", "fal.ai", "Higgsfield"];

const EASE = [0.22, 1, 0.36, 1] as const;

/** Left panel: the flat, lifeless "AI alone" flow. Deliberately monochrome. */
function GenericDiagram({ active }: { active: boolean }) {
  const steps = ["1 tool", "1 prompt", "sito generico"];
  return (
    <svg
      viewBox="0 0 360 300"
      className="h-auto w-full"
      role="img"
      aria-label="L'AI da sola: un tool, un prompt, un sito generico."
    >
      {steps.map((label, i) => {
        const y = 70 + i * 80;
        return (
          <g key={label}>
            {i < steps.length - 1 && (
              <motion.line
                x1={180}
                y1={y + 22}
                x2={180}
                y2={y + 58}
                stroke="#3a382f"
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={active ? { pathLength: 1, opacity: 1 } : undefined}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
              />
            )}
            <motion.g
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : undefined}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <rect
                x={100}
                y={y}
                width={160}
                height={44}
                rx={6}
                fill="none"
                stroke="#3a382f"
                strokeWidth={1.5}
              />
              <text
                x={180}
                y={y + 27}
                textAnchor="middle"
                className="fill-muted"
                style={{ fontSize: 15, fontFamily: "var(--font-sans)" }}
              >
                {label}
              </text>
            </motion.g>
          </g>
        );
      })}
    </svg>
  );
}

/** Right panel: tool nodes converging into "il tuo sito". The orchestration. */
function OrchestraDiagram({ active }: { active: boolean }) {
  const cx = 288;
  const cy = 150;
  const nodeX = 92;
  return (
    <svg
      viewBox="0 0 360 300"
      className="h-auto w-full"
      role="img"
      aria-label="L'AI con Nexus: più tool orchestrati convergono in un sito su misura."
    >
      {/* Converging connectors (drawn on scroll) */}
      {TOOLS.map((_, i) => {
        const y = 40 + i * 55;
        return (
          <motion.path
            key={i}
            d={`M ${nodeX + 4} ${y} C 200 ${y}, 210 ${cy}, ${cx - 26} ${cy}`}
            fill="none"
            stroke="#b8ff3d"
            strokeWidth={1.4}
            strokeOpacity={0.55}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={active ? { pathLength: 1, opacity: 1 } : undefined}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.12 }}
          />
        );
      })}

      {/* Tool nodes */}
      {TOOLS.map((label, i) => {
        const y = 40 + i * 55;
        return (
          <motion.g
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={active ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
          >
            <circle cx={nodeX} cy={y} r={4} fill="#b8ff3d" />
            <text
              x={nodeX - 12}
              y={y + 4}
              textAnchor="end"
              className="fill-cream"
              style={{ fontSize: 13.5, fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              {label}
            </text>
          </motion.g>
        );
      })}

      {/* Central output node */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={active ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 + TOOLS.length * 0.12 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <rect
          x={cx - 26}
          y={cy - 26}
          width={52}
          height={52}
          rx={10}
          fill="#b8ff3d"
        />
        <text
          x={cx}
          y={cy - 2}
          textAnchor="middle"
          style={{ fontSize: 11, fontFamily: "var(--font-sans)", fontWeight: 700, fill: "#0a0a0a" }}
        >
          il tuo
        </text>
        <text
          x={cx}
          y={cy + 13}
          textAnchor="middle"
          style={{ fontSize: 11, fontFamily: "var(--font-sans)", fontWeight: 700, fill: "#0a0a0a" }}
        >
          sito
        </text>
      </motion.g>
    </svg>
  );
}

function Panel({
  eyebrow,
  caption,
  dim,
  children,
  delay,
  active,
}: {
  eyebrow: string;
  caption: string;
  dim?: boolean;
  children: React.ReactNode;
  delay: number;
  active: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="flex flex-1 flex-col"
    >
      <span
        className={`mb-6 text-[0.75rem] font-medium uppercase tracking-[0.26em] ${
          dim ? "text-muted/60" : "text-lime"
        }`}
      >
        {eyebrow}
      </span>
      <div
        className={`flex flex-1 items-center justify-center ${
          dim ? "opacity-55" : ""
        }`}
      >
        <div className="w-full max-w-[340px]">{children}</div>
      </div>
      <p
        className={`mt-6 text-[0.98rem] leading-snug ${
          dim ? "text-muted" : "text-cream/85"
        }`}
      >
        {caption}
      </p>
    </motion.div>
  );
}

export function Split() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto mb-16 max-w-[18ch] text-center font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-cream md:mb-24"
        >
          La differenza non è l&apos;AI. È la regia.
        </motion.h2>

        <div className="relative flex flex-col gap-12 md:flex-row md:gap-0">
          <div className="md:pr-12 lg:pr-16">
            <Panel
              eyebrow="L'AI da sola"
              caption="Veloce. E si vede che lo è."
              dim
              delay={0.1}
              active={inView}
            >
              <GenericDiagram active={inView} />
            </Panel>
          </div>

          {/* Divider */}
          <div
            aria-hidden
            className="hidden w-px shrink-0 bg-border-dark md:block"
          />

          <div className="md:pl-12 lg:pl-16">
            <Panel
              eyebrow="L'AI con Nexus"
              caption="Più lento di un click. E molto più tuo."
              delay={0.25}
              active={inView}
            >
              <OrchestraDiagram active={inView} />
            </Panel>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="mx-auto mt-20 max-w-[44ch] text-center text-[1.05rem] leading-relaxed text-muted md:mt-28"
        >
          Gli strumenti sono gli stessi per tutti. Il risultato dipende da chi
          li dirige.
        </motion.p>
      </div>
    </section>
  );
}
