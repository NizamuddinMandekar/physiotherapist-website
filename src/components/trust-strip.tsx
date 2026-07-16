import { TRUST_BADGES } from "@/lib/site-data";
import { DynamicIcon } from "@/components/icons/icon-map";
import { StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal";

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-surface/60">
      <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 md:grid-cols-4">
        {TRUST_BADGES.map((badge) => (
          <StaggerItem
            key={badge.label}
            variants={staggerItem}
            className="group flex flex-col items-center gap-2.5 text-center sm:flex-row sm:text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <DynamicIcon name={badge.icon} className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold leading-snug text-foreground sm:text-sm">
              {badge.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
