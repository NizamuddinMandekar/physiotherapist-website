import { PROCESS_STEPS } from "@/lib/site-data";
import { DynamicIcon } from "@/components/icons/icon-map";
import { Reveal } from "@/components/motion/reveal";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="text-balance mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            From first message to full recovery
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-border lg:block"
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="group relative">
              <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <DynamicIcon name={step.icon} className="h-6 w-6 text-primary" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
