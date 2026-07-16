"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { SITE, waLink } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-whatsapp/25 blur-3xl"
            />
            <h2 className="text-balance relative mx-auto max-w-2xl font-heading text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl">
              Your recovery doesn&apos;t need a waiting room
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              Message {SITE.doctorName} on WhatsApp and get a personalized
              physiotherapy visit scheduled at your home.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <motion.a
                href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <PhoneCall size={16} />
                {SITE.whatsappDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
