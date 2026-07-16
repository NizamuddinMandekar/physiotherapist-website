"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { SITE, waLink } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div
        aria-hidden
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-[0.35]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-whatsapp/15 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-sm"
          >
            <Sparkles size={14} />
            Home-visit physiotherapy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-balance mt-5 font-heading text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
          >
            Physiotherapy,{" "}
            <span className="relative whitespace-nowrap text-primary">
              at your doorstep
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 w-full text-secondary"
              >
                <path
                  d="M2 9.5C60 2 240 2 298 9.5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Professional, personalized recovery with{" "}
            <span className="font-semibold text-foreground">
              {SITE.doctorName} ({SITE.credentials})
            </span>
            , covering orthopaedic, neurological, sports, post-surgical and
            paediatric rehabilitation, delivered in the comfort of your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <a
              href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted"
            >
              Call {SITE.whatsappDisplay}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-primary" /> B.P.Th. Qualified
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" /> Home visits near you
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-border/60 bg-surface-muted shadow-2xl shadow-black/10">
            <Image
              src="/images/dr-akshada-hero.png"
              alt={`${SITE.doctorName}, physiotherapist`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-8 hidden w-44 rounded-2xl border border-border bg-surface/95 p-3.5 shadow-xl backdrop-blur sm:block"
          >
            <p className="font-heading text-2xl font-bold text-primary">10+</p>
            <p className="text-xs leading-snug text-muted-foreground">
              Specialty areas treated at home
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -right-4 bottom-10 w-48 rounded-2xl border border-border bg-surface/95 p-3.5 shadow-xl backdrop-blur"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Book instantly
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Chat replies in minutes
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
