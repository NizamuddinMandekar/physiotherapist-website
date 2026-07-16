"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock, MessageCircle, MessagesSquare } from "lucide-react";
import { waLink } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { WhatsAppBotDemo } from "@/components/whatsapp-bot-demo";
import { Reveal } from "@/components/motion/reveal";

const FEATURES = [
  {
    icon: MessagesSquare,
    title: "Instant WhatsApp booking",
    description:
      "Skip the phone tag by describing your condition and preferred time directly in chat.",
  },
  {
    icon: Clock,
    title: "Fast assistant replies",
    description:
      "The booking assistant responds in seconds and hands off to Dr. Akshada for anything specific.",
  },
  {
    icon: CalendarCheck,
    title: "Visit reminders included",
    description:
      "Appointment confirmations and reminders land right in the same chat thread.",
  },
];

export function WhatsAppSection() {
  return (
    <section
      id="whatsapp"
      className="relative overflow-hidden bg-surface-muted/60 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-whatsapp/10 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-whatsapp-dark dark:text-whatsapp">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp integration
            </span>
            <h2 className="text-balance mt-4 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Booking &amp; support, right where you already chat
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              No apps to install and no portals to log into. A dedicated
              WhatsApp assistant handles the first response instantly, so
              booking a home physiotherapy visit takes less than a minute.
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.08 + i * 0.08} className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon size={19} />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">
                    {f.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <motion.a
              href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-whatsapp/30"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with the assistant now
            </motion.a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <WhatsAppBotDemo />
        </Reveal>
      </div>
    </section>
  );
}
