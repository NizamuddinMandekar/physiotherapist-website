"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

export function WhatsAppFloatButton() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-64 rounded-2xl border border-border bg-surface p-4 shadow-xl"
          >
            <p className="flex items-center gap-1.5 font-heading text-sm font-semibold text-foreground">
              <WhatsAppIcon className="h-4 w-4" />
              Chat with {SITE.doctorName}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Ask about a condition or book a home visit usually replies within minutes.
            </p>
            <a
              href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Start chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close WhatsApp panel" : "Open WhatsApp chat"}
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          show ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0, pointerEvents: "none" }
        }
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.55)]"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-40" />
        )}
        {open ? <X size={24} /> : <MessageCircle className="h-7 w-7" fill="currentColor" />}
      </motion.button>
    </div>
  );
}
