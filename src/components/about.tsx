import Image from "next/image";
import { GraduationCap, HeartHandshake, Home as HomeIcon } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";

const POINTS = [
  {
    icon: GraduationCap,
    title: "B.P.Th. qualified",
    description:
      "Trained physiotherapist with hands-on experience across orthopaedic, neurological and post-surgical rehabilitation.",
  },
  {
    icon: HomeIcon,
    title: "Home-first approach",
    description:
      "Every assessment and session happens where you're most comfortable no clinic commute, no waiting rooms.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized care plans",
    description:
      "Treatment is designed around your condition, pace and goals, and adapts as your recovery progresses.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <Image
              src="/images/dr-akshada-about.png"
              alt={`${SITE.doctorName} in her clinic coat`}
              fill
              sizes="(max-width: 1024px) 80vw, 32vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              About your physiotherapist
            </span>
            <h2 className="text-balance mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Care that meets you where recovery actually happens at home
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {SITE.doctorName} ({SITE.credentials}) brings clinic-grade
              physiotherapy directly to your home, combining a thorough,
              personalized assessment with manual therapy, electrotherapy and
              guided exercise. From post-surgical recovery to chronic pain,
              neurological rehabilitation and paediatric or women&apos;s
              health concerns, every plan is built around your specific
              condition, home environment and pace of recovery.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <point.icon size={19} />
                  </span>
                  <p className="mt-3.5 font-heading text-sm font-bold text-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
