"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Video, MoreVertical, Send } from "lucide-react";
import { WHATSAPP_BOT_SCRIPT } from "@/lib/site-data";

const TYPE_DELAY = 900;
const READ_DELAY = 1500;
const RESTART_DELAY = 2600;

export function WhatsAppBotDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const total = WHATSAPP_BOT_SCRIPT.length;

    if (visibleCount >= total) {
      timeoutRef.current = setTimeout(() => {
        setVisibleCount(0);
      }, RESTART_DELAY);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    const next = WHATSAPP_BOT_SCRIPT[visibleCount];
    const isBotLike = next.from === "bot" || next.from === "options";

    if (isBotLike) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- drives the scripted chat timeline, not syncing external state
      setTyping(true);
      timeoutRef.current = setTimeout(() => {
        setTyping(false);
        setVisibleCount((c) => c + 1);
      }, TYPE_DELAY);
    } else {
      timeoutRef.current = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, READ_DELAY);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [visibleCount]);

  const visibleMessages = WHATSAPP_BOT_SCRIPT.slice(0, visibleCount);

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-[#e9dfd3] shadow-2xl dark:bg-[#0b141a]">
        <div className="flex items-center gap-3 bg-[#0d9488] px-4 py-3.5 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
            AP
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold leading-tight">
              Dr. Akshada &middot; Assistant
            </p>
            <p className="text-[11px] text-white/80">
              {typing ? "typing…" : "online"}
            </p>
          </div>
          <Video size={17} className="opacity-80" />
          <Phone size={16} className="opacity-80" />
          <MoreVertical size={17} className="opacity-80" />
        </div>

        <div className="relative flex h-[380px] flex-col gap-2.5 overflow-hidden px-3.5 py-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <AnimatePresence initial={false}>
            {visibleMessages.map((msg, i) => {
              if (msg.from === "options") {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap gap-2 self-start"
                  >
                    {msg.options.map((opt) => (
                      <span
                        key={opt}
                        className="rounded-full border border-[#0d9488]/40 bg-white px-3 py-1.5 text-[11.5px] font-medium text-[#0d9488] shadow-sm dark:bg-[#1f2c34] dark:text-[#5eead4]"
                      >
                        {opt}
                      </span>
                    ))}
                  </motion.div>
                );
              }

              const isUser = msg.from === "user";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug shadow-sm ${isUser
                      ? "self-end rounded-br-sm bg-[#d9fdd3] text-[#111b21] dark:bg-[#005c4b] dark:text-white"
                      : "self-start rounded-bl-sm bg-white text-[#111b21] dark:bg-[#1f2c34] dark:text-white"
                    }`}
                >
                  {msg.text}
                </motion.div>
              );
            })}

            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white px-3.5 py-3 shadow-sm dark:bg-[#1f2c34]"
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      delay: d * 0.15,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 bg-[#f0f0f0] px-3.5 py-3 dark:bg-[#1f2c34]">
          <div className="flex-1 rounded-full bg-white px-4 py-2 text-xs text-muted-foreground dark:bg-[#2a3942]">
            Message Dr. Akshada&apos;s assistant…
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d9488] text-white">
            <Send className="h-4 w-4" />
          </span>
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Live preview of the WhatsApp booking assistant. Tap the button below to try the real thing.
      </p>
    </div>
  );
}
