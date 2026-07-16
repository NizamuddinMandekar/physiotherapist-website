"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, waLink } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        animate={{
          paddingTop: scrolled ? 14 : 28,
          paddingBottom: scrolled ? 14 : 28,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ease-out sm:px-8 ${
          scrolled
            ? "mt-3 max-w-5xl rounded-2xl border border-border bg-surface/85 shadow-lg shadow-black/[0.04] backdrop-blur-md"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse size={18} />
          </span>
          <span className="font-heading text-[15px] font-bold leading-tight text-foreground sm:text-base">
            {SITE.doctorName}
            <span className="block text-[10.5px] font-medium tracking-wide text-muted-foreground">
              PHYSIOTHERAPY AT YOUR DOORSTEP
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-border bg-surface shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-surface-muted"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={waLink("Hi Dr. Akshada, I'd like to book a physiotherapy home visit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
