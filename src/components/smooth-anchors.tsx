"use client";

import { useEffect } from "react";

// The app router swallows the browser's native fragment scroll for
// same-page hash links, so anchor navigation is handled manually here.
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
