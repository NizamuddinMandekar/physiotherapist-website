"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CONDITION_CATEGORIES } from "@/lib/site-data";
import { DynamicIcon } from "@/components/icons/icon-map";
import { Reveal } from "@/components/motion/reveal";

export function Conditions() {
  const [activeId, setActiveId] = useState(CONDITION_CATEGORIES[0].id);
  const active =
    CONDITION_CATEGORIES.find((c) => c.id === activeId) ?? CONDITION_CATEGORIES[0];

  return (
    <section id="conditions" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Conditions we treat
          </span>
          <h2 className="text-balance mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Ten specialty areas, one doorstep visit
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From orthopaedic pain to neurological and post-surgical rehabilitation,
            explore what&apos;s covered, or message on WhatsApp to check your case.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <Reveal
            delay={0.1}
            className="flex gap-2.5 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:gap-2 lg:overflow-visible lg:pb-0"
          >
            {CONDITION_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors lg:shrink ${isActive
                      ? "border-transparent bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-surface text-foreground hover:bg-surface-muted"
                    }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-white/20" : "bg-primary/10 text-primary"
                      }`}
                  >
                    <DynamicIcon name={cat.icon} className="h-4 w-4" />
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </Reveal>

          <div className="relative min-h-[320px] rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: active.accent }}
                  >
                    <DynamicIcon name={active.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    {active.name}
                  </h3>
                </div>

                <motion.ul
                  className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                >
                  {active.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
