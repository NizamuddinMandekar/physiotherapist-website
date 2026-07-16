"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration-safe mount guard
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full border border-border bg-surface-muted px-1 transition-colors"
    >
      <motion.span
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
      >
        {isDark ? <Moon size={15} /> : <Sun size={15} />}
      </motion.span>
    </button>
  );
}
